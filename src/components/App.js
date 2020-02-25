import React, { Component } from "react";
import Section from "./section/Section";
import PhonebookForm from "./phoneBookForm/PhoneBookFormContainer";
import ContactsList from "./contactList/ContactListContainer";
import styles from "./App.module.css";

class App extends Component {
  state = {
    isVisible: false
  };

  componentDidMount() {
    this.setState(state => ({ isVisible: true }));
  }

  render() {
    const { isVisible } = this.state;
    return (
      <>
        <div className={styles.globalBox}>
          <Section title={"Phonebook"} isVisible={isVisible}>
            <PhonebookForm />
          </Section>
          <ContactsList />
        </div>
      </>
    );
  }
}

export default App;
