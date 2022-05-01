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
    // mainImageWrapper: {
    //   // backgroundColor: 'red',
    //   width: '60%',
    //   // width: '60%',
    //   '& > span > img': {
    //     width: '100% !important',
    //     height: 'unset !important',
    //     position: 'relative !important',
    //     objectFit: 'contain',
    //   },
    //   '& > span': {
    //     position: 'unset !important'
    //   }
    // },
    imageWrapper: {
      // backgroundColor: 'red',
      width: '100%',
      '& > span > img': {
        width: '100% !important',
        height: 'unset !important',
        position: 'relative !important',
        objectFit: 'contain',
      },
      '& > span': {
        position: 'unset !important'
      }
    }
  }
  
  return (
    <Box sx={styles.container}>
      <Slider {...mainSliderSettings}>
        {images.map(i => 
          <Box sx={styles.imageWrapper}>
            <Image 
              src={i}
              alt="Product"
              layout="fill"
            />
          </Box>
        )}
      </Slider>
      <Slider 
        {...secondarySliderSettings}
      >
      {images.map(i => 
        <Box sx={styles.imageWrapper}>
          <Image 
            src={i}
            alt="Product"
            layout="fill"
          />
        </Box>
      )}
    </Slider>
    </Box>
  )
}

export default ProductGallery