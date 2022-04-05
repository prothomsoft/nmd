import React from "react";
import LayoutStartPage from "../components/layoutStartPage";
import { Typography } from "@mui/material";
import ParallaxImageFooter from "../components/parallaxImageFooter";
import Container from "@mui/material/Container";
import Link from "next/link";
import MuiLink from "@mui/material/Link";
import ContactForm from "../components/contactForm";
import Box from "@mui/material/Box";
import ImageCardGrid from "../components/imageCardGrid";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const Index = () => {

  const pageImage = process.env.staticImagesPath + "plener_slubny_na_rynku_w_krakowie.jpg";
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));
  
  return (
    <LayoutStartPage
      title="Fotograf ślubny Kraków ✔️ Tomasz Prokop"
      description="Kliknij ⬆️ sprawdź moje portfolio. Pełne emocji reportaże ślubne ❤️ piękne zdjęcia plenerowe. Serdecznie zapraszam. Fotograf ślubny Kraków."
      keywords="fotograf ślubny Kraków, fotograf na wesele, fotografia ślubna Kraków, zdjęcia plenerowe"
      url="https://99foto.pl"
      leadNames="PATRYCJA i KRZYSZTOF"
      leadTitle="PLENER ŚLUBNY NA RYNKU W KRAKOWIE"
      leadUrl="/plener-slubny-na-rynku-w-krakowie"
      leadImage={pageImage}
      slide={process.env.staticImagesPath + "lomnicki_staw_portfolio_start.jpg"}>
      <Container sx={{ pb: 3 }}>
        <Box sx={{ py: 2 }}>
          <Typography variant="h1" className={matches ? 'quote-title' : ''} align="center">
            FOTOGRAF ŚLUBNY KRAKÓW
          </Typography>
        </Box>
        <Typography variant="body1" align="justify" color="text.secondary" sx={{pb:2}}>
          Mam na imię Tomek i jestem fotografem ślubnym. Mieszkam w Krakowie z moją żoną Anią i trójką kochanych dzieciaków. Fotografia ślubna od zawsze była moją największą pasją, która przy
          odrobinie szczęścia stała się moim sposobem na życie. Uwielbiam fotografować szczęśliwych ludzi, odwiedzać nowe miejsca i poszukiwać idealnego światła. Fotografię ślubną traktuję jako
          niesamowitą przygodę, która pozwala mi spełniać marzenia. Jestem przekonany, że najlepsze zdjęcia są jeszcze przede mną.
        </Typography>
        <Typography variant="body1" align="justify" color="text.secondary" sx={{pb:2}}>
          Serdecznie zapraszam do odwiedzenia{" "}
          <Link href="/blog" passHref>
            <MuiLink underline="hover">mojego bloga</MuiLink>
          </Link>{" "}
          i obejrzenia pełnych reportaży ślubnych, sesji zdjęciowych, zdjęć pełnych kolorów i autentycznych emocji. Moje prace wyróżnia reporterskie podejście do fotografii czyli jak najmniej
          ustawianych, reżyserowanych zdjęć, jak najwięcej kadrów przedstawiających emocje i spontaniczne reakcje. Oglądając moje prace sami ocenicie czy moje zdjęcia się Wam spodobają. Fotografuję w
          Krakowie i bliskich okolicach. Wspólnie znajdźmy chwilę, światło, kadr, zachowajmy je na zawsze.
        </Typography>
        <Box sx={{ py: 2 }}>
          <Typography variant="h1" className={matches ? 'quote-title' : ''} align="center">
            POLECANE REPORTAŻE I SESJE ŚLUBNE
          </Typography>
        </Box>
        <ImageCardGrid />
      </Container>

      <ParallaxImageFooter leadImage={process.env.staticImagesPath + "sesja_slubna_jesienia.jpg"} leadUrl="" height="70vh" />

      <Container>
        <Box sx={{ py: 2 }}>
          <Typography variant="h1" className={matches ? 'quote-title' : ''} align="center">
            EMOCJE, UCZUCIA I KOLORY ZATRZYMANE W KAŻDYM KADRZE
          </Typography>
        </Box>
        <Typography variant="body1" align="justify" color="text.secondary" sx={{pb:2}}>
          Śluby, sesje zdjęciowe to znakomita okazja do tworzenia, odkrywania nowych miejsc, poznawania ciekawych ludzi, poszukiwania idealnego światła, rejestrowania wydarzeń pełnych autentycznych
          emocji. Fotograf ślubny w mojej definicji to osoba mająca we krwi kreatywność i umiejętność łatwego nawiązywania kontaktu z ludźmi, wnikliwy obserwator pozostający w cieniu wydarzeń i
          rejestrujący bieg zdarzeń z największą dyskrecją. Fotografia ślubna to pasja, którą rozwijam każdego dnia obserwując pracę najlepszych fotografów ślubnych w branży, poszukując nowych miejsc
          na niezapomniane sesje zdjęciowe, obserwując powstające i znikające trendy w fotografii ślubnej.
        </Typography>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{pb:2}}>
          Często mówimy o fotografowaniu sercem, jednak moim zdaniem świat sztuki, wrażliwość artystyczna, niezwykłość to nie wszystko. Fotograf ślubny chętnie śledzi premiery sprzętowe w świecie
          komputerów, aparatów, obiektywów, programów do obróbki zdjęć i sprzętu oświetleniowego. W ten sposób zdobywam informacje i doskonale mój warsztat, rozbudowywuję zaplecze sprzętowe, a to
          wszystko ogromnie ułatwia moją pracę. Stosowanie nowości technicznych w praktyce pozwala mi utrzymać dystans od zdjęć wykonanych przez innych uczestników ślubu. Fotografią ślubną zajmuję się
          już blisko dziesięć lat i uwielbiam miasto Kraków jako główne miejsce mojej działalności.
        </Typography>
        <Typography variant="body1" align="justify" color="text.secondary" sx={{pb:2}}>
          Chcę by wykonane zdjęcia ślubne wyglądały dobrze za rok, dwa i trzy lata. Upór i konsekwencja w dążeniu do wcześniej wyznaczonego celu pozwalają mi być w miejscu, w którym jestem i na pewno
          pozwolą pokonywać kolejne wyzwania i realizować nowe cele. W przyszłości chciałbym robić dokładnie to samo, co przez ostatnie kilka lat, tylko być w tym coraz lepszy. Wielokrotnie miałem
          przyjemność rozmawiać z parami, które w moich zdjęciach doceniły fotografowane ludzkie emocje, łzy wzruszenia podczas ceremonii, uśmiechy, radość z szalonej zabawy.
        </Typography>
        <Typography variant="body1" align="justify" color="text.secondary" sx={{pb:2}}>
          Pary te opowiadały mi o pozytywnym przyjęciu mojej osoby w gronie ich najbliższych znajomych i rodziny. Komplementowały żywe kolory i umiejętnie wykorzystane światło zarówno zastane jak i
          pochodzące z lamp błyskowych. To jak patrzę i jakie mam nastawienie ma ogromny wpływ na moją pracę. Pary wybierając fotografa najpierw patrzą na zdjęcia potem chcą poznać mnie jako człowieka
          by sprawdzić czy będą się dobrze czuć w moim towarzystwie. Nikt nie lubi stresu, dlatego nasze sesje zdjęciowe przebiegają w przyjemnej atmosferze. Zawsze planujemy nasze plenery, a podczas
          robienia zdjęć daję Wam pełną swobodę w wyrażaniu emocji i zachęcam do odsłonięcia części siebie.
        </Typography>
        <Typography variant="body1" align="justify" color="text.secondary" sx={{pb:4}}>
          Wybierając fotografa ślubnego kierujcie się sercem, ale weźcie też pod uwagę jego umiejętności, doświadczenie i zaangażowanie. Koniecznie skonfrontujcie to z Waszymi oczekiwaniami.
          Pamiętajmy, że tak ważnego wydarzenia jak Wasz ślub nie będzie drugi raz, a zdjęcia jakie zrobi Wam wybrany fotograf ślubny pozostaną z Wami na zawsze. Serdecznie zachęcam do odwiedzenia{" "}
          <Link href="/blog" passHref>
            <MuiLink underline="hover">mojego bloga</MuiLink>
          </Link>{" "}
          . Przeglądając umieszczone tam zdjęcia ocenisz mój sposób postrzegania otaczającego nas świata. Polecam Kraków i okolice. Serdecznie zapraszam.
        </Typography>
      </Container>
      <ParallaxImageFooter leadImage={pageImage} leadUrl="" height="70vh" />
      <Container>
        <ContactForm />
      </Container>
    </LayoutStartPage>
  );
};

export default Index;
