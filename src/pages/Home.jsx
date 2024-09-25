import { Box, Container, styled } from "@mui/material";
import Slide from "./Slide";
import Banner from "./Banner";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/userHandle";
import ProductsMenu from "./customer/components/ProductsMenu";
import { NewtonsCradle } from "@uiball/loaders";
import { Link } from "react-router-dom";
import TestimonialsSection from "../components/TestimonalsSection";
import InstaFeed from "../components/InstaFeed";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";

const Home = () => {
  const dispatch = useDispatch();

  const { productData, responseProducts, error } = useSelector(
    (state) => state.user
  );

  const [showNetworkError, setShowNetworkError] = useState(false);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      const timeoutId = setTimeout(() => {
        setShowNetworkError(true);
      }, 40000);

      return () => clearTimeout(timeoutId);
    }
  }, [error]);

  return (
    <div id="top">
      <Container
        sx={{
          display: "none",
          "@media (max-width: 600px)": {
            display: "flex",
          },
        }}
      ></Container>
      <Banner />

      {showNetworkError ? (
        <StyledContainer>
          <h1>Sorry, network error.</h1>
        </StyledContainer>
      ) : error ? (
        <StyledContainer>
          <h1>Please Wait A Second</h1>
          <NewtonsCradle size={70} speed={1.4} color="black" />
        </StyledContainer>
      ) : (
        <>
          {responseProducts ? (
            <>
              <StyledContainer>No products found right now</StyledContainer>
              <StyledContainer>
                Become a seller to add products
                <Link to={"/Sellerregister"}>Join</Link>
              </StyledContainer>
            </>
          ) : (
            <>
              <div>
                <Slide products={productData} title="Latest Products" />
              </div>
              <div className="w-full h-screen overflow-hidden mt-12">
                <img
                  src="/6Lytes.png"
                  alt="Full Screen"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col items-center justify-center lg:p-20 sm:p-2">
                <h1 className="text-5xl font-bold mb-10">Why Choose 6Lytes?</h1>
                <p className="text-2xl lg:w-[80%] sm:w-[100%] text-center text-wrap">
                  At 6Lytes, we are dedicated to merging health, performance,
                  and wellness through innovation. Our mission is to keep you
                  hydrated, energized, and prepared to tackle your day with
                  ease. Our formulas are rooted in scientific research to ensure
                  rapid absorption, effective hydration, and support for energy
                  production, muscle recovery, and immune health. Whether you're
                  a professional athlete or starting your wellness journey,
                  6Lytes offers clean, efficient, and convenient solutions
                  tailored to your needs.
                </p>
              </div>
              <TestimonialsSection className="px-28" />
              <InstaFeed />
              <Footer />
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Home;

const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
  align-items: center;
`;
