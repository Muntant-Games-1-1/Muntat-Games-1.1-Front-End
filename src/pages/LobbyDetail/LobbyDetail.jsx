import react from 'react'
import './LobbyDetail.css'

function LobbyDetail({}){
  return (
    <>
    <div className="main">
      <div className="leftSide"> 
    <div className="gameName">  
      <h1>game name</h1>
    </div>
    <div>
      <h1>description</h1>
      <p> Lorem ipsum dolor sit amet, consectetur
      </p>
    </div>
    </div>
    <div className="rightside"> 
    <div>
      <h1>lobbyname</h1>
      <h1>lobbyy owner</h1>
      <h1>lobbyhead count</h1>
      <h1>remainf spot</h1>
    </div>
    </div>
    </div>
    <h1>non live message</h1>
    <form action="" method="POST" >
      <h1>.....</h1>
      <h1>Name</h1>
      <input type="text" />
      <button type="button" className="btn btn-outline-success">Success</button>
    </form>
    
    </>
  )
}

export default LobbyDetail