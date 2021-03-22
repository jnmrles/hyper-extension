chrome.storage.local.get(["profile", "email"], (response) => {
  if (response.email) {
    if (window.location.href.includes("ayden")) {
      NakedAyden();
    }
  } else {
    alert("Please Sign In. If you dont have a login, please contact JM_");
  }
});

async function NakedAyden() {
  // let check = new URL(window.location.href)

  $("#pmmdetails-paypal").css("visibility", true);

  console.log("Check Out!");
}

function test() {
  alert("testing");
  document.getElementsByName("pay")[0].click();
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
