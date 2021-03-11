import axios from "axios";

const url = "http://quotes.stormconsultancy.co.uk";

export const getRandomQuote = async () => {
  return await axios.get(`${url}/random.json`);
};

export const getRandomQuotes = async (times) => {
  const requests = Array(times).fill().map(getRandomQuote);

  return Promise.all(requests).then((responses) =>
    responses.map((response) => response.data)
  );
};
