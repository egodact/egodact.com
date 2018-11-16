import React from 'react';
import FounderWrapper from './FounderWrapper';
import FounderInfo from './FounderInfo';
import rafaelPicture from './pictures/rafael.png';
import baruchPicture from './pictures/baruch.png';
import rubenPicture from './pictures/ruben.png';

const founders = [{
  picture: rafaelPicture,
  name: 'Rafael Klaessen',
  firstName: 'Rafael',
  email: 'rafael@egodact.com'
}, {
  picture: baruchPicture,
  name: 'Baruch van Hooff',
  firstName: 'Baruch',
  email: 'baruch@egodact.com'
}, {
  picture: rubenPicture,
  name: 'Ruben Caris',
  firstName: 'Ruben',
  email: 'ruben@egodact.com'
}];

const Founders = () => (
  <FounderWrapper>
    {founders.map((founder, i) =>
      <FounderInfo founder={founder} key={i} />
    )}
  </FounderWrapper>
);

export default Founders;
