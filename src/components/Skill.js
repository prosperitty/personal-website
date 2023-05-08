function Skill(props) {
  return (
    <div className={props.class}>
      {props.vector}
      <span>{props.name}</span>
    </div>
  );
}

export default Skill;
