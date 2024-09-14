
import { styled } from '@mui/material';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css'; // Ensure this is imported to include default styles
import { bannerData } from '../utils/products';

const Banner = () => {
    return (
        <StyledCarousel
            swipeable={true}
            draggable={false}
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={5000}
            keyBoardControl={true}
            showDots={false} // Hide dots
            arrows={false} // Hide arrows
            slidesToSlide={1}
            customTransition="all .5"
            containerClass="carousel-container"
            itemClass="carousel-item-padding-40-px"
        >
            {bannerData.map((image) => (
                <ImageWrapper key={image._id}>
                    <Image src={image.url} alt={image.alt} />
                    <TextOverlay>
                        <Heading>{image.heading}</Heading><br/>
                        <p className='text-2xl hidden sm:block'>{image.text}</p>
                        {/* <Button>Learn More</Button> */}
                    </TextOverlay>
                </ImageWrapper>
            ))}
        </StyledCarousel>
    );
};

export default Banner;

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    },
};

const StyledCarousel = styled(Carousel)`
    .react-multi-carousel-dot-list {
        display: none !important;
    }

    .react-multi-carousel-dot {
        display: none !important;
    }

    .react-multi-carousel-item {
        position: relative;
    }

    .react-multi-carousel-arrow {
        display: none !important;
    }
`;

const ImageWrapper = styled('div')`
    position: relative;
    width: 100%;
    { /* height: 400px; */}
`;

const Image = styled('img')(({ theme }) => ({
    width: '100%',
    height: '100%',
    borderRadius: 12,
    objectFit: 'cover',
    [theme.breakpoints.down('sm')]: {
        height: '180px',
    },
}));

const TextOverlay = styled('div')`
    position: absolute;
    width: 50%;
    bottom: 30%;
    left: 20px;
    color: white;
    // background: rgba(0, 0, 0, 0.5);
    padding: 10px;
    border-radius: 8px;
`;

const Heading = styled('h2')`
    margin: 0;
    font-size: 2rem;
`;




// import { styled } from '@mui/material';
// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css'; // Ensure this is imported to include default styles
// import { bannerData } from '../utils/products';

// const Banner = () => {
//     return (
//         <StyledCarousel
//             swipeable={true}
//             draggable={false}
//             responsive={responsive}
//             infinite={true}
//             autoPlay={true}
//             autoPlaySpeed={3000}
//             keyBoardControl={true}
//             showDots={false} // Hide dots
//             arrows={false} // Hide arrows
//             slidesToSlide={1}
//             customTransition="all .5"
//             containerClass="carousel-container"
//             itemClass="carousel-item-padding-40-px"
//         >
//             {bannerData.map((image) => (
//                 <Image src={image.url} alt={image.alt} key={image._id} />
//             ))}
//         </StyledCarousel>
//     );
// };

// export default Banner;

// const responsive = {
//     desktop: {
//         breakpoint: { max: 3000, min: 1024 },
//         items: 1,
//     },
//     tablet: {
//         breakpoint: { max: 1024, min: 464 },
//         items: 1,
//     },
//     mobile: {
//         breakpoint: { max: 464, min: 0 },
//         items: 1,
//     },
// };

// const StyledCarousel = styled(Carousel)`
//     .react-multi-carousel-dot-list {
//         display: none !important;
//     }

//     .react-multi-carousel-dot {
//         display: none !important;
//     }

//     .react-multi-carousel-item {
//         position: relative;
//     }

//     .react-multi-carousel-arrow {
//         display: none !important;
//     }
// `;

// const Image = styled('img')(({ theme }) => ({
//     width: '100%',
//     height: 400,
//     borderRadius:12,
//     [theme.breakpoints.down('sm')]: {
//         objectFit: 'cover',
//         height: 180,
//     },
// }));
