chrome.storage.local.get(
  ["size", "store", "email", "webhook", "random"],
  (response) => {
    if ((response.size || response.random) && response.store === "footshop") {
      if (response.email) {
        javascript: (function () {
          function l(u, i) {
            var d = document;
            if (!d.getElementById(i)) {
              var s = d.createElement("script");
              s.src = u;
              s.id = i;
              d.body.appendChild(s);
            }
          }
          l("//code.jquery.com/jquery-3.5.1.min.js", "jquery");
        })();

        if (response.random) {
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
    console.log("DOM is Complete");
    Foot(size);
  }
};

function Foot(userSize, random) {
  let ATC = false;
  let foundSize = false;

  let url = window.location.href;

  $(
    ".Dropdown_activeItem_LAVaT.ProductSizesWithAvailability_activeItem_25eTk"
  )[0].click();
  let size = document.getElementsByClassName("Dropdown_list_GFfGs")[0].children;
  console.log("List", size);
  for (let i = 0; i < size.length; i++) {
    let elements = size[i];
    console.log(elements.children[0].children[0].innerText);
    if (elements.children[0].children[0].innerHTML.includes(userSize)) {
      elements.click();

      document
        .getElementsByClassName(
          "buttons_button_2ln-y ProductProperties_addToCart_32JsZ buttons_fullWidth_38p0Q buttons_orange_ry8v2"
        )[0]
        .click();

      ATC = true;
      foundSize = true;

      break;
    }
  }
  if (ATC === true) {
    checkout(
      "",
      "buttons_button_2ln-y CartFooter_button_3OniB buttons_fullWidth_38p0Q",
      10,
      userSize,
      url
    );
    console.log("checking");
  } else if (ATC === false) {
    // let newArr = document.getElementsByClassName(
    //   "Options__optionClass___3kJMeU2j7k Options__withBorderBottom___3Im5jx7ea-"
    // );

    // let element = size[Math.floor(Math.random() * size.length)];

    // let randSize = element.children[0].children[0].innerHTML;

    // Foot(randSize);
    console.log("false");
  }
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

//  Checkout - Functions

// Helper checkout function for naked
async function checkout(url, modal, time, size, link) {
  let photo = $("ImageSlider_image_2Vl4h").attr("src");
  let photoLink = $(photo).attr("src");
  let photoUrl = `https:${photoLink}`;
  await sleep(time);
  let atcSuccess = false;
  if (!document.getElementsByClassName(modal)[0]) {
    checkout(url, modal, time, size);
  }
  if (document.getElementsByClassName(modal)[0]) {
    atcSuccess = true;
    url = $(document.getElementsByClassName(modal)[0]).attr("href");
  }
  if (atcSuccess === true) {
    let brand = document.getElementsByClassName(
      "ProductProperties_hasLogo_2b-0v"
    )[0].innerHTML;
    Webhook(brand, "", photoUrl, size, "FootShop", link);

    Discord(brand, "", photoUrl, size, "FootShop", link);

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
