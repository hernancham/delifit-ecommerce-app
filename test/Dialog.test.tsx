import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { CardAuth } from "@/components/custom/CardAuth";

test("renders", async () => {
  render(
    <CardAuth>
      <h1>Delifit App Test</h1>
      <p>Delifit App Test Descripcion</p>
    </CardAuth>
  );
  expect(screen.getByText("Delifit App Test Descripcion")).toBeDefined();
});
