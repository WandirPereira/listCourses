import React from "react";

export const InstrutorItem = ({ id, title, image_100x100, display_name }) => {
  //   console.log(JSON.stringify(visible_instructors));
  return (
    <>
      <li>{id}</li>
      <li>{display_name}</li>
      {/* <li>{title}</li> */}
      <li>
        <img src={image_100x100} className="card-img" alt="" />
      </li>
    </>
  );
};
