import axios from "axios";
import { getRandomQuote, getRandomQuotes } from "../quotesAPI";

jest.mock("axios");

const DUMMY_QUOTES = [
  {
    id: 1,
    author: "Anon",
    quote: "Lorem ipsum....",
    permalink: "http://quotes.stormconsultancy.co.uk/quotes/1",
  },
  {
    id: 2,
    author: "Anon",
    quote: "Lorem ipsum....",
    permalink: "http://quotes.stormconsultancy.co.uk/quotes/2",
  },
  {
    id: 3,
    author: "Anon",
    quote: "Lorem ipsum....",
    permalink: "http://quotes.stormconsultancy.co.uk/quotes/3",
  },
  {
    id: 4,
    author: "Anon",
    quote: "Lorem ipsum....",
    permalink: "http://quotes.stormconsultancy.co.uk/quotes/4",
  },
  {
    id: 5,
    author: "Anon",
    quote: "Lorem ipsum....",
    permalink: "http://quotes.stormconsultancy.co.uk/quotes/5",
  },
];

it("returns random quote", async () => {
  let randomInt = Math.floor(Math.random() * DUMMY_QUOTES.length);

  axios.get.mockResolvedValue({
    data: DUMMY_QUOTES[randomInt],
  });

  const { data } = await getRandomQuote();

  let expected = DUMMY_QUOTES[randomInt];

  expect(data.id).toEqual(expected.id);
});

it("returns random quotes", async () => {
  axios.get.mockResolvedValue({
    data: DUMMY_QUOTES[Math.floor(Math.random() * DUMMY_QUOTES.length)],
  });

  const data = await getRandomQuotes(5);

  const expected = 5;

  expect(data.length).toEqual(expected);
});
