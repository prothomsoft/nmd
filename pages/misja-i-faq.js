import SinglePage from '../components/singlePage';

const MisjaPageComponent = () => {
      return <SinglePage
      headTitle={"Plener ślubny Kraków"}
      headDescription={"Fotograf ślubny z Krakowa. Zapraszam do zapoznania się z portfolio i skorzystania z mojej oferty. Gwarantuję wysokość jakość usług i konkurencyjne ceny."}
      headKeywords={"sesja zdjęciowa kraków,fotograf na wesele kraków"}
      headUrl={"https://99foto.pl/misja-i-faq/"}
      componentContentName={"misja"}
      backgroundImage={"url(" + process.env.staticImagesPath + "dworek_fantazja_skomielna_biala_fotograf.jpg)"}
      leadNames={"PATRYCJA i KRZYSZTOF"}
      leadTitle={"DWOREK FANTAZJA SKOMIELNA BIAŁA i ŚLUB W STYLU GLAMOUR"}
      leadUrl={"/dworek-fantazja-skomielna-biala-i-slub-w-stylu-glamour"}
      leadImage={"url(" + process.env.staticImagesPath + "dworek_fantazja_skomielna_biala_fotograf.jpg)"}
  />
}

export default MisjaPageComponent;