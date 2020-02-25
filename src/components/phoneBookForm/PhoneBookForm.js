import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
import { v1 as uuidv1 } from "uuid";
import styles from "./PhonebookForm.module.css";
import notifyTransition from "../../transitions/notificationTransition.module.css";

class PhonebookForm extends Component {
  state = {
    name: "",
    number: "",
    notificationVisibility: false
  };

  handleSubmitContact = e => {
    e.preventDefault();

    const { name, number } = this.state;
    const { contacts, addContact } = this.props;

    if (contacts.some(item => item.name === name)) {
      this.setState({ notificationVisibility: true });

      setTimeout(() => {
        this.setState({ notificationVisibility: false });
        this.resetName();
      }, 1000);
    } else {
      if (name.length > 0 && number.length > 0) {
        addContact({ name, number, id: uuidv1() });
        this.resetName();
      }
    }
  };

  handleChange = e => {
    const name = e.target.name;
    this.setState({ [name]: e.target.value });
  };

  resetName = () => {
    this.setState({ name: "", number: "" });
  };

  render() {
    const { name, number, notificationVisibility } = this.state;
    return (
      <>
        <CSSTransition
          in={notificationVisibility}
          timeout={250}
          classNames={notifyTransition}
          unmountOnExit
        >
          {state => (
            <div className={styles.notificationBox}>
              <p className={styles.notificationMessage}>
                Contact {name} is already exist
              </p>
            </div>
          )}
        </CSSTransition>

        <div className={styles.formBox}>
          <form className={styles.form} onSubmit={this.handleSubmitContact}>
            <label className={styles.label}>
              Name
              <input
                autoComplete="off"
                type="text"
                name="name"
                value={name}
                onChange={this.handleChange}
                className={styles.input}
              />
            </label>
            <label className={styles.label}>
              Number
              <input
                autoComplete="off"
                type="phone"
                name="number"
                value={number}
                onChange={this.handleChange}
                className={styles.input}
              />
            </label>
            <button type="submit" className={styles.button}>
              Add contact
            </button>
          </form>
        </div>
      </>
    );
  }
}

export default PhonebookForm;
