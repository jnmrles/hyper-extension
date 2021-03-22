$("#task-icon").click(function (event) {
  $("#settings-profile").fadeOut("fast", function () {
    $("#dash").fadeIn("small");

    $("#settings-profile").hide();
    $("#refresher").hide();
    $("#billing-settings").hide();
    $("dash").show();

    $("#settings-icon").removeClass("active");
    $("#refresher-icon").removeClass("active");
    $("#profile-icon").removeClass("active");

    $("#task-icon").addClass("active");
  });
});

$("#settings-icon").click(function (event) {
  $("#dash").fadeOut("fast", function () {
    $("#dash").hide();
    $("#refresher").hide();
    $("#billing-settings").hide();
    $("#settings-profile").fadeIn("small");
    $("settings-profile").show();

    $("#task-icon").removeClass("active");
    $("#refresher-icon").removeClass("active");
    $("#profile-icon").removeClass("active");
    $("#settings-icon").addClass("active");
  });
});

$("#refresher-icon").click(function (event) {
  $("#dash").fadeOut("fast", function () {
    $("#dash").hide();
    $("#settings-profile").hide();
    $("#billing-settings").hide();
    $("#refresher").fadeIn("small");

    $("refresher").show();

    $("#task-icon").removeClass("active");
    $("#settings-icon").removeClass("active");
    $("#profile-icon").removeClass("active");

    $("#refresher-icon").addClass("active");
  });
});

$("#profile-icon").click(function (event) {
  $("#dash").fadeOut("fast", function () {
    $("#dash").hide();
    $("#settings-profile").hide();
    $("#refresher").hide();
    $("#billing-settings").fadeIn("small");

    $("#billing-settings").show();

    $("#task-icon").removeClass("active");
    $("#settings-icon").removeClass("active");
    $("#refresher-icon").removeClass("active");

    $("#profile-icon").addClass("active");
  });
});

$("#ppTab").click(function (event) {
  $("#ccTab").removeClass("active");
  $("#ppTab").addClass("active");
});

$("#ppTab").click(function (event) {
  $("#ccTab").removeClass("active");
  $("#ppTab").addClass("active");

  const payment = "pp";

  chrome.storage.local.set({ payment });
});

$("#ccTab").click(function (event) {
  $("#ppTab").removeClass("active");
  $("#ccTab").addClass("active");

  const payment = "cc";

  chrome.storage.local.set({ payment });
});
