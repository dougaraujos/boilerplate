/**
 * IMPORTS
 */
import { lighten } from 'polished';
import styled from 'styled-components';
import { toastKind } from './toast.d';


/**
 * I am a styled body.
 */
const $Body = styled.div`
  flex: 1;
`;


/**
 * I am a styled close.
 */
const $Close = styled.div`
  cursor: pointer;
  font-size: 18px;
  padding: 15px;
  position: absolute;
  right: 0;
  top: 0;
`;


/**
 * I am a styled detail.
 */
const $Detail = styled.p`
  font-size: 0.9rem;
`;


/**
 * I am a styled icon.
 */
const $Icon = styled.span`
  display: flex;
  font-size: 2rem;
  padding-right: 0.7rem;
`;


/**
 * I am a styled title.
 */
const $Title = styled.div`
  font-weight: bold;
`;


/**
 * I am a styled toast.
 */
const $Toast = styled.div`
  align-items: center;
  background: ${props => props.theme.primary};
  border-radius: 60px;
  color: #444;
  display: flex;
  padding: 0.7rem 1rem;
  position: relative;
  justify-content: center;
  margin-bottom: 1.5rem;
  font-size: 0.9rem;

  &.${toastKind.ERROR} {
    background: #ffd4d4;
    border: 2px solid #e9acac;
    color: #c73a33;
  }

  &.${toastKind.SUCCESS} {
    background: #e7ffd4;
    border: 2px solid #d2e9ac;
    color: #6daf4c;
  }
`;


/**
 * EXPORTS
 */
export { $Body, $Close, $Detail, $Icon, $Title, $Toast };
