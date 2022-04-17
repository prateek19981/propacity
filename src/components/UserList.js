import UserCard from "./UserCard";
const UserList = ({ users }) => {
  {
    return users && users.length > 0 ? (
      users.map((user) => {
        return <UserCard user={user} key={user.id} />;
      })
    ) : (
      <h1>No user found</h1>
    );
  }
};

export default UserList;
