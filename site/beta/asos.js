chrome.storage.local.get(["size", "store", "email", "webhook"], (response) => {
  if (response.size && response.store === "asos") {
    if (response.email) {
      Asos(response.size);
    } else {
      alert("Please Sign In. If you dont have a login, please contact JM_");
    }
  }
});

async function Asos(userSize, random) {
  await sleep(10);

  console.log(document.getElementById("main-size-select-0"));
  if (!document.getElementsByClassName("size-guide-wrapper")[0]) {
    Asos(userSize, random);
  }

  let ATC = false;
  let foundSize = false;
  let size = document.getElementById("main-size-select-0").options;
  let myArr = [...size];
  let url = window.location.href;

  document.getElementsByClassName("colour-size-select")[0].click();

  $(document.getElementById("main-size-select-0")).attr("aria-invalid", "");
  $(document.getElementById("main-size-select-0")).attr("aria-describedby", "");
  for (let i = 0; i < myArr.length; i++) {
    let selector = document.getElementById("main-size-select-0");

    let elements = size[i];
    console.log(elements);
    console.log("test", document.getElementById("sizeSelect"));

    if (elements.innerHTML.includes(userSize)) {
      $(elements).prop("selected", "selected");
      $(elements).attr("selected", "selected");
      selector.selected = true;

      document.getElementsByClassName("add-button")[0].click();
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

    Asos(newSize);
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
