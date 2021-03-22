chrome.storage.local.get(["profile", "email", "store", "aco"], (response) => {
  if (response.email) {
    if (
      window.location.href.includes("/cart") &&
      response.store === "zalando" &&
      response.aco
    ) {
      ZalandoAco(response.profile);
    }
  } else {
    alert("Please Sign In. If you dont have a login, please contact JM_");
  }
});

async function ZalandoAco(profile) {
  $(
    ".z-1-button.z-coast-base-primary-accessible.z-coast-base__totals-tile__button-checkout.z-1-button--primary.z-1-button--button"
  )[0].click();
  console.log("ZALANDO ACO");
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
