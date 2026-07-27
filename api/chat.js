module.exports = async (req, res) => {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method not allowed" });
    }

    const { buildContext } = req.body;
    if (!buildContext) {
        return res.status(400).json({ error: "Missing build context" });
    }

    const apiKey = process.env.GROQ_API_KEY || process.env.GEMINI_API_KEY;
    if (!apiKey) {
        return res.status(500).json({ error: "Server misconfiguration: API key is missing. Please add GROQ_API_KEY to your Vercel Environment Variables." });
    }

    try {
        const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${apiKey}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                model: "llama-3.1-8b-instant",
                messages: [
                    {
                        role: "system",
                        content: "You are an expert PC builder AI assistant. Be extremely concise. Use 1-2 sentence paragraphs maximum. Do not type long blocks of text. Analyze the user's current build context and prioritize advice on reducing hardware bottlenecks. Recommend specific parts to balance their build. Do not use markdown."
                    },
                    {
                        role: "user",
                        content: buildContext
                    }
                ]
            })
        });

        const data = await response.json();
        
        if (data.error) {
            return res.status(500).json({ error: data.error.message });
        }
        
        const text = data.choices[0].message.content;
        return res.status(200).json({ text });

    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: err.message || "Failed to communicate with Groq API." });
    }
};
