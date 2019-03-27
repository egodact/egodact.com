import React from 'react';
import { Helmet } from 'react-helmet';
import PushToTop from '../../components/PushToTop';
import Container from '../../components/Container';
import Image from '../../components/Image';
import { Link } from 'react-router-dom';
import LinkButton from '../../components/LinkButton';
import portfolioScreenshot from './images/portfolio-screenshot.png';
import rubricLevels from './images/rubric-levels.png';
import historyBar from './images/history-bar.png';

const ProgressMonitor = () => (
  <PushToTop>
    <Helmet>
      <title>Agora VoortgangsMonitor</title>
    </Helmet>
    <Container>
      <h1>Agora VoortgangsMonitor</h1>
      <p>
        Agora VoortgangsMonitor is een programma dat leerlingen een overzicht geeft van rubrics—ingesteld door de school—waarin zij zelfstandig hun voortgang bij kunnen houden. De leraar of mentor, ofwel de coach in Agora terminologie, bevestigt of weerlegt enkel deze voortgang.
      </p>
      <h3>De kern van Agora VoortgangsMonitor</h3>
      <p>
        In de praktijk betekent dat dat leerlingen, bijvoorbeeld, het volgende zien wanneer zij inloggen—via hun Google of Microsoft account—in ons programma:
      </p>
      <Image src={portfolioScreenshot} alt="Screenshot van een portfolio" />
      <p>
        Wat je hier ziet is, zoals beloofd, een overzicht van rubrics, gestructureerd door middel van onderwerpen, subonderwerpen en onderdelen. De rubrics die je ziet, zijn trouwens geen onderdeel van het programma: deze zijn 'toevallig' zo ingesteld door <a href="http://niekee.nl/agora-vmbo-havo-vwo">Agora Roermond</a>. Als school heb je volledige controle over alle rubrics.
      </p>
      <p>
        Welnu, aan enkel een overzicht hebben we natuurlijk weinig. Daarom hebben we die sliders: zij representeren met hun kleuren de voortgang van de leerling binnen de niveaus van de rubric. Deze niveaus kunnen bekeken worden door simpelweg op een onderdeel te klikken. Je krijgt dan, bijvoorbeeld, het volgende te zien:
      </p>
      <Image src={rubricLevels} alt="Niveaus binnen een rubric" />
      <p>
        Met de slider die onder de niveaus staat, kan de leerling—helemaal zelfstandig, want leerlingen zijn de eigenaar van hun eigen ontwikkeling—zijn voortgang aangeven. De plus-knopjes kunnen gebruikt worden om een link (naar bijvoorbeeld een challenge uit de <Link to="./challengemonitor">Agora ChallengeMonitor</Link>) te koppelen aan dat niveau, om zo te bewijzen dat dat niveau ook daadwerkelijk behaald is. De niveaus die hier zichtbaar zijn zijn overigens wederom eigendom van <a href="http://niekee.nl/agora-vmbo-havo-vwo">Agora Roermond</a>.
      </p>
      <p>
        De leerling verplaatst de groen/blauwe balk, maar er is ook nog een paarse; die wordt verplaatst door de coach. Daarvoor is er de coach-modus, die er precies hetzelfde uitziet.
      </p>
      <p>
        Het laatste dat we hier nog willen benoemen is de geschiedenis-knop. Als een leerling—of coach—hierop klikt, verschijnt een balk die gebruikt kan worden om het portfolio—ofwel het gehele overzicht van rubrics met ingevulde sliders—van een moment in het verleden terug te halen:
      </p>
      <Image src={historyBar} alt="De geschiedenis-balk" />
      <p>
         Deze 'snapshots' van het portfolio worden wekelijks gemaakt.
      </p>
      <h3>Hoe Agora VoortgangsMonitor bijdraagt aan motivatie</h3>
      <p>
        Agora VoortgangsMonitor berust op intrinsieke motivatie. Maar hoe creëren we die dan? Met twee dingen: rubrics en formatief assessment.
      </p>
      <h4>Rubrics</h4>
      <p>
        Manier nummer een is de rubrics die hierboven al voorbij zijn gekomen. Zij vervangen cijfers met iets beters: duidelijkheid. Rubrics beschrijven namelijk alle niveaus binnen een gekozen onderdeel; bijgevolg is het dan altijd duidelijk wat een bepaald niveau binnen een rubric betekent. Leerlingen krijgen niet langer een abstract cijfer waar ze niets mee kunnen, nee, zij krijgen een duidelijke beschrijving van waar ze staan. Die duidelijkheid draagt bij aan motivatie en stimuleert eigenaarschap over groei.
      </p>
      <h4>Formatief assessment</h4>
      <p>
        Het tweede punt dat we toepassen in Agora VoortgangsMonitor is formatief assessment. Dat houdt in dat leerlingen met zichzelf vergeleken worden en niet met anderen, en dat voor hen zichtbaar is wat al goed gaat, en wat beter kan; dit zie je direct in Agora VoortgangsMonitor terug met het overzicht van alle rubrics en de voortgang in die rubrics.
      </p>
      <p>
        Wat volgt uit formatief assessment is intrinsieke motivatie en eigenaarschap over groei. Waarom? Omdat er gefocust wordt op ontwikkeling, en enkel ontwikkeling. Niet competitieve cijferspelletjes met medeleerlingen die niets met leren te maken hebben en die leerlingen hevig straffen voor fouten—ondanks dat je juist het meest leert van fouten. Met formatief assessment wordt echt leren gestimuleerd, en de enige competitie die leerling heeft, is die met een oudere versie van zichzelf; fouten zijn toegestaan, en de leerling zit bovenop zijn eigen ontwikkeling.
      </p>
      <h4>Eigenaarschap over groei</h4>
      <p>
        Hierboven hebben we enkele malen eigenaarschap over groei benoemd. Dat is een synoniem voor intrinsieke motivatie; wanneer een leerling écht de eigenaar is van zijn groei, zal hij automatisch gemotiveerd zijn om verder te groeien. Intrinsieke motivatie dus, het soort dat leerlingen vooruit helpt.
      </p>
      <h3>Een stukje eerlijkheid—coachen is cruciaal</h3>
      <p>
        Het zou ronduit belachelijk zijn om te beweren dat enkel een instantie van Agora VoortgangsMonitor, gekoppeld aan een sterke set rubrics, genoeg is om leerlingen te motiveren en te laten groeien. Daar is namelijk nog een extra ingrediënt voor nodig: goede coaching.
      </p>
      <p>
        Een coach—mentor of leraar in de termen van een traditionele school—zorgt ervoor dat een leerling daadwerkelijk aan de slag gaat met rubrics; dat de intrinsieke motivatie er ook echt komt. Dat betekent niet dat een coach een leerling gaat dwingen—dat zou namelijk direct tegenstrijdig zijn met al het bovenstaande—maar wel dat intrinsieke motivatie en eigenaarschap over groei veelal enige stimulatie vragen, vooral in het begin. Bijvoorbeeld door sterke vraagstelling en door bewustmaking—&quot;hoe kunnen deze rubrics jou vooruit helpen?&quot;. En zodra het vuurtje eenmaal is aangewakkerd, komt de leerling vaak een heel eind.
      </p>
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

export default ProgressMonitor;
