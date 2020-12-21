import clsx from 'clsx';
import styles from './index.module.scss';
import { Grid, Box, Title, TextBlock } from 'src/components';
import { Fragment } from 'react';

export interface HeaderProps {}

export const Header: React.FC = () => {
  return (
    <div className={styles.Header}>
      <Grid
        mobileCols={2}
        tabletCols={2}
        desktopCols={2}
      >
        <Box 
          numColumns={1}
          alignVertically="true"
        >
          <div className={styles.Header_title}>
            <Title 
              size={5}
              weight="bold"
              alignment="left"
            >
              Corey Byrum
            </Title>
          </div>
        </Box>
        <Box numColumns={1}>
          <div className={styles.Header__info}>
            <TextBlock weight="bold" size={3}>
              coreybyrum7@gmail.com
            </TextBlock>
            <TextBlock weight="bold" size={3}>
              +1 (252) 489-0938
            </TextBlock>
          </div>
        </Box>
      </Grid>
    </div>
  );
};
