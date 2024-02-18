import style from "./Header.module.scss";

export const Header: React.FC = () => {
  return (
    <header>
      <h1 className={style.title}>Y-3 Mocks</h1>
    </header>
  );
};
