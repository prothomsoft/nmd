import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
    
        let images = [
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0001.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0002.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0003.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0004.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0005.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0006.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0007.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0008.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0009.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0010.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0011.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0012.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0013.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0014.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0015.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0016.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0017.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0019.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0020.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0021.jpg", height: 757 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0022.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0023.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0024.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0025.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0026.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0027.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0028.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0029.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0030.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0031.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0032.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0033.jpg", height: 852 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0034.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0035.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0036.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0037.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0038.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0039.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0040.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0041.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0042.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0043.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0044.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0045.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0046.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0047.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0049.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0048.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0050.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0051.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0052.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0053.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0054.jpg", height: 816 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0055.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0056.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0057.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0058.jpg", height: 816 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0059.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0060.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0061.jpg", height: 816 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0062.jpg", height: 816 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0063.jpg", height: 816 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0064.jpg", height: 816 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0065.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0066.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0067.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0068.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0069.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0070.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0071.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0072.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0073.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0074.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0075.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0076.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0077.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0078.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0079.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0080.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0081.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0082.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0083.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0084.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0085.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0086.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0087.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0088.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0089.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0090.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0091.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0092.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0093.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0094.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0095.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0096.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0097.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0098.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0099.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0100.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0101.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0102.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0103.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0104.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0105.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0106.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0107.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0108.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0109.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0110.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0111.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0112.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0113.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0114.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0115.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0116.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0117.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0118.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0119.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0120.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0121.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0122.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0123.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0124.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0125.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0126.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0127.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0128.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0129.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0130.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0131.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0132.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0133.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0134.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0135.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0136.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0137.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0138.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0139.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_wieliczka_0140.jpg", height: 762 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticImagesPath + "pati_i_michal_zdjecia_slubne_w_hotelu_turowka_wieliczka_start.jpg"}
                    images={images}
                    headTitle={"Fotograf na ??lub - Hotel Tur??wka - Wieliczka"}
                    headDescription={"Serdecznie zapraszam na przepi??kny ??lub Patrycji i Micha??a, kt??ry mia??em przyjemno???? fotografowa?? w super miejscu, Hotelu Tur??wka w Wieliczce."}
                    headKeywords={"fotograf na wesele krak??w,zdj??cia ??lubne w hotelu tur??wka wieliczka"}
                    headUrl={"https://99foto.pl/pati-i-michal-zdjecia-slubne-w-hotelu-turowka-wieliczka"}
                    entryContentP1={
                        'Wszystko zacz????o si?? w <a href="https://akademia-stylu.com.pl" target="_blank" rel="nofollow">Akademii Stylu</a> na naszym wsp??lnym osiedlu. Po kilku zdj??ciach z makija??u przysz??a pora na przygotowania Pana M??odego, wi??c razem z kamerzyst?? Krzy??kiem z <a href="https://camdesign.pl/" target="_blank" rel="nofollow">Camdesign</a> odwiedzili??my mieszkanie Micha??a. Nast??pnie powr??t na Bociana i b??ogos??awie??stwo, po kt??rym udali??my si?? do <a href="https://kosciol-sebastian.pl" target="_blank" rel="nofollow">Ko??cio??a ??w. Sebastiana</a> w Wieliczce. Po ceremonii, w kt??rej aktywnie pomaga??y dzieci i spektakularnym wyj??ciu z ko??cio??a, zrobili??my wsp??lne zdj??cie grupowe. Wed??ug planu na ??yczenia go??cie musieli poczeka??, a?? dotr?? na sal?? weseln??.'
                    }
                    entryContentP2={
                        'Udali??my si?? wi??c do <a href="https://www.turowka.pl/" target="_blank" rel="nofollow">Hotelu Tur??wka</a> w Wieliczce, wyj??tkowego miejsca z klimatycznym wystrojem. Na sali czeka?? ju?? na nas zesp???? Tornado Band, kt??ry u??wietni?? zabaw?? tego wieczoru. Po setkach ??ycze?? przeplatanych kopertami, zabawa trwa??a do bia??ego rana. Pi??kny dzie??, pi??kne wspomnienia i mam nadziej?? obrazuj??ce to zdj??cia &#8211; zapraszam serdecznie na reporta?? Patrycji i Micha??a. Na koniec, pozdrowienia dla Pary M??odej, go??ci i ekipy weselnej. Blisko pi????set zdj???? z tego dnia znajdziecie w strefie klienta podaj??c has??o z mojej wizyt??wki.'
                    }
                    slug={"pati-i-michal-zdjecia-slubne-w-hotelu-turowka-wieliczka"}
                    title={"ZDJ??CIA ??LUBNE W HOTELU TUR??WKA - WIELICZKA - PATI i MICHA??"}
                    tags={"plener strbskie pleso, popradzki staw zdj??cia ??lubne, sesja ??lubna S??owacja"}
                    date={"23 sierpnia 2015"}
                    menuNames={"PATI i MICHA??"}
                    menuTitle={"ZDJ??CIA ??LUBNE W HOTELU TUR??WKA - WIELICZKA"}
                    leadNames={"OLA i PAWE??"}
                    leadTitle={"DW??R SZLACHECKI SIECIECHOWICE, REPORTA?? ??LUBNY MIECH??W"}
                    leadUrl={"/dwor-szlachecki-sieciechowice-reportaz-slubny-miechow"}
                    leadImage={process.env.staticImagesPath + "dwor_szlachecki_sieciechowice_reportaz_slubny_miechow_start.jpg"}
                />
            
        );
};

export default BlogPageComponent;
