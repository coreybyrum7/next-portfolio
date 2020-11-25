import clsx from 'clsx';
import styles from './index.module.scss';
import { Header } from './header';
import { Biography } from './biography';
import { Experience } from './experience';
import { Interests } from './interests';
import { Education } from './education';
import { Skills } from './skills';
import { Section, Grid, Box } from 'src/components';

export const Resume: React.FC = () => {
  return (
    <div className={styles.Resume}>
      <Section>
        <Header />
      </Section>
      <Section>
        <Biography />
      </Section>
      <Section className={styles.Resume__section_border}>
        <Grid
          mobileCols={2}
          tabletCols={2}
          desktopCols={2}
        >
          <Box numColumns={1}>
            <Skills />
          </Box>
          <Box numColumns={1}>
            <Experience />
          </Box>
        </Grid>
      </Section>
      <Section>
        <Grid
          mobileCols={2}
          tabletCols={2}
          desktopCols={2}
        >
          <Box numColumns={1}>
            <Interests />
          </Box>
          <Box numColumns={1}>
            <Education />
          </Box>
        </Grid>
      </Section>
    </div>
  );
};
