import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-20rem)] bg-[#10161D] text-white text-center px-4 py-16">
      <h1 className="text-6xl font-bold text-[#64BC6E] mb-4">404</h1>
      <h2 className="text-3xl font-semibold mb-6">Dead end. But that&apos;s okay.</h2>
      
      <div className="max-w-xl space-y-6 text-lg text-gray-300 mb-10">
        <p>
          In longevity, failure isn&apos;t the opposite of progress; dead ends are part of the journey, we just take note, learn, and keep going.
        </p>
        <p>
          Since you found this hidden spot, you&apos;re clearly curious, and we like that!
        </p>
        <p>
          <Link href="https://discord.gg/placeholder-for-longevity" target="_blank" rel="noopener noreferrer" className="text-[#64BC6E] underline hover:text-[#82c98a] font-semibold">Join our Discord server</Link>
          . We&apos;re currently building our community, and you can be among the first to get involved in Join Longevity.
        </p>
      </div>

      <Link href="/">
        <button className="jl-btn">
          Go to Homepage
        </button>
      </Link>
    </div>
  );
} 