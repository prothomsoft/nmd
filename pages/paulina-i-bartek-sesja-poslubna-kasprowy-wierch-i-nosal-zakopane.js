import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
    
        let images = [
            { imageSrc: "/static/blog/2015/09/sesja_poslubna_kasprowy_wierch_0001.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/sesja_poslubna_kasprowy_wierch_0013.jpg", height: 400 },
            { imageSrc: "/static/blog/2015/09/sesja_poslubna_kasprowy_wierch_0002.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/09/sesja_poslubna_kasprowy_wierch_0003.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/09/sesja_poslubna_kasprowy_wierch_0004.jpg", height: 851 },
            { imageSrc: "/static/blog/2015/09/sesja_poslubna_kasprowy_wierch_0005.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/sesja_poslubna_kasprowy_wierch_0006.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/sesja_poslubna_kasprowy_wierch_0007.jpg", height: 267 },
            { imageSrc: "/static/blog/2015/09/sesja_poslubna_kasprowy_wierch_0008.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/sesja_poslubna_kasprowy_wierch_0009.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/sesja_poslubna_kasprowy_wierch_0010.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/sesja_poslubna_kasprowy_wierch_0011.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/sesja_poslubna_kasprowy_wierch_0012.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/09/sesja_poslubna_kasprowy_wierch_0014.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/sesja_poslubna_kasprowy_wierch_0015.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/09/sesja_poslubna_kasprowy_wierch_0016.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/sesja_poslubna_kasprowy_wierch_0017.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/sesja_poslubna_kasprowy_wierch_0018.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/09/sesja_poslubna_kasprowy_wierch_0019.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/sesja_poslubna_kasprowy_wierch_0020.jpg", height: 205 },
            { imageSrc: "/static/blog/2015/09/sesja_poslubna_kasprowy_wierch_0021.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/sesja_poslubna_kasprowy_wierch_0022.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/sesja_poslubna_kasprowy_wierch_0023.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/sesja_poslubna_kasprowy_wierch_0024.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/sesja_poslubna_kasprowy_wierch_0025.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/09/sesja_poslubna_kasprowy_wierch_0026.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/sesja_poslubna_kasprowy_wierch_0027.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/sesja_poslubna_kasprowy_wierch_0028.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/sesja_poslubna_kasprowy_wierch_0029.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/sesja_poslubna_kasprowy_wierch_0030.jpg", height: 762 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticImagesPath + "paulina_i_bartek_sesja_poslubna_kasprowy_wierch_i_nosal_zakopane_start.jpg"}
                    images={images}
                    headTitle={"Sesja ??lubna Kasprowy Wierch - Zakopane"}
                    headDescription={"Tym razem na moim blogu g??rskie panoramy i pi??kne widoki ze szczytu Kasprowego Wierchu i Nosala. Serdecznie zapraszam do ogl??dania."}
                    headKeywords={"zdj??cia ??lubne kasprowy wierch,plener ??lubny zakopane"}
                    headUrl={"https://99foto.pl/sesja-slubna-strbskie-pleso-i-popradzki-staw-slowacja"}
                    entryContentP1={
                        "Paulina i Bartek lubi?? morze, ale maj?? je na co dzie?? poniewa?? mieszkaj?? w Szczecinie i kochaj?? g??ry poniewa?? na ich szczycie powiedzieli sobie TAK. W niedziel?? po sobotnich szale??stwach w Zaje??dzie Furma??skim w Zakopanym, wi??kszo???? go??ci weselnych spotka??a si?? na szczycie Kasprowego Wierchu na kr??tkiej sesji fotograficznej. Mieli??my tego popo??udnia, pogod?? wr??cz wymarzon?? do zdj???? w g??rach &#8211; bia??e chmurki na niebieskim niebie, umiarkowane s??o??ce i bardzo dobra widoczno????. Wykorzystali??my te okoliczno??ci jak nale??y mam nadziej??."
                    }
                    entryContentP2={
                        "Nast??pnie ju?? w tygodniu, kt??ry ca??y sp??dzi??em w Zakopanym, spotkali??my si?? ponownie i wsp??lnie weszli??my na szczyt Nosala. G??rka ma??a, ale podej??cie do???? strome i kondycyjnie wymagaj??ce. Tym razem nie mieli??my ju?? tyle szcz????cia do pogody i na g??rze spotkali??my mg????, kt??ra nie chcia??a odpu??ci??. Pozdrowienia dla go??ci, mi??ego ogl??dania i zapraszam po wi??cej do strefy klienta."
                    }
                    slug={"sesja-slubna-strbskie-pleso-i-popradzki-staw-slowacja"}
                    title={"SESJA ??LUBNA KASPROWY WIERCH i NOSAL - ZAKOPANE - PAULINA i BARTEK"}
                    tags={"zdj??cia ??lubne kasprowy wierch,plener ??lubny zakopane"}
                    date={"17 wrze??nia 2015"}
                    menuNames={"PAULINA i BARTEK"}
                    menuTitle={"SESJA ??LUBNA KASPROWY WIERCH i NOSAL - ZAKOPANE"}
                    leadNames={"IWONA i MARCIN"}
                    leadTitle={"WESELE W G??RALSKIM KLIMACIE PRZYSTA?? KABANOS SPYTKOWICE"}
                    leadUrl={"/wesele-w-goralskim-klimacie-przystan-kabanos-spytkowice"}
                    leadImage={process.env.staticImagesPath + "wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_start.jpg"}
                />
            
        );
};

export default BlogPageComponent;
