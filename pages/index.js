import React from "react";
import LayoutStartPage from "../components/layoutStartPage";
import { Typography } from "@mui/material";
import ParallaxImageFooter from "../components/parallaxImageFooter";
import Container from "@mui/material/Container";
import Link from "next/link";
import MuiLink from "@mui/material/Link";
import Box from "@mui/material/Box";
import ImageCardGrid from "../components/imageCardGrid";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const Index = () => {
  const pageImage = process.env.staticImagesPath + "plener_slubny_na_rynku_w_krakowie.jpg";
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <LayoutStartPage
      title="Fotograf Ślubny Kraków ✔️ Tomasz Prokop Fotografia Ślubna"
      description="Kliknij ⬆️ sprawdź moje portfolio. Pełne emocji reportaże ślubne ❤️ piękne zdjęcia plenerowe. Serdecznie zapraszam. Fotograf ślubny Kraków."
      keywords="fotograf ślubny Kraków, fotograf na wesele, fotografia ślubna Kraków, zdjęcia plenerowe"
      url="https://99foto.pl"
      leadNames="PATRYCJA i KRZYSZTOF"
      leadTitle="PLENER ŚLUBNY NA RYNKU W KRAKOWIE"
      leadUrl="/plener-slubny-na-rynku-w-krakowie"
      leadImage={pageImage}
      slide={matches ? process.env.staticImagesPath + "lomnicki_staw_portfolio_start.jpg" : process.env.staticImagesPath + "ogrod_botaniczny.jpg"}
      menuNames=""
      menuTitle="">
      <Container sx={{ pb: 3 }}>
        <Box sx={{ py: 2 }}>
          <Typography variant="h1" className={matches ? "quote-title" : ""} align="center">
            FOTOGRAF ŚLUBNY KRAKÓW
          </Typography>
        </Box>    
        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 2 }}>
        Witam na mojej stronie internetowej. Poszukujesz fotografa ślubnego? Jeśli tak, to doskonale trafiłeś. Fotografia jest moją pasją odkąd pamiętam, śluby fotografuję już blisko dziesięć lat. Serdecznie zapraszam do odwiedzenia{" "}
          <Link href="/blog" passHref>
            <MuiLink underline="hover">mojego bloga</MuiLink>
          </Link>{" "}
          oraz obejrzenia{" "}
          <Link href="/reportaz-slubny-krakow" passHref>
            <MuiLink underline="hover">reportaży ślubnych</MuiLink>
          </Link>
          ,{" "}
          <Link href="/plener-slubny-krakow" passHref>
            <MuiLink underline="hover">plenerów ślubnych</MuiLink>
          </Link>
          ,{" "}
          <Link href="/sesja-narzeczenska-krakow" passHref>
            <MuiLink underline="hover">sesji narzeczeńskich</MuiLink>
          </Link>
          , zdjęć pełnych kolorów i autentycznych emocji. Moje prace wyróżnia reporterskie podejście do fotografii czyli jak najmniej ustawianych, reżyserowanych zdjęć, jak najwięcej kadrów
          przedstawiających emocje i spontaniczne reakcje. Oglądając moje prace sami ocenicie czy moje zdjęcia się Wam spodobają. Fotografuję w Krakowie i bliskich okolicach. Wspólnie znajdźmy chwilę,
          światło, kadr, zachowajmy je na zawsze.
        </Typography>
        <Box sx={{ py: 2 }}>
          <Typography variant="h1" className={matches ? "quote-title" : ""} align="center">
            POLECANE REPORTAŻE I SESJE ŚLUBNE
          </Typography>
        </Box>
        <ImageCardGrid />
      </Container>

      <ParallaxImageFooter leadImage={process.env.staticImagesPath + "sesja_slubna_jesienia.jpg"} leadUrl="" height="70vh" />

      <Container sx={{ py: 3 }}>
        <Typography variant="h1" className={matches ? "quote-title" : ""} align="center">
          ZNAJDŹMY CHWILĘ, ŚWIATŁO, KADR
        </Typography>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ py: 2 }}>
          Moja przygoda z fotografią ślubną rozpoczęła się blisko dziesięć lat temu. Mam nadzieję, że kilka poniższych akapitów pozwoli Wam zapoznać się z rzeczami, które uważam za niezwykle ważne w
          fotografii ślubnej, które zainspirowały mnie do spędzenia ogromnej ilości czasu w moim życiu na fotografowania ślubów w mój własny, niepowtarzalny sposób. Zdaję sobie sprawę, że kilka słów
          to często za mało, żeby napisać o ludziach, miłości, relacjach, fajnych miejscach i ciekawych rzeczach, które niesie ze sobą przygoda zwana fotografią ślubną. Fotografując przez wiele lat
          zauważyłem, że każdy ślub jest inny czasem chaotyczny i pełen akcji, czasem zaplanowany co do sekundy i mega spokojny, ale zawsze pełny emocji i niepowtarzalny. Pamiętajcie, że z
          przyjemnością rozpocznę z Wami przygodę fotografując Wasz dzień. Gwarantuję, że otrzymacie piękne zdjęcia, które będą przywoływać Wasze wspomnienia przez wiele lat.
        </Typography>

        <Typography variant="subtitle1" align="center">
          KOLOR I ŚWIATŁO
        </Typography>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ py: 2 }}>
          Sposób, w jaki oddaję światło i kolor, jest rzeczą nad którą od początku bardzo ciężko pracuję. Zawsze było dla mnie bardzo ważne, aby rozwinąć moją wizję i styl w coś, co naprawdę jest
          moje, co oznacza, że ​​zdjęcia ślubne wykonane przez innych fotografów nie będą wyglądać tak jak te zrobione przeze mnie na Waszym ślubie.
        </Typography>

        <Typography variant="subtitle1" align="center">
          MAGICZNE WYDARZENIA ZAMKNIĘTE W KAPSULE CZASU
        </Typography>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ py: 2 }}>
          Czy zgodzicie się ze mną, że zdjęcia są magiczne. W swojej naturze w sposób szczególny służą przyszłym pokoleniom chroniąc i zachowując Wasz ślub i wspomnienia na zawsze. Za każdym razem,
          gdy spojrzycie do albumu ślubnego, przypomnicie sobie obecne w dniu ślubu uczucia i emocje. Fotografie z tego najważniejszego dnia w życiu pomogą Wam zachować pamięć o ślubie i przekazać ją
          przyszłym pokoleniom. Pamiętajcie, że album ślubny to niewątpliwie taka mała kapsuła czasu, która pozwala Wam wrócić do dnia ślubu wtedy, kiedy tylko macie na to ochotę.
        </Typography>

        <Typography variant="subtitle1" align="center">
          EMOCJE I ENERGIA
        </Typography>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ py: 2 }}>
          Chcę dać Wam zdjęcia, które pokochacie na zawsze. Zdjęcia, które są znaczące, prawdziwe, pełne emocji i życia. Cieszcie się tym dniem z całego serca, dużo się uśmiechajcie, a kwestie
          organizacyjne w dniu ślubu zostawcie w gestii zaufanych osób trzecich. Takie podejście znacznie ułatwi moją pracę i zagwarantuję Wam wspaniałe zdjęcia.
        </Typography>

        <Typography variant="subtitle1" align="center">
          NIEZAPOMNIANE CHWILE I NIEOCZEKIWANE MOMENTY
        </Typography>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ py: 2 }}>
          Wasz dzień ślubu jest jednym z najważniejszych dni w Waszynm życiu. Zapraszacie całą rodzinę, wszystkich ulubionych znajomych, a wśród nich prawdziwych przyjaciół w jednym szczególnym
          miejscu, chcąc spędzić z nimi niesamowite chwile. Wszyscy wiemy o tym, że będą uściski, pocałunki, gorące życzenia, czasem wyciskające łzy z oczu przemówienia. Najlepsze momenty dzieją się
          nieoczekiwanie i bardzo często są nie do opisania. Moja praca jako fotografa ślubnego, polega na wyszukiwaniu tych ulotnych chwil i uchwyceniu ich na pięknych fotografiach.
        </Typography>

        <Typography variant="subtitle1" align="center">
          SZTUKA I KREATYWNOŚĆ
        </Typography>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ py: 2 }}>
          Dobre zdjęcie musi zawierać w sobie ogromną dawkę emocji i dlatego reportażowe podejście do fotografii ślubnej jest dla mnie szczególnie ważne. W trakcie reportażu nie spędzam czasu na
          pozowaniu ludzi, wykonywaniu setek zdjęć grupowych lub powtarzaniu momentów, które już się wydarzyły. Podczas sesji plenerowych, które prawie zawsze odbywają się w wybranym dniu po ślubie
          staram się zdobyć Wasze zaufanie, pomóc Wam odnaleźć pewność siebie przed obiektywem aparatu i przelać Wasze uczucia na fotografie w sposób kreatywny i niebanalny.
        </Typography>

        <Typography variant="subtitle1" align="center">
          MIŁOŚĆ I SZCZĘŚCIE
        </Typography>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ py: 2 }}>
          Jestem pewny, że chcecie mieć piękny wizualny zapis Waszego ślubu. Ślub zorganizowany przez Was jest szczególny, ponieważ został przecież zorganizowany według Waszego pomysłu, a napędu
          nadchodzącym wydarzeniom nadadzą najbliższe Wam osoby. Tego dnia jako fotograf ślubny chcę być tam dla Was. Chcę, aby miłość i szczęście między Wami zdominowało Wasze zdjęcia ślubne.
          Uchwycenie rzeczywistości, miłości i Waszego szczęścia w tym niezwykłym dniu jest dla mnie najważniejsze.
        </Typography>
      </Container>
      <ParallaxImageFooter leadImage={pageImage} leadUrl="" height="70vh" />
    </LayoutStartPage>
  );
};

export default Index;
