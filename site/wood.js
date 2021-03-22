chrome.storage.local.get(
  ["size", "store", "email", "webhook", "random"],
  (response) => {
    if ((response.size || response.random) && response.store === "wood") {
      if (response.email) {
        if (response.random) {
          WOOD("random");
        } else {
          WOOD(response.size);
        }
      } else {
        alert("Please Sign In. If you dont have a login, please contact JM_");
      }
    }
  }
);

function WOOD(userSize, random) {
  let ATC = false;
  let foundSize = false;
  let size = document.getElementsByClassName("product-sizes")[0].children;
  let myArr = [...size];
  let url = window.location;

  let newArr = myArr.filter((s) => {
    if (!$(s.children[0]).attr("disabled")) {
      return s;
    }
  });
  $(document.getElementsByClassName("product-form__btn btn")[0]).removeAttr(
    "disabled"
  );

  for (let i = 0; i < newArr.length; i++) {
    let elements = size[i];

    if (elements.children[1].innerHTML.includes(userSize)) {
      elements.children[1].click();
      document.getElementsByClassName("product-form__btn btn")[0].click();

      ATC = true;
      foundSize = true;

      break;
    }
  }
  if (ATC === true) {
    checkout(
      "https://www.woodwood.com/cart/view",
      "actions-nav__item-count mini-cart-toggle__count",
      2,
      userSize,
      url
    );
  } else if (ATC === false) {
    let element = newArr[Math.floor(Math.random() * newArr.length)];
    let newSize = element.children[1].innerHTML;

    WOOD(newSize);
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
    let brand = document.getElementsByClassName("product-view__title")[0]
      .children[1].innerHTML;

    Webhook(
      brand,
      "",
      "https://pbs.twimg.com/profile_images/965935443421351937/zScLmaiP_400x400.jpg",
      size,
      "WoodWood",
      link
    );

    Discord(
      brand,
      "",
      "https://pbs.twimg.com/profile_images/965935443421351937/zScLmaiP_400x400.jpg",
      size,
      "WoodWood",
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
