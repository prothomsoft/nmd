import LayoutSitePage from "../components/layoutSitePage";
import ContactForm from "../components/contactForm";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import ParallaxImageFooter from "../components/parallaxImageFooter";
import Link from "next/link";
import Image from "next/image";
import MuiLink from "@mui/material/Link";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import dekoracja_sali_weselnej_w_stylu_rustykalnym_osp_zawada_portfolio from "../public/static/portfolio/dekoracja_sali_weselnej_w_stylu_rustykalnym_osp_zawada_portfolio.jpg";
import portfolio_0013 from "../public/static/portfolio/portfolio_0013.jpg";
import portfolio_0001 from "../public/static/portfolio/portfolio_0001.jpg";
import sala_weselna_nedan_pcim_reportaz_slubny_portfolio from "../public/static/portfolio/sala_weselna_nedan_pcim_reportaz_slubny_portfolio.jpg";
import portret_panny_mlodej from "../public/static/portfolio/portret_panny_mlodej.jpg";
import portfolio_0021 from "../public/static/portfolio/portfolio_0021.jpg";
import portfolio_2021_2 from "../public/static/portfolio/portfolio_2021_2.jpg";
import portfolio_0015 from "../public/static/portfolio/portfolio_0015.jpg";
import slubne_portfolio_2 from "../public/static/portfolio/slubne_portfolio_2.jpg";
import martyna_slub_tesla from "../public/static/portfolio/martyna_slub_tesla.jpg";
import patrycja_slub from "../public/static/portfolio/patrycja_slub.jpg";
import dworzyszcze_wola_reportaz_slubny_pod_krakowem from "../public/static/portfolio/dworzyszcze_wola_reportaz_slubny_pod_krakowem.jpg";
import portfolio_0022 from "../public/static/portfolio/portfolio_0022.jpg";
import wesele_na_polu_golfowym_w_paczoltowicach_portfolio from "../public/static/portfolio/wesele_na_polu_golfowym_w_paczoltowicach_portfolio.jpg";
import portfolio_0017 from "../public/static/portfolio/portfolio_0017.jpg";
import slubne_portfolio_1 from "../public/static/portfolio/slubne_portfolio_1.jpg";
import aleksandra_mszana_dolna from "../public/static/portfolio/aleksandra_mszana_dolna.jpg";
import beata_marcin_mszana_dolna_portfolio from "../public/static/portfolio/beata_marcin_mszana_dolna_portfolio.jpg";

