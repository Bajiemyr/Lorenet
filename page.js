'use client'

import { useState } from 'react'

export default function Home() {
  const [topic, setTopic] = useState('')
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState('')

  async function generateLore() {
    setLoading(true)
    setResult('')

    const res = await fetch('/api/lore', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ topic })
    })

    const data = await res.json()
    setResult(data.result)
    setLoading(false)
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6">
      <h1 className="text-6xl font-bold mb-4">LORENET</h1>
      <p className="text-gray-400 mb-8">
        AI archaeology for the internet
      </p>

      <div className="w-full max-w-2xl flex gap-2">
        <input
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          placeholder="Enter an internet topic..."
          className="flex-1 bg-neutral-900 border border-neutral-700 rounded-lg px-4 py-3"
        />

        <button
          onClick={generateLore}
          className="bg-white text-black px-6 rounded-lg"
        >
          Generate
        </button>
      </div>

      {loading && (
        <div className="mt-8 text-gray-400">
          Reconstructing internet history...
        </div>
      )}

      {result && (
        <div className="mt-10 max-w-3xl whitespace-pre-wrap bg-neutral-900 border border-neutral-800 p-6 rounded-xl">
          {result}
        </div>
      )}
    </main>
  )
}