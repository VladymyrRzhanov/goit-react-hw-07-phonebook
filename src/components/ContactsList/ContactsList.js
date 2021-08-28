import React from 'react';
import PropTypes from 'prop-types';
import ContactListItem from './ContactListItem';
import { connect } from "react-redux";
import { getFilterName } from "../../redux/contacts/items/items-selector";
import slice from "../../transition/slice.module.css";
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {fetchContacts , deleteContact} from "../../redux/contacts/items/items-operations";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Container } from "./styles";

const ContactsList = ({ contacts, onDelete }) => {
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch]);

  return (
  <Container>
    <TransitionGroup component='ul'>
    {contacts.map(({ id, name, number }) => (
      <CSSTransition
        key={id}
        timeout={250}
        classNames={slice}
        unmountOnExit>
        <ContactListItem
          name={name}
          number={number}
          onDelete={() => onDelete(id)}
        />
      </CSSTransition>
    ))}
  </TransitionGroup>
  </Container>
)
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

const mapStateToProps = state => ({
  contacts: getFilterName(state),
})

const mapDispatchToProps = dispatch => ({
  onDelete: id => dispatch(deleteContact(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);
