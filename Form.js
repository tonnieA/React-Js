import React, { useState,}from 'react'; 
import "./style.css";

const NewForm = () => {
    const [register,userName]= useState('');
    const submit = (e) => {
        e.preventDefault();
        console.log(register);
    
    }
    return ( 
        <div className= "Form">
            <h1>Form</h1>
        <form onSubmit ={submit}>
            <div className="data">
            <label htmlFor="username">Username:</label>
            <input type="text" placeholder="Username" name="username" id="username" value={register.username} 
            required onChange={e => userName ({...register, username: e.target.value})} />
            </div>
            <br/>
            <div className="data">
            <label htmlFor="email">Email:</label>
            <input type="email" placeholder=" Enter email" name="email" id="Enter " value={register.email} 
            required onChange={e => userName ({...register, email: e.target.value})} />
            </div>
            <br/>
            <div className="data">
            <label htmlFor="password">password:</label>
            <input type="password" placeholder=" Enter password" name="password" id="password" value={register.password} 
            required onChange={e => userName ({...register, password: e.target.value})} />
            </div>
            <br/>

            <input type="submit" value="Submit"/>
        </form>
        </div> 
    );
}
 
export default NewForm;