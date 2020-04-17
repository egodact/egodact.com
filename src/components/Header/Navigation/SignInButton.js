import React from 'react';
import styled from '@emotion/styled';
import { StandardLinkButton } from '../../Linkbutton';
import { mediaQuery } from '../../../styles';
import { FormattedMessage } from 'react-intl';

const StyledLinkButton = styled(StandardLinkButton)({
  lineHeight: 1,
  [mediaQuery(540)]: {
    marginLeft: 'auto'
  }
});

const SignInButton = props => (
  <StyledLinkButton href="https://egodact.app" {...props}>
    <FormattedMessage id="header.navigation.sign_in_button" />
  </StyledLinkButton>
);

export default SignInButton;
