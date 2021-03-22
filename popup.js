// ##################### GETTER FUNCTTIONS ##########################
// ##################################################################

const stores = { naked: true, zalando: true };

chrome.storage.local.get("webhook", (response) => {
  if (response.webhook) {
    // Try and login behind the scenes
    document.querySelector("#webhook").value = response.webhook;
  }
});

chrome.storage.local.get("payment", (response) => {
  if (response.payment) {
    const setting = response.payment;
    if (setting === "cc") {
      $("#ppTab").removeClass("active");
      $("#ccTab").addClass("active");
    } else {
      $("#ccTab").removeClass("active");
      $("#ppTab").addClass("active");
    }
  }
});

chrome.storage.local.get("size", (response) => {
  if (response.size) {
    document.querySelector("#size-input").value = response.size;
  }
});

chrome.storage.local.get("store", (response) => {
  if (response.store) {
    document.querySelector("#store").value = response.store;

    if (stores[response.store] !== true) {
      $("#acoInput").attr("disabled", true);
    } else {
      $("#acoInput").removeAttr("disabled");
    }
  } else {
    document.querySelector("#store").value = "choose";
  }
});

chrome.storage.local.get("timeout", (response) => {
  if (response.timeout) {
    // Try and login behind the scenes
    document.querySelector("#time-input").value = response.timeout;
  }
});

chrome.storage.local.get("started", (response) => {
  if (response.started) {
    $("#status").text("Kyoto Task ON");
    $("#status").css("color", "green");
  }
});

chrome.storage.local.get("random", (response) => {
  if (response.random) {
    $("#randomSpan").css("color", "rgb(128, 255, 217)");
    $("#randomCheck").attr("checked", true);
  } else {
    $("#randomSpan").css("color", "rgba(63, 61, 61, 0.911)");
  }
});

chrome.storage.local.get("aco", (response) => {
  if (response.aco) {
    $("#acoSpan").css("color", "rgb(128, 255, 217)");
    $("#acoInput").attr("checked", true);
  } else {
    $("#acoSpan").css("color", "rgba(63, 61, 61, 0.911)");
  }
});

chrome.storage.local.get("profile", function (response) {
  if (response.profile) {
    const profile = JSON.parse(response.profile);

    $("#firstName").val(profile.firstName);
    $("#lastName").val(profile.lastName);
    $("#billing-email").val(profile.email);
    $("#billing-phone").val(profile.phoneNumber);
    $("#address").val(profile.address);
    $("#address2").val(profile.address2);
    $("#zipCode").val(profile.zipCode);
    $("#city").val(profile.city);
    $("#state").val(profile.state);
    $("#country").val(profile.country);
  }
});

// ##################################################################
// ##################################################################

// ##################### EVEMT HANDLER FUNCTTIONS ###################
// ##################################################################

$("#changeColor").click(() => {
  // read the size that the user has selected
  let size = $("#size-input").val();
  const site = $("#store").val();

  const started = true;

  chrome.storage.local.set({ size });
  chrome.storage.local.set({ site });

  chrome.storage.local.set({ started });

  alert(`Task started on site: ${site} and size: ${size}`);

  $("#status").text("Kyoto Task ON");
  $("#status").css("color", "green");
});

$("#store").change(() => {
  // read the size that the user has selected
  const store = $("#store").val();

  console.log(stores["naked"]);

  if (stores[store] !== true) {
    $("#acoInput").attr("disabled", true);
    $("#acoInput").attr("checked", false);
    let aco = false;
    chrome.storage.local.set({ aco });
    $("#acoSpan").css("color", "rgba(63, 61, 61, 0.911)");
  } else {
    $("#acoInput").removeAttr("disabled");
  }

  chrome.storage.local.set({ store });

  chrome.storage.local.get("project", (response) => {
    console.log(response.project);
  });
});

$("#randomSpan").click((e) => {
  let random = e.target.checked;

  chrome.storage.local.set({ random });

  console.log("Random Value", random);

  if (random) {
    $("#randomSpan").css("color", "rgb(128, 255, 217)");
  } else {
    $("#randomSpan").css("color", "rgba(63, 61, 61, 0.911)");
  }
});

