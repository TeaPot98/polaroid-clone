import {
  Breadcrumbs as MuiBreadcrumbs,
  Typography,
} from '@mui/material'

import Link from 'next/link'

const Breadcrumbs = ({ links }) => {
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
      {links.map((l, i) => i < links.length - 1 ?
        <Link key={l.link + i.toString()} href={l.link}>
          <Typography sx={styles.breadcrumbActive}>
            {l.name}
          </Typography>
        </Link> :
        <Typography key={i} sx={styles.breadcrumb}>
          {l.name}
        </Typography>
      )}
    </MuiBreadcrumbs>
  )
}

export default Breadcrumbs