import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MessageForm from "../../components/MessageForm/MessageForm.jsx";
import styles from "./Message.module.css";
import * as messageService from "../../services/messageService.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function Message({ lobbyDetails, user, lobbyId }) {
  const [messages, setMessages] = useState(null);

  function handleCreateMessage(formData, details) {
    messageService.createMessage(formData, details).then((result) => {
      setMessages([...messages, result]);
    });
  }

  const handleDeleteMessage = (id, lobbyId) => {
    messageService
      .deleteOneMessage(id, lobbyId)
      .then((deleteOneMessage) =>
        setMessages(
          messages.filter((message) => message?._id !== deleteOneMessage._id)
        )
      );
  };

  useEffect(() => {
    async function fetchData() {
      const messages = await messageService.getAllMessages(lobbyId);
      return setMessages(messages);
    }
    fetchData();
  }, []);

  return (
    <div className={styles.center}>
      <h1>Message Board</h1>
      <div className={styles.allMessageContainer}>
        <div className={styles.leftSide}>
          <div>
            {messages?.length && user ? (
              <div className={styles.allMessages}>
                {messages?.map((message) => {
                  return (
                    <div key={message._id}>
                      {user.profile === message?.owner._id ? (
                        <div className={styles.rightAlign}>
                          <p className={styles.messageContent}>
                            <span>{message?.content}</span>
                          </p>
                          <button
                            className={styles.trash}
                            onClick={() =>
                              handleDeleteMessage(
                                message?._id,
                                lobbyDetails?._id
                              )
                            }
                          >
                            <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                          </button>
                        </div>
                      ) : (
                        <p className={styles.leftAlign}>
                          <b>{message?.owner?.name}:</b>
                          <span className={styles.otherMessageContent}>
                            {message.content}
                          </span>
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            ) : (
              <>
                {user ? (
                  <>
                    <p>No messages yet</p>
                  </>
                ) : (
                  <>
                    <p>Please Login To View Messages</p>
                  </>
                )}
              </>
            )}
          </div>
        </div>
        <div className={styles.rightSide}></div>
      </div>
      <MessageForm createMessage={handleCreateMessage} details={lobbyDetails} />
    </div>
  );
}
