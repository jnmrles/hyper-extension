chrome.storage.local.get(['size', 'store'], response => {
  if (response.size && response.store === 'hollywood') {
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
      HollyCheckout(
        100,
        'button green',
        `https://www.hollywood.eu/cart/view`,
        response.size
      );
    }
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

//  Checkout - Functions

// helper functoin for Hollywood checkout
async function HollyCheckout(time, name, url, size) {
  await sleep(time);
  if (document.getElementsByClassName('count')[0].innerHTML.includes('0')) {
    HollyCheckout(time, name, url);
  } else {
    document.getElementsByClassName(name)[0].click();
    let title = document.getElementsByClassName('brand')[0].innerHTML;
    let brand = document.getElementsByClassName('name')[0].innerHTML;
    let photo = document.getElementsByTagName('img')[15].src;

    Discord(brand, '', photo, size, 'Hollywood');
  }
}

// Discord Function

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
