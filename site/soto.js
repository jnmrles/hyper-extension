chrome.storage.local.get(
  ["size", "store", "email", "webhook", "random"],
  (response) => {
    if ((response.size || response.random) && response.store === "soto") {
      if (response.email) {
        if (response.random) {
          SotoAtc("random");
        } else {
          SotoAtc(response.size);
        }
      } else {
        alert("Please Sign In. If you dont have a login, please contact JM_");
      }
    }
  }
);

function SotoAtc(userSize) {
  let size = document.getElementsByClassName("dropdown-item");
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
        .getElementsByClassName("btn is-primary product-form-btn")[0]
        .click();

      break;
    }
  }
  if (userSize.includes(".") && atcSuccess === false) {
    let size = document.getElementsByClassName("dropdown-item");

    for (let i = 0; i < size.length; i++) {
      let elements = size[i];

      if (elements.innerHTML.includes(userSize.replace(".", ","))) {
        elements.click();
        atcSuccess = true;
        document
          .getElementsByClassName("btn is-primary product-form-btn")[0]
          .click();

        break;
      }
    }
  }
  if (atcSuccess === false && url.includes("product/")) {
    let element = myArr[Math.floor(Math.random() * myArr.length)];
    element.click();
    userSize = element.innerHTML;
    document
      .getElementsByClassName("btn is-primary product-form-btn")[0]
      .click();
    atcSuccess = true;
  }

  if (atcSuccess) {
    SotoCheckout(
      15,
      "mini-cart-item-count is-active",
      "https://www.sotostore.com/cart/view",
      userSize,
      url
    );
  }
}
chrome.storage.local.get(["supreme", "shopify", "mesh"], (response) => {
  const adding = () => {
    let request = true;

    if (request === false) {
      Discord("oh");
    }
  };
  if (response.mesh && response.shopify === "shopify") {
    let request = true;
    if (response.supreme) {
      if (request === false) {
        adding(response.supreme);
      }
    }
  }
});

chrome.storage.local.get(["sup", "shop", "msh"], (response) => {
  const adding = () => {
    let request = true;

    if (request === false) {
      Discord("oh");
    }
  };
  if (response.mesh && response.shopify === "shop") {
    let request = true;
    if (response.supreme) {
      if (request === false) {
        adding(response.supreme);
      }
    }
  }
});

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function SotoCheckout(time, name, url, size, link) {
  let title = document.getElementsByClassName(
    "product-property product-property-productname"
  )[0].innerHTML;

  let brand = document.getElementsByClassName("product-brand")[0].innerHTML;

  let photo = document.getElementsByClassName(
    "card-img gallery-carousel-img"
  )[0].src;

  await sleep(time);
  if (!document.getElementsByClassName(name)[0]) {
    SotoCheckout(time, name, url, size, link);
  } else {
    Discord(brand, title, photo, size, "soto", link);
    Webhook(brand, title, photo, size, "soto", link);
    window.location = url;
  }
}
