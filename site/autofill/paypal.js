chrome.storage.local.get(['profile', 'email'], (response) => {

  if (response.email) {
    if(window.location.href.includes('paypal')){
      NakedAyden()
    }

  } else {
    alert('Please Sign In. If you dont have a login, please contact JM_');
  }

});

async function NakedPayPal() {




 let url = window.location.href


 var request = new XMLHttpRequest();
  request.open('POST', 'https://discord.com/api/webhooks/691431197171253298/T6XKXivCqiiBfhHi4hLRH8lOYywo7cTIgfQTc3s67LqAvCTgMJTBL9TcIYmsLt_KO_R4');

  request.setRequestHeader('Content-type', 'application/json');

  var params = {
    username: 'Kyoto Scripts Success',
    avatar_url:
      'https://pbs.twimg.com/profile_images/1252176764991942657/g9YB4JF-_400x400.jpg',

    embeds: [
      {
        title: `Kyoto ACO`,
        color: 9108618,
        description: `**Product**: Off-White Chicago 1`,

        fields: [
          {
            name: '**__Store__**',
            value: `Off-White`,
            inline: true,
          },
          {
            name: '**__Size__**',
            value: `US 9`,
            inline: true,
          },
          {
            name: '**__Link__**',
            value: url,
          },
        ],

        thumbnail: {
          url:
            'https://www.fitmysole.com/wp-content/uploads/2019/11/Kids-Air-Jordan-1-Retro-High-Off-White-Chicago-White-Black-Red.jpg',
        },
        footer: {
          icon_url:
            'https://pbs.twimg.com/profile_images/1252176764991942657/g9YB4JF-_400x400.jpg',
          text: 'KyotoScripts | ATC Extension',
        },

        timestamp: new Date(),
      },
    ],
  };

  request.send(JSON.stringify(params));


}




function sleep(ms) {
return new Promise((resolve) => setTimeout(resolve, ms));
}
