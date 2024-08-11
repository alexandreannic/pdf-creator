import {Box, BoxProps, Icon, Typography, useTheme} from '@mui/material'
import {Cv} from './2024-cv-romane.ts'
import {ReactNode} from 'react'
import {Pdf, PdfSlide} from './Pdf.tsx'
import {format} from 'date-fns'

const formatDates = ([start, end]: [Date, Date | undefined]) => format(start, 'MMM-yyyy') + (end ? (' - ' + format(end, 'MMM-yyyy')) : '')

const HeaderItem = ({icon, children, sx, ...props}: {icon: string} & BoxProps) => {
  const t = useTheme()
  return (
    <Box sx={{display: 'flex', alignItems: 'center', mb: .5, ...sx}}>
      <Icon sx={{mr: 1, color: t.palette.text.secondary}} fontSize="small">{icon}</Icon>
      {children}
    </Box>
  )
}

const ContentList = ({
  // icon = <Icon fontSize="inherit" sx={{fontSize: 10, mr: 1, mt: '7px'}}>fiber_manual_record</Icon>,
  title,
  wrap,
  children,
  sx,
  ...props
}: {
  wrap?: boolean
  // icon?: ReactNode
  title?: ReactNode
} & BoxProps) => {
  const t = useTheme()
  return (
    <Box sx={{mb: .5, display: 'flex', ...sx}} {...props}>
      {/*{icon}*/}
      <Box>
        {title && <Box component={wrap ? undefined : 'span'} sx={{fontWeight: 500}}>{title}</Box>}
        {!wrap && <>&nbsp;</>}
        <Box component="span" sx={{color: t.palette.text.secondary}}>{children}</Box>
      </Box>
    </Box>
  )
}

export function App({
  cv,
}: {
  cv: Cv
}) {
  const t = useTheme()
  return (
    <Pdf>
      <PdfSlide>
        <Box sx={{display: 'flex', p: 1}}>
          <Box sx={{mr: 2, minWidth: 240}}>
            <Box sx={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
              <Box sx={{
                backgroundImage: 'url(/avatar-romane.jpeg)',
                backgroundSize: 'cover',
                height: 90,
                width: 90,
                borderRadius: 90,
              }}></Box>
              <Typography variant="h1">{cv.name}</Typography>
              <Box sx={{mb: 1, color: t.palette.text.secondary}}>{cv.subTitle}</Box>
            </Box>
            <HeaderItem icon="location_on">{cv.location}</HeaderItem>
            <HeaderItem icon="phone">{cv.phone}</HeaderItem>
            <HeaderItem icon="email" sx={{mb: 2}}>{cv.email}</HeaderItem>
            {cv.skills.map(skill =>
              <Box key={skill.title} sx={{mb: 1}}>
                <Typography variant="h3" sx={{mt: 2}}>{skill.title}</Typography>
                {skill.content.map(_ =>
                  <ContentList wrap key={_.title} title={_.title} sx={{mt: 1.25}}>
                    {_.desc && <span dangerouslySetInnerHTML={{__html: _.desc}}/>}
                  </ContentList>
                )}
              </Box>
            )}
          </Box>
          <Box>
            {cv.sections.map(section =>
              <Box sx={{
                '&:not(:first-of-type)': {
                  m: 3
                }
              }}>
                <Typography variant="h2">{section.title}</Typography>
                {section.sub.map(sub =>
                  <Box sx={{
                    mb: 1,
                    '&:not(:first-of-type)': {
                      mt: 1.5
                    }
                  }}>
                    <Box sx={{display: 'flex', alignItems: 'center'}}>
                      <Typography variant="h3">{sub.title}</Typography>
                    </Box>
                    <Box sx={{display: 'flex', alignItems: 'center', marginLeft: 'auto', mb: .5}}>
                      <Icon color="disabled" fontSize="inherit" sx={{mr: .5}}>location_on</Icon>
                      <Typography variant="h4">{sub.location}</Typography>
                      <Icon color="disabled" fontSize="inherit" sx={{mr: .5, ml: 2}}>today</Icon>
                      <Typography variant="h4">{formatDates(sub.date)}</Typography>
                    </Box>
                    {sub.content.map(content =>
                      <ContentList title={content.title}>{content.desc}</ContentList>
                    )}
                  </Box>
                )}
              </Box>
            )}
          </Box>
        </Box>
      </PdfSlide>
    </Pdf>
  )
}
