import ImageSlider from "./image-slider";

const images = ["/images/15.jpeg", "/images/12.jpeg"];

function EditorialLookbook2() {
    return (
        <section className="min-h-[100vh] md:h-[100vh] w-full mt-4 md:mt-12">
            <div className="h-full md:h-[90%] w-full flex flex-col md:flex-row
             justify-evenly items-center">
                <div className="flex flex-col justify-evenly">
                    <img
                        src="/images/30.jpeg"
                        alt="editorial-image"
                        className="h-[200px] w-[200px] rounded-md m-4"
                    />
                    <p className="text-lg text-emerald text-center m-2">
                        Women's Wear
                    </p>
                </div>
                <ImageSlider images={images} />
            </div>
            <h3 className="text-xl text-emerald text-center m-4">
                Dynamic Fluidity
            </h3>
        </section>
    )
}

export default EditorialLookbook2;