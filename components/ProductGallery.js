import React, { useState } from 'react'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import {
  Box,
} from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

import Image from 'next/image'

import ImageWrapper from './ImageWrapper'

const NextArrow = ({
  className,
  style,
  onClick
}) => {
  return (
    <ArrowForwardIcon 
      className={className}
      style={{
        ...style, 
        color: 'gray',
        fontSize: '3rem',
      }}
      onClick={onClick}
    />
  )
}

const PrevArrow = ({
  className,
  style,
  onClick
}) => {
  return (
    <ArrowBackIcon 
      className={className}
      style={{
        ...style, 
        color: 'gray',
      }}
      onClick={onClick}
    />
  )
}

const ProductGallery = ({ images }) => {
  const [mainSlider, setMainSlider] = useState(null)
  const [secondarySlider, setSecondarySlider] = useState(null)
  
  const mainSliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    ref: slider => setMainSlider(slider),
    asNavFor: secondarySlider,
    style: {
      // display: 'block !important',
      // mx: 'auto !important',
      // justifyContent: 'center',
      alignSelf: 'center',
      maxWidth: '60%',
    }
  }
  const secondarySliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    focusOnSelect: true,
    ref: slider => setSecondarySlider(slider),
    asNavFor: mainSlider,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  }

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      // alignItems: 'center',
      width: '100%',
      // height: '100%',
      // p: 4,
    },
  }
  
  return (
    <Box sx={styles.container}>
      <Slider {...mainSliderSettings}>
        {images.map(i => 
          <ImageWrapper key={i}>
            <Image 
              src={i}
              alt="Product"
              layout="fill"
              priority
            />
          </ImageWrapper>
        )}
      </Slider>
      <Slider 
        {...secondarySliderSettings}
      >
      {images.map(i => 
        <ImageWrapper key={i}>
          <Image 
            src={i}
            alt="Product"
            layout="fill"
          />
        </ImageWrapper>
      )}
    </Slider>
    </Box>
  )
}

export default ProductGallery