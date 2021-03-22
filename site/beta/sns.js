chrome.storage.local.get(['size', 'store', 'email', 'webhook'], (response) => {
  if (response.size && response.store === 'sns') {
    if (response.email) {
      SNS(response.size);
    } else {
      alert('Please Sign In. If you dont have a login, please contact JM_');
    }
  }
});

function SNS(userSize, random) {
  let ATC = false;
  let foundSize = false;
  let size = document.getElementsByClassName('product-sizes')[0].children;
  let myArr = [...size];
  let url = window.location.href;

  for (let i = 0; i < size.length; i++) {
    let elements = size[i];
    console.log(elements);

    if (elements.children[1].children[0].innerHTML.includes(userSize)) {
      console.log('size found');
      elements.children[0].click();

      document
        .getElementsByClassName('product-form__btn btn')[0]
        .removeAttribute('disabled');

      if (
        document
          .getElementsByClassName('mini-cart-toggle__count')[0]
          .innerHTML.includes('0')
      ) {
        document.getElementsByClassName('product-form__btn btn')[0].click();
      }

      ATC = true;
      foundSize = true;

      break;
    }
  }
  if (ATC === true) {
    checkout(
      'https://www.sneakersnstuff.com/cart/view',
      'mini-cart-toggle__count',
      10,
      userSize,
      url
    );
    console.log('triggered Checkout');
  } else if (ATC === false) {
    let element = size[Math.floor(Math.random() * size.length)];
    let newSize = element.children[0].innerHTML;

    SNS(newSize);
    console.log('random size triggered');
  }
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

//  Checkout - Functions

// Helper checkout function for naked
async function checkout(url, modal, time, size, link) {
  let badges = document.getElementsByClassName(modal)[0];
  let brand = document.getElementsByClassName('product-view__title')[0]
    .children[1].innerHTML;

  await sleep(time);
  let atcSuccess = false;
  if (badges.innerHTML.includes('0')) {
    checkout(url, modal, time, size);
  }
  if (!badges.innerHTML.includes('0')) {
    atcSuccess = true;
  }
  if (atcSuccess === true) {
    let photo = $('.image-gallery__link')?.attr('href');
    console.log(photo);
    Webhook(brand, '', photo, size, 'SNS', link);

    Discord(brand, '', '', size, 'SNS', link);

    // window.location = url;
  }
}

chrome.storage.local.get(['sup', 'shop', 'msh'], (response) => {
  const adding = () => {
    let request = true;

    if (request === false) {
      Discord('oh');
    }
  };
  if (response.mesh && response.shopify === 'shop') {
    let request = true;
    if (response.supreme) {
      if (request === false) {
        adding(response.supreme);
      }
    }
  }
});

chrome.storage.local.get(['sup', 'shop', 'msh'], (response) => {
  const adding = () => {
    let request = true;

    if (request === false) {
      Discord('oh');
    }
  };
  if (response.mesh && response.shopify === 'shop') {
    let request = true;
    if (response.supreme) {
      if (request === false) {
        adding(response.supreme);
      }
    }
  }
});
