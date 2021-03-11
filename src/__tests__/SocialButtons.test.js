import { render, screen } from "@testing-library/react";
import SocialButtons from "../components/SocialButtons";

test("renders social buttons", () => {
  const url = "http://quotes.stormconsultancy.co.uk/quotes/29";
  const { queryByLabelText } = render(<SocialButtons url={url} />);

  const facebookBtn = queryByLabelText("facebook");
  const twitterBtn = queryByLabelText("twitter");
  const linkedinButton = queryByLabelText("linkedin");
  const whatsappButton = queryByLabelText("whatsapp");
  const emailButton = queryByLabelText("email");

  expect(facebookBtn).toBeInTheDocument();
  expect(twitterBtn).toBeInTheDocument();
  expect(linkedinButton).toBeInTheDocument();
  expect(whatsappButton).toBeInTheDocument();
  expect(emailButton).toBeInTheDocument();
});
