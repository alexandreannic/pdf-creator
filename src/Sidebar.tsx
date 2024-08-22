import {Box, BoxProps} from '@mui/material'

export const Sidebar = ({sx, ...props}: BoxProps) => {
  return (
    <Box {...props} sx={{width: 390, mr: 1}}/>
  )
}