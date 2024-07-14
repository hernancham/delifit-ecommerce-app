import { expect, test } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";

import { Hidden } from "./Hidden";

test("Hidden Buton", async () => {
  render(<Hidden />);

  const button = screen.getByText("Toggle");

  fireEvent.click(button);

  expect(screen.getByText("Hidden")).toBeDefined();
});
