const express = require('express');
const path = require('path');
const quotesRoutes = require('./routes/quotesRoutes');
const requestLogger = require('./middleware/requestLogger');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(requestLogger);

app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/quotes', quotesRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
