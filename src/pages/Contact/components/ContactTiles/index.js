import React, { Fragment } from 'react';
import TileWrapper from './TileWrapper';
import Tile from './Tile';
import mediumLogoMonogram from './medium-logo-monogram.svg';

const ContactTiles = () => (
  <Fragment>
    <TileWrapper>
      <Tile href="mailto:contact@egodact.com">
        contact@egodact.com
      </Tile>
      <Tile href="https://medium.com/egodact" target="_blank">
        <img
          src={mediumLogoMonogram}
          alt="Medium logo"
          style={{
            width: 120,
            height: 120
          }}
        />
      </Tile>
      <Tile
        href="https://www.google.nl/maps/place/Egodact/@51.1883557,5.9865312,15z/data=!4m2!3m1!1s0x0:0x504c230196a4e973?ved=2ahUKEwjctZTG6NneAhXP3KQKHbHbAAMQ_BIwC3oECAcQCw"
        target="_blank"
        smallText
      >
        Egodact vof,
        <br />
        Pierre Cuypersstraat 34,
        <br/>
        6041XH Roermond
      </Tile>
    </TileWrapper>
    <TileWrapper>
      <Tile href="tel:+31 6 27341748">
        +31 6 27341748
      </Tile>
      <Tile
        href="https://www.kvk.nl/orderstraat/product-kiezen/?kvknummer=726074670000"
        target="_blank"
        smallText
      >
        KvK: 72607467
        <br />
        BTW-nummer: 859171838B01
      </Tile>
    </TileWrapper>
  </Fragment>
);

export default ContactTiles;
