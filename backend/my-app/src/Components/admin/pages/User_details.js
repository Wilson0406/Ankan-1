
import React,{useState, useEffect} from 'react'
import axios from 'axios'

function User_details() {
  const [user,setUser] = useState('');
  const User_details = () => {
    axios.get('/all_user').then((response) => {

      setUser(response.data)
    }).catch((e) => {

    })
  }
  useEffect(()=>{
    User_details();
  },[])
  return (
    <>
      
<table class="table">
  <thead class="thead-light">
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
     { 
            user?(<>
            {
              user.map((ele,index) => {
              return (
                <tr key={index}>
                <td>{index+1}</td>
                  <td>{ele.fname}</td>
                  <td>{ele.lname}</td>
                  <td>{ele.email}</td>
                </tr>
              )
            })
            }

            </>):(<> no user</>)


          } 
    
    
  </tbody>
</table>
      </>
  )
}

export default User_details