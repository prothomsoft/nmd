import * as React from "react";
import LayoutSitePage from "../components/layoutSitePage";
import ContactForm from "../components/contactForm";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import ParallaxImageFooter from "../components/parallaxImageFooter";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import portret_panny_mlodej from "../public/static/portfolio/portret_panny_mlodej.jpg";
import aleksandra_mszana_dolna from "../public/static/portfolio/aleksandra_mszana_dolna.jpg";
import plener_0002 from "../public/static/portfolio/plener_0002.jpg";
import pomysl_na_sesje_slubna_zimowa_w_krakowie from "../public/static/portfolio/pomysl_na_sesje_slubna_zimowa_w_krakowie.jpg";

const PageComponent = () => {
  const pageImage = process.env.staticImagesPath + "dom-weselny-biala-perla-radziemice-reportaz-slubny.jpg";
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <LayoutSitePage
      title="Oferta fotografii ślubnej i sesji zdjęciowej"
      description="Oferta fotografii ślubnej i sesji zdjęciowej. Kraków i bliskie okolice. Żywe kolory i autentyczne emocje. Kliknij i sprawdź moje portfolio."
      keywords="oferta fotografii ślubnej, oferta sesji zdjęciowej, kraków, wieliczka, jordanów, miechów, tarnów, skawina"
      url="https://99foto.pl/oferta-fotografii-slubnej/"
      leadNames="ŻANETA i SEBASTIAN"
      leadTitle="DOM WESELNY BIAŁA PERŁA RADZIEMICE, REPORTAŻ ŚLUBNY"
      leadUrl="/dom-weselny-biala-perla-radziemice-reportaz-slubny"
      leadImage={pageImage}>
      <Container sx={{ pt: 8, pb: 5 }}>
        <Box sx={{ pt: 13, display: { xs: "none", lg: "block", xl: "block" } }}></Box>
        <Box sx={{ py: 2 }}>
          <Typography variant="h1" className={matches ? "quote-title" : ""} align="center">
            OFERTA FOTOGRAFII ŚLUBNEJ
          </Typography>
        </Box>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          <Grid item xs={12} lg={8} xl={8}>
            <Typography variant="h5" align="center" sx={{ pb: 2 }}>
              REPORTAŻ ŚLUBNY OBEJMUJĄCY
            </Typography>

            <Typography variant="body1" align="center" color="text.secondary" sx={{ pb: 2 }}>
              przygotowania, błogosławieństwo
            </Typography>
            <Typography variant="body1" align="center" color="text.secondary" sx={{ pb: 2 }}>
              ceremonię w kościele lub USC
            </Typography>
            <Typography variant="body1" align="center" color="text.secondary" sx={{ pb: 2 }}>
              przyjęcie weselne do oczepin włącznie (do godz. 1.00)
            </Typography>
            <Typography variant="body1" align="center" color="text.secondary" sx={{ pb: 6 }}>
              sesję ślubną w wybranym dniu po ślubie
            </Typography>

            <Typography variant="h5" align="center" sx={{ pb: 2 }}>
              OTRZYMUJECIE
            </Typography>
            <Typography variant="body1" align="center" color="text.secondary" sx={{ pb: 2 }}>
              fotoksiążkę - minimum 140 stron w twardej oprawie, format 30x30cm
            </Typography>
            <Typography variant="body1" align="center" color="text.secondary" sx={{ pb: 2 }}>
              pendrive w etui - minimum 450 zdjęć poddanych starannej obróbce graficznej
            </Typography>
            <Typography variant="body1" align="center" color="text.secondary" sx={{ pb: 2 }}>
              dojazd w dniu ślubu GRATIS
            </Typography>
            <Typography variant="body1" align="center" color="text.secondary" sx={{ pb: 2 }}>
              internetową galerię zdjęć w strefie klienta zabezpieczoną hasłem
            </Typography>
          </Grid>
          <Grid item md={4} sx={{ display: { xs: "none", lg: "block", xl: "block" } }}>
            <Image alt="portret panny młodej" src={portret_panny_mlodej} />
            <Image alt="sala weselna Mszana Dolna" src={aleksandra_mszana_dolna} />
          </Grid>
        </Grid>

        <Box sx={{ py: 2 }}>
          <Typography variant="h1" className={matches ? "quote-title" : ""} align="center">
            OFERTA SESJI ZDJĘCIOWEJ
          </Typography>
        </Box>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          <Grid item md={4} sx={{ display: { xs: "none", lg: "block", xl: "block" } }}>
            <Image alt="sesja plenerowa w ogrodzie botanicznym" src={plener_0002} />
            <Image alt="sesja slubna palac goetzow okocimskich" src={pomysl_na_sesje_slubna_zimowa_w_krakowie} />
          </Grid>
          <Grid item xs={12} lg={8} xl={8}>
            <Typography variant="h5" align="center" sx={{ pb: 2 }}>
              SESJA ZDJĘCIOWA OBEJMUJĄCA
            </Typography>
            <Typography variant="body1" align="center" color="text.secondary" sx={{ pb: 2 }}>
              trzy godziny fotografowania
            </Typography>
            <Typography variant="body1" align="center" color="text.secondary" sx={{ pb: 6 }}>
              dwa lub trzy wybrane miejsca plenerowe
            </Typography>
            <Typography variant="h5" align="center" sx={{ pb: 2 }}>
              OTRZYMUJECIE
            </Typography>
            <Typography variant="body1" align="center" color="text.secondary" sx={{ pb: 2 }}>
              pendrive w etui - minimum 80 zdjęć poddanych starannej obróbce graficznej
            </Typography>
            <Typography variant="body1" align="center" color="text.secondary" sx={{ pb: 2 }}>
              dojazd do 30 km na sesję zdjęciową GRATIS
            </Typography>
            <Typography variant="body1" align="center" color="text.secondary" sx={{ pb: 2 }}>
              internetową galerię zdjęć w strefie klienta zabezpieczoną hasłem
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <ParallaxImageFooter leadImage={pageImage} leadUrl="" height="70vh" />
      <Container>
        <ContactForm />
      </Container>
    </LayoutSitePage>
  );
};

export default PageComponent;
