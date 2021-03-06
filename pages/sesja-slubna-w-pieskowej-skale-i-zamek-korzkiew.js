import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
   
        let images = [
            { imageSrc: "/static/blog/2018/09/sesja_slubna_zamek_pieskowa_skala_0001.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/09/sesja_slubna_zamek_pieskowa_skala_0002.jpg", height: 850 },
            { imageSrc: "/static/blog/2018/09/sesja_slubna_zamek_pieskowa_skala_0016.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/09/sesja_slubna_zamek_pieskowa_skala_0009.jpg", height: 850 },
            { imageSrc: "/static/blog/2018/09/sesja_slubna_zamek_pieskowa_skala_0004.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/09/sesja_slubna_zamek_pieskowa_skala_0007.jpg", height: 850 },
            { imageSrc: "/static/blog/2018/09/sesja_slubna_zamek_pieskowa_skala_0005.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/09/sesja_slubna_zamek_pieskowa_skala_0006.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/09/sesja_slubna_zamek_pieskowa_skala_0003.jpg", height: 762 },
            { imageSrc: "/static/blog/2018/09/sesja_slubna_zamek_pieskowa_skala_0011.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/09/sesja_slubna_zamek_pieskowa_skala_0008.jpg", height: 850 },
            { imageSrc: "/static/blog/2018/09/sesja_slubna_zamek_pieskowa_skala_0010.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/09/sesja_slubna_zamek_pieskowa_skala_0012.jpg", height: 851 },
            { imageSrc: "/static/blog/2018/09/sesja_slubna_zamek_pieskowa_skala_0013.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/09/sesja_slubna_zamek_pieskowa_skala_0014.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/09/sesja_slubna_zamek_pieskowa_skala_0017.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/09/sesja_slubna_zamek_pieskowa_skala_0018.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/09/sesja_slubna_zamek_pieskowa_skala_0019.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/09/sesja_slubna_zamek_pieskowa_skala_0029.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/09/sesja_slubna_zamek_pieskowa_skala_0015.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/09/sesja_slubna_zamek_pieskowa_skala_0021.jpg", height: 850 },
            { imageSrc: "/static/blog/2018/09/sesja_slubna_zamek_pieskowa_skala_0022.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/09/sesja_slubna_zamek_pieskowa_skala_0031.jpg", height: 762 },
            { imageSrc: "/static/blog/2018/09/sesja_slubna_zamek_pieskowa_skala_0020.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/09/sesja_slubna_zamek_pieskowa_skala_0023.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/09/sesja_slubna_zamek_pieskowa_skala_0026.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/09/sesja_slubna_zamek_pieskowa_skala_0025.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/09/sesja_slubna_zamek_pieskowa_skala_0027.jpg", height: 850 },
            { imageSrc: "/static/blog/2018/09/sesja_slubna_zamek_pieskowa_skala_0024.jpg", height: 762 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticImagesPath + "plener_slubny_zamek_pieskowa_skala.jpg"}
                    images={images}
                    headTitle={"Sesja ??lubna Zamek Pieskowa Ska??a, Zamek Korzkiew"}
                    headDescription={"Zamek Pieskowa Ska??a, ??lubna sesja zdj??ciowa Kristiny i Aleksandra. Gonitwa za zachodz??cym s??o??cem i moc emocji. Na sesje tylko Krak??w. Zapraszam do ogl??dania."}
                    headKeywords={"Sesja ??lubna Zamek Pieskowa Ska??a, Zamek Korzkiew, miejsce na sesj?? plenerow?? w Krakowie"}
                    headUrl={"https://99foto.pl/sesja-slubna-w-pieskowej-skale-i-zamek-korzkiew"}
                    entryContentP1={
                        "Ostatnio du??o si?? dzieje i kilka wpis??w ??lubnych pojawi??o si?? tylko w strefie klienta. Czas to jednak zmieni?? i nadrobi?? zaleg??o??ci wpisem co prawda kr??tszym ni?? ??lubny, bo plenerowym, ale zawsze wpisem. ??lub Kristiny i Aleksandra mia??em przyjemno???? fotografowa?? w sierpniu, b??d??c jednym z zaproszonych go??ci Dworu Sierak??w. Trzy tygodnie p????niej um??wili??my si?? na sesj?? plenerow?? w Krakowie. Na poszukiwania trzech sk??adowych czyli chwili, ??wiat??a i kadru wybrali??my si?? w dobrze znane mi miejsca."
                    }
                    entryContentP2={
                        'Pierwszym z nich by?? <a href="https://korzkiew.pl/" target="_blank" rel="nofollow">Zamek w Korzkwi</a>, a drugim <a href="https://pieskowaskala.eu/" target="_blank" rel="nofollow">Zamek w Pieskowej Skale</a>. Czyli by??o zamkowo i s??onecznie. Po raz kolejny gonili??my zachodz??ce s??o??ce wspinaj??c si?? wy??ej i wy??ej. Mam nadziej?? pojawi?? si?? w tych miejscach jeszcze co najmniej raz w tym roku, korzystaj??c z urok??w polskiej z??otej jesieni. Serdecznie zapraszam na kilka zdj???? zrobionych tego popo??udnia. Mi??ego ogl??dania.'
                    }
                    slug={"sesja-slubna-w-pieskowej-skale-i-zamek-korzkiew"}
                    title={"SESJA ??LUBNA W PIESKOWEJ SKALE i ZAMEK KORZKIEW - KRISTINA i ALEKSANDR"}
                    tags={"Sesja ??lubna Zamek Pieskowa Ska??a, Zamek Korzkiew, miejsce na sesj?? plenerow?? w Krakowie"}
                    date={"19 wrze??nia 2018"}
                    menuNames={"KRISTINA i ALEKSANDR"}
                    menuTitle={"SESJA ??LUBNA W PIESKOWEJ SKALE i ZAMEK KORZKIEW"}
                    leadNames={"DAJANA i SYLWESTER"}
                    leadTitle={"OGR??D BOTANICZNY W KRAKOWIE, ??LUBNA SESJA ZDJ??CIOWA"}
                    leadUrl={"/ogrod-botaniczny-w-krakowie-slubna-sesja-zdjeciowa"}
                    leadImage={process.env.staticImagesPath + "ogrod_botaniczny.jpg"}
                />
            
        );
};

export default BlogPageComponent;
