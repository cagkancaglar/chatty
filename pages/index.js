import Head from "next/head";
import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0/client";

export default function Home() {
  const { isLoading, error, user } = useUser();

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>{error.message}</div>;

  return (
    <>
      <Head>
        <title>Chatty Cagkan - Login or Register</title>
      </Head>
      <div className="flex min-h-screen w-full items-center justify-center bg-gray-800 text-center text-white">
        <div>
          {!!user && <Link href="/api/auth/logout">Logout</Link>}
          {!user && (
            <>
              <Link
                className="rounded-md bg-emerald-500 px-4 py-2 text-white hover:bg-emerald-200"
                href="/api/auth/login"
              >
                Login
              </Link>
              <Link
                className="rounded-md bg-emerald-500 px-4 py-2 text-white hover:bg-emerald-200"
                href="/api/auth/register"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </>
  );
}