$("#aco").click((e) => {
  let aco = e.target.checked;

  chrome.storage.local.set({ aco });

  if (aco) {
    $("#acoSpan").css("color", "rgb(128, 255, 217)");
  } else {
    $("#acoSpan").css("color", "rgba(63, 61, 61, 0.911)");
  }
});

$("#stop").click(() => {
  // read the size that the user has selected
  const store = "stop";
  const started = false;

  chrome.storage.local.set({ started });
  chrome.storage.local.set({ store });
  $("#status").text("Kyoto Task OFF");
  $("#status").css("color", "red");
  chrome.storage.local.get("store", (response) => {
    if (response.store) {
      // Try and login behind the scenes
      console.log(response.store);
    }
  });

  alert(`Stopped`);
});

$("#discord").click(() => {
  var request = new XMLHttpRequest();
  request.open("POST", $("#webhook").val());

  request.setRequestHeader("Content-type", "application/json");

  var params = {
    username: "Kyoto Scripts Success",
    avatar_url:
      "https://pbs.twimg.com/profile_images/1252176764991942657/g9YB4JF-_400x400.jpg",
    embeds: [
      {
        title: ` $$$ You Carted! $$$`,
        color: 9108618,
        description: `**Product**: Off-White Chicago 1`,
        fields: [
          {
            name: "**__Store__**",
            value: `Off-White`,
            inline: true,
          },
          {
            name: "**__Size__**",
            value: `US 9`,
            inline: true,
          },
          {
            name: "**__Link__**",
            value: `[Off-White](https://www.off---white.com/en-us/sets/ss20-women/woman?gclid=Cj0KCQjwl4v4BRDaARIsAFjATPkqszxx4i6DDRdTRcdo3V5R4LbA4LwkcVRt3XxVqBtiL3J_CnbSUOcaAksnEALw_wcB&gclsrc=aw.ds)`,
          },
        ],
        thumbnail: {
          url:
            "https://www.fitmysole.com/wp-content/uploads/2019/11/Kids-Air-Jordan-1-Retro-High-Off-White-Chicago-White-Black-Red.jpg",
        },
        footer: {
          icon_url:
            "https://pbs.twimg.com/profile_images/1252176764991942657/g9YB4JF-_400x400.jpg",
          text: "KyotoScripts | ATC Extension",
        },
        timestamp: new Date(),
      },
    ],
  };

  request.send(JSON.stringify(params));
});

$("#discord-save").click(() => {
  const webhook = $("#webhook").val();

  chrome.storage.local.set({ webhook });

  alert(`Webhook Saved!`);
});

let myVar;
$("#refresh-start").click(() => {
  let stopped = false;
  const timeout = $("#time-input").val();

  const delay = Number(timeout * 60000);

  alert(`Auto Refresher Started: ${timeout} s`);
  myVar = setInterval(myFunction, delay);
});

$("#refresher-stop").click(() => {
  // read the size that the user has selected
  let stopped = true;
  chrome.storage.local.set({ stopped });
  myStopFunction();

  alert(` Refresher Stopped`);
});
const timeout = Number($("#time-input").val()) * 1000;

function myFunction() {
  chrome.tabs.getSelected(null, function (tab) {
    var code = "window.location.reload();";
    chrome.tabs.executeScript(tab.id, { code: code });
  });
}

function myStopFunction() {
  clearInterval(myVar);
}

$("#profile-save").click(() => {
  // read the size that the user has selected
  const profile = {
    firstName: $("#firstName").val(),
    lastName: $("#lastName").val(),
    email: $("#billing-email").val(),
    phoneNumber: $("#billing-phone").val(),
    address: $("#address").val(),
    address2: $("#address2").val(),
    zipCode: $("#zipCode").val(),
    city: $("#city").val(),
    state: $("#state").val(),
    country: $("#country").val(),
  };

  console.log("profile before", profile);

  chrome.storage.local.set({ profile: JSON.stringify(profile) });

  alert("Profile Saved!");
});
