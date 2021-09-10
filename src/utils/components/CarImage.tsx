type CarImageProp = {
    image: string,
    style: React.CSSProperties,
    className?: string
}

export const CarImage = ({ image, style, className = "" }: CarImageProp) =>
    <img src={image} alt="" style={style} className={className} />
