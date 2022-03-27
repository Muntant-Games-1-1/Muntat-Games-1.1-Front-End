import react from 'react'
import './LobbyDetail.css'

function LobbyDetail({}){
  return (
    <>
    <div className="main">
    <div className="gameName">  
      <h1>game name</h1>
    </div>
    <div>
      <h1>description</h1>
      <h1> Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod  tempor 
        incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim  veniam, quis nostrud
      </h1>
    </div>
    </div>
    <div>
      <h1>lobbyname</h1>
      <h1>lobbyy owner</h1>
      <h1>lobbyhead count</h1>
      <h1>remainf spot</h1>
    </div>
    <h1>non live message</h1>
    <form action="" method="POST" >
      <h1>.....</h1>
      <h1>Name</h1>
      <input type="text" />
      <button>send</button>
    </form>
    
    </>
  )
}

export default LobbyDetail