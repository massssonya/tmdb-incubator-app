import styles from "./styles.module.css"

export function SectionLayout({children}:{children: React.ReactNode}){
    return(
        <section className={styles.section}>{children}</section>
    )
}