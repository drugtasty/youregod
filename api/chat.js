export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { buildContext } = req.body;
    if (!buildContext) {
        return res.status(400).json({ error: 'Missing build context' });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
        return res.status(500).json({ error: 'Server misconfiguration: API key is missing. Please add GEMINI_API_KEY to your Vercel Environment Variables.' });
    }

    try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent?key=${apiKey}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                system_instruction: { 
                    parts: { 
                        text: "You are an expert PC builder AI assistant embedded in a PC building website. Be extremely helpful, concise, and offer concrete advice based on the user's current build context. Recommend specific parts from their context or general PC building best practices. Format your text with short paragraphs. Don't use markdown." 
                    } 
                },
                contents: [{ parts: [{ text: buildContext }] }]
            })
        });

        const data = await response.json();
        
        if (data.error) {
            return res.status(500).json({ error: data.error.message });
        }
        
        const text = data.candidates[0].content.parts[0].text;
        return res.status(200).json({ text });

    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: 'Failed to communicate with Google Gemini API.' });
    }
}
