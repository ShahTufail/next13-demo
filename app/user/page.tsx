import Link from "next/link";
import getAllUsers from "@/lib/getAllUsers";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Users'
}

export default async function User() {
    const users:  Promise<> = getAllUsers(); 
  
    const content = (
        <section>
            <h2>
                <Link href="/">Back to Home</Link>
            </h2>
            <br />
            {users.map((user :any) => {
                return (
                    <>
                        <p key={user.id}>
                            <Link href={`/users/${user.id}`}>{user.name}</Link>
                        </p>
                        <br />
                    </>
                )
            })}
        </section>
    )

    return content
}