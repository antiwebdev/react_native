import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // Ensure this is set securely in your environment
});

export const getSkincareAdvice = async (photoUri: string, routine: string) => {
  const prompt = `You are a professional skincare expert with years of experience. 
                Analyze the user's skincare routine and the attached photo of their skin.
                Provide advice on improving their skincare routine based on this information.

                Skincare routine:
                ${routine}
                Attached photo: ${photoUri}`;

  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [
        { role: 'system', content: 'You are a professional skincare consultant.' },
        { role: 'user', content: prompt },
      ],
    });

    return response.choices[0].message.content; // Return the GPT response
  } catch (error) {
    console.error('Error with GPT API:', error);
    return null;
  }
};
