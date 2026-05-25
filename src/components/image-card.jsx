function ImageCard({ children, className = '', ...props }) {
    return (
        <div className={`${className} rounded-lg`}
            {...props}
        >
            {children}
        </div>
    )
}

export default ImageCard;