import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
    
        let images = [
            { imageSrc: "/static/blog/2020/10/plener_slubny_bielsko_szyndzielnia_klimczok_0001.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/10/plener_slubny_bielsko_szyndzielnia_klimczok_0004.jpg", height: 763 },         
            { imageSrc: "/static/blog/2020/10/plener_slubny_bielsko_szyndzielnia_klimczok_0003.jpg", height: 843 },
            { imageSrc: "/static/blog/2020/10/plener_slubny_bielsko_szyndzielnia_klimczok_0015.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/10/plener_slubny_bielsko_szyndzielnia_klimczok_0011.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/10/plener_slubny_bielsko_szyndzielnia_klimczok_0032.jpg", height: 763 },   
            { imageSrc: "/static/blog/2020/10/plener_slubny_bielsko_szyndzielnia_klimczok_0005.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/10/plener_slubny_bielsko_szyndzielnia_klimczok_0006.jpg", height: 851 },
            { imageSrc: "/static/blog/2020/10/plener_slubny_bielsko_szyndzielnia_klimczok_0013.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/10/plener_slubny_bielsko_szyndzielnia_klimczok_0007.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/10/plener_slubny_bielsko_szyndzielnia_klimczok_0033.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/10/plener_slubny_bielsko_szyndzielnia_klimczok_0009.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/10/plener_slubny_bielsko_szyndzielnia_klimczok_0019.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/10/plener_slubny_bielsko_szyndzielnia_klimczok_0027.jpg", height: 763 },        
            { imageSrc: "/static/blog/2020/10/plener_slubny_bielsko_szyndzielnia_klimczok_0012.jpg", height: 805 },
            { imageSrc: "/static/blog/2020/10/plener_slubny_bielsko_szyndzielnia_klimczok_0010.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/10/plener_slubny_bielsko_szyndzielnia_klimczok_0016.jpg", height: 527 },
            { imageSrc: "/static/blog/2020/10/plener_slubny_bielsko_szyndzielnia_klimczok_0008.jpg", height: 763 }, 
            { imageSrc: "/static/blog/2020/10/plener_slubny_bielsko_szyndzielnia_klimczok_0024.jpg", height: 383 },
            { imageSrc: "/static/blog/2020/10/plener_slubny_bielsko_szyndzielnia_klimczok_0017.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/10/plener_slubny_bielsko_szyndzielnia_klimczok_0021.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/10/plener_slubny_bielsko_szyndzielnia_klimczok_0029.jpg", height: 764 },
            { imageSrc: "/static/blog/2020/10/plener_slubny_bielsko_szyndzielnia_klimczok_0026.jpg", height: 763 },  
            { imageSrc: "/static/blog/2020/10/plener_slubny_bielsko_szyndzielnia_klimczok_0020.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/10/plener_slubny_bielsko_szyndzielnia_klimczok_0018.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/10/plener_slubny_bielsko_szyndzielnia_klimczok_0025.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/10/plener_slubny_bielsko_szyndzielnia_klimczok_0022.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/10/plener_slubny_bielsko_szyndzielnia_klimczok_0030.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/10/plener_slubny_bielsko_szyndzielnia_klimczok_0031.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/10/plener_slubny_bielsko_szyndzielnia_klimczok_0014.jpg", height: 353 },  
            { imageSrc: "/static/blog/2020/10/plener_slubny_bielsko_szyndzielnia_klimczok_0028.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/10/plener_slubny_bielsko_szyndzielnia_klimczok_0034.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/10/plener_slubny_bielsko_szyndzielnia_klimczok_0002.jpg", height: 762 }
        ];

        return <BlogPageComponentNew
        slide={process.env.staticImagesPath + "plener_slubny_bielsko_szyndzielnia_klimczok.jpg"}
        images={images}
        headTitle={"Plener w Beskidach, Sesja ??lubna w Beskidzie ??l??skim"}
        headDescription={"Plener w Beskidach, Sesja ??lubna w Beskidzie ??l??skim, Star??wka w Bielsku Bia??ej, Szyndzielnia i Klimczok. Zapraszam na sesj?? ??lubn?? Magdaleny i Jonasza."}
        headKeywords={"Plener ??lubny w Beskidach, sesja ??lubna w Beskidzie ??l??skim"}
        headUrl={"https://99foto.pl/plener-w-beskidach-sesja-slubna-w-beskidzie-slaskim"}
        entryContentP1={
            "You have to constantly innovate and think of interesting ideas to continue to grow - tak i mo??e w??a??nie dlatego tym razem zabieram Was w miejsce w kt??rym dot??d jeszcze nie by??em, o porze dnia w kt??rej jeszcze nie fotografowa??em, aparatem fotograficznym i obiektywami, kt??re pojawi??y si?? na rynku nieca??e trzy tygodnie temu. Sesja ??lubna w Beskidzie ??l??skim to by??o takie wyj??cie ze strefy komfortu. Jad??c na t?? sesj?? plenerow?? wiedzia??em tylko, ??e Magdalena i Jonasz to doskona??a para i fotografowanie ich uczucia to b??dzie prawdziwa przyjemno????. Poranne godziny fotografowania wymusi??a potencjalna liczba os??b na ulicach miasta Bielsko Bia??a, kt??rych wiadomo lepiej nie mie?? na zdj??ciach. Tym razem to nie ja by??em przewodnikiem, a tras?? po uliczkach swojego rodzinnego miasta wytycza?? Jonasz, zasypuj??c nas ciekawymi anegdotami zwi??zanymi z histori?? tego miasta."
        }
        entryContentP2={
            "Bia??y Krzy?? po??o??ony na Prze????czy Salmopolskiej w Szczyrku to by??o planowane pierwsze po star??wce miejsce plenerowe. Popijaj??c kaw?? w Macu podj??li??my jednak inn?? spontaniczn?? decyzj??, ??e wyjedziemy licz??c?? 1810 metr??w d??ugo??ci kolejk?? linow?? na Szyndzielnie, a nast??pnie przespacerujemy si?? na Klimczok (1117 m n.p.m.). Nagrod?? za t?? decyzj?? by??a doskona??a widoczno????. Klimczok widzia?? Tatry, a to dla niego widok bardzo rzadki. Podsumowuj??c wypraw?? powiem Wam, ??e Bielsko Biala i Beskid ??l??ski mo??e by?? dobr?? alternatyw?? dla wypraw plenerowych w Tatry czy Pieniny. Plener w Beskidach to ??wietny pomys?? i polecam go ka??demu z ca??ego serca. Serdecznie zapraszam na kilka zdj???? i ??ycz?? mi??ego ogl??dania."
        }
        slug={"plener-w-beskidach-sesja-slubna-w-beskidzie-slaskim"}
        title={"PLENER W BESKIDACH, SESJA ??LUBNA W BESKIDZIE ??L??SKIM - MAGDALENA i JONASZ"}
        tags={"Plener ??lubny w Beskidach, sesja ??lubna w Beskidzie ??l??skim, Szyndzielnia, Klimczok"}
        date={"10 pa??dziernika 2020"}
        menuNames={"MAGDALENA i JONASZ"}
        menuTitle={"PLENER W BESKIDACH, SESJA ??LUBNA W BESKIDZIE ??L??SKIM"}
        leadNames={"MARTYNA i MICHA??"}
        leadTitle={"PLENER ??LUBNY ZAMEK PIESKOWA SKA??A"}
        leadUrl={"/plener-slubny-zamek-pieskowa-skala"}
        leadImage={process.env.staticImagesPath + "plener_slubny_zamek_pieskowa_skala_krakow.jpg"}
    />
}

export default BlogPageComponent;
