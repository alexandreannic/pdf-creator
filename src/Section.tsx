import {Box, BoxProps, Typography} from '@mui/material'
import React from 'react'

export const Section = ({title, sx, children, ...props}: BoxProps) => {
  return (
    <Box sx={{
      '&:not(:first-of-type)': {
        mt: 2
      }
    }}>
      <Typography variant="h2">{title}</Typography>
      {children}
    </Box>
  )
}