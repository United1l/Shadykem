import { useNavigate } from 'react-router-dom'

const FeaturedCollectionHero2 = ({
    buttonLabel = 'Discover',
    imageUrl = '/images/27.jpeg',
    imageAlt = 'Featured collection hero image',
}) => {
    const navigate = useNavigate()

    return (
        <section className="mx-auto w-full max-w-7xl px-4 py-12 md:px-6">
            <div className="relative overflow-hidden rounded-[28px] border border-[#d4b86f]/20 bg-[#101611] shadow-soft">
                <img
                    className="h-[430px] w-full bg-[#101611] object-contain md:h-[520px]"
                    src={imageUrl}
                    alt={imageAlt}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050a08]/90 via-[#050a08]/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 flex flex-col items-center justify-center gap-3 pb-8 text-center">
                    <h3 className="text-lg text-emerald md:text-4xl">
                        Atomic Detail
                    </h3>
                    <button
                        className="text-lg font-bold underline text-emerald transition-colors hover:text-green-400 md:text-2xl"
                        type="button"
                        onClick={() => navigate('/collections')}
                    >
                        {buttonLabel}
                    </button>
                </div>
            </div>
        </section>
    );
};

export default FeaturedCollectionHero2;
