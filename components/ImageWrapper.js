import {
  Box,
} from '@mui/material'

const ImageWrapper = ({ children, width='100%', sx }) => {
  const styles = {
    imageWrapper: {
      // backgroundColor: 'red',
      width: width,
      position: 'relative',
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
    <Box sx={{...styles.imageWrapper, ...sx}}>
      {children}
    </Box>
  )
}

export default ImageWrapper