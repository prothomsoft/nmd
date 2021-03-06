import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
   
        let images = [
            { imageSrc: "/static/blog/2015/06/iga_marcin_blog_0001.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/iga_marcin_blog_0002.jpg", height: 852 },
            { imageSrc: "/static/blog/2015/06/iga_marcin_blog_0003.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/iga_marcin_blog_0005.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/iga_marcin_blog_0007.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/iga_marcin_blog_0006.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/06/iga_marcin_blog_0008.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/iga_marcin_blog_0009.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/06/iga_marcin_blog_0010.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/iga_marcin_blog_0011.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/iga_marcin_blog_0012.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/06/iga_marcin_blog_0013.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/06/iga_marcin_blog_0014.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/iga_marcin_blog_0015.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/06/iga_marcin_blog_0016.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/iga_marcin_blog_0017.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/06/iga_marcin_blog_0018.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/06/iga_marcin_blog_0019.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/06/iga_marcin_blog_0020.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/iga_marcin_blog_0021.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/iga_marcin_blog_0022.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/iga_marcin_blog_0023.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/iga_marcin_blog_0024.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/06/iga_marcin_blog_0025.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/iga_marcin_blog_0026.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/06/iga_marcin_blog_0027.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/06/iga_marcin_blog_0028.jpg", height: 743 },
            { imageSrc: "/static/blog/2015/06/iga_marcin_blog_0029.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/iga_marcin_blog_0030.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/iga_marcin_blog_0031.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/06/iga_marcin_blog_0032.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/iga_marcin_blog_0033.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/06/iga_marcin_blog_0034.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/iga_marcin_blog_0035.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/06/iga_marcin_blog_0036.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/iga_marcin_blog_0037.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/06/iga_marcin_blog_0038.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/06/iga_marcin_blog_0039.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/06/iga_marcin_blog_0040.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/06/iga_marcin_blog_0041.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/06/iga_marcin_blog_0042.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/iga_marcin_blog_0043.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/06/iga_marcin_blog_0044.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/iga_marcin_blog_0045.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/06/iga_marcin_blog_0046.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/iga_marcin_blog_0047.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/06/iga_marcin_blog_0048.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/06/iga_marcin_blog_0049.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/iga_marcin_blog_0050.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/06/iga_marcin_blog_0051.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/06/iga_marcin_blog_0052.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/06/iga_marcin_blog_0053.jpg", height: 757 },
            { imageSrc: "/static/blog/2015/06/iga_marcin_blog_0054.jpg", height: 757 },
            { imageSrc: "/static/blog/2015/06/iga_marcin_blog_0055.jpg", height: 757 },
            { imageSrc: "/static/blog/2015/06/iga_marcin_blog_0056.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/iga_marcin_blog_0057.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/06/iga_marcin_blog_0058.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/06/iga_marcin_blog_0059.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/06/iga_marcin_blog_0060.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/06/iga_marcin_blog_0061.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/06/iga_marcin_blog_0062.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/06/iga_marcin_blog_0063.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/06/iga_marcin_blog_0064.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/iga_marcin_blog_0065.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/iga_marcin_blog_0066.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/06/iga_marcin_blog_0067.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/06/iga_marcin_blog_0068.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/iga_marcin_blog_0069.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/06/iga_marcin_blog_0070.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/06/iga_marcin_blog_0071.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/06/iga_marcin_blog_0072.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/06/iga_marcin_blog_0073.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/iga_marcin_blog_0074.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/iga_marcin_blog_0075.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/iga_marcin_blog_0076.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/iga_marcin_blog_0077.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/06/iga_marcin_blog_0078.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/06/iga_marcin_blog_0079.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/06/iga_marcin_blog_0080.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/iga_marcin_blog_0081.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/06/iga_marcin_blog_0082.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/iga_marcin_blog_0083.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/iga_marcin_blog_0084.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/iga_marcin_blog_0085.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/06/iga_marcin_blog_0086.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/iga_marcin_blog_0087.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/iga_marcin_blog_0088.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/iga_marcin_blog_0089.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/iga_marcin_blog_0090.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/iga_marcin_blog_0091.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/06/iga_marcin_blog_0092.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/06/iga_marcin_blog_0093.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/iga_marcin_blog_0094.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/iga_marcin_blog_0095.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/06/iga_marcin_blog_0096.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/iga_marcin_blog_0097.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/iga_marcin_blog_0098.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/iga_marcin_blog_0100.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/iga_marcin_blog_0101.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/06/iga_marcin_blog_0102.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/iga_marcin_blog_0103.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/iga_marcin_blog_0104.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/06/iga_marcin_blog_0105.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/iga_marcin_blog_0106.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/06/iga_marcin_blog_0107.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/iga_marcin_blog_0108.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/06/iga_marcin_blog_0109.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/iga_marcin_blog_0110.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/06/iga_marcin_blog_0111.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/iga_marcin_blog_0112.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/06/iga_marcin_blog_0113.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/iga_marcin_blog_0114.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/iga_marcin_blog_0115.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/06/iga_marcin_blog_0116.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/iga_marcin_blog_0117.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/iga_marcin_blog_0118.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/iga_marcin_blog_0119.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/06/iga_marcin_blog_0120.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/06/iga_marcin_blog_0121.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/06/iga_marcin_blog_0122.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/iga_marcin_blog_0123.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/iga_marcin_blog_0124.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/iga_marcin_blog_0125.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/06/iga_marcin_blog_0126.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/06/iga_marcin_blog_0127.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/iga_marcin_blog_0128.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/iga_marcin_blog_0129.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/iga_marcin_blog_0130.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/iga_marcin_blog_0131.jpg", height: 763 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticImagesPath + "iga_i_marcin_zdjecia_slubne_kosciol_skomielna_czarna_start.jpg"}
                    images={images}
                    headTitle={"Fotograf ??lubny Skomielna Czarna"}
                    headDescription={"Serdecznie zapraszam na mojego bloga i reporta?? ??lubny Igi i Marcina. P??dz?? DU??YM FIATEM rocznik 74 do Ko??cio??a w Skomielnej Czarnej. Zapraszam !!!"}
                    headKeywords={"fotograf na wesele krak??w,zdj??cia ??lubne w restauracji victoria - rabka zdr??j"}
                    headUrl={"https://99foto.pl/iga-i-marcin-zdjecia-slubne-kosciol-skomielna-czarna"}
                    entryContentP1={
                        'Iga i Marcin to dzisiejsi bohaterowie kolejnego ??lubnego wpisu. Z t?? sympatyczn?? par?? mieli??my ju?? okazj?? spotka?? si?? na <a href="https://99foto.pl/wioleta-i-marcin-zdjecia-slubne-w-restauracji-victoria-rabka-zdroj" target="_blank" rel="nofollow">weselu Wiolety i Marcina</a>, dlatego wiedzia??em, ??e o u??miechy tego dnia martwi?? si?? nie musz??. Przygotowania do tego dnia zacz??li??my od Marcina w jego malowniczo po??o??onym domu. Po??udniowe bia??e chmurki na niebieskim niebie wygl??da??y bajecznie. Nast??pnie DU??YM Fiatem rocznik siedem cztery udali??my si?? do domu rodzinnego Igi. Celowo pomin??li??my przygotowania Panny M??odej, podsumowuj??c je tylko kilkoma zdj??ciami ju?? po b??ogos??awie??stwie.'
                    }
                    entryContentP2={
                        'Co dalej? W dobrych humorach udali??my si?? do Ko??cio??a p.w. Nawiedzenia NMP w Skomielnej Czarnej. Iga i Marcin w oczekiwaniu na dzwi??k organ??w z u??miechem witali nadchodz??cych go??ci. Widok m??odej pary wchodz??cej do ko??cio??a, spowodowa??, ??e niekt??rym ??ezka zakr??ci??a si?? w oku. Po pi??knej mszy udali??my na wesele do <a href="https://www.victoria-rabka.pl/" target="_blank" rel="nofollow">Restauracji Viktoria</a> w Rabce Zdr??j. Wesele zaliczam do zdecydowanie top najhuczniejszych wesel w tym roku. Doskona??a ekipa i dos??ownie pe??ny parkiet od pocz??tku do ko??ca mojego pobytu. Zabawa by??a ??wietna. Pozdrowienia dla Wszystkich go??ci i mi??ego ogl??dania. Pami??tajcie, ??e wi??cej zdj???? znajdziecie w strefie klienta ??? has??o z mojej wizyt??wki.'
                    }
                    slug={"iga-i-marcin-zdjecia-slubne-kosciol-skomielna-czarna"}
                    title={"ZDJ??CIA ??LUBNE SKOMIELNA CZARNA - IGA i MARCIN"}
                    tags={"fotograf na wesele krak??w,zdj??cia ??lubne w restauracji victoria - rabka zdr??j"}
                    date={"8 czerwca 2015"}
                    menuNames={"IGA i MARCIN"}
                    menuTitle={"ZDJ??CIA ??LUBNE SKOMIELNA CZARNA"}
                    leadNames={"KAROLINA i BARTEK"}
                    leadTitle={"SESJA ZDJ??CIOWA DW??R TOMASZOWICE, OPERA, KAZIMIERZ"}
                    leadUrl={"/sesja-zdjeciowa-dwor-tomaszowice-opera-kazimierz"}
                    leadImage={process.env.staticImagesPath + "sesja_zdjeciowa_dwor_tomaszowice_krakow_start.jpg"}
                />
            
        );
};

export default BlogPageComponent;
