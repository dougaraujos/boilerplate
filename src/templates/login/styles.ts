/**
 * IMPORTS
 */
import styled from 'styled-components';
import { devices } from 'styles/devices';


/**
 * I am a styled form actions.
 */
const $Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;


/**
 * I am a styled form.
 */
const $Form = styled.form`
  display: flex;
  align-items: stretch;
  flex-direction: column;
  width: 100%;
  margin-top: 3rem;
`;


/**
 * I am a styled login.
 */
const $Login = styled.div`
  flex: 1;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 1rem;
  max-width: 380px;
`;


/**
 * I am a styled title.
 */
const $Title = styled.h1`
  color: #191919;
  margin: 0;
`;


/**
 * I am a styled welcome message.
 */
const $Welcome = styled.span`
  color: #888888;
`;


/**
 * EXPORTS
 */
export { $Actions, $Form, $Login, $Title, $Welcome };
