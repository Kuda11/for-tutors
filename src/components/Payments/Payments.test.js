import React from "react";
import { render } from "@testing-library/react";
import Payments from "./Payments";

describe("Payments tests", () => {
  it("should render", () => {
    expect(render(<Payments />)).toBeTruthy();
  });
});
