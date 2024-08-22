import {Box, BoxProps, useTheme} from '@mui/material'

export const Panel = ({sx, ...props}: BoxProps) => {
  const t = useTheme()
  return (
    <Box sx={{
      minWidth: 240,
      background: t.palette.background.default,
      p: 1,
      borderRadius: '16px',
      '&:not(:last-of-type)': {
        mb: 1,
      },
      ...sx
    }}
         {...props}
    />
  )
}