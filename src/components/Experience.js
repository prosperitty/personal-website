import Project from './Project';
import roadmapPreview from '../images/developer-roadmap.webp';
import Skill from './Skill';

function Experience() {
  return (
    <div className='pad-y' id='experience'>
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
    </div>
  );
}

export default Experience;
