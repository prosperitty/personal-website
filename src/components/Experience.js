import Project from './Project';
import roadmapPreview from '../images/developer-roadmap.webp';
import codedexProject from '../images/codedex-summer-hackathon.webp';
import Skill from './Skill';

function Experience(props) {
  return (
    <div className='pad-y pad-x' id='experience'>
      <h1>Experience</h1>
      <hr className='hr-section'></hr>
      <Project
        preview={roadmapPreview}
        title='Developer Roadmap'
        alt='Devleoper Roadmap preview'
        description='Contributed a few to the Developer Roadmap project.'
        githubURL='https://github.com/kamranahmedse/developer-roadmap/pull/5286'
        demoURL='https://roadmap.sh/'
      >
        <Skill name='open-source' class='project-stack-icon' />
      </Project>
      <Project
        preview={codedexProject}
        title='Codédex 2024 Summer Hackathon'
        alt='Codédex 2024 Summer Hackathon'
        description='Created an interactive invitation to a Brooklyn Stoop Sale using HTML/CSS/JavaScript with a team of hackothoners.'
        githubURL='https://github.com/yusras99/Brooky-Stoop'
        demoURL='https://brooky-stoop.vercel.app/'
      >
        <Skill name='HTML' class='project-stack-icon' vector={props.htmlIcon} />
        <Skill name='CSS' class='project-stack-icon' vector={props.htmlIcon} />
        <Skill
          name='Javascript'
          class='project-stack-icon'
          vector={props.javascriptIcon}
        />
      </Project>
    </div>
  );
}

export default Experience;
