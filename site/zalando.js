chrome.storage.local.get(
  ["size", "store", "email", "webhook", "random"],
  (response) => {
    if (
      (response.size || response.random) &&
      response.store === "zalando" &&
      !window.location.href.includes("/cart")
    ) {
      if (response.email) {
        if (response.random) {
          console.log("hello");
          Zalando("random");
        } else {
          Zalando(response.size);
        }
      } else {
        alert("Please Sign In. If you dont have a login, please contact JM_");
      }
    }
  }
);
async function Zalando(userSize, random) {
  await sleep(0);
  let ATC = false;
  let foundSize = false;
  let size = document.getElementsByClassName(
    "zaI4jo JT3_zV _0xLoFW _78xIQ- EJ4MLB"
  );
  let myArr = [];
  let url = window.location;

  $(
    ".DJxzzA.u9KIT8.NB8Ll4.vk5JMf.ZkIJC-.Vn-7c-.FCIprz.heWLCX.RzUmIb.LyRfpJ.Md_Vex.NN8L-8.GTG2H9.MfX1a0.WCjo-q.EKabf7.aX2-iv.r9BRio.E6Km4r.mo6ZnF"
  )[0].click();
  for (let i = 0; i < size.length; i++) {
    let elements = size[i];
    myArr.push(elements);
    console.log("size", elements);

    if (
      elements.children[1].children[0].children[0].children[0].children[0].innerHTML.includes(
        userSize
      ) &&
      !$(
        elements.children[1].children[0].children[0].children[0].children[0]
      ).hasClass("_7Cm1F9 ka2E9k uMhVZi dgII7d z-oVg8 D--idb")
    ) {
      elements.children[0].click();

      ATC = true;
      foundSize = true;

      break;
    }
  }

  if (ATC === true) {
    checkout(
      "/cart",
      "N1ZPtc z-oVg8 VnVJx_ ka2E9k uMhVZi FxZV-M _5Yd-hZ _2Pvyxl _9lqBzm Vd58yc DRgtJg WCjo-q AQSZ_p H0WzBz KVKCn3 u-C3dd df4QKn jGBT93",
      2,
      userSize,
      url
    );
  }

  if (ATC === false) {
    if (
      document.getElementsByClassName(
        "_1IG4Tf REEAqs _78xIQ- JCuRr_ VRcXxm yqrcoC hj1pfK"
      )[0]
    ) {
      ATC = true;
      await checkout(
        "/cart",
        "N1ZPtc z-oVg8 VnVJx_ ka2E9k uMhVZi FxZV-M _5Yd-hZ rAOuR2 _9lqBzm Vd58yc DRgtJg WCjo-q AQSZ_p H0WzBz KVKCn3 u-C3dd df4QKn jGBT93",
        2,
        userSize,
        url
      );

      return;
    }

    if (myArr.length === 0) {
      Zalando(userSize);
    }

    let newArr = myArr.filter((s) => {
      if (
        !$(
          s.children[1].children[0].children[0].children[0].children[0]
        ).hasClass("_7Cm1F9 ka2E9k uMhVZi dgII7d z-oVg8 D--idb")
      ) {
        return s;
      }
    });

    let element = newArr[Math.floor(Math.random() * newArr.length)];
    console.log("element", element);
    let newSize =
      element.children[1].children[0].children[0].children[0].children[0]
        .innerHTML;

    Zalando(newSize);
  }
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

//  Checkout - Functions

async function checkout(url, modal, time, size, link) {
  let badges = document.getElementsByClassName(modal)[1];
  let brand = document.getElementsByClassName(
    "OEhtt9 ka2E9k uMhVZi z-oVg8 pVrzNP w5w9i_ _1PY7tW _9YcI4f"
  )[0].innerHTML;

  console.log("brand", brand);

  console.log("bag count", badges.innerHTML);

  await sleep(time);
  let atcSuccess = false;
  if (badges.innerHTML.includes("0")) {
    checkout(url, modal, time, size, link);
  }
  if (!badges.innerHTML.includes("0")) {
    atcSuccess = true;
  }
  if (atcSuccess === true) {
    let photo =
      "https://pbs.twimg.com/profile_images/1101484514277240832/6bY0Q187.png";

    Webhook(brand, "", photo, size, "Zalando", link);

    Discord(brand, "", photo, size, "Zalando", link);

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
