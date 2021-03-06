import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
   
        let images = [
            { imageSrc: "/static/blog/2016/06/sesja_poslubna_krakow_0001.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/06/sesja_poslubna_krakow_0002.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/06/sesja_poslubna_krakow_0003.jpg", height: 852 },
            { imageSrc: "/static/blog/2016/06/sesja_poslubna_krakow_0004.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/06/sesja_poslubna_krakow_0005.jpg", height: 851 },
            { imageSrc: "/static/blog/2016/06/sesja_poslubna_krakow_0006.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/06/sesja_poslubna_krakow_0007.jpg", height: 852 },
            { imageSrc: "/static/blog/2016/06/sesja_poslubna_krakow_0009.jpg", height: 526 },
            { imageSrc: "/static/blog/2016/06/sesja_poslubna_krakow_0008.jpg", height: 852 },
            { imageSrc: "/static/blog/2016/06/sesja_poslubna_krakow_0023.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/06/sesja_poslubna_krakow_0011.jpg", height: 851 },
            { imageSrc: "/static/blog/2016/06/sesja_poslubna_krakow_0012.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/06/sesja_poslubna_krakow_0013.jpg", height: 526 },
            { imageSrc: "/static/blog/2016/06/sesja_poslubna_krakow_0014.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/06/sesja_poslubna_krakow_0016.jpg", height: 852 },
            { imageSrc: "/static/blog/2016/06/sesja_poslubna_krakow_0015.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/06/sesja_poslubna_krakow_0017.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/06/sesja_poslubna_krakow_0018.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/06/sesja_poslubna_krakow_0019.jpg", height: 852 },
            { imageSrc: "/static/blog/2016/06/sesja_poslubna_krakow_0020.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/06/sesja_poslubna_krakow_0021.jpg", height: 851 },
            { imageSrc: "/static/blog/2016/06/sesja_poslubna_krakow_0022.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/06/sesja_poslubna_krakow_0024.jpg", height: 383 },
            { imageSrc: "/static/blog/2016/06/sesja_poslubna_krakow_0025.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/06/sesja_poslubna_krakow_0026.jpg", height: 851 },
            { imageSrc: "/static/blog/2016/06/sesja_poslubna_krakow_0010.jpg", height: 763 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticImagesPath + "sylwia_i_bartek_sesja_poslubna_krakow_start.jpg"}
                    images={images}
                    headTitle={"Zdj??cia ??lubne na Rynku w Krakowie"}
                    headDescription={"Wtorkowe popo??udnie z gwarantowan?? pogod?? i bia??ymi chmurkami sp??dzili??my z Sylwi?? i Barkiem spaceruj??c po Krakowie. Mi??ego ogl??dania."}
                    headKeywords={"sesja ??lubna kazimierz,plener ??lubny krak??w,zdj??cia ??lubne na rynku w krakowie"}
                    headUrl={"https://99foto.pl/sylwia-i-bartek-sesja-poslubna-krakow"}
                    entryContentP1={
                        "Tak, to by?? w??a??nie ten tydzie??, d??ugo zapowiadana pogoda, temperatura i odpowiednio pokolorowane li??cie. Wszystko tego dnia zapowiada??o ??wietny plener w g??rach S??owacji. Zainspirowani zdj??ciami koleg??w fotograf??w, wybrali??my si?? wszyscy po raz pierwszy w pi??kne miejsca, kt??rymi by??y Popradzki Staw i Strbskie Pleso. Pierwsza miejsc??wka, w kt??rej nasz plan dnia podyktowa?? nam post??j to rzeka Poprad, kt??ra przeci????a nasz?? drog?? dojazdow?? do jeziora. Chwila niepewno??ci i ??wietny widok z pewno??ci?? nie do powt??rzenia ju?? nawet nast??pnego dnia, a co dopiero tydzie?? p????niej. Poniewa?? czasu do zachodu s??o??ca by??o du??o, wdrapywali??my si?? przez godzink?? asfaltow?? drog?? w miejsce, kt??re zdecydowanie pokonuje Morskie Oko, a jest nim Popradzki Staw."
                    }
                    entryContentP2={
                        'Mniej ludzi, malownicze jezioro, ogromne g??ry, du??o ??wietnych kadr??w do wypatrzenia. W drodze powrotnej zrobili??my te?? kilka zdj???? w lesie. Ko??c??wka to szukanie dw??ch kamieni z kadru <a href="https://marcinsosnicki.pl" target="_blank" rel="nofollow">Marcina So??nickiego</a> i zachwyt nad jesieni?? o??wietlon?? promieniami zachodz??cego s??o??ca. Na koniec zjedli??my pyszny obiadek w Tatrza??skiej ??omnicy, zrelaksowani i zadowoleni wr??cili??my do naszych dom??w. Polecam to miejsce na plenery i mam nadziej??, ??e ka??dego roku znajdzie si?? jedna para, kt??ra mnie tam zabierze. Mi??ego ogl??dania.'
                    }
                    slug={"sylwia-i-bartek-sesja-poslubna-krakow"}
                    title={"SESJA ??LUBNA KRAK??W - SYLWIA i BARTEK"}
                    tags={"sesja ??lubna kazimierz,plener ??lubny krak??w,zdj??cia ??lubne na rynku w krakowie"}
                    date={"9 czerwca 2016"}
                    menuNames={"SYLWIA i BARTEK"}
                    menuTitle={"SESJA ??LUBNA KRAK??W"}
                    leadNames={"KAROLINA i BARTEK"}
                    leadTitle={"SESJA ZDJ??CIOWA DW??R TOMASZOWICE, OPERA, KAZIMIERZ"}
                    leadUrl={"/sesja-zdjeciowa-dwor-tomaszowice-opera-kazimierz"}
                    leadImage={process.env.staticImagesPath + "sesja_zdjeciowa_dwor_tomaszowice_krakow_start.jpg"}
                />
            
        );
};

export default BlogPageComponent;
