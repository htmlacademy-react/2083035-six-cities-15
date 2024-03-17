import style from './spinner.module.css';

function Spinner(): JSX.Element {
  return (
    <div className={style.spinner__container}>
      <div className={style.spinner}></div>
      <span className={style.spinner__info}>Loading</span>
    </div>

  );
}

export default Spinner;
