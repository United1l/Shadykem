import { useNavigate } from 'react-router-dom'

const FeaturedCollectionHero2 = ({
    buttonLabel = 'Discover',
    imageUrl = '/images/27.jpeg',
    imageAlt = 'Featured collection hero image',
}) => {
    const navigate = useNavigate()

    return (
        <section className="h-fit w-full relative mt-4 md:mt-6">
            <div className="h-full w-full">
                <img
                    className="h-full w-full"
                    src={imageUrl}
                    alt={imageAlt}
                />
            </div>
            <div className="absolute left-[50%] top-[95%] -translate-x-1/2 -translate-y-1/2
             flex flex-col items-center justify-center gap-4">
                <h3 className="text-lg md:text-4xl text-emerald text-center mb-2">
                    Atomic Detail
                </h3>
                <button className="text-lg md:text-2xl font-bold underline 
                text-emerald hover:text-green-400 transition-colors"
                    type="button"
                    onClick={() => navigate('/collections')}
                >
                    {buttonLabel}
                </button>
            </div>
        </section>
    );
};

export default FeaturedCollectionHero2;
