import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
  
        let images = [
            { imageSrc: "/static/blog/2017/11/sesja_zdjeciowa_strebskie_pleso_slowacja_0001.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/11/sesja_zdjeciowa_strebskie_pleso_slowacja_0004.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/11/sesja_zdjeciowa_strebskie_pleso_slowacja_0002.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/11/sesja_zdjeciowa_strebskie_pleso_slowacja_0006.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/11/sesja_zdjeciowa_strebskie_pleso_slowacja_0003.jpg", height: 850 },
            { imageSrc: "/static/blog/2017/11/sesja_zdjeciowa_strebskie_pleso_slowacja_0005.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/11/sesja_zdjeciowa_strebskie_pleso_slowacja_0007.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/11/sesja_zdjeciowa_strebskie_pleso_slowacja_0008.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/11/sesja_zdjeciowa_strebskie_pleso_slowacja_0009.jpg", height: 527 },
            { imageSrc: "/static/blog/2017/11/sesja_zdjeciowa_strebskie_pleso_slowacja_0040.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/11/sesja_zdjeciowa_strebskie_pleso_slowacja_0023.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/11/sesja_zdjeciowa_strebskie_pleso_slowacja_0011.jpg", height: 850 },
            { imageSrc: "/static/blog/2017/11/sesja_zdjeciowa_strebskie_pleso_slowacja_0012.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/11/sesja_zdjeciowa_strebskie_pleso_slowacja_0014.jpg", height: 762 },
            { imageSrc: "/static/blog/2017/11/sesja_zdjeciowa_strebskie_pleso_slowacja_0015.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/11/sesja_zdjeciowa_strebskie_pleso_slowacja_0013.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/11/sesja_zdjeciowa_strebskie_pleso_slowacja_0033.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/11/sesja_zdjeciowa_strebskie_pleso_slowacja_0016.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/11/sesja_zdjeciowa_strebskie_pleso_slowacja_0017.jpg", height: 762 },
            { imageSrc: "/static/blog/2017/11/sesja_zdjeciowa_strebskie_pleso_slowacja_0018.jpg", height: 850 },
            { imageSrc: "/static/blog/2017/11/sesja_zdjeciowa_strebskie_pleso_slowacja_0019.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/11/sesja_zdjeciowa_strebskie_pleso_slowacja_0021.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/11/sesja_zdjeciowa_strebskie_pleso_slowacja_0020.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/11/sesja_zdjeciowa_strebskie_pleso_slowacja_0022.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/11/sesja_zdjeciowa_strebskie_pleso_slowacja_0010.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/11/sesja_zdjeciowa_strebskie_pleso_slowacja_0025.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/11/sesja_zdjeciowa_strebskie_pleso_slowacja_0026.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/11/sesja_zdjeciowa_strebskie_pleso_slowacja_0027.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/11/sesja_zdjeciowa_strebskie_pleso_slowacja_0028.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/11/sesja_zdjeciowa_strebskie_pleso_slowacja_0037.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/11/sesja_zdjeciowa_strebskie_pleso_slowacja_0030.jpg", height: 850 },
            { imageSrc: "/static/blog/2017/11/sesja_zdjeciowa_strebskie_pleso_slowacja_0031.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/11/sesja_zdjeciowa_strebskie_pleso_slowacja_0043.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/11/sesja_zdjeciowa_strebskie_pleso_slowacja_0034.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/11/sesja_zdjeciowa_strebskie_pleso_slowacja_0032.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/11/sesja_zdjeciowa_strebskie_pleso_slowacja_0036.jpg", height: 402 },
            { imageSrc: "/static/blog/2017/11/sesja_zdjeciowa_strebskie_pleso_slowacja_0039.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/11/sesja_zdjeciowa_strebskie_pleso_slowacja_0038.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/11/sesja_zdjeciowa_strebskie_pleso_slowacja_0024.jpg", height: 762 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticImagesPath + "sesja_slubna_strbskie_pleso_i_popradzki_staw_slowacja_start.jpg"}
                    images={images}
                    headTitle={"Sesja ??lubna Strbskie Pleso, Popradzki Staw, S??owacja"}
                    headDescription={"Iwona i Marcin w idealnie wybrany dzie??. S??owackie g??ry Strbskie Pleso, Popradzki Staw. Zapraszam na bloga i kilka zdj???? z tej sesji plenerowej."}
                    headKeywords={"sesja ??lubna s??owacja,plener strbskie pleso,popradzki staw zdj??cia ??lubne"}
                    headUrl={"https://99foto.pl/sesja-slubna-strbskie-pleso-i-popradzki-staw-slowacja"}
                    entryContentP1={
                        "Tak, to by?? w??a??nie ten tydzie??, d??ugo zapowiadana pogoda, temperatura i odpowiednio pokolorowane li??cie. Wszystko tego dnia zapowiada??o ??wietny plener w g??rach S??owacji. Zainspirowani zdj??ciami koleg??w fotograf??w, wybrali??my si?? wszyscy po raz pierwszy w pi??kne miejsca, kt??rymi by??y Popradzki Staw i Strbskie Pleso. Pierwsza miejsc??wka, w kt??rej nasz plan dnia podyktowa?? nam post??j to rzeka Poprad, kt??ra przeci????a nasz?? drog?? dojazdow?? do jeziora. Chwila niepewno??ci i ??wietny widok z pewno??ci?? nie do powt??rzenia ju?? nawet nast??pnego dnia, a co dopiero tydzie?? p????niej. Poniewa?? czasu do zachodu s??o??ca by??o du??o, wdrapywali??my si?? przez godzink?? asfaltow?? drog?? w miejsce, kt??re zdecydowanie pokonuje Morskie Oko, a jest nim Popradzki Staw."
                    }
                    entryContentP2={
                        'Mniej ludzi, malownicze jezioro, ogromne g??ry, du??o ??wietnych kadr??w do wypatrzenia. W drodze powrotnej zrobili??my te?? kilka zdj???? w lesie. Ko??c??wka to szukanie dw??ch kamieni z kadru <a href="https://marcinsosnicki.pl" target="_blank" rel="nofollow">Marcina So??nickiego</a> i zachwyt nad jesieni?? o??wietlon?? promieniami zachodz??cego s??o??ca. Na koniec zjedli??my pyszny obiadek w Tatrza??skiej ??omnicy, zrelaksowani i zadowoleni wr??cili??my do naszych dom??w. Polecam to miejsce na plenery i mam nadziej??, ??e ka??dego roku znajdzie si?? jedna para, kt??ra mnie tam zabierze. Mi??ego ogl??dania.'
                    }
                    slug={"sesja-slubna-strbskie-pleso-i-popradzki-staw-slowacja"}
                    title={"SESJA ??LUBNA STRBSKIE PLESO i POPRADZKI STAW, S??OWACJA - IWONA i MARCIN"}
                    tags={"plener strbskie pleso, popradzki staw zdj??cia ??lubne, sesja ??lubna S??owacja"}
                    date={"3 listopada 2017"}
                    menuNames={"IWONA I MARCIN"}
                    menuTitle={"SESJA ??LUBNA STRBSKIE PLESO i POPRADZKI STAW, S??OWACJA"}
                    leadNames={"IWONA i MARCIN"}
                    leadTitle={"WESELE W G??RALSKIM KLIMACIE PRZYSTA?? KABANOS SPYTKOWICE"}
                    leadUrl={"/wesele-w-goralskim-klimacie-przystan-kabanos-spytkowice"}
                    leadImage={process.env.staticImagesPath + "wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_start.jpg"}
                />
            
        );
};

export default BlogPageComponent;
