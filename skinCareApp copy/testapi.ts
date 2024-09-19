

const OpenAI = require('openai');
const Config = require('react-native-config');

const apiKey = Config.OPENAI_API_KEY;

const openai = new OpenAI({
  apiKey: apiKey,
});



  const response = openai.chat.completions.create({
    model: 'gpt-4o',
    messages: [
      {
        "role": "user",
        "content": [
          {"type": "text", "text": "What’s in this image?"},
          {
            "type": "image_url",
            "image_url": {
              "url": "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
            },
          },
        ],
      }
    ],
  });

  console.log(response.choices[0].message.content);


