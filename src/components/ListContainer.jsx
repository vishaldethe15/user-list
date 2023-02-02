import React from "react";
import ListItem from "./ListItem";

const ListContainer = ({ users, loading }) => {
  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <section className="items-container">
      {users.map((user) => {
        return <ListItem key={user.id} {...user} />;
      })}
    </section>
  );
};

export default ListContainer;
