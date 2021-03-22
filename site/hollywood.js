chrome.storage.local.get(
  ["size", "store", "email", "webhook", "random"],
  (response) => {
    if ((response.size || response.random) && response.store === "hollywood") {
      if (response.email) {
        if (response.random) {
          Hollywood("random");
        } else {
          Hollywood(response.size);
        }
      } else {
        alert("Please Sign In. If you dont have a login, please contact JM_");
      }
    }
  }
);

function HollyWood(user_size) {
  let atcSuccess = false;
  let size = document.getElementsByName("id")[0].children;
  let size_arr = [...size];
  size_arr.shift();
  let url = window.location.href;

  for (let i = 0; i < size_arr.length; i++) {
    let elements = size[i];

    if (elements.innerHTML.includes(user_size)) {
      $(elements).prop("selected", true);
      atcSuccess = true;
      document.getElementsByClassName("large green add-to-cart")[0].click();

      break;
    }
  }
  if (atcSuccess === true) {
    HollyCheckout(4, "button green", `/cart/view`, user_size, url);
  } else if (atcSuccess === false) {
    let element = size_arr[Math.floor(Math.random() * size_arr.length)];
    let newSize = element.innerHTML;
    HollyWood(newSize);
  }
}

//
//
//
//
// ----------- HELPER FUNCTIONS -----------------//

// sleep function returns a promise so we are able to await it in our atc functions
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
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

//  Checkout - Functions

// helper functoin for Hollywood checkout
async function HollyCheckout(time, name, url, size, link) {
  await sleep(time);
  if (document.getElementsByClassName("count")[0].innerHTML.includes("0")) {
    HollyCheckout(time, name, url, size, link);
  } else {
    document.getElementsByClassName(name)[0].click();
    let title = document.getElementsByClassName("brand")[0].innerHTML;
    let brand = document.getElementsByClassName("name")[0].innerHTML;
    let photo = document.getElementsByClassName("c-3")[0].children[0].src;

    Discord(
      brand,
      "",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw8xUhfG--5FhoKW6M1E_VuSB7DCXYEwe8m9FpaSs7-hLOnznD&s",
      size,
      "Hollywood",
      link
    );

    Webhook(
      brand,
      "",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw8xUhfG--5FhoKW6M1E_VuSB7DCXYEwe8m9FpaSs7-hLOnznD&s",
      size,
      "Hollywood",
      link
    );
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
