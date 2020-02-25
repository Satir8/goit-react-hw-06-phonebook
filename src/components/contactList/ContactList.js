import React, { Component } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import ContactListItem from "./contactListItem/ContactListItem";
import FilteredSearch from "./filteredSearch/FilteredSearch";
import styles from "./ContactList.module.css";
import slideTransitions from "../../transitions/slideTransitions.module.css";
import opacityTransition from "../../transitions/opacityTransition.module.css";

const filterContacts = (contacts, filter) => {
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
};

class ContactsList extends Component {
  state = { filterVisibility: false };

  componentDidMount() {
    const { contacts } = this.props;
    if (contacts.length > 1) {
      this.setState({ filterVisibility: true });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.props;
    if (prevProps.contacts.length !== contacts.length) {
      contacts.length > 2
        ? this.setState({ filterVisibility: true })
        : this.setState({ filterVisibility: false });
    }
  }

  handleFilter = e => {
    const { updateFilter } = this.props;
    updateFilter(e.target.value);
  };

  render() {
    const { filterVisibility } = this.state;
    const { filter, deleteContact, contacts } = this.props;
    const filteredContacts = filterContacts(contacts, filter);
    return (
      <>
        <CSSTransition
          in={filterVisibility}
          timeout={500}
          classNames={opacityTransition}
          unmountOnExit
        >
          {state => (
            <FilteredSearch
              data={filteredContacts}
              valueFilter={filter}
              onChangeFilter={this.handleFilter}
            />
          )}
        </CSSTransition>
        <TransitionGroup component="ul" className={styles.list}>
          {filteredContacts.length > 0 &&
            filteredContacts.map(item => {
              return (
                <CSSTransition
                  in={filterContacts.length > 0}
                  timeout={450}
                  unmountOnExit
                  key={item.id}
                  classNames={slideTransitions}
                >
                  <ContactListItem data={item} onHandleDelete={deleteContact} />
                </CSSTransition>
              );
            })}
        </TransitionGroup>
      </>
    );
  }
}

export default ContactsList;
