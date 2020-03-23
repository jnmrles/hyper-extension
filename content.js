chrome.storage.local.get(['size', 'store'], response => {
  if (response.size && response.store === 'naked') {
    let atcSuccess = false;
    let size = document.getElementsByClassName('dropdown-item');
    let myArr = [...size];
    let url = window.location.href;

    let newArr = myArr.filter(s => {
      return s.innerHTML.includes(3);
    });

    for (let i = 0; i < size.length; i++) {
      let elements = size[i];

      if (elements.innerHTML.includes(response.size)) {
        elements.click();
        document
          .getElementsByClassName('btn btn-primary product-form-submit')[0]
          .click();
        atcSuccess = true;

        break;
      }
    }
    if (atcSuccess === false && url.includes('product/')) {
      newArr[Math.floor(Math.random() * newArr.length)].click();
      document
        .getElementsByClassName('btn btn-primary product-form-submit')[0]
        .click();
      atcSuccess = true;
    }

    if (atcSuccess === true) {
      checkout(
        'https://www.nakedcph.com/en/cart/view',
        'mini-cart-items mini-cart-section',
        15
      );
    }
  }
  // ----------------------- Soto Logic -------------------------------
  //
  //
  else if (response.size && response.store === 'soto') {
    let size = document.getElementsByClassName('dropdown-item');
    let copySizes = [...size];
    let myArr = copySizes.slice(2);
    let atcSuccess = false;
    let url = window.location.href;

    for (let i = 0; i < size.length; i++) {
      let elements = size[i];

      if (elements.innerHTML.includes(response.size)) {
        elements.click();
        atcSuccess = true;
        document
          .getElementsByClassName('btn is-primary product-form-btn')[0]
          .click();

        break;
      }
    }
    if (response.size.includes('.') && atcSuccess === false) {
      let size = document.getElementsByClassName('dropdown-item');

      for (let i = 0; i < size.length; i++) {
        let elements = size[i];

        if (elements.innerHTML.includes(response.size.replace('.', ','))) {
          elements.click();
          atcSuccess = true;
          document
            .getElementsByClassName('btn is-primary product-form-btn')[0]
            .click();

          break;
        }
      }
    }
    if (atcSuccess === false && url.includes('product/')) {
      myArr[Math.floor(Math.random() * myArr.length)].click();
      document
        .getElementsByClassName('btn is-primary product-form-btn')[0]
        .click();
      atcSuccess = true;
    }

    if (atcSuccess) {
      SotoCheckout(
        15,
        'mini-cart-item-count is-active',
        'https://www.sotostore.com/cart/view',
        response.size
      );
    }
  }
  //-------------hollywood logic-------------------------------
  //
  //
  else if (response.size && response.store === 'hollywood') {
    let atcSuccess = false;
    let size = document.getElementsByClassName('option');

    for (let i = 0; i < size.length; i++) {
      let elements = size[i];

      if (elements.innerHTML.includes(response.size)) {
        elements.click();
        atcSuccess = true;
        document.getElementsByClassName('large green add-to-cart')[0].click();

        break;
      }
    }
    if (atcSuccess === true) {
      HollyCheckout(100, 'button green', `https://www.hollywood.eu/cart/view`);
    }
  }
  //----------------------------- caliroots logic ---------------------------
  //
  //
  else {
    CaliRootsAtc(response.size);
  }
});

//
//
//
//
// ----------- HELPER FUNCTIONS -----------------//

// sleep function returns a promise so we are able to await it in our atc functions
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

//  Checkout - Functions //

// Helper checkout function for naked
async function checkout(url, modal, time) {
  await sleep(time);
  if (!document.getElementsByClassName(modal)[0]) {
    checkout(url, modal, time);
  } else {
    let brand = document.getElementsByClassName(
      'product-property product-name'
    )[0].innerHTML;

    let sizeCart = document.getElementsByClassName('mc-item-size')[0].innerHTML;

    let photo = document.getElementsByClassName('mc-item-img')[0].src;

    Discord(brand, '', photo, sizeCart, 'naked');
    window.location = url;
  }
}

// helper function for soto checkout

async function SotoCheckout(time, name, url, size) {
  let title = document.getElementsByClassName(
    'product-property product-property-productname'
  )[0].innerHTML;

  let brand = document.getElementsByClassName('product-brand')[0].innerHTML;

  let photo = document.getElementsByClassName(
    'card-img gallery-carousel-img'
  )[0].src;

  await sleep(time);
  if (!document.getElementsByClassName(name)[0]) {
    SotoCheckout(time, name, url, size);
  } else {
    Discord(brand, title, photo, size, 'soto');
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

// Discord Function

function Discord(brand, title, photo, size, store) {
  var request = new XMLHttpRequest();
  request.open(
    'POST',
    'https://discordapp.com/api/webhooks/691431197171253298/T6XKXivCqiiBfhHi4hLRH8lOYywo7cTIgfQTc3s67LqAvCTgMJTBL9TcIYmsLt_KO_R4'
  );

  request.setRequestHeader('Content-type', 'application/json');

  var params = {
    username: 'Hyper Helper!',
    avatar_url: '',
    embeds: [
      {
        title: ` ${brand} \n${title}`,
        color: 1127128,
        description: ` Store: ${store} \n Size:${size}`,
        thumbnail: {
          url: photo,
        },
        timestamp: new Date(),
      },
    ],
  };

  request.send(JSON.stringify(params));
}
