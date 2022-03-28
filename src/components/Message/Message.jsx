import React, { useState, useEffect, useRef } from "react";
import MessageForm from "../../components/MessageForm/MessageForm.jsx";
import styles from "./Message.module.css";
import * as messageService from "../../services/messageService.js";


function handleCreateMessage(formData, details) {
	messageService.createMessage(formData, details)
	.then(result => {
		details.messages.push(result)
	})
}

export default function Message({ details }) {
	console.log(details)
	return (
		<div className={styles.msgContainer}>
			<h1>Message Board</h1>
			<div>
				{details?.messages.length ? (
					<>
						<div>
							{console.log(details.messages)}
							{details.messages.map(message => {
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
