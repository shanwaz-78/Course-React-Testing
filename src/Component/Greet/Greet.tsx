import React from "react";

type GreetProp = {
  name?: string;
};

const Greet = ({ name }: GreetProp) => {
  console.log(name)
  return <div>{name ? `Hello ${name}` : `Hello guest`}</div>;
};

export default Greet;
