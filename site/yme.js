chrome.storage.local.get(
  ["size", "store", "email", "webhook", "random"],
  (response) => {
    if ((response.size || response.random) && response.store === "yme") {
      if (response.email) {
        if (response.random) {
          YME("random");
        } else {
          YME(response.size);
        }
      } else {
        alert("Please Sign In. If you dont have a login, please contact JM_");
      }
    }
  }
);

function YME(userSize, random) {
  let ATC = false;
  let foundSize = false;
  let size = document.getElementsByClassName("dropdown-item");
  let myArr = [...size];
  let url = window.location.href;

  let newArr = myArr.filter((s) => {
    if (s.classList.length === 1) {
      return s;
    }
  });

  for (let i = 0; i < size.length; i++) {
    let elements = size[i];

    if (elements.innerHTML.includes(userSize)) {
      elements.click();

      document.getElementsByClassName("btn product-form-button")[0].click();
      console.log("clicked atc");
      ATC = true;
      foundSize = true;

      break;
    }
  }
  if (ATC === true) {
    checkout(
      "https://www.ymeuniverse.com/cart/view",
      "count mini-cart-item-count",
      10,
      userSize,
      url
    );
  } else if (ATC === false && url.includes("product")) {
    let element = newArr[Math.floor(Math.random() * newArr.length)];
    let newSize = element.innerHTML;

    YME(newSize);
  }
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

//  Checkout - Functions

// Helper checkout function for naked
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
      "mini-cart-name product-name"
    )[0].children[0].innerHTML;
    Webhook(
      brand,
      "",
      "https://instagram.fabj3-1.fna.fbcdn.net/v/t51.2885-19/s150x150/64285947_207444803476092_4029433094703415296_n.jpg?_nc_ht=instagram.fabj3-1.fna.fbcdn.net&_nc_ohc=54xW_p5phP8AX-SmgbS&oh=a6359cc3d678ec925248a66e5732c5cc&oe=5F0E65FF",
      size,
      "YME Universe",
      link
    );

    Discord(
      brand,
      "",
      "https://instagram.fabj3-1.fna.fbcdn.net/v/t51.2885-19/s150x150/64285947_207444803476092_4029433094703415296_n.jpg?_nc_ht=instagram.fabj3-1.fna.fbcdn.net&_nc_ohc=54xW_p5phP8AX-SmgbS&oh=a6359cc3d678ec925248a66e5732c5cc&oe=5F0E65FF",
      size,
      "YME Universe",
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
