import React, { useState, useEffect, useRef } from "react";
import styles from "./Message.module.css"


export default function Message(props) {
  return (
    <div className={styles.msgContainer}>
      <h1>Messages</h1>
      {}
      <p><span>{ props.owner }</span>{ props.content }</p>
    </div>
  )
}
