import styles from './index.module.scss';
import { Section, Resume as ResumeComp } from 'src/components'

export const Resume: React.FC = () => {
  return (
    <Section className={styles.Resume} id="resume">
      <ResumeComp />
    </Section>
  )
}
