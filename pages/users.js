import React from "react";
import User from "../components/User";

const Users = ({ response }) => {
  return (
    <div>
      <h1>List of Users</h1>
      {response.map((user) => {
        return (
          <ul key={user.id}>
            <User user={user} />
          </ul>
        );
      })}
    </div>
  );
};

export default Users;

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");

  return {
    props: {
      response: await response.json(),
    },
  };
}
