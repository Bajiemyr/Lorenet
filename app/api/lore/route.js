import OpenAI from 'openai'

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
})

export async function POST(req) {
  const { topic } = await req.json()

  const prompt = `
You are LORENET, an AI internet historian.

Generate a cinematic but factual internet lore dossier for:
"${topic}"

Include:
- Origins
- Timeline
- Cultural spread
- Related communities
- Modern evolution
- Internet significance

Tone:
intelligent, mysterious, internet-native.
`

  const response = await client.chat.completions.create({
    model: 'gpt-4.1-mini',
    messages: [
      {
        role: 'user',
        content: prompt
      }
    ]
  })

  return Response.json({
    result: response.choices[0].message.content
  })
}