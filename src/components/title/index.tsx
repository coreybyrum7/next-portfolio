import clsx from 'clsx';
import styles from './index.module.scss'

export interface TitleProps {
    size: number;
    weight?: 'light' | 'normal' | 'bold';
    alignment?: 'left' | 'center' | 'right';
    spacing?: number;
    modifier?: string;
}

export const Title: React.FC<TitleProps> = ({ size, weight, alignment, spacing, modifier, children }) => {
    return (
        <div 
          className={clsx(
            styles.Title,
            styles[`Title--${modifier}`],
            styles[`Title--size-${size}`],
            styles[`Title--spacing-${spacing}`],
            styles[`Title--weight-${weight}`],
            styles[`Title--align-${alignment}`],
          )}
        >
          {children}
        </div>
    )
}
