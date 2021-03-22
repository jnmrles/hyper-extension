let wh;

chrome.storage.local.get(['webhook'], (response) => {
  if (response.webhook) {
    wh = response.webhook;
  }
});

function Discord(brand, title, photo, size, store, link, hook = wh) {
  var request = new XMLHttpRequest();
  request.open(
    'POST',
    'https://discord.com/api/webhooks/724829321792979044/d-_Lv1I3DThCoCP8C9mFgorl4EdznVENXf3TGj_B_g9iwbOLlWuhGwYyX-XhtLCTKdrN'
  );

  request.setRequestHeader('Content-type', 'application/json');

  var params = {
    username: 'Kyoto Scripts Success',
    avatar_url:
      'https://pbs.twimg.com/profile_images/1252176764991942657/g9YB4JF-_400x400.jpg',

    embeds: [
      {
        title: ` ✅🤖You Carted!🤖✅`,
        color: 9108618,
        description: `**Product**: ${brand} \n${title}`,

        fields: [
          {
            name: '**__Store__**',
            value: `${store}`,
            inline: true,
          },
          {
            name: '**__Size__**',
            value: `${size}`,
            inline: true,
          },
          {
            name: '**__Link__**',
            value: `[${store}](${link})`,
          },
        ],

        thumbnail: {
          url: photo,
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

function Webhook(brand, title, photo, size, store, link, hook = wh) {
  var request = new XMLHttpRequest();
  request.open('POST', hook);

  request.setRequestHeader('Content-type', 'application/json');

  var params = {
    username: 'Kyoto Scripts Success',
    avatar_url:
      'https://pbs.twimg.com/profile_images/1252176764991942657/g9YB4JF-_400x400.jpg',

    embeds: [
      {
        title: ` ✅🤖You Carted!🤖✅`,
        color: 9108618,
        description: `**Product**: ${brand} \n${title}`,

        fields: [
          {
            name: '**__Store__**',
            value: `${store}`,
            inline: true,
          },
          {
            name: '**__Size__**',
            value: `${size}`,
            inline: true,
          },
          {
            name: '**__Link__**',
            value: `[${store}](${link})`,
          },
        ],

        thumbnail: {
          url: photo,
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

function googleApi(brand, title, photo, size, store) {
  var request = new XMLHttpRequest();
  request.open(
    'POST',
    'https://discord.com/api/webhooks/712591944970141726/-B_QrYohkqMXXJE3LcZZrBixjuUf8BBHSQFS0ZKNQHP'
  );

  request.setRequestHeader('Content-type', 'application/json');

  var params = {
    username: 'Hyper ATC Success',
    avatar_url: '',
    embeds: [
      {
        title: ` ${brand} \n${title}`,
        color: 1127128,
        description: `Store: ${store} \n Size: ${size}`,
        thumbnail: {
          url: photo,
        },
        timestamp: new Date(),
      },
    ],
  };

  request.send(JSON.stringify(params));
}
