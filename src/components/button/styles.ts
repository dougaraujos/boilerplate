/**
 * IMPORTS
 */
import { darken } from 'polished';
import styled from 'styled-components';


/**
 * I am a styled button.
 */
const $Button = styled.button`
  background: ${props => props.theme.primary};
  border-radius: 30px;
  padding: 1rem 3rem;
  transition: background 0.2s ease-out;

  &:hover {
    background: ${props => darken(0.1, props.theme.primary)};
  }

  &[disabled] {
    cursor: default;
    background: ${props => props.theme.primary};
  }
`;


/**
 * EXPORTS
 */
export { $Button };
