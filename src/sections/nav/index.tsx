import styles from './index.module.scss';
import { Button } from 'src/components'

export const Nav: React.FC = () => {
  return (
    <div className={styles.Nav}>
      <Button 
        type="text-link"
        text="Resume"
        link="/resume"
      />
    </div>
  )
}
