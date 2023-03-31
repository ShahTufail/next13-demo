import styles from './page.module.css';
import Link from 'next/link';

export default function About() {
    // throw new Error('Not today!')
    /* each path can have their own error boundaries,
        layout as HOC, 
        css in page.module.css, 
        loading or react suspense, 
        head file for meta data 
        */
    return (
        <div className={styles.main}>
            <h1>
                I am about page!
            </h1>
            <Link href="/">Go to Home Page</Link>
        </div>
    )

}