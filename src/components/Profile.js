import React from 'react'


const Profile = ({user}) => {

if(user === null) return
const {displayName, email} = user


    return (
    <div className='bg-slate-500 p-20'>

      <h1>{displayName}</h1>
      <h2>{email}</h2>
    </div>
  )
}

export default Profile