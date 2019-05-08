import React, { useState } from 'react';
import StyledBanner from './StyledBanner';
import HeaderContentWrapper from '../HeaderContentWrapper';
import browserLanguageIsDutch from './browserLanguageIsDutch';
import MediumLink from './MediumLink';
import CloseButton from './CloseButton';

const lineHeightFix = {
  lineHeight: 1.4
};

const EnglishBanner = () => {
  if (navigator.language && browserLanguageIsDutch()) {
    return null;
  }

  const [open, setOpen] = useState(true);

  if (!open) {
    return null;
  }

  return (
    <StyledBanner>
      <HeaderContentWrapper style={lineHeightFix}>
        Don{`'`}t speak Dutch? Learn more about us on <MediumLink href="https://medium.com/egodact" target="_blank">Medium</MediumLink>
        <CloseButton onClick={() => setOpen(false)}>
          no, thanks
        </CloseButton>
      </HeaderContentWrapper>
    </StyledBanner>
  );
};

export default EnglishBanner;
