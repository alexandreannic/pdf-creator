import {Box, BoxProps, Icon, Typography, useTheme} from '@mui/material'
import {Cv} from './2024-cv-romane.ts'
import React, {ReactNode} from 'react'
import {Pdf, PdfSlide} from './Pdf.tsx'
import {format} from 'date-fns'
import {Head} from './Head.tsx'
import {Panel} from './Panel.tsx'
import {Sidebar} from './Sidebar.tsx'

const formatDates = ([start, end]: [Date, Date | undefined]) => {
  return format(start, 'MMM yyyy') + ' - ' + (end ? format(end, 'MMM yyyy') : 'Present')
}

const ContentList = ({
  // icon = <Icon fontSize="inherit" sx={{fontSize: 10, mr: 1, mt: '7px'}}>fiber_manual_record</Icon>,
  title,
  bullet,
  wrap,
  children,
  sx,
  ...props
}: {
  bullet?: boolean
  wrap?: boolean
  // icon?: ReactNode
  title?: ReactNode
} & BoxProps) => {
  const t = useTheme()
  return (
    <Box component={bullet ? 'li' : undefined} sx={{mb: .5, ...sx}} {...props}>
      {/*{icon}*/}
      <Box>
        {title && <Box component={wrap ? undefined : 'span'} sx={{fontWeight: 600}}>{title}</Box>}
        {title && !wrap && <>&nbsp;</>}
        <Box component="span" sx={{color: t.palette.text.secondary, '& b': {fontWeight: 500}}}>{children}</Box>
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
          <Sidebar>
            <Head cv={cv}/>
            <Panel>
              {cv.skills.slice(0, 2).map(skill =>
                <Box key={skill.title} sx={{mb: 1}}>
                  <Typography variant="h3" sx={{mt: 1.5}}>{skill.title}</Typography>
                  {skill.content.map(_ =>
                    <ContentList wrap key={_.title} title={_.title} sx={{mt: 1}}>
                      {_.desc && <span dangerouslySetInnerHTML={{__html: _.desc}}/>}
                    </ContentList>
                  )}
                </Box>
              )}
            </Panel>
          </Sidebar>
          <Box>
            {cv.sections.map(section =>
              <Box sx={{
                '&:not(:first-of-type)': {
                  m: 3
                }
              }}>
                <Typography variant="h2">{section.title}</Typography>
                {section.items.slice(0, 3).map(sub =>
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
                    <ul>
                      {sub.content.map(content =>
                        <ContentList title={content.title} bullet sx={{textAlign: 'justify'}}>{content.desc}</ContentList>
                      )}
                    </ul>
                  </Box>
                )}
              </Box>
            )}
          </Box>
        </Box>
      </PdfSlide>
      <PdfSlide>
        <Box sx={{display: 'flex', p: 1}}>
          <Sidebar>
            <Head cv={cv}/>
            <Panel>
              {cv.skills.slice(2).map(skill =>
                <Box key={skill.title} sx={{mb: 1}}>
                  <Typography variant="h3" sx={{mt: 1.5}}>{skill.title}</Typography>
                  {skill.content.map(_ =>
                    <ContentList wrap key={_.title} title={_.title} sx={{mt: 1}}>
                      {_.desc && <span dangerouslySetInnerHTML={{__html: _.desc}}/>}
                    </ContentList>
                  )}
                </Box>
              )}
            </Panel>
          </Sidebar>
          <Box>
            {cv.sections.map(section =>
              <Box sx={{
                '&:not(:first-of-type)': {
                  m: 3
                }
              }}>
                <Typography variant="h2">{section.title}</Typography>
                {section.items.slice(3).map(sub =>
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
                    <ul>
                      {sub.content.map(content =>
                        <ContentList title={content.title} bullet sx={{textAlign: 'justify'}}>{content.desc}</ContentList>
                      )}
                    </ul>
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
