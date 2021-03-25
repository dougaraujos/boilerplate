/**
 * IMPORTS
 */
import styled from 'styled-components';


/**
 * I am a styled form row.
 */
const $Row = styled.span`
  display: flex;

  > * {
    flex: 1;
  }

  > * + * {
    margin-left: 1rem;
  }
`;


/**
 * EXPORTS
 */
export { $Row };
