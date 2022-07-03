import { useState } from "react";


  

export default function HandleLogin(email,pass)
{
    const database = [
        {
          username: "user1",
          password: "pass1"
        },
        {
          username: "user2",
          password: "pass2"
        }
      ];
    
     const [message, setMessage] = useState('');

    function Handle() {
       
        const userData = database.find((user) => user.username === email);

        if (userData) {

          if (userData.password===pass) 

            // console.log('true');
            setMessage('successful')
        } 

        else {
            // console.log('false');
            setMessage('fail')


        }
      
    }
  
    return {
        Handle,message
       }
}
