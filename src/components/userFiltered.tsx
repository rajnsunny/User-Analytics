import React, { useState } from "react";


interface User {
  name: string;
  age: number;
}

interface Props {
  users: User[];
  age: number;
}

const UserList: React.FC<Props> = ({ users , age }) => {

    let [user,setUser] = useState<User[]>([]);
   
    
    
   

    users.forEach(u => {
        
        if(u.age == age){
            user.push(u);
            
        }
    });
    

  return (
    <div>
     
      <h2>User List  <b>Age: {age}</b> </h2>
      <ul>
        {(user as User[]).map((us, index) => (
           
                <div>
                <li key={index}>
                {us.name}
                </li>
                </div>
            
        
          
        ))}
      </ul>
    </div>
  );
};

export default UserList;
