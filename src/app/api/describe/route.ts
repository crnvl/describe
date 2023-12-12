import OpenAI from "openai";

export async function POST(req: Request) {
  const client = new OpenAI({
    apiKey: process.env.OPENAI_KEY,
  });

  const body = await req.json();
  const imageUrl = body.imageUrl;
  const password = body.password;

  if (password == null || password != process.env.PASSWORD) {
    return Response.json({
      error: "Invalid password",
    });
  }

  const response = await client.chat.completions.create({
    model: "gpt-4-vision-preview",
    messages: [
      {
        role: "user",
        content: [
          { type: "text", text: "What’s in this image?" },
          {
            type: "image_url",
            image_url: {
              url: imageUrl,
            },
          },
        ],
      },
    ],
    max_tokens: 300,
  });

  return Response.json(response.choices[0].message);
}
