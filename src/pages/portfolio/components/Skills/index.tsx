import React from 'react';
import { NavEnum } from '../../data';
import { SkillItem, SkillSet, SkillProficiency } from './model';
import styles from './style.module.less';
import { Scala, Typescript, Javascript, Kotlin, Python, Bash } from './components/Language';
import { Akka, ReactJS, NodeJS, Spring } from './components/Framework';
import { Oracle, Mysql } from './components/Database';
import { Git, Docker, Kubernetes } from './components/OtherSkill';

const skillSets: SkillSet[] = [
  {
    title: 'Language',
    items: [
      {
        title: 'Scala',
        imageNode: <Scala id="scala" />,
        proficiency: SkillProficiency.Familiar,
        tags: ['#가장_자신있는_언어!'],
      },
      {
        title: 'Typescript',
        imageNode: <Typescript id="typescript" />,
        proficiency: SkillProficiency.Familiar,
        tags: ['#클라이언트는_TS와_함께'],
      },
      {
        title: 'Javascript',
        imageNode: <Javascript id="javascript" />,
        proficiency: SkillProficiency.Familiar,
        tags: ['#요즘에는_가능하면_TS_사용해요'],
      },
      {
        title: 'Kotlin',
        imageNode: <Kotlin id="kotlin" />,
        proficiency: SkillProficiency.Tried,
        tags: ['#요즘_공부중인_언어', '#Java_대신_Kotlin이_출동한다면?'],
      },
      {
        title: 'Python',
        imageNode: <Python id="python" />,
        proficiency: SkillProficiency.Tried,
        tags: ['#머신러닝_공부할때_사용해요'],
      },
      {
        title: 'Bash',
        imageNode: <Bash id="bash" />,
        proficiency: SkillProficiency.Tried,
        tags: ['#쉘스크립트_작성_가능'],
      },
    ],
  },
  {
    title: 'Platform / Framework',
    items: [
      {
        title: 'Akka',
        imageNode: <Akka id="akka" />,
        proficiency: SkillProficiency.Familiar,
        tags: ['#Scala_Akka_조합은_사랑'],
      },
      {
        title: 'React',
        imageNode: <ReactJS id="reactjs" />,
        proficiency: SkillProficiency.Familiar,
        tags: ['#클라이언트_개발할때_주로_사용해요'],
      },
      {
        title: 'Node.js',
        imageNode: <NodeJS id="nodejs" />,
        proficiency: SkillProficiency.Familiar,
        tags: ['#JS개발자에겐_기본'],
      },
      {
        title: 'Spring',
        imageNode: <Spring id="spring" />,
        proficiency: SkillProficiency.Tried,
        tags: ['#Kotlin과_함께'],
      },
    ],
  },
  /*
  {
    title: 'Database',
    items: [
      {
        title: 'Oracle',
        imageNode: <Oracle id="oracle" />,
      },
      {
        title: 'MySQL',
        imageNode: <Mysql id="mysql" />,
      },
    ],
  },
  */
  {
    title: 'etc',
    items: [
      {
        title: 'Git',
        imageNode: <Git id="git" />,
        proficiency: SkillProficiency.Familiar,
        tags: ['#개발자라면_git은_기본'],
      },
      {
        title: 'Docker',
        imageNode: <Docker id="docker" />,
        proficiency: SkillProficiency.Tried,
        tags: ['#이미지_빌드_가능'],
      },
      {
        title: 'Kubernetes',
        imageNode: <Kubernetes id="kubernetes" />,
        proficiency: SkillProficiency.Tried,
        tags: ['#오브젝트_생성_및_관리_가능'],
      },
    ],
  },
];

const Skills = React.forwardRef<HTMLDivElement>((props, ref) => {
  const renderSkillItem = (item: SkillItem, key: number) => {
    return (
      <div className={styles.skillItem} key={`item-${key}`}>
        {React.cloneElement(item.imageNode, {
          iconName: item.title,
          proficiency: item.proficiency,
          tags: item.tags,
        })}
      </div>
    );
  };
  const renderSkillSet = (set: SkillSet, key: number) => {
    return (
      <div className={styles.skillSet} key={`set-${key}`}>
        <h3>{set.title}</h3>
        <div>{set.items.map((e, i) => renderSkillItem(e, i))}</div>
      </div>
    );
  };

  return (
    <div id={NavEnum.Skills} className={styles.wrapper} ref={ref}>
      <h2 className={styles.header}>Skills</h2>
      <div className={styles.skillSetList}>{skillSets.map((e, i) => renderSkillSet(e, i))}</div>
    </div>
  );
});

export default Skills;
