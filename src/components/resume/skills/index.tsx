import clsx from 'clsx';
import styles from './index.module.scss';
import { Title } from 'src/components';
import { SkillsSection } from '../skills-section';

export interface SkillsProps {}

export const Skills: React.FC = () => {
  return (
    <div className={styles.Skills}>
      <Title 
        size={5}
        spacing={5}
      >
        Skills
      </Title>
      <SkillsSection
        icon="JS"
        title="JavaScript"
        position="Interaction, structure, and capability"
        p1="ES2020, ES6, JQuery, NextJS, React"
        p2="Jest, Enzyme"
        p3="A focus on performance, readability and reusability through componentized development"
      />
      <SkillsSection
        icon="CSS"
        title="CSS"
        position="Presentation, style, and interaction"
        p1="SASS, SCSS, CSS, LESS"
        p2="Mixins, Functions, Variables, Extensions"
        p3="Keen eye for creating engaging and captivating UI with a focus on uniformity and reusability"
      />
      <SkillsSection
        icon="Settings"
        title="Tools"
        position="Craftsmanship with code"
        p1="Git, NPM, Yarn, Gulp, AWS, AEM, Jenkins"
        p2="Ability to hit the ground running with new projects and technologies"
      />
    </div>
  );
};
