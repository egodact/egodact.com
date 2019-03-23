import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import PushToTop from '../../components/PushToTop';
import Section from './components/Section';
import Container from '../../components/Container';
import PlatformImage from './components/PlatformImage';
import placeholderImage from './software_placeholder_image.png';
import { white, logoBlue, orange, black } from '../../colors';

const Home = () => (
  <PushToTop>
    <Helmet>
      <title>Home</title>
    </Helmet>
    <Section>
      <Container>
        <Section.Title>
          Egodact ontwikkelt innovatieve onderwijssoftware...
        </Section.Title>
        <Section.Text>
          Wij richten ons op scholen die wél durven verder te gaan voor hun leerlingen. Onze software sluit aan bij student-centred learning en geeft leerlingen een proactieve rol in hun eigen ontwikkeling.
        </Section.Text>
      </Container>
    </Section>
    <Section color={white} backgroundColor={logoBlue}>
      <Container>
        <Section.Title>
          ...die helpt leerlingen te motiveren...
        </Section.Title>
        <Section.Text>
          Doordat onze software vanuit de leerling werkt, halen we het demotiverende effect van urenlange monologen weg. Leerlingen zijn zelf bezig met datgene waar hun passie in ligt en ontvangen geen stroom aan opdrachten en commando&#39;s vanuit de school. Zo triggeren wij intrinsieke motivatie en verbetert de kwaliteit van het leren.
        </Section.Text>
      </Container>
    </Section>
    <Section color={white} backgroundColor={orange}>
      <Container>
        <Section.Title>
          ...en naadloos aansluit bij Agora onderwijs.
        </Section.Title>
        <Section.Text>
          We noemen onze software niet voor niets de <i>Agora</i> ChallengeMonitor en <i>Agora</i> VoortgangsMonitor. Wij zijn zelf drie Agora-leerlingen die genieten van deze unieke en prachtige vorm van onderwijs; de software die we ontwikkelen is dan ook gemaakt vanuit Agora-perspectief.
          <br />
          <br />
          Betekent dat dan dat de software alleen werkt voor Agora scholen? Nee, helemaal niet; de opmaak is in hoge mate aanpasbaar en flexibel. Maar we nemen wél de Agora visie mee.
        </Section.Text>
      </Container>
    </Section>
    <Section color={black} backgroundColor="#F5F5F5">
      <Container>
        <Section.Title>
          De platformen:
        </Section.Title>
      </Container>
    </Section>
    <Section split>
      <Section.Half>
        <PlatformImage src={placeholderImage} />
      </Section.Half>
      <Section.Half>
        <Section.Half.ContentWrapper>
          <Section.Title inHalf>
            Agora ChallengeMonitor
          </Section.Title>
          <Section.Text inHalf>
            In Agora ChallengeMonitor houden leerlingen een portfolio van hun projecten ("challenges" in Agora-termen) bij via een Kanban bord. Via het challenge-model—dat overigens door de school volledig aangepast kan worden—doorlopen leerlingen een vast proces waardoor zij altijd zelf aan de slag kunnen.
          </Section.Text>
        </Section.Half.ContentWrapper>
      </Section.Half>
    </Section>
    <Section split>
      <Section.Half>
        <Section.Half.ContentWrapper left>
          <Section.Title inHalf>
            Agora VoortgangsMonitor
          </Section.Title>
          <Section.Text inHalf>
            Agora VoortgangsMonitor geeft leerlingen een overzicht van rubrics—wederom ingesteld door de school—waarin zij zelfstandig en proactief hun voortgang bij kunnen houden. De leraar of mentor, ofwel de coach in Agora terminologie, bevestigt of weerlegt enkel deze voortgang.
          </Section.Text>
        </Section.Half.ContentWrapper>
      </Section.Half>
      <Section.Half>
        <PlatformImage src={placeholderImage} />
      </Section.Half>
    </Section>
  </PushToTop>
);

export default Home;
