import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
    
        let images = [
            { imageSrc: "/static/blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0001.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0003.jpg", height: 762 },
            { imageSrc: "/static/blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0002.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0004.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0005.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0009.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0006.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0008.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0007.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0010.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0011.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0012.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0013.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0014.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0015.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0016.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0017.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0018.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0019.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0020.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0021.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0022.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0023.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0024.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0025.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0026.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0027.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0028.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0029.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0030.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0031.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0032.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0033.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0034.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0035.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0036.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0037.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0038.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0039.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0040.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0041.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0042.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0043.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0044.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0045.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0046.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0047.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0048.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0049.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0050.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0051.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0052.jpg", height: 805 },
            { imageSrc: "/static/blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0053.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0054.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0055.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0056.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0057.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0058.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0059.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0060.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0063.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0061.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0062.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0064.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0065.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0066.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0067.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0068.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0069.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0070.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0071.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0072.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0073.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0074.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0075.jpg", height: 766 },
            { imageSrc: "/static/blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0076.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0077.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0078.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0079.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0080.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0081.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0082.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0083.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0084.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0085.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0086.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0087.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0088.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0089.jpg", height: 762 },
            { imageSrc: "/static/blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0090.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0092.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0093.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0094.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0095.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0096.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0097.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0098.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0099.jpg", height: 805 },
            { imageSrc: "/static/blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0100.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0101.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0102.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0103.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0104.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0105.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0106.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0107.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0108.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0109.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0110.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0112.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0113.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0114.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0115.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0116.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0117.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0118.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0111.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0119.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0120.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0121.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0122.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0124.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0123.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0125.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0126.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0128.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0129.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0130.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0131.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0132.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0133.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0134.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0135.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0136.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0137.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0138.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0139.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0140.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0141.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0142.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0143.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0144.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0145.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0146.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0147.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0148.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0149.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/hotel_margerita_krakow_magiczny_wystroj_sali_0127.jpg", height: 763 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticImagesPath + "hotel_margerita_krakow_magiczny_wystroj_sali_weselnej_w_krakowie-start.jpg"}
                    images={images}
                    headTitle={"Hotel Margerita Krak??w ?????? ??lub w Krakowie"}
                    headDescription={
                        "Hotel Margerita po??o??ony na trasie z Krakowa do Olkusza to ??wietne miejsce na ??lub. Magiczny wystr??j sali weselnej, kt??ry zachwyci Waszych go??ci. Zapraszam na reporta?? ??lubny Natalii i Piotra."
                    }
                    headKeywords={"Hotel Margerita Krak??w, magiczny wystr??j sali weselnej, ??lub w Krakowie"}
                    headUrl={"https://99foto.pl/hotel-margerita-magiczny-wystroj-sali-weselnej-w-krakowie"}
                    entryContentP1={
                        'Sobotnie przedpo??udnie i bardzo s??oneczny dzie?? rozpocz??li??my razem ze ??wiadkiem i jak si?? chwil?? p????niej okaza??o specjalist?? od o??wietlenia Round Flashem ??ukaszem w Jerzmanowicach, fotografuj??c przygotowania Piotra. Pi??kny ogr??d i roz??o??yste drzewa wzd?????? podjazdu, wymarzone warunki by zamieszka?? spokojnie zdala od miejskiego zgie??ku i delektowa?? si?? spokojem po pracy w s??siedztwie Ojcowskiego Parku Narodowego. Mama Piotra przygotowa??a dla nas kawk??, a Tato okaza?? si?? by?? pasjonatem fotografii, wi??c troch?? porozmawiali??my o Smienach, Zenitach, powi??kszalnikach, koreksach i takich tam. ??ukasz podszed?? do tematu analitycznie, dopasowa?? ilo???? ??elu na w??osach, ilo???? pasty na butach Piotra, powpina?? spinki do mankiet??w i zapi???? bordow?? much??. Gdy wszystko by??o ju?? gotowe czeka?? nas powr??t do Krakowa na przygotowania Natalii. Makija?? odby?? si?? w samym centum naszego pi??knego miasta w <a href="https://www.facebook.com/Glamour-Hair-Studio-Studio-fryzur-i-kosmetyki-124677987586758/Glamour" target="_blank" rel="nofollow">Salonie Hair & Beauty Studio</a> Luizy Borkowskiej.  Podczas gdy Luiza wykona??a ??wietny i profesjonalny makija??, ??ukasz dzielnie asystowa??, a dziewczyny kombinowa??y co?? z brwiami na fotelu obok.'
                    }
                    entryContentP2={
                        'Gdy makija?? by?? gotowy udali??my si?? do domu Natalii, gdzie kuzynka, a w tym wyj??tkowym dniu druhna Magda pomaga??a w przygotowaniach. Nieprzypadkowo powieszony welon i ??wietnie urz??dzone mieszkanie w kolorze blue, pi??kna Natalia i Magda, promienie s??o??ca wpadaj??ce ??wietlikiem by??y gwarancj?? niesamowitych zdj????. Gdy zebrali si?? ju?? wszyscy zaproszeni go??cie Tato Natalii wykorzysta?? jedyn?? w swoim ??yciu okazj?? na kr??tkie przem??wienie po kt??rym odby??o si?? b??ogos??awie??stwo.  Ceremonia odby??a si?? w <a href="https://www.biezanow.diecezja-krakow.pl/">Ko??ciele Narodzenia NMP</a> znajduj??cym si?? w Krakowskim Starym Bie??anowie. Ambona zape??nia??a si?? kolejnymi prelegentami, w??rod kt??rych brylowa?? ??ukasz (tak to s??owo tu pasuje). Przys??uchuj??c si?? d??wi??kom dobiegaj??cym z ch??ru mo??na by??o us??ysze?? pi??knie brzmi??ce skrzypce. Po zdj??ciu grupowym Para M??oda zaprosi??a go??ci do <a href="https://www.margerita.pl/" target="_blank" rel="nofollow">Hotelu, Restauracji Margerita</a>. Magiczny wystr??j sali mocno przypad?? do gustu go??ciom weselnym. Odby??y si?? ??yczenia, pierwszy taniec w chmurach ktore zorganizowa?? <a href="https://www.facebook.com/DJ4U-Piotr-P%C5%82awski-466649040058113/" target="_blank" rel="nofollow">DJ Piotr</a>, kolejne atrakcje to fotobudka z gad??etami, poci??g, podzi??kowania dla rodzic??w, pyszny tort i oczywi??cie zabawy oczepinowe. Na filmie imprez?? uwiecznia?? <a href="https://www.facebook.com/yurievfilm/" target="_blank" rel="nofollow">Serhij Juriev ze Stylowe Wesele</a>, kt??ry by?? niekwestionowanym mistrzem odnajdywania idealnego ??wiat??a. Niesamowity dzie??, sp??dzony w wybornym towarzystwie. Natalio i Piotrze ciesz?? si?? bardzo, ??e mog??em by?? tam z Wami w tych najwa??niejszych chwilach Waszego ??ycia. Zapraszam do ogl??dania zdj????. Po wi??cej zapraszam do strefy klienta.'
                    }
                    slug={"hotel-margerita-magiczny-wystroj-sali-weselnej-w-krakowie"}
                    title={"HOTEL MARGERITA, MAGIA SALI WESELNEJ W KRAKOWIE - NATALIA i PIOTR"}
                    tags={"Hotel Margerita Krak??w, magiczny wystr??j sali weselnej, ??lub w Krakowie"}
                    date={"12 kwietnia 2018"}
                    menuNames={"NATALIA i PIOTR"}
                    menuTitle={"HOTEL MARGERITA, MAGIA SALI WESELNEJ W KRAKOWIE"}
                    leadNames={"JOANNA i GRZEGORZ"}
                    leadTitle={"WESELE NA POLU GOLFOWYM W PACZ????TOWICACH"}
                    leadUrl={"/wesele-na-polu-golfowym-w-paczoltowicach"}
                    leadImage={process.env.staticImagesPath + "wesele_na_polu_golfowym_w_paczoltowicach_start.jpg"}
                />
            
        );
};

export default BlogPageComponent;
