import React, { useState } from "react";

const ListItem = ({
  name,
  username,
  email,
  phone,
  address,
  website,
  company,
}) => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="item">
      <div className="wrapper">
        <section className="elements info">
          <h3>Username</h3>
          <p>{username}</p>
        </section>
        <section className="elements info">
          <h3>Email</h3>
          <p>{email}</p>
        </section>
        <section className="elements info">
          <h3>City</h3>
          <p>{address.city}</p>
        </section>
        <section className="elements">
          <button className="btn" onClick={() => setToggle(!toggle)}>
            {toggle ? "Hide Details" : " View Details"}
          </button>
        </section>
      </div>

      {!toggle ? null : (
        <div className="details">
          <section className="elements info">
            <h3>Name</h3>
            <p>{name}</p>
          </section>
          <section className="elements info">
            <h3>Phone</h3>
            <p>{phone}</p>
          </section>
          <section className="elements info">
            <h3>Address</h3>
            <p>{`${address.suite}, ${address.street}, ${address.city}, ${address.zipcode}`}</p>
          </section>
          <section className="elements info">
            <h3>Website</h3>
            <p>{website}</p>
          </section>
          <section className="elements info">
            <h3>Company Name</h3>
            <p>{company.name}</p>
          </section>
          <section className="elements info">
            <h3>Company Detail</h3>
            <p>{company.bs}</p>
          </section>
        </div>
      )}
    </div>
  );
};

export default ListItem;
