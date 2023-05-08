import styles from './Card.module.css';

const Card = ({ img, alt, name, info = [], onClick }) => {
  return (
    <article className={styles.wrapper} onClick={onClick}>
      <img className={styles.img} src={img} alt={alt} />
      <div className={styles.body}>
        <h3 className={styles.title}>{name}</h3>
        <ul className={styles.list}>
          {info.map((el) => (
            <li className={styles.item} key={el.title}>
              <b>{el.title}:</b> {el.description}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default Card;
