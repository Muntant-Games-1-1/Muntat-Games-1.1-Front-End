import react from 'react'
import './LobbyDetail.css'
import {useLocation} from 'react-router-dom'
function LobbyDetail({}){
  let location = useLocation()

  let detail = location.state
  return (
    <>
      <div className="lobby-detail">
        <div className="main">
            <div className="leftSide"> 
            <div className="leftSide-items"> 
              <div className="gameName">  
                <h1>{detail.game.name}</h1>
              </div>
              <div>
                <h1>description</h1>
                <p> Lorem ipsum dolor sit amet,</p>
              </div>
              </div>
            </div>
            <div className="rightside"> 
              <div className="rightside-item">
                <div className="lobbyname"> 
                  <h1>lobbyname</h1>
                </div>
                <h2>{detail.owner.name}</h2>
                <h2>lobbyhead count:XXX</h2>
                <h2>remainf spot XXX</h2>
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
      </div>
    </>
  )
}

export default LobbyDetail