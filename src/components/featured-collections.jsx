import { StarIcon } from '@heroicons/react/24/solid'
import ImageCard from "./image-card";

const featuredCollections = [
    {
        id: 1,
        title: 'Collection 1',
        image: "/images/27.jpeg",
    },
    {
        id: 2,
        title: 'Collection 2',
        image: "/images/8.jpeg",
    },
    {
        id: 3,
        title: 'Collection 3',
        image: "/images/26.jpeg",
    },
];

function FeaturedCollections() {
    return (
        <section className="mx-auto w-full max-w-7xl px-4 py-12 md:px-6">
            <h2 className="flex items-center justify-center gap-3 px-2 text-center text-lg tracking-wide text-emerald md:text-xl lg:text-2xl">
                <StarIcon className="h-5 w-5 text-[#f2d070] md:h-6 md:w-6" />
                <span>
                    An Indo-Western fusion captures the richness
                    of African culture and the elegance of Western fashion
                    in these stunning collections
                </span>
            </h2>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
                {featuredCollections.map((collection) => (
                    <ImageCard
                        key={collection.id}
                        className="group overflow-hidden rounded-[24px] border border-[#d4b86f]/20 bg-[#101611] p-3 shadow-soft"
                    >
                        <div className="overflow-hidden rounded-[18px] bg-[#101611]">
                            <img
                                src={collection.image}
                                alt={collection.title}
                                className="h-[420px] w-full object-contain transition duration-500 group-hover:scale-[1.02]"
                            />
                        </div>
                        <p className="flex items-center justify-center gap-2 p-4 text-center text-lg tracking-wide text-emerald md:text-xl">
                            <StarIcon className="h-4 w-4 text-[#f2d070]" />
                            {collection.title}
                        </p>
                    </ImageCard>
                ))}
            </div>
        </section>
    )
}

export default FeaturedCollections;