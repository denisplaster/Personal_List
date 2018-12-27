import React, { Component } from "react";
import "./App.css";

const App = () => <PersonList />;

const PersonList = () => {
  const people = [
    {
      img: 22,
      name: "jane",
      job: "developer"
    },
    {
      img: 34,
      name: "kristen",
      job: "designer"
    },
    {
      img: 25,
      name: "anne",
      job: "artist"
    }
  ];

  return (
    <section>
      <Person person={people[0]} />
      <Person person={people[1]}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos
        error minus magnam molestiae animi qui?
      </Person>
      ;
      <Person person={people[2]} />;
    </section>
  );
};

const Person = props => {
  const { img, name, job } = props.person;
  const { children } = props;
  const url = `https://randomuser.me/api/portraits/thumb/women/${img}.jpg`;

  return (
    <div className="person">
      <img src={url} alt="" />
      <div />
      <h4>{name}</h4>
      <h4>{job}</h4>
      {children}
    </div>
  );
};

export default App;
