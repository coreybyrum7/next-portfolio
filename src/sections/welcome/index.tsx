import { Section, Grid, Title, Subtitle } from 'src/components'

export const Welcome: React.FC = () => {
  return (
    <Section id="welcome">
      <Grid
        mobileCols={1}
        tabletCols={1}
        desktopCols={1}
      >
        <Title 
          size={10}
          weight={700}
          alignment="center"
        >
          Hi, I'm <span style={{color: '#00439c'}}>Corey.</span>
        </Title>
        <Subtitle 
          size={6}
          subHeadingText="UI/UX Front End Engineer based in San Francisco, CA."
          alignment="center"
        />
      </Grid>
    </Section>
  )
}
