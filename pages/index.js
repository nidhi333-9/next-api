import Link from "next/link";

export default function Home() {
  return (
    <>
      <div>
        <h1>Hello Next Js!</h1>
      </div>

      <div>
        <Link href="/users">Users</Link>
      </div>
      <div>
        <Link href="/posts">Posts</Link>
      </div>
    </>
  );
}
