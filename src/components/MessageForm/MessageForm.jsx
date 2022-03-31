import React, { useState, useEffect, useRef } from "react";
import styles from './MessageForm.module.css'
export default function MessageForm({ createMessage, details }) {

	const [validForm, setValidForm] = useState(true);
	const formElement = useRef();
	const [formData, setFormData] = useState({ content: "" });

	function handleSubmit(e) {
		e.preventDefault();
		e.target[0].value = "";
		createMessage(formData, details);
	}

	function handleChange(e) {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	}

	useEffect(() => {
		formElement.current.checkValidity()
			? setValidForm(true)
			: setValidForm(false);
	}, [formData]);

	return (
		<div>
			<form onSubmit={handleSubmit} ref={formElement} className={styles.myForm}>
				<label htmlFor="messageContent"></label>
				<input
					required
					type="text"
					id="messageContent"
					placeholder="Enter message here"
					name="content"
					maxLength="144"
					onChange={handleChange}
					className={styles.messageInput}
				/>
				<button
					 type="submit" disabled={!validForm}
					 className={styles.messageButton}
				>
				➤
				</button>
			</form>
		</div>
	);
}
