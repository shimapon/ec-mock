import style from "./AddCart.module.scss";

export const ButtonArea: React.FC = () => {
  return (
    <div className={style.buttonArea}>
      <button className={style.button_b}>ADD CART</button>
      <button className={style.button_w}>LIKE LISTに追加</button>
      <button className={style.button_w}>この商品の取り扱い店舗を探す</button>
    </div>
  );
};
