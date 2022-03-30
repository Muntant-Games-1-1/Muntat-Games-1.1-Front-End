import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import MessageForm from "../../components/MessageForm/MessageForm.jsx";
import styles from "./Message.module.css";
import * as messageService from "../../services/messageService.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function Message({ details, user }) {
	const location = useLocation();
	const [messages, setMessages] = useState([]);

	function handleCreateMessage(formData, details) {
		messageService.createMessage(formData, details).then(result => {
			setMessages([...messages, result]);
		});
	}

	const handleDeleteMessage = (id, lobbyId) => {
    	messageService
			.deleteOneMessage(id, lobbyId)
			.then((deleteOneMessage) =>
				setMessages(messages.filter((message) => message._id !== deleteOneMessage._id))
      );
  };

	useEffect(() => {
		messageService
			.getAllMessages(location)
			.then(allMessages => setMessages(allMessages));
	}, []);

	return (
		<div className={styles.msgContainer}>
			<h1>Message Board</h1>
			<div>
				{messages && messages.length ? (
					<>
						<div>
							{messages.map((message,i) => {
								return (
                  <>
							<span key={i}>
								{message?.owner?.name}: {message.content}
							</span>&emsp;

							<a className={styles.trash} onClick={() => handleDeleteMessage(message._id, location.state._id)}>
							<FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>

							<a className={styles.trash}onClick={() => handleDeleteMessage(message._id)}>
								<FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>

							</a><br/>
						
                  </>
                );
							})}
						</div>
					</>
				) : (
					<p> No messages yet</p>
				)}
			</div>
			<MessageForm createMessage={handleCreateMessage} details={details} />
		</div>
	);
}
