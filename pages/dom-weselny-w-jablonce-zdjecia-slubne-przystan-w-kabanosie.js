import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
   
        let images = [
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0001.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0003.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0004.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0002.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0005.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0006.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0007.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0008.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0009.jpg", height: 762 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0010.jpg", height: 762 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0011.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0012.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0013.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0014.jpg", height: 850 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0017.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0015.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0016.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0018.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0019.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0020.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0021.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0022.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0023.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0024.jpg", height: 762 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0025.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0027.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0028.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0029.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0026.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0031.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0030.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0032.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0033.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0034.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0035.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0036.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0037.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0038.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0039.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0040.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0041.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0042.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0043.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0044.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0045.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0046.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0047.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0048.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0049.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0050.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0051.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0052.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0056.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0053.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0054.jpg", height: 806 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0055.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0057.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0058.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0059.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0062.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0061.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0060.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0063.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0064.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0065.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0066.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0067.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0068.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0069.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0070.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0071.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0072.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0073.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0074.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0076.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0077.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0078.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0079.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0080.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0081.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0082.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0083.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0084.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0085.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0086.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0087.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0088.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0089.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0090.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0091.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0093.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0094.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0092.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0095.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0096.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0097.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0075.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0098.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0099.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0100.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0101.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0102.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0103.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0104.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0105.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0106.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0107.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0108.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0109.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0110.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0111.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0112.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0113.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0116.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0118.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0117.jpg", height: 382 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0119.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0120.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0121.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0122.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0123.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0124.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0125.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0126.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0127.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0128.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0129.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0130.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0131.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0132.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0133.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0134.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0135.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0136.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0137.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0138.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0139.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0140.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0141.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0142.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0143.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0144.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0114.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0145.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0146.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0147.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/dom_weselny_kabanos_jablonka_0115.jpg", height: 763 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticImagesPath + "dom-weselny-w-jablonce-zdjecia-slubne-przystan-w-kabanosie-start.jpg"}
                    images={images}
                    headTitle={"Dom weselny w Jab??once, zdj??cia ??lubne Przysta?? w Kabanosie"}
                    headDescription={"Przedsylwestrowa zabawa w Karczmie Pod Kogutkiem. Reporta?? ??lubny z ceremonii za??lubin w Makowie Podhala??skim."}
                    headKeywords={"Dom weselny w Jab??once, zdj??cia ??lubne Przysta?? w Kabanosie, fotograf na wesele Jab??onka"}
                    headUrl={"https://99foto.pl/dom-weselny-w-jablonce-zdjecia-slubne-przystan-w-kabanosie"}
                    entryContentP1={
                        'Sobota rano, jeszcze zima, pocz??tek ferii zimowych w ma??opolsce, na Zakopiance full, korek od Rabki Zdr??j, jad?? do Jab??onki sfotografowa?? ??lub Joli i Tomka razem z ich prze??wietnymi dzieciakami Wiktorem i Milenk??. Fryzjer umkn???? mojej uwadze, natomiast makija?? sfotografowa??em w gabinecie kosmetycznym <a href="https://www.facebook.com/VitaGabinetKosmetycznyStudioPaznokciSolarium/" target="_blank" rel="nofollow">VITA Naturalne Pi??kno w Jab??once</a>. Dziewczyny Basia i Jola zna??y si?? nie od dzi??. Nie wiem czy makija?? by?? wcze??niej pr??bowany, ale wyszed?? perfekcyjnie. Nadszed?? czas na przygotowania u Tomka. Kr??tka chwila na poszukiwanie bia??ego domu, na tyle nowego, ??e w nawigacji jeszcze si?? nie pojawi?? i ??wietna atmosfera, kt??r?? tworzyli wsp??lnie rodzice i brat Tomka. Muszka, garnitur, buty szybko zaj????y swoje miejsce i nie przeszkodzi??a w tym trwaj??ca Olimpiada i skacz??cy Kamil Stoch. Na klatce schodowej w drzwiach mieszkania Joli powita??y mnie u??miechni??te dzieciaki. Szybko przyzwyczai??y si?? do obecno??ci Pana fotografa, a Milenka bardzo ch??tnie pozowa??a i chcia??a mie?? du??o, du??o zdj????. Iza pomog??a Joli zawi??za?? suknie ??lubn?? i dopasowa?? pozosta??e wa??ne dodatki. Tomek zjawi?? si?? w sam?? por?? i zacz????o si?? b??ogos??awie??stwo.'
                    }
                    entryContentP2={
                        'Prawdziwie rodzinna atmosfera i same pozytywne emocje w powietrzu. Po b??ogos??awie??stwie udali??my si?? do <a href="https://www.diecezja.pl/parafie/lista-parafii/20-jablonka/parafia-przemienienia-panskiego.html" target="_blank" rel="nofollow">Ko??cio??a Przemienienia Pa??skiego w Jab??once</a> w ca??o??ci po??wi??conemu Papie??owi Janowi Paw??owi II. Wiktor i Milenka dzielnie poprowadzili rodzic??w do o??tarza, a ksi??dz przywita?? ich ciep??o w zakrystii. Ceremonia przebieg??a z u??miechem na ustach i wida?? by??o wielk?? rado???? Joli i Tomka, jakby d??ugo czekali na to sakramentalne TAK. Wesele odby??o si?? w Domu Weselnym w Jab??once znanym pod nazw?? <a href="https://przystanwkabanosie.pl/pl/page/27/Restauracja_Jablonka/" target="_blank" rel="nofollow">Przysta?? w Kabanosie</a>. Po g??ralsku i nie tylko przygrywa?? <a href="https://facebook.com/kapelazwyk" target="_blank" rel="nofollow">Zesp???? Zwyk</a>. By??o Despacito, S??awomir i inne weselne szlagiery. Zesp???? zafundowa?? te?? zabaw?? z po??czochami, kt??ra skutecznie rozbawi??a go??ci weselnych. Oczepiny wy??oni??y kolejn?? par??, kt??ra wkr??tce pojawi si?? przed o??tarzem, a zabawa trwa??a do rana. Dzia??o si?? du??o jak to w g??rach. Jolu i Tomku ciesz?? si?? bardzo, ??e mog??em by?? tam z Wami w tych najwa??niejszych chwilach Waszego ??ycia. Macie super dzieciaki. Zapraszam do ogl??dania wybranych zdj????. Po wi??cej zapraszam do strefy klienta z has??em z mojej wizyt??wki, kt??re mo??na by??o tradycyjnie ju?? odnale???? przy ekspresie do kawy.'
                    }
                    slug={"dom-weselny-w-jablonce-zdjecia-slubne-przystan-w-kabanosie"}
                    title={"DOM WESELNY W JAB??ONCE, ZDJ??CIA ??LUBNE PRZYSTA?? W KABANOSIE - JOLA i TOMEK"}
                    tags={"Dom weselny w Jab??once, zdj??cia ??lubne Przysta?? w Kabanosie, fotograf na wesele Jab??onka"}
                    date={"10 luty 2017"}
                    menuNames={"JOLA i TOMEK"}
                    menuTitle={"DOM WESELNY W JAB??ONCE, ZDJ??CIA ??LUBNE PRZYSTA?? W KABANOSIE"}
                    leadNames={"KINGA i MACIEK"}
                    leadTitle={"DEKORACJA SALI WESELNEJ W STYLU RUSTYKALNYM, OSP ZAWADA"}
                    leadUrl={"/dekoracja-sali-weselnej-w-stylu-rustykalnym-osp-zawada"}
                    leadImage={process.env.staticImagesPath + "dekoracja_sali_weselnej_w_stylu_rustykalnym_osp_zawada_start.jpg"}
                />
            
        );
};

export default BlogPageComponent;
