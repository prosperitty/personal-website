function Project({
  children,
  preview,
  alt,
  title,
  description,
  githubURL,
  demoURL,
}) {
  return (
    <div className='project'>
      <div className='project-preview-container'>
        <img src={preview} alt={alt} />
      </div>
      <div className='project-description-container'>
        <h3>{title}</h3>
        <div className='project-stack-container'>{children}</div>
        <p>{description}</p>
        <div className='button-container'>
          <form target='_blank' method='GET' action={githubURL}>
            <button className='jumbotron-button'>Github</button>
          </form>
          <form target='_blank' method='GET' action={demoURL}>
            <button className='jumbotron-button'>Live Demo</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Project;
