chrome.storage.local.get(
  ["size", "store", "email", "webhook", "random"],
  (response) => {
    if ((response.size || response.random) && response.store === "skate") {
      if (response.email) {
        if (response.random) {
          Skate("random");
        } else {
          Skate(response.size);
        }
      } else {
        alert("Please Sign In. If you dont have a login, please contact JM_");
      }
    }
  }
);

function Skate(userSize, random) {
  let ATC = false;
  let foundSize = false;
  let size = document.getElementById("product-size-chooser").options;
  let myArr = [...size];
  let url = window.location.href;

  for (let i = 0; i < size.length; i++) {
    let elements = size[i];

    if (elements.innerHTML.includes(userSize)) {
      $(elements).prop("selected", true);
      $("#product-addtocart").click();
      ATC = true;
      foundSize = true;

      break;
    }
  }
  if (ATC === true) {
    checkout(
      "https://www.skatedeluxe.com/cart.php",
      "header-menu-badge",
      10,
      userSize,
      url
    );
  } else if (ATC === false) {
    let element = size[Math.floor(Math.random() * size.length)];
    let newSize = element.innerHTML;

    Skate(newSize);
  }
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

//  Checkout - Functions

// Helper checkout function for naked
async function checkout(url, modal, time, size, link) {
  let badges = document.getElementsByClassName(modal)[1];
  let brand = document.getElementsByClassName("product-title-headline")[0]
    .innerHTML;

  await sleep(time);
  let atcSuccess = false;
  if (badges.innerHTML.includes("0")) {
    checkout(url, modal, time, size);
  }
  if (!badges.innerHTML.includes("0")) {
    atcSuccess = true;
  }
  if (atcSuccess === true) {
    let photo = $(".product-image.product-image-main")?.attr("data-src-d");
    console.log(photo);
    Webhook(brand, "", photo, size, "SkateDeluxe", link);

    Discord(brand, "", photo, size, "SkateDeluxe", link);

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
