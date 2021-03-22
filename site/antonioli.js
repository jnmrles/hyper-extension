chrome.storage.local.get(
  ["size", "store", "email", "webhook", "random"],
  (response) => {
    if ((response.size || response.random) && response.store === "antonioli") {
      if (response.email) {
        if (response.random) {
          console.log("running random");
          Ant("random");
        } else {
          Ant(response.size);
        }
      } else {
        alert("Please Sign In. If you dont have a login, please contact JM_");
      }
    }
  }
);

function Ant(userSize, random) {
  let ATC = false;
  let foundSize = false;
  let size = $('[name="select_projects"]');
  let myArr = [...size];
  let url = window.location.href;
  console.log("hello");
  console.log("OPtions", size.options);

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
    console.log("ATC IS SET TO TRUE");
    // checkout(
    //   "https://www.antonioli.eu/cart",
    //   "MiniCart__total",
    //   1,
    //   userSize,
    //   url
    // );
  } else if (ATC === false) {
    let element = myArr[Math.floor(Math.random() * myArr.length)];
    let size_obj = element.innerHTML;
    console.log("retrying for size", size_obj);

    Ant(size_obj);
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
  if (!document.getElementsByClassName(modal)[0]) {
    checkout(url, modal, time, size, link);
  }
  if (document.getElementsByClassName(modal)[0]) {
    atcSuccess = true;
  }
  if (atcSuccess === true) {
    let photo = $(".zoom").attr("data-image");
    let brand = document.getElementsByClassName("details--name")[0].children[0]
      .innerHTML;
    Webhook(brand, "", photo, size, "Antonioli", link);

    Discord(brand, "", photo, size, "Antonioli", link);

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
