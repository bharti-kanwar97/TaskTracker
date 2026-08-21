import React from 'react'
import useLoginUser from "../hooks/useLoginUser"
function UserProfile() {
      const {formData} = useLoginUser();
  return (
    <div>
      <h1>{formData?.name}</h1>
  <h1>{formData?.email}</h1>
    </div>
  )
}

export default UserProfile
