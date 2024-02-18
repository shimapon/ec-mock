import { Header } from "./Header";
import { ItemImage } from "./main/ItemImage";
import { Title } from "./main/Title";
import { Price } from "./main/Price";
import { ButtonArea } from "./main/AddCart";
import { ItemInfo } from "./main/ItemInfo";
import { ThumbnailList } from "./main/ThumbnailList";
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
