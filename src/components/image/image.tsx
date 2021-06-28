/**
 * IMPORTS
 */
import NextImage from 'next/image';
import React from 'react';
import { defaultProps, IProps } from './image.d';


/**
 * I am an image component.
 */
const Image = (props: IProps): React.ReactElement => <NextImage {...props} />;

// set default properties
Image.defaultProps = defaultProps;


/**
 * EXPORTS
 */
export { Image };
