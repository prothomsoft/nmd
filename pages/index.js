import React from "react";
import LayoutStartPage from "../components/layoutStartPage";
import { Typography} from "@mui/material";
import ParallaxImageFooter from "../components/parallaxImageFooter";
import Container from "@mui/material/Container";
import Link from "next/link";
import ContactForm from "../components/contactForm";

const Index = () => {
  
  return (
    <LayoutStartPage
      title="Fotograf ślubny Kraków ✔️ Tomasz Prokop"
      description="Kliknij ⬆️ sprawdź moje portfolio. Pełne emocji reportaże ślubne ❤️ piękne zdjęcia plenerowe. Serdecznie zapraszam. Fotograf ślubny Kraków."
      keywords="fotograf ślubny Kraków, fotograf na wesele, fotografia ślubna Kraków, zdjęcia plenerowe"
      url="https://99foto.pl"
      leadNames="PATRYCJA i KRZYSZTOF"
      leadTitle="PLENER ŚLUBNY NA RYNKU W KRAKOWIE"
      leadUrl="/plener-slubny-na-rynku-w-krakowie"
      leadImage={process.env.staticImagesPath + "plener_slubny_na_rynku_w_krakowie.jpg"}
      slide={process.env.staticImagesPath + "lomnicki_staw_portfolio_start.jpg"}>

      <Container>
        <Typography variant="h6">FOTOGRAF ŚLUBNY KRAKÓW</Typography>
        <Typography>
          Mam na imię Tomek i jestem fotografem ślubnym. Mieszkam w Krakowie z moją żoną Anią i trójką kochanych dzieciaków. Fotografia ślubna od zawsze była moją największą pasją, która przy
          odrobinie szczęścia stała się moim sposobem na życie. Uwielbiam fotografować szczęśliwych ludzi, odwiedzać nowe miejsca i poszukiwać idealnego światła. Fotografię ślubną traktuję jako
          niesamowitą przygodę, która pozwala mi spełniać marzenia. Jestem przekonany, że najlepsze zdjęcia są jeszcze przede mną.
        </Typography>
        <Typography>
          Serdecznie zapraszam do odwiedzenia{" "}
          <Link href="/blog">
            <a>mojego bloga</a>
          </Link>{" "}
          i obejrzenia pełnych reportaży ślubnych, sesji zdjęciowych, zdjęć pełnych kolorów i autentycznych emocji. Moje prace wyróżnia reporterskie podejście do fotografii czyli jak najmniej
          ustawianych, reżyserowanych zdjęć, jak najwięcej kadrów przedstawiających emocje i spontaniczne reakcje. Oglądając moje prace sami ocenicie czy moje zdjęcia się Wam spodobają. Fotografuję w
          Krakowie i bliskich okolicach. Wspólnie znajdźmy chwilę, światło, kadr, zachowajmy je na zawsze.
        </Typography>
      </Container>

      <ParallaxImageFooter leadImage={process.env.staticImagesPath + "sesja_slubna_jesienia.jpg"} height="100vh" />

      <Container>
        <Typography variant="h6">FOTOGRAF ŚLUBNY KRAKÓW</Typography>
        <Typography>
          Mam na imię Tomek i jestem fotografem ślubnym. Mieszkam w Krakowie z moją żoną Anią i trójką kochanych dzieciaków. Fotografia ślubna od zawsze była moją największą pasją, która przy
          odrobinie szczęścia stała się moim sposobem na życie. Uwielbiam fotografować szczęśliwych ludzi, odwiedzać nowe miejsca i poszukiwać idealnego światła. Fotografię ślubną traktuję jako
          niesamowitą przygodę, która pozwala mi spełniać marzenia. Jestem przekonany, że najlepsze zdjęcia są jeszcze przede mną.
        </Typography>
        <Typography>
          Serdecznie zapraszam do odwiedzenia{" "}
          <Link href="/blog">
            <a>mojego bloga</a>
          </Link>{" "}
          i obejrzenia pełnych reportaży ślubnych, sesji zdjęciowych, zdjęć pełnych kolorów i autentycznych emocji. Moje prace wyróżnia reporterskie podejście do fotografii czyli jak najmniej
          ustawianych, reżyserowanych zdjęć, jak najwięcej kadrów przedstawiających emocje i spontaniczne reakcje. Oglądając moje prace sami ocenicie czy moje zdjęcia się Wam spodobają. Fotografuję w
          Krakowie i bliskich okolicach. Wspólnie znajdźmy chwilę, światło, kadr, zachowajmy je na zawsze.
        </Typography>        
      </Container>

      <Container>
        <ContactForm />
      </Container>

    </LayoutStartPage>
  );
};

export default Index;