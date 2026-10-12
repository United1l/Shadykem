import { useState, useEffect } from "react";

const ImageSlider = ({ images, width = '100%', height = '420px' }) => {
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        if (!images || images.length === 0) return;

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [images]);

    return (
        <div
            className="slider-container relative overflow-hidden rounded-[24px] border border-[#d4b86f]/20 bg-[#101611] shadow-soft"
            style={{ width, height }}
        >
            <div
                className="slider-track flex h-full transition duration-500 ease-in-out will-change-transform"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {images.map((src, index) => (
                    <img
                        key={index}
                        src={src}
                        alt={`Slide ${index + 1}`}
                        className="slider-image h-full min-w-full shrink-0 bg-[#101611] object-contain"
                    />
                ))}
            </div>
        </div>
    );
}

export default ImageSlider;