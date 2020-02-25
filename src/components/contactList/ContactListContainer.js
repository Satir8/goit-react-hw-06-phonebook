import { connect } from "react-redux";
import { updateFilter, deleteContact } from "../../redux/phoneBookActions";
import ContactsList from "./ContactList";

const mapStateToProps = state => ({
  contacts: state.contacts,
  filter: state.filter
});

const mapDispatchToProps = {
  updateFilter,
  deleteContact
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);
