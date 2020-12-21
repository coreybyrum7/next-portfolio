import clsx from 'clsx';
import styles from './index.module.scss';
import { Title } from 'src/components';
import { ExperienceSection } from '../experience-section';

export interface ExperienceProps {}

export const Experience: React.FC = () => {
  return (
    <div className={styles.Experience}>
      <Title 
        size={5}
        spacing={5}
      >
        Experience
      </Title>
      <ExperienceSection
        title="PlayStation"
        position="UI Engineer"
        date="08/2019 - Present"
        p1="Creation and maintenance of DesignKit, the component library for PlayStation.com"
        p2="Ensure components such as grids, sub-grids, carousels, banners, heros, text and button components are reusable and customizable via props and classes"
      />
      <ExperienceSection
        title="Learn on Demand Systems"
        position="Lead UI/UX Engineer"
        date="09/2018 - 08/2019"
        p1="Lead new design initiatives with UX best practices"
        p2="Create new documentation site and one-stop-shop admin menu for administrators, both including click history, site search, and menu customization options"
        p3="Redesigned course/class/subscription catalogs using Netflix like transitions"
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
        date="02/2016 - 01/2018"
        p1="Enhanced 3M HIS's grouping software allowing for health care coding, payment, and analytics"
      />
      <ExperienceSection
        title="Charles Schwab"
        position="iOS Developer (Intern)"
        date="06/2014 - 08/2014"
      />
    </div>
  );
};
