import React, { useState, useEffect, useRef } from "react";
import MessageForm from "../../components/MessageForm/MessageForm.jsx"
import styles from "./Message.module.css"
import * as messageService from "../../services/messageService.js"

// function handleCreateMessage(newMessage) {

// }


export default function Message(props) {
  return (
		<div className={styles.msgContainer}>
			<h1>Message Board</h1>
			<div>
				{props.message ? (
					<p>
						<span>{props.owner}</span>
						{props.content}
					</p>
				) : (
					<p>No messages yet</p>
				)}
      </div>
      <MessageForm props={ props }/>
		</div>
	);
}
