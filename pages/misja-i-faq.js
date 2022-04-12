import * as React from "react";
import LayoutSitePage from "../components/layoutSitePage";
import ContactForm from "../components/contactForm";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import Image from "next/image";
import FaqAccordion from "../components/faqAccordion";
import Grid from "@mui/material/Grid";
import ParallaxImageFooter from "../components/parallaxImageFooter";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import dekoracja_sali_weselnej_w_stylu_rustykalnym_osp_zawada_portfolio from "../public/static/portfolio/dekoracja_sali_weselnej_w_stylu_rustykalnym_osp_zawada_portfolio.jpg";
import sesja_slubna_strbskie_pleso_i_popradzki_staw_slowacja_portfolio from "../public/static/portfolio/sesja_slubna_strbskie_pleso_i_popradzki_staw_slowacja_portfolio.jpg";
import sala_weselna_nedan_pcim_reportaz_slubny_portfolio from "../public/static/portfolio/sala_weselna_nedan_pcim_reportaz_slubny_portfolio.jpg";
import wakacje_bukowina from "../public/static/portfolio/wakacje_bukowina.jpg";

const PageComponent = () => {
 
  const pageImage = process.env.staticImagesPath + "bazylika-bozego-ciala-krakow-fotoreportaz-slubny.jpg";
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <LayoutSitePage
      title="Plener ślubny Kraków"
      description="Fotograf ślubny z Krakowa. Zapraszam do zapoznania się z portfolio i skorzystania z mojej oferty. Gwarantuję wysokość jakość usług i konkurencyjne ceny."
      keywords="sesja zdjęciowa kraków,fotograf na wesele kraków"
      url="https://99foto.pl/misja-i-faq/"
      leadNames="ANNA i PIOTR"
      leadTitle="BAZYLIKA BOŻEGO CIAŁA KRAKÓW, FOTOREPORTAŻ ŚLUBNY"
      leadUrl="/bazylika-bozego-ciala-krakow-fotoreportaz-slubny"
      leadImage={pageImage}>
      <Container sx={{ pt:8, pb: 5 }}>
        <Box sx={{pt:13, display: { xs: "none", lg: "block", xl: "block" }}}></Box>
        <Box sx={{ py: 2 }}>
          <Typography variant="h1" className={matches ? 'quote-title' : ''} align="center">
            FAQ - MOJE ODPOWIEDZI NA CZĘSTO ZADAWANE PYTANIA
          </Typography>
        </Box>
        <Grid container spacing={2}>
        <Grid item xs={12} lg={8} xl={8}>
            <FaqAccordion />
          </Grid> 
          <Grid item xs={0} lg={4} xl={4} sx={{ display: { xs: 'none', lg: 'block', xl: 'block' }}}>
           
                <Image
                  alt="Sesja zdjęciowa w Krakowie"
                  src={sesja_slubna_strbskie_pleso_i_popradzki_staw_slowacja_portfolio}
                 
                />
              

            
                <Image
                  alt="Plener ślubny na Rynku w Krakowie"
                  src={dekoracja_sali_weselnej_w_stylu_rustykalnym_osp_zawada_portfolio}               
                />
            
           
                <Image
                  alt="fotograf na wesele kraków"
                  src={sala_weselna_nedan_pcim_reportaz_slubny_portfolio}
                />
           
          </Grid>
        </Grid>

        <Box sx={{ py: 2 }}>
          <Typography variant="h1" className={matches ? 'quote-title' : ''} align="center">
            MISJA - CZYLI NIE ODNAJDZIE WIĘCEJ WAS TA SAMA CHWILA
          </Typography>
        </Box>
       
            <Typography align="justify" color="text.secondary" sx={{ pb: 3 }}>
              Kiedy spojrzę w przeszłość na kilka ślubów, które miałem przyjemność fotografować, mogę powiedzieć jedno: każdy ślub jest inny. Para młoda i idealnie dopracowane detale są po prostu
              piękne. Goście weselni swoją radością sprawiają, że dzień ten staje się wyjątkowy, a całe tygodnie i miesiące przygotowań mają swój szczęśliwy finał w tym dniu pełnym uczuć, radości i
              wzruszeń.
            </Typography>
            <Typography align="justify" color="text.secondary" sx={{ pb: 3 }}>
              Zapytacie mnie dlaczego zajmuję się fotografią ślubną?
            </Typography>
            <Typography align="justify" color="text.secondary" sx={{ pb: 3 }}>
              Otóż chcę zatrzymać czas, sfotografować Twoich rodziców, trzymających się za ręce i wycierających łzy wzruszenia w kościelnej ławce. Taniec Twojej młodszej siostry z chłopakiem, którego
              być może poślubi już za trzy lata. Dzieci sąsiadów, które rosną bardzo, ale to bardzo szybko i Twój pierwszy już małżeński pocałunek. Twojego najlepszego przyjaciela wykonującego mocno
              wyćwiczony, jeszcze studniówkowy taneczny popis, a być może nawet byłego chłopaka, który ze łzą w oku przytrzyma Cię w objęciach trochę dłużej, korzystając z takiej okazji podczas
              składania życzeń ślubnych.
            </Typography>
            <Box sx={{pb:2}}>
            <Image
                  alt="fotograf na wesele kraków"
                  src={wakacje_bukowina}
                />
            </Box>
            <Typography align="justify" color="text.secondary" sx={{ pb: 3 }}>
              Masz jak w banku, że ślubny tort zniknie w czasie krótszym niż godzina, kwiaty zwiędną wkrótce po ceremonii, a suknia ślubna wróci do szafy rano następnego dnia. Ale zdjęcia - pomyśl -
              one zostaną na zawsze. Będą z wami kiedy narodzą się wasze dzieci, kiedy będziecie przechodzić przez największą w karierze małżeńskiej kłótnię. Zawsze będą przypominać wam jak bardzo się
              kochacie. Kiedy waszych rodziców już nie będzie z wami, zdacie sobie sprawę, że ślub to była ostatnia okazja na podziękowania i na wspólny taniec.
            </Typography>
            <Typography align="justify" color="text.secondary" sx={{ pb: 3 }}>
              Moją misją jest więc uwiecznienie tych wszystkich chwil, podarowanie Wam zdjęć w albumie, który przetrwa wieki i przypomni wam dlaczego chcieliście wydać tak idealne i tak bardzo drogie
              przyjęcie ślubne.
            </Typography>
            <Typography align="justify" color="text.secondary" sx={{ pb: 3 }}>
              Jeżeli planujesz swój ślub właśnie teraz to zapomnij o targach ślubnych, wyłącz internet i zamknij katalogi mody ślubnej. Popatrz na osobę z którą chcesz przejść przez życie. Przypomnij
              sobie dlaczego to robisz i pamiętaj o tym, żeby gdy dzień ślubu nadejdzie cieszyć się nim z całego serca. Zero stresu z powodu sukni ślubnej, pierwszego tańca, pocałunków na forum
              rodziny, czekoladowej fontanny czy kwiatów.
            </Typography>
            <Typography align="justify" color="text.secondary" sx={{ pb: 3 }}>
              Pamiętaj, kiedy impreza się skończy, będziecie już na zawsze razem otoczeni ludźmi, którzy doskonale was znają i kochają najbardziej na świecie. Wybierając mnie na Waszego fotografa
              ślubnego będziecie mieli też album pełny bezcennych zdjęć.
            </Typography>
            <Typography align="right" color="text.secondary" sx={{ pb: 3 }}>
              Pozdrawiam i zapraszam serdecznie do skorzystania z moich usług.
            </Typography>
            <Typography align="right" color="text.secondary" sx={{ pb: 3 }}>
              Tomasz Prokop - Fotograf Ślubny Kraków
            </Typography>
      </Container>
      <ParallaxImageFooter leadImage={pageImage} leadUrl="" height="70vh" />
      <Container>
        <ContactForm />
      </Container>
    </LayoutSitePage>
  );
};

export default PageComponent;
