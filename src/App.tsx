import {Box, BoxProps, useTheme} from '@mui/material'
import {Cv} from './2024-cv-romane.ts'
import React, {ReactNode} from 'react'
import {Pdf, PdfSlide} from './Pdf.tsx'
import {format} from 'date-fns'
import {Head} from './Head.tsx'
import {Article} from './Article.tsx'
import {Section} from './Section.tsx'
import {ArticleSmall} from './ArticleSmall.tsx'

export const formatDates = (params: [Date, Date | undefined] | string) => {
  if (typeof params === 'string') return params
  const [start, end] = params
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
        {title && <Box component={wrap ? undefined : 'span'}>{title}</Box>}
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
        <Head cv={cv}/>
        <Box>
          {cv.sections.slice(0, 1).map(section =>
            <Section title={section.title}>
              {section.items.slice(0, 4).map(sub =>
                <Article {...sub}>
                  <ul>
                    {sub.content.map(content =>
                      <ContentList title={content.title} bullet sx={{textAlign: 'justify'}}>{content.desc}</ContentList>
                    )}
                  </ul>
                </Article>
              )}
            </Section>
          )}
        </Box>
      </PdfSlide>
      <PdfSlide>
        <Head cv={cv}/>
        <Box>
          {cv.sections.slice(0, 1).map(section =>
            <Section title={section.title}>
              {section.items.slice(4).map(sub =>
                <Article {...sub}>
                  <ul>
                    {sub.content.map(content =>
                      <ContentList title={content.title} bullet sx={{textAlign: 'justify'}}>{content.desc}</ContentList>
                    )}
                  </ul>
                </Article>
              )}
            </Section>
          )}
          {cv.sections.slice(1, 2).map(section =>
            <Section title={section.title}>
              {section.items.map(sub =>
                <Article {...sub}>
                  {sub.content.map(content =>
                    <ContentList title={content.title} sx={{textAlign: 'justify'}}>{content.desc}</ContentList>
                  )}
                </Article>
              )}
            </Section>
          )}
          <Box sx={{display: 'flex', mt: 2}}>
            <Box sx={{flex: 1, mr: 2}}>
              {cv.sections.slice(2, 3).map(section =>
                <Section title={section.title}>
                  {section.items.map(sub =>
                    <ArticleSmall {...sub}>
                      <ul>
                        {(sub.content ?? []).map(content =>
                          <ContentList title={content.title} bullet sx={{textAlign: 'justify'}}>{content.desc}</ContentList>
                        )}
                      </ul>
                    </ArticleSmall>
                  )}
                </Section>
              )}
            </Box>
            <Box sx={{width: 200}}>
              <Section title="Languages">
                {cv.langs.map(content =>
                  <ContentList title={content.title} sx={{textAlign: 'justify', mb: 1}}>{content.desc}</ContentList>
                )}
              </Section>
            </Box>
          </Box>
        </Box>
      </PdfSlide>
    </Pdf>
  )
}
