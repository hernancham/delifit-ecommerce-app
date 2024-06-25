import { Header } from "./_components/Header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <Header />
      {children}
    </section>
  );
}
