import * as React from "react";
import LayoutSitePage from "../components/layoutSitePage";
import ContactForm from "../components/contactForm";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Link from "next/link";
import Image from "next/image";
import ParallaxImageFooter from "../components/parallaxImageFooter";
import portret_panny_mlodej from "../public/static/portfolio/portret_panny_mlodej.jpg";
import aleksandra_mszana_dolna from "../public/static/portfolio/aleksandra_mszana_dolna.jpg";
import plener_0002 from "../public/static/portfolio/plener_0002.jpg";
import pomysl_na_sesje_slubna_zimowa_w_krakowie from "../public/static/portfolio/pomysl_na_sesje_slubna_zimowa_w_krakowie.jpg";

const PageComponent = () => {
  const [hovImg1, setHovImg1] = React.useState({ opacity: 1, transition: ".3s", cursor: "pointer", pb: 2 });
  const [hovImg2, setHovImg2] = React.useState({ opacity: 1, transition: ".3s", cursor: "pointer", pb: 2 });
  const [hovImg3, setHovImg3] = React.useState({ opacity: 1, transition: ".3s", cursor: "pointer", pb: 2 });
  const [hovImg4, setHovImg4] = React.useState({ opacity: 1, transition: ".3s", cursor: "pointer", pb: 2 });

  const pageImage = process.env.staticImagesPath + "ogrod_botaniczny.jpg";

  return (
    <LayoutSitePage
      title="Oferta fotografii ślubnej i sesji zdjęciowej"
      description="Oferta fotografii ślubnej i sesji zdjęciowej. Kraków i bliskie okolice. Żywe kolory i autentyczne emocje. Kliknij i sprawdź moje portfolio."
      keywords="oferta fotografii ślubnej, oferta sesji zdjęciowej, kraków, wieliczka, jordanów, miechów, tarnów, skawina"
      url="https://99foto.pl/oferta-fotografii-slubnej/"
      leadNames="DAJANA i SYLWESTER"
      leadTitle="OGRÓD BOTANICZNY W KRAKOWIE, ŚLUBNA SESJA ZDJĘCIOWA"
      leadUrl="/ogrod-botaniczny-w-krakowie-slubna-sesja-zdjeciowa"
      leadImage={pageImage}>
      <Container sx={{ pt: 21, pb: 5 }}>
        <Box sx={{ py: 2 }}>
          <Typography variant="h1" className="quote-title">
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
          <Grid item md={4} sx={{ display: { xs: 'none', lg: 'block', xl: 'block' }}}>
            <Box sx={hovImg1}>
              <Link href="/bazylika-bozego-ciala-krakow-fotoreportaz-slubny" passHref>
                <Image
                  alt="portret panny młodej"
                  src={portret_panny_mlodej}
                  onMouseEnter={() => setHovImg1({ opacity: 0.7, transition: ".3s", cursor: "pointer", pb: 2 })}
                  onMouseLeave={() => setHovImg1({ opacity: 1, transition: ".3s", cursor: "pointer", pb: 2 })}
                />
              </Link>
            </Box>

            <Box sx={hovImg2}>
              <Link href="/dworek-fantazja-skomielna-biala-i-slub-w-stylu-glamour">
                <Image
                  alt="sala weselna Mszana Dolna"
                  src={aleksandra_mszana_dolna}
                  onMouseEnter={() => setHovImg2({ opacity: 0.7, transition: ".3s", cursor: "pointer", pb: 2 })}
                  onMouseLeave={() => setHovImg2({ opacity: 1, transition: ".3s", cursor: "pointer", pb: 2 })}
                />
              </Link>
            </Box>
          </Grid>
        </Grid>

        <Box sx={{ py: 2 }}>
          <Typography variant="h1" className="quote-title">
            OFERTA SESJI ZDJĘCIOWEJ
          </Typography>
        </Box>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          <Grid item md={4} sx={{ display: { xs: 'none', lg: 'block', xl: 'block' }}}>
            <Box sx={hovImg3}>
              <Link href="/ogrod-botaniczny-w-krakowie-slubna-sesja-zdjeciowa">
                <Image
                  alt="sesja plenerowa w ogrodzie botanicznym"
                  src={plener_0002}
                  onMouseEnter={() => setHovImg3({ opacity: 0.7, transition: ".3s", cursor: "pointer", pb: 2 })}
                  onMouseLeave={() => setHovImg3({ opacity: 1, transition: ".3s", cursor: "pointer", pb: 2 })}
                />
              </Link>
            </Box>

            <Box sx={hovImg4}>
              <Link href="/sesja-slubna-jesienia-palac-goetzow-okocimskich" passHref>
                <Image
                  alt="sesja slubna palac goetzow okocimskich"
                  src={pomysl_na_sesje_slubna_zimowa_w_krakowie}
                  onMouseEnter={() => setHovImg4({ opacity: 0.7, transition: ".3s", cursor: "pointer", pb: 2 })}
                  onMouseLeave={() => setHovImg4({ opacity: 1, transition: ".3s", cursor: "pointer", pb: 2 })}
                />
              </Link>
            </Box>
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
