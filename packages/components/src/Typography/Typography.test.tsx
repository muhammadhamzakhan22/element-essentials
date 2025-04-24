import React from "react";
import { render } from "@testing-library/react";
import { Typography } from "./Typography";

describe("Typography", () => {
  it("renders the correct variant element", () => {
    const { getByText } = render(<Typography variant="h1">Heading</Typography>);
    const el = getByText("Heading");
    expect(el.tagName.toLowerCase()).toBe("h1");
  });

  it("applies the correct class for the variant", () => {
    const { getByText } = render(<Typography variant="caption">Caption</Typography>);
    const el = getByText("Caption");
    expect(el.className).toMatch(/caption/);
  });

  it("renders children", () => {
    const { getByText } = render(<Typography>The quick brown fox</Typography>);
    expect(getByText("The quick brown fox")).toBeInTheDocument();
  });
});
