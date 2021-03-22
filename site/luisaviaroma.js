chrome.storage.local.get(
  ["size", "store", "email", "webhook", "random"],
  (response) => {
    if (
      (response.size || response.random) &&
      response.store === "luisaviaroma"
    ) {
      if (response.email) {
        if (response.random) {
          Luis("random");
        } else {
          Luis(response.size);
        }
      } else {
        alert("Please Sign In. If you dont have a login, please contact JM_");
      }
    }
  }
);

function Luis(userSize, random) {
  let ATC = false;
  let foundSize = false;

  let url = window.location.href;

  document
    .getElementsByClassName("index__icon-arr_down___2Iv205gfPq")[1]
    .click();

  let size = document.getElementsByClassName(
    "SelectRow__txtContainer___i5OP-xCkLs"
  );

  for (let i = 0; i < size.length; i++) {
    let elements = size[i];

    if (elements.innerHTML.includes(userSize)) {
      elements.click();

      document
        .getElementsByClassName(
          "Button__btn___zL03HxKRRL Button__block___h27AqpZxuH"
        )[4]
        .click();

      ATC = true;
      foundSize = true;

      break;
    }
  }
  if (ATC === true) {
    checkout(
      "https://www.luisaviaroma.com/myarea/myCart.aspx",
      "badge__badge___ZkXS1UE8xS",
      10,
      userSize,
      url
    );
  } else if (ATC === false) {
    let newArr = document.getElementsByClassName(
      "Options__optionClass___3kJMeU2j7k Options__withBorderBottom___3Im5jx7ea-"
    );

    let element = newArr[Math.floor(Math.random() * newArr.length)];
    element.click();

    let randSize = document
      .getElementsByClassName("Select__rowSelect___1607_GmTdI")[1]
      .children[0].innerHTML.split(" ");

    Luis(randSize[0]);
  }
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

//  Checkout - Functions

// Helper checkout function for naked
async function checkout(url, modal, time, size, link) {
  let photo = document.getElementsByClassName(
    "slidersContainer__magnifier___3mq8hlybvi"
  )[0].children[0].children[0];
  let photoLink = $(photo).attr("src");
  let photoUrl = `https:${photoLink}`;
  await sleep(time);
  let atcSuccess = false;
  if (!document.getElementsByClassName(modal)[0]) {
    checkout(url, modal, time, size);
  }
  if (document.getElementsByClassName(modal)[0]) {
    atcSuccess = true;
  }
  if (atcSuccess === true) {
    let brand = document.getElementsByClassName(
      "item__modelDescription___3AZ_TDFyuO"
    )[0].innerHTML;
    Webhook(
      brand,
      "",
      "https://pbs.twimg.com/profile_images/1204677155629735937/mE7afzId_400x400.jpg",
      size,
      "LuisaViaroma",
      link
    );

    Discord(
      brand,
      "",
      "https://pbs.twimg.com/profile_images/1204677155629735937/mE7afzId_400x400.jpg",
      size,
      "LuisaViaroma",
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
