chrome.storage.local.get(
  ["size", "store", "email", "webhook", "random"],
  (response) => {
    if ((response.size || response.random) && response.store === "junkyard") {
      if (response.email) {
        if (response.random) {
          Atc("random");
        } else {
          Atc(response.size);
        }
      } else {
        alert("Please Sign In. If you dont have a login, please contact JM_");
      }
    } else if (response.size && response.store === "junkyard2") {
      buttonAdd();
    }
  }
);
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

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function Atc(Size) {
  let url = window.location.href;
  if (String(url).includes("checkout/")) {
    return;
  }
  if (String(url).includes("products")) {
    return;
  }

  if (String(url).includes("/skate")) {
    return;
  }

  if (String(url).includes("/collections")) {
    return;
  }
  // have to wait for Caliroots to fully render in order to be able to select a size and cart. This would check for an element that is displayed once the size option and functionality is fully rendered. If it isnt, itll retry.
  if (!document.getElementById("attribute192")) {
    Atc(Size);
  } else {
    let atcSuccess = false;
    let size = document.getElementById("attribute192").options;

    for (let i = 0; i < size.length; i++) {
      let elements = size[i];

      if (elements.innerHTML.includes(Size)) {
        $(elements).prop("selected", true);

        $("#button-add-to-cart").click();
        atcSuccess = true;

        break;
      }
    }

    // Does not go to checkout page yet. Since theres cart holds, not really necessary at the moment.
    if (atcSuccess === true) {
      checkout("/checkout/onepage/", null, 3, Size, url);
    }
  }
}

async function checkout(url, modal, time, size, link) {
  await sleep(time);
  let item = document.getElementsByClassName("product-view-heading")[0]
    .innerHTML;
  let atcSuccess = false;
  if (document.getElementById("jy-minicart").innerHTML === "") {
    checkout(url, modal, time, size, link);
  } else {
    atcSuccess = true;
  }
  if (atcSuccess === true) {
    window.location = url;

    Discord(
      item,
      "",
      "https://media-exp1.licdn.com/dms/image/C560BAQF1MDD7Ff_1yg/company-logo_200_200/0?e=1602115200&v=beta&t=1L1_fQ1Y6qRMUPXE8dzRviXb3hxc5v7WsjY_EVzWexY",
      size,
      "JunkYard",
      link
    );
    Webhook(
      item,
      "",
      "https://media-exp1.licdn.com/dms/image/C560BAQF1MDD7Ff_1yg/company-logo_200_200/0?e=1602115200&v=beta&t=1L1_fQ1Y6qRMUPXE8dzRviXb3hxc5v7WsjY_EVzWexY",
      size,
      "JunkYard",
      link
    );
  }
}

// .cart-add-button-wrapper

function buttonAdd() {
  $(document).ready(function () {
    $(".cart-add-button-wrapper").css("display", "block");
  });
}
