import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
    
        let images = [
            { imageSrc: "/static/blog/2018/05/plener_slubny_lomnicki_staw_0001.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/plener_slubny_lomnicki_staw_0022.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/plener_slubny_lomnicki_staw_0003.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/plener_slubny_lomnicki_staw_0030.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/plener_slubny_lomnicki_staw_0002.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/plener_slubny_lomnicki_staw_0005.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/plener_slubny_lomnicki_staw_0006.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/plener_slubny_lomnicki_staw_0007.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/plener_slubny_lomnicki_staw_0017.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/plener_slubny_lomnicki_staw_0009.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/plener_slubny_lomnicki_staw_0008.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/plener_slubny_lomnicki_staw_0011.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/plener_slubny_lomnicki_staw_0013.jpg", height: 595 },
            { imageSrc: "/static/blog/2018/05/plener_slubny_lomnicki_staw_0014.jpg", height: 850 },
            { imageSrc: "/static/blog/2018/05/plener_slubny_lomnicki_staw_0015.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/plener_slubny_lomnicki_staw_0019.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/plener_slubny_lomnicki_staw_0018.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/plener_slubny_lomnicki_staw_0023.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/plener_slubny_lomnicki_staw_0025.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/plener_slubny_lomnicki_staw_0024.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/plener_slubny_lomnicki_staw_0026.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/plener_slubny_lomnicki_staw_0021.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/plener_slubny_lomnicki_staw_0027.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/plener_slubny_lomnicki_staw_0028.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/plener_slubny_lomnicki_staw_0029.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/plener_slubny_lomnicki_staw_0020.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/plener_slubny_lomnicki_staw_0010.jpg", height: 850 },
            { imageSrc: "/static/blog/2018/05/plener_slubny_lomnicki_staw_0036.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/plener_slubny_lomnicki_staw_0031.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/plener_slubny_lomnicki_staw_0032.jpg", height: 762 },
            { imageSrc: "/static/blog/2018/05/plener_slubny_lomnicki_staw_0033.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/plener_slubny_lomnicki_staw_0035.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/plener_slubny_lomnicki_staw_0034.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/05/plener_slubny_lomnicki_staw_0037.jpg", height: 762 },
            { imageSrc: "/static/blog/2018/05/plener_slubny_lomnicki_staw_0012.jpg", height: 763 },
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticImagesPath + "plener-slubny-slowacja-lomnicki-staw-szczyrbskie-pleso-start-1.jpg"}
                    images={images}
                    headTitle={"Plener ??lubny S??owacja, ??omnicki Staw, Szczyrbskie Pleso."}
                    headDescription={"Plener ??lubny S??owacja, ??omnicki Staw, Szczyrbskie Pleso. Zapraszam do ogl??dania."}
                    headKeywords={"Plener ??lubny S??owacja, ??omnicki Staw, Szczyrbskie Pleso"}
                    headUrl={"https://99foto.pl/plener-slubny-slowacja-lomnicki-staw-szczyrbskie-pleso"}
                    entryContentP1={
                        "D??ugi majowy weekend to co roku du??o wolnego i ??wietna okazja na odpoczynek w g??rach. Gosia i Rafa?? sw??j zimowy ??lub podsumowali letnim plenerem, kt??ry wykonali??my na S??owacji dos??ownie wdrapuj??c si?? na ??omnicki Staw i dla odmiany leniwie spaceruj??c w okolicach Szczyrbskiego Jeziora. W ??rod?? rano w Jordanowie przywita??o nas pi??kne s??o??ce, a prognoza pogody wskazywa??a, ??e przez ca??y dzie?? nie spadnie najmniejsza kropla deszczu. Warunki wymarzone, wi??c po kilkunastu minutach jazdy samochodem stan??li??my przy kasach w Tatrza??skiej ??omnicy. Poniewa?? droga na szczyt jest dwuetapowa, wia??o mocno, a pierwsza kolejka ma wsp????czynnik odporno??ci na g??rski wiatr w granicach zera wi??c mini gondolka nie mog??a wystartowa??."
                    }
                    entryContentP2={
                        "Okaza??o si??, ??e nakre??lona przez kasjerk?? perspektywa trzy godzinnego marszu w strojach ??lubnych, z plecakiem na szczyt nie mog??y jednak zniech??ci?? Gosi i Rafa??a, przed osi??gni??ciem celu wyprawy. Wyruszyli??my ze stoperem i po czterdziestu pi??ciu minutach marszu dotarli??my do pierwszej bazy. W tym miejscu druga kolejka, du??a, gondolowa jak na Kasprowy, uratowa??a nam ??ycie i wyjechali??my na szczyt. Warunki boskie, ma??o turyst??w, bo nikomu nie chcia??o si?? drepta?? tych trzech godzin pod g??r??, pi??kne s??o??ce i nie taki znowu silny wiatr. Dalej by??o ju?? ??atwo, pyszny obiadek, kawka, spacer po Jeziorze Szczyrbskim por??wnywalny z w??dr??wk?? po Krakowskich B??oniach i wieczorny powr??t do domu. Du??o rozmawiali??my, wymieniaj??c bran??owe uwagi i razem bardzo mi??o sp??dzili??my ten dzie??. Oby wi??cej takich plener??w. Mi??ego ogl??dania i pami??tajcie na ??lubna sesj?? zdj??ciow?? zamiast do Polski jed??cie prosto do S??owacji."
                    }
                    slug={"plener-slubny-slowacja-lomnicki-staw-szczyrbskie-pleso"}
                    title={"PLENER ??LUBNY S??OWACJA, ??OMNICKI STAW, SZCZYRBSKIE PLESO - GOSIA I RAFA??"}
                    tags={"plener ??lubny s??owacja, sesja zdj??ciowa ??omnicki staw, szczyrbskie pleso"}
                    date={"2 maja 2018"}
                    menuNames={"MA??GORZATA I RAFA??"}
                    menuTitle={"PLENER ??LUBNY S??OWACJA, ??OMNICKI STAW"}
                    leadNames={"NATALIA i PIOTR"}
                    leadTitle={"HOTEL MARGERITA, MAGICZNY WYSTR??J SALI WESELNEJ W KRAKOWIE"}
                    leadUrl={"/hotel-margerita-magiczny-wystroj-sali-weselnej-w-krakowie"}
                    leadImage={process.env.staticImagesPath + "hotel_margerita_krakow_magiczny_wystroj_sali_weselnej_w_krakowie-start.jpg"}
                />
            
        );
};

export default BlogPageComponent;
