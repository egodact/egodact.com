import React from 'react';
import PropTypes from 'prop-types';
import InfoWrapper from './InfoWrapper';
import FounderPicture from './FounderPicture';
import FounderName from './FounderName';
import EmailButtonLink from './EmailButtonLink';
import Button from '../../../../../components/Button';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';

const FounderInfo = ({ founder, intl }) => (
  <InfoWrapper>
    <FounderPicture
      src={founder.picture}
      alt={intl.formatMessage({
        id: 'pages.about.founders.image_alt'
      }, {
        founder_name: founder.firstName
      })}
    />
    <FounderName>
      {founder.name}
    </FounderName>
    <EmailButtonLink href={`mailto:${founder.email}`}>
      <Button>
        <FormattedMessage
          id="pages.about.founders.email_button"
          values={{
            founder_name: founder.firstName
          }}
        />
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
  }).isRequired,
  intl: intlShape.isRequired
};

export default injectIntl(FounderInfo);
