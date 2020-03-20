chrome.storage.local.get('email', response => {
  if (response.email) {
    // Try and login behind the scenes
  }
});

$('#login').click(function(event) {
  event.preventDefault();
  var email = $('#email').val();
  var password = $('#password').val();

  // Login Logic 

  $('#auth').fadeOut('slow', function() {
    $('#auth').hide()
    $('#dash').fadeIn('medium');
    $('#dash').show()
  });

  chrome.storage.local.set({ email });
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

$('#changeColor').click(() => {
  // read the size that the user has selected
  const size = $('#size-input').val();
  const site = $('#store').val();

  chrome.storage.local.set({ size });
  alert(`Task started on site: ${site} and size: ${size}`);
})

$('#store').change(() => {
  // read the size that the user has selected
  const store = $('#store').val();

  chrome.storage.local.set({ store });
})

$('#logout').click(function(event) {
  chrome.storage.local.clear();
  
  $('#dash').fadeOut('slow', function() {
    $('#dash').hide()
    $('#auth').fadeIn('medium');
    $('#auth').show()
  });
});
