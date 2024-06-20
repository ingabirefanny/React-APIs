
// import {useGetUsers} from "./hooks/useGetUsers";
// import UserCard from "../Atoms/UserCard";

// const Users = () =>{

//     const {users,loading,error} = useGetUsers();
//     console.log('users...', users);
//    return(
//         <div>
//         {loading && <h2>Loading Users...</h2>}

//         {users.length > 0 && !loading
//         ? users.map((user)=>(
//             <UserCard
//              image={user.image}
//              fullName= {`${user.firstName} ${user.lastName}`}
//              key ={user.id}
//              />
//         ))
//         : !loading &&  <h2>No users found</h2>}
//         {error.length > 0 && <h2>Error: {error}</h2>}
//         <div/>
//    );

//    };
// export default Users;


import { useGetUsers } from "./hooks/useGetUsers";
import UserCard from "../Atoms/UserCard";

const Users = () => {
  const { users, loading, error } = useGetUsers();
  console.log('users...', users);

  return (
    <div>
      {loading && <h2>Loading Users...</h2>}
      {!loading && error && <h2>Error: {error}</h2>}
      {!loading && !error && users.length === 0 && <h2>No users found</h2>}
      {!loading && !error && users.length > 0 && (
        users.map((user) => (
          <UserCard
            image={user.image}
            fullName={`${user.firstName} ${user.lastName}`}
            key={user.id}
          />
        ))
      )}
    </div>
  );
};

export default Users;