(async function () {
  const config = {
    apiKey: "AIzaSyBTHy7xvizGvZNKLwnxosAz4y7jJiiACTw",
    authDomain: "kyoto-chrome.firebaseapp.com",
    projectId: "kyoto-chrome",
    storageBucket: "kyoto-chrome.appspot.com",
    messagingSenderId: "393228039353",
    appId: "1:393228039353:web:467e9e2532bbf03ce41768",
    measurementId: "G-R2NK6FKM7H",
  };

  firebase.initializeApp(config);

  const auth = firebase.auth();
  let db = firebase.firestore();

  const emailInput = $("#email");
  const passInput = $("#password");

  try {
    await auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL);
  } catch (error) {
    console.log(error);
  }

  const onAuthError = (error) => {
    $(".err").attr("style", "display: block");
    if (error.code === "auth/invalid-email") {
      console.log("The email address is poorly formatted.");
      return;
    }

    if (error.code === "auth/wrong-password") {
      console.log("The password is invalid.");
      return;
    }

    if (error.code === "auth/user-not-found") {
      console.log("There is no user record corresponding to this email");
      return;
    }

    console.log(error.message);
  };

  auth.onAuthStateChanged(async (user) => {
    if (user) {
      $("#auth").hide();
      $("#content").show();
      $("#dash").show();

      return true;
    } else {
      isAuthenticated = false;
      chrome.storage.local.clear();
      $("#content").fadeOut("slow", function () {
        $("#content").hide();
        $("#settings-profile").hide();
        $("#auth").fadeIn("medium");
        $("#auth").show();
      });
    }
  });

  $("#logout").click(async function (event) {
    let userEmail = chrome.storage.local.get("email", (response) => {
      if (response.email) {
        chrome.storage.local.clear();
        db.collection("users")
          .where("email", "==", response.email)
          .get()
          .then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
              // doc.data() is never undefined for query doc snapshots
              const dt = doc.data();

              if (dt) {
                db.collection("users")
                  .doc(doc.id)
                  .update({
                    logged: firebase.firestore.FieldValue.increment(-1),
                  });
                return true;
              }
              return false;
            });
          })
          .catch(console.log("error"));
      }
    });

    $(".err").attr("style", "display: none");

    chrome.storage.local.clear();

    auth.signOut().catch(onAuthError);
  });

  $("#login").click(function (event) {
    // Login Logic
    let email = emailInput.val();

    auth
      .signInWithEmailAndPassword(emailInput.val(), passInput.val())
      .then(async () => {
        let documentRef = db.collection("users").doc(email);

        documentRef.get().then(async (documentSnapshot) => {
          if (!documentSnapshot.exists) {
            await db.collection("users").doc(email).set(
              {
                email: email,
                logged: 0,
              },
              { merge: true }
            );
          }
        });
      })

      .then(async () => {
        db.collection("users")
          .where("email", "==", email)
          .get()
          .then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
              // doc.data() is never undefined for query doc snapshots
              const dt = doc.data();

              if (dt) {
                if (dt.logged >= 1) {
                  auth.signOut().catch(onAuthError);
                  alert("Log In Detected on Other Device");
                } else {
                  db.collection("users")
                    .doc(doc.id)
                    .update({
                      logged: firebase.firestore.FieldValue.increment(1),
                    });
                  return true;
                }
              }
            });
          })
          .catch((err) => {
            console.log(err);
          });
      })

      .catch(onAuthError);

    chrome.storage.local.set({ email });

    event.preventDefault();
  });
})();
