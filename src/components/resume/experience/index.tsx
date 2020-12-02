import clsx from 'clsx';
import styles from './index.module.scss';
import { Title } from 'src/components';
import { ExperienceSection } from '../experience-section';

export interface ExperienceProps {}

export const Experience: React.FC = () => {
  return (
    <div className={styles.Experience}>
      <Title 
        size={4}
        spacing={5}
      >
        Experience
      </Title>
      <ExperienceSection
        title="PlayStation"
        position="UI Engineer"
        date="08/2019 - Present"
        p1="Creation and maintenance of DesignKit, component library for PlayStation.com"
        p2="Continuous component development and enhancement"
        p3="PlayStation annual wrap-up and other one-off campaigns"
      />
      <ExperienceSection
        title="Learn on Demand Systems"
        position="Lead UI/UX Engineer"
        date="09/2018 - 08/2019"
        p1="Lead new design initiatives while enforcing UX best practices"
        p2="Redesigned documentation site, created one stop-shop admin menu (similar to AWS console)"
        p3="Received company 'Impact Award' at annual event for modernizing site"
      />
      <ExperienceSection
        title="Learn on Demand Systems"
        position="Front End Engineer"
        date="02/2018 - 09/2018"
        p1="Built out LODs' Training Management platform which allowed customers to create and manage classrooms, labs, and students"
      />
      <ExperienceSection
        title="3M Health Information Systems"
        position="Full Stack Engineer"
        date="02/2018 - 09/2018"
        p1="Merged cloud space from Azure to AWS"
      />
      <ExperienceSection
        title="Charles Schwab"
        position="iOS Developer (Intern)"
        date="06/2014 - 08/2014"
      />
    </div>
  );
};
