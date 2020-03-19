chrome.storage.local.get('email', response => {
  if (response.email) {
    $.ajax({
      method: 'POST',
      url: 'http://localhost:8080/api/users/test',
      data: { email: response.email },
      dataType: 'json',

      success: function(data, status, xhr) {
        // ! Commented out logic could be referenced to authorize with cookies !
        // localStorage.setItem(
        //   'accessToken',
        //   xhr.getResponseHeader('access-token')
        // );
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

chrome.storage.local.get('size', response => {
  if (response.size) {
    document.querySelector('#size-input').value = response.size;
  }
});

chrome.storage.local.get('store', response => {
  if (response.store) {
    document.querySelector('#store').value = response.store;
  } else {
    document.querySelector('#store').value = 'choose';
  }
});

document.querySelector('#changeColor').addEventListener('click', event => {
  console.log('click');
  event.preventDefault();
  // read the size that the user has selected
  const size = document.querySelector('#size-input').value;

  chrome.storage.local.set({ size });
  alert('submmited');
});

document.querySelector('#store').addEventListener('change', () => {
  // read the size that the user has selected

  const store = document.querySelector('#store').value;

  chrome.storage.local.set({ store });
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
