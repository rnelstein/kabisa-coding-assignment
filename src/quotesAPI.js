import axios from "axios";

const url = "http://quotes.stormconsultancy.co.uk";

export async function getRandomQuote() {
  return await axios.get(`${url}/random.json`);
}

