import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import MessageForm from "../../components/MessageForm/MessageForm.jsx";
import styles from "./Message.module.css";
import * as messageService from "../../services/messageService.js";

export default function Message({ details }) {
	const location = useLocation();
	const [messages, setMessages] = useState([]);

	function handleCreateMessage(formData, details) {
		messageService.createMessage(formData, details).then(result => {
			setMessages([...messages, result]);
		});
	}

	const handleDeleteMessage = (id) => {
    	messageService
			.deleteOneMessage(id)
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
                    <p key={i}>
                      {message?.owner?.name}: {message.content}
                    </p>
                    <button onClick={() => handleDeleteMessage(message._id)}>
                      Delete
                    </button>
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
