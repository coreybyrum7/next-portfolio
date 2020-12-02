import clsx from 'clsx';
import styles from './index.module.scss';
import { Title, Icon } from 'src/components';

export interface InterestsProps {}

export const Interests: React.FC = () => {
  return (
    <div className={styles.Interests}>
      <Title 
        size={4}
        spacing={5}
      >
        Interests
      </Title>
      <div className={styles.Interests__icons}>
        <Icon name="HikingGuy" className="interests" />
        <Icon name="Surfboard" className="interests" />
        <Icon name="Dog" className="interests" />
        <Icon name="Code" className="interests" />
        <Icon name="Travel" className="interests" />
      </div>
    </div>
  );
};
