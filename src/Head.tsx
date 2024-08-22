import {Box, BoxProps, Icon, useTheme} from '@mui/material'
import {Cv} from './2024-cv-romane.ts'
import {Panel} from './Panel.tsx'

export const Head = ({cv}: {cv: Cv}) => {
  const t = useTheme()
  return (
    <Panel>
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        mb: 1,
        // flexDirection: 'column'
      }}>
        <Box sx={{
          // backgroundImage: 'url(/avatar-romane.jpeg)',
          backgroundSize: 'cover',
          height: 85,
          width: 85,
          minWidth: 85,
          borderRadius: '12px',
        }}></Box>
        <Box sx={{ml: 1}}>
          {/*<Typography variant="subtitle1">{cv.name}</Typography>*/}
          {/*<Box sx={{mt: 1, color: t.palette.text.secondary}}>{cv.subTitle}</Box>*/}
        </Box>
      </Box>
      <HeaderItem icon="location_on">{cv.location}</HeaderItem>
      <HeaderItem icon="phone">{cv.phone}</HeaderItem>
      <HeaderItem icon="email">{cv.email}</HeaderItem>
    </Panel>
  )
}

const HeaderItem = ({icon, children, sx, ...props}: {icon: string} & BoxProps) => {
  const t = useTheme()
  return (
    <Box sx={{display: 'flex', alignItems: 'center', mb: .5, ...sx}}>
      <Icon sx={{mr: 1, color: t.palette.text.secondary}} fontSize="small">{icon}</Icon>
      {children}
    </Box>
  )
}
