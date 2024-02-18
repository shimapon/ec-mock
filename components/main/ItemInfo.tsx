import style from "./ItemInfo.module.scss";
import { infoText } from "../../utils/mocks";

export const ItemInfo: React.FC = () => {
  return (
    <div
      className={style.contbox}
      dangerouslySetInnerHTML={{ __html: infoText }}
    ></div>
  );
};
