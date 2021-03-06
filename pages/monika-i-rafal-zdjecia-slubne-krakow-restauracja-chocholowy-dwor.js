import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {

        let images = [
            { imageSrc: "/static/blog/2016/08/fotograf_na_wesele_krakow_0001.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/08/fotograf_na_wesele_krakow_0003.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/08/fotograf_na_wesele_krakow_0004.jpg", height: 527 },
            { imageSrc: "/static/blog/2016/08/fotograf_na_wesele_krakow_0005.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/08/fotograf_na_wesele_krakow_0007.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/08/fotograf_na_wesele_krakow_0461.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/08/fotograf_na_wesele_krakow_0009.jpg", height: 382 },
            { imageSrc: "/static/blog/2016/08/fotograf_na_wesele_krakow_0010.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/08/fotograf_na_wesele_krakow_0011.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/08/fotograf_na_wesele_krakow_0012.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/08/fotograf_na_wesele_krakow_0013.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/08/fotograf_na_wesele_krakow_0014.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/08/fotograf_na_wesele_krakow_0015.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/08/fotograf_na_wesele_krakow_0016.jpg", height: 383 },
            { imageSrc: "/static/blog/2016/08/fotograf_na_wesele_krakow_0017.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/08/fotograf_na_wesele_krakow_0018.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/08/fotograf_na_wesele_krakow_0019.jpg", height: 383 },
            { imageSrc: "/static/blog/2016/08/fotograf_na_wesele_krakow_0020.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/08/fotograf_na_wesele_krakow_0021.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/08/fotograf_na_wesele_krakow_0022.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/08/fotograf_na_wesele_krakow_0023.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/08/fotograf_na_wesele_krakow_0024.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/08/fotograf_na_wesele_krakow_0025.jpg", height: 851 },
            { imageSrc: "/static/blog/2016/08/fotograf_na_wesele_krakow_0026.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/08/fotograf_na_wesele_krakow_0027.jpg", height: 382 },
            { imageSrc: "/static/blog/2016/08/fotograf_na_wesele_krakow_0028.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/08/fotograf_na_wesele_krakow_0030.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/08/fotograf_na_wesele_krakow_0029.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/08/fotograf_na_wesele_krakow_0031.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/08/fotograf_na_wesele_krakow_0032.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/08/fotograf_na_wesele_krakow_0033.jpg", height: 383 },
            { imageSrc: "/static/blog/2016/08/fotograf_na_wesele_krakow_0034.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/08/fotograf_na_wesele_krakow_0035.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/08/fotograf_na_wesele_krakow_0036.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/08/fotograf_na_wesele_krakow_0037.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/08/fotograf_na_wesele_krakow_0038.jpg", height: 383 },
            { imageSrc: "/static/blog/2016/08/fotograf_na_wesele_krakow_0039.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/08/fotograf_na_wesele_krakow_0040.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/08/fotograf_na_wesele_krakow_0041.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/08/fotograf_na_wesele_krakow_0042.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/08/fotograf_na_wesele_krakow_0043.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/08/fotograf_na_wesele_krakow_0044.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/08/fotograf_na_wesele_krakow_0045.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/08/fotograf_na_wesele_krakow_0046.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/08/fotograf_na_wesele_krakow_0047.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/08/fotograf_na_wesele_krakow_0048.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/08/fotograf_na_wesele_krakow_0049.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/08/fotograf_na_wesele_krakow_0050.jpg", height: 382 },
            { imageSrc: "/static/blog/2016/08/fotograf_na_wesele_krakow_0051.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/08/fotograf_na_wesele_krakow_0052.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/08/fotograf_na_wesele_krakow_0053.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/08/fotograf_na_wesele_krakow_0054.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/08/fotograf_na_wesele_krakow_0055.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/08/fotograf_na_wesele_krakow_0056.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/08/fotograf_na_wesele_krakow_0057.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/08/fotograf_na_wesele_krakow_0061.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/08/fotograf_na_wesele_krakow_0058.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/08/fotograf_na_wesele_krakow_0063.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/08/fotograf_na_wesele_krakow_0059.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/08/fotograf_na_wesele_krakow_0060.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/08/fotograf_na_wesele_krakow_0062.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/08/fotograf_na_wesele_krakow_0066.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/08/fotograf_na_wesele_krakow_0064.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/08/fotograf_na_wesele_krakow_0065.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/08/fotograf_na_wesele_krakow_0067.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/08/fotograf_na_wesele_krakow_0069.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/08/fotograf_na_wesele_krakow_0068.jpg", height: 383 },
            { imageSrc: "/static/blog/2016/08/fotograf_na_wesele_krakow_0070.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/08/fotograf_na_wesele_krakow_0071.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/08/fotograf_na_wesele_krakow_0072.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/08/fotograf_na_wesele_krakow_0073.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/08/fotograf_na_wesele_krakow_0074.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/08/fotograf_na_wesele_krakow_0075.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/08/fotograf_na_wesele_krakow_0076.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/08/fotograf_na_wesele_krakow_0077.jpg", height: 383 },
            { imageSrc: "/static/blog/2016/08/fotograf_na_wesele_krakow_0078.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/08/fotograf_na_wesele_krakow_0079.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/08/fotograf_na_wesele_krakow_0080.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/08/fotograf_na_wesele_krakow_0082.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/08/fotograf_na_wesele_krakow_0081.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/08/fotograf_na_wesele_krakow_0083.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/08/fotograf_na_wesele_krakow_0084.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/08/fotograf_na_wesele_krakow_0085.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/08/fotograf_na_wesele_krakow_0089.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/08/fotograf_na_wesele_krakow_0086.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/08/fotograf_na_wesele_krakow_0087.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/08/fotograf_na_wesele_krakow_0088.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/08/fotograf_na_wesele_krakow_0139.jpg", height: 382 },
            { imageSrc: "/static/blog/2016/08/fotograf_na_wesele_krakow_0090.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/08/fotograf_na_wesele_krakow_0091.jpg", height: 383 },
            { imageSrc: "/static/blog/2016/08/fotograf_na_wesele_krakow_0092.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/08/fotograf_na_wesele_krakow_0093.jpg", height: 383 },
            { imageSrc: "/static/blog/2016/08/fotograf_na_wesele_krakow_0094.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/08/fotograf_na_wesele_krakow_0095.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/08/fotograf_na_wesele_krakow_0097.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/08/fotograf_na_wesele_krakow_0101.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/08/fotograf_na_wesele_krakow_0102.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/08/fotograf_na_wesele_krakow_0098.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/08/fotograf_na_wesele_krakow_0103.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/08/fotograf_na_wesele_krakow_0099.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/08/fotograf_na_wesele_krakow_0104.jpg", height: 851 },
            { imageSrc: "/static/blog/2016/08/fotograf_na_wesele_krakow_0100.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/08/fotograf_na_wesele_krakow_0106.jpg", height: 382 },
            { imageSrc: "/static/blog/2016/08/fotograf_na_wesele_krakow_0096.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/08/fotograf_na_wesele_krakow_0107.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/08/fotograf_na_wesele_krakow_0105.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/08/fotograf_na_wesele_krakow_0108.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/08/fotograf_na_wesele_krakow_0109.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/08/fotograf_na_wesele_krakow_0110.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/08/fotograf_na_wesele_krakow_0111.jpg", height: 382 },
            { imageSrc: "/static/blog/2016/08/fotograf_na_wesele_krakow_0112.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/08/fotograf_na_wesele_krakow_0113.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/08/fotograf_na_wesele_krakow_0114.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/08/fotograf_na_wesele_krakow_0115.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/08/fotograf_na_wesele_krakow_0116.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/08/fotograf_na_wesele_krakow_0117.jpg", height: 382 },
            { imageSrc: "/static/blog/2016/08/fotograf_na_wesele_krakow_0118.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/08/fotograf_na_wesele_krakow_0119.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/08/fotograf_na_wesele_krakow_0120.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/08/fotograf_na_wesele_krakow_0121.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/08/fotograf_na_wesele_krakow_0123.jpg", height: 382 },
            { imageSrc: "/static/blog/2016/08/fotograf_na_wesele_krakow_0122.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/08/fotograf_na_wesele_krakow_0124.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/08/fotograf_na_wesele_krakow_0125.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/08/fotograf_na_wesele_krakow_0126.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/08/fotograf_na_wesele_krakow_0127.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/08/fotograf_na_wesele_krakow_0128.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/08/fotograf_na_wesele_krakow_0129.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/08/fotograf_na_wesele_krakow_0130.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/08/fotograf_na_wesele_krakow_0137.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/08/fotograf_na_wesele_krakow_0132.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/08/fotograf_na_wesele_krakow_0133.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/08/fotograf_na_wesele_krakow_0134.jpg", height: 382 },
            { imageSrc: "/static/blog/2016/08/fotograf_na_wesele_krakow_0135.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/08/fotograf_na_wesele_krakow_0136.jpg", height: 383 },
            { imageSrc: "/static/blog/2016/08/fotograf_na_wesele_krakow_0131.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/08/fotograf_na_wesele_krakow_0138.jpg", height: 763 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticImagesPath + "monika_i_rafal_zdjecia_slubne_krakow_restauracja_chocholowy_dwor_start.jpg"}
                    images={images}
                    headTitle={"Zdj??cia ??lubne Krak??w, Restauracja Chocho??owy Dw??r"}
                    headDescription={"Ciekawych jak bawi si?? arystokracja IT serdecznie zapraszam na reporta?? ze ??lubu Moniki i Rafa??a, kt??ry odby?? si?? w Restauracji Chocho??owy Dw??r."}
                    headKeywords={"fotografia ??lubna krak??w,reporta?? ??lubny krak??w,zdj??cia ??lubne krak??w"}
                    headUrl={"https://99foto.pl/monika-i-rafal-zdjecia-slubne-krakow-restauracja-chocholowy-dwor"}
                    entryContentP1={
                        'Ta sobota nale??a??a do Moniki i Rafa??a, bohater??w dzisiejszej historii. Poznali??my si?? ju?? przed ??lubem podczas sesji narzecze??skiej w <a href="https://ojcowskiparknarodowy.pl" target="_blank" rel="nofollow">Ojcowskim Parku Narodowym</a>. Zdj??cia z tej sesji trafi??y do fotoksi????ki, a fotoksi????ka trafi??a prosto do rodzic??w. By?? to bardzo dobry pomys?? na prezent. Przygotowania do tego wielkiego dnia zacz??li??my w domu Moniki. Ubieranie sukni ??lubnej i bi??uterii odby??o si?? z pomoc?? Iwony i pod czujnym okiem mamy Moniki. Poniewa?? Rafa?? mieszka blisko to r??wnie?? jego odwiedzi??em podczas przygotowa??. B??ogos??awie??stwo odby??o si?? w pe??nej emocji i wzrusze?? kameralnej atmosferze. Po b??ogos??awie??stwie udali??my si?? do <a href="https://parafiabolechowice.pl" target="_blank" rel="nofollow">Ko??cio??a ??w. Piotra i Paw??a w Bolechowicach</a>.'
                    }
                    entryContentP2={
                        'Do ceremoni zosta??o troch?? czasu, kt??ry Monika wype??ni??a swoimi u??miechami. Ksi??dz sparafrazowa?? s??owa papie??a Franciszka, kt??re wypowiedzia?? on podczas ??wiatowych Dni M??odzie??y w Krakowie &#8211; chodzi oczywi??cie o &#8222;prosz??, dzi??kuj??, przepraszam i zimn?? wojn??&#8221;. By??o po prostu pi??knie.  Wesele odby??o si?? w po??o??onej nieopodal <a href="https://chocholowydwor.pl" target="_blank" rel="nofollow">Restauracji Chocho??owy Dw??r w Jerzmanowicach</a>. Zabawa by??a przednia i na pewno dobrze sfilmowana przez <a href="https://mgfilm.com.pl" target="_blank" rel="nofollow">Movie Groovie Video</a>. Poni??ej przedstawiam szereg dowod??w zdj??ciowych. Dzi??kuj?? Monice i Rafa??owi, ??e mog??em by?? z Wami tego dnia i pozdrawiam Was serdecznie. Zapraszam na reporta?? i po wi??cej zdj???? w strefie klienta z has??em z mojej wizyt??wki.'
                    }
                    slug={"monika-i-rafal-zdjecia-slubne-krakow-restauracja-chocholowy-dwor"}
                    title={"ZDJ??CIA ??LUBNE KRAK??W, RESTAURACJA CHOCHO??OWY DW??R - MONIKA i RAFA??"}
                    tags={"fotografia ??lubna krak??w,reporta?? ??lubny krak??w,zdj??cia ??lubne krak??w"}
                    date={"19 sierpnia 2016"}
                    menuNames={"MONIKA i RAFA??"}
                    menuTitle={"ZDJ??CIA ??LUBNE KRAK??W, RESTAURACJA CHOCHO??OWY DW??R"}
                    leadNames={"OLA i PAWE??"}
                    leadTitle={"DW??R SZLACHECKI SIECIECHOWICE, REPORTA?? ??LUBNY MIECH??W"}
                    leadUrl={"/dwor-szlachecki-sieciechowice-reportaz-slubny-miechow"}
                    leadImage={process.env.staticImagesPath + "dwor_szlachecki_sieciechowice_reportaz_slubny_miechow_start.jpg"}
                />
            
        );
};

export default BlogPageComponent;
