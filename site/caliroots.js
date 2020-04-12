chrome.storage.local.get(['size', 'store', 'email'], response => {
  if (response.size && response.store === 'caliroots') {
    if (response.email) {
      CaliRootsAtc(response.size);
    } else {
      alert('Please Sign In. If you dont have a login, please contact JM_');
    }
  }
});

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

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
      }
    }
    // Does not go to checkout page yet. Since theres cart holds, not really necessary at the moment.
    if (atcSuccess === true) {
      CaliCheckout(10, 'count', 'https://caliroots.com/cart/view', Size);
    }
  }
}
async function CaliCheckout(time, name, url, size) {
  await sleep(time);
  if (document.getElementsByClassName(name)[0].innerHTML.includes('0')) {
    CaliCheckout(time, name, url, size);
  } else {
    document.getElementsByClassName(name)[0].click();
    console.log('added');
    let title = document.getElementsByTagName('h1')[0].innerHTML;
    let photo = document.getElementsByTagName('img')[67].src;

    Discord(title, '', photo, size, 'CaliRoots');
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
