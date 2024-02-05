import React from "react";
import { InstrutorItem } from "./InstrutorItem";

export const CursoItem = ({
  id,
  title,
  image_125_H,
  image_240x135,
  image_480x270,
  is_paid,
  index,
  url,
  visible_instructors,

  //   count,
  //   setCounter,
}) => {
  const cursoUrl = `https://udemy.com/${url}`;
  //   setCounter((count) => count + 1);
  console.log(JSON.stringify(visible_instructors));
  return (
    <>
      <li>
        <a href={cursoUrl}>Link</a>
      </li>
      <li>{index}</li>
      <li>{id}</li>
      <li>{title}</li>
      <li>{is_paid ? "Pago" : "Gratuito"}</li>
      <li>
        <img src={image_240x135} className="card-img" alt="" />
      </li>
      <ul>
        {visible_instructors.map((instrutor) => (
          <InstrutorItem key={instrutor.id} {...instrutor} />
        ))}
      </ul>
      <hr />
    </>
  );
};
