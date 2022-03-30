import LayoutSitePage from "../components/layoutSitePage";
import ContactForm from "../components/contactForm";
import Container from "@mui/material/Container";
import Link from "next/link";
import Image from "next/image";

const PageComponent = () => {
  return (
    <LayoutSitePage
      title="Plener ślubny Kraków"
      description="Fotograf ślubny z Krakowa. Zapraszam do zapoznania się z portfolio i skorzystania z mojej oferty. Gwarantuję wysokość jakość usług i konkurencyjne ceny."
      keywords="sesja zdjęciowa kraków,fotograf na wesele kraków"
      url="https://99foto.pl/misja-i-faq/"
      leadNames="PATRYCJA i KRZYSZTOF"
      leadTitle="DWOREK FANTAZJA SKOMIELNA BIAŁA i ŚLUB W STYLU GLAMOUR"
      leadUrl="/dworek-fantazja-skomielna-biala-i-slub-w-stylu-glamour"
      leadImage={process.env.staticImagesPath + "dworek_fantazja_skomielna_biala_fotograf.jpg"}>
      <Container sx={{ pt: "200px" }}>
      <article>
                    <header>
                        <h1 className="quote-title">FAQ - MOJE ODPOWIEDZI NA CZĘSTO ZADAWANE PYTANIA</h1>
                    </header>

                    <div className="container">
                        <div className="column left">
                            <Link href="/dekoracja-sali-weselnej-w-stylu-rustykalnym-osp-zawada">
                                <div className="porfolioImage">
                                    <Image alt="sesja zdjęciowa w Krakowie" src={"/static/portfolio/dekoracja_sali_weselnej_w_stylu_rustykalnym_osp_zawada_portfolio.jpg"} width={336} height={225} />
                                </div>
                            </Link>
                            <Link href="/sesja-slubna-strbskie-pleso-i-popradzki-staw-slowacja">
                                <div className="porfolioImage">
                                    <Image alt="Plener ślubny na Rynku w Krakowie" src={"/static/portfolio/sesja_slubna_strbskie_pleso_i_popradzki_staw_slowacja_portfolio.jpg"} width={336} height={225} />
                                </div>
                            </Link>
                            <Link href="/sesja-narzeczenska-krakow">
                                <div className="porfolioImage">
                                    <Image alt="wesele w góralskim klimacie" src={"/static/portfolio/sesja_narzeczenska_krakow_portfolio.jpg"} width={336} height={225} />
                                </div>
                            </Link>
                            <Link href="/sala-weselna-nedan-pcim-reportaz-slubny">
                                <div className="porfolioImage">
                                    <Image alt="fotograf na wesele kraków" src={"/static/portfolio/sala_weselna_nedan_pcim_reportaz_slubny_portfolio.jpg"} width={336} height={225} />
                                </div>
                            </Link>
                        </div>
                        <div className="column right">
                            <p>
                                1. Czy posiadasz zaświadczenie z kurii zezwalające na fotografowanie podczas ślubów?
                                <br />
                                Tak przeszedłem kurs w kurii i posiadam zaświadczenie zezwalające na wykonanie reportażu z uroczystości ślubnej.
                                <br />
                                <br />
                                2. Czy posiadasz zapasowy aparat w przypadku awarii?
                                <br />
                                Zawsze posiadam drugi aparat na wypadek awarii.
                                <br />
                                <br />
                                3. Czy fotoksiążka jest wliczona w cenę pakietu i czy można zobaczyć przykładową książkę przed ślubem?
                                <br />
                                Fotoksiążka jest produktem finalnym naszej współpracy i jest wliczona w cenę pakietu. Przykładową książkę możecie zobaczyć na spotkaniu ze mną w Krakowie. Na spotkaniu
                                odpowiem też na wszystkie Wasze pytania.
                                <br />
                                <br />
                                4. Jakiego sprzętu fotograficznego używasz w swojej pracy?
                                <br />
                                Zdjęcia wykonuję bezlusterkowymi aparatami pełnoklatkowymi systemu Nikon Z i jasnymi obiektywami Nikkor Z.
                                <br />
                                <br />
                                5. Do której godziny jesteś na weselu?
                                <br />
                                Na weselu jestem do godziny pierwszej w nocy. Wszystkie najważniejsze atrakcje wieczoru dzieją się do tej chwili.
                                <br />
                                <br />
                                6. Na jakim terenie pracujesz?
                                <br />
                                Mieszkam w Krakowie. Mogę jednak uwiecznić Waszą uroczystość (lub też wykonać sesję plenerową) w dowolnym miejscu w południowej Polsce.
                                <br />
                                <br />
                                7. Ile wynosi dopłata za dojazd?
                                <br />W moim pakiecie oferuję dojazd w dniu ślubu GRATIS. Jeżeli natomiast Wasz plener ślubny odbywa się w oddalonym od Krakowa miejscu to musimy doliczyć dopłatę za
                                dojazd 1km/1PLN (zawsze jeździmy moim autem).
                                <br />
                                <br />
                                8. Czy obrabiasz zdjęcia?
                                <br />
                                Oczywiście. Każde zdjęcie wykonuję w formacie RAW - traktuję je jako półprodukt, z którego powstanie fotografia.
                                <br />
                                <br />
                                9. Czy ze zdjęć, które od Ciebie dostaniemy możemy sobie wywołać odbitki o dużym rozmiarze?
                                <br />
                                Tak, zdjęcia otrzymujecie w dużej rozdzielczości 3520px (300 dpi).
                                <br />
                                <br />
                                10. Kiedy robisz plener ślubny?
                                <br />Z reguły sesję ślubną robimy w tygodniu po Waszym ślubie, jednak bez problemu przesuniemy ją na termin późniejszy.
                                <br />
                                <br />
                                11. Jak długo trwa plener? Jak wygląda taka sesja plenerowa?
                                <br />
                                Na sesję zarezerwujcie sobie minimum trzy godziny - wszystko zależy od tego gdzie jest sesja i czy musimy daleko dojeżdżać.
                                <br />
                                <br />
                                12. Czy mówisz w innych językach, niż polski?
                                <br />
                                Tak, swobodnie porozumiewam się w języku angielskim. Mam zdany First Certificate in English.
                                <br />
                                <br />
                                13. Czy prowadzisz legalną działalność gospodarczą?
                                <br />
                                Tak, mam zarejestrowaną działalność gospodarczą i odprowadzam podatki.
                                <br />
                                <br />
                                14. Jak wcześnie trzeba rezerwować termin?
                                <br />
                                Zasada jest prosta, im szybciej tym lepiej, jeżeli jesteście zdecydowani abym to ja uwiecznił Waszą uroczystość - wypełnijcie poniższy formularz i skontaktujcie się ze
                                mną jak najwcześniej. Warunkiem pełnej rezerwacji terminu jest podpisanie umowy.
                                <br />
                                <br />
                            </p>
                        </div>
                    </div>
                </article>

                <article>
                    <header>
                        <h2 className="quote-title">MISJA - CZYLI NIE ODNAJDZIE WIĘCEJ WAS TA SAMA CHWILA</h2>
                    </header>

                    <div className="container">
                        <div className="column left">
                            <Link href="/wakacyjny-test-obiektywu-sigma-50-1-4-art">
                                <div className="porfolioImage">
                                    <Image alt="wesele międzynarodowe kraków" src={"/static/portfolio/tomek_prokop_fotograf_krakow_misja_2_page.jpg"} width={336} height={225} />
                                </div>
                            </Link>
                            <Link href="/michas-i-martusia-wakacje-wroclaw-i-kudowa-zdroj">
                                <div className="porfolioImage">
                                    <Image alt="sesja zdjęciowa w górach" src={"/static/portfolio/tomek_prokop_fotograf_krakow_misja_1_page.jpg"} width={336} height={225} />
                                </div>
                            </Link>
                            <Link href="/ulubione-wakacyjne-kadry">
                                <div className="porfolioImage">
                                    <Image alt="dekoracja sali w stylu rustykalnym" src={"/static/portfolio/tomek_prokop_fotograf_krakow_misja_3_page.jpg"} width={336} height={225} />
                                </div>
                            </Link>
                        </div>
                        <div className="column right">
                            <p className="alignJustify">
                                Kiedy spojrzę w przeszłość na kilka ślubów, które miałem przyjemność fotografować, mogę powiedzieć jedno: każdy ślub jest inny. Para młoda i idealnie dopracowane detale
                                są po prostu piękne. Goście weselni swoją radością sprawiają, że dzień ten staje się wyjątkowy, a całe tygodnie i miesiące przygotowań mają swój szczęśliwy finał w tym
                                dniu pełnym uczuć, radości i wzruszeń.
                                <br />
                                <br />
                                Zapytacie mnie dlaczego zajmuję się fotografią ślubną?
                                <br />
                                <br />
                                Otóż chcę zatrzymać czas, sfotografować Twoich rodziców, trzymających się za ręce i wycierających łzy wzruszenia w kościelnej ławce. Taniec Twojej młodszej siostry z
                                chłopakiem, którego być może poślubi już za trzy lata. Dzieci sąsiadów, które rosną bardzo, ale to bardzo szybko i Twój pierwszy już małżeński pocałunek. Twojego
                                najlepszego przyjaciela wykonującego mocno wyćwiczony, jeszcze studniówkowy taneczny popis, a być może nawet byłego chłopaka, który ze łzą w oku przytrzyma Cię w
                                objęciach trochę dłużej, korzystając z takiej okazji podczas składania życzeń ślubnych.
                                <br />
                                <br />
                                Masz jak w banku, że ślubny tort zniknie w czasie krótszym niż godzina, kwiaty zwiędną wkrótce po ceremonii, a suknia ślubna wróci do szafy rano następnego dnia. Ale
                                zdjęcia - pomyśl - one zostaną na zawsze. Będą z wami kiedy narodzą się wasze dzieci, kiedy będziecie przechodzić przez największą w karierze małżeńskiej kłótnię.
                                Zawsze będą przypominać wam jak bardzo się kochacie. Kiedy waszych rodziców już nie będzie z wami, zdacie sobie sprawę, że ślub to była ostatnia okazja na podziękowania
                                i na wspólny taniec.
                                <br />
                                <br />
                                Moją misją jest więc uwiecznienie tych wszystkich chwil, podarowanie Wam zdjęć w albumie, który przetrwa wieki i przypomni wam dlaczego chcieliście wydać tak idealne i
                                tak bardzo drogie przyjęcie ślubne.
                                <br />
                                <br />
                                Jeżeli planujesz swój ślub właśnie teraz to zapomnij o targach ślubnych, wyłącz internet i zamknij katalogi mody ślubnej. Popatrz na osobę z którą chcesz przejść przez
                                życie. Przypomnij sobie dlaczego to robisz i pamiętaj o tym, żeby gdy dzień ślubu nadejdzie cieszyć się nim z całego serca. Zero stresu z powodu sukni ślubnej,
                                pierwszego tańca, pocałunków na forum rodziny, czekoladowej fontanny czy kwiatów.
                                <br />
                                <br />
                                Pamiętaj, kiedy impreza się skończy, będziecie już na zawsze razem otoczeni ludźmi, którzy doskonale was znają i kochają najbardziej na świecie. Wybierając mnie na
                                Waszego fotografa ślubnego będziecie mieli też album pełny bezcennych zdjęć.
                            </p>
                            <p className="alignRight">
                                Pozdrawiam i zapraszam serdecznie do skorzystania z moich usług.
                                <br />
                                Tomasz Prokop -{" "}
                                <Link href="https://99foto.pl">
                                    <a>Fotograf Ślubny Kraków</a>
                                </Link>
                                .
                            </p>
                            <div className="spacer">&nbsp;</div>
                        </div>
                    </div>
                </article>
      </Container>
      <Container>
        <ContactForm />
      </Container>
    </LayoutSitePage>
  );
};

export default PageComponent;
