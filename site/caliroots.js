chrome.storage.local.get(
  ["size", "store", "email", "webhook", "random"],
  (response) => {
    if (
      (response.size || response.random) &&
      response.store === "caliroots" &&
      window.location.href.includes("product")
    ) {
      if (response.email) {
        if (response.random) {
          console.log("hello");
          document.onreadystatechange("random");
        } else {
          document.onreadystatechange(response.size);
        }
      } else {
        alert("Please Sign In. If you dont have a login, please contact JM_");
      }
    }
  }
);

document.onreadystatechange = (size) => {
  if (document.readyState === "complete") {
    Cali(size);
  }
};

async function Cali(userSize, random) {
  document.getElementsByClassName("MuiButton-label")[1].click();

  let ATC = false;
  let foundSize = false;
  let size = document.getElementsByClassName(
    "MuiList-root MuiMenu-list MuiList-padding"
  )[0].children;
  let myArr = [...size];
  let url = window.location.href;

  for (let i = 0; i < size.length; i++) {
    let elements = size[i];

    if (elements.innerText.includes(userSize)) {
      elements.click();

      document.getElementsByClassName("MuiButton-label")[1].click();
      ATC = true;
      foundSize = true;

      break;
    }
  }
  if (ATC === true) {
    checkout(
      "https://www.caliroots.com/checkout",
      "MuiSnackbar-root MuiSnackbar-anchorOriginTopRight",
      2,
      userSize,
      url
    );
  } else if (ATC === false) {
    let element = size[Math.floor(Math.random() * size.length)];
    let newSize = element.innerText;

    Cali(newSize);
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

  let badges = document.getElementsByClassName(modal)[0];
  let brand = document.getElementsByClassName(
    "MuiTypography-root  MuiTypography-h2"
  )[0].innerText;

  if (atcSuccess === true) {
    let photo = document
      .getElementsByClassName("lazyloaded")[0]
      .getAttribute("src");

    Webhook(brand, "", photo, size, "CaliRoots", link);

    Discord(brand, "", photo, size, "CaliRoots", link);

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
