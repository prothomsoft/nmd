import LayoutSitePage from "../components/layoutSitePage";
import ContactForm from "../components/contactForm";
import Container from "@mui/material/Container";
import Link from "next/link";
import Image from "next/image";

const PageComponent = () => {
  return (
    <LayoutSitePage
      title="Oferta fotografii ślubnej i sesji zdjęciowej"
      description="Oferta fotografii ślubnej i sesji zdjęciowej. Kraków i bliskie okolice. Żywe kolory i autentyczne emocje. Kliknij i sprawdź moje portfolio."
      keywords="oferta fotografii ślubnej, oferta sesji zdjęciowej, kraków, wieliczka, jordanów, miechów, tarnów, skawina"
      url="https://99foto.pl/oferta-fotografii-slubnej/"
      leadNames="DAJANA i SYLWESTER"
      leadTitle="OGRÓD BOTANICZNY W KRAKOWIE, ŚLUBNA SESJA ZDJĘCIOWA"
      leadUrl="/ogrod-botaniczny-w-krakowie-slubna-sesja-zdjeciowa"
      leadImage={process.env.staticImagesPath + "ogrod_botaniczny.jpg"}>
      <Container sx={{ pt: "200px" }}>
      <article>
                    <header>
                        <h1 className="quote-title">OFERTA FOTOGRAFII ŚLUBNEJ</h1>
                    </header>

                    <div className="container">
                        <div className="column left">
                            <Link href="/bazylika-bozego-ciala-krakow-fotoreportaz-slubny">
                                <div className="porfolioImage">
                                    <Image alt="portret panny młodej" src={"/static/portfolio/portret_panny_mlodej.jpg"} width={336} height={225} />                                    
                                </div>
                            </Link>

                            <Link href="/dworek-fantazja-skomielna-biala-i-slub-w-stylu-glamour">
                                <div className="porfolioImage">
                                    <Image alt="sala weselna Mszana Dolna" src={"/static/portfolio/aleksandra_mszana_dolna.jpg"}  width={336} height={225} />
                                </div>
                            </Link>
                        </div>
                        <div className="column right">
                            <h2>REPORTAŻ ŚLUBNY OBEJMUJĄCY</h2>
                            <p>przygotowania, błogosławieństwo</p>
                            <p>ceremonię w kościele lub USC</p>
                            <p>przyjęcie weselne do oczepin włącznie (do godz. 1.00)</p>
                            <p>sesję ślubną w wybranym dniu po ślubie</p>
                            <div className="spacer">&nbsp;</div>
                            <h2>OTRZYMUJECIE</h2>
                            <p>fotoksiążkę - minimum 140 stron w twardej oprawie, format 30x30cm</p>
                            <p>pendrive w etui - minimum 450 zdjęć poddanych starannej obróbce graficznej</p>
                            <p>dojazd w dniu ślubu GRATIS</p>
                            <p>internetową galerię zdjęć w strefie klienta zabezpieczoną hasłem</p>
                        </div>
                    </div>
                </article>

                <article>
                    <header>
                        <h3 className="quote-title">OFERTA SESJI ZDJĘCIOWEJ</h3>
                    </header>

                    <div className="container">
                        <div className="column left">
                            <Link href="/ogrod-botaniczny-w-krakowie-slubna-sesja-zdjeciowa">
                                <div className="porfolioImage">
                                    <Image alt="sesja plenerowa w ogrodzie botanicznym" src={"/static/portfolio/plener_0002.jpg"}  width={336} height={225}  />
                                </div>
                            </Link>
                            <Link href="/sesja-slubna-jesienia-palac-goetzow-okocimskich">
                                <div className="porfolioImage">
                                    <Image alt="sesja slubna palac goetzow okocimskich" src={"/static/portfolio/pomysl_na_sesje_slubna_zimowa_w_krakowie.jpg"}  width={336} height={225} />
                                </div>
                            </Link>
                            <div className="spacer">&nbsp;</div>
                        </div>
                        <div className="column right">
                            <p>&nbsp;</p>
                            <h2>SESJA ZDJĘCIOWA OBEJMUJĄCA</h2>
                            <p>trzy godziny fotografowania</p>
                            <p>dwa lub trzy wybrane miejsca plenerowe</p>
                            <p>&nbsp;</p>
                            <div className="spacer_more">&nbsp;</div>
                            <h2>OTRZYMUJECIE</h2>
                            <p>pendrive w etui - minimum 80 zdjęć poddanych starannej obróbce graficznej</p>
                            <p>dojazd do 30 km na sesję zdjęciową GRATIS</p>
                            <p>internetową galerię zdjęć w strefie klienta zabezpieczoną hasłem</p>
                            <p>&nbsp;</p>
                            <p>&nbsp;</p>
                        </div>
                        <div className="spacer">&nbsp;</div>
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
