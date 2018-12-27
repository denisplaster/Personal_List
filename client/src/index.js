import React from "react";
import ReactDOM from "react-dom";
// import "./index.css";

function People() {
  const friends = [
    { name: "john", job: "developer", age: "23", company: "apple" },
    { name: "bob", job: "designer", age: "22", company: "facebook" },
    { name: "susy", job: "artist", age: "21", company: "twitter" }
  ];

  return (
    <section>
      <Person person={friends[0]}>
        <p>some info about me</p>
      </Person>
      <Person person={friends[1]} />
      <Person person={friends[2]} />
    </section>
  );
}

const Person = props => {
  const { name, job, age, company } = props.person;
  const { children } = props;

  return (
    <div>
      <h1>{name}</h1>
      {children}
      <p>{job}</p>
      <p>{age}</p>
      <p>{company}</p>
    </div>
  );
};

ReactDOM.render(<People />, document.getElementById("root"));
