import React from "react";

function NameList() {
  const persons = [
    {
      id: 1,
      name: "naveen",
      age: 24,
      skill: "java",
    },
    {
      id: 2,
      name: "mahesh",
      age: 24,
      skill: "java",
    },
    {
      id: 3,
      name: "venky",
      age: 24,
      skill: "java",
    },
  ];
  const personList = persons.map((person) => (
    <div>
      <h2>
        {" "}
        i am {person.name} . i am {person.age} years old. i know {person.skill}
      </h2>
    </div>
  ));
  //   const names = ["naveen", "mahesh", "venky"];
  //   const namelist = names.map((name) => <h2>{name}</h2>);
  return (
    // <div>
    //   {names.map((name1) => (
    //     <h2>{name1}</h2>
    //   ))}
    // </div>
    <div>{personList}</div>
  );
}

export default NameList;
