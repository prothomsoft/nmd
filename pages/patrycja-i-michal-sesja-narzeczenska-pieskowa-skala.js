import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
   
        let images = [
            { imageSrc: "/static/blog/2015/07/sesja_narzeczenska_pieskowa_skala_0001.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/07/sesja_narzeczenska_pieskowa_skala_0002.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/07/sesja_narzeczenska_pieskowa_skala_0003.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/07/sesja_narzeczenska_pieskowa_skala_0004.jpg", height: 851 },
            { imageSrc: "/static/blog/2015/07/sesja_narzeczenska_pieskowa_skala_0005.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/07/sesja_narzeczenska_pieskowa_skala_0006.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/07/sesja_narzeczenska_pieskowa_skala_0007.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/07/sesja_narzeczenska_pieskowa_skala_0008.jpg", height: 851 },
            { imageSrc: "/static/blog/2015/07/sesja_narzeczenska_pieskowa_skala_0009.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/07/sesja_narzeczenska_pieskowa_skala_0010.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/07/sesja_narzeczenska_pieskowa_skala_0011.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/07/sesja_narzeczenska_pieskowa_skala_0012.jpg", height: 852 },
            { imageSrc: "/static/blog/2015/07/sesja_narzeczenska_pieskowa_skala_0013.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/07/sesja_narzeczenska_pieskowa_skala_0014.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/07/sesja_narzeczenska_pieskowa_skala_0015.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/07/sesja_narzeczenska_pieskowa_skala_0016.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/07/sesja_narzeczenska_pieskowa_skala_0017.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/07/sesja_narzeczenska_pieskowa_skala_0018.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/07/sesja_narzeczenska_pieskowa_skala_0019.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/07/sesja_narzeczenska_pieskowa_skala_0020.jpg", height: 851 },
            { imageSrc: "/static/blog/2015/07/sesja_narzeczenska_pieskowa_skala_0021.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/07/sesja_narzeczenska_pieskowa_skala_0022.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/07/sesja_narzeczenska_pieskowa_skala_0023.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/07/sesja_narzeczenska_pieskowa_skala_0024.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/07/sesja_narzeczenska_pieskowa_skala_0025.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/07/sesja_narzeczenska_pieskowa_skala_0027.jpg", height: 851 },
            { imageSrc: "/static/blog/2015/07/sesja_narzeczenska_pieskowa_skala_0026.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/07/sesja_narzeczenska_pieskowa_skala_0028.jpg", height: 762 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticImagesPath + "patrycja_i_michal_sesja_narzeczenska_pieskowa_skala_start.jpg"}
                    images={images}
                    headTitle={"Sesja narzecze??ska Pieskowa Ska??a"}
                    headDescription={"Troch?? deszczu, troch?? gradu i przeb??yski s??o??ca - taka pogoda nie zaskoczy??a Patrycj?? i Micha??a podczas ich sesji narzecze??skiej w Pieskowej Skale."}
                    headKeywords={"sesja narzecze??ska pieskowa ska??a,plener ??lubny w ojcowie"}
                    headUrl={"https://99foto.pl/patrycja-i-michal-sesja-narzeczenska-pieskowa-skala"}
                    entryContentP1={
                        "Czasem trzeba wyj???? ze strefy komfortu i nawet, gdy na niebie pojawi?? si?? chmury, twoja pogoda m??wi, ??e b??dzie na pewno pada?? deszcz, a mo??e nawet grad &#8211; nale??y twardo realizowa?? plan. Tym razem plan ten to sesja narzecze??ska Patrycji i Micha??a w Pieskowej Skale. Tury??ci pochowali si?? przed deszczem, natomiast my przeszli??my szybki kurs pozowania."
                    }
                    entryContentP2={
                        "Zamek w Pieskowej Skale jest remontowany i my??l??, ??e kiedy remont si?? sko??czy b??dzie to niesamowite miejsce na plenery ??lubne i narzecze??skie w okolicach Krakowa &#8211; to tylko 28 kilometr??w. ??lub Patrycji i Micha??a odb??dzie si?? 15 sierpnia, ale ju?? teraz serdecznie zapraszam na relacj?? z tego wydarzenia, kt??ra pojawi si?? na moim blogu ju?? wkr??tce. Tymczasem mi??ego ogl??dania."
                    }
                    slug={"patrycja-i-michal-sesja-narzeczenska-pieskowa-skala"}
                    title={"SESJA NARZECZE??SKA PIESKOWA SKA??A - PATRYCJA i MICHA??"}
                    tags={"sesja narzecze??ska pieskowa ska??a,plener ??lubny w ojcowie"}
                    date={"20 lipca 2015"}
                    menuNames={"PATRYCJA i MICHA??"}
                    menuTitle={"SESJA NARZECZE??SKA PIESKOWA SKA??A"}
                    leadNames={"IWONA i MARCIN"}
                    leadTitle={"WESELE W G??RALSKIM KLIMACIE PRZYSTA?? KABANOS SPYTKOWICE"}
                    leadUrl={"/wesele-w-goralskim-klimacie-przystan-kabanos-spytkowice"}
                    leadImage={process.env.staticImagesPath + "wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_start.jpg"}
                />
            
        );
};

export default BlogPageComponent;
