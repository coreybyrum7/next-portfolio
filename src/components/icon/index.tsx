import clsx from 'clsx';
import styles from './index.module.scss';
import ChevronRight from 'src/assets/svg/chevron_right.svg';
import HikingGuy from 'src/assets/svg/hiking_guy.svg';
import Surfboard from 'src/assets/svg/surfboard.svg';
import Dog from 'src/assets/svg/dog.svg';
import Code from 'src/assets/svg/code.svg';
import Travel from 'src/assets/svg/travel.svg';

export interface IconProps {
  name: string;
  className?: string;
}

export const Icon: React.FC<IconProps> = ({ name, className }) => {
  return (
    <div className={clsx(
      styles.Icon,
      styles[`Icon--${className}`]
    )}>
      {
        name == "ChevronRight" ? <ChevronRight /> 
        : name == "HikingGuy" ? <HikingGuy /> 
        : name == "Surfboard" ? <Surfboard />
        : name == "Dog" ? <Dog />
        : name == "Code" ? <Code />
        : name == "Travel" ? <Travel />
        : null
      }
    </div>
  );
};
