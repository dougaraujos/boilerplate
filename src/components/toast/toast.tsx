/**
 * IMPORTS
 */
import React from 'react';
import { RiCloseLine } from 'react-icons/ri';
import { icons } from './icons';
import { $Body, $Close, $Detail, $Icon, $Title, $Toast } from './styles';
import { defaultProps, IProps } from './toast.d';


/**
 * I am a toast component.
 */
const Toast = (props: IProps): React.ReactElement => {
  // get icon by kind
  const Icon = icons.get(props.kind);

  // render toast
  return (
    <$Toast className={props.kind}>
      <$Icon><Icon /></$Icon>

      <$Body>
        <$Title>{props.title}</$Title>
        <$Detail>{props.detail}</$Detail>
      </$Body>

      <$Close onClick={props.onClose}><RiCloseLine /></$Close>
    </$Toast>
  );
};

// set default properties
Toast.defaultProps = defaultProps;


/**
 * EXPORTS
 */
export { Toast };
