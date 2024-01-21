import React, { useState } from 'react'
import '../App.css'


const AddContact = ({addContact}) => {
  const [contactData, setContactData] = useState({name:"", email:""})

  function handleChange(e){
    setContactData({...contactData, [e.target.name]:e.target.value})
  }

  function handleAdd(e){
    if(contactData.name === '' || contactData.email === ''){
      alert("Please Fill all the Details...")
      return
    }
    else{
      addContact(contactData)
      setContactData({name:"", email:""})
    }
  }

  return (
    <div className='form-header'>
      <div className='add-contact'>Add Contacts</div>
      <form className='form'>
        <label>Name : </label>
        <input type='text' placeholder='Enter Name' name='name' value={contactData.name} onChange={handleChange}/><br/>
        <label>Email : </label>
        <input type='email' placeholder='Enter Email' name='email' value={contactData.email} onChange={handleChange}/>
      </form>
      <button className='btn' onClick={handleAdd}>Add Contact</button>
    </div>
  )
}

export default AddContact