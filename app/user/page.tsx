import Link from "next/link";
import getAllUsers from "@/lib/getAllUsers";
import { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
    title: 'Users'
}

export default async function User() {
    const usersData:  Promise<User[]> = getAllUsers();

    const users = await usersData;

  
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
                            <Link  className={styles.main}  href={`/users/${user.id}`}>
                                <h4>{user.name}</h4>
                                <h6>{user.email}</h6>
                                <h6>{user.phone}</h6>
                            </Link>
                        </p>
                        <br />
                    </>
                )
            })}
        </section>
    )

    return content
}