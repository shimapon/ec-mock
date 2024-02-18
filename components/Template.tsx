import { Header } from "./Header";
import { ButtonArea } from "./main/AddCart";
import { ItemImage } from "./main/ItemImage";
import { ItemInfo } from "./main/ItemInfo";
import { Price } from "./main/Price";
import { ThumbnailList } from "./main/ThumbnailList";
import { Title } from "./main/Title";
import styles from "./styles.module.scss";

export const Template: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <ItemImage />
        <div className={styles.main}>
          <ThumbnailList />
          <Title />
          <Price />
          <ButtonArea />
          <ItemInfo />
        </div>
      </main>
    </>
  );
};
