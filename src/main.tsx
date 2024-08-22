import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App.tsx'
import {cvRomane} from './2024-cv-romane.ts'
import {Box, createTheme, CssBaseline, ThemeProvider} from '@mui/material'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={() => {
      const fontSize = 11
      const baseTheme = createTheme({})
      const fontFamily = '"Open Sans", sans-serif'
      return createTheme({
        // spacing: 12,
        palette: {
          background: {
            default: '#f6f8fc',
            paper: '#fff',
          }
        },
        typography: {
          fontFamily,
          subtitle1: {
            color: baseTheme.palette.primary.main,
            fontSize: '1.95rem',
            letterSpacing: '2px',
            fontWeight: 200,
            lineHeight: '1.1',
          },
          h1: {
            fontSize: '1.5rem',
            color: baseTheme.palette.primary.main,
            p: 0,
            m: 0,
          },
          h2: {
            textTransform: 'uppercase',
            marginBottom: baseTheme.spacing(1),
            fontSize: '1.5rem',
            // fontWeight: 500,
            p: 0,
            m: 0
          },
          h3: {
            color: baseTheme.palette.primary.main,
            fontSize: `1.25rem`,
            fontWeight: 500,
            p: 0,
            m: 0,
            marginBottom: baseTheme.spacing(.5),
          },
          h4: {
            fontSize: `1.rem`,
            color: baseTheme.palette.text.secondary,
          },
        },
        components: {
          MuiCssBaseline: {
            styleOverrides: {
              '*': {
                boxSizing: 'border-box',
              },
              ul: {
                listStylePosition: 'outside',
                margin: 0,
                paddingLeft: 18,
                // m: 0,
                // pl: '4px',
              },
              li: {
                mb: 1,
              },
              // '.MuiDateRangeCalendar-root > div:first-child': {
              //   display: 'none',
              // },
              '@font-face': {
                fontFamily: 'Material Icons',
                fontStyle: 'normal',
                fontWeight: 400,
                src: 'url(https://fonts.gstatic.com/s/materialicons/v140/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2) format("woff2")',
              },
              '.material-icons': {
                fontFamily: 'Material Icons',
                fontWeight: 'normal',
                fontStyle: 'normal',
                fontSize: 24,
                lineHeight: 1,
                letterSpacing: 'normal',
                textTransform: 'none',
                display: 'inline-block',
                whiteSpace: 'nowrap',
                wordWrap: 'normal',
                direction: 'ltr',
                WebkitFontFeatureSettings: '"liga"',
                WebkitFontSmoothing: 'antialiased',
              },
              // '.Mui-error': {
              //   color: baseTheme.palette.error.main + ' !important',
              // },
              '.recharts-surface': {
                overflow: 'visible',
              },
              '@page': {
                // marginTop: '80px',
                paddingTop: '80px',
              },
              b: {
                fontWeight: 'bold',
              },
              html: {
                fontSize: fontSize,
                fontFamily,
              },
              button: {
                fontFamily,
              },
              '.aa-datepicker-min::-webkit-calendar-picker-indicator': {
                display: 'none',
              },
              body: {
                margin: 0,
                fontSize: '1rem',
                lineHeight: '1.5',
                boxSizing: 'border-box',
              },
              p: {
                ...baseTheme.typography.body1,
                textAlign: 'justify',
              },
              '.link': {
                color: baseTheme.palette.info.main,
                textDecoration: 'underline',
              },
              a: {
                color: 'inherit',
                textDecoration: 'none',
              },
              ':focus': {
                outline: 0,
              },
            },
          }
        }
      })
    }}>
      <CssBaseline>
        <Box sx={{p: 1}}>
          <App cv={cvRomane}/>
        </Box>
      </CssBaseline>
    </ThemeProvider>
  </React.StrictMode>,
)
