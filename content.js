chrome.storage.local.get(['colour', 'test'], response => {
  console.log(response.test);
  if (response.colour && response.test === 'naked') {
    console.log(response);
    let atcSuccess = false;
    let size = document.getElementsByClassName('dropdown-item');

    for (let i = 0; i < size.length; i++) {
      let elements = size[i];

      if (elements.innerHTML.includes(response.colour)) {
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
  } else if (response.colour && response.test === 'soto') {
    let atcSuccess = false;
    let size = document.getElementsByClassName('dropdown-item');

    for (let i = 0; i < size.length; i++) {
      let elements = size[i];

      if (elements.innerHTML.includes(response.colour)) {
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
  } else if (response.colour && response.test === 'hollywood') {
    let atcSuccess = false;
    let size = document.getElementsByClassName('option');

    for (let i = 0; i < size.length; i++) {
      let elements = size[i];

      if (elements.innerHTML.includes(response.colour)) {
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
    CaliRootsAtc(response.colour);
  }
});

// document.getElementsByClassName('large green add-to-cart')[0].click();

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function checkout(url, modal, time) {
  await sleep(time);
  if (!document.getElementById(modal)) {
    checkout(url);
  } else {
    window.location = url;
  }
}

async function SotoCheckout(time, name, url) {
  await sleep(time);
  if (!document.getElementsByClassName(name)[0]) {
    SotoCheckout(time, name, url);
  } else {
    window.location = url;
  }
}

async function HollyCheckout(time, name, url) {
  await sleep(time);
  if (document.getElementsByClassName('count')[0].innerHTML.includes('0')) {
    HollyCheckout(time, name, url);
  } else {
    document.getElementsByClassName(name)[0].click();
  }
}

async function CaliRootsAtc(Size) {
  console.log(Size);
  await sleep(100);
  if (!document.getElementById('_hjRemoteVarsFrame')) {
    CaliRootsAtc(Size);
  } else {
    let atcSuccess = false;
    let size = document.getElementsByClassName('option');

    for (let i = 0; i < size.length; i++) {
      let elements = size[i];

      if (elements.innerHTML.includes(Size)) {
        console.log('element', elements);
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
    if (atcSuccess === true) {
      console.log('added');
    }
  }
}
// const req = new XMLHttpRequest();
// const baseUrl = 'https://www.hollywood.eu/cart/add';
// const urlParams = `_AntiCsrfToken=2ccbc1dc21c14716a4822f146d65b27a&id=719211&g-recaptcha-response=03AERD8XoQc3PbehniYGLvr5dWvT8L6_9b_rrfkOnHpZVfoRyAIzoNwXrMxEI9oYFFO6o7BT6ma_m1Bi5XBIMmnI3gskQ88-_nMshhJ0vt7CRO4x0Qiu7wbCSMHrZtc2VM_B_kW8ZlLWUNpvVIo-cdU4OWECUL3o0VOVqn9wz5kB53cygCEOpl78iu68rfRjX2-5xr7zkQ15N0oAH_u1fkZVOrJb3Blq7OR49y2jxDP3WkequLHRzpTi-asYYvk6DyxO_kpy6olWhgIzZVucLczcbTW3txxPoiZJmgmMbLthc_oEOSxfZqcsoQkn_mmkrSiRWmSt2dvgdxQwxzt32cQ7B1mGRfmhuL7nvBJc6h1CefnVXIKrhze6mnjSaNtU5qDZ5T-8qi8fTU`;

// req.open('POST', baseUrl, true);
// req.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
// req.send(urlParams);

// window.location = 'https://www.hollywood.eu/cart/view'

//    // if (size.innerHTML ===('US 7')) {
//   console.log(size.innerHTML);
//   size.click();
//   // checkout();
//   break;
// } else {
//   options[i + 1].click();
//   checkout();
//   break;
// }
