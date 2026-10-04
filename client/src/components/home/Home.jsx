import React from 'react'
import NavBar from './NavBar';
import Banner from './Banner';
import Slide from './Slide';
import { Box } from '@mui/material'
import {styled} from '@mui/material'
import { useEffect } from 'react';
import { getProducts } from '../../redux/actions/productActions';
import { useDispatch, useSelector } from 'react-redux';
import MidSlide from "./MidSlide";
import MidSection from './MidSection';


const Component = styled(Box)`
padding: 10px;
background: #F2F2F2;
`

const Home = () => {

  const products = useSelector(state => state.getProducts.products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch])

  return (
    <>
      <NavBar />
      <Component>
        <Banner />
        <MidSlide products={products} title="Deal of the Day" timer={true}/>
        <MidSection />
        <Slide products={products} title="Discounts for you" timer={false} />
        <Slide products={products} title="Suggesting Items" timer={false} />
        <Slide products={products} title="New Arrivals" timer={false} />
        <Slide products={products} title="Trending Now" timer={false} />
        <Slide products={products} title="Seasonal Deals" timer={false} />
        <Slide products={products} title="Special Discounts" timer={false} />
      </Component>
    </>
  )
}

export default Home