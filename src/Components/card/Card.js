import React from "react";
import faker from "faker";
import "../card/Card.css";
const Card = () => {
  return (
    <div className="center">
      <div className="card-container">
        <img
          className="profile-image"
          src={faker.image.people()}
          alt="fake-profile"
        />

        <h3>
          Name: {faker.name.firstName()} {faker.name.lastName()}
        </h3>
        <h3>Gender: {faker.name.gender()}</h3>
        <h3>Job title: {faker.name.jobTitle()}</h3>
        <h3>Phone number: {faker.phone.phoneNumber()}</h3>
        <h3>Account Name: {faker.finance.accountName()}</h3>
        <h3>
          Address: {faker.address.streetAddress()}, {faker.address.citySuffix()}
          , {faker.address.state()}
        </h3>
      </div>
    </div>
  );
};

export default Card;
