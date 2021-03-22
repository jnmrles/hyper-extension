chrome.storage.local.get(
  ["size", "store", "email", "webhook", "random"],
  (response) => {
    if (
      (response.size || response.random) &&
      response.store === "footdistrict"
    ) {
      if (response.email) {
        if (response.random) {
          FDistrict("random");
        } else {
          FDistrict(response.size);
        }
      } else {
        alert("Please Sign In. If you dont have a login, please contact JM_");
      }
    }
  }
);

function FDistrict(userSize, random) {
  let ATC = false;
  let foundSize = false;
  let size = document.getElementById("attribute134").options;
  let size_arr = [...size];
  let myArr = size_arr.filter((s) => {
    if (!$(s).attr("disabled") && !s.innerHTML.includes("CHOOSE")) {
      return s;
    }
  });

  let url = window.location.href;
  let brand = document.getElementById("product_text").children[0].innerHTML;
  let photo = document.getElementById("zoom1").children[0];
  let photo_url = $(photo).attr("src");

  for (let i = 0; i < myArr.length; i++) {
    let elements = myArr[i];

    if (elements.innerHTML.includes(userSize)) {
      $(elements).prop("selected", true);

      document.getElementsByClassName("button btn-cart")[0].click();

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
      url,
      brand,
      photo_url
    );
  } else if (ATC === false) {
    let element = myArr[Math.floor(Math.random() * myArr.length)];
    let newSize = element.innerHTML;

    FDistrict(newSize);
  }
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

//  Checkout - Functions

// Helper checkout function for naked
async function checkout(url, modal, time, size, link, brand, photo) {
  let atcSuccess = true;

  if (atcSuccess === true) {
    Discord(brand, "", photo, size, "FootDistrict", link);
    Webhook(brand, "", photo, size, "FootDistrict", link);
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
