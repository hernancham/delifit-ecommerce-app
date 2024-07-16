import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Banner } from "@/app/(main)/_components/Banner";
import { Hero } from "@/app/(main)/_components/Hero";
import Funciones from "@/app/(main)/_components/Funciones";
import { Footer } from "@/app/(main)/_components/Footer";
import { Header } from "@/app/(main)/_components/Header/index";
import { usePathname, useRouter } from "next/navigation";
vi.mock("next/navigation", () => ({
  useRouter: () => ({
    push: vi.fn(),
    prefetch: vi.fn(),
    replace: vi.fn(),
    reload: vi.fn(),
    back: vi.fn(),
    forward: vi.fn(),
    beforePopState: vi.fn(),
    events: {
      on: vi.fn(),
      off: vi.fn(),
      emit: vi.fn(),
    },
    query: {},
    pathname: "/",
    asPath: "/",
    route: "/",
    basePath: "",
  }),
}));

describe("Renderizado de homepage", () => {
  it("Se muestra descripción de la homepage de Delifit", () => {
    render(<Banner />);
    const descripcion =
      "En DELIFIT, por casi cinco años, hemos sido el sabor saludable de Tacna, ofreciendo opciones frescas y nutritivas. Desde desayunos energizantes hasta postres tentadores, cada plato resalta por sus ingredientes naturales y calidad insuperable. Como un referente culinario en la región, nos enorgullece haber nutrido y deleitado a los tacneños y visitantes con nuestra dedicación a la frescura y excelencia culinaria. Celebramos el equilibrio entre el buen comer y la salud, agradeciendo a todos quienes nos han acompañado en este viaje hacia una vida más saludable y deliciosa en Tacna.";
    expect(screen.getByText(descripcion)).toBeDefined();
  });
  it("Se muestra el Banner de la homepage de Delifit", () => {
    render(<Hero />);
    const hero = screen.getByText("ENGRÍETE");
    expect(hero).toBeDefined();
  });
  it("Se muestran elementos del footer", () => {
    render(<Footer />);
    const texto = screen.getByText("ENCUÉNTRANOS");
    expect(texto).toBeDefined();
  });
  it("Se muestra alguna función de la homepage", () => {
    render(<Funciones />);
    const texto = screen.getByText("¿Cómo funciona?");
    expect(texto).toBeDefined();
  });
});
