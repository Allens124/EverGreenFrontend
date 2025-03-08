// components/Slideshow.js
"use client"; // Needed for client-side components in Next.js

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import styles
import Image from "next/image";

const images = [
  "/images/slide1.jpg",
  "/images/slide2.jpg",
  "/images/slide3.jpg"
];

export default function Slideshow() {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      showThumbs={false}
      showStatus={false}
      interval={3000} // Slide change every 3 seconds
    >
      {images.map((src, index) => (
        <div key={index}>
          <Image src={src} alt={`Slide ${index + 1}`} width={800} height={400} />
        </div>
      ))}
    </Carousel>
  );
}
