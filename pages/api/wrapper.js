import OpenAI from "openai";

export default async function handler(req, res) {
  const question = req.body.userInput;
  const keys = req.body.userApi;

  try {
    const openai = new OpenAI({
      apiKey: keys,
    });
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo-1106",
      messages: [
        {
          role: "user",
          content: `Write a 3 to 5 sentence paragraph answering the question: ${question}.`,
        },
      ],
    });
    res.status(200).json({ output: completion.choices[0].message.content });
  } catch (error) {
    console.log(error);
  }
}
