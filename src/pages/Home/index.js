import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import PushToTop from '../../components/PushToTop';
import Section from './components/Section';
import Container from '../../components/Container';
import HeroSection from './components/HeroSection';
import HeroOverlay from './components/HeroSection/HeroOverlay';
import HeroTitle from './components/HeroSection/HeroTitle';
import PlatformImage from './components/PlatformImage';
import PlatformLink from './components/PlatformLink';
import challengeMonitorPlatformImage from './components/platformImages/challengemonitor.png';
import progressMonitorPlatformImage from './components/platformImages/progressmonitor.png';
import SurTitle from './components/SurTitle';
import PostsSection from './components/PostsSection';
import LinkButton from '../../components/LinkButton';
import { mediaQuery } from '../../styles';

const Home = () => (
  <PushToTop>
    <Helmet>
      <title>Home</title>
    </Helmet>
    <HeroSection>
      <HeroOverlay />
      <Container>
        <HeroTitle>
          Egodact ontwikkelt innovatieve onderwijssoftware
        </HeroTitle>
      </Container>
    </HeroSection>
    <Section>
      <Container>
        <Section.Title>
          ...die helpt leerlingen te motiveren
        </Section.Title>
        <Section.Text>
          Wij richten ons op scholen die wél durven verder te gaan voor hun leerlingen. Onze software sluit aan bij student-centred learning en geeft leerlingen een proactieve rol in hun eigen ontwikkeling.
          <br />
          <br />
          Doordat onze software vanuit de leerling werkt, halen we het demotiverende effect van urenlange monologen weg. Leerlingen zijn zelf bezig met datgene waar hun passie in ligt en ontvangen geen stroom aan opdrachten en commando&#39;s vanuit de school. Zo triggeren wij intrinsieke motivatie en verbetert de kwaliteit van het leren.
        </Section.Text>
      </Container>
    </Section>
    <Section split>
      <Section.Half>
        <PlatformImage src={progressMonitorPlatformImage} />
      </Section.Half>
      <Section.Half>
        <Section.Half.ContentWrapper>
          <Section.Title>
            Agora VoortgangsMonitor
          </Section.Title>
          <Section.Text>
            Agora VoortgangsMonitor geeft leerlingen een overzicht van rubrics—wederom ingesteld door de school—waarin zij zelfstandig en proactief hun voortgang bij kunnen houden. De leraar of mentor, ofwel de coach in Agora terminologie, bevestigt of weerlegt enkel deze voortgang.
            <PlatformLink to="/progressmonitor">
              Meer informatie over Agora VoortgangsMonitor
            </PlatformLink>
          </Section.Text>
        </Section.Half.ContentWrapper>
      </Section.Half>
    </Section>
    <Section split>
      <Section.Half css={{ [mediaQuery(1024)]: { order: 1 } }}>
        <Section.Half.ContentWrapper>
          <Section.Title>
            Agora ChallengeMonitor
          </Section.Title>
          <Section.Text>
            In Agora ChallengeMonitor houden leerlingen een portfolio van hun projecten ("challenges" in Agora-termen) bij via een Kanban bord. Via het challenge-model—dat overigens door de school volledig aangepast kan worden—doorlopen leerlingen een vast proces waardoor zij altijd zelf aan de slag kunnen.
            <PlatformLink to="/challengemonitor">
              Meer informatie over Agora ChallengeMonitor
            </PlatformLink>
          </Section.Text>
        </Section.Half.ContentWrapper>
      </Section.Half>
      <Section.Half>
        <PlatformImage src={challengeMonitorPlatformImage} />
      </Section.Half>
    </Section>
    <Section css={{ [mediaQuery(1024)]: { backgroundColor: '#F5F5F5' } }}>
      <Container>
        <SurTitle>
          Egodact ontwikkelt innovatieve onderwijssoftware...
        </SurTitle>
        <Section.Title>
          ...die naadloos aansluit bij Agora onderwijs.
        </Section.Title>
        <Section.Text>
          We noemen onze software niet voor niets de <i>Agora</i> ChallengeMonitor en <i>Agora</i> VoortgangsMonitor. Wij zijn zelf drie Agora-leerlingen die genieten van deze unieke en prachtige vorm van onderwijs; de software die we ontwikkelen is dan ook gemaakt vanuit Agora-perspectief.
          <br />
          <br />
          Betekent dat dan dat de software alleen werkt voor Agora scholen? Nee, helemaal niet; de opmaak is in hoge mate aanpasbaar en flexibel. Maar we nemen wél de Agora visie mee.
        </Section.Text>
      </Container>
    </Section>
    <PostsSection />
    <Section style={{ marginBottom: -36 }}>
      <Container>
        <Section.Title>
          Contact opnemen?
        </Section.Title>
        <Section.Text style={{ marginBottom: 18 }}>
          Dat kan. Graag zelfs! Je kunt ons bereiken via de contact pagina.
        </Section.Text>
        <LinkButton to="/contact">
          Neem contact op
        </LinkButton>
      </Container>
    </Section>
  </PushToTop>
);

export default Home;
