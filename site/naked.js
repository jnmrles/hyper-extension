chrome.storage.local.get(['size', 'store', 'email'], response => {
  if (response.size && response.store === 'naked') {
    if (response.email) {
      Naked(response.size);
    } else {
      alert('Please Sign In. If you dont have a login, please contact JM_');
    }
  }
});

function Naked(userSize, random) {
  let ATC = false;
  let foundSize = false;
  let size = document.getElementsByClassName('dropdown-item');
  let myArr = [...size];
  let url = window.location.href;

  let newArr = myArr.filter(s => {
    return s.innerHTML.includes(3);
  });

  // let filteredArr = newArr.filter(s => {
  //   return !s.children[0].innerHTML.includes('Sold out');
  // });

  // console.log(filteredArr);

  for (let i = 0; i < size.length; i++) {
    let elements = size[i];

    if (elements.innerHTML.includes(userSize)) {
      elements.click();

      document
        .getElementsByClassName('btn btn-primary product-form-submit')[0]
        .click();
      console.log('clicked atc');
      ATC = true;
      foundSize = true;

      break;
    }
  }
  if (ATC === true) {
    checkout(
      'https://www.nakedcph.com/en/cart/view',
      'mc-total-label',
      10,
      userSize
    );
  } else if (ATC === false && url.includes('product/')) {
    let element = newArr[Math.floor(Math.random() * newArr.length)];
    let newSize = element.innerHTML;

    Naked(newSize);
  }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

//  Checkout - Functions

// Helper checkout function for naked
async function checkout(url, modal, time, size) {
  await sleep(time);
  let atcSuccess = false;
  if (!document.getElementsByClassName(modal)[0]) {
    checkout(url, modal, time, size);
  }
  if (document.getElementsByClassName(modal)[0]) {
    atcSuccess = true;
  }
  if (atcSuccess === true) {
    let brand = document.getElementsByClassName(
      'product-property product-name'
    )[0].innerHTML;

    Discord(brand, '', '', size, 'naked');
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
