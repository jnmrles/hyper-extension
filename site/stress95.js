chrome.storage.local.get(
  ["size", "store", "email", "webhook", "random"],
  (response) => {
    if ((response.size || response.random) && response.store === "stress") {
      if (response.email) {
        if (response.random) {
          Stress("random");
        } else {
          Stress(response.size);
        }
      } else {
        alert("Please Sign In. If you dont have a login, please contact JM_");
      }
    }
  }
);

function Stress(userSize, random) {
  let ATC = false;
  let foundSize = false;
  let size = document.getElementsByClassName("product-form-item-btn");
  let myArr = [...size];
  let url = window.location.href;

  for (let i = 0; i < size.length; i++) {
    let elements = size[i];

    if (elements.innerHTML.includes(userSize)) {
      elements.click();

      document
        .getElementsByClassName("btn is-primary product-form-btn")[0]
        .click();
      console.log("clicked atc");
      ATC = true;
      foundSize = true;

      break;
    }
  }
  if (ATC === true) {
    checkout(
      "https://stress95.com/cart/view",
      "mini-cart-item-count",
      10,
      userSize,
      url
    );
  } else if (ATC === false && url.includes("product/")) {
    let element = myArr[Math.floor(Math.random() * myArr.length)];
    let newSize = element.innerHTML;

    Stress(newSize);
  }
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function checkout(url, modal, time, size, link) {
  await sleep(time);
  let atcSuccess = false;
  if (document.getElementsByClassName(modal)[0].innerHTML.includes("0")) {
    checkout(url, modal, time, size, link);
  }
  if (!document.getElementsByClassName(modal)[0].innerHTML.includes("0")) {
    atcSuccess = true;
  }
  if (atcSuccess === true) {
    let brand = document.getElementsByClassName(
      "product-property product-property-productname"
    )[0].innerHTML;

    Discord(
      brand,
      "",
      "https://www.couponbirds.com/newlogo_100/stress95-com-9PHY.png",
      size,
      "stress",
      link
    );

    Webhook(
      brand,
      "",
      "https://www.couponbirds.com/newlogo_100/stress95-com-9PHY.png",
      size,
      "stress",
      link
    );
    window.location = url;
  }
}
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
