import React, { useState, useEffect } from "react";
import { SkillProps } from "../../Types/skills.types";

export const Skills = ({ skills }: SkillProps) => {
  const [isLogin, seIsLogin] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      seIsLogin(true);
    }, 500);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div>
      <ul>
        {skills?.map((skill, index) => {
          return <li key={index}>{skill}</li>;
        })}
      </ul>

      {isLogin ? (
        <button>Start Learning</button>
      ) : (
        <div>
          <button onClick={() => seIsLogin(true)}>Login</button>
        </div>
      )}
    </div>
  );
};
