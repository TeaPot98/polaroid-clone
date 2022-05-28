import IconButton from '@mui/material/IconButton'
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined'

const ColorButton = ({
  href,
  color,
  isActive,
}) => {
  const styles = {
    button: {
      backgroundColor: color,
      width: '27px',
      height: '27px',
      borderRadius: '15px',
      mr: 1,
      '&:hover': {
        backgroundColor: color,
        // border: '2px solid black'
      },
      '&:hover .color-button-icon': {
        color: 'gray',
      }
    },
    buttonIcon: {
      color: theme => isActive ? 'gray' : theme.palette.primary.footer,
      transition: 'color 0.1s ease-out'
    }
  }

  return <IconButton 
    sx={styles.button}
    href={href}
  >
    <CircleOutlinedIcon fontSize="large" sx={styles.buttonIcon} className="color-button-icon" />
  </IconButton>
}

export default ColorButton