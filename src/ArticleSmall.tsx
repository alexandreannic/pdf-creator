import {Box, BoxProps, Icon, Typography} from '@mui/material'
import React from 'react'
import {Cv} from './2024-cv-romane.ts'

export const ArticleSmall = ({
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
      mb: .5,
      '&:not(:first-of-type)': {
        mt: .5
      }
    }}>
      <Box sx={{display: 'flex', alignItems: 'center'}}>
        <Typography fontWeight={500}>{title}</Typography>
        <Box sx={{
          ml: 1,
          display: 'flex',
          alignItems: 'center',
        }}>
          <Icon color="disabled" fontSize="inherit" sx={{mr: .5}}>business</Icon>
          <Typography variant="h4">{org}</Typography>
          {/*{location && (*/}
          {/*  <>*/}
          {/*    <Icon color="disabled" fontSize="inherit" sx={{mr: .5, ml: 2}}>location_on</Icon>*/}
          {/*    <Typography variant="h4" sx={{width: 80}}>{location}</Typography>*/}
          {/*  </>*/}
          {/*)}*/}
          {/*<Icon color="disabled" fontSize="inherit" sx={{mr: .5, ml: 2}}>today</Icon>*/}
          {/*<Typography variant="h4" sx={{width: 200}}>{formatDates(date)}</Typography>*/}
        </Box>
      </Box>
    </Box>
  )
}