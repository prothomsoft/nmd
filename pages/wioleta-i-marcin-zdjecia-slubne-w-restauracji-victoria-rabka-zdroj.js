import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
    
        let images = [
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0001.jpg", height: 741 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0002.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0003.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0004.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0005.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0006.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0007.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0008.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0009.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0010.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0011.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0012.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0013.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0014.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0015.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0016.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0017.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0018.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0019.jpg", height: 851 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0020.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0021.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0022.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0023.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0024.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0025.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0026.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0027.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0028.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0029.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0030.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0031.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0032.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0033.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0034.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0035.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0036.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0037.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0038.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0039.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0040.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0041.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0042.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0043.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0044.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0045.jpg", height: 757 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0046.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0047.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0048.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0049.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0050.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0051.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0052.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0053.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0054.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0055.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0056.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0057.jpg", height: 757 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0058.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0059.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0060.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0061.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0062.jpg", height: 757 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0063.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0064.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0065.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0066.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0067.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0068.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0069.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0070.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0071.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0072.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0073.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0074.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0075.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0076.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0077.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0078.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0079.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0080.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0081.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0082.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0083.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0084.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0085.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0086.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0087.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0088.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0089.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0090.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0091.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0092.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0093.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0094.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0095.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0096.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0097.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0098.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0100.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0101.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0102.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0103.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0104.jpg", height: 851 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0105.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0106.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0107.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0108.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0109.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0110.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0111.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0112.jpg", height: 851 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0113.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0114.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0115.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0116.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0117.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0118.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0119.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0120.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0121.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0122.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0123.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0124.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0125.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0126.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0127.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0128.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0129.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0130.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0131.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0132.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0133.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0134.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0135.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0136.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0137.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0138.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0139.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0140.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0141.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/06/wioleta_marcin_blog_0142.jpg", height: 763 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticImagesPath + "wioleta_i_marcin_zdjecia_slubne_w_restauracji_victoria_rabka_zdroj_start.jpg"}
                    images={images}
                    headTitle={"Zdj??cia ??lubne w Restauracji Victoria - Rabka Zdr??j"}
                    headDescription={"Reporta?? ze ??lubu Wiolety i Marcina w Restauracji Victoria - Rabka Zdr??j. Uroczysto???? za??lubin w ko??ciele w ????towni. Zapraszam do ogl??dania."}
                    headKeywords={"fotograf na wesele krak??w,zdj??cia ??lubne w restauracji victoria - rabka zdr??j"}
                    headUrl={"https://99foto.pl/wioleta-i-marcin-zdjecia-slubne-w-restauracji-victoria-rabka-zdroj"}
                    entryContentP1={
                        "Tego dnia by??o wszystko, co by?? powinno ??? szczere u??miechy, wiele wzrusze?? i pe??no emocji! Przedstawiam zatem Wiolet?? i Marcina, kt??rym mia??em przyjemno???? towarzyszy?? zza aparatu podczas ich najwa??niejszego dnia w ??yciu. Przygotowania zacz??li??my popo??udniow?? por?? od makija??u. Pok??j Wiolety sta?? si?? centrum dowodzenia, a do makija??u ustawi??a si?? kolejka. Pomimo, ??e temat powa??ny to humor dopisywa??, a u??miechy trzyma??y si?? wszystkich. Chwil?? p????niej odwiedzi??em dom rodzinny Marcina, kt??ry wpasowa?? si?? w bardzo elegancki mundur stra??acki."
                    }
                    entryContentP2={
                        'Po b??ogos??awie??stwie udali??my si?? do pi??knie przystrojonego Ko??cio??a w ????towni. Msza by??a niezwykle wzruszaj??ca, ksi??dz prowadz??cy zadba?? aby ta chwila by??a naprawd?? wyj??tkowa. Nast??pnie udali??my si?? do <a href="https://www.victoria-rabka.pl/" target="_blank" rel="nofollow">Restauracji Wiktoria</a> w Rabce Zdr??j, gdzie odby??o si?? wesele. Po tylu wyczerpuj??cych emocjach, przyszed?? czas na zabaw??, i to jak??! Pe??ny pakiet, kolorowe ??wiat??a i niezwalniaj??cy tempa zesp????. To by?? pi??kny dzie??. Pozdrowienia dla Wszystkich go??ci i mi??ego ogl??dania. Pami??tajcie, ??e wi??cej zdj???? znajdziecie w strefie klienta &#8211; has??o z mojej wizyt??wki.'
                    }
                    slug={"wioleta-i-marcin-zdjecia-slubne-w-restauracji-victoria-rabka-zdroj"}
                    title={"ZDJ??CIA ??LUBNE W RESTAURACJI VICTORIA - RABKA ZDR??J - WIOLETA i MARCIN"}
                    tags={"fotograf na wesele krak??w,zdj??cia ??lubne w restauracji victoria - rabka zdr??j"}
                    date={"1 czerwca 2015"}
                    menuNames={"WIOLETA i MARCIN"}
                    menuTitle={"ZDJ??CIA ??LUBNE W RESTAURACJI VICTORIA - RABKA ZDR??J"}
                    leadNames={"IWONA i MARCIN"}
                    leadTitle={"WESELE W G??RALSKIM KLIMACIE PRZYSTA?? KABANOS SPYTKOWICE"}
                    leadUrl={"/wesele-w-goralskim-klimacie-przystan-kabanos-spytkowice"}
                    leadImage={process.env.staticImagesPath + "wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_start.jpg"}
                />
            
        );
};

export default BlogPageComponent;
