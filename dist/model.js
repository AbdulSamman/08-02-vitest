import fs from 'fs';
const rawBooks = JSON.parse(fs.readFileSync('./src/data/rawBooks.json', 'utf8'));
const books = rawBooks.map(rawBook => {
    return {
        id: rawBook.id,
        idCode: rawBook.idCode,
        title: rawBook.title,
        description: rawBook.description,
        language: rawBook.language === '' ? 'english' : rawBook.language
    };
});
export const getApiInstructions = () => {
    return `
<style>
	body {
		background-color: #444;
		padding: 1rem;
		color: #fff;
		font-family: courier;
	}
	code {
		background-color: #333;
	}
</style>
<h1>Book Site API</h1>
<ul>
	<li><code>/books</code> - all books</li>
	<li><code>/books/3</code> - book with id 3</li>
</ul>
	`;
};
export const getBooks = () => {
    return books;
};
export const getBook = (id) => {
    return books.find(m => m.id === id);
};
//# sourceMappingURL=model.js.map