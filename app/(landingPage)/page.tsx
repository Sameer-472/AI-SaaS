import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <p className="text-6xl text-green-500">Hi there Sameer</p>
      <Link href={"/sign-in"}><Button size={"sm"}>Sign In</Button></Link>
      <Link href={"/sign-up"}><Button size={"sm"}>Regsiter</Button></Link>
    </>
  )
}
