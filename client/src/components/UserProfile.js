import React, { useState, useEffect } from "react"
import EventTile from "./EventTile.js"

const UserProfile =  ({ user }) => {
  const [userPhoto, setUserPhoto] = useState(
    "https://www.digitary.net/wp-content/uploads/2021/07/Generic-Profile-Image.png"
    )
  const [followedEvents, setFollowedEvents] = useState([])

  let profilePic = <span className="no-profile-photo">No profile picture uploaded yet...</span>
  if (userPhoto != "") {
    profilePic = <img src={userPhoto} className="profile-photo" />
  }

  const getFollowedEvents = async () => {
    try {
      const response = await fetch('/api/v1/events/followed')
      const responseBody = await response.json()
      setFollowedEvents(responseBody.events)
    } catch (error) {
      console.error(`Error in fetch: ${error.message}`)
    }
  }

  const followedEventsTiles = followedEvents.map(event => {
    return <EventTile key={event.id} event={event}/>
  })

  useEffect(() => {
    getFollowedEvents()
  }, [])

  return (
    <div>
      {user ? 
      <div className="grid-x grid-padding-x profile-page">
        <div className="cell small-3 align-center">
          {profilePic}
        </div>
        <div className="cell small-9">
          <h1>{user.username}'s Homepage</h1>
          <h4>Username:</h4>
          <p>{user.username}</p>
          <h4>Email:</h4>
          <p>{user.email}</p>
        </div>
      </div> : <h1>You need to be logged in to see this page.</h1>}
      <h3 className="center">Events you are following:</h3>
      <div className="grid-container">
        <div className="grid-x">
          {followedEventsTiles}
        </div>
      </div>
    </div>
  )
}

export default UserProfile