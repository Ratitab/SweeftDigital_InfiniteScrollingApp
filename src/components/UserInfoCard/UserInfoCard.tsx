import React from "react";
import { User } from "../../services/types";
import "./styles.css";

const UserInfoCard = ({
  id,
  imageUrl,
  name,
  lastName,
  prefix,
  title,
  email,
  ipAddress,
  jobArea,
  jobType,
  address,
  company,
}: User) => {
  return (
    <section className="user-details-card">
      <img
        src={`${imageUrl}?v=${id}`}
        alt={`${name} ${lastName}`}
        className="user-details-card-img"
      />
      <fieldset className="info-section">
        <legend className="details-legend">Info</legend>
        <strong>
          {prefix} {name} {lastName}
        </strong>
        <div>{title}</div>
        <div>
          <span className="info-detail">Email:</span> {email}
        </div>
        <div>
          <span className="info-detail">ip Address:</span> {ipAddress}
        </div>
        <div>
          <span className="info-detail">job Area:</span> {jobArea}
        </div>
        <div>
          <span className="info-detail">job Type:</span> {jobType}
        </div>
      </fieldset>
      <fieldset className="address-details">
        <legend className="details-legend">Address</legend>
        <div>
          <strong>
            {company.name} {company.suffix}
          </strong>
        </div>
        <div>
          <span className="info-detail">city:</span> {address.city}
        </div>
        <div>
          <span className="info-detail">counrty:</span> {address.country}
        </div>
        <div>
          <span className="info-detail">state:</span> {address.state}
        </div>
        <div>
          <span className="info-detail">street Address:</span>{" "}
          {address.streetAddress}
        </div>
        <div>
          <span className="info-detail">ZIP</span> {address.zipCode}
        </div>
      </fieldset>
    </section>
  );
};

export default UserInfoCard;
