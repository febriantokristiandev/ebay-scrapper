// scraper-api.js

/**
 * Required Modules
 * - express: to create the API server.
 * - openai: to perform AI-driven scraping.
 */
require('dotenv').config();
const express = require('express');
const OpenAI = require('openai');
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const app = express();
const PORT = process.env.PORT || 4001;
app.set('view engine', 'ejs');
app.use(express.static('public')); // For CSS and static assets

app.get('/', (req, res) => {
    res.render('index', { products: [], loading: false });
});

app.get('/scrape', async (req, res) => {
    const searchQuery = req.query.search;
    const numPages = parseInt(req.query.pages) || 1;

    try {
        const response = await openai.chat.completions.create({
            model: "o3-mini",
            messages: [{ role: "user", content: `Scrape eBay for products related to "${searchQuery}" across ${numPages} pages. Please return the results in JSON format with the keys {productName}, {productPrice}, and {productDescription}.` }],
            max_tokens: 1500,
            temperature: 0.5,
        });

        const results = response.choices[0].message.content.trim();
        res.json(JSON.parse(results)); // Ensure the response is a valid JSON object
    } catch (error) {
        console.error('Error in scraping:', error);
        res.status(500).json({ error: error.toString() });
    }
});

app.listen(PORT, () => {
    console.log(`Scraper API running on port ${PORT}`);
});

// Handle shutdown
process.on('SIGINT', async () => {
    console.log("Shutting down server...");
    process.exit();
});
