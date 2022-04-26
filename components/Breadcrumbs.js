import {
  Breadcrumbs as MuiBreadcrumbs,
  Typography,
} from '@mui/material'

import Link from 'next/link'

const Breadcrumbs = () => {
  const styles = {
    breadcrumbs: {
      mt: 4,
    },
    breadcrumb: {
      color: 'black',
    },
    breadcrumbActive: {
      color: 'black',
      cursor: 'pointer',
    },
  }
  
  return (
    <MuiBreadcrumbs separator=">" sx={styles.breadcrumbs}>
      <Link href="/">
        <Typography sx={styles.breadcrumbActive}>
          Home
        </Typography>
      </Link>
      <Typography sx={styles.breadcrumb}>
        Instant Cameras
      </Typography>
    </MuiBreadcrumbs>
  )
}

export default Breadcrumbs