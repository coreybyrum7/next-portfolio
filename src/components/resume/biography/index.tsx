import clsx from 'clsx';
import styles from './index.module.scss';
import { Grid, Box, Title, TextBlock } from 'src/components';

export interface BiographyProps {}

export const Biography: React.FC = () => {
  return (
    <div className={styles.Biography}>
      <Grid
        mobileCols={2}
        tabletCols={2}
        desktopCols={2}
      >
        <Box numColumns={1}>
          <div className={styles.Biography__title}>
            <Title 
                size={14}
                weight="bold"
                alignment="left"
              >
                Hello<span style={{color: '#00439c'}}>,</span>
              </Title>
          </div>
        </Box>
        <Box numColumns={1}>
          <div className={styles.Biography__info}>
            <TextBlock size={4}>
              I'm Corey Byrum. I'm a Front End Engineer based out of San Francisco, California.
              I have experience building and maintaing component libraries, archetyping new solutions and initiatives, and working on large teams in an agile environment.
              I'm passionate about user experience, whether that's existential or direct, it's gratifying to be able to create an impact.
            </TextBlock>
          </div>
        </Box>
      </Grid>
    </div>
  );
};
