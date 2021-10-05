import css from "./styles.module.css"

export function Card({ title, children, footer, value }) {
    return (
      <div className={css.card}>
        <div className={css.title}> {title} </div>
        <div className={css.card_body}>
          {value}
          {children}
          {footer}
        </div>
      </div>
    );
  }