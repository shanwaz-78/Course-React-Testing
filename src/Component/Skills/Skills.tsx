import React from "react";
import { SkillProps } from "../../Types/skills.types";

export const Skills = ({ skills }: SkillProps) => {
  return (
    <div>
      <ul>
        {skills?.map((skill, index) => {
          return <li key={index}>{skill}</li>;
        })}
      </ul>
    </div>
  );
};

