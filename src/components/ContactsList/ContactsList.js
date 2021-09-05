import React from 'react';
import PropTypes from 'prop-types';
import ContactListItem from './ContactListItem';
import { connect } from "react-redux";
import { itemsSelectors, itemsOperations } from "redux/contacts/items";
import slice from "transition/slice.module.css";
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Transition, TransitionGroup } from 'react-transition-group';
import Element from "../../transition/slice";
import { Container } from "./styles";

const ContactsList = ({ contacts, onDelete }) => {
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(itemsOperations.fetchContacts())
  }, [dispatch]);

  return (
    <Container>
      <TransitionGroup component='ul'>
        {contacts.map(({ id, name, number }) => (
          <Transition
            key={id}
            timeout={250}
            classNames={slice}
            unmountOnExit>
            {(state) => (
              <Element state={state}>
                <ContactListItem
                  name={name}
                  number={number}
                  onDelete={() => onDelete(id)}
                />
              </Element>
            )}
          </Transition>
        ))}
      </TransitionGroup>
    </Container>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

const mapStateToProps = state => ({
  contacts: itemsSelectors.getFilterName(state),
})

const mapDispatchToProps = dispatch => ({
  onDelete: id => dispatch(itemsOperations.deleteContact(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);
