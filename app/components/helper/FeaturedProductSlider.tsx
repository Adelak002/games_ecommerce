"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProductCard from "./ProductCard";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1300 },
    items: 4,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1300, min: 764 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const FeaturedProductSlider = () => {
    
  return (
    
    <Carousel
      additionalTransfrom={0}
      arrows={true}
      autoPlay={true}
      autoPlaySpeed={5000}
      centerMode={false}
      infinite
      responsive={responsive}
    >
      <div>
        <ProductCard
          title="Call Of Duty"
          actualPrice="$59.99"
          discountPrice="49.99"
          category="shooting"
          image="/images/g1.jpg"
        />
      </div>
      <div>
        <ProductCard
          title="Zombie House"
          actualPrice="$39.99"
          discountPrice="29.99"
          category="Action"
          image="/images/g2.jpg"
        />
      </div>
      <div>
        <ProductCard
          title="Gun of wars"
          actualPrice="$49.99"
          discountPrice="35.99"
          category="shooting"
          image="/images/g3.jpg"
        />
      </div>
      <div>
        <ProductCard
          title="House of Fire"
          actualPrice="$59.99"
          discountPrice="49.99"
          category="Action"
          image="/images/g4.jpg"
        />
      </div>
      <div>
        <ProductCard
          title="Assasin's Creed"
          actualPrice="$69.99"
          discountPrice="55.99"
          category="Adventure"
          image="/images/g5.jpg"
        />
      </div>
      <div>
        <ProductCard
          title="Space Fight"
          actualPrice="$29.99"
          discountPrice="15.99"
          category="shooting"
          image="/images/g6.jpg"
        />
      </div>
      <div>
        <ProductCard
          title="Super Cars 2024"
          actualPrice="$79.99"
          discountPrice="55.99"
          category="Racing"
          image="/images/g7.jpg"
        />
      </div>
      <div>
        <ProductCard
          title="Wild wolf"
          actualPrice="$39.99"
          discountPrice="25.99"
          category="Adventure"
          image="/images/g8.jpg"
        />
      </div>
    </Carousel>
  );
};

export default FeaturedProductSlider;
