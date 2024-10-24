import React from "react";
import avatar from "../../../assets/default-avatar.svg";
export function Person({ name, nickName = "none", images }) {
  //const img = images && images[0] && images[0].small && images[0].small.url;
  const img = images?.[0]?.small?.url || avatar;
  return (
    <div>
      <img src={img} alt={name} style={{ width: "50px" }} />
      <h4>{name}</h4>
      <h4>Nickname : {nickName}</h4>
    </div>
  );
}
