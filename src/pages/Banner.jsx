import { styled } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { bannerData } from "../utils/products";

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
      showDots={true}
      arrows={false}
      slidesToSlide={1}
      customTransition="all .5"
      containerClass="carousel-container"
      itemClass="carousel-item-padding-40-px"
    >
      {bannerData.map((image) => (
        <ImageWrapper key={image._id}>
          <Image src={image.url} alt={image.alt} />
          <TextOverlay>
            <h1 className="text-3xl hidden lg:block">{image.heading}</h1>
            <br />
            <p className="text-2xl hidden lg:block mb-4">{image.text}</p>
            <button className="border border-white rounded-lg px-4 py-2 text-white hidden lg:block">
              Learn More
            </button>
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
  .react-multi-carousel-item {
    position: relative;
  }

  .react-multi-carousel-arrow {
    display: none !important;
  }
`;

const ImageWrapper = styled("div")`
  position: relative;
  width: 100%;
   {
    /* height: 400px; */
  }
`;

const Image = styled("img")(({ theme }) => ({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  [theme.breakpoints.down("sm")]: {
    height: "180px",
  },
}));

const TextOverlay = styled("div")`
  position: absolute;
  width: 50%;
  bottom: 10%;
  left: 20px;
  color: white;
  padding: 10px;
`;
