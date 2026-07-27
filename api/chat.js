const { GoogleGenerativeAI } = require("@google/generative-ai");

module.exports = async (req, res) => {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method not allowed" });
    }

    const { buildContext } = req.body;
    if (!buildContext) {
        return res.status(400).json({ error: "Missing build context" });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
        return res.status(500).json({ error: "Server misconfiguration: API key is missing. Please add GEMINI_API_KEY to your Vercel Environment Variables." });
    }

    try {
        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({ 
            model: "gemini-1.5-flash",
            systemInstruction: "You are an expert PC builder AI assistant embedded in a PC building website. Be extremely helpful, concise, and offer concrete advice based on the user's current build context. Recommend specific parts from their context or general PC building best practices. Format your text with short paragraphs. Don't use markdown."
        });

        const result = await model.generateContent(buildContext);
        const text = result.response.text();
        
        return res.status(200).json({ text });

    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: err.message || "Failed to communicate with Google Gemini API." });
    }
};
