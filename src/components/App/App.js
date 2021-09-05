import { useState } from 'react';
import Form from 'components/Form';
import Section from 'components/Section';
import ContactsList from 'components/ContactsList';
import Filter from 'components/Filter';
import { connect } from "react-redux";
import { itemsSelectors } from "redux/contacts/items";
// import s from './App.module.css';
// import slide from "transition/slide.module.css";
import pop from "transition/pop.module.css";
import { CSSTransition } from 'react-transition-group';
import { Title, Subtitle } from "./styles";
import { useSpring, animated } from 'react-spring';

const App = ({ contacts }) => {
  const [state, toggle] = useState(true);
  const { x } = useSpring({
    from: { x: 0 },
    x: state ? 1 : 0,
    config: { duration: 1000 },
  })
  return (
    <>
      <Section>
        {/* <CSSTransition
          in={true}
          appear={true}
          classNames={slide}
          timeout={500}
        > */}
        <Title onMouseEnter={() => toggle(!state)}>
          <animated.div
        style={{
          opacity: x.to({ range: [0, 1], output: [0.3, 1] }),
          scale: x.to({
            range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
            output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1],
          }),
        }}>
            Phonebook
            </animated.div>
          </Title>
        {/* </CSSTransition> */}
        <Form />
      </Section>
      <Section>
        <CSSTransition
          in={contacts.length > 1}
          classNames={pop}
          timeout={500}
          unmountOnExit
        >
          <Filter />
        </CSSTransition>
        <CSSTransition
          in={!!contacts.length}
          classNames={pop}
          timeout={500}
          unmountOnExit
        >
        <Subtitle>Contacts</Subtitle>
          </CSSTransition>
        <ContactsList />
      </Section>
    </>
  );
};

const mapStateToProps = state => ({
  contacts: itemsSelectors.getItems(state)
});

export default connect(mapStateToProps)(App);
