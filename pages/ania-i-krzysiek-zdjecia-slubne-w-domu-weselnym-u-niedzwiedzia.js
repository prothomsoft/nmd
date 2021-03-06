import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
    
        let images = [
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_krakow_0001.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_krakow_0002.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_krakow_0003.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_krakow_0004.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_krakow_0005.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_krakow_0006.jpg", height: 382 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_krakow_0007.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_krakow_0008.jpg", height: 382 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_krakow_0009.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_krakow_0010.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_krakow_0011.jpg", height: 382 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_krakow_0012.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_krakow_0013.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_krakow_0014.jpg", height: 527 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_krakow_0015.jpg", height: 382 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_krakow_0016.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_krakow_0017.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_krakow_0019.jpg", height: 851 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_krakow_0018.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_krakow_0021.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_krakow_0020.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_krakow_0022.jpg", height: 382 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_krakow_0023.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_krakow_0024.jpg", height: 383 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_krakow_0025.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_krakow_0026.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_krakow_0027.jpg", height: 382 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_krakow_0028.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_krakow_0030.jpg", height: 382 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_krakow_0029.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_krakow_0031.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_krakow_0032.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_krakow_0033.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_krakow_0034.jpg", height: 383 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_krakow_0035.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_krakow_0036.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_krakow_0037.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_krakow_0038.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_krakow_0039.jpg", height: 527 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_krakow_0040.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_krakow_0041.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_krakow_0042.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_krakow_0043.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_krakow_0044.jpg", height: 527 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_krakow_0045.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_krakow_0046.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_krakow_0048.jpg", height: 850 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_krakow_0047.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_krakow_0049.jpg", height: 382 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_krakow_0050.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_krakow_0051.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_krakow_0052.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_krakow_0053.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_krakow_0054.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_krakow_0055.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_krakow_0056.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_krakow_0057.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_krakow_0058.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_krakow_0059.jpg", height: 526 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_krakow_0060.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_krakow_0061.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_krakow_0062.jpg", height: 383 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_krakow_0063.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_krakow_0064.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_krakow_0065.jpg", height: 383 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_krakow_0066.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_krakow_0067.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_krakow_0068.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_krakow_0069.jpg", height: 382 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_krakow_0070.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_krakow_0071.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_krakow_0072.jpg", height: 383 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_krakow_0073.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_krakow_0074.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_krakow_0075.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_krakow_0076.jpg", height: 527 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_krakow_0077.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_krakow_0078.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_krakow_0080.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_krakow_0079.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_krakow_0081.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_krakow_0082.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_krakow_0083.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_krakow_0084.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_krakow_0085.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_krakow_0086.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_krakow_0087.jpg", height: 382 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_krakow_0088.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_krakow_0089.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_krakow_0090.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_krakow_0091.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_krakow_0093.jpg", height: 382 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_krakow_0092.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_krakow_0094.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_krakow_0095.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_krakow_0096.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_krakow_0097.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_krakow_0098.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_krakow_0099.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_krakow_0100.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_krakow_0101.jpg", height: 382 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_krakow_0102.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_krakow_0103.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_krakow_0104.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_krakow_0105.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_krakow_0106.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_krakow_0107.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_krakow_0108.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_krakow_0109.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_krakow_0110.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_krakow_0111.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_krakow_0112.jpg", height: 383 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_krakow_0113.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_krakow_0114.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/05/fotograf_na_wesele_krakow_0115.jpg", height: 763 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticImagesPath + "ania_i_krzysiek_zdjecia_slubne_w_domu_weselnym_u_niedzwiedzia_start.jpg"}
                    images={images}
                    headTitle={"Zdj??cia ??lubne w Domu Weselnym U Nied??wiedzia"}
                    headDescription={"Mega weselna petarda ??lubna Ani i Krzy??ka. Pi??kni, m??odzi, wspania??e miejsca i przeszalona muzyczna banda... serdecznie zapraszam!"}
                    headKeywords={"fotograf na wesele krak??w, zdj??cia ??lubne w domu weselnym u nied??wiedzia, fotograf na wesele krak??w"}
                    headUrl={"https://99foto.pl/ania-i-krzysiek-zdjecia-slubne-w-domu-weselnym-u-niedzwiedzia"}
                    entryContentP1={
                        '??lub Ani i Krzy??ka odby?? si?? w d??ugi weekend majowy. Na przygotowania wybra??em si?? do domu rodzinnego Ani do Lachowic. Zacz??li??my od zdj???? z makija??u, kt??ry z ka??d?? minut?? podkre??la?? niezwyk???? urod?? Ani. Chwil?? p????niej pojawi?? si?? Krzysiek i rozpocz????o si?? pierwsze w tym dniu b??ogos??awie??stwo. Zapowiedzi pogodowe na ten dzie?? okaza??y si?? zupe??nie nietrafione i mieli??my pi??kn?? pogod?? od pocz??tku do ko??ca. Drugie b??ogos??awie??stwo odby??o si?? ju?? u Krzy??ka w Krakowie. Na ceremoni?? w dobrym nastroju spacerkiem udali??my si?? do <a href="https://krakow.saletyni.pl/" target="_blank" rel="nofollow">Ko??cio??a pw. Matki Bo??ej Salety??skiej</a>. Obr??czki, przez kt??re troch?? wcze??niej mi si?? dosta??o do o??tarza dostarczy??a ma??a gwiazda ca??ej imprezy.'
                    }
                    entryContentP2={
                        'Po ciekawym kazaniu w cudownej atmosferze i jeszcze lepszych humorach, Ania i Krzysiek powiedzieli sobie TAK. Nast??pnie zrobili??my zdj??cie grupowe i m??odzi odebrali moc gor??cych ??ycze?? od swoich go??ci. Zabawa weselna odby??a si?? w <a href="https://www.uniedzwiedzia.pl/" target="_blank" rel="nofollow">Domu Weselnym U Nied??wiedzia</a>. <a href="https://www.facebook.com/zespolselavi/" target="_blank" rel="nofollow">Zesp???? SeLaVi</a> zachwyca?? go??ci rozpi??to??ci?? swojego repertuaru od &#8222;Nothing else matters&#8221; w mistrzowskim wykonaniu do &#8222;Ona widzi we mnie pini??dz&#8221;, kt??re s??ysza??em premierowo w tym sezonie. Ten wiecz??r stanowczo przejdzie do historii. Dzia??o si?? mn??stwo i wsz??dzie. Niesamowity wiecz??r, niesamowici ludzie. Dzi??kuj??, ??e mog??em by?? tego dnia z Wami! Po wi??cej zdj???? zapraszam do strefy klienta. Mi??ego ogl??dania.'
                    }
                    slug={"ania-i-krzysiek-zdjecia-slubne-w-domu-weselnym-u-niedzwiedzia"}
                    title={"ZDJ??CIA ??LUBNE W DOMU WESELNYM U NIED??WIEDZIA - ANIA i KRZYSIEK"}
                    tags={"fotograf na wesele krak??w, zdj??cia ??lubne w domu weselnym u nied??wiedzia, fotograf na wesele krak??w"}
                    date={"6 maja 2016"}
                    menuNames={"ANIA i KRZYSIEK"}
                    menuTitle={"ZDJ??CIA ??LUBNE W DOMU WESELNYM U NIED??WIEDZIA"}
                    leadNames={"MONIKA i RAFA??"}
                    leadTitle={"ZDJ??CIA ??LUBNE KRAK??W, RESTAURACJA CHOCHO??OWY DW??R"}
                    leadUrl={"/monika-i-rafal-zdjecia-slubne-krakow-restauracja-chocholowy-dwor"}
                    leadImage={process.env.staticImagesPath + "monika_i_rafal_zdjecia_slubne_krakow_restauracja_chocholowy_dwor_start.jpg"}
                />
            
        );
};

export default BlogPageComponent;
