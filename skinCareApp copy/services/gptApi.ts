import OpenAI from 'openai';

import Config from 'react-native-config';

const apiKey = Config.OPENAI_API_KEY;

const openai = new OpenAI({
  apiKey: apiKey,
});

export const getSkincareAdvice = async (photoUri: string, routine: string) => {
  const prompt = `You are a professional skincare expert with years of experience. 
                Analyze the user's skincare routine and the attached photo of their skin.
                Provide advice on improving their skincare routine based on this information.

                Skincare routine:
                ${routine}
                Attached photo: ${photoUri}`;

  console.log(apiKey);

  try {
    const response = await openai.chat.completions.create({
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

    return response.choices[0].message.content; // Return the GPT response
  } catch (error) {
    console.error('Error with GPT API:', error);
    return null;
  }
};
