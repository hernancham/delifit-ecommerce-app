import { auth } from "@/auth";

export default async function Page() {
  const session = await auth();
  return (
    <div className='flex items-center justify-center'>
      <div className='flex flex-col gap-4'>
        <h1>Home: </h1>
        <pre>{JSON.stringify(session, null, 2)}</pre>
      </div>
    </div>
  );
}
