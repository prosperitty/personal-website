import Skill from './Skill';

function Skills(props) {
  return (
    <div className='pad-y pad-x' id='skills'>
      <h1>skills</h1>
      <hr className='hr-section'></hr>
      <div className='skills-container'>
        <div className='skills-card'>
          <h3>Front end</h3>
          <Skill name='html' class='tech-icon' vector={props.htmlIcon} />
          <Skill name='css' class='tech-icon' vector={props.cssIcon} />
          <Skill
            name='javascript'
            class='tech-icon'
            vector={props.javascriptIcon}
          />
          <Skill
            name='bootstrap'
            class='tech-icon'
            vector={props.bootstrapIcon}
          />
          <Skill
            name='tailwindCSS'
            class='tech-icon'
            vector={props.tailwindIcon}
          />
          <Skill name='sass' class='tech-icon' vector={props.sassIcon} />
          <Skill name='react' class='tech-icon' vector={props.reactIcon} />
          <Skill name='nextjs' class='tech-icon' vector={props.nextIcon} />
        </div>

        <div className='skills-card'>
          <h3>back end</h3>
          <Skill name='node.js' class='tech-icon' vector={props.nodeIcon} />
          <Skill name='express' class='tech-icon' vector={props.expressIcon} />
          <Skill name='mongoDB' class='tech-icon' vector={props.mongoIcon} />
          <Skill
            name='PostgreSQL'
            class='tech-icon'
            vector={props.postgresIcon}
          />
          <Skill name='pug' class='tech-icon' vector={props.pugIcon} />
          <Skill name='EJS' class='tech-icon' vector={props.ejsIcon} />
          <Skill
            name='mongoose'
            class='tech-icon'
            vector={props.mongooseIcon}
          />
          <Skill name='prisma' class='tech-icon' vector={props.prismaIcon} />
        </div>

        <div className='skills-card'>
          <h3>Other</h3>
          <Skill name='git' class='tech-icon' vector={props.gitIcon} />
          <Skill name='github' class='tech-icon' vector={props.githubIcon} />
          <Skill
            name='firebase'
            class='tech-icon'
            vector={props.firebaseIcon}
          />
          <Skill name='webpack' class='tech-icon' vector={props.webpackIcon} />
          <Skill name='jest' class='tech-icon' vector={props.jestIcon} />
          <Skill name='REST API' class='tech-icon' vector={props.apiIcon} />
          <Skill
            name='typescipt'
            class='tech-icon'
            vector={props.typescriptIcon}
          />
        </div>
      </div>
    </div>
  );
}

export default Skills;
