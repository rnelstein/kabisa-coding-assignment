import axios from "axios";

const url = "http://quotes.stormconsultancy.co.uk";

export async function getRandomQuote() {
  return await axios.get(`${url}/random.json`);
}

export async function getRandomQuotes(times) {
  const requests = Array(times).fill().map(getRandomQuote);

  return Promise.all(requests).then((responses) =>
    responses.map((response) => response.data)
  );
}
