// if (localStorage.length > 0) {
//   $('#showSignIn').addClass('invisible');
//   $('#jobForm').removeClass('invisible');
// }
chrome.storage.local.get('email', response => {
  if (response.email) {
    $.ajax({
      method: 'POST',
      url: 'http://localhost:8080/api/users/test',
      data: { email: response.email },
      dataType: 'json',

      success: function(data, status, xhr) {
        localStorage.setItem(
          'accessToken',
          xhr.getResponseHeader('access-token')
        );
        // localStorage.setItem('expiry', xhr.getResponseHeader('expiry'));
        // localStorage.setItem('tokenType', xhr.getResponseHeader('token-type'));
        // localStorage.setItem('uid', xhr.getResponseHeader('uid'));
        // localStorage.setItem('client', xhr.getResponseHeader('client'));

        $('#showSignIn').fadeOut('slow', function() {
          $('#showSignIn').addClass('invisible');
          $('#jobForm').fadeIn('medium');
          $('#jobForm').removeClass('invisible');
        });
      },
      error: function(data) {
        $('.error')
          .fadeIn(300)
          .delay(1500)
          .fadeOut(400);
      },
    });
  }
});

$('#login').click(function(event) {
  event.preventDefault();
  var email = $('#email').val();
  var password = $('#password').val();

  $.ajax({
    method: 'POST',
    url: 'http://localhost:8080/api/users/test',
    data: { email: email },
    dataType: 'json',

    success: function(data, status, xhr) {
      localStorage.setItem(
        'accessToken',
        xhr.getResponseHeader('access-token')
      );
      // localStorage.setItem('expiry', xhr.getResponseHeader('expiry'));
      // localStorage.setItem('tokenType', xhr.getResponseHeader('token-type'));
      // localStorage.setItem('uid', xhr.getResponseHeader('uid'));
      // localStorage.setItem('client', xhr.getResponseHeader('client'));

      $('#showSignIn').fadeOut('slow', function() {
        $('#showSignIn').addClass('invisible');
        $('#jobForm').fadeIn('medium');
        $('#jobForm').removeClass('invisible');
      });
      chrome.storage.local.set({ email });
    },
    error: function(data) {
      $('.error')
        .fadeIn(300)
        .delay(1500)
        .fadeOut(400);
    },
  });
  event.stopPropagation();
});

chrome.storage.local.get('colour', response => {
  if (response.colour) {
    document.querySelector('#colour-input').value = response.colour;
  }
});

chrome.storage.local.get('test', response => {
  if (response.test) {
    document.querySelector('#cars').value = response.test;
  } else {
    document.querySelector('#cars').value = 'choose';
  }
});

document.querySelector('#changeColor').addEventListener('click', () => {
  console.log('click');
  // read the colour that the user has selected
  const colour = document.querySelector('#colour-input').value;
  const test = document.querySelector('#cars').value;

  chrome.storage.local.set({ colour });
  alert('submmited');

  // get all the google tabs and send a message to their tabs
  chrome.tabs.query({ url: 'https://*.nakedcph.com/*' }, tabs => {
    tabs.forEach(tab => chrome.tabs.sendMessage(tab.id, { colour }));
  });
});

document.querySelector('#cars').addEventListener('change', () => {
  // read the colour that the user has selected

  const test = document.querySelector('#cars').value;

  chrome.storage.local.set({ test });

  // get all the google tabs and send a message to their tabs
});

$('#logout').click(function(event) {
  event.preventDefault();
  chrome.storage.local.clear();
  $('#jobForm').fadeOut('slow', function() {
    $('#jobForm').addClass('invisible');
    $('#showSignIn').fadeIn('medium');
    $('#showSignIn').removeClass('invisible');
  });
});
