// components/Slideshow.js
"use client"; // Needed for client-side components in Next.js

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import styles
import Image from "next/image";

const images = [
  "/images/image1.png",
  "/images/image2.png",
  "/images/image3.png",
  "/images/image4.png",
  "/images/image5.png",
  "/images/image6.png"
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
