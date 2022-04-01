import { useState } from 'react'
import {Link} from 'react-router-dom'
import LoginForm from '../../components/LoginForm/LoginForm'
import styles from './Login.module.css'

const LoginPage = props => {
  const [message, setMessage] = useState([''])

  const updateMessage = msg => {
    setMessage(msg)
  }

  return (
    <main className={styles.container}>
      <div className={styles.formBox}>
        <h1>Log In to Your Account</h1>
        <p>{message}</p>
        <LoginForm
          handleSignupOrLogin={props.handleSignupOrLogin}
          updateMessage={updateMessage}
        />
        <p>Need an account? < Link to='/signup'>Sign-up</Link></p>
      </div>
    </main>
  )
} 

export default LoginPage
