const fs = require('fs').promises;
const OpenAI = require('openai');
const dotenv = require('dotenv');

dotenv.config();

async function askAboutImage(imageFilePath) {
  const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

  // Convert the image to WebP format using sharp
  console.log("1");

  try {
    const imageBuffer = await fs.readFile(imageFilePath);
    const base64Image = imageBuffer.toString('base64');
    const encodedImage = `data:image/jpeg;base64,{${base64Image}}`;
    const response = await openai.chat.completions.create({
        model: "gpt-4o",
        messages: [
            {
                role: "user",
                content: [
                    { type: "text", text: "what is in image?" },
                    { type: "image_url", image_url: { "url": encodedImage } },
                ],
            },
        ],
        max_tokens: 1024,
    });

    console.log(response.choices[0].message.content);

    const responseMessage = response.choices[0].message.content;
    return responseMessage;

  } catch (error) {
    console.error('Error reading image:', error);
  }
  
  
}

// Example usage with one image
(async () => {
  await askAboutImage('./test.png');
})();