const PageComponent = () => {
  const pageImage = process.env.staticImagesPath + "plener_slubny_park_mogilany.jpg";
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <LayoutSitePage
      title="Reportaż ślubny Kraków"
      description="Reportaż ślubny Kraków, chwila, światło i kadr. Reportaż ślubny pełny kolorów i autentycznych emocji."
      keywords="reportaż ślubny kraków, zdjęcia ślubne, ślub w plenerze"
      url="https://99foto.pl/reportaz-slubny-krakow/"
      leadNames="ANNA i TOMASZ"
      leadTitle="WYMARZONY PLENER ŚLUBNY W KRAKOWIE, SPRAWDZONE MIEJSCA"
      leadUrl="/wymarzony-plener-slubny-w-krakowie-sprawdzone-miejsca"
      leadImage={pageImage}>
      <Container sx={{ pt:8, pb: 5 }}>
        <Box sx={{pt:13, display: { xs: "none", lg: "block", xl: "block" }}}></Box>
        
        <Box sx={{ py: 2 }}>
          <Typography variant="h1" className={matches ? 'quote-title' : ''} align="center">
            REPORTAŻ ŚLUBNY KRAKÓW
          </Typography>
        </Box>

        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 2 }}>
          Kocham eksperymenty, czerpanie esencji z przemijających trendów, konsekwencję w dążeniu do celu, lubię mieć plan nie pozwalający wkraść się przypadkowi. Reportaż ślubny to dla mnie pasja i
          weekendowa odskocznia od codziennej korporacyjnej rzeczywistości. Reportaż ślubny to zależność pomiędzy czasem ekspozycji, przysłoną i czułością ISO. Reportaż ślubny to jednocześnie
          zależnośc pomiędzy chwilą, światłem i kadrem. W obu przypadkach jest to zawsze kompromis poparty pomysłem i doskonałym warsztatem, który pozwala ten pomysł zrealizować.
        </Typography>

        <Image alt="Dekoracja sali weselnej w stylu rustykalnym" src={dekoracja_sali_weselnej_w_stylu_rustykalnym_osp_zawada_portfolio} />
        <Typography variant="body1" align="justify" color="text.secondary" sx={{ py: 2 }}>
          Reportaż ślubny to moim zdaniem przede wszystkim reportaż i temat człowieka w kadrze. Bez niego nie ma co mówić o uczuciach, radości, łzach wzruszenia, słowach, które układają się tworząc
          chwile, które chcemy zatrzymać na wieki. Światło to według mojej definicji kontekst. Nadaje ono miejscu charakter, tworzy tło dla wydarzeń i pozwala eksponować emocje. Kadr to wiedza, setki
          przeglądniętych zdjęć i budowane latami poczucie estetyki. Reportaż ślubny wykorzystuje te narzędzia tworząc opowieść o ludziach, miejscach, wydarzeniach i emocjach.
        </Typography>

        <Image alt="Miejsca, wydarzenia, emocje w fotografii ślubnej" src={portfolio_0013} />
        <Typography variant="body1" align="justify" color="text.secondary" sx={{ py: 2 }}>
          Każde zdjęcie ślubne zaczyna się od pomysłu. To zwykle konfrontacja pomiędzy powstałym w naszej głowie ideałem i możliwościami jakie stwarza nam zastana sytuacja. Sprzęt fotograficzny jest
          na pewno ważny, ale nie przeceniajmy jego wartości. W dzisiejszych czasach, ludzie bardzo często posługują się doskonałymi aparatami i obiektywami.
        </Typography>

        <Image alt="Ogromne możliwości w fotografii ślubnej" src={portfolio_0001} />
        <Typography variant="body1" align="justify" color="text.secondary" sx={{ py: 2 }}>
          Pamiętajmy jednak, że osoba zajmująca się fotografią ślubną to osoba, która poświęciła setki godzin na odkrywanie nowych technik, doskonalenie warsztatu, podpatrywanie mistrzów, próby i
          błędy, analizowanie sytuacji i wyciąganie wynikających z nich wniosków. Kilka lat bacznego obserwowania rynku fotografii ślubnej, pasja i upór w dążeniu do celu z pewnością pozwoliło mi
          stworzyć zdjęcia i wypracować styl warty Waszej uwagi. W trakcie reportażu lubię obserwować wydarzenia, sporadycznie wyrywam się z drobnymi sugestiami.
        </Typography>

        <Image alt="Własny styl w fotografii ślubnej" src={sala_weselna_nedan_pcim_reportaz_slubny_portfolio} />
        <Typography variant="body1" align="justify" color="text.secondary" sx={{ py: 2 }}>
          Mój reportaż ślubny wciąga osobę oglądającą w ciąg wydarzeń, tak by mogła ona poczuć to, co czują osoby będące na zdjęciach. Uważam, że jestem na Waszym ślubie by dokumentować ten ważny
          dzień, pokazywać, że jestem tam dla Was i będę opowiadał o Was. Staram się uchwycić Was takimi, jakimi jesteście. Moje rozmowy z Wami w dniu ślubu czy sesji zdjęciowych są tylko i wyłącznie
          towarzyskie. Jestem fanem autentycznych emocji. Staram się nie prosić o uśmiech i cierpliwie czekam, aż przyjdzie on sam. W mojej pracy fotografa ślubnego kieruję się planem, doświadczeniem,
          ograniczając przypadek do minimum.
        </Typography>

        <Image alt="Autentyczne emocje w fotografii ślubnej" src={portret_panny_mlodej} />
        <Typography variant="body1" align="justify" color="text.secondary" sx={{ py: 2 }}>
          Ślub to najpiękniejszy i najszczęśliwszy dzień w Waszym życiu, a moim zadaniem jest zatrzymać w kadrze coś niesamowitego czyli Waszą miłość. Dlatego właśnie reportaż ślubny stał się moją
          pasją i drogą przez życie. Autentyczne emocje to znajdziecie oglądając moje reportaże ślubne. Staram się, abyście po latach, wertując zdjęcia w albumie ślubnym mogli odnaleźć Wasze emocje i
          wrócić do niesamowitych chwil dnia Waszego ślubu.
        </Typography>

        <Image alt="Zdjęcia pełne kolorów i autentycznych emocji" src={portfolio_0021} />
        <Typography variant="body1" align="justify" color="text.secondary" sx={{ py: 2 }}>
          Serdecznie zapraszam do odwiedzenia{" "}
          <Link href="/blog" passHref>
            <MuiLink underline="hover">mojego bloga</MuiLink>
          </Link>{" "}
          i obejrzenia pełnych reportaży ślubnych, sesji zdjęciowych, zdjęć pełnych kolorów i autentycznych emocji. Oglądając moje prace sami ocenicie czy moja definicja stylu w fotografii ślubnej
          będzie odpowiadać Waszym preferencjom. Wspólnie znajdźmy chwilę, światło, kadr, zachowajmy je na zawsze.
        </Typography>

        <Image alt="reportaż ślubny, Wasza miłość zatrzymana na zdjęciach" src={portfolio_2021_2} />

        <Box sx={{ py: 2 }}>
          <Typography variant="h1" className={matches ? 'quote-title' : ''} align="center">
            REFERENCJE - FACEBOOK
          </Typography>
        </Box>
        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 2 }}>
          Nie jestem pewna, czy Tomek zasługuje na 5 gwiazdek... bo w naszej opinii należy Mu się znacznie więcej! Niekrępująca atmosfera, profesjonalizm i czujne oko obserwatora były cechami, których
          szukałam u fotografa ślubnego i które z pewnością znalazłam u Tomka. Piękne zdjęcia jednej z koleżanek nakłoniły nas do zmiany fotografa ślubnego na miesiąc przed weselem, ale dziś patrząc
          na nasze fotografie wiem, że ta szalona decyzja była strzałem w dziesiątkę! Każdej parze poszukującej fotografa ślubnego z pełnym przekonaniem polecamy Tomasza - choć reportaże na Jego blogu
          są chyba wystarczającą rekomendacją :) Raz jeszcze dziękujemy Ci Tomku za piękne i szybko oddane zdjęcia, współpracę z Tobą będziemy zawsze miło wspominać!{" "}
          <Link href="/sala-weselna-nedan-pcim-reportaz-slubny" passHref>
            <MuiLink underline="hover">Anna i Krzysztof</MuiLink>
          </Link>
          .
        </Typography>

        <Image alt="sala weselna Nedan Pcim" src={portfolio_0015} />
        <Typography variant="body1" align="justify" color="text.secondary" sx={{ py: 2 }}>
          Tomku Twoje zdjęcia pokazują Twoją pasje i zaangażowanie, pełen profesjonalizm i pracę jaką wkładasz w to aby były nietuzinkowe. Świetna gra świateł, idealnie dobrane kolory i bardzo
          trafione czarnobiałe fotografie. Pokazałeś na zdjęciach nas takich jacy jesteśmy, a to chyba najpiękniejsze.{" "}
          <Link href="/palac-goetz-wesele-plener-slubny" passHref>
            <MuiLink underline="hover">Anna i Paweł</MuiLink>
          </Link>
        </Typography>

        <Image alt="piękne zdjęcia, pełne emocji reportaże ślubne" src={slubne_portfolio_2} />
        <Typography variant="body1" align="justify" color="text.secondary" sx={{ py: 2 }}>
          Tomek zajmuje się fotografią ślubną z pasją, robi świetne zdjęcia, a do tego zna sie na tej sztuce! Poza tym jest wspaniałym, uśmiechniętym człowiekiem i praca z nim to czysta przyjemność
          :-) słyszałam, że najlepszy aparaciarz to taki, na którego nie zwraca się uwagi i Tomek taki jest. Cichaczem pstryka fotki i przez to są naturalne, a na plenerze daje mnóstwo super pomysłów
          :-) dziękujemy Tomku za zdjęcia ślubne i wczorajszy plener (to był dla nas z Pawłem wspaniały prezent na rocznice) !!!{" "}
          <Link href="/kasia-i-pawel-zimowa-sesja-slubna-w-gorach" passHref>
            <MuiLink underline="hover">Kasia i Paweł</MuiLink>
          </Link>
          .
        </Typography>

        <Image alt="samochód ślubny tesla" src={martyna_slub_tesla} />
        <Typography variant="body1" align="justify" color="text.secondary" sx={{ py: 2 }}>
          Serdecznie polecamy Tomka! Świetny, bardzo profesjonalny fotograf, a jednoczesnie przesympatyczny i zawsze uśmiechnięty człowiek. Zdjęcia gotowe w ekspresowym tempie, a każde z nich
          wyjątkowe. Pozostaną dla nas przepiękną pamiątką na zawsze! Tomku, to była prawdziwa przyjemność z Tobą współpracować! Bardzo dziękujemy za wszystko! Maria i Amaury
        </Typography>

        <Image alt="ślub w hotelu kasprowy zakopane" src={patrycja_slub} />
        <Typography variant="body1" align="justify" color="text.secondary" sx={{ py: 2 }}>
          W każdym calu zajebisty fotograf, a przede wszystkim człowiek!!! Polecam z czystym sumieniem. Jeżeli ktoś oczekuje pełnego zaangażowania, precyzji, kompetencji, sprytnego oka oraz wielu
          wielu innych drobnych jak i większych zdolności od fotografa - to właśnie znalazł odpowiednią osobę! Jeżeli chcesz aby fotograf plątał Ci się pod nogami albo szturchał Cię bez słowa
          przepraszam, to tutaj takiej osoby nie znajdziesz. Tomek, to ciepły człowiek o wielkim sercu do swojej pasji. Zrobi wszystko, żeby zachować Twoje najpiękniejsze chwile w życiu!{" "}
          <Link href="/paulina-i-bartek-sesja-poslubna-kasprowy-wierch-i-nosal-zakopane" passHref>
            <MuiLink underline="hover">Paulina i Bartek</MuiLink>
          </Link>
          .
        </Typography>

        <Image alt="wesele w stylu boho i rustykalnym" src={dworzyszcze_wola_reportaz_slubny_pod_krakowem} />
        <Typography variant="body1" align="justify" color="text.secondary" sx={{ py: 2 }}>
          Tak jak już wiele osób pisało - Tomek to profesjonalista w każdym calu! W niesamowity sposób uwiecznia na zdjęciach najważniejsze chwile – pełne wzruszeń, pozytywnych emocji i radości.
          Wtapia się w gości, dzięki czemu zdjęcia są mega naturalne. Stwarza genialną atmosferę, jest przesympatyczny i ciągle uśmiechnięty – praca z Nim to sama przyjemność! A zdjęcia dostarcza
          błyskawicznie! Tomku, raz jeszcze dziękujemy za przepiękne zdjęcia, dzięki którym wspomnienia powracają! Wszystkim gorąco polecamy!{" "}
          <Link href="/sesja-zdjeciowa-kopiec-kraka-przegorzaly-kryspinow" passHref>
            <MuiLink underline="hover">Natalia i Tomasz</MuiLink>
          </Link>
          .
        </Typography>

        <Image alt="sesja zdjęciowa kopiec kraka" src={portfolio_0022} />
        <Typography variant="body1" align="justify" color="text.secondary" sx={{ py: 2 }}>
          Piękne zdjęcia i pełen profesjonalizm. Dziękujemy jeszcze raz za wspaniałą współprace. Szczerze polecam.{" "}
          <Link href="/hotel-lenart-wieliczka-turkusowy-cadillac-de-ville" passHref>
            <MuiLink underline="hover">Monika i Mariusz</MuiLink>
          </Link>
          .
        </Typography>

        <Image alt="wesele na polu golfowym w Paczółtowicach" src={wesele_na_polu_golfowym_w_paczoltowicach_portfolio} />
        <Typography variant="body1" align="justify" color="text.secondary" sx={{ py: 2 }}>
          Serdecznie polecamy Tomka! To świetny, niezwykle profesjonalny fotograf, który jest zaangażowany w swoją pracę, a przy tym jest przesympatyczny i zawsze uśmiechnięty. Zdjęcia otrzymaliśmy w
          ekspresowym tempie, na każdym z nich Tomek uchwycił piękne chwile z naszego dnia. Zdjęcia są przepiękną pamiątką! Tomku, to była przyjemność z Tobą współpracować! Jeszcze raz dziękujemy za
          przepiękne zdjęcia!{" "}
          <Link href="/bazylika-bozego-ciala-krakow-fotoreportaz-slubny" passHref>
            <MuiLink underline="hover">Anna i Piotr</MuiLink>
          </Link>
          .
        </Typography>

        <Image alt="Ślub w Bazylice Bożego Ciała w Krakowie" src={portfolio_0017} />
        <Typography variant="body1" align="justify" color="text.secondary" sx={{ py: 2 }}>
          Serdecznie dziękujemy za uwiecznienie wspaniałych chwil z naszego życia. Polecamy współpracę z Tomkiem wszystkim szukającym najwyższej jakości usług i pełnego profesjonalizmu.{" "}
          <Link href="/dom-weselny-biala-perla-radziemice-reportaz-slubny" passHref>
            <MuiLink underline="hover">Żaneta i Sebastian</MuiLink>
          </Link>
          .
        </Typography>

        <Image alt="dobry fotograf ślubny kraków" src={slubne_portfolio_1} />
        <Typography variant="body1" align="justify" color="text.secondary" sx={{ py: 2 }}>
          Tomku, dziękujemy ogromnie za przepiękną pamiątkę jaką mamy dzięki Tobie. Twoje zaangażowanie i ogrom pomysłów widać w każdym ujęciu. Nie mogliśmy wymarzyć sobie lepszego fotografa. Polecamy
          wszystkim !{" "}
          <Link href="/fotograf-slubny-krzeszowice-cztery-pory-roku-alwernia" passHref>
            <MuiLink underline="hover">Aleksandra i Grzegorz</MuiLink>
          </Link>
          .
        </Typography>

        <Image alt="sala weselna Alexandra Mszana Dolna" src={aleksandra_mszana_dolna} />
        <Typography variant="body1" align="justify" color="text.secondary" sx={{ py: 2 }}>
          Zaangażowany, baczny obserwator wydarzeń, profesjonalista z pasją i pomysłowością. Czego efektem są piękne zdjęcia! Dziękujemy i polecamy!{" "}
          <Link href="/palac-goetza-brzesko-sluba-sesja-zdjeciowa" passHref>
            <MuiLink underline="hover">Magdalena i Łukasz</MuiLink>
          </Link>
          .
        </Typography>

        <Image alt="pełne emocji reportaże ślubne, niezapomniane sesje plenerowe" src={beata_marcin_mszana_dolna_portfolio} />
        <Typography variant="body1" align="justify" color="text.secondary" sx={{ py: 2 }}>
          Jednym słowem - człowek zajmujący się fotogafią ślubną z pasją, co widać po efektach. Już nie możemy doczekać się zdjęć z sesji. W przyszłości jeśli będę miała szukać fotografa, na pewno
          zadzwonię do Tomka. Dziękujemy za przepiękne zdjęcia, zaangazowanie, uśmiech i energię, która udzieliła sie również nam. Do zobaczenia.{" "}
          <Link href="/dwor-szlachecki-sieciechowice-reportaz-slubny-miechow" passHref>
            <MuiLink underline="hover">Aleksandra i Paweł</MuiLink>
          </Link>
          .
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
