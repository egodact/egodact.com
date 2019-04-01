import React from 'react';
import { Helmet } from 'react-helmet';
import PushToTop from '../../components/PushToTop';
import Container from '../../components/Container';
import Image from '../../components/Image';
import { Link } from 'react-router-dom';
import LinkButton from '../../components/LinkButton';
import exampleRow from './images/example-row.png';
import exampleChallenge from './images/example-challenge.png';
import modelEditor from './images/model-editor.png';

const ChallengeMonitor = () => (
  <PushToTop>
    <Helmet>
      <title>Agora ChallengeMonitor</title>
    </Helmet>
    <Container>
      <h1>Agora ChallengeMonitor</h1>
      <p>
        In Agora ChallengeMonitor houden leerlingen een portfolio van hun projecten ("challenges" in Agora-termen) bij via een Kanban bord. Via het challenge-model—dat overigens door de school volledig aangepast kan worden—doorlopen leerlingen een vast proces waardoor zij altijd zelf aan de slag kunnen.
      </p>
      <h3>Agora ChallengeMonitor in een notendop</h3>
      <p>
        Agora ChallengeMonitor bestaat uit rijen, ieder onderverdeeld in drie kolommen: to do, in progress en done—een kanban bord dus. Een rij is een overkoepelend onderwerp waaronder challenges gegroepeerd kunnen worden. Binnen een rij kunnen challenges van kolom verplaatst worden.
      </p>
      <p>
        Een foto zegt meer dan duizend woorden:
      </p>
      <Image src={exampleRow} alt="Voorbeeldrij in Agora ChallengeMonitor" />
      <p>
        Alle rijen en challenges worden door de leerlingen zelf aangemaakt. En wanneer ze dat dan doen, krijgen ze bij iedere challenge een aantal velden die ze in kunnen vullen:
      </p>
      <Image src={exampleChallenge} alt="Voorbeeldchallenge in Agora ChallengeMonitor" />
      <p>
        De coach kan deze velden niet aanpassen, maar enkel reacties achter laten—het liefst wel in dialoog met de leerling—zodat de leerling eigenaar blijft van zijn leerproces. Verder kunnen leerlingen hun challenge delen met anderen en hun challenge onderverdelen in taken, als ze dat nodig achten.
      </p>
      <p>
        Ook kan de school aan de achterkant van de Agora ChallengeMonitor al deze velden volledig aanpassen:
      </p>
      <Image src={modelEditor} alt="Challenge-model editor" />
      <p>
        Flexibel is de Agora ChallengeMonitor dus ook. Mocht je behoefte hebben om het hele programma in diepte te zien, neem dan <Link to="/contact">contact met ons op</Link>. We staan je graag te woord!
      </p>
      <h3>Agora ChallengeMonitor ❤️ Agora VoortgangsMonitor</h3>
      <p>
        Agora ChallengeMonitor geeft leerlingen een portfolio van hun eigen challenges, maar geeft geen inzicht in de groei die ontstaat door die challenges. Daarvoor hebben we Agora VoortgangsMonitor; voor het bijhouden van voortgang in overkoepelende vaardigheden. Essentieel dus.
      </p>
      <p>
        Het geheel is meer dan de som van de delen:
      </p>
      <LinkButton to="./progressmonitor" style={{ marginBottom: 18 }}>
        Meer over Agora VoortgangsMonitor
      </LinkButton>
      <h3>Meer weten?</h3>
      <p>
        Wil je meer informatie over ons programma, een demo, of gewoon wat vragen stellen over de achterliggende ideeën? Neem dan contact met ons op. We staan je graag te woord! Oh, en uiteraard altijd geheel vrijblijvend.
      </p>
      <LinkButton to="/contact">
        Neem contact op
      </LinkButton>
    </Container>
  </PushToTop>
);

export default ChallengeMonitor;
