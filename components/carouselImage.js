import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Box } from '@mui/material'
import Image from 'next/image';

const styles = {
    
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap'
    
}

const CarouselImage = () => {

    var items = [
        {
            image: "/m1.jpg"
        },
        {
            image: "/m2.jpg"
        },
        {
            image: "/m3.jpg"
        },
        {
            image: "/m4.jpg"
        }
    ]

    return (
        <Carousel style={{styles}} fullHeightHover="true" animation="slide" duration="700" cycleNavigation="false">
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    );
};

function Item(props)
{
    return (
        <Paper>
            <Image src={props.item.image} width="800px" height="600px"/>
        </Paper>
    )
}

export default CarouselImage;