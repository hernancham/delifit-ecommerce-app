import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { Prueba } from "./Prueba";

test("renders", async () => {
  render(<Prueba />);
  expect(screen.getByText("Delifit App Test")).toBeDefined();
});
