const quoteText = document.getElementById('quote-text');
const quoteAuthor = document.getElementById('quote-author');
const generateBtn = document.getElementById('generate-btn');

async function fetchRandomQuote() {
    try {
        const response = await fetch('/api/quotes/random');
        const data = await response.json();

        quoteText.textContent = `"${data.text}"`;
        quoteAuthor.textContent = `- ${data.author}`;
    } catch (error) {
        console.error(error);
        quoteText.textContent = "Не удалось загрузить цитату.";
    }
}

fetchRandomQuote();

generateBtn.addEventListener('click', fetchRandomQuote);
