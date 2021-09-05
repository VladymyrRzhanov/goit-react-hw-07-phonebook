import styled from 'styled-components';

const Element = styled.li`
  position: relative;
  font-size: 18px;
  font-weight: 500;
  list-style: none;
  box-shadow: 13px 13px 25px -5px rgb(34 60 80 / 30%);
  transition: opacity 250ms ease-in-out, transform 250ms ease-in-out;
  opacity: ${({ state }) => (state === 'exiting' || state === 'entering' ? 0 : 1)};
  transform: translateX(${({ state }) => (state === 'entered' || state === 'exited' ? 0 : -100)}%);

  &:not(:last-child) {
  margin-bottom: 10px;
}
`;
// import { CSSTransition } from 'react-transition-group';

// const Slice = styled(CSSTransition)(
// {
// enter: {
//   opacity: 0,
//   transform: translateX(-100%)
// },
// enterActive: {
//   opacity: 1,
//   transform: translateX(0),
//   transition: 250ms ease-in-out,
// },

// exit: {
//   opacity: 1,
//   transform: translateX(0),
// },
// exitActive: {
//   opacity: 0,
//   transform: translateX(-100%),
//   transition: 250ms ease-in-out,
// }

// }

// );

export default Element;