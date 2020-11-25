import clsx from 'clsx';
import styles from './index.module.scss'

export interface SubtitleProps {
    size: number;
    subHeadingText: string;
    alignment: string;
}

export const Subtitle: React.FC<SubtitleProps> = (props) => {
  const { size, subHeadingText, alignment } = props;
    return (
        <div 
          className={clsx(
            styles.Subtitle,
            styles[`Subtitle--size-${size}`],
            styles[`Subtitle--align-${alignment}`]
          )}
        >
          {subHeadingText}
        </div>
    )
}
