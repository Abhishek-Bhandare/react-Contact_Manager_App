import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';

const ContactList = ({contact, removeContact}) => {
  // console.log(contact)
  const contactList = contact.map((val) => {
    return(
      <div className='contacts'>
        <div style={{marginLeft:"5px"}}>{val.data.name}</div>
        <div className='email'>{val.data.email}</div>
        <span style={{marginLeft:"5px"}} onClick={()=>removeContact(val.id)}><DeleteIcon/></span>
      </div>
    )
  })
  return (
    <>    
      <div className='contact-header'>Contact List</div>
      <div>{contactList}</div>
    </>
  )
}

export default ContactList