// async function test() {
//   await document.getElementById('purchase-button').click();
//   document.getElementById('email').value = 'jov@jcopx.com';
//   //     'j@jcopx.com
//   console.log(document.getElementsByName('cardnumber'));
// }
console.log('in app');

async function doSomeStuff() {
  console.log('doing stuff');
  console.log(Date.now());
  // console.log(
  //   document
  //     .getElementsByClassName('card')[0]
  //     .innerHTML.includes('Kiko Kostadinov Gel-Kiril')
  // );
  // function chooseProduct() {
  //   if (document.getElementsByClassName('dropdownMenuButton') === undefined) {
  //     chooseProduct();
  //   } else {
  //     document.getElementById('dropdownMenuButton').click();
  //     document.getElementsByClassName('dropdown-item')[4].click();

  //     document
  //       .getElementsByClassName('btn is-primary product-form-btn')[0]
  //       .click();
  //   }
  // }

  document
    .getElementsByClassName(
      'embed-responsive embed-responsive-lazyload embed-responsive-73391'
    )[0]
    .click();

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  // let chosen = false;
  // function chooseProduct() {
  //   let pathName = window.location.pathname.split('/');

  //   for (let i = 0; i < pathName.length; i++) {
  //     let element = pathName[i];
  //     if (element === 'latest-products') {
  //       console.log('latest');
  //       chosen = false;
  //       chooseProduct();
  //     } else {
  //       chosen = true;
  //     }
  //   }
  // }

  // while (chosen === false) {
  //   return;
  // }
  // await document
  //   .getElementsByClassName(
  //     'card-img card-img embed-responsive-item lazyloaded'
  //   )[4]
  //   .click();

  // function loaded() {
  //   if (!document.getElementById('dropdownMenuButton')) {
  //     console.log('not founds');
  //     loaded();
  //   } else {
  //     console.log('in else block');
  //     document.getElementById('dropdownMenuButton').click();
  //     document.getElementsByClassName('dropdown-item')[4].click();

  //     document
  //       .getElementsByClassName('btn is-primary product-form-btn')[0]
  //       .click();
  //   }
  // }
  // loaded();
  // document.getElementById('dropdownMenuButton').click();
  // document.getElementsByClassName('dropdown-item')[3].click();

  // document.getElementsByClassName('btn is-primary product-form-btn')[0].click();

  function addedToCart() {
    if (
      !document.getElementsByClassName(
        'btn is-primary to-checkout-button btn-block'
      )[0]
    ) {
      addedToCart();
    } else {
      console.log('we Found it');
    }
  }

  // hooseProduct();c

  // while (
  //   !document.getElementsByClassName(
  //     'btn is-primary to-checkout-button btn-block'
  //   )[0]
  // ) {
  //   if (
  //     document.getElementsByClassName(
  //       'btn is-primary to-checkout-button btn-block'
  //     )[0]
  //   ) {
  //     console.log('found!');
  //     console.log(
  //       document.getElementsByClassName(
  //         'btn is-primary to-checkout-button btn-block'
  //       )[0]
  //     );
  //     break;
  //   }
  // }

  function checkOut() {
    window.location = 'https://www.sotostore.com/en/cart/view';
  }

  // checkOut();

  // await sleep(300);
  // fetch('https://www.sotostore.com/en/cart/view').then(() =>
  //   console.log('in cart')
  // );
  // document
  //   .getElementsByClassName('btn is-primary to-checkout-button btn-block')[0]
  //   .click();
}

doSomeStuff();
