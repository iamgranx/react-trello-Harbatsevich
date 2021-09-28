import css from "./styles.module.css"

export function Card({ title, button, children, footer }) {
    return (
      <div className={css.card}>
        <div className={css.title}> {title} </div>
        {children}
        text
        {footer}
      </div>
    );
  }