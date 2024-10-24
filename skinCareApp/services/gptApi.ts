import RNFS from 'react-native-fs';
const OpenAI = require('openai');
import Config from 'react-native-config';

const apiKey = Config.OPENAI_API_KEY;

export const getSkincareAdvice = async (photoUri: string, routine: string) => {

  console.log("photo path: " + photoUri);

  const openai = new OpenAI({ apiKey: apiKey });

  const prompt = `You are a professional skincare expert with years of experience. 
  Analyze the user's skincare routine and provide advice on improving their skincare routine based on this information.
  Skincare routine:
  ${routine}`;

  try {
    // Пример без использования изображения
    const response = await openai.chat.completions.create({
        model: "gpt-4", // Используйте правильную модель
        messages: [
            {
                role: "user",
                content: prompt,
            },
        ],
        max_tokens: 1024,
    });

    const responseMessage = response.choices[0].message.content;
    console.log('Response from API:' + responseMessage);
    return responseMessage;

  } catch (error) {
    console.error('Error from API:', error);
  }
};
                    //localtest

// (async () => {
//   getSkincareAdvice("./test.png", "waterwash");
// })();
