chrome.storage.local.get(['size', 'store'], response => {
  if (response.size && response.store === 'naked') {
    let atcSuccess = false;
    let size = document.getElementsByClassName('dropdown-item');

    for (let i = 0; i < size.length; i++) {
      let elements = size[i];

      if (elements.innerHTML.includes(response.size)) {
        elements.click();
        atcSuccess = true;
        document
          .getElementsByClassName('btn btn-primary product-form-submit')[0]
          .click();

        break;
      } else if (elements.innerHTML.includes('39')) {
        elements.click();
        atcSuccess = true;
        document
          .getElementsByClassName('btn btn-primary product-form-submit')[0]
          .click();

        break;
      }
    }
    if (atcSuccess === true) {
      checkout('https://www.nakedcph.com/en/cart/view', 'mini-cart', 5);
    }
  } else if (response.size && response.store === 'soto') {
    let atcSuccess = false;
    let size = document.getElementsByClassName('dropdown-item');

    for (let i = 0; i < size.length; i++) {
      let elements = size[i];

      if (elements.innerHTML.includes(response.size)) {
        elements.click();
        atcSuccess = true;
        document
          .getElementsByClassName('btn is-primary product-form-btn')[0]
          .click();

        break;
      } else if (elements.innerHTML.includes('8')) {
        elements.click();
        atcSuccess = true;
        document
          .getElementsByClassName('btn is-primary product-form-btns')[0]
          .click();

        break;
      }
    }
    if (atcSuccess === true) {
      SotoCheckout(
        20,
        'mini-cart-item-count is-active',
        'https://www.sotostore.com/cart/view'
      );
    }
  } else if (response.size && response.store === 'hollywood') {
    let atcSuccess = false;
    let size = document.getElementsByClassName('option');

    for (let i = 0; i < size.length; i++) {
      let elements = size[i];

      if (elements.innerHTML.includes(response.size)) {
        elements.click();
        atcSuccess = true;
        document.getElementsByClassName('large green add-to-cart')[0].click();

        break;
      } else if (elements.innerHTML.includes('39')) {
        elements.click();
        atcSuccess = true;
        document.getElementsByClassName('large green add-to-cart')[0].click();

        break;
      }
    }
    if (atcSuccess === true) {
      HollyCheckout(100, 'button green', `https://www.hollywood.eu/cart/view`);
    }
  } else {
    CaliRootsAtc(response.size);
  }
});

// sleep function returns a promise so we are able to await it in our atc functions
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
// Helper checkout function for naked
async function checkout(url, modal, time) {
  await sleep(time);
  if (!document.getElementById(modal)) {
    checkout(url);
  } else {
    window.location = url;
  }
}
// helper function for soto checkout
async function SotoCheckout(time, name, url) {
  await sleep(time);
  if (!document.getElementsByClassName(name)[0]) {
    SotoCheckout(time, name, url);
  } else {
    window.location = url;
  }
}

// helper functoin for Hollywood checkout
async function HollyCheckout(time, name, url) {
  await sleep(time);
  if (document.getElementsByClassName('count')[0].innerHTML.includes('0')) {
    HollyCheckout(time, name, url);
  } else {
    document.getElementsByClassName(name)[0].click();
  }
}
// Caliroots atc function
async function CaliRootsAtc(Size) {
  await sleep(100);
  // have to wait for Caliroots to fully render in order to be able to select a size and cart. This would check for an element that is displayed once the size option and functionality is fully rendered. If it isnt, itll retry.
  if (!document.getElementById('_hjRemoteVarsFrame')) {
    CaliRootsAtc(Size);
  } else {
    let atcSuccess = false;
    let size = document.getElementsByClassName('option');

    for (let i = 0; i < size.length; i++) {
      let elements = size[i];

      if (elements.innerHTML.includes(Size)) {
        elements.click();
        atcSuccess = true;
        document.getElementsByClassName('add-to-cart-form-submit')[0].click();

        break;
      } else if (elements.innerHTML.includes('9')) {
        elements.click();
        atcSuccess = true;
        document.getElementsByClassName('add-to-cart-form-submit')[0].click();

        break;
      }
    }
    // Does not go to checkout page yet. Since theres cart holds, not really necessary at the moment.
    if (atcSuccess === true) {
      console.log('added');
    }
  }
}
