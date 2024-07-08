import Link from "next/link";
import Image from "next/image";

export default function SocialLinks({
  GroupLink,
}: {
  GroupLink: { url: string; name: string; icon: string }[];
}) {
  return (
    <div className='flex items-center'>
      <ul className='mt-8 flex gap-6'>
        {GroupLink.map((link, i) => (
          <li key={i}>
            <Link
              href={link.url}
              rel='noreferrer'
              target='_blank'
              className='flex h-8 w-8 items-center justify-center rounded-full bg-slate-500 bg-opacity-10 text-gray-700 transition hover:opacity-75'
            >
              <span className='sr-only'>{link.name}</span>
              <Image
                src={link.icon}
                alt={link.name}
                width={24}
                height={24}
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
