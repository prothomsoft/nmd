import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
    
        let images = [
            { imageSrc: "/static/blog/2020/09/plener_slubny_zamek_pieskowa_skala_krakow_0002.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/09/plener_slubny_zamek_pieskowa_skala_krakow_0003.jpg", height: 850 },
            { imageSrc: "/static/blog/2020/09/plener_slubny_zamek_pieskowa_skala_krakow_0004.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/09/plener_slubny_zamek_pieskowa_skala_krakow_0005.jpg", height: 850 },
            { imageSrc: "/static/blog/2020/09/plener_slubny_zamek_pieskowa_skala_krakow_0006.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/09/plener_slubny_zamek_pieskowa_skala_krakow_0010.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/09/plener_slubny_zamek_pieskowa_skala_krakow_0008.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/09/plener_slubny_zamek_pieskowa_skala_krakow_0009.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/09/plener_slubny_zamek_pieskowa_skala_krakow_0017.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/09/plener_slubny_zamek_pieskowa_skala_krakow_0011.jpg", height: 850 },
            { imageSrc: "/static/blog/2020/09/plener_slubny_zamek_pieskowa_skala_krakow_0026.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/09/plener_slubny_zamek_pieskowa_skala_krakow_0028.jpg", height: 763 },            
            { imageSrc: "/static/blog/2020/09/plener_slubny_zamek_pieskowa_skala_krakow_0014.jpg", height: 850 },
            { imageSrc: "/static/blog/2020/09/plener_slubny_zamek_pieskowa_skala_krakow_0015.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/09/plener_slubny_zamek_pieskowa_skala_krakow_0016.jpg", height: 850 },
            { imageSrc: "/static/blog/2020/09/plener_slubny_zamek_pieskowa_skala_krakow_0007.jpg", height: 763 },  
            { imageSrc: "/static/blog/2020/09/plener_slubny_zamek_pieskowa_skala_krakow_0018.jpg", height: 850 },
            { imageSrc: "/static/blog/2020/09/plener_slubny_zamek_pieskowa_skala_krakow_0019.jpg", height: 527 },
            { imageSrc: "/static/blog/2020/09/plener_slubny_zamek_pieskowa_skala_krakow_0020.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/09/plener_slubny_zamek_pieskowa_skala_krakow_0021.jpg", height: 527 },
            { imageSrc: "/static/blog/2020/09/plener_slubny_zamek_pieskowa_skala_krakow_0022.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/09/plener_slubny_zamek_pieskowa_skala_krakow_0023.jpg", height: 850 },
            { imageSrc: "/static/blog/2020/09/plener_slubny_zamek_pieskowa_skala_krakow_0024.jpg", height: 527 },
            { imageSrc: "/static/blog/2020/09/plener_slubny_zamek_pieskowa_skala_krakow_0025.jpg", height: 763 },           
            { imageSrc: "/static/blog/2020/09/plener_slubny_zamek_pieskowa_skala_krakow_0027.jpg", height: 850 },
            { imageSrc: "/static/blog/2020/09/plener_slubny_zamek_pieskowa_skala_krakow_0013.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/09/plener_slubny_zamek_pieskowa_skala_krakow_0029.jpg", height: 527 },
            { imageSrc: "/static/blog/2020/09/plener_slubny_zamek_pieskowa_skala_krakow_0030.jpg", height: 763 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticImagesPath + "plener_slubny_zamek_pieskowa_skala_krakow.jpg"}
                    images={images}
                    headTitle={"Plener ??lubny w Zamku Pieskowa Ska??a"}
                    headDescription={"D??ugi weekend w Krakowie? Na pewno warto zobaczy?? Zamek w Pieskowej Skale. Serdecznie zapraszam na sesj?? ??lubn?? Martyny i Micha??a. Mi??ego ogl??dania..."}
                    headKeywords={"plener ??lubny zamek pieskowa ska??a, sesja ??lubna w zamku"}
                    headUrl={"https://99foto.pl/plener-slubny-zamek-pieskowa-skala"}
                    entryContentP1={
                        "Po raz kolejny na moim blogu proponuj?? plener ??lubny w okolicach Krakowa i mam nadziej??, ??e razem z Martyn?? i Micha??em udowadniamy, ??e ??eby zrobi?? fajne zdj??cia nie trzeba jecha?? na koniec ??wiata. Tym razem w trakcie sesji ??lubej zwiedzili??my nie tylko herkulesowe okolice ale r??wnie?? weszli??my do ??rodka Zamku w Pieskowej Skale. Odnowione i oddane do u??ytku arkady, pilnie strze??one przez trzech dzielnych stra??nik??w (wci???? mniej ni?? trawa na Wawelu) i pi??kne okolice, w kt??rych pojawili??my si?? razem z promieniami zachodz??cego s??o??ca, pomog??y nam zrobi?? bardzo dobre zdj??cia. Martyna wygl??da??a niesamowicie, a jej pewno???? siebie i fakt, ??e od zawsze uwielbia pozowa?? do zdj???? moj?? prace sprowadzi??y tylko do naciskania spustu migawki."
                    }
                    entryContentP2={
                        "Do prostych r??wnie jak moje to z migawk?? zada?? Micha??a nale??a??o roz??mieszanie Martyny, oddawanie setek buziak??w i prowadzenie w kilku figurach pierwszego ta??ca. Tak wi??c podczas gdy Martyna i Micha?? pewnie jeszcze odsypiaj?? po??lubny wyjazd do Chorwacji ja serdecznie zapraszam do ogl??dania zdj???? z ich sesji ??lubnej w Zamku w Pieskowej Skale. Kilka wi??cej zdj???? r??wnie?? ??lubnych znajdziecie w strefie klienta po podaniu has??a z mojej wizyt??wki. Serdecznie zapraszam do ogl??dania i sesji ??lubnych w nadchodz??cym sezonie."
                    }
                    slug={"plener-slubny-zamek-pieskowa-skala"}
                    title={"PLENER ??LUBNY ZAMEK PIESKOWA SKA??A - MARTYNA i MICHA??"}
                    tags={"plener ??lubny zamek pieskowa ska??a, sesja ??lubna w zamku"}
                    date={"30 wrze??nia 2020"}
                    menuNames={"MARTYNA i MICHA??"}
                    menuTitle={"PLENER ??LUBNY ZAMEK PIESKOWA SKA??A"}
                    leadNames={"OLGA i DAWID"}
                    leadTitle={"SESJA W KRAKOWIE SUKIENNICE, HOTEL STARY, BULWARY WI??LANE"}
                    leadUrl={"/sesja-slubna-w-krakowie-sukiennice-hotel-stary-bulwary-wislane"}
                    leadImage={process.env.staticImagesPath + "sesja_slubna_sukiennice_hotel_stary_krakow_start.jpg"}
                />
            
        );
};

export default BlogPageComponent;
