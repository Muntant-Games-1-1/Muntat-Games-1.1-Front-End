import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import MessageForm from "../../components/MessageForm/MessageForm.jsx";
import styles from "./Message.module.css";
import * as messageService from "../../services/messageService.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function Message({ details, user }) {
	console.log("user ", user)

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
						<div>
							{messages.map((message) => {
								return (
									<>
										{console.log(user.profile !== message.owner._id)}
										{user.profile === message.owner._id ? (
											<p className={styles.rightAlign}>
												<span key={message._id}>{message.content}</span>
												<a
													className={styles.trash}
													onClick={() =>
														handleDeleteMessage(message._id, location.state._id)
													}
												>
													<FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
												</a>
											</p>
										) : (
											<p className={styles.leftAlign}>
												<span key={message._id}>
													<b>{message?.owner?.name}:</b> {message.content}
												</span>
											</p>
										)}
									</>
								);
							})}
						</div>
				) : (
					<p> No messages yet</p>
				)}
			</div>
			<MessageForm createMessage={handleCreateMessage} details={details} />
		</div>
	);
}
