import LayoutSitePage from "../components/layoutSitePage";
import ContactForm from "../components/contactForm";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import ParallaxImageFooter from "../components/parallaxImageFooter";
import Link from "next/link";
import Image from "next/image";
import MuiLink from "@mui/material/Link";
import ogrod_botaniczny from "../public/static/portfolio/ogrod_botaniczny.jpg";
import portfolio_0002 from "../public/static/portfolio/portfolio_0002.jpg";
import plener_0002 from "../public/static/portfolio/plener_0002.jpg";
import portfolio_0014 from "../public/static/portfolio/portfolio_0014.jpg";
import portfolio_0008 from "../public/static/portfolio/portfolio_0008.jpg";
import portfolio_0007 from "../public/static/portfolio/portfolio_0007.jpg";
import sesja_zdjeciowa_krakow_2_portfolio from "../public/static/portfolio/sesja_zdjeciowa_krakow_2_portfolio.jpg";
import portfolio_0009 from "../public/static/portfolio/portfolio_0009.jpg";
import portfolio_300 from "../public/static/portfolio/portfolio_300.jpg";
import sesja_zdjeciowa_krakow_5_portfolio from "../public/static/portfolio/sesja_zdjeciowa_krakow_5_portfolio.jpg";
import chan_kristina_sesja_slubna_krakow from "../public/static/portfolio/chan_kristina_sesja_slubna_krakow.jpg";
import kopiec_krakusa_sesja_slubna from "../public/static/portfolio/kopiec_krakusa_sesja_slubna.jpg";
import plener_slubny_konie from "../public/static/portfolio/plener_slubny_konie.jpg";
import sesja_zdjeciowa_krakow_7_portfolio from "../public/static/portfolio/sesja_zdjeciowa_krakow_7_portfolio.jpg";
import anna_piotr_slub_krakow_reverted from "../public/static/portfolio/anna_piotr_slub_krakow_reverted.jpg";
import portfolio_0003 from "../public/static/portfolio/portfolio_0003.jpg";
import pomysl_na_sesje_slubna_zimowa_w_krakowie from "../public/static/portfolio/pomysl_na_sesje_slubna_zimowa_w_krakowie.jpg";
import portfolio_0011 from "../public/static/portfolio/portfolio_0011.jpg";
import sesja_zdjeciowa_szczyrbskie from "../public/static/portfolio/sesja_zdjeciowa_szczyrbskie.jpg";
import portfolio_2021_1 from "../public/static/portfolio/portfolio_2021_1.jpg";
import sesja_zdjeciowa_dwor_tomaszowice_krakow_portfolio from "../public/static/portfolio/sesja_zdjeciowa_dwor_tomaszowice_krakow_portfolio.jpg";
import plener_slubny_slowacja from "../public/static/portfolio/plener_slubny_slowacja.jpg";
import sesja_plenerowa_kasprowy from "../public/static/portfolio/sesja_plenerowa_kasprowy.jpg";
import slubne_portfolio_3 from "../public/static/portfolio/slubne_portfolio_3.jpg";
import sesja_zdjeciowa_krakow_3_portfolio from "../public/static/portfolio/sesja_zdjeciowa_krakow_3_portfolio.jpg";
import sesja_slubna_jesienia from "../public/static/portfolio/sesja_slubna_jesienia.jpg";
import plener_slubny_w_gorach from "../public/static/portfolio/plener_slubny_w_gorach.jpg";

