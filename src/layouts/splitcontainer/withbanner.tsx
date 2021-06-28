/**
 * IMPORTS
 */
import Image from 'next/image';
import React from 'react';
import { SplitContainer } from './splitcontainer';
import { $Banner } from './styles';


/**
 * I apply a split container layout with banner.
 */
const withBanner = (Page) => {
  const PageWithBanner = (props): React.ReactElement => (
    <SplitContainer
      left={
        <$Banner>
          <Image
            src="/assets/images/logo-white.png"
            width={200}
            height={50}
            layout="fixed"
          />
        </$Banner>
      }
      right={<Page {...props} />}
    />
  );

  return PageWithBanner;
};


/**
 * EXPORTS
 */
export { withBanner };
