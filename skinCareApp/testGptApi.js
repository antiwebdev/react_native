const dotenv = require('dotenv');


dotenv.config();

const OpenAI = require('openai');



const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});



async function testGPT() {
  console.log(process.env.OPENAI_API_KEY);

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o",
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
      ]
    });

    console.log('Response:', response.choices[0].message.content);
  } catch (error) {
    console.error('Error with GPT API:', error);
  }
}

testGPT();