const PageComponent = () => {
  const pageImage = process.env.staticImagesPath + "brzoskwinia_ogrod_sesja_narzeczenska_start.jpg";

  return (
    <LayoutSitePage
      title="Sesja zdjęciowa Kraków"
      description="Sesja zdjęciowa w Krakowie to atrakcje turystyczne w pięknym miejscu. Spotkajmy się, wspólnie znajdźmy chwilę, światło, kadr, zachowajmy je na zawsze."
      keywords="sesja zdjęciowa kraków, plener ślubny w krakowie"
      url="https://99foto.pl/sesja-zdjeciowa-krakow/"
      leadNames="WIKTORIA i KONRAD"
      leadTitle="SESJA ŚLUBNA, PLENER ŚLUBNY W KRAKOWIE"
      leadUrl="/brzoskwinia-ogrod-wesele-w-plenerze-sesja-narzeczenska"
      leadImage={pageImage}>
      <Container sx={{ pt: 21, pb: 5 }}>
        <Box sx={{ py: 2 }}>
          <Typography variant="h1" className="quote-title">
            SESJA ZDJĘCIOWA KRAKÓW - WSKAZÓWKI I REKOMENDACJE MIEJSC
          </Typography>
        </Box>        
        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 2 }}>
          Odwiedzając moją stronę internetową trafiliście do fotografa, który od zawsze proponuje i z całego serca namawia na sesje zdjęciowe w Krakowie. Trafiliście do fotografa, który swoim
          portfolio udowadnia, że nie trzeba jechać na koniec świata by zrobić niezapomniane zdjęcia ślubne. Kraków znany w zimie głównie ze smogu już wiosną zamienia się w piękne, chętnie odwiedzane
          przez turystów i pełne historii miasto. Fajnych miejsc na sesję zdjęciową nie trzeba tu poszukiwać długo. Łatwo odnajdziemy każdy styl by uwiecznić w nim Waszą miłość.
        </Typography>
        
        <Image alt="sesja ślubna Ogród Botaniczny Kraków" src={ogrod_botaniczny} />
        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 2 }}>
          Na północ od Krakowa rozciągają się atrakcje turystyczne Jury Krakowsko-Częstochowskiej reprezentowane przez Ojcowski Park Narodowy, Zamek w Pieskowej Skale, Dwór w Tomaszowicach czy Zamek w
          Korzkwi. Zachód Krakowa to Zalew w Kryspinowie, Dolina Bolechowicka, Zamek w Przegorzałach, Kopiec Kościuszki i Skałki Twardowskiego. Południe to Park w Mogilanach, Kopiec Kraka i Park
          Bednarskiego. Wschód Krakowa natomiast to industrialne klimaty Nowej Huty oraz Muzeum Lotnictwa na Czyżynach.
        </Typography>
        
        <Image alt="sesja zdjęciowa Kraków" src={portfolio_0002} />
        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 2 }}>
          Centrum to kwintesencja Krakowa czyli Bulwary Wiślane, klimatyczny Kazimierz, Plac Nowy, kluby i restauracje reprezentowane przez Mleczarnię, Alchemię, Starą Zajezdnie i Studio Qulinarne.
          Stare Miasto i niezliczona ilość uliczek, Wawel, Planty, Zaułek Czartoryskich, Opera Krakowska, Sukiennice i Rynek Główny, Browar Lubicz, Hotel Stary - wymieniać przeróżne miejsca można
          długo.
        </Typography>
        
        <Image alt="plener śłubny Bulwary Wiślane" src={plener_0002} />
        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 2 }}>
          Przygotowując się do sesji zdjęciowej i szukając odpowiedzi na pytanie gdzie można zrobić sesję fotograficzną w Krakowie, wpiszcie miejsca z powyższego paragrafu, a gwarantuję, że
          znajdziecie coś dla Was. Niezliczona ilość zakątków, ciekawych miejsc tych bardziej znanych i dopiero czekających na odkrycie.
        </Typography>
        
        <Image alt="sesja ślubna Zamek w Korzkwi" src={portfolio_0014} />
        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 2 }}>
          Sesja zdjęciowa w Krakowie to przede wszystkim dobry plan w układaniu którego bardzo chętnie Wam pomogę, konsultując logistykę miejsc, podpowiadając pory dnia, które będą najlepsze dla danej
          lokalizacji. Zdjęcia z pleneru mają być niezwykłe i niepowtarzalne dlatego warto poświęcić chwilę na znalezienie odpowiednich rekwizytów, które nadadzą sesji oryginalności.
        </Typography>
        
        <Image alt="oryginalne zdjęcia z pleneru ślubnego" src={portfolio_0008} />
        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 2 }}>Warto też przygotować makijaż i fryzurę zbliżone do tego z dnia ślubu . Pamiętajcie też, by koniecznie zabrać ze sobą dobry humor - jest to bardzo ale to bardzo ważne.</Typography>
        <Image alt="sesja zdjęciowa Pałac Goetza Brzesko" src={"/static/portfolio/sesja_zdjeciowa_palac_goetzow_brzesko.jpg"} width={1140} height={760} />
        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 2 }}>
          Fotografia jest moją pasją od lat. Jak nie trudno zgadnąć skala kreatywności poczas sesji zdjęciowych sięga zenitu. Kilka chwil w dzień poprzedzający Waszą sesję zdjęciową warto spędzić na
          przeanalizowaniu moich i istniejacych już w internecie prac innych fotografów ślubnych wykonanych w miejscach lub okolicach miejsc do których się wybieramy.
        </Typography>
        
        <Image alt="ciekawe miejsca na sesje plenerową w Krakowie" src={portfolio_0007} />
        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 2 }}>
          Budowanie kreatywności, poszukiwanie szczerości i wyjątkowości w kadrze to ciągła praca. Wierzcie mi, że im dalej jestem, tym więcej pracy widzę przed sobą. Każda kolejna sesja zdjęciowa
          buduje świadomość tego co mam mieć w kadrze i jak mam tego szukać. Tysiące przeglądniętych zdjęć pozwalają zdefiniować kadr, znaleźć inspirację i odpowiedzieć na pytanie co i jak chcę
          pokazywać.
        </Typography>
        
        <Image alt="budowanie kreatywności w fotografii ślubnej" src={sesja_zdjeciowa_krakow_2_portfolio} />
        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 2 }}>
          Trzy godziny fotografowania, najczęściej dwa lub trzy wybrane miejsca w Krakowie i okolicach, blisko pięćset zdjęć, z których starannie selekcjonuję blisko sto zdjęć do obróbki graficznej.
          Emocje, emocje i jeszcze raz emocje. Zero ustawek i balast sprzętowy ograniczony do niezbędnego minimum. Osobiście czerpię prawdziwą przyjemność w poszukiwaniu prawdziwych emocji w moich
          zdjęciach, zdobywania Waszego zaufania i odnajdywaniu kadrów w przeróżnych miejscach dzięki niekończącej się magii światła.
        </Typography>
        
        <Image alt="magia fotografii ślubnej" src={portfolio_0009} />
        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 2 }}>
          Plener ślubny w Krakowie to najlepszy moment na upamiętnienie tych najpiękniejszych i najromantyczniejszych chwil na fotografiach. To chwila na oderwanie się od rzeczywistości i wcielenie w
          rolę rozluźnionego modela. Spotkajmy się w Krakowie, wspólnie znajdźmy chwilę, światło, kadr, zachowajmy je na zawsze. Serdecznie zapraszam.
        </Typography>
        
        <Image alt="chwila, światło, kadr w fotografii ślubnej" src={portfolio_300} />
        <Box sx={{ py: 2 }}>
          <Typography variant="h1" className="quote-title">
            REFERENCJE - FACEBOOK
          </Typography>
        </Box>
        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 2 }}>
          Od samego początku współpraca z Tomkiem przebiegała idealnie :) Pełen pomysłów w głowie i zapału do pracy, a przy okazji napełniony dobrą energią, która dodała nam "powera" w tym ważnym dla
          nas dniu! Błyskawiczna obsługa z pięknymi zdjęciami :) Jak tylko wybierać to zdecydowanie Tomka ! :) Dziękujemy i na pewno kiedyś jeszcze się zobaczymy.{" "}
          <Link href="/hotel-qubus-krakow-sesja-zdjeciowa" passHref>
            <MuiLink underline="hover">Ewelina i Kamil</MuiLink>
          </Link>.
        </Typography>
        
        <Image alt="sesja zdjęciowa kraków" src={sesja_zdjeciowa_krakow_5_portfolio} />
        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 2 }}>
          Serdecznie polecamy. Niezwykle profesjonalne podejście, bardzo miła atmosfera i przepiękne zdjęcia! Długo zastanawialiśmy się nad wyborem fotografa, ale wiemy, że nie mogliśmy lepiej wybrać.
          Tomku, dziękujemy za piękną pamiątkę i serdecznie pozdrawiamy. <Link href="/hotel-margerita-magiczny-wystroj-sali-weselnej-w-krakowie" passHref>
            <MuiLink underline="hover">Natalia i Piotr</MuiLink></Link>.
        </Typography>
       
        <Image alt="sesja ślubna na Rynku Głównym w Krakowie" src={chan_kristina_sesja_slubna_krakow} />
        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 2 }}>
          Dziękujemy bardzo za przepiękną pamiątkę, zdjęcia rewelacja, choć ten dzień bardzo szybko minął przez bardzo duże emocje nie wiele pamietamy ale dzięki Tomkowi są zatrzymane wszystkie chwilę
          na zdjęciach. Jakość, szybkość w realizacji materiału wszystko na SZÓSTKĘ Z DUŻYM PLUSEM. Jeszcze raz dziękujemy bardzo i będziemy zawsze polecać!. Natalia i Krzysztof.
        </Typography>
        
        <Image alt="plener ślubny Kopiec Krakusa" src={kopiec_krakusa_sesja_slubna} />
        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 2 }}>
          Dziękujemy, dziękujemy, dziękujemy. Byliśmy pewni że nasza współpraca z Tomkiem przebiegnie idealnie i tak właśnie było. Polecamy wszystkim z całego serca!!!{" "}
          <Link href="/zielone-wzgorze-koniusza-tak-w-promieniach-slonca" passHref>
            <MuiLink underline="hover">Karola i Mati</MuiLink></Link>.
        </Typography>
        
        <Image alt="plener ślubny w stadninie koni" src={plener_slubny_konie} />
        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 2 }}>
          Z całego serca polecamy Tomka jako fotografa ślubnego! Miła i profesjonalna współpraca, świetne ujęcia i bardzo szybka realizacja - po tygodniu mieliśmy już zdjęcia do oglądania - coś
          pięknego. Bardzo polecamy tym, którzy się jeszcze zastanawiają. Olga i Dawid.
        </Typography>
        
        <Image alt="dyskretna sesja zdjęciowa w Krakowie" src={sesja_zdjeciowa_krakow_7_portfolio} />
        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 2 }}>
          Pełen profesjonalizm i zaangażowanie! Dyskretna i bardzo efektowna praca Tomka robi wrażenie tak jak Jego zdjęcia :) spokój i usmiech :) świetna współpraca! Dziękujemy Tomek.{" "}
          <Link href="/sylwia-i-bartek-sesja-poslubna-krakow" passHref>
            <MuiLink underline="hover">Sylwia i Bartek</MuiLink></Link>.
        </Typography>
        
        <Image alt="profesjonalizm, zaangażowanie w fotografii ślubnej" src={anna_piotr_slub_krakow_reverted} />
        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 2 }}>Tomku dziekujemy jesteśmy oczarowani zdjęciami. W 100% polecamy Tomka pełen profesjonalizm, otwartość i zaangażowanie w to co robi jest na najwyższym poziomie. Agnieszka i Mateusz.</Typography>
        
        <Image alt="zielone wzgórze koniusza, sala weselna" src={portfolio_0003} />
        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 2 }}>
          Najlepszy Fotograf na świecie !!! Jesteśmy o tym przekonani na 100%! Uchwyci każdą piękną chwilę, wszystkie zdjęcia naturalne, pełne pasji, magiczne, robione z sercem... Jako człowiek -
          świetny Gość ! :) Tacy ludzie to skarb :) Pokochaliśmy Tomka od pierwszego wrażania :) Dziękujemy za wszystko i polecamy z całych serduszek. Edyta i Dawid.
        </Typography>
        
        <Image alt="zimowa sesja ślubna w Krakowie" src={pomysl_na_sesje_slubna_zimowa_w_krakowie} />
        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 2 }}>
          Tomek super fotograf!!! Robi przepiękne zdjęcia. Już na pierwszym spotkaniu wiedziałam, że wybór Tomka to był strzał w 10. Jest profesjonalistą, a jak się ogląda jego zdjęcia to aż łezka w
          oku się kręci. Będziemy mieć super pamiątkę. Dziękujemy jeszcze raz za wspaniałą współprace. Polecamy z calego serca! Ola i Rafał.
        </Typography>
        
        <Image alt="super fotograf w Krakowie" src={portfolio_0011} />
        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 2 }}>
          Tomka poznałam 5 lat temu przy okazji ślubu i wesela przyjaciółki. Już wtedy zwróciła moją uwagę jakość jego zdjęć, ich naturalność, ujęte w nich emocje. Tomek nie prosił uczestników o
          pozowanie do zdjęć, ale raczej robił je w locie, a dodatkowo dbał o dobrą atmosferę. Uznaliśmy z Mężem, że dostosujemy datę naszej uroczystości do jego dostępności i jesteśmy bardzo
          zadowoleni z tej współpracy. Zdjęcia były piękne (ślub, wesele, sesja plenerowa), dobrze obrobione i szybko pojawiły się na stronie internetowej. Tomek bez problemu poradził sobie z
          wyzwaniami, takimi jak odblaski od okularów (powłoka blue care). Serdecznie polecamy! Anna i Grzegorz.
        </Typography>
        
        <Image alt="sesja zdjęciowa na łódkach szczyrbskie jezioro" src={sesja_zdjeciowa_szczyrbskie} />
        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 2 }}>
          Tomku póki co Ryśka nie ma w domu i nie widział zdjęć a ja rano przez chwilę tylko miałam dostęp do internetu ale zdjęcia są SUPER. Nie wiem czy wszycy tak reagują ale mnie bardzo wzruszyły
          te zdjęcia i przeniosły do tego pamiętnego dnia... Mają niesamowitą magię... Patrycja i Ryszard.
        </Typography>
        
        <Image alt="sesja zdjęciowa w pieninach wysoki wierch" src={portfolio_2021_1} />
        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 2 }}>
          Otwarty, profesjonalny i cierpliwy, polecamy Tomka każdemu! Zdjęcia które wykonuje są piękne i klimatyczne, współprace z nim będziemy bardzo miło wspominać.{" "}
          <Link href="/sala-bankietowa-triana-mogilany-reportaz-slubny-podstolice" passHref>
            <MuiLink underline="hover">Paulina i Paweł</MuiLink></Link>.
        </Typography>
        
        <Image alt="sesja zdjęciowa Dwór Tomaszowice Kraków" src={sesja_zdjeciowa_dwor_tomaszowice_krakow_portfolio} />
        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 2 }}>
          Gorące podziękowania dla Tomka za wspaniałą pamiątkę z naszego wesela, które odbyło się 15 sierpnia tego roku. Współpraca, podejście do tematu, zaangażowanie na bardzo wysokim poziomie.
          Materiał z wesela otrzymaliśmy w ekspresowym terminie. Wszystkim serdecznie polecamy! <Link href="/patrycja-i-michal-sesja-narzeczenska-pieskowa-skala" passHref>
            <MuiLink underline="hover">Patrycja i Michał</MuiLink></Link>.
        </Typography>
        
        <Image alt="Plener ślubny na Słowacji" src={plener_slubny_slowacja} />
        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 2 }}>
          Niesamowicie się cieszymy, że to właśnie Tomek "łapał chwile" na naszym ślubie! ❤️ Pasja i profesjonalizm widoczne są na każdym zdjęciu, i każde z nich można oprawić i powiesić na ścianie.
          Dodatkowo pozytywne nastawienie, serdeczność i uśmiech zdecydowanie ułatwiają przeżycie tego dnia bez dodatkowego stresu, ponieważ Tomek od pierwszej rozmowy sprawia wrażenie jakby znało się
          go długi, długi czas. Niesamowicie szybki czas realizacji, zdjęcia otrzymaliśmy dokładnie po 7 dniach. Polecam z całego serca, bardzo się cieszę że na siebie trafiliśmy i że to właśnie Tomek
          towarzyszył nam w tym ważnym dla nas dniu! jeszcze raz DZIĘKUJEMY! <Link href="/wymarzony-plener-slubny-w-krakowie-sprawdzone-miejsca" passHref>
            <MuiLink underline="hover">Patrycja i Grzegorz</MuiLink></Link>.
        </Typography>
        
        <Image alt="Plener ślubny na Kaprowym" src={sesja_plenerowa_kasprowy} />
        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 2 }}>
          Tomek jest świetnym fotografem. Każdy ważny moment jest uchwycony w magiczny sposób. Nie ma zdjęcia, które by sie powtarzało. Efekty mówią same za siebie, wystarczy tylko popatrzeć na bloga.
          Atmosfera, która stwarza jest rewelacyjna. Gorąco polecam. <Link href="/wesele-tarnow-dwor-bistuszowa-i-staropolski-klimat-slubny" passHref>
            <MuiLink underline="hover">Aleksandra i Przemek</MuiLink></Link>.
        </Typography>
        
        <Image alt="dobry fotograf ślubny kraków" src={slubne_portfolio_3} />
        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 2 }}>
          Tomku, z całego serca dziękujemy za cudowne zdjęcia z naszego ślubu. Lepszych nie mogliśmy sobie wymarzyć. Jesteśmy totalnie oczarowani relacją, która dla nas stworzyłeś. Idealnie uchwycone
          chwile, oryginalne i niebanalne kadry, naturalność, swoboda i spontaniczność – to wszystko składa się na naszą piękną historię, którą ujęcie po ujęciu możemy przeżywać na nowo za każdym
          razem kiedy wracamy do Twoich zdjęć. <Link href="/plener-w-beskidach-sesja-slubna-w-beskidzie-slaskim" passHref>
            <MuiLink underline="hover">Magdalena i Jonasz</MuiLink></Link>.
        </Typography>
        
        <Image alt="atmosfera podczas pleneru ślubnego" src={sesja_zdjeciowa_krakow_3_portfolio} />
        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 2 }}>
          Tomku, dziękujemy ogromnie za przepiękną pamiątkę jaką mamy dzięki Tobie. Twoje zaangażowanie i ogrom pomysłów widać w każdym ujęciu. Nie mogliśmy wymarzyć sobie lepszego fotografa. Polecamy
          wszystkim! <Link href="/fotograf-slubny-krzeszowice-cztery-pory-roku-alwernia" passHref>
            <MuiLink underline="hover">Aleksandra i Grzegorz</MuiLink></Link>.
        </Typography>
        
        <Image alt="sesja ślubna jesienią" src={sesja_slubna_jesienia} />
        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 2 }}>
          Serdecznie polecamy Tomka! To świetny, niezwykle profesjonalny fotograf, który jest zaangażowany w swoją pracę, a przy tym jest przesympatyczny i zawsze uśmiechnięty. Zdjęcia otrzymaliśmy w
          ekspresowym tempie, na każdym z nich Tomek uchwycił piękne chwile z naszego dnia. Zdjęcia są przepiękną pamiątką! Tomku, to była przyjemność z Tobą współpracować! Jeszcze raz dziękujemy za
          przepiękne zdjęcia <Link href="/bazylika-bozego-ciala-krakow-fotoreportaz-slubny" passHref>
            <MuiLink underline="hover">Anna i Piotr</MuiLink></Link>.
        </Typography>
        
        <Image alt="plener ślubny w górach" src={plener_slubny_w_gorach} />
        <Typography variant="body1" align="justify" color="text.secondary" sx={{ pb: 2 }}>
          Chcielibyśmy bardzo podziękować za pełen profesjonalizm zarówno w dniu ślubu jak i na sesji! Rewelacyjne zdjęcia, super współpraca, nie da się ukryć że Tomasz robi to, co lubi i robi to z
          pasją i zamiłowaniem do fotografii! Polecamy pod każdym względem! <Link href="/pomysl-na-sesje-zimowa-w-krakowie-dwor-jana-matejki" passHref>
            <MuiLink underline="hover">Natalia i Łukasz</MuiLink></Link>
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
