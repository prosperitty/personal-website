import './App.css';
import Nav from './components/Nav';
import Jumbotron from './components/Jumbotron';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import htmlVector from './images/vectors/html-vector.svg';
import cssVector from './images/vectors/css-vector.svg';
import javascriptVector from './images/vectors/javascript-vector.svg';
import bootstrapVector from './images/vectors/bootstrap-vector.svg';
import sassVector from './images/vectors/sass-vector.svg';
import reactVector from './images/vectors/react-vector.svg';
import nextVector from './images/vectors/nextjs-vector.svg';
import nodeVector from './images/vectors/node-vector.svg';
import expressVector from './images/vectors/express-vector.svg';
import mongoVector from './images/vectors/mongo-vector.svg';
import pugVector from './images/vectors/pug-vector.svg';
import ejsVector from './images/vectors/ejs-vector.svg';
import jestVector from './images/vectors/jest-vector.svg';
import gitVector from './images/vectors/git-vector.svg';
import githubVector from './images/vectors/github-vector.svg';
import firebaseVector from './images/vectors/firebase-vector.svg';
import webpackVector from './images/vectors/webpack-vector.svg';
import apiVector from './images/vectors/api-vector.svg';
import tailwindVector from './images/vectors/tailwind-vector.svg';
import postgresVector from './images/vectors/postgresql-vector.svg';
import typesciptVector from './images/vectors/typescript-vector.svg';
import mongooseVector from './images/vectors/mongoose-vector.svg';
import prismaVector from './images/vectors/prisma-vector.svg';
import { ReactSVG } from 'react-svg';
import Experience from './components/Experience';

function App() {
  return (
    <div className='App'>
      <div className='nav-container'>
        <Nav />
      </div>
      <div className='app-header'>
        <Jumbotron />
      </div>
      <div className='max-w'>
        <About />
        <Skills
          htmlIcon={<ReactSVG src={htmlVector} />}
          cssIcon={<ReactSVG src={cssVector} />}
          javascriptIcon={<ReactSVG src={javascriptVector} />}
          bootstrapIcon={<ReactSVG src={bootstrapVector} />}
          sassIcon={<ReactSVG src={sassVector} />}
          tailwindIcon={<ReactSVG src={tailwindVector} />}
          reactIcon={<ReactSVG src={reactVector} />}
          nextIcon={<ReactSVG src={nextVector} />}
          nodeIcon={<ReactSVG src={nodeVector} />}
          expressIcon={<ReactSVG src={expressVector} />}
          mongoIcon={<ReactSVG src={mongoVector} />}
          postgresIcon={<ReactSVG src={postgresVector} />}
          pugIcon={<ReactSVG src={pugVector} />}
          ejsIcon={<ReactSVG src={ejsVector} />}
          jestIcon={<ReactSVG src={jestVector} />}
          gitIcon={<ReactSVG src={gitVector} />}
          githubIcon={<ReactSVG src={githubVector} />}
          firebaseIcon={<ReactSVG src={firebaseVector} />}
          webpackIcon={<ReactSVG src={webpackVector} />}
          apiIcon={<ReactSVG src={apiVector} />}
          typescriptIcon={<ReactSVG src={typesciptVector} />}
          mongooseIcon={<ReactSVG src={mongooseVector} />}
          prismaIcon={<ReactSVG src={prismaVector} />}
        />
        <Experience />
        <Projects
          htmlIcon={<ReactSVG src={htmlVector} />}
          cssIcon={<ReactSVG src={cssVector} />}
          javascriptIcon={<ReactSVG src={javascriptVector} />}
          bootstrapIcon={<ReactSVG src={bootstrapVector} />}
          sassIcon={<ReactSVG src={sassVector} />}
          reactIcon={<ReactSVG src={reactVector} />}
          nextIcon={<ReactSVG src={nextVector} />}
          nodeIcon={<ReactSVG src={nodeVector} />}
          expressIcon={<ReactSVG src={expressVector} />}
          mongoIcon={<ReactSVG src={mongoVector} />}
          pugIcon={<ReactSVG src={pugVector} />}
          ejsIcon={<ReactSVG src={ejsVector} />}
          jestIcon={<ReactSVG src={jestVector} />}
          gitIcon={<ReactSVG src={gitVector} />}
          githubIcon={<ReactSVG src={githubVector} />}
          firebaseIcon={<ReactSVG src={firebaseVector} />}
          webpackIcon={<ReactSVG src={webpackVector} />}
          apiIcon={<ReactSVG src={apiVector} />}
          mongooseIcon={<ReactSVG src={mongooseVector} />}
          prismaIcon={<ReactSVG src={prismaVector} />}
          postgresIcon={<ReactSVG src={postgresVector} />}
          tailwindIcon={<ReactSVG src={tailwindVector} />}
          typescriptIcon={<ReactSVG src={typesciptVector} />}
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
