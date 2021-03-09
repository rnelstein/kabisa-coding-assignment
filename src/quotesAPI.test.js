import axios from "axios";
import { getRandomQuote } from "./quotesAPI";

jest.mock("axios");

it("returns random quote", async () => {
  axios.get.mockResolvedValue({
    data: {
      author: "Alan Kay",
      id: 38,
      permalink: "http://quotes.stormconsultancy.co.uk/quotes/38",
      quote:
        "Most software today is very much like an Egyptian pyramid with millions of bricks piled on top of each other, with no structural integrity, but just done by brute force and thousands of slaves.",
    },
  });

  const { data } = await getRandomQuote();
  
  const expected = 38;

  expect(data.id).toEqual(expected);
});
