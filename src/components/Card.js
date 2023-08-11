import React from "react";
import "tachyons";

const Card = ({ name, email, id }) => {
  return (
    <div className="tc bg-light-green dib br3 pa10 ma2 grow shadow-5">
      <img
        alt="robots"
        src={`https://robohash.org/${id}/bgset_bg2?size=260x270`}
      />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
