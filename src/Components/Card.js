import React from "react";
import faker from "faker";

const Card = () => {
  return (
    <div className="card-container">
      <img
        className="profile-image"
        src={faker.image.image}
        alt="fake-profile"
      />
    </div>
  );
};

export default Card;
