import Image from "next/image";
import myPic from "../../../public/image1.webp";
import styles from "../page.module.css";

function Products() {
  return (
    <>
      <div className="container">
        <div className={styles.products}>
          <div>
            <Image
              className={styles.picture}
              src={myPic}
              width={500}
              height={400}
              alt="pic"
              priority={true}
            />
          </div>
          <div className={styles.title}>
            <h1>Avant-Garde Lamp</h1>
            <h4>Modenza</h4>
            <span>$179.99</span>
            <p>
              Cloud bread VHS hell of banjo bicycle rights jianbing umami
              mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr
              dreamcatcher waistcoat, authentic chillwave trust fund. Viral
              typewriter fingerstache pinterest pork belly narwhal. Schlitz
              venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki
              trust fund hashtag kinfolk microdosing gochujang live-edge
            </p>

            <label> Amount</label>
            <select>
              <option value="1">1</option>
              <option value="1">1</option>
              <option value="1">1</option>
              <option value="1">1</option>
              <option value="1">1</option>
              <option value="1">1</option>
              <option value="1">1</option>
            </select>

            <button>ADD TO BAG</button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Products;
