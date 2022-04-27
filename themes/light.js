import { createTheme } from '@mui/material/styles'

export const themeOptions = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#ffffff',
      container: '#f7f7f7',
      footer: '#e3e3e3',
    },
    secondary: {
      main: '#fcbe84',
      red: '#ef3827',
      orange: '#ff8200',
      yellow: '#ffb500',
      green: '#78be20',
      blue: '#198cd9',
      
    },
    // text: {
    //   primary: '#171d2f',
    //   secondary: '#a2a8ba',
    //   paragraph: '#d4d5d9',
    // },
    // error: {
    //   main: '#ff7777',
    // }
  },
  typography: {
    fontFamily: 'Real Text, Real Head, Arial'
  }
})