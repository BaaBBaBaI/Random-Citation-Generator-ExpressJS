let quotes = require('../data/quotes');

exports.getAllQuotes = (req, res) => {
    const { author } = req.query;

    if (author) {
        const filtered = quotes.filter(q => q.author.toLowerCase().includes(author.toLowerCase()));
        return res.json(filtered);
    }

    res.json(quotes);
};

exports.getRandomQuote = (req, res) => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    res.json(quotes[randomIndex]);
};

exports.getQuoteById = (req, res) => {
    const id = parseInt(req.params.id);
    const quote = quotes.find(q => q.id === id);

    if (!quote) {
        return res.status(404).json({ message: 'Цитата не найдена' });
    }
    res.json(quote);
};

exports.createQuote = (req, res) => {
    const { text, author } = req.body;

    if (!text || !author) {
        return res.status(400).json({ message: 'Поля text и author обязательны' });
    }

    const newQuote = {
        id: quotes.length + 1,
        text,
        author
    };

    quotes.push(newQuote);
    res.status(201).json(newQuote);
};
