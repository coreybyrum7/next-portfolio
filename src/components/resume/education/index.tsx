import clsx from 'clsx';
import styles from './index.module.scss';
import { Title } from 'src/components';

export interface EducationProps {}

export const Education: React.FC = () => {
  return (
    <div className={styles.Education}>
      <Title 
        size={6}
        spacing={6}
      >
        Education
      </Title>
      <Title
        size={4}
        spacing={3}
        weight="normal"
        modifier="college"
      >
        East Carolina University, 2011-2015
      </Title>
      <Title
        size={4}
        spacing={3}
        weight="normal"
      >
        Computer Science, BS
      </Title>
    </div>
  );
};
