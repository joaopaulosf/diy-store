import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { About } from ".";

describe("Main render corectly", () => {
  it("should render about section", () => {
    render(<About />, { wrapper: BrowserRouter });
  });
});
