import goBackIcon from "../../public/icons/go-back-arrow-svgrepo-com.png";

import classes from "./Header.module.css";

export default function Header({ onGoBackSearch }) {
  return (
    <section className={classes.header}>
      <button className={classes.button} onClick={onGoBackSearch}>
        <img className={classes.icon} src={goBackIcon} alt="go back search icon" />
        <p className={classes.text}>Go back to select a city again</p>
      </button>
    </section>
  );
}
