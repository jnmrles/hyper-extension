chrome.storage.local.get(['size', 'store', 'email', 'webhook'], (response) => {
  if (response.size && response.store === 'wellgosh') {
    if (response.email) {
      $(window).load(Well(response.size));
    } else {
      alert('Please Sign In. If you dont have a login, please contact JM_');
    }
  }
});

async function Well(userSize, random) {
  let ATC = false;
  let foundSize = false;

  let size = document.getElementById('attribute163').options;
  let myArr = [...size];
  let url = window.location.href;

  if (size.length < 2) {
    await sleep(15);
    Well(userSize);
    console.log('retrying');
  }

  for (let i = 0; i < size.length; i++) {
    let elements = size[i];

    if (elements.innerHTML.includes(userSize)) {
      $(elements).prop('selected', true);
      $('#product-addtocart-button').click();
      ATC = true;
      foundSize = true;

      break;
    }
  }
  if (ATC === true) {
    checkout(
      'https://wellgosh.com/checkout/',
      'counter-number',
      1,
      userSize,
      url
    );
  } else if (ATC === false) {
    let element = size[Math.floor(Math.random() * size.length)];
    let newSize = element.innerHTML;

    Well(newSize);
  }
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

//  Checkout - Functions

// Helper checkout function for naked
async function checkout(url, modal, time, size, link) {
  let badges = document.getElementsByClassName(modal)[0];
  let brand = document.getElementsByClassName('page-title')[0].children[0]
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
    let photo = $('.fotorama__img')?.attr('src');
    console.log(photo);
    Webhook(brand, '', photo, size, 'WellGosh', link);

    Discord(brand, '', photo, size, 'WellGosh', link);

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
