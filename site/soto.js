chrome.storage.local.get(['size', 'store', 'email'], response => {
  if (response.size && response.store === 'soto') {
    if (response.email) {
      SotoAtc(response.size);
    } else {
      alert('Please Sign In. If you dont have a login, please contact JM_');
    }
  }
});

function SotoAtc(userSize) {
  let size = document.getElementsByClassName('dropdown-item');
  let copySizes = [...size];
  let myArr = copySizes.slice(2);
  let atcSuccess = false;
  let url = window.location.href;

  for (let i = 0; i < size.length; i++) {
    let elements = size[i];

    if (elements.innerHTML.includes(userSize)) {
      elements.click();
      atcSuccess = true;
      document
        .getElementsByClassName('btn is-primary product-form-btn')[0]
        .click();

      break;
    }
  }
  if (userSize.includes('.') && atcSuccess === false) {
    let size = document.getElementsByClassName('dropdown-item');

    for (let i = 0; i < size.length; i++) {
      let elements = size[i];

      if (elements.innerHTML.includes(userSize.replace('.', ','))) {
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
      userSize
    );
  }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

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

function Discord(brand, title, photo, size, store) {
  var request = new XMLHttpRequest();
  request.open(
    'POST',
    'https://discordapp.com/api/webhooks/691830336165904435/m3d9b_RtlnGLIIBd-OO4K1XLFuVxNY1ecf3xMppWq36qD1iGmMJADwkOUfPpiUgw0gYq'
  );

  request.setRequestHeader('Content-type', 'application/json');

  var params = {
    username: 'Hyper ATC Success',
    avatar_url: '',
    embeds: [
      {
        title: ` ${brand} \n${title}`,
        color: 1127128,
        description: `Store: ${store} \n Size: ${size}`,
        thumbnail: {
          url: photo,
        },
        timestamp: new Date(),
      },
    ],
  };

  request.send(JSON.stringify(params));
}
