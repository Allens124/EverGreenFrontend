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
    <div className="slideshow-container">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        interval={3000} // Slide change every 3 seconds
        showArrows={false}
      >
        {images.map((src, index) => (
          <div key={index} className="image-wrapper">
            <Image src={src} alt={`Slide ${index + 1}`} layout="fill" objectFit="cover" />
          </div>
        ))}
      </Carousel>

      <style jsx>{`
        .slideshow-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          z-index: -1; /* Ensure it's in the background */
        }
        
        .image-wrapper {
          position: relative;
          width: 100%;
          height: 100vh;
        }
      `}</style>
    </div>
  );
}
