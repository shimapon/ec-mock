import Image from "next/image";

import style from "./ThumbnailList.module.scss";
import { imageUrlList } from "../../utils/mocks";

export const ThumbnailList: React.FC = () => {
  return (
    <div className={style.thumbnailList}>
      <Image width={60} height={60} src={imageUrlList[0]} alt={`商品画像`} />
    </div>
  );
};
