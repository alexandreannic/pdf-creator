import {Box, BoxProps, GlobalStyles, useTheme} from '@mui/material'

const generalStyles = <GlobalStyles
  styles={{
    sup: {
      verticalAlign: 'top',
      fontSize: '0.75em',
    },
    p: {
      fontSize: 'inherit',
      lineHeight: 1.6,
      marginTop: 0,
      marginBottom: 0,
      '&:not(:last-of-type)': {
        marginBottom: 8,
      }
    },
    '@media print': {
      '.gm-fullscreen-control': {
        display: 'none',
      },
      '.noprint': {
        display: 'none',
      },
      '[role="tooltip"]': {
        display: 'none',
      },
    },
  }}
/>

export const PdfSlide = ({
  format = 'vertical',
  allowOverflow,
  ...props
}: {allowOverflow?: boolean, format?: 'horizontal' | 'vertical'} & BoxProps) => {
  const x = '29.7cm'
  const y = '21.0cm'
  const width = format === 'horizontal' ? x : y
  const height = format === 'horizontal' ? y : x
  return (
    <Box
      {...props}
      sx={{
        background: t => t.palette.background.paper,
        p: 0,
        // overflow: 'hidden',
        width,
        height: allowOverflow ? undefined : height,
        '@media screen': {
          // aspectRatio: (297 / 210) + '',
          height: allowOverflow ? undefined : height,
          width,
          mb: 16,
          borderRadius: '6px',
          boxShadow: t => t.shadows[1],
        },
        // pageBreakAfter: 'always',
        px: 4,
        py: 2,
        ...props.sx,
      }}
    />
  )
}

export const Pdf = ({children, ...props}: BoxProps) => {
  const t = useTheme()
  return (
    <>
      {generalStyles}
      <Box sx={{
        overflow: 'hidden',
        background: t.palette.background.paper,//'#f6f7f9',
        '@media screen': {
          background: t.palette.background.default,//'#f6f7f9',
          padding: 2,
        }
      }}>
        <Box
          {...props}
          sx={{
            size: 'landscape',
            overflow: 'hidden',
            width: '29.7cm',
            p: 0,
            m: 0,
            // height: '21.0cm',
            '@media screen': {
              my: 2,
              mx: 'auto',
            }
          }}
        >
          {children}
        </Box>
      </Box>
    </>
  )
}
