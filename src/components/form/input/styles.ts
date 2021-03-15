/**
 * IMPORTS
 */
import styled from 'styled-components';


/**
 * I am a styled icon.
 */
const $Icon = styled.span`
  align-items: center;
  border-radius: inherit;
  color: ${props => props.theme.primaryDark};
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  height: 100%;
  padding: 10px;
  position: absolute;
  right: 0;
  top: 0;

  &:hover {
    transform: scale(1.1);
    transition: all 0.2s ease-in-out;
  }
`;

/**
 * I am a styled input.
 */
const $Input = styled.div`
  background: ${props => props.theme.gradient};
  border-radius: 20px;
  padding: 2px;

  [data-has-error="true"] & {
    background: linear-gradient(to right, #e8a7a7, #c72f2f);
    filter: none;

    input {
      color: #c72f2f
    }
  }

  input {
    border: none;
    border-radius: inherit;
    color: ${props => props.theme.primaryDark};
    outline: none;
    padding: 8px 20px;
    width: 100%;
  }

  input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0px 100px #fff inset;
  }
`;


/**
 * EXPORTS
 */
export { $Icon, $Input };
