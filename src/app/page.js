import Image from "next/image";
import myImage from "../../public/image1.webp";
import myImage2 from "../../public/image2.webp";
import myImage3 from "../../public/image3.webp";
import myImage4 from "../../public/image4.webp";
// import images from '../../public/images.jpeg';
import styles from "./page.module.css";

async function getData() {
  const res = await fetch(
    "https://strapi-store-server.onrender.com/api/products?featured=true"
  );
  const data = await res.json();
  return data;
}

export default function Home() {
  const data = getData();
  console.log(19, "hello");
  console.log(data);

  function handleClick() {
    alert("hello");
  }

  return (
    <div className={styles.container}>
      <div className={styles.top_hero}>
        <div className={styles.hero_left}>
          <h1>We are changing the way people shop</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Nam
            earum odit sequi ut eligendi delectus explicabo qui minus aliquid
            laborum.
          </p>
          <div className={styles.btn}>
            <a href="/products">OUR PRODUCTS</a>
          </div>
        </div>

        <div className={styles.pic_info}>
          <Image
            className={styles.img}
            src={myImage}
            width={320}
            height={410}
            alt="Picture"
            priority={true}
          />
          <Image
            className={styles.img}
            src={myImage2}
            width={320}
            height={410}
            alt="Picture"
          />
          <Image
            className={styles.img}
            src={myImage3}
            width={320}
            height={410}
            alt="Picture"
          />
          <Image
            className={styles.img}
            src={myImage4}
            width={320}
            height={410}
            alt="Picture"
          />
        </div>
      </div>
      <div className={styles.bottom_hero}>
        <h2>Featured Products</h2>
        <hr />
        <div>
          <div className={styles.cards}>
            <a className={styles.card} href="/products">
              <div className={styles.card_info}>
                <Image
                  className={styles.pic_card}
                  src={myImage}
                  width={300}
                  height={200}
                  alt="pic"
                />
                <h2>Avant-Garde Lamp</h2>
                <span>$179.99</span>
              </div>
            </a>
            <a className={styles.card} href="/products">
              <div className={styles.card_info}>
                <Image
                  className={styles.pic_card}
                  src={myImage}
                  width={300}
                  height={200}
                  alt="pic"
                />
                <h2>Avant-Garde Lamp</h2>
                <span>$179.99</span>
              </div>
            </a>
            <a className={styles.card} href="/products">
              <div className={styles.card_info}>
                <Image
                  className={styles.pic_card}
                  src={myImage}
                  width={300}
                  height={200}
                  alt="pic"
                />
                <h2>Avant-Garde Lamp</h2>
                <span>$179.99</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
