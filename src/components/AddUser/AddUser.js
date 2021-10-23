import React ,{useRef} from 'react';

const AddUser = () => {
    const nameRef=useRef()
    const emailRef=useRef()
    const handleAddUser=e=>{
        const name=nameRef.current.value
        const email=emailRef.current.value
        const newUser={name,email}
        fetch('http://localhost:5000/users',{
            method:'post',
            headers:{
                'content-type':'application/json'

            },
            body:JSON.stringify(newUser)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.insertedId){
                alert('User added succesfully')
                e.target.reset()
            }
        })
        e.preventDefault()
    }
    return (
        <div>
            <h2>Please  Add  an User</h2>
            <form action="" onSubmit={handleAddUser}>
                <input type="text" ref={nameRef} placeholder="Enter a name" /> 
                <input type="email" ref={emailRef}placeholder="Enter a email" />  
              
                <input type="submit" value="Add User" />
                
            </form>
        </div>
    );
};

export default AddUser;