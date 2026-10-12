import { SparklesIcon } from '@heroicons/react/24/solid'
import ImageSlider from "./image-slider";

const images = ["/images/18.jpeg", "/images/17.jpeg"];

function EditorialLookbook() {
    return (
        <section className="mx-auto w-full max-w-7xl px-4 py-12 md:px-6">
            <div className="grid items-center gap-6 md:grid-cols-[220px_minmax(0,1fr)]">
                <div className="flex flex-col items-center justify-center gap-3">
                    <img
                        src="/images/18.jpeg"
                        alt="editorial-image"
                        className="h-[300px] w-full max-w-[260px] rounded-[24px] border border-[#d4b86f]/20 bg-[#101611] object-contain"
                    />
                    <p className="flex items-center gap-2 text-lg text-center text-emerald">
                        <SparklesIcon className="h-4 w-4 text-[#f2d070]" />
                        Men's Wear
                    </p>
                </div>
                <ImageSlider images={images} width="100%" height="500px" />
            </div>
            <h3 className="m-4 flex items-center justify-center gap-2 text-center text-xl text-emerald">
                <SparklesIcon className="h-5 w-5 text-[#f2d070]" />
                Inspired by Urban Solitude
            </h3>
        </section>
    )
}

export default EditorialLookbook;