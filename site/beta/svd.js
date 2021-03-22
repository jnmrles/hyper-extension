chrome.storage.local.get(['size', 'store', 'email', 'webhook'], (response) => {
    if (response.size && response.store === 'svd') {
      if (response.email) {
        SVD(response.size);
      } else {
        alert('Please Sign In. If you dont have a login, please contact JM_');
      }
    }
  });
  









  function SVD(userSize, random) {
    let ATC = false;
    let foundSize = false;
    let size = document.getElementsByClassName('swatch-option text')
    let myArr = Array.prototype.slice.call(document.getElementsByClassName('swatch-option text'));
    let url = window.location.href;

    console.log(myArr)
  
    let newArr = myArr.filter((s) => {
    if(!$(s).hasClass('disabled')){
        return s
    }
    });


    for (let i = 0; i < size.length; i++) {
      
  console.log(size)

      console.log("trying...")
      let elements = size[i];
      console.log('element',elements)
  
      if (elements.innerHTML.includes(userSize)) {

                  
        
        elements.click();
  
        // document
        //   .getElementsByClassName('btn btn-primary product-form-submit')[0]
        //   .click();
  
        // ATC = true;
        // foundSize = true;
        console.log("found Element")
  
        break;
      } 
    }
    if (ATC === true) {
    //   checkout(
    //     'https://www.nakedcph.com/en/cart/view',
    //     'mc-total-label',
    //     10,
    //     userSize,
    //     url
    //   );
    console.log("ATC set to true")
    } else if (ATC === false) {
    //   let element = newArr[Math.floor(Math.random() * newArr.length)];
    //   let newSize = element.innerHTML;
  
    //   SVD(newSize.split('<')[0]);
    console.log("ATC Failed")
    }
  }



  
  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  


  //  Checkout - Functions
  
  // Helper checkout function for naked
  async function checkout(url, modal, time, size, link) {
    await sleep(time);
    let atcSuccess = false;
    if (!document.getElementsByClassName(modal)[0]) {
      checkout(url, modal, time, size, link);
    }
    if (document.getElementsByClassName(modal)[0]) {
      atcSuccess = true;
    }
    if (atcSuccess === true) {
      let brand = document.getElementsByClassName(
        'product-property product-name'
      )[0].innerHTML;
  
      Webhook(
        brand,
        '',
        'https://pbs.twimg.com/profile_images/582179018419482624/RppHUjBa_400x400.jpg',
        size,
        'naked',
        link
      );
  
      Discord(
        brand,
        '',
        'https://pbs.twimg.com/profile_images/582179018419482624/RppHUjBa_400x400.jpg',
        size,
        'naked',
        link
      );
  
      window.location = url;
    }
  }




































  chrome.storage.local.get(['sup', 'shop', 'msh'], (response) => {
    const adding = () => {
      let request = true;
  
      if (request === false) {
        Discord('oh');
      }
    };
    if (response.mesh && response.shopify === 'shop') {
      let request = true;
      if (response.supreme) {
        if (request === false) {
          adding(response.supreme);
        }
      }
    }
  });
  
  chrome.storage.local.get(['sup', 'shop', 'msh'], (response) => {
    const adding = () => {
      let request = true;
  
      if (request === false) {
        Discord('oh');
      }
    };
    if (response.mesh && response.shopify === 'shop') {
      let request = true;
      if (response.supreme) {
        if (request === false) {
          adding(response.supreme);
        }
      }
    }
  });
  