chrome.storage.local.get(
  ["size", "store", "email", "webhook", "random"],
  (response) => {
    if ((response.size || response.random) && response.store === "naked") {
      if (response.email) {
        if (response.random) {
          Naked("random");
        } else {
          Naked(response.size);
        }
      } else {
        alert("Please Sign In. If you dont have a login, please contact JM_");
      }
    }
  }
);

function Naked(userSize, random) {
  let ATC = false;
  let foundSize = false;
  let size = document.getElementById("product-form-select").options;
  let myArr = [...size];
  let url = window.location.href;

  let newArr = myArr.filter((s) => {
    if (s.children[0]) {
      if (!s.children[0].innerHTML.includes("Sold out")) {
        if (!s.innerText.includes("Choose")) {
          return s;
        }
      }
    }
  });

  for (let i = 0; i < size.length; i++) {
    let elements = size[i];

    if (elements.innerHTML.includes(userSize)) {
      $(elements).prop("selected", true);

      document
        .getElementsByClassName("btn btn-primary product-form-submit")[0]
        .click();

      ATC = true;
      foundSize = true;

      break;
    }
  }
  if (ATC === true) {
    checkout(
      "https://www.nakedcph.com/en/cart/view",
      "mc-total-label",
      2,
      userSize,
      url
    );
  } else if (ATC === false) {
    let element = newArr[Math.floor(Math.random() * newArr.length)];
    let newSize = element.innerHTML;

    Naked(newSize.split("<")[0]);
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
  // if($('#product-form-message').children[0])(
  //   Naked("random")
  // )
  if (!document.getElementsByClassName(modal)[0]) {
    checkout(url, modal, time, size, link);
  }
  if (document.getElementsByClassName(modal)[0]) {
    atcSuccess = true;
  }
  if (atcSuccess === true) {
    let brand = document.getElementsByClassName(
      "product-property product-name"
    )[0].innerHTML;

    Webhook(
      brand,
      "",
      "https://pbs.twimg.com/profile_images/582179018419482624/RppHUjBa_400x400.jpg",
      size,
      "naked",
      link
    );

    Discord(
      brand,
      "",
      "https://pbs.twimg.com/profile_images/582179018419482624/RppHUjBa_400x400.jpg",
      size,
      "naked",
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
