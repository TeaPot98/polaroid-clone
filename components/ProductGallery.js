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

const ProductGallery = () => {
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
      width: '100%',
      p: 4,
    },
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
        <Box sx={styles.imageWrapper}>
          <Image 
            src="https://cdn.shopify.com/s/files/1/1162/8964/products/now_white-polaroid-camera_009027_angle-right_d73a432a-1ebd-4a2b-af89-967a55c058b0_828x.png?v=1643359177"
            alt="Product"
            layout="fill"
          />
        </Box>
        <Box sx={styles.imageWrapper}>
          <Image 
            src="https://cdn.shopify.com/s/files/1/1162/8964/products/now_white-polaroid-camera_009027_angle-right_d73a432a-1ebd-4a2b-af89-967a55c058b0_828x.png?v=1643359177"
            alt="Product"
            layout="fill"
          />
        </Box>
        <Box sx={styles.imageWrapper}>
          <Image 
            src="https://cdn.shopify.com/s/files/1/1162/8964/products/now_white-polaroid-camera_009027_angle-right_d73a432a-1ebd-4a2b-af89-967a55c058b0_828x.png?v=1643359177"
            alt="Product"
            layout="fill"
          />
        </Box>
        <Box sx={styles.imageWrapper}>
          <Image 
            src="https://cdn.shopify.com/s/files/1/1162/8964/products/now_white-polaroid-camera_009027_angle-right_d73a432a-1ebd-4a2b-af89-967a55c058b0_828x.png?v=1643359177"
            alt="Product"
            layout="fill"
          />
        </Box>
        <Box sx={styles.imageWrapper}>
        <Image 
          src="https://cdn.shopify.com/s/files/1/1162/8964/products/now_white-polaroid-camera_009027_angle-right_d73a432a-1ebd-4a2b-af89-967a55c058b0_828x.png?v=1643359177"
          alt="Product"
          layout="fill"
        />
      </Box>
      <Box sx={styles.imageWrapper}>
        <Image 
          src="https://cdn.shopify.com/s/files/1/1162/8964/products/now_white-polaroid-camera_009027_angle-right_d73a432a-1ebd-4a2b-af89-967a55c058b0_828x.png?v=1643359177"
          alt="Product"
          layout="fill"
        />
      </Box>
      </Slider>
      <Slider 
        {...secondarySliderSettings}
      >
      <Box sx={styles.imageWrapper}>
        <Image 
          src="https://cdn.shopify.com/s/files/1/1162/8964/products/now_white-polaroid-camera_009027_angle-right_d73a432a-1ebd-4a2b-af89-967a55c058b0_828x.png?v=1643359177"
          alt="Product"
          layout="fill"
        />
      </Box>
      <Box sx={styles.imageWrapper}>
        <Image 
          src="https://cdn.shopify.com/s/files/1/1162/8964/products/now_white-polaroid-camera_009027_angle-right_d73a432a-1ebd-4a2b-af89-967a55c058b0_828x.png?v=1643359177"
          alt="Product"
          layout="fill"
        />
      </Box>
      <Box sx={styles.imageWrapper}>
        <Image 
          src="https://cdn.shopify.com/s/files/1/1162/8964/products/now_white-polaroid-camera_009027_angle-right_d73a432a-1ebd-4a2b-af89-967a55c058b0_828x.png?v=1643359177"
          alt="Product"
          layout="fill"
        />
      </Box>
      <Box sx={styles.imageWrapper}>
        <Image 
          src="https://cdn.shopify.com/s/files/1/1162/8964/products/now_white-polaroid-camera_009027_angle-right_d73a432a-1ebd-4a2b-af89-967a55c058b0_828x.png?v=1643359177"
          alt="Product"
          layout="fill"
        />
      </Box>
      <Box sx={styles.imageWrapper}>
        <Image 
          src="https://cdn.shopify.com/s/files/1/1162/8964/products/now_white-polaroid-camera_009027_angle-right_d73a432a-1ebd-4a2b-af89-967a55c058b0_828x.png?v=1643359177"
          alt="Product"
          layout="fill"
        />
      </Box>
      <Box sx={styles.imageWrapper}>
        <Image 
          src="https://cdn.shopify.com/s/files/1/1162/8964/products/now_white-polaroid-camera_009027_angle-right_d73a432a-1ebd-4a2b-af89-967a55c058b0_828x.png?v=1643359177"
          alt="Product"
          layout="fill"
        />
      </Box>
    </Slider>
    </Box>
  )
}

export default ProductGallery