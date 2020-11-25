import clsx from 'clsx';
import styles from './index.module.scss';
import { Title } from 'src/components';

export interface SkillsProps {}

export const Skills: React.FC = () => {
  return (
    <div className={styles.Skills}>
      <Title 
        size={6}
        spacing={5}
      >
        Skills
      </Title>
    </div>
  );
};
