import SinglePage from '../components/singlePage';

const RodoPageComponent = () => {
        return (
            
                <SinglePage
                    headTitle={"Polityka prywatności (RODO)"}
                    headDescription={"Polityka prywatności (RODO), ochrona danych osobowych, profesjonalny fotograf ślubny"}
                    headKeywords={"polityka prywatności, ochrona danych osobowych, profesjonalny fotograf ślubny"}
                    headUrl={"https://99foto.pl/polityka-prywatnosci-rodo/"}
                    componentContentName={"rodo"}
                    backgroundImage={"url(/static/plener-slubny-slowacja-lomnicki-staw-szczyrbskie-pleso-start-1.jpg"}
                    leadNames={"MAŁGORZATA I RAFAŁ"}
                    leadTitle={"PLENER ŚLUBNY SŁOWACJA, ŁOMNICKI STAW i SZCZYRBSKIE JEZIORO"}
                    leadUrl={"/plener-slubny-slowacja-lomnicki-staw-szczyrbskie-pleso"}
                    leadImage={process.env.staticImagesPath + "plener-slubny-slowacja-lomnicki-staw-szczyrbskie-pleso-start-1.jpg"}
                />
            
        );
};

export default RodoPageComponent;
