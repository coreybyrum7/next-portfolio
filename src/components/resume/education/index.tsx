import clsx from 'clsx';
import styles from './index.module.scss';
import { Title } from 'src/components';

export interface EducationProps {}

export const Education: React.FC = () => {
  return (
    <div className={styles.Education}>
      <Title 
        size={5}
        spacing={5}
      >
        Education
      </Title>
      <Title
        size={3}
        spacing={2}
        weight="bold"
        modifier="college"
      >
        East Carolina University, 2011-2015
      </Title>
      <Title
        size={3}
        spacing={3}
        weight="light"
      >
        Computer Science, BS
      </Title>
    </div>
  );
};
