import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

export default function MessageForm(props) {
  const location = useLocation()
  const [validForm, setValidForm] = useState(true);
  const formElement = useRef();
  const [formData, setFormData] = useState(location.state);

  // function handleSubmit(e) {
	// 	e.preventDefault();
	// 	handleCreateMessage(formData);
	// }

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
      <form
        // onSubmit={handleSubmit}
        ref={formElement}>
				<label htmlFor="messageContent"></label>
				<textarea
					required
          id="messageContent"
          placeholder="Enter message here"
					name="content"
					onChange={handleChange}
				/>
				<button type="submit" disabled={!validForm} className="btn btn-success">
					Add Message
				</button>
			</form>
		</div>
	);
}
