import clsx from 'clsx';
import styles from './index.module.scss';

export interface BoxProps {
  numColumns: number;
}

export const Box: React.FC<BoxProps> = ( props ) => {
  const { numColumns, children } = props;
  return (
    <div className={clsx(
      styles.Box,
      styles[`Box--${numColumns}`]
    )}>
      { children }
    </div>
  );
};
