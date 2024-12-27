import React from "react";
import { Skills } from "./Component/Skills/Skills.tsx";

const App = () => {
  return (
    <div>
      <Skills skills={["TypeScript", "Node", "React"]} />
    </div>
  );
};

export default App;
