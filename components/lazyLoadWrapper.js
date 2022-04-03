import Image from 'next/image';
import Stack from '@mui/material/Stack';

const LazyLoadWrapper = (props) => {
    return <Stack>{props.images.map((image, key) => <Image alt={props.title} src={image.imageSrc} width={1140} height={image.height} key={key} />)}</Stack>
}
export default LazyLoadWrapper;