import { useState, useEffect } from "react";

const ImageSlider = ({ images, width = '600px', height = '400px' }) => {
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        if (!images || images.length === 0) return;

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 1000);

        return () => clearInterval(interval);
    }, [images]);



    return (
        <div className="slider-container relative rounded-md overflow-hidden"
         style={{ width, height }}>
            <div
                className="slider-track flex h-full transition duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {images.map((src, index) => (
                    <img
                        key={index}
                        src={src}
                        alt={`Slide ${index + 1}`}
                        className="slider-image min-w-full h-full object-cover shrink-0"
                    />
                ))}
            </div>
        </div>
    );
}

export default ImageSlider;