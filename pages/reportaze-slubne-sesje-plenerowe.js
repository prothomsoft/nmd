import LayoutSitePage from "../components/layoutSitePage";
import ContactForm from "../components/contactForm";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import ParallaxImageFooter from "../components/parallaxImageFooter";
import { Typography } from "@mui/material";
import ImageCardGrid from "../components/imageCardGrid";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const PageComponent = () => {

  const pageImage = process.env.staticImagesPath + "sesja_slubna_jesienia.jpg";
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <LayoutSitePage
      title="Reportaż ślubny i sesja plenerowa, portfolio fotografa ślubnego"
      description="Portfolio fotografa ślubnego, w którym zobaczycie wybrane reportaże ślubne i sesje plenerowe. Zapraszam."
      keywords="reportaże ślubne i sesje plenerowe, portfolio fotografa ślubnego"
      url="https://99foto.pl/sesja-slubna-jesienia-palac-goetzow-okocimskich/"
      leadNames="IZABELA i ARKADIUSZ"
      leadTitle="SESJA ŚLUBNA JESIENIĄ - PAŁAC GOETZÓW"
      leadUrl="/sesja-slubna-jesienia-palac-goetzow-okocimskich"
      leadImage={pageImage}>
      <Container sx={{ pt:8, pb: 5 }}>
        <Box sx={{pt:13, display: { xs: "none", lg: "block", xl: "block" }}}></Box>
        <Box sx={{ py: 2 }}>
          <Typography variant="h1" className={matches ? 'quote-title' : ''} align="center">
            REPORTAŻE ŚLUBNE i SESJE PLENEROWE
          </Typography>
        </Box>
        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 2 }}>
        Moja przygoda z fotografią ślubną rozpoczęła się blisko dziesięć lat temu. Mam nadzieję, że kilka poniższych akapitów pozwoli Wam zapoznać się z rzeczami, które uważam za niezwykle ważne w
          fotografii ślubnej, które zainspirowały mnie do spędzenia ogromnej ilości czasu w moim życiu na fotografowania ślubów w mój własny, niepowtarzalny sposób. Zdaję sobie sprawę, że kilka słów
          to często za mało, żeby napisać o ludziach, miłości, relacjach, fajnych miejscach i ciekawych rzeczach, które niesie ze sobą przygoda zwana fotografią ślubną. Fotografując przez wiele lat
          zauważyłem, że każdy ślub jest inny czasem chaotyczny i pełen akcji, czasem zaplanowany co do sekundy i mega spokojny, ale zawsze pełny emocji i niepowtarzalny. Pamiętajcie, że z
          przyjemnością rozpocznę z Wami przygodę fotografując Wasz dzień. Gwarantuję, że otrzymacie piękne zdjęcia, które będą przywoływać Wasze wspomnienia przez wiele lat.
        </Typography>
        <ImageCardGrid />
        <Box sx={{ py: 2 }}>
          <Typography variant="h1" className={matches ? 'quote-title' : ''} align="center">
            ZNAJDŹMY CHWILĘ, ŚWIATŁO, KADR
          </Typography>
        </Box>
        <Typography variant="body1" align="justify" color="text.secondary">
          Sposób, w jaki oddaję światło i kolor, jest rzeczą nad którą od początku bardzo ciężko pracuję. Zawsze było dla mnie bardzo ważne, aby rozwinąć moją wizję i styl w coś, co naprawdę jest
          moje, co oznacza, że ​​zdjęcia ślubne wykonane przez innych fotografów nie będą wyglądać tak jak te zrobione przeze mnie na Waszym ślubie.
        </Typography>
        <Box sx={{ p: 2 }}>
          <Typography variant="subtitle1" align="center">
            MAGICZNE WYDARZENIA ZAMKNIĘTE W KAPSULE CZASU
          </Typography>
        </Box>
        <Typography variant="body1" align="justify" color="text.secondary">
          Czy zgodzicie się ze mną, że zdjęcia są magiczne. W swojej naturze w sposób szczególny służą przyszłym pokoleniom chroniąc i zachowując Wasz ślub i wspomnienia na zawsze. Za każdym razem,
          gdy spojrzycie do albumu ślubnego, przypomnicie sobie obecne w dniu ślubu uczucia i emocje. Fotografie z tego najważniejszego dnia w życiu pomogą Wam zachować pamięć o ślubie i przekazać ją
          przyszłym pokoleniom. Pamiętajcie, że album ślubny to niewątpliwie taka mała kapsuła czasu, która pozwala Wam wrócić do dnia ślubu wtedy, kiedy tylko macie na to ochotę.
        </Typography>
        <Box sx={{ p: 2 }}>
          <Typography variant="subtitle1" align="center">
            EMOCJE I ENERGIA
          </Typography>
        </Box>
        <Typography variant="body1" align="justify" color="text.secondary">
          Chcę dać Wam zdjęcia, które pokochacie na zawsze. Zdjęcia, które są znaczące, prawdziwe, pełne emocji i życia. Cieszcie się tym dniem z całego serca, dużo się uśmiechajcie, a kwestie
          organizacyjne w dniu ślubu zostawcie w gestii zaufanych osób trzecich. Takie podejście znacznie ułatwi moją pracę i zagwarantuję Wam wspaniałe zdjęcia.
        </Typography>
        <Box sx={{ p: 2 }}>
          <Typography variant="subtitle1" align="center">
            NIEZAPOMNIANE CHWILE I NIEOCZEKIWANE MOMENTY
          </Typography>
        </Box>
        <Typography variant="body1" align="justify" color="text.secondary">
          Wasz dzień ślubu jest jednym z najważniejszych dni w Waszynm życiu. Zapraszacie całą rodzinę, wszystkich ulubionych znajomych, a wśród nich prawdziwych przyjaciół w jednym szczególnym
          miejscu, chcąc spędzić z nimi niesamowite chwile. Wszyscy wiemy o tym, że będą uściski, pocałunki, gorące życzenia, czasem wyciskające łzy z oczu przemówienia. Najlepsze momenty dzieją się
          nieoczekiwanie i bardzo często są nie do opisania. Moja praca jako fotografa ślubnego, polega na wyszukiwaniu tych ulotnych chwil i uchwyceniu ich na pięknych fotografiach.
        </Typography>
        <Box sx={{ p: 2 }}>
          <Typography variant="subtitle1" align="center">
            SZTUKA I KREATYWNOŚĆ
          </Typography>
        </Box>
        <Typography variant="body1" align="justify" color="text.secondary">
          Dobre zdjęcie musi zawierać w sobie ogromną dawkę emocji i dlatego reportażowe podejście do fotografii ślubnej jest dla mnie szczególnie ważne. W trakcie reportażu nie spędzam czasu na
          pozowaniu ludzi, wykonywaniu setek zdjęć grupowych lub powtarzaniu momentów, które już się wydarzyły. Podczas sesji plenerowych, które prawie zawsze odbywają się w wybranym dniu po ślubie
          staram się zdobyć Wasze zaufanie, pomóc Wam odnaleźć pewność siebie przed obiektywem aparatu i przelać Wasze uczucia na fotografie w sposób kreatywny i niebanalny.
        </Typography>
        <Box sx={{ p: 2 }}>
          <Typography variant="subtitle1" align="center">
            MIŁOŚĆ I SZCZĘŚCIE
          </Typography>
        </Box>
        <Typography variant="body1" align="justify" color="text.secondary">
          Jestem pewny, że chcecie mieć piękny wizualny zapis Waszego ślubu. Ślub zorganizowany przez Was jest szczególny, ponieważ został przecież zorganizowany według Waszego pomysłu, a napędu
          nadchodzącym wydarzeniom nadadzą najbliższe Wam osoby. Tego dnia jako fotograf ślubny chcę być tam dla Was. Chcę, aby miłość i szczęście między Wami zdominowało Wasze zdjęcia ślubne.
          Uchwycenie rzeczywistości, miłości i Waszego szczęścia w tym niezwykłym dniu jest dla mnie najważniejsze.
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
