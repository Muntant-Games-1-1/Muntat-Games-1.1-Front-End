import { useState, useEffect } from 'react'
import * as profileService from '../../services/profileService'

const Profiles = ({ user,lobby}) => {
  console.log('user',user);
  console.log('wow', lobby.name);
  const [profiles, setProfiles] = useState([])
  console.log(profiles);
  useEffect(()=> {
    profileService.getAllProfiles()
    .then(profiles => setProfiles(profiles))
  }, [])

  return (
    <>
    <h1>{user?.name}</h1>
    <h1>{user?.email}</h1>

      <h1>Hello. This is a list of all the profiles.</h1>
      
        <>
          {profiles.map(profile=>
            <p key={profile._id}>{profile.name}</p>
          )}
        </>
    </>
  )
}

export default Profiles