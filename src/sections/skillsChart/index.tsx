import { Section, Grid, SkillsChart } from 'src/components'

export const SkillsChartSection: React.FC = () => {
  return (
    <Section id="skillsChart">
      <Grid
        mobileCols={1}
        tabletCols={2}
        desktopCols={2}
      >
        <SkillsChart
          name="CSS"
          skill1="SCSS"
          value1={95} 
          skill2="Mixins"
          value2={90} 
          skill3="Extendability"
          value3={90} 
          skill4="Functions"
          value4={85} 
        />
        <SkillsChart
          name="JS"
          skill1="React"
          value1={75} 
          skill2="jQuery"
          value2={95} 
          skill3="NextJS"
          value3={80} 
          skill4="ES6"
          value4={85} 
        />
      </Grid>
    </Section>
  )
}
