import React from "react";
import "./Home.css";
import Product from "./Product";
import heroImage from "./assets/hero_image.jpg";
import box1_img from "./assets/box1_image.jpg";
import box3_img from "./assets/box3_image.jpg";
import box4_img from "./assets/box4_image.jpg";
import box5_img from "./assets/box5_image.jpg";
import box6_img from "./assets/box6_image.jpg";
import box7_img from "./assets/box7_image.jpg";
function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img className="home_image" src={heroImage} alt="Hero" />

        <div className="home_row">
          <Product
            id="1"
            title="Table chair"
            description="Table chair is a versatile, ergonomic piece of furniture designed for both work and relaxation. Ideal for home offices or study areas, it combines functionality with sleek design."
            price={299}
            rating={4}
            image={box3_img}
          />
          <Product
            title="Samsung Ultra"
            description="Samsung Galaxy S23 Ultra 5G AI Smartphone (Phantom Black, 12GB, 256GB Storage)"
            price={49999}
            rating={5}
            image={box4_img}
          />
        </div>

        <div className="home_row">
          <Product
            title="Clothes"
            price={799}
            rating={4}
            image={box1_img}
            description="Cotton clothes offer breathable comfort and softness, perfect for everyday wear. Made from natural fibers, they provide durability and a lightweight feel, ideal for all seasons."
          />
          <Product
            title="HP Victus Laptop"
            description="HP Smart Choice Victus Gaming Laptop, 13th Gen Intel Core i5-13420H,6GB RTX 4050 GPU,15.6-inch(39.6 cm),FHD,IPS,144 Hz,16GB DDR4,512GB SSD,Backlit KB, B&O,(Win 11,MSO,Silver,2.37 kg),fa1319TX"
            price={59000}
            rating={4}
            image={box5_img}
          />
          <Product
            title="Nord buds 2"
            description="OnePlus Nord Buds 2 TWS in Ear Earbuds with Mic,Upto 25dB ANC 12.4mm Dynamic Titanium Drivers, Playback:Upto 36hr case, 4-Mic Design, IP55 Rating, Fast Charging [Thunder Gray]"
            price={1999}
            rating={4}
            image={box6_img}
          />
        </div>
        <div className="home_row">
          <Product
            title="Neckband"
            description="Oneplus Bullets Z2 Bluetooth Wireless in Ear Earphones with Mic, Bombastic Bass - 12.4 mm Drivers, 10 Mins Charge - 20 Hrs Music, 30 Hrs Battery Life, IP55 Dust and Water Resistant (Magico Black)"
            price={899}
            rating={3}
            image={box7_img}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
