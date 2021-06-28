/**
 * IMPORTS
 */
import styled from 'styled-components';


/**
 * I am a styled error.
 */
const $Error = styled.span`
  background: #fff;
  bottom: -4px;
  color: #c72f2f;
  font-size: 0.75rem;
  line-height: 0.8rem;
  padding: 0 5px;
  position: absolute;
  right: 15px;
  white-space: nowrap;
  z-index: 10;
`;


/**
 * I am a styled form field.
 */
const $Field = styled.label`
  filter: grayscale(1);
  margin-bottom: 1.2rem;
  position: relative;
  transition: filter 0.5s ease-out;
  z-index: 1;

  &[data-has-error="true"],
  &:focus-within {
    filter: none;
    transition: none;
  }
`;


/**
 * I am a styled label.
 */
const $Label = styled.div`
  background: #fff;
  color: #676766;
  font-size: 0.7rem;
  font-weight: ${props => props.theme.fonts.bold};
  left: 15px;
  padding: 0 10px;
  position: absolute;
  text-transform: uppercase;
  top: 0;
  transform: translateY(-50%);
  z-index: 10;
`;


/**
 * EXPORTS
 */
export { $Error, $Field, $Label };
