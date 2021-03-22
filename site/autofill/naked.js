chrome.storage.local.get(["profile", "email", "store", "aco"], (response) => {
  if (response.email) {
    if (
      window.location.href.includes("cart/view") &&
      response.store === "naked" &&
      response.aco
    ) {
      NakedAco(response.profile);
    }
  } else {
    alert("Please Sign In. If you dont have a login, please contact JM_");
  }
});

async function NakedAco(profile) {
  const billing = JSON.parse(profile);

  $(document.getElementsByName("firstName")[0]).val(billing.firstName);
  $(document.getElementsByName("lastName")[0]).val(billing.lastName);

  $(document.getElementsByName("addressLine2")[0]).val(billing.address);

  $(document.getElementsByName("city")[0]).val(billing.city);

  $(document.getElementsByName("addressLine2")[0]).val(billing.address);

  $(document.getElementsByName("phoneNumber")[0]).val(billing.phoneNumber);

  $(document.getElementsByName("postalCode")[0]).val(billing.zipCode);

  document
    .getElementsByClassName(
      "continue-btn continue-btn--details continue-btn--finalize-step btn btn-primary btn-lg"
    )[0]
    .click();

  $("#cart-form > section.payment-section").addClass("active");

  document
    .getElementsByClassName(
      "method__header custom-control custom-radio mr-0 mb-4 d-flex"
    )[1]
    .click();

  $("#cart-form > section.cart-submit").addClass("active");

  $("#terms").click();

  document
    .getElementsByClassName(
      "continue-btn btn btn-primary checkout-btn btn-lg"
    )[0]
    .click();
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
