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
        <section className="h-[100vh] w-full mt-4 md:mt-8 flex flex-col justify-between items-center p-4 md:p-6">
            <h2 className="text-lg md:text-xl lg:text-2xl text-emerald font-bold tracking-wide p-8 text-center">
                An Indo-Western fusion captures the richness
                of African culture and the elegance of Western fashion
                in these stunning collections
            </h2>
            <div className="flex flex-wrap md:flex-nowrap gap-4 w-full h-2/3">
                {featuredCollections.map((collection) => (
                    <ImageCard key={collection.id} className="w-full md:w-1/3 h-full">
                        <img
                            src={collection.image}
                            alt={collection.title}
                            className="h-full w-full"
                        />
                    </ImageCard>
                ))}
            </div>
        </section>
    )
}

export default FeaturedCollections;