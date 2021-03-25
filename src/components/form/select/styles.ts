/**
 * IMPORTS
 */
import styled from 'styled-components';


/**
 * I am a styled select.
 */
const $Select = styled.div`
  background: ${props => props.theme.gradient};
  border-radius: 20px;
  filter: grayscale(1);
  padding: 2px;

  &:focus-within {
    filter: none;
  }

  [data-has-error="true"] & {
    background: linear-gradient(to right, #e8a7a7, #c72f2f);
    filter: none;

    select {
      color: #c72f2f;
    }
  }

  select {
    background: #fff;
    border: none;
    border-radius: inherit;
    color: ${props => props.theme.primaryDark};
    outline: none;
    padding: 6px 20px;
    width: 100%;
  }
`;


/**
 * EXPORTS
 */
export { $Select };
