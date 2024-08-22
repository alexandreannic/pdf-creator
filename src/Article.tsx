import {Box, BoxProps, Icon, Typography} from '@mui/material'
import React from 'react'
import {Cv} from './2024-cv-romane.ts'
import {formatDates} from './App.tsx'

export const Article = ({
  title,
  location,
  org,
  date,
  children,
  content,
  ...props
}: BoxProps & Omit<Cv['sections'][0]['items'], 'content'>) => {
  return (
    <Box sx={{
      mb: 1,
      '&:not(:first-of-type)': {
        mt: 1.5
      }
    }}>
      <Box sx={{display: 'flex', alignItems: 'center'}}>
        <Typography variant="h3">{title}</Typography>
      </Box>
      <Box sx={{
        fontSize: '1.1em',
        mb: 1,
        display: 'flex', alignItems: 'center', marginLeft: 'auto',
      }}>
        <Icon color="disabled" fontSize="inherit" sx={{mr: .5}}>business</Icon>
        <Typography variant="h4">{org}</Typography>
        {location && (
          <>
            <Icon color="disabled" fontSize="inherit" sx={{mr: .5, ml: 2}}>location_on</Icon>
            <Typography variant="h4">{location}</Typography>
          </>
        )}
        <Icon color="disabled" fontSize="inherit" sx={{mr: .5, ml: 2}}>today</Icon>
        <Typography variant="h4">{formatDates(date)}</Typography>
      </Box>
      {children}
    </Box>
  )
}