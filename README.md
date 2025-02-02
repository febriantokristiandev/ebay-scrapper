# eBay Scraper

This project is a web scraper that uses AI to scrape product data from eBay.

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd ebay-scrapper
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your OpenAI API key:
   ```plaintext
   OPENAI_API_KEY=your_api_key_here
   ```

## Usage

1. Start the server:
   ```bash
   npm start
   ```

2. Open your browser and navigate to `http://localhost:4001`.

3. Use the search input to enter a product name and specify the number of pages to scrape.

4. Click the "Scrape" button to initiate the scraping process.

## Test API

1. Open Postman / Browser.

2. Set the request type to `GET`.

3. Enter the following URL, replacing `{search}` with your desired product name and `{pages}` with the number of pages you want to scrape:
   ```
   http://localhost:4001/scrape?search={search}&pages={pages}
   ```

4. Click the "Send" button.

5. You should receive a JSON response containing the scraped product data.

## Dependencies

- express: ^4.21.2
- dotenv: ^16.4.7
- ejs: ^3.1.10
- nodemon: ^3.1.9
- openai: ^4.82.0
- puppeteer: ^24.1.1
- puppeteer-extra: ^3.3.6
- puppeteer-extra-plugin-stealth: ^2.11.2
- browse-ai: ^1.0.0
