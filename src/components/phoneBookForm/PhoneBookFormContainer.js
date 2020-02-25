import { connect } from "react-redux";
import { addContact } from "../../redux/phoneBookActions";
import PhoneBookForm from "./PhoneBookForm";

const mapStateToProps = state => ({ contacts: state.contacts });

export default connect(mapStateToProps, { addContact })(PhoneBookForm);
