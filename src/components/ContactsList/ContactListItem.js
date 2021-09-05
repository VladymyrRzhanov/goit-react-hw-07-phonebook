import React from 'react';
import PropTypes from 'prop-types';
// import s from './ContactListItem.module.css';
import { ItemContainer, Button, Data } from "./styles";

const ContactListItem = ({ onDelete, name, number }) => (
  
    <ItemContainer>
      <Button type="button" onClick={onDelete}>Delete X</Button>
      <Data>
        <span>{name}:</span>
        <span>{number}</span>
      </Data>
    </ItemContainer>
  
);

ContactListItem.propTypes = {
  onDelete: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactListItem;
