import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
   
    let images = [
        { imageSrc: "/static/blog/2020/10/sesja_zdjeciowa_krakow_ogrod_botaniczny_0002.jpg", height: 763 },
        { imageSrc: "/static/blog/2020/10/sesja_zdjeciowa_krakow_ogrod_botaniczny_0001.jpg", height: 850 },
        { imageSrc: "/static/blog/2020/10/sesja_zdjeciowa_krakow_ogrod_botaniczny_0025.jpg", height: 763 },
        { imageSrc: "/static/blog/2020/10/sesja_zdjeciowa_krakow_ogrod_botaniczny_0015.jpg", height: 763 },
        { imageSrc: "/static/blog/2020/10/sesja_zdjeciowa_krakow_ogrod_botaniczny_0023.jpg", height: 763 },
        { imageSrc: "/static/blog/2020/10/sesja_zdjeciowa_krakow_ogrod_botaniczny_0004.jpg", height: 850 },
        { imageSrc: "/static/blog/2020/10/sesja_zdjeciowa_krakow_ogrod_botaniczny_0006.jpg", height: 763 },
        { imageSrc: "/static/blog/2020/10/sesja_zdjeciowa_krakow_ogrod_botaniczny_0005.jpg", height: 763 },
        { imageSrc: "/static/blog/2020/10/sesja_zdjeciowa_krakow_ogrod_botaniczny_0007.jpg", height: 762 },
        { imageSrc: "/static/blog/2020/10/sesja_zdjeciowa_krakow_ogrod_botaniczny_0040.jpg", height: 763 },
        { imageSrc: "/static/blog/2020/10/sesja_zdjeciowa_krakow_ogrod_botaniczny_0031.jpg", height: 763 },
        { imageSrc: "/static/blog/2020/10/sesja_zdjeciowa_krakow_ogrod_botaniczny_0008.jpg", height: 850 },
        { imageSrc: "/static/blog/2020/10/sesja_zdjeciowa_krakow_ogrod_botaniczny_0021.jpg", height: 763 },
        { imageSrc: "/static/blog/2020/10/sesja_zdjeciowa_krakow_ogrod_botaniczny_0022.jpg", height: 763 },
        { imageSrc: "/static/blog/2020/10/sesja_zdjeciowa_krakow_ogrod_botaniczny_0010.jpg", height: 850 },
        { imageSrc: "/static/blog/2020/10/sesja_zdjeciowa_krakow_ogrod_botaniczny_0032.jpg", height: 763 },
        { imageSrc: "/static/blog/2020/10/sesja_zdjeciowa_krakow_ogrod_botaniczny_0017.jpg", height: 763 },
        { imageSrc: "/static/blog/2020/10/sesja_zdjeciowa_krakow_ogrod_botaniczny_0009.jpg", height: 763 },
        { imageSrc: "/static/blog/2020/10/sesja_zdjeciowa_krakow_ogrod_botaniczny_0011.jpg", height: 851 },
        { imageSrc: "/static/blog/2020/10/sesja_zdjeciowa_krakow_ogrod_botaniczny_0012.jpg", height: 763 },
        { imageSrc: "/static/blog/2020/10/sesja_zdjeciowa_krakow_ogrod_botaniczny_0013.jpg", height: 850 },
        { imageSrc: "/static/blog/2020/10/sesja_zdjeciowa_krakow_ogrod_botaniczny_0014.jpg", height: 763 },
        { imageSrc: "/static/blog/2020/10/sesja_zdjeciowa_krakow_ogrod_botaniczny_0016.jpg", height: 850 },
        { imageSrc: "/static/blog/2020/10/sesja_zdjeciowa_krakow_ogrod_botaniczny_0036.jpg", height: 763 },
        { imageSrc: "/static/blog/2020/10/sesja_zdjeciowa_krakow_ogrod_botaniczny_0018.jpg", height: 763 },
        { imageSrc: "/static/blog/2020/10/sesja_zdjeciowa_krakow_ogrod_botaniczny_0019.jpg", height: 763 },
        { imageSrc: "/static/blog/2020/10/sesja_zdjeciowa_krakow_ogrod_botaniczny_0027.jpg", height: 763 },
        { imageSrc: "/static/blog/2020/10/sesja_zdjeciowa_krakow_ogrod_botaniczny_0024.jpg", height: 763 },
        { imageSrc: "/static/blog/2020/10/sesja_zdjeciowa_krakow_ogrod_botaniczny_0020.jpg", height: 763 },
        { imageSrc: "/static/blog/2020/10/sesja_zdjeciowa_krakow_ogrod_botaniczny_0029.jpg", height: 763 },
        { imageSrc: "/static/blog/2020/10/sesja_zdjeciowa_krakow_ogrod_botaniczny_0028.jpg", height: 762 },
        { imageSrc: "/static/blog/2020/10/sesja_zdjeciowa_krakow_ogrod_botaniczny_0033.jpg", height: 763 },
        { imageSrc: "/static/blog/2020/10/sesja_zdjeciowa_krakow_ogrod_botaniczny_0034.jpg", height: 763 },
        { imageSrc: "/static/blog/2020/10/sesja_zdjeciowa_krakow_ogrod_botaniczny_0035.jpg", height: 763 },
        { imageSrc: "/static/blog/2020/10/sesja_zdjeciowa_krakow_ogrod_botaniczny_0037.jpg", height: 763 },
        { imageSrc: "/static/blog/2020/10/sesja_zdjeciowa_krakow_ogrod_botaniczny_0038.jpg", height: 763 },
        { imageSrc: "/static/blog/2020/10/sesja_zdjeciowa_krakow_ogrod_botaniczny_0039.jpg", height: 762 },
        { imageSrc: "/static/blog/2020/10/sesja_zdjeciowa_krakow_ogrod_botaniczny_0030.jpg", height: 763 },
        { imageSrc: "/static/blog/2020/10/sesja_zdjeciowa_krakow_ogrod_botaniczny_0026.jpg", height: 763 },
        { imageSrc: "/static/blog/2020/10/sesja_zdjeciowa_krakow_ogrod_botaniczny_0003.jpg", height: 763 },
        { imageSrc: "/static/blog/2020/10/sesja_zdjeciowa_krakow_ogrod_botaniczny_0041.jpg", height: 763 },
    ];

    return (
        <BlogPageComponentNew
            slide={process.env.staticImagesPath + "plener_slubny_krakowski_ogrod_botaniczny.jpg"}
            images={images}
            headTitle={"Plener ??lubny w Krakowskim Ogrodzie Botanicznym"}
            headDescription={"Plener ??lubny w Krakowskim Ogrodzie Botanicznym, sesja ??lubna w Krakowie. Fotografem ??lubnym zosta??em, ??eby robi?? w??a??nie takie zdj??cia. Zapraszam na bloga..."}
            headKeywords={"plener ??lubny w Ogrodzie Botanicznym, zakochani w Krakowie, ??lubna sesja zdj??ciowa jesieni??"}
            headUrl={"https://99foto.pl/plener-slubny-w-krakowskim-ogrodzie-botanicznym"}
            entryContentP1={
                "Fotografem ??lubnym zosta??em, ??eby robi?? w??a??nie takie zdj??cia. Temat Ogrodu Botanicznego w Krakowie w po????czeniu z Oper?? Krakowsk?? pojawi?? si?? na moim blogu w wakacje 2018 roku. Plener by?? to niezapomniany z Dajan?? i Sylwestrem w rolach g????wnych. Od tamtego czasu Ogr??d Botaniczny przeszed?? spor?? metamorfoz?? za spraw?? jak si?? domy??lam funduszy europejskich. By?? to z pewno??ci?? jeden z czynnik??w, kt??ry doprowadzi?? do wprowadzeniu do???? absurdalnej op??aty za wykonanie zdj???? ??lubnych. Ale jak wiadomo realizowanie marze?? jest bezcenne, a za reszt?? zap??acisz kart?? mastercard. Teres?? i Andrzeja znam ju?? bardzo d??ugo i w mi??dzyczasie spotkali??my si?? na sesj?? narzecze??sk??, kt??r?? r??wnie?? znajdziecie na moim blogu."
            }
            entryContentP2={
                "Od pocz??tku jestem zachwycony urod?? Teresy i podziwiam si???? i niezniszczalno???? kr??gos??upa Andrzeja (gdy przewraca wszystkie te dziewczyny w ta??cu). Jesienne popo??udnie w pi??knym Krakowie, promienie s??o??ca przebijaj??ce si?? przez setki odmian przer????nej zieleni. Uczucia, emocje, u??miechy, zaufanie. Cisn??li??my na maksa i uwielbiam te zdj??cia. Serdecznie zapraszam do ogl??dania. "
            }
            slug={"plener-slubny-w-krakowskim-ogrodzie-botanicznym"}
            title={"PLENER ??LUBNY W KRAKOWSKIM OGRODZIE BOTANICZNYM - TERESA i ANDRZEJ"}
            tags={"plener ??lubny w Ogrodzie Botanicznym, zakochani w Krakowie, ??lubna sesja zdj??ciowa jesieni??"}
            date={"18 pa??dziernika 2020"}
            menuNames={"TERESA i ANDRZEJ"}
            menuTitle={"PLENER ??LUBNY W KRAKOWSKIM OGRODZIE BOTANICZNYM"}
            leadNames={"MAGDALENA i JONASZ"}
            leadTitle={"PLENER W BESKIDACH, SESJA ??LUBNA W BESKIDZIE ??L??SKIM"}
            leadUrl={"/plener-w-beskidach-sesja-slubna-w-beskidzie-slaskim"}
            leadImage={process.env.staticImagesPath + "plener_slubny_bielsko_szyndzielnia_klimczok.jpg"}
        />
    );
};

export default BlogPageComponent;
