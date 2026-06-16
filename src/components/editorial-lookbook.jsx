import ImageSlider from "./image-slider";

 const images = ["/images/25.jpeg","/images/17.jpeg","/images/21.jpeg"];

function EditorialLookbook() {
    return (
        <section className="h-[100vh] w-full flex justify-center items-center">
            <ImageSlider images={images} />
        </section>
    )
}

export default EditorialLookbook;