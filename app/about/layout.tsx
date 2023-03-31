import styles from './page.module.css'

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <nav>About NavBar</nav>
            <main className={styles.main}>
                {children}
            </main>
        </>
    )
}