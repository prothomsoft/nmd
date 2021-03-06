import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
  
        let images = [
            { imageSrc: "/static/blog/2017/11/sesja_zdjeciowa_dwor_tomaszowice_krakow_0002.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/11/sesja_zdjeciowa_dwor_tomaszowice_krakow_0001.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/11/sesja_zdjeciowa_dwor_tomaszowice_krakow_0003.jpg", height: 850 },
            { imageSrc: "/static/blog/2017/11/sesja_zdjeciowa_dwor_tomaszowice_krakow_0004.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/11/sesja_zdjeciowa_dwor_tomaszowice_krakow_0005.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/11/sesja_zdjeciowa_dwor_tomaszowice_krakow_0016.jpg", height: 850 },
            { imageSrc: "/static/blog/2017/11/sesja_zdjeciowa_dwor_tomaszowice_krakow_0007.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/11/sesja_zdjeciowa_dwor_tomaszowice_krakow_0008.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/11/sesja_zdjeciowa_dwor_tomaszowice_krakow_0009.jpg", height: 850 },
            { imageSrc: "/static/blog/2017/11/sesja_zdjeciowa_dwor_tomaszowice_krakow_0011.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/11/sesja_zdjeciowa_dwor_tomaszowice_krakow_0010.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/11/sesja_zdjeciowa_dwor_tomaszowice_krakow_0012.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/11/sesja_zdjeciowa_dwor_tomaszowice_krakow_0013.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/11/sesja_zdjeciowa_dwor_tomaszowice_krakow_0014.jpg", height: 851 },
            { imageSrc: "/static/blog/2017/11/sesja_zdjeciowa_dwor_tomaszowice_krakow_0015.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/11/sesja_zdjeciowa_dwor_tomaszowice_krakow_0006.jpg", height: 850 },
            { imageSrc: "/static/blog/2017/11/sesja_zdjeciowa_dwor_tomaszowice_krakow_0028.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/11/sesja_zdjeciowa_dwor_tomaszowice_krakow_0017.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/11/sesja_zdjeciowa_dwor_tomaszowice_krakow_0018.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/11/sesja_zdjeciowa_dwor_tomaszowice_krakow_0019.jpg", height: 806 },
            { imageSrc: "/static/blog/2017/11/sesja_zdjeciowa_dwor_tomaszowice_krakow_0020.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/11/sesja_zdjeciowa_dwor_tomaszowice_krakow_0021.jpg", height: 850 },
            { imageSrc: "/static/blog/2017/11/sesja_zdjeciowa_dwor_tomaszowice_krakow_0023.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/11/sesja_zdjeciowa_dwor_tomaszowice_krakow_0022.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/11/sesja_zdjeciowa_dwor_tomaszowice_krakow_0024.jpg", height: 806 },
            { imageSrc: "/static/blog/2017/11/sesja_zdjeciowa_dwor_tomaszowice_krakow_0025.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/11/sesja_zdjeciowa_dwor_tomaszowice_krakow_0026.jpg", height: 805 },
            { imageSrc: "/static/blog/2017/11/sesja_zdjeciowa_dwor_tomaszowice_krakow_0027.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/11/sesja_zdjeciowa_dwor_tomaszowice_krakow_0029.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/11/sesja_zdjeciowa_dwor_tomaszowice_krakow_0030.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/11/sesja_zdjeciowa_dwor_tomaszowice_krakow_0031.jpg", height: 763 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticImagesPath + "sesja_zdjeciowa_dwor_tomaszowice_krakow_start.jpg"}
                    images={images}
                    headTitle={"Sesja zdj??ciowa Dw??r Tomaszowice, Opera Krakowska, Kazimierz"}
                    headDescription={"Serdecznie zapraszam na ostatni w tym roku jesienny i krakowski plener Karoliny i Bartka. Dw??r Tomaszowice, Opera Krakowska i zakamarki Kazimierza."}
                    headKeywords={"sesja zdj??ciowa dw??r tomaszowice, plener ??lubny kazimierz krak??w"}
                    headUrl={"https://99foto.pl/sesja-zdjeciowa-dwor-tomaszowice-opera-kazimierz"}
                    entryContentP1={
                        "Dzisiaj zapraszam na ostatni w tym roku jesienny krakowski plener Karoliny i Bartka. Do zrealizowania planu A, kt??ry zak??ada??, ??e wybieramy si?? do Zakopanego i spacerujemy do Morskiego Oka, zabrak??o nam dos??ownie jednego dnia. Akurat w sobot??, pocz??tek tego wolnego weekendu, w kt??rym mieli??my si?? wybra?? w g??ry g??sta mg??a przys??oni??a ??wiat i to nie tylko w Krakowie, wsz??dzie."
                    }
                    entryContentP2={
                        "Pozosta?? wi??c plan B i sprawdzone krakowskie miejsca gwarantuj??ce ??wietne zdj??cia podczas jesiennej aury. M??wi?? tutaj o Dworze w Tomaszowicach, kt??ry zachwyca swoim angielskim stylem i sercu Krakowa, czyli Kazimierzu. Ogl??daj??c zdj??cia zauwa??ycie, ??e Karolina i Bartek to ??wietni modele. Niekt??re pozy, kt??re sami zaproponowali nada??y tej sesji wyj??tkowego charakteru. Bardzo mi??o sp??dzili??my czas w sobotnie przedpo??udnie i bardzo chce Wam pokaza?? t?? sesj?? zdj??ciow?? bo warto wr??ci?? do tych ostatnich promieni jesiennego s??o??ca. Mi??ego ogl??dania. "
                    }
                    slug={"sesja-zdjeciowa-dwor-tomaszowice-opera-kazimierz"}
                    title={"SESJA ZDJ??CIOWA DW??R TOMASZOWICE, OPERA, KAZIMIERZ - KAROLINA i BARTEK"}
                    tags={"SESJA ZDJ??CIOWA DW??R TOMASZOWICE, OPERA, KAZIMIERZ"}
                    date={"13 LISTOPADA 2017"}
                    menuNames={"KAROLINA i BARTEK"}
                    menuTitle={"SESJA ZDJ??CIOWA DW??R TOMASZOWICE, OPERA, KAZIMIERZ"}
                    leadNames={"IWONA I MARCIN"}
                    leadTitle={"SESJA ??LUBNA STRBSKIE PLESO i POPRADZKI STAW, S??OWACJA"}
                    leadUrl={"/sesja-slubna-strbskie-pleso-i-popradzki-staw-slowacja"}
                    leadImage={process.env.staticImagesPath + "sesja_slubna_strbskie_pleso_i_popradzki_staw_slowacja_start.jpg"}
                />
            
        );
};

export default BlogPageComponent;
