chrome.storage.local.get('email', response => {
  if (response.email) {
    // Try and login behind the scenes
  }
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
