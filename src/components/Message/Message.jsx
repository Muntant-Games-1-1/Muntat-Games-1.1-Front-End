import React, { useState, useEffect, useRef } from "react";
import MessageForm from "../../components/MessageForm/MessageForm.jsx";
import styles from "./Message.module.css";
import * as messageService from "../../services/messageService.js";

export default function Message({ details }) {

	const [messages, setMessages] = useState([]);

	function handleCreateMessage(formData, details) {
		messageService.createMessage(formData, details).then(result => {
			setMessages([...messages, result]);
		});
	}

	useEffect(() => {
		messageService.getAllMessages().then(allMessages => setMessages(allMessages));
	}, []);

	return (
		<div className={styles.msgContainer}>
			<h1>Message Board</h1>
			<div>
				{messages && messages.length ? (
					<>
						<div>
							{messages.map(message => {
								return (
									<p>{message.owner.name}: {message.content}</p>
								);
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
