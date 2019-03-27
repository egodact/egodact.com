import React from 'react';
import PropTypes from 'prop-types';
import InfoWrapper from './InfoWrapper';
import FounderPicture from './FounderPicture';
import FounderName from './FounderName';
import EmailButtonLink from './EmailButtonLink';
import Button from '../../../../../components/Button';

const FounderInfo = ({ founder }) => (
  <InfoWrapper>
    <FounderPicture
      src={founder.picture}
      alt={`Foto van ${founder.firstName}`}
    />
    <FounderName>
      {founder.name}
    </FounderName>
    <EmailButtonLink href={`mailto:${founder.email}`}>
      <Button>
        Stuur {founder.firstName} een e-mail
      </Button>
    </EmailButtonLink>
  </InfoWrapper>
);

FounderInfo.propTypes = {
  founder: PropTypes.shape({
    picture: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired
  }).isRequired
};

export default FounderInfo;
