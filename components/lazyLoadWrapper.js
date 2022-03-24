import Image from 'next/image';

const LazyLoadWrapper = (props) => {
    return <>{props.images.map((image, key) => <Image alt={props.title} src={image.imageSrc.replace("https://www.99foto.pl", "")} width={1140} height={image.height} key={key} />)}</>
}
export default LazyLoadWrapper;