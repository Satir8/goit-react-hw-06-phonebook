import React from "react";
import styles from "./ContactListItem.module.css";

const ContactListItem = ({ data, onHandleDelete }) => {
  const { name, number, id } = data;
  return (
    <li className={styles.contactListItem}>
      <div className={styles.contactWrapper}>
        <p className={styles.contactName}>{name} :</p>
        <p className={styles.contactNumber}>{number}</p>
      </div>
      <button
        onClick={() => onHandleDelete(id)}
        className={styles.deleteBtn}
      ></button>
    </li>
  );
};
export default ContactListItem;
