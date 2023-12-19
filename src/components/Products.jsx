import React from "react";
import black from '../assets/products/headphones-bl.png'
import grey from '../assets/products/headphones-gr.png'
import white from '../assets/products/headphones-wh.png'
import earbuds from '../assets/products/earbuds2.png'
import ProductCard from "./ProductCard";

const Products = ({ onAddToCart }) => {
  const productList = [
    {
      id: 1,
      img: black,
      name: "EX200",
      description: "Embrace the essence of pure audio with the EX200. Exclusively in black, these headphones deliver a seamless blend of comfort and high-fidelity sound, designed to accentuate every note and beat in your personal soundscape.",
      price: '$229.99',
    },
    {
      id: 2,
      img: grey,
      name: "EX250",
      description: "Experience the EX250: Sleek design meets powerful sound. Enjoy superior comfort and crisp audio for an unmatched listening experience. Perfect for the daily beat or the relaxed retreat.",
      price: '$279.99',
    },
    {
      id: 3,
      img: white,
      name: "EX300",
      description: "Meet the EX300: Elegance and acoustic precision in harmony. Tailored for the purest sound experience and designed with comfort in mind, it's your ideal musical companion, any time, anywhere.",
      price: '$229.99',
    },
    {
      id: 4,
      img: earbuds,
      name: "EX-PRO",
      description: "Introducing EX-PRO: Unleash wireless freedom with cutting-edge sound. Compact, sleek, and ready for every beat, the EX-PRO earbuds are your ticket to a world of unbound musical exploration.",
      price: '$189.99',
    },
  ];

  return (
    <div className="products">
        {productList.map((card) => {
            return (
                <ProductCard
                    key={card.id}
                    img={card.img}
                    name={card.name}
                    description={card.description}
                    price={card.price}
                    onAddToCart={onAddToCart}
                />
            )
        })}
    </div>
  )
};

export default Products;
