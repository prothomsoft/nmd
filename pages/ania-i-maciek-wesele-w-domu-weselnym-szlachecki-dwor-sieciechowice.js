import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
    
        let images = [
            { imageSrc: "/static/blog/2016/06/fotograf_slubny_krakow_0001.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/06/fotograf_slubny_krakow_0002.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/06/fotograf_slubny_krakow_0003.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/06/fotograf_slubny_krakow_0004.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/06/fotograf_slubny_krakow_0005.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/06/fotograf_slubny_krakow_0006.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/06/fotograf_slubny_krakow_0007.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/06/fotograf_slubny_krakow_0009.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/06/fotograf_slubny_krakow_0008.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/06/fotograf_slubny_krakow_0010.jpg", height: 382 },
            { imageSrc: "/static/blog/2016/06/fotograf_slubny_krakow_0011.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/06/fotograf_slubny_krakow_0012.jpg", height: 527 },
            { imageSrc: "/static/blog/2016/06/fotograf_slubny_krakow_0013.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/06/fotograf_slubny_krakow_0014.jpg", height: 805 },
            { imageSrc: "/static/blog/2016/06/fotograf_slubny_krakow_0015.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/06/fotograf_slubny_krakow_0016.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/06/fotograf_slubny_krakow_0017.jpg", height: 382 },
            { imageSrc: "/static/blog/2016/06/fotograf_slubny_krakow_0018.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/06/fotograf_slubny_krakow_0019.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/06/fotograf_slubny_krakow_0020.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/06/fotograf_slubny_krakow_0021.jpg", height: 806 },
            { imageSrc: "/static/blog/2016/06/fotograf_slubny_krakow_0022.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/06/fotograf_slubny_krakow_0023.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/06/fotograf_slubny_krakow_0024.jpg", height: 382 },
            { imageSrc: "/static/blog/2016/06/fotograf_slubny_krakow_0025.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/06/fotograf_slubny_krakow_0026.jpg", height: 527 },
            { imageSrc: "/static/blog/2016/06/fotograf_slubny_krakow_0037.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/06/fotograf_slubny_krakow_0027.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/06/fotograf_slubny_krakow_0028.jpg", height: 383 },
            { imageSrc: "/static/blog/2016/06/fotograf_slubny_krakow_0029.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/06/fotograf_slubny_krakow_0030.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/06/fotograf_slubny_krakow_0031.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/06/fotograf_slubny_krakow_0032.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/06/fotograf_slubny_krakow_0034.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/06/fotograf_slubny_krakow_0033.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/06/fotograf_slubny_krakow_0035.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/06/fotograf_slubny_krakow_0036.jpg", height: 527 },
            { imageSrc: "/static/blog/2016/06/fotograf_slubny_krakow_0038.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/06/fotograf_slubny_krakow_0039.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/06/fotograf_slubny_krakow_0040.jpg", height: 527 },
            { imageSrc: "/static/blog/2016/06/fotograf_slubny_krakow_0041.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/06/fotograf_slubny_krakow_0042.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/06/fotograf_slubny_krakow_0043.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/06/fotograf_slubny_krakow_0044.jpg", height: 382 },
            { imageSrc: "/static/blog/2016/06/fotograf_slubny_krakow_0045.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/06/fotograf_slubny_krakow_0046.jpg", height: 852 },
            { imageSrc: "/static/blog/2016/06/fotograf_slubny_krakow_0047.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/06/fotograf_slubny_krakow_0048.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/06/fotograf_slubny_krakow_0049.jpg", height: 382 },
            { imageSrc: "/static/blog/2016/06/fotograf_slubny_krakow_0050.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/06/fotograf_slubny_krakow_0051.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/06/fotograf_slubny_krakow_0056.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/06/fotograf_slubny_krakow_0058.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/06/fotograf_slubny_krakow_0052.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/06/fotograf_slubny_krakow_0055.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/06/fotograf_slubny_krakow_0053.jpg", height: 806 },
            { imageSrc: "/static/blog/2016/06/fotograf_slubny_krakow_0054.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/06/fotograf_slubny_krakow_0057.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/06/fotograf_slubny_krakow_0059.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/06/fotograf_slubny_krakow_0060.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/06/fotograf_slubny_krakow_0061.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/06/fotograf_slubny_krakow_0062.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/06/fotograf_slubny_krakow_0063.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/06/fotograf_slubny_krakow_0064.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/06/fotograf_slubny_krakow_0065.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/06/fotograf_slubny_krakow_0066.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/06/fotograf_slubny_krakow_0067.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/06/fotograf_slubny_krakow_0068.jpg", height: 806 },
            { imageSrc: "/static/blog/2016/06/fotograf_slubny_krakow_0069.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/06/fotograf_slubny_krakow_0070.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/06/fotograf_slubny_krakow_0071.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/06/fotograf_slubny_krakow_0072.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/06/fotograf_slubny_krakow_0073.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/06/fotograf_slubny_krakow_0074.jpg", height: 382 },
            { imageSrc: "/static/blog/2016/06/fotograf_slubny_krakow_0075.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/06/fotograf_slubny_krakow_0076.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/06/fotograf_slubny_krakow_0077.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/06/fotograf_slubny_krakow_0078.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/06/fotograf_slubny_krakow_0079.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/06/fotograf_slubny_krakow_0080.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/06/fotograf_slubny_krakow_0081.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/06/fotograf_slubny_krakow_0082.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/06/fotograf_slubny_krakow_0083.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/06/fotograf_slubny_krakow_0084.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/06/fotograf_slubny_krakow_0085.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/06/fotograf_slubny_krakow_0086.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/06/fotograf_slubny_krakow_0087.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/06/fotograf_slubny_krakow_0088.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/06/fotograf_slubny_krakow_0089.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/06/fotograf_slubny_krakow_0090.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/06/fotograf_slubny_krakow_0091.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/06/fotograf_slubny_krakow_0092.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/06/fotograf_slubny_krakow_0093.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/06/fotograf_slubny_krakow_0094.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/06/fotograf_slubny_krakow_0095.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/06/fotograf_slubny_krakow_0096.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/06/fotograf_slubny_krakow_0097.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/06/fotograf_slubny_krakow_0098.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/06/fotograf_slubny_krakow_0099.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/06/fotograf_slubny_krakow_0100.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/06/fotograf_slubny_krakow_0101.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/06/fotograf_slubny_krakow_0102.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/06/fotograf_slubny_krakow_0103.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/06/fotograf_slubny_krakow_0104.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/06/fotograf_slubny_krakow_0105.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/06/fotograf_slubny_krakow_0106.jpg", height: 382 },
            { imageSrc: "/static/blog/2016/06/fotograf_slubny_krakow_0107.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/06/fotograf_slubny_krakow_0108.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/06/fotograf_slubny_krakow_0109.jpg", height: 382 },
            { imageSrc: "/static/blog/2016/06/fotograf_slubny_krakow_0110.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/06/fotograf_slubny_krakow_0111.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/06/fotograf_slubny_krakow_0112.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/06/fotograf_slubny_krakow_0113.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/06/fotograf_slubny_krakow_0114.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/06/fotograf_slubny_krakow_0115.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/06/fotograf_slubny_krakow_0116.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/06/fotograf_slubny_krakow_0117.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/06/fotograf_slubny_krakow_0118.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/06/fotograf_slubny_krakow_0119.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/06/fotograf_slubny_krakow_0120.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/06/fotograf_slubny_krakow_0121.jpg", height: 382 },
            { imageSrc: "/static/blog/2016/06/fotograf_slubny_krakow_0123.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/06/fotograf_slubny_krakow_0124.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/06/fotograf_slubny_krakow_0125.jpg", height: 382 },
            { imageSrc: "/static/blog/2016/06/fotograf_slubny_krakow_0126.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/06/fotograf_slubny_krakow_0127.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/06/fotograf_slubny_krakow_0128.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/06/fotograf_slubny_krakow_0122.jpg", height: 762 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticImagesPath + "ania_i_maciek_wesele_w_domu_weselnym_szlachecki_dwor_sieciechowice_start.jpg"}
                    images={images}
                    headTitle={"Zdj??cia ??lubne Szlachecki Dw??r Sieciechowice"}
                    headDescription={"Zawsze chcia??am G??RALA no i mam - Ania nie m??wi??a o rowerach. Serdecznie zapraszam na ??lub Ani i Ma??ka w Szlacheckim Dworze Sieciechowice. Mi??ego ogl??dania."}
                    headKeywords={"fotograf na wesele krak??w,zdj??cia ??lubne w domu weselnym dw??r szlachecki w sieciechowicach"}
                    headUrl={"https://99foto.pl/ania-i-maciek-wesele-w-domu-weselnym-szlachecki-dwor-sieciechowice"}
                    entryContentP1={
                        'Ania i Maciek poznali si?? na pierwszym roku studi??w, wi??c na sw??j wielki dzie??, kt??ry mia??em przyjemno???? fotografowa??, czekali a?? te studia si?? wreszcie sko??cz??. W samo po??udnie zacz??li??my przygotowania w domu rodzinnym Ani w Cianowicach Wielkich - makija?? i ubieranie sukni w dobrych humorach i doborowym towarzystwie si??str i rodzic??w. Chwil?? p????niej pojawi?? si?? Maciek w czerwonym Mercedesie i bieg wydarze?? nabra?? tempa. Pogoda by??a zam??wiona wi??c ??adnych stres??w z tego powodu nie by??o. Za spraw?? <a href="https://www.facebook.com/ZespolZowiyrucha/" target="_blank" rel="nofollow">Zesp????u Zowiyrucha</a> pod Krakowem zapanowa?? g??ralski klimat. Po pe??nym emocji b??ogos??awie??stwie udali??my si?? do <a href="https://www.parafiasmardzowice.pl/" target="_blank" rel="nofollow">Ko??cio??a Matki Bo??ej R????a??cowej w Smardzowicach</a>. Ceremoni?? poprowadzi?? sam Ksi??dz Proboszcz.'
                    }
                    entryContentP2={
                        'Wyg??osi?? on pi??kne kazanie w kt??rym mocno da?? do zrozumienia Tacie Ani, ??e jak jego dwie kolejne c??rki b??d?? wychodzi?? za m????, to tylko w jego ko??ciele. Nast??pnie udali??my si?? do <a href="https://www.szlacheckidwor.com.pl/" target="_blank" rel="nofollow">Domu Weselnego Szlachecki Dw??r w Sieciechowicach</a>. Rodzice przywitali Ani?? i Ma??ka tradycyjnie chlebem i sol??. Sala z ??atwo??ci?? pomie??ci??a dwustu pi????dziesi??ciu go??ci ca??ej imprezy. Po obiedzie by??y ??yczenia, pierwszy taniec i szale??stwa do samego rana. Wspomniany ju?? zesp???? <a href="https://www.facebook.com/ZespolZowiyrucha/" target="_blank" rel="nofollow">Zesp???? Zowiyrucha</a> po oczepinach zafundowa?? go??ciom 90 minut zabaw, przeplatanych ??arcikami ze samiu??kich g??r (czy jako?? tak) by??o maksymalnie weso??o. Serdecznie zapraszam do ogl??dania historii Ani i Ma??ka, a po wi??cej zdj???? do strefy klienta z has??em z mojej wizyt??wki.'
                    }
                    slug={"ania-i-maciek-wesele-w-domu-weselnym-szlachecki-dwor-sieciechowice"}
                    title={"WESELE W DOMU WESELNYM SZLACHECKI DW??R SIECIECHOWICE - ANIA i MACIEK"}
                    tags={"fotograf na wesele krak??w,zdj??cia ??lubne w domu weselnym dw??r szlachecki w sieciechowicach"}
                    date={"11 czerwca 2016"}
                    menuNames={"ANIA i MACIEK"}
                    menuTitle={"WESELE W DOMU WESELNYM SZLACHECKI DW??R SIECIECHOWICE"}
                    leadNames={"SYLWIA i BARTEK"}
                    leadTitle={"SESJA ??LUBNA KRAK??W"}
                    leadUrl={"/sylwia-i-bartek-sesja-poslubna-krakow"}
                    leadImage={process.env.staticImagesPath + "sylwia_i_bartek_sesja_poslubna_krakow_start.jpg"}
                />
            
        );
};

export default BlogPageComponent;
