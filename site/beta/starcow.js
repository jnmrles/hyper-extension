chrome.storage.local.get(['size', 'store', 'email', 'webhook'], (response) => {
  if (response.size && response.store === 'starcow') {
    if (response.email) {
      Star(response.size);
    } else {
      alert('Please Sign In. If you dont have a login, please contact JM_');
    }
  }
});

function Star(userSize, random) {
  let ATC = false;
  let foundSize = false;
  let size = document.getElementsByClassName(
    'form-control form-control-select'
  )[0].options;
  let myArr = [...size];
  let url = window.location.href;

  for (let i = 0; i < size.length; i++) {
    let elements = size[i];

    if (elements.innerHTML.includes(userSize)) {
      $(elements).prop('selected', true);

      if (
        document
          .getElementsByClassName('cart-products-count menu-right-click')[0]
          .innerHTML.includes('0')
      ) {
        console.log('he');
        document.getElementsByClassName('add')[0].children[0].click();
      }

      ATC = true;
      foundSize = true;

      break;
    }
  }
  if (ATC === true) {
    // checkout(
    //   'https://www.skatedeluxe.com/cart.php',
    //   'header-menu-badge',
    //   10,
    //   userSize,
    //   url
    // );
    console.log('checkouts');
  } else if (ATC === false) {
    let element = size[Math.floor(Math.random() * size.length)];
    let newSize = element.innerHTML;

    Star(newSize);
  }
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

//  Checkout - Functions

// Helper checkout function for naked
async function checkout(url, modal, time, size, link) {
  let badges = document.getElementsByClassName(modal)[1];
  let brand = document.getElementsByClassName('product-title-headline')[0]
    .innerHTML;

  await sleep(time);
  let atcSuccess = false;
  if (badges.innerHTML.includes('0')) {
    checkout(url, modal, time, size);
  }
  if (!badges.innerHTML.includes('0')) {
    atcSuccess = true;
  }
  if (atcSuccess === true) {
    let photo = $('.product-image.product-image-main')?.attr('data-src-d');
    console.log(photo);
    Webhook(brand, '', photo, size, 'SkateDeluxe', link);

    Discord(brand, '', photo, size, 'SkateDeluxe', link);

    window.location = url;
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
