import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
    
        let images = [
            { imageSrc: "/static/blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0001.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0002.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0003.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0004.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0005.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0006.jpg", height: 382 },
            { imageSrc: "/static/blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0007.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0008.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0009.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0010.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0011.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0012.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0013.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0014.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0015.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0016.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0017.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0018.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0019.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0020.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0022.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0021.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0023.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0024.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0025.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0026.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0027.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0028.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0029.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0030.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0031.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0032.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0033.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0034.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0035.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0036.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0037.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0039.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0038.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0040.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0041.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0042.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0043.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0044.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0045.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0046.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0047.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0048.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0049.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0050.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0051.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0052.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0053.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0054.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0055.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0056.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0057.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0058.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0059.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0060.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0061.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0062.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0063.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0064.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0065.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0066.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0067.jpg", height: 764 },
            { imageSrc: "/static/blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0068.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0069.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0070.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0071.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0072.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0073.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0074.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0075.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0076.jpg", height: 851 },
            { imageSrc: "/static/blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0077.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0078.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0079.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0080.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0081.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0082.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0083.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0084.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0085.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0086.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0087.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0088.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0089.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0090.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0091.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0092.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0093.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0094.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0095.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0096.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0097.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0098.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0099.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0100.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0101.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0102.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0103.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0104.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/09/zdjecia_slubne_zajazd_polesie_przybyslawice_0105.jpg", height: 763 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticImagesPath + "aga-michal-i-zuzia-zdjecia-slubne-zajazd-polesie-przybyslawice_start.jpg"}
                    images={images}
                    headTitle={"Zdj??cia ??lubne Zajazd Polesie Przybys??awice"}
                    headDescription={"Reporta?? ze ??lubu Agi i Micha??a w Zaje??dzie Polesie - Przybys??awice. Uroczysto???? za??lubin w Ko??ciele pw. ??w. Judy Tadeusza w Krakowie. Zapraszam do ogl??dania."}
                    headKeywords={"fotograf na wesele krak??w,zdj??cia ??lubne w restauracji zajazd polesie"}
                    headUrl={"https://99foto.pl/aga-michal-i-zuzia-zdjecia-slubne-zajazd-polesie-przybyslawice"}
                    entryContentP1={
                        'W poprzednim wpisie poznali??cie Jarka i Zuz??, kt??rzy do Polski na sw??j ??lub przyjechali z Niemiec, tym razem historia si?? powtarza poniewa?? Aga, Micha?? i Zuzia odwiedzili rodzinne strony w tym samym celu przybywaj??c do nas jednak nie z Niemiec, a z Holandii. Tym razem wszystko odby??o si?? w Krakowie i niedalekich okolicach. Makija?? perfekcyjnie wykona??a Natalia, chwil?? p????niej odby??o si?? b??ogos??awie??stwo, gdzie Zuzia dzielnie towarzyszy??a rodzicom. ??lub odby?? si?? w <a href="https://www.parafiaczyzyny.pl/" rel="nofollow" target="_blank" rel="nofollow">Ko??ciele pw. ??w. Judy Tadeusza</a> w Krakowie-Czy??ynach.'
                    }
                    entryContentP2={
                        'Po grupowym zdj??ciu przed ko??cio??em wszyscy wyruszyli??my do Przybys??awic i znajduj??cego si?? tam <a href="https://zajazd-polesie.eu/" rel="nofollow" target="_blank" rel="nofollow">Zajazdu Polesie</a>. Zabawa weselna odbywa??a si?? w gronie rodzinnym, a najm??odsze pociechy nie opuszcza??y parkietu nawet na chwil??. DJ, kt??rego pozdrawiam, dba?? o dobre humory go??ci, samodzielnie dmuchaj??c balony dla najm??odszych, proponuj??c ciekawe zabawy i gor??ce rytmy (piosenki g??ralski zape??nia??y parkiet z automatu). By??y podzi??kowania dla rodzic??w, tort, a zabawa trwa??a do bia??ego rana. Mi??ego ogl??dania i zapraszam po wi??cej zdj???? do strefy klienta.'
                    }
                    slug={"aga-michal-i-zuzia-zdjecia-slubne-zajazd-polesie-przybyslawice"}
                    title={"ZDJ??CIA ??LUBNE ZAJAZD POLESIE PRZYBYS??AWICE - AGA, MICHA?? i ZUZIA"}
                    tags={"fotograf na wesele krak??w,zdj??cia ??lubne w restauracji zajazd polesie"}
                    date={"26 wrze??nia 2015"}
                    menuNames={"AGA, MICHA?? i ZUZIA"}
                    menuTitle={"ZDJ??CIA ??LUBNE ZAJAZD POLESIE PRZYBYS??AWICE"}
                    leadNames={"KAROLINA i BARTEK"}
                    leadTitle={"ZDJ??CIA ??LUBNE RESTAURACJA STEK SKAWINA"}
                    leadUrl={"/zdjecia-slubne-restauracja-stek-skawina"}
                    leadImage={process.env.staticImagesPath + "zdjecia_slubne_restauracja_stek_skawina_start.jpg"}
                />
            
        );
};

export default BlogPageComponent;