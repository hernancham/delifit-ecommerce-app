import Link from "next/link";

export default function NotFound() {
  return (
    <section className='flex flex-col items-center justify-center h-screen'>
      <div>
        <h2>No encontrado</h2>
        <p>No se pudo encontrar el recurso solicitado</p>
        <Link href='/'>Ir a la pagina principal</Link>
      </div>
    </section>
  );
}
