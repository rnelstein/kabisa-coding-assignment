import {
  filterLikedQuotes,
  findQuoteById,
  likesIncludesId,
} from "../utilities";

const DUMMY_QUOTES = [
  {
    id: 1,
    author: "Anon",
    quote: "Lorem ipsum....",
    permalink: "http://quotes.stormconsultancy.co.uk/quotes/1",
    likes: ["uid1"],
  },
  {
    id: 2,
    author: "Anon",
    quote: "Lorem ipsum....",
    permalink: "http://quotes.stormconsultancy.co.uk/quotes/2",
    likes: ["uid1", "uid5"],
  },
  {
    id: 3,
    author: "Anon",
    quote: "Lorem ipsum....",
    permalink: "http://quotes.stormconsultancy.co.uk/quotes/3",
    likes: ["uid6", "uid4", "uid3"],
  },
  {
    id: 4,
    author: "Anon",
    quote: "Lorem ipsum....",
    permalink: "http://quotes.stormconsultancy.co.uk/quotes/4",
    likes: ["uid3", "uid10", "uid6", "uid4", "uid6"],
  },
  {
    id: 5,
    author: "Anon",
    quote: "Lorem ipsum....",
    permalink: "http://quotes.stormconsultancy.co.uk/quotes/5",
  },
];

it("filter liked quotes", async () => {
  const result = filterLikedQuotes(DUMMY_QUOTES);

  const expected = 4;

  expect(result.length).toEqual(expected);
});

it("find quote by id", async () => {
  const result = findQuoteById(DUMMY_QUOTES, 3);

  const expected = {
    id: 3,
    author: "Anon",
    quote: "Lorem ipsum....",
    permalink: "http://quotes.stormconsultancy.co.uk/quotes/3",
    likes: ["uid6", "uid4", "uid3"],
  };

  expect(result).toEqual(expected);
});

it("check if likes includes id", async () => {
  const id = "uid3";
  const quote = {
    id: 3,
    author: "Anon",
    quote: "Lorem ipsum....",
    permalink: "http://quotes.stormconsultancy.co.uk/quotes/3",
    likes: ["uid6", "uid4", "uid3"],
  };

  const result = likesIncludesId(quote.likes, id);

  const expected = true;

  expect(result).toEqual(expected);
});
