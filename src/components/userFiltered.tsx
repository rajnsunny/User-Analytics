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

    const [user,setUser] = useState<User[]>([]);
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
      setModal(!modal);
    };
  
    if(modal) {
      document.body.classList.add('active-modal')
    } else {
      document.body.classList.remove('active-modal')
    }

    users.forEach(u => {
        
        if(u.age == age){
            user.push(u);
            
        }
    })

  return (
    <div>
      <div className="modal-wrapper"></div>
      <div className="modal-container"></div>
      <h2>User List</h2>
      <ul>
        {user.map((us, index) => (
           
                <div>
                <li key={index}>
                {us.name},{us.age}
                </li>
                </div>
            
        
          
        ))}
      </ul>
    </div>
  );
};

export default UserList;
