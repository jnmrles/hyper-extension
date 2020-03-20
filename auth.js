/* eslint-disable @typescript-eslint/explicit-function-return-type */
(async function () {
    const config = {
        apiKey: "AIzaSyBS72fUTDhzpyEMNW0FThCJvpDW6yvFy14",
        authDomain: "hyper-api.firebaseapp.com",
        databaseURL: "https://hyper-api.firebaseio.com",
        projectId: "hyper-api",
        storageBucket: "hyper-api.appspot.com",
        messagingSenderId: "118035399244",
        appId: "1:118035399244:web:d9483d1de0c4337390eae9",
        measurementId: "G-F1R7B815KE"
    };

    firebase.initializeApp(config);

    const auth = firebase.auth();

    const emailInput = $('#email');
    const passInput = $('#password');

    let email;

    try {
        await auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL);
    } catch (error) {
        console.log(error);
    }

    const onAuthError = error => {
        if (error.code === 'auth/invalid-email') {
            console.log('The email address is poorly formatted.');
            return;
        }

        if (error.code === 'auth/wrong-password') {
            console.log('The password is invalid.');
            return;
        }

        if (error.code === 'auth/user-not-found') {
            console.log('There is no user record corresponding to this email');
            return;
        }

        console.log(error.message);
    };

    auth.onAuthStateChanged(async user => {
        if (user) {
            try {
                idToken = await auth.currentUser.getIdToken(true);
            } catch (error) {
                onAuthError(error);
                return;
            }

            $('#auth').hide();
            $('#dash').show();
        } else {
            isAuthenticated = false;
        }
    });

    $('#logout').click(function (event) {
        chrome.storage.local.clear();

        auth.signOut().catch(onAuthError);

        $('#dash').fadeOut('slow', function () {
            $('#dash').hide()
            $('#auth').fadeIn('medium');
            $('#auth').show()
        });
    });

    $('#login').click(function (event) {
        // Login Logic 
        auth.signInWithEmailAndPassword(emailInput.val(), passInput.val()).catch(onAuthError);

        $('#auth').fadeOut('slow', function () {
            $('#auth').hide()
            $('#dash').fadeIn('medium');
            $('#dash').show()
        });

        chrome.storage.local.set({
            email
        });
    });
})();