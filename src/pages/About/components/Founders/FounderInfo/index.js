import React from 'react';
import PropTypes from 'prop-types';
import InfoWrapper from './InfoWrapper';
import FounderPicture from './FounderPicture';
import FounderName from './FounderName';
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
    <a href={`mailto:${founder.email}`}>
      <Button>
        Stuur {founder.firstName} een e-mail
      </Button>
    </a>
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
