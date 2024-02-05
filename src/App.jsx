import React, { useState } from "react";
import { useFetch } from "./useFetch";
import cursos01 from "./assets/subscribed-courses_01.json";
import cursos02 from "./assets/subscribed-courses_02.json";
import cursos03 from "./assets/subscribed-courses_03.json";
import cursos04 from "./assets/subscribed-courses_04.json";
import cursos05 from "./assets/subscribed-courses_05.json";
import cursos06 from "./assets/subscribed-courses_06.json";
import { CursoItem } from "./CursoItem";

const App = () => {
  // const { data, isLoading, hasError } = useFetch(
  //   `https://www.udemy.com/api-2.0/users/me/subscribed-courses?page_size=300&page=1`
  // );
  console.log(cursos01);

  return (
    <div>
      {cursos01.results.map((curso, index) => (
        <CursoItem key={curso.id} {...curso} index={"01_" + index} />
      ))}

      {cursos02.results.map((curso, index) => (
        <CursoItem key={curso.id} {...curso} index={"02_" + index} />
      ))}

      {cursos03.results.map((curso, index) => (
        <CursoItem key={curso.id} {...curso} index={"03_" + index} />
      ))}

      {cursos04.results.map((curso, index) => (
        <CursoItem key={curso.id} {...curso} index={"04_" + index} />
      ))}

      {cursos05.results.map((curso, index) => (
        <CursoItem key={curso.id} {...curso} index={"05_" + index} />
      ))}

      {cursos06.results.map((curso, index) => (
        <CursoItem key={curso.id} {...curso} index={"06_" + index} />
      ))}
    </div>
  );
};

export default App;
