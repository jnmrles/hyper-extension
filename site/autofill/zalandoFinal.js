chrome.storage.local.get(["profile", "email", "store", "aco"], (response) => {
  if (response.email) {
    if (
      window.location.href.includes("/checkout/confirm") &&
      response.store === "zalando" &&
      response.aco
    ) {
      console.log("hello from final");
      ZalandoFinal(response.profile);
    }
  } else {
    alert("Please Sign In. If you dont have a login, please contact JM_");
  }
});

async function ZalandoFinal(profile) {
  document.getElementsByClassName("z-1-button__content")[0].click();
  console.log("ZALANDO ACO");
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
