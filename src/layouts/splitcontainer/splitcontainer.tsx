/**
 * IMPORTS
 */
import React from 'react';
import { IProps } from './index.d';
import {
  $Container,
  $Left,
  $Main,
  $Right,
  $RightContent,
  variants
} from './styles';


/**
 * I am a split container layout.
 */
const SplitContainer = (props: IProps): React.ReactElement => {
  return (
    <$Main>
      <$Container>
        <$Left>{props.left}</$Left>
        <$Right>
          <$RightContent variants={variants}>
            {props.right}
          </$RightContent>
        </$Right>
      </$Container>
    </$Main>
  );
};


/**
 * EXPORTS
 */
export { SplitContainer };
