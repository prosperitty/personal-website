import Skill from './Skill';

function Skills(props) {
  return (
    <div className="pad-y" id="skills">
      <h1>skills</h1>
      <hr className="hr-white"></hr>
      <div className="skills-container">
        <div className="skills-card">
          <h3>Front end</h3>
          <Skill name="html" class="tech-icon" vector={props.htmlIcon} />
          <Skill name="css" class="tech-icon" vector={props.cssIcon} />
          <Skill
            name="javascript"
            class="tech-icon"
            vector={props.javascriptIcon}
          />
          <Skill
            name="bootstrap"
            class="tech-icon"
            vector={props.bootstrapIcon}
          />
          <Skill name="sass" class="tech-icon" vector={props.sassIcon} />
          <Skill name="react" class="tech-icon" vector={props.reactIcon} />
          <Skill name="next.js" class="tech-icon" vector={props.nextIcon} />
        </div>

        <div className="skills-card">
          <h3>back end</h3>
          <Skill name="node.js" class="tech-icon" vector={props.nodeIcon} />
          <Skill name="express" class="tech-icon" vector={props.expressIcon} />
          <Skill name="mongoDB" class="tech-icon" vector={props.mongoIcon} />
          <Skill name="pug" class="tech-icon" vector={props.pugIcon} />
          <Skill name="EJS" class="tech-icon" vector={props.ejsIcon} />
          <Skill name="jest" class="tech-icon" vector={props.jestIcon} />
        </div>

        <div className="skills-card">
          <h3>Other</h3>
          <Skill name="git" class="tech-icon" vector={props.gitIcon} />
          <Skill name="github" class="tech-icon" vector={props.githubIcon} />
          <Skill
            name="firebase"
            class="tech-icon"
            vector={props.firebaseIcon}
          />
          <Skill name="webpack" class="tech-icon" vector={props.webpackIcon} />
          <Skill name="REST API" class="tech-icon" vector={props.apiIcon} />
        </div>
      </div>
    </div>
  );
}

export default Skills;
