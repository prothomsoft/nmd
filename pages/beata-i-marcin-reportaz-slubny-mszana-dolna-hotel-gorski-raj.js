import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
    
        let images = [
            { imageSrc: "/static/blog/2016/06/beata.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0002.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0003.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0004.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0005.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0006.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0008.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0007.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0009.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0010.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0011.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0012.jpg", height: 527 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0013.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0014.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0015.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0017.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0016.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0018.jpg", height: 382 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0019.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0020.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0021.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0022.jpg", height: 527 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0023.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0024.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0025.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0026.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0027.jpg", height: 382 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0028.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0029.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0030.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0031.jpg", height: 382 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0032.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0033.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0034.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0035.jpg", height: 382 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0036.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0037.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0038.jpg", height: 383 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0039.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0040.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0041.jpg", height: 382 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0042.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0043.jpg", height: 382 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0044.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0045.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0046.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0047.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0048.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0049.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0050.jpg", height: 852 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0051.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0052.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0053.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0054.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0055.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0056.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0057.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0058.jpg", height: 382 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0059.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0060.jpg", height: 527 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0061.jpg", height: 806 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0062.jpg", height: 526 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0063.jpg", height: 382 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0064.jpg", height: 382 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0065.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0131.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0067.jpg", height: 382 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0068.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0069.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0070.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0071.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0072.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0073.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0074.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0075.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0076.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0077.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0078.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0079.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0080.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0081.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0132.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0083.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0084.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0085.jpg", height: 383 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0086.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0087.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0088.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0089.jpg", height: 852 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0090.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0091.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0092.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0093.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0094.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0095.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0096.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0097.jpg", height: 383 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0098.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0099.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0100.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0101.jpg", height: 382 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0102.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0103.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0104.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0105.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0108.jpg", height: 382 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0107.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0110.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0109.jpg", height: 382 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0111.jpg", height: 806 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0112.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0113.jpg", height: 527 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0115.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0116.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0117.jpg", height: 806 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0118.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0119.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0120.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0121.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0122.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0123.jpg", height: 383 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0124.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0125.jpg", height: 382 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0126.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0127.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0128.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0129.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0114.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/06/reportaz_slubny_krakow_0106.jpg", height: 763 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticImagesPath + "beata_i_marcin_reportaz_slubny_mszana_dolna_hotel_gorski_raj_start.jpg"}
                    images={images}
                    headTitle={"Reporta?? ??lubny Krak??w, zdj??cia w Hotelu G??rski Raj"}
                    headDescription={"Malowniczo po??o??ony Nied??wied?? i konkuruj??cy z najpi??kniejszymi w Krakowie Ko??ci???? ??w. Micha??a w Mszanie Dolnej. Serdecznie zapraszam na reporta?? ??lubny."}
                    headKeywords={"reporta?? ??lubny krak??w,fotograf na wesele krak??w,zdj??cia ??lubne w hotelu g??rski raj nied??wied??"}
                    headUrl={"https://99foto.pl/beata-i-marcin-reportaz-slubny-mszana-dolna-hotel-gorski-raj"}
                    entryContentP1={
                        'Drugi raz w tym roku odwiedzam Mszan?? Doln?? i przepi??kny <a href="https://www.parafiamszanadolna.pl/" target="_blank" rel="nofollow">Ko??ci???? ??w. Micha??a</a>, kt??ry z powodzeniem mo??e konkurowa?? z Krakowskimi pere??kami, jakimi s?? <a href="https://kolegiata-anna.pl/" target="_blank" rel="nofollow">Ko??ci???? ??w. Anny</a> czy <a href="https://www.mariacki.com/index.php/pl/" target="_blank" rel="nofollow">Bazylika Mariacka</a>. Do wykonania reporta??u ponad rok wcze??niej zaprosili mnie Beata i Marcin. Zdj??cia zacz??li??my od przygotowa??. Fryzura, staranny i delikatny makija?? oraz ubieranie sukni ??lubnej odby??o si?? w dobrych humorach i rodzinnej atmosferze. Ju?? chwil?? p????niej p??dzi??em do Nied??wiedzia, a dok??adniej m??wi??c do <a href="https://www.gorskiraj.com" target="_blank" rel="nofollow">Hotelu G??rski Raj</a> gdzie odby??y si?? przygotowania Pana M??odego.'
                    }
                    entryContentP2={
                        'iedy ju?? Marcin odebra?? swoj?? przysz???? ??on??, b??ogos??awie??stwo od rodzic??w i upewni?? si??, ??e w samochodzie jest wystarczaj??co du??o sprz??t??w, ??eby przebrn???? przez bramy udali??my si?? do <a href="https://www.parafiamszanadolna.pl/" target="_blank" rel="nofollow">Ko??cio??a ??wi??tego Micha??a</a> w Mszanie Dolnej. Podczas ceremoni m??odzi powiedzieli sobie sakramentalne TAK i z u??miechem na ustach udali si?? do sali weselnej. Tam tradycyjnie rodzice przywitali ich chlebem i sol??. Zabawa trwa??a do samego rana, a DJ serwowa?? go??ciom weselnym niespotykan?? ilo???? zabaw i niespodzianek (w????czaj??c w to po mistrzowsku przeprowadzony konkurs z grosikiem i ekspresem do kawy). Wspania??y wiecz??r i przepi??kny dzie?? pe??ny wspomnie??. Zapraszam zatem na kr??tk?? histori?? Beaty i Marcina! Mi??ego ogl??dania.'
                    }
                    slug={"beata-i-marcin-reportaz-slubny-mszana-dolna-hotel-gorski-raj"}
                    title={"REPORTA?? ??LUBNY MSZANA DOLNA - HOTEL G??RSKI RAJ - BEATA i MARCIN"}
                    tags={"reporta?? ??lubny krak??w,fotograf na wesele krak??w,zdj??cia ??lubne w hotelu g??rski raj nied??wied??"}
                    date={"3 listopada 2017"}
                    menuNames={"BEATA i MARCIN"}
                    menuTitle={"REPORTA?? ??LUBNY MSZANA DOLNA - HOTEL G??RSKI RAJ"}
                    leadNames={"KAROLINA i BARTEK"}
                    leadTitle={"ZDJ??CIA ??LUBNE RESTAURACJA STEK SKAWINA"}
                    leadUrl={"/zdjecia-slubne-restauracja-stek-skawina"}
                    leadImage={process.env.staticImagesPath + "zdjecia_slubne_restauracja_stek_skawina_start.jpg"}
                />
            
        );
};

export default BlogPageComponent;
