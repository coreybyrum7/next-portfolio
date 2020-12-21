import clsx from 'clsx';
import styles from './index.module.scss';
import { Title, Icon, TextBlock, List } from 'src/components';

export interface ExperienceSectionProps {
  title: string;
  position: string;
  date: string;
  p1?: string;
  p2?: string;
  p3?: string;
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ title, position, date, p1, p2, p3, children }) => {
  return (
    <div className={styles.ExperienceSection}>
      <div className={styles.ExperienceSection__container}>
        <Icon name="ChevronRight" />
        <div className={styles.ExperienceSection__container_content}>
          <Title size={3} weight="bold" spacing={2}>
            {title}
          </Title>
          <Title size={3} weight="light">
            <span>{position}</span> | {date}
          </Title>
        </div>
      </div>
      {p1 &&
        <div className={styles.ExperienceSection__container}>
        <div className={styles.ExperienceSection__container_content}>
          <List
            type="experienceHighlights"
            items={[p1, p2, p3]}
          />
        </div>
      </div>
      }
    </div>
  );
};
