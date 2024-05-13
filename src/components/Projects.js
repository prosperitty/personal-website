import blogPreview from '../images/blog-app-preview.png'
import todolistPreview from '../images/todo-list-preview.png'
import princessPreview from '../images/wheres-the-princess-preview.png'
import weatherApp from '../images/weather-app-preview.png'
import computerWorldPreview from '../images/computer-world-preview.png'
import battleshipPreview from '../images/battleship-preview.png'
import newsweekPreview from '../images/newsweek-clone-preview.png'
import restaurantPreview from '../images/restaurant-preview.png'
import tictactoePreview from '../images/tic-tac-toe-preview.png'
import youtubePreview from '../images/youtube-clone-preview.png'
import calculatorPreview from '../images/calculator-preview.png'
import membersPreview from '../images/members-preview.png'
import rentagamePreview from '../images/rent-a-game-preview.png'
import nextPreview from '../images/nextjs-blog-preview.png'
import wreathePreview from '../images/wreathe-preview.png'
import Skill from './Skill'
import Project from './Project'

function Projects(props) {
  return (
    <div className='pad-y' id='projects'>
      <h1>projects</h1>
      <hr className='hr-section'></hr>

      <Project
        preview={wreathePreview}
        title='Wreathe'
        alt='wreathe app preview'
        description='A social media app for investors. Built with full-stack modern technologies. Functionality is similar to twitter. Includes search, messaging, profile creation, and more. (This app is still in progress)'
        githubURL='https://github.com/alex-lvl/wreathe'
        demoURL='#'
      >
        <Skill
          name='typescript'
          class='project-stack-icon'
          vector={props.typescriptIcon}
        />
        <Skill
          name='next.js'
          class='project-stack-icon'
          vector={props.nextIcon}
        />
        <Skill
          name='tailwindCSS'
          class='project-stack-icon'
          vector={props.tailwindIcon}
        />
        <Skill
          name='express'
          class='project-stack-icon'
          vector={props.expressIcon}
        />
        <Skill
          name='node.js'
          class='project-stack-icon'
          vector={props.nodeIcon}
        />
        <Skill
          name='PostgreSQL'
          class='project-stack-icon'
          vector={props.postgresIcon}
        />
        <Skill
          name='Prisma'
          class='project-stack-icon'
          vector={props.prismaIcon}
        />
        <Skill
          name='REST API'
          class='project-stack-icon'
          vector={props.apiIcon}
        />
      </Project>

      <Project
        preview={nextPreview}
        title='Personal Blog'
        alt='next.js personal blog preview'
        description='This project was built with the next.js tutorial guide which also utilizes the external api endpoint from my blog api project to retrieve blog posts authored by me'
        githubURL='https://github.com/alex-lvl/nextjs-blog'
        demoURL='https://nextjs-blog-git-main-alex-lvl.vercel.app/'
      >
        <Skill
          name='next.js'
          class='project-stack-icon'
          vector={props.nextIcon}
        />
        <Skill
          name='react'
          class='project-stack-icon'
          vector={props.reactIcon}
        />
        <Skill
          name='REST API'
          class='project-stack-icon'
          vector={props.apiIcon}
        />
      </Project>

      <Project
        preview={blogPreview}
        title='Event Horizon'
        alt='blog app preview'
        description="This is a full-stack app utilizing a back-end API and front-end
        client developed with MERN technology. Write, edit, or delete
        articles, and leave comments under a user's post in this blog app. I
        write about market conditions in the business category. Check it
        out!"
        githubURL='https://github.com/alex-lvl/blog-api'
        demoURL='https://alex-lvl.github.io/blog-react/'
      >
        <Skill
          name='react'
          class='project-stack-icon'
          vector={props.reactIcon}
        />
        <Skill
          name='express'
          class='project-stack-icon'
          vector={props.expressIcon}
        />
        <Skill
          name='node.js'
          class='project-stack-icon'
          vector={props.nodeIcon}
        />
        <Skill
          name='REST API'
          class='project-stack-icon'
          vector={props.apiIcon}
        />
        <Skill
          name='mongoDB'
          class='project-stack-icon'
          vector={props.mongoIcon}
        />
      </Project>

      <Project
        preview={todolistPreview}
        title='Todo List'
        alt='todo list app preview'
        description='A todo list app created with Javascript and integrated with Firebase
        as a back-end. Users may create todos and view all of them in their
        inbox or sorted by week, present, or project. Todos are saved with a
        Google account or on the local machine.'
        githubURL='https://github.com/alex-lvl/todo-list'
        demoURL='https://todo-list-c28c1.web.app/'
      >
        <Skill
          name='javascript'
          class='project-stack-icon'
          vector={props.javascriptIcon}
        />
        <Skill name='Sass' class='project-stack-icon' vector={props.sassIcon} />
        <Skill
          name='bootstrap'
          class='project-stack-icon'
          vector={props.bootstrapIcon}
        />
        <Skill
          name='webpack'
          class='project-stack-icon'
          vector={props.webpackIcon}
        />
        <Skill
          name='firebase'
          class='project-stack-icon'
          vector={props.firebaseIcon}
        />
      </Project>

      <Project
        preview={weatherApp}
        title='Weather App'
        alt='weather app preview'
        description='View the weather forecast for a city in this weather application
        created with the Open Weather API and Javascript. Try searching for
        your city to fetch weather forecast details!'
        githubURL='https://github.com/alex-lvl/weather-app'
        demoURL='https://alex-lvl.github.io/weather-app/'
      >
        <Skill
          name='javascript'
          class='project-stack-icon'
          vector={props.javascriptIcon}
        />
        <Skill name='Sass' class='project-stack-icon' vector={props.sassIcon} />
        <Skill
          name='webpack'
          class='project-stack-icon'
          vector={props.webpackIcon}
        />
      </Project>

      <Project
        preview={computerWorldPreview}
        title='Computer World'
        alt='computer world app preview'
        description='A simple, visually appealing front-end focused project created with
        react. Developed as an e-commerce styled website.'
        githubURL='https://github.com/alex-lvl/shopping-cart'
        demoURL='https://alex-lvl.github.io/shopping-cart/'
      >
        <Skill
          name='react'
          class='project-stack-icon'
          vector={props.reactIcon}
        />
      </Project>

      <Project
        preview={tictactoePreview}
        title='Tic Tac Toe'
        alt='tic tac toe app preview'
        description='Try defeating the unbeatable AI in this Tic-Tac-Toe game. Developed
        with Javascript and minmax algorithm.'
        githubURL='https://github.com/alex-lvl/Tic-Tac-Toe'
        demoURL='https://alex-lvl.github.io/Tic-Tac-Toe/'
      >
        <Skill
          name='javascript'
          class='project-stack-icon'
          vector={props.javascriptIcon}
        />
        <Skill name='Sass' class='project-stack-icon' vector={props.sassIcon} />
      </Project>

      <Project
        preview={princessPreview}
        title="Where's the princess"
        alt='wheres the princess app preview'
        description="Find all the listed characters in this where's waldo styled game!
        Post timed results to the leaderboard and compare your results to
        other players on the leaderboard page."
        githubURL='https://github.com/alex-lvl/photo-tagging-app'
        demoURL='https://photo-tagging-3a70f.web.app/'
      >
        <Skill
          name='react'
          class='project-stack-icon'
          vector={props.reactIcon}
        />
        <Skill
          name='firebase'
          class='project-stack-icon'
          vector={props.firebaseIcon}
        />
        <Skill
          name='javascript'
          class='project-stack-icon'
          vector={props.javascriptIcon}
        />
      </Project>

      <Project
        preview={battleshipPreview}
        title='Battleship'
        alt='battleship app preview'
        description='Play a classic game of battleship against an AI.'
        githubURL='https://github.com/alex-lvl/Battleship'
        demoURL='https://alex-lvl.github.io/Battleship/'
      >
        <Skill
          name='javascript'
          class='project-stack-icon'
          vector={props.javascriptIcon}
        />
        <Skill
          name='webpack'
          class='project-stack-icon'
          vector={props.webpackIcon}
        />
        <Skill name='jest' class='project-stack-icon' vector={props.jestIcon} />
      </Project>

      <Project
        preview={youtubePreview}
        title='Youtube Clone'
        alt='youtube clone project preview preview'
        description='A responsive design focused youtube clone project.'
        githubURL='https://github.com/alex-lvl/youtube-page-clone'
        demoURL='https://alex-lvl.github.io/youtube-page-clone/'
      >
        <Skill name='HTML' class='project-stack-icon' vector={props.htmlIcon} />
        <Skill name='CSS' class='project-stack-icon' vector={props.cssIcon} />
      </Project>

      <Project
        preview={rentagamePreview}
        title='Rent-A-Game'
        alt='rent a game app preview'
        description='An inventory management app for an imaginary store. Users can view
        available games in the store and how many copies are available for
        rent. Users may also view available games by category and see a list
        of games in the category.'
        githubURL='https://github.com/alex-lvl/inventory-application'
        demoURL='https://inventory-application-6lsp.onrender.com/'
      >
        <Skill
          name='bootstrap'
          class='project-stack-icon'
          vector={props.javascriptIcon}
        />
        <Skill
          name='express'
          class='project-stack-icon'
          vector={props.expressIcon}
        />
        <Skill name='EJS' class='project-stack-icon' vector={props.ejsIcon} />
        <Skill
          name='node.js'
          class='project-stack-icon'
          vector={props.nodeIcon}
        />
        <Skill
          name='mongoDB'
          class='project-stack-icon'
          vector={props.mongoIcon}
        />
      </Project>

      <Project
        preview={restaurantPreview}
        title='Restaurant'
        alt='restaurant page project preview'
        description='A responsive design focused app. Developed with DOM manipulation.
        View the home page, menu, or contact details.'
        githubURL='https://github.com/alex-lvl/restaurant-page'
        demoURL='https://alex-lvl.github.io/restaurant-page/'
      >
        <Skill
          name='javascript'
          class='project-stack-icon'
          vector={props.javascriptIcon}
        />
        <Skill
          name='bootstrap'
          class='project-stack-icon'
          vector={props.bootstrapIcon}
        />
        <Skill
          name='webpack'
          class='project-stack-icon'
          vector={props.webpackIcon}
        />
      </Project>

      <Project
        preview={membersPreview}
        title='Members Only'
        alt='members only app preview'
        description="An authentication focused app where users may post a message to the
        message board only if they're signed in."
        githubURL='https://github.com/alex-lvl/members-only'
        demoURL='https://members-only-u9je.onrender.com/'
      >
        <Skill
          name='express'
          class='project-stack-icon'
          vector={props.expressIcon}
        />
        <Skill name='EJS' class='project-stack-icon' vector={props.ejsIcon} />
        <Skill
          name='node.js'
          class='project-stack-icon'
          vector={props.nodeIcon}
        />
        <Skill
          name='mongoDB'
          class='project-stack-icon'
          vector={props.mongoIcon}
        />
      </Project>

      <Project
        preview={calculatorPreview}
        title='Calculator'
        alt='calculator app preview'
        description='A calculator app that does basic math.'
        githubURL='https://github.com/alex-lvl/simple-calculator'
        demoURL='https://alex-lvl.github.io/simple-calculator/'
      >
        <Skill
          name='javascript'
          class='project-stack-icon'
          vector={props.javascriptIcon}
        />
      </Project>

      <Project
        preview={newsweekPreview}
        title='Newsweek Clone'
        alt='newsweek clone project preview'
        description='A cloned version of the newsweek homepage using the Bootstrap
        library.'
        githubURL='https://github.com/alex-lvl/newsweek-homepage'
        demoURL='https://alex-lvl.github.io/newsweek-homepage/'
      >
        <Skill
          name='bootstrap'
          class='project-stack-icon'
          vector={props.bootstrapIcon}
        />
      </Project>
    </div>
  )
}

export default Projects
