import clsx from 'clsx';
import styles from './index.module.scss';
import { Title, Icon, TextBlock, List } from 'src/components';

export interface SkillsSectionProps {
  icon: 'JS' | 'CSS' | 'Settings';
  title: string;
  position: string;
  p1?: string;
  p2?: string;
  p3?: string;
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ icon, title, position, p1, p2, p3, children }) => {
  return (
    <div className={styles.SkillsSection}>
      <div className={styles.SkillsSection__container}>
        <Icon name={icon} className="skills" />
        <div className={styles.SkillsSection__container_content}>
          <Title size={3} weight="bold" spacing={2}>
            {title}
          </Title>
          <Title size={3} weight="bold">
            <span>{position}</span>
          </Title>
        </div>
      </div>
      {p1 &&
        <div className={styles.SkillsSection__container}>
        <div className={styles.SkillsSection__container_content}>
          <List
            type="experienceHighlights"
            items={[p1, p2, p3]}
            className="skills"
          />
        </div>
      </div>
      }
    </div>
  );
};
