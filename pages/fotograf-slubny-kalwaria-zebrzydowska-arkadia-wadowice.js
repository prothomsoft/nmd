import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
   
        let images = [
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0021.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0009.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0003.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0004.jpg", height: 382 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0005.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0007.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0002.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0006.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0008.jpg", height: 805 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0001.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0010.jpg", height: 382 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0011.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0012.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0013.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0014.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0016.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0015.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0020.jpg", height: 566 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0018.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0017.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0019.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0022.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0023.jpg", height: 805 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0025.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0026.jpg", height: 566 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0024.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0027.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0028.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0029.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0031.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0030.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0032.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0033.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0034.jpg", height: 766 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0035.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0036.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0037.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0038.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0039.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0040.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0041.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0042.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0043.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0044.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0045.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0046.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0047.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0048.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0049.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0050.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0051.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0052.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0053.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0054.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0055.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0056.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0057.jpg", height: 850 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0058.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0059.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0060.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0061.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0062.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0063.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0064.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_slubny_kalwaria_zebrzydowska_0001.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0066.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0067.jpg", height: 805 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0068.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0069.jpg", height: 850 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0070.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0080.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0071.jpg", height: 382 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0074.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0072.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0075.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0077.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0085.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0078.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0079.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0081.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0083.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0084.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0082.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0087.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0086.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0088.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0089.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0091.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0090.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0092.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0093.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0094.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0095.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0096.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0097.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0098.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0099.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0100.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0101.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0102.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0103.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0104.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0105.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0106.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0107.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0108.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0110.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0111.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0112.jpg", height: 805 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0113.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0114.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0115.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0116.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0117.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0118.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0119.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0120.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0121.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0122.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0123.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0124.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0125.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0126.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0127.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0128.jpg", height: 805 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0129.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0130.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0131.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0132.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0133.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0134.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0135.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0136.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0137.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0138.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0139.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0140.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0141.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0142.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0109.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0143.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0144.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0145.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0146.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0147.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0148.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0149.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0150.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0151.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0153.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0152.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0154.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0156.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0155.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0157.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0158.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0159.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0160.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0161.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0168.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0162.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0163.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0165.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0164.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0166.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/06/fotograf_kalwaria_zebrzydowska_0167.jpg", height: 763 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticImagesPath + "fotograf-slubny-kalwaria-zebrzydowska-arkadia-wadowice-start.jpg"}
                    images={images}
                    headTitle={"Fotograf ??lubny Kalwaria Zebrzydowska, Arkadia Wadowice"}
                    headDescription={
                        "Czy widzieli??cie kiedy?? ponad sto wype??nionych helem, ??wiec??cych ledowych serduchowych balonik??w wystrzelonych w kosmos kilka minut po p????nocy? Je??eli nie to zapraszam do wklikni??cia w reporta?? ze ??lubu Magdy i Piotrka. Mi??ego ogl??dania."
                    }
                    headKeywords={"Fotograf ??lubny Kalwaria Zebrzydowska, Arkadia Wadowice"}
                    headUrl={"https://99foto.pl/fotograf-slubny-kalwaria-zebrzydowska-arkadia-wadowice"}
                    entryContentP1={
                        'S??oneczny dzie??, mn??stwo zieleni i powietrze o jakim mieszka??cy Krakowa mog?? tyko pomarzy??. Drugi raz w tym sezonie ??lubnym odwiedzi??em Lanckoron??. Tym razem w pierwszej kolejno??ci uda??em si?? na odnaleziony poprzednim razem punkt widokowy po zdj??cie kontekstowe, a nast??pnie uda??em si?? prosto na przygotowania do Sylwestra. Ubranie ??lubnego garnituru, spinek i muchy trwa??o kilka chwil podczas kt??rych asystowa?? Adrian. Wyszli??my jeszcze do ogrodu ogarn???? portret Pana M??odego i chwil?? p????niej by??em w drodze do Kalwarii Zebrzydowskiej gdzie swoje przygotowania rozpocz????a ju?? Dajana. Wykonanie perfekcyjnego makija??u by??o dla niej zadaniem ??atwym, poniewa?? na co dzie?? profesjonalnie zajmuj?? si?? wiza??em, dzia??aj??c pod mark?? <a href="https://www.facebook.com/dajanasajdakmakeup/" target="_blank" rel="nofollow">Dajana Sajdak Make Up</a>. W ubieraniu sukni ??lubnej i bi??uterii pomaga??a mama Dajany. Du??o pozytywnej energii sp??yn????o od Krzy??ka i Tomka z <a href="https://www.tokksa.pl/" target="_blank" rel="nofollow">TOKKSA - Insired by your life</a>, kt??rzy dokumentowali przebieg przygotowa??, ceremoni i zabawy weselnej. W ko??cu czas oczekiwania dobieg?? ko??ca i przed drzwiami zjawi?? si?? Sylwester. Gor??cy buziak na powitanie, pe??ne emocji b??ogos??awie??stwo i wsp??lnie udali??my si?? do <a href="https://www.kalwaria.diecezja.krakow.pl/" target="_blank" rel="nofollow">Ko??cio??a pw. ??w. J??zefa</a> w Kalwarii Zebrzydowskiej. Oczekuj??c na przyjazd Pary M??odej mia??em przyjemno???? spotka?? Ani?? i Micha??a, kt??rych ??lub fotografowa??em w ubieg??ym roku. Bocian, kt??ry kr????y?? podczas ich ??lubu w trakcie sk??adania ??ycze?? adresu nie pomyli?? i do pi????set plus zosta?? im ju?? nie dwa, a tylko jeden krok.'
                    }
                    entryContentP2={
                        'Fotografowanie Dajany i Sylwestra podczas ceremoni za??lubin by??y czyst?? przyjemno??ci??. Spok??j i koncentracja, b??ysk szcz????cia w oku i niezwyk??a rado???? tu?? po wypowiedzianym sakramentalnym TAK. Kolejne minuty tego pe??nego wra??e?? dnia sp??dzili??my w Domu Weselnym <a href="https://www.arkadia-wadowice.pl/glowna.html" target="_blank" rel="nofollow">Arkadia Wadowice</a>. Rodzice przywitali Par?? M??od??, a po ??yczeniach pierwszy taniec otworzy?? parkiet. <a href="https://www.facebook.com/TangoLuz" target="_blank" rel="nofollow">Zesp???? Tango Luz z Chrzanowa</a>, kt??ry nie pozwala?? go??ciom posiedzie?? na miejscu, serwowa?? pere??ki repertuaru weselnego, momentami si??gaj??c po numery gwiazd polskiego rocka. Oczywi??cie nie zabrak??o atrakcji, takich jak tort weselny, podzi??kowania dla rodzic??w, podczas kt??rych pola??y si?? ??zy, poci??g i tradycyjne oczepiny. Grubo po p????nocy muzycy oddali instrumenty i koncertowy popis zaserwowali sami Pa??stwo M??odzi, pod scen?? by??o naprawd?? gor??co. Pewnie powsta??oby kilka paragraf??w tekstu wi??cej gdybym chcia?? opisa?? wszystko to, co dzia??o si?? podczas tego pe??nego wra??e?? dnia. Ale wiecie co, ??atwiej b??dzie jak zerkniecie na zdj??cia i zobaczycie co si?? dzia??o na w??asne oczy. Tradycyjnie wi??cej zdj???? odnajdziecie w strefie klienta, korzystaj??c z has??a z mojej wizyt??wki. Mi??ego ogl??dania.'
                    }
                    slug={"fotograf-slubny-kalwaria-zebrzydowska-arkadia-wadowice"}
                    title={"FOTOGRAF ??LUBNY WADOWICE, SALA WESELNA ARKADIA - DAJANA i SYLWESTER"}
                    tags={"Fotograf ??lubny Kalwaria Zebrzydowska, Arkadia Wadowice"}
                    date={"10 czerwca 2018"}
                    menuNames={"DAJANA i SYLWESTER"}
                    menuTitle={"FOTOGRAF ??LUBNY WADOWICE, SALA WESELNA ARKADIA"}
                    leadNames={"MAGDALENA i PIOTR"}
                    leadTitle={"REPORTA?? ??LUBNY HOTEL JUNIOR KRAK??W, BALONOWY SZA??"}
                    leadUrl={"/reportaz-slubny-hotel-junior-krakow-balonowy-szal"}
                    leadImage={process.env.staticImagesPath + "reportaz-slubny-hotel-junior-krakow-balonowy-szal-start.jpg"}
                />
            
        );
};

export default BlogPageComponent;
