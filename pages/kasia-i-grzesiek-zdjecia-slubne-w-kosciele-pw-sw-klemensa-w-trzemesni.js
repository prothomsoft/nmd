import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
  
        let images = [
            { imageSrc: "/static/blog/2016/08/reportaz_slubny_trzemesnia_0001.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/08/reportaz_slubny_trzemesnia_0002.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/08/reportaz_slubny_trzemesnia_0003.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/08/reportaz_slubny_trzemesnia_0004.jpg", height: 383 },
            { imageSrc: "/static/blog/2016/08/reportaz_slubny_trzemesnia_0005.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/08/reportaz_slubny_trzemesnia_0009.jpg", height: 383 },
            { imageSrc: "/static/blog/2016/08/reportaz_slubny_trzemesnia_0007.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/08/reportaz_slubny_trzemesnia_0010.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/08/reportaz_slubny_trzemesnia_0008.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/08/reportaz_slubny_trzemesnia_0011.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/08/reportaz_slubny_trzemesnia_0013.jpg", height: 382 },
            { imageSrc: "/static/blog/2016/08/reportaz_slubny_trzemesnia_0014.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/08/reportaz_slubny_trzemesnia_0015.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/08/reportaz_slubny_trzemesnia_0012.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/08/reportaz_slubny_trzemesnia_0016.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/08/reportaz_slubny_trzemesnia_0018.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/08/reportaz_slubny_trzemesnia_0017.jpg", height: 382 },
            { imageSrc: "/static/blog/2016/08/reportaz_slubny_trzemesnia_0019.jpg", height: 1007 },
            { imageSrc: "/static/blog/2016/08/reportaz_slubny_trzemesnia_0020.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/08/reportaz_slubny_trzemesnia_0021.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/08/reportaz_slubny_trzemesnia_0022.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/08/reportaz_slubny_trzemesnia_0023.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/08/reportaz_slubny_trzemesnia_0024.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/08/reportaz_slubny_trzemesnia_0025.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/08/reportaz_slubny_trzemesnia_0026.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/08/reportaz_slubny_trzemesnia_0027.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/08/reportaz_slubny_trzemesnia_0028.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/08/reportaz_slubny_trzemesnia_0030.jpg", height: 382 },
            { imageSrc: "/static/blog/2016/08/reportaz_slubny_trzemesnia_0029.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/08/reportaz_slubny_trzemesnia_0031.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/08/reportaz_slubny_trzemesnia_0032.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/08/reportaz_slubny_trzemesnia_0033.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/08/reportaz_slubny_trzemesnia_0034.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/08/reportaz_slubny_trzemesnia_0035.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/08/reportaz_slubny_trzemesnia_0036.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/08/reportaz_slubny_trzemesnia_0037.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/08/reportaz_slubny_trzemesnia_0038.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/08/reportaz_slubny_trzemesnia_0039.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/08/reportaz_slubny_trzemesnia_0041.jpg", height: 382 },
            { imageSrc: "/static/blog/2016/08/reportaz_slubny_trzemesnia_0040.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/08/reportaz_slubny_trzemesnia_0042.jpg", height: 383 },
            { imageSrc: "/static/blog/2016/08/reportaz_slubny_trzemesnia_0043.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/08/reportaz_slubny_trzemesnia_0044.jpg", height: 383 },
            { imageSrc: "/static/blog/2016/08/reportaz_slubny_trzemesnia_0045.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/08/reportaz_slubny_trzemesnia_0046.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/08/reportaz_slubny_trzemesnia_0047.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/08/reportaz_slubny_trzemesnia_0048.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/08/reportaz_slubny_trzemesnia_0049.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/08/reportaz_slubny_trzemesnia_0050.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/08/reportaz_slubny_trzemesnia_0051.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/08/reportaz_slubny_trzemesnia_0052.jpg", height: 382 },
            { imageSrc: "/static/blog/2016/08/reportaz_slubny_trzemesnia_0053.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/08/reportaz_slubny_trzemesnia_0054.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/08/reportaz_slubny_trzemesnia_0055.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/08/reportaz_slubny_trzemesnia_0056.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/08/reportaz_slubny_trzemesnia_0057.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/08/reportaz_slubny_trzemesnia_0058.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/08/reportaz_slubny_trzemesnia_0059.jpg", height: 382 },
            { imageSrc: "/static/blog/2016/08/reportaz_slubny_trzemesnia_0060.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/08/reportaz_slubny_trzemesnia_0061.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/08/reportaz_slubny_trzemesnia_0063.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/08/reportaz_slubny_trzemesnia_0062.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/08/reportaz_slubny_trzemesnia_0064.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/08/reportaz_slubny_trzemesnia_0065.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/08/reportaz_slubny_trzemesnia_0066.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/08/reportaz_slubny_trzemesnia_0067.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/08/reportaz_slubny_trzemesnia_0068.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/08/reportaz_slubny_trzemesnia_0069.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/08/reportaz_slubny_trzemesnia_0070.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/08/reportaz_slubny_trzemesnia_0071.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/08/reportaz_slubny_trzemesnia_0072.jpg", height: 382 },
            { imageSrc: "/static/blog/2016/08/reportaz_slubny_trzemesnia_0073.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/08/reportaz_slubny_trzemesnia_0074.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/08/reportaz_slubny_trzemesnia_0075.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/08/reportaz_slubny_trzemesnia_0076.jpg", height: 527 },
            { imageSrc: "/static/blog/2016/08/reportaz_slubny_trzemesnia_0077.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/08/reportaz_slubny_trzemesnia_0078.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/08/reportaz_slubny_trzemesnia_0079.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/08/reportaz_slubny_trzemesnia_0080.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/08/reportaz_slubny_trzemesnia_0082.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/08/reportaz_slubny_trzemesnia_0083.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/08/reportaz_slubny_trzemesnia_0086.jpg", height: 382 },
            { imageSrc: "/static/blog/2016/08/reportaz_slubny_trzemesnia_0085.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/08/reportaz_slubny_trzemesnia_0087.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/08/reportaz_slubny_trzemesnia_0088.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/08/reportaz_slubny_trzemesnia_0089.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/08/reportaz_slubny_trzemesnia_0090.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/08/reportaz_slubny_trzemesnia_0091.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/08/reportaz_slubny_trzemesnia_0092.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/08/reportaz_slubny_trzemesnia_0093.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/08/reportaz_slubny_trzemesnia_0094.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/08/reportaz_slubny_trzemesnia_0095.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/08/reportaz_slubny_trzemesnia_0096.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/08/reportaz_slubny_trzemesnia_0097.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/08/reportaz_slubny_trzemesnia_0098.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/08/reportaz_slubny_trzemesnia_0099.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/08/reportaz_slubny_trzemesnia_0100.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/08/reportaz_slubny_trzemesnia_0101.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/08/reportaz_slubny_trzemesnia_0102.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/08/reportaz_slubny_trzemesnia_0103.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/08/reportaz_slubny_trzemesnia_0104.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/08/reportaz_slubny_trzemesnia_0105.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/08/reportaz_slubny_trzemesnia_0106.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/08/reportaz_slubny_trzemesnia_0107.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/08/reportaz_slubny_trzemesnia_0108.jpg", height: 382 },
            { imageSrc: "/static/blog/2016/08/reportaz_slubny_trzemesnia_0110.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/08/reportaz_slubny_trzemesnia_0109.jpg", height: 382 },
            { imageSrc: "/static/blog/2016/08/reportaz_slubny_trzemesnia_0111.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/08/reportaz_slubny_trzemesnia_0112.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/08/reportaz_slubny_trzemesnia_0113.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/08/reportaz_slubny_trzemesnia_0114.jpg", height: 383 },
            { imageSrc: "/static/blog/2016/08/reportaz_slubny_trzemesnia_0115.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/08/reportaz_slubny_trzemesnia_0116.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/08/reportaz_slubny_trzemesnia_0117.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/08/reportaz_slubny_trzemesnia_0118.jpg", height: 383 },
            { imageSrc: "/static/blog/2016/08/reportaz_slubny_trzemesnia_0119.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/08/reportaz_slubny_trzemesnia_0120.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/08/reportaz_slubny_trzemesnia_0121.jpg", height: 382 },
            { imageSrc: "/static/blog/2016/08/reportaz_slubny_trzemesnia_0123.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/08/reportaz_slubny_trzemesnia_0122.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/08/reportaz_slubny_trzemesnia_0124.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/08/reportaz_slubny_trzemesnia_0126.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/08/reportaz_slubny_trzemesnia_0125.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/08/reportaz_slubny_trzemesnia_0127.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/08/reportaz_slubny_trzemesnia_0128.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/08/reportaz_slubny_trzemesnia_0129.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/08/reportaz_slubny_trzemesnia_0130.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/08/reportaz_slubny_trzemesnia_0131.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/08/reportaz_slubny_trzemesnia_0132.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/08/reportaz_slubny_trzemesnia_0133.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/08/reportaz_slubny_trzemesnia_0134.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/08/reportaz_slubny_trzemesnia_0135.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/08/reportaz_slubny_trzemesnia_0136.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/08/reportaz_slubny_trzemesnia_0137.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/08/reportaz_slubny_trzemesnia_0138.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/08/reportaz_slubny_trzemesnia_0140.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/08/reportaz_slubny_trzemesnia_0139.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/08/reportaz_slubny_trzemesnia_0141.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/08/reportaz_slubny_trzemesnia_0142.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/08/fotograf_na_wesele_krakow_0462.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/08/reportaz_slubny_trzemesnia_0144.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/08/reportaz_slubny_trzemesnia_0145.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/08/reportaz_slubny_trzemesnia_0146.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/08/reportaz_slubny_trzemesnia_0147.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/08/reportaz_slubny_trzemesnia_0149.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/08/reportaz_slubny_trzemesnia_0148.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/08/reportaz_slubny_trzemesnia_0150.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/08/reportaz_slubny_trzemesnia_0151.jpg", height: 762 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticImagesPath + "kasia_i_grzesiek_zdjecia_slubne_w_kosciele_pw_sw_klemensa_w_trzemesni_start.jpg"}
                    images={images}
                    headTitle={"Zdj??cia ??lubne Trzeme??nia, reporta?? ??lubny My??lenice"}
                    headDescription={"Bardzo serdecznie zapraszam do odwiedzenia mojego bloga i ogl??dni??cia relacji z pi??knego ??lubu Kasi i Grze??ka. Mi??ego og??dania."}
                    headKeywords={"reporta?? ??lubny krak??w,zdj??cia ??lubne osp trzeme??nia"}
                    headUrl={"https://99foto.pl/kasia-i-grzesiek-zdjecia-slubne-w-kosciele-pw-sw-klemensa-w-trzemesni"}
                    entryContentP1={
                        "Dzisiaj przenosimy si?? w okolice Krakowa, blisko Dobczyc do miejscowo??ci Trzeme??nia. Bohaterami wpisu s?? tym razem Kasia i Grzegorz. Przygotowanie rozpocz??li??my w domu rodzinny Kasi, gdzie zasta??em wspania???? rodzinn?? atmosfer??. W rol?? wiza??ystki wcieli??a si?? siostra Kasi Emilia, wykonuj??c profesjonalny makija?? z tysi??cem pi??knych u??miech??w w pakiecie. Fotograf mia?? jak to czasem m??wi?? mocno z g??rki. Chwil?? p????niej, gdy makija?? by?? ju?? gotowy Kasia ubra??a suknie ??lubn??, bi??uteri??, buty, podwi??zk?? i oficjalnie zg??osi??a swoj?? gotowo???? do nadchodz??cych w ten wyj??tkowy dzie?? wydarze??. Przyjecha?? Tomek i srebrn?? Lagun?? wskaza?? nam drog?? do domu Grze??ka. Na miejscu mi??o by??o znale???? wsp??lny temat w szczeg??lno??ci, ??e by??o to muzykowanie."
                    }
                    entryContentP2={
                        'Kr??tkie b??ogos??awie??stwo i nadszed?? czas by odebra?? Kasi?? i stawi?? si?? w Ko??ciele o um??wionej godzinie. Po drugim tego dnia wzruszaj??cym b??ogos??awie??stwie w drodze do Ko??cio??a <a href="https://parafia-trzemesnia.pl" target="_blank" rel="nofollow">pw. ??w. Klemensa w Trzeme??ni</a> samoch??d m??odych musia?? zatrzymywa?? si?? a?? dwa razy. Za ka??dym razem Kasia i Grzegorz spotykali si?? z ogromn?? serdeczno??ci?? tworz??cych bram?? s??siad??w. Pogoda tego dnia bardzo dopisa??a, a z racji tego, ??e w zasi??gu wzroku znajdowa?? si?? ko??ci???? i sala weselna, da??o si?? odczu?? pe??n?? swobod??. Ko??ci???? zaskoczy?? mnie swoim pi??knym wn??trzem, kt??re dope??ni??o wzruszaj??c?? ceremoni?? ze wspania???? opraw?? muzyczn??. Po zdj??ciu grupowym i ??yczeniach udali??my si?? na sal??, gdzie odby??o si?? wesele. Na miejscu czeka?? ju?? zesp???? muzyczny, kt??ry zapewni?? muzyczn?? opraw?? tego dnia. Pa??stwo M??odzi otworzyli parkiet swoim pierwszym ta??cem. ??wietny klimat, szalona zabawa i naprawd?? przesympatyczna ekipa. Wielkie, wielkie dzi??kuj?? za ten wyj??tkowy dzie??, ciep??e przyj??cie i genialn?? atmosfer??. Mi??ego ogl??dania, a po wi??cej zdj???? zapraszam go??ci weselnych do strefy klienta z has??em z mojej wizyt??wki.'
                    }
                    slug={"kasia-i-grzesiek-zdjecia-slubne-w-kosciele-pw-sw-klemensa-w-trzemesni"}
                    title={"ZDJ??CIA ??LUBNE W KO??CIELE PW. ??W. KLEMENSA TRZEME??NIA - KASIA i GRZESIEK"}
                    tags={"reporta?? ??lubny krak??w,zdj??cia ??lubne osp trzeme??nia"}
                    date={"24 sierpnia 2016"}
                    menuNames={"KASIA i GRZESIEK"}
                    menuTitle={"ZDJ??CIA ??LUBNE W KO??CIELE PW. ??W. KLEMENSA TRZEME??NIA"}
                    leadNames={"MONIKA i RAFA??"}
                    leadTitle={"ZDJ??CIA ??LUBNE KRAK??W, RESTAURACJA CHOCHO??OWY DW??R"}
                    leadUrl={"/monika-i-rafal-zdjecia-slubne-krakow-restauracja-chocholowy-dwor"}
                    leadImage={process.env.staticImagesPath + "monika_i_rafal_zdjecia_slubne_krakow_restauracja_chocholowy_dwor_start.jpg"}
                />
            
        );
};

export default BlogPageComponent;
