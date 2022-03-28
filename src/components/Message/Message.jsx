import React, { useState, useEffect, useRef } from "react";
import MessageForm from "../../components/MessageForm/MessageForm.jsx";
import styles from "./Message.module.css";
import messageService from "../../services/messageService.js";



export default function Message({ details, messages, setMessages }) {

	function handleCreateMessage(formData, details) {
		messageService.createMessage(formData, details)
			.then(result => {
			console.log(result)
			setMessages(result)
		})
	}

	return (
		<div className={styles.msgContainer}>
			{console.log(messages)}
			<h1>Message Board</h1>
			<div>
				{messages.length ? (
					<>
						<div>
							{messages.map(message => {
								return(
								<p>
									<span>{message.owner.name}</span>
									{message.content}
									</p>
								)
							})}
						</div>
					</>
				) : (
					<p>No messages yet</p>
				)}
			</div>
			<MessageForm createMessage={handleCreateMessage} details={details} />
		</div>
	);
}
