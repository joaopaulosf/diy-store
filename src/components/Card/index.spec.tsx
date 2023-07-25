import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Card } from ".";

describe("Card", () => {
  it("should render card corectly", () => {
    const { getByAltText, getByRole, getByText } = render(
      <Card cardClass="card" stopRenderAt={1} />,
      {
        wrapper: BrowserRouter,
      }
    );

    const cardElement = getByRole("link");
    const imageElement = getByAltText(/bluetooth and fm radio/i);
    const inSale = getByText(/sale/i, { selector: "span" });

    expect(cardElement).toBeInTheDocument();
    expect(cardElement).toHaveClass("card");
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute(
      "src",
      "/assets/images/bluetoothRadio/bluetooth-radio-main.webp"
    );
    expect(inSale).toBeInTheDocument();
  });
});
