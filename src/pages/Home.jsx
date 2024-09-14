// import React, { useEffect, useState } from 'react';
// import React, { useState } from 'react';

import { Box, Container, styled } from '@mui/material';
import Slide from './Slide';
import Banner from './Banner';
// import { useDispatch, useSelector } from 'react-redux';
// import { getProducts } from '../redux/userHandle';
// import ProductsMenu from './customer/components/ProductsMenu';
import { NewtonsCradle } from '@uiball/loaders';
import { Link } from 'react-router-dom';
import TestimonialsSection from '../components/TestimonalsSection';
import InstaFeed from '../components/InstaFeed';
import Footer from '../components/Footer';
import { productDataList } from '../utils/products';
// import { Image } from '@mui/icons-material';

const Home = () => {

  // const dispatch = useDispatch();

  // const { productData, responseProducts, error } = useSelector((state) => state.user);

  // const [showNetworkError, setShowNetworkError] = useState(false);

// remove when active back-end error and response
  const error = false;
  const responseProducts=false;
  const showNetworkError =false;

  // useEffect(() => {
  //   dispatch(getProducts());
  // }, [dispatch]);

  // useEffect(() => {
  //   if (error) {
  //     const timeoutId = setTimeout(() => {
  //       setShowNetworkError(true);
  //     }, 40000);

  //     return () => clearTimeout(timeoutId);
  //   }
  // }, [error]);

  return (
    <div id="top">
      <Container
        sx={{
          display: 'none',
          '@media (max-width: 600px)': {
            display: 'flex',
          },
        }}
      >
      </Container>
      <BannerBox>
        <Banner />
      </BannerBox>

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
                <Link to={"/Sellerregister"}>
                  Join
                </Link>
              </StyledContainer>
            </>
          ) : (
            <>
                    <div className="w-full flex flex-col items-center bg-gray-100 py-12 my-6">
            <h1 className="text-3xl font-bold mb-8 text-center w-full">Do you struggle with</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-[65%] p-12">
            <div className="flex flex-col items-center">
                    <img src="/Low_Energy.avif" alt="img 3" className="w-full h-48 object-cover rounded-lg mb-4" />
                    <p className="text-lg font-semibold text-center">Low_Energy</p>
                </div>
                <div className="flex flex-col items-center">
                    <img src="/Brain_Fog.avif" alt="img 2" className="w-full h-48 object-cover rounded-lg mb-4" />
                    <p className="text-lg font-semibold text-center">Brain Fog</p>
                </div>
                <div className="flex flex-col items-center">
                    <img src="/Headaches.avif" alt="img 1" className="w-full h-48 object-cover rounded-lg mb-4" />
                    <p className="text-lg font-semibold text-center">Headaches</p>
                </div>
                <div className="flex flex-col items-center">
                    <img src="Muscle_Cramps.avif" alt="img 4" className="w-full h-48 object-cover rounded-lg mb-4" />
                    <p className="text-lg font-semibold text-center">Muscle Cramps</p>
                </div>
            </div>

            <h2 className="text-2xl font-semibold my-12 text-center w-full">Then you are likely suffering from chronic dehydration.
            (3 in 4 people are)</h2>
            <h1 className="text-3xl font-bold mb-4 text-center w-full">here's how to fix it</h1>
        </div>
<div>
                  <Slide products={productDataList} title="Products" />
</div>
<div className="w-full h-screen overflow-hidden mt-12">
            <img 
                src="/one-shot.jpg" 
                alt="Full Screen" 
                className="w-full h-full object-cover"
            />
        </div>
        <div className='flex flex-col items-center justify-center p-20'>
          <h1 className='text-5xl font-bold font-mono mb-10'>
          homegrown hydration
          </h1>
          <p className='text-2xl w-[60%] text-center' >
          We started oneshot at this turning point in our region, where we're all committed and working hard to achieve a shared and bright future. oneshot is here to boost our community's wellness and help everyone feel their best every day.
Staying hydrated is crucial here, especially with the hot days, fasting periods, and reliance on ultra-filtered water. With oneshot, stay hydrated, refreshed, and ready to take your shot!
          </p>
        </div>
        <TestimonialsSection className='px-28'/>
        <InstaFeed/>
        <Footer/>
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

const BannerBox = styled(Box)`
  padding: 20px 10px;
  background: #F2F2F2;
`;