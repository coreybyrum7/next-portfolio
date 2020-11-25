import clsx from 'clsx';
import styles from './index.module.scss';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

export interface SkillsChartProps {
  name: string,
  skill1: string,
  value1: number,
  skill2: string,
  value2: number,
  skill3: string,
  value3: number,
  skill4: string,
  value4: number
}

export const SkillsChart: React.FC<SkillsChartProps> = props => {
  const { name, skill1, value1, skill2, value2, skill3, value3, skill4, value4 } = props;
  const data = [
    {
      [name]: name, [skill1]: value1, [skill2]: value2, [skill3]: value3, [skill4]: value4,
    },
  ];

  return (
    <div className={styles.SkillsChart}>
      <BarChart
        width={400}
        height={150}
        data={data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <XAxis dataKey={name} />
        <Tooltip />
        <Legend />
        <Bar dataKey={skill1} fill="#8884d8" />
        <Bar dataKey={skill2} fill="#82ca9d" />
        <Bar dataKey={skill3} fill="#000" />
        <Bar dataKey={skill4} fill="#8884d8" />
      </BarChart>
    </div>
  );
};
