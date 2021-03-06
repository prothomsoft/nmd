import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
   
        let images = [
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0018.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0001.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0002.jpg", height: 527 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0007.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0003.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0011.jpg", height: 382 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0004.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0141.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0140.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0139.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0008.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0016.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0009.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0013.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0017.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0015.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0014.jpg", height: 527 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0021.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0022.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0024.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0023.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0025.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0026.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0028.jpg", height: 762 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0027.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0029.jpg", height: 762 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0030.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0142.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0143.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0033.jpg", height: 850 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0035.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0144.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0037.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0038.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0039.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0034.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0040.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0043.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0044.jpg", height: 806 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0042.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0045.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0046.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0047.jpg", height: 762 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0048.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0049.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0050.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0051.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0053.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0054.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0055.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0056.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0057.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0058.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0059.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0060.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0061.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0062.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0063.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0064.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0065.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0066.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0068.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0067.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0069.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0070.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0071.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0072.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0073.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0075.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0074.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0076.jpg", height: 806 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0078.jpg", height: 762 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0077.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0079.jpg", height: 762 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0081.jpg", height: 382 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0080.jpg", height: 762 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0082.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0083.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0084.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0085.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0086.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0087.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0088.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0089.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0090.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0091.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0092.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0093.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0094.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0095.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0096.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0097.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0098.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0100.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0102.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0101.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0103.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0104.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0105.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0106.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0107.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0108.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0109.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0110.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0111.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0112.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0113.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0114.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0115.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0116.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0117.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0118.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0119.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0120.jpg", height: 762 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0121.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0122.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0124.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0125.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0126.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0127.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0128.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0129.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0130.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0132.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0131.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0133.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0135.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0134.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/04/fotograf_slubny_myslenice_0123.jpg", height: 763 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticImagesPath + "zdjecia_slubne_restauracja_stek_myslenice_start.jpg"}
                    images={images}
                    headTitle={"Zdj??cia ??lubne Restauracja Stek My??lenice"}
                    headDescription={"Restauracja Stek My??lenice, ??wietne miejsce na zabaw?? trwaj??c?? do bia??ego rana. Zobaczcie jak super by??o na ??lubie Sylwii i Tomka. Mi??ego ogl??dania."}
                    headKeywords={"fotograf ??lubny my??lenice,restauracja stek my??lenice"}
                    headUrl={"https://99foto.pl/zdjecia-slubne-restauracja-stek-myslenice"}
                    entryContentP1={
                        "Bardzo s??oneczny i ciep??y pocz??tek kwietnia zwiastowa?? pi??kn??, pe??n?? bia??ych kwiat??w na drzewach wiosn??. W po??owie drogi miesi??c straci?? w??tek i powr??ci?? do ni??szych zimowych temperatur, a w g??rach nawet do poka??nej warstwy ??niegu. Wyobra??am wi??c sobie, ??e sobotnie przedpo??udnie w Filipowicach, gdzie rozpocz??li??my reporta?? ??lubny z najwa??niejszego dnia Sylwii i Tomka, min???? mi??dzy innymi na sprawdzaniu pogody i wyczekiwaniu na wymarzone s??o??ce. Uda??o si?? i pogoda w drugiej cz????ci dnia dopisa??a, a kr??tki plener w Zarabiu u st??p G??ry Che??m, kt??ry zrobili??my na dos??ownie kilka chwil opuszczaj??c go??ci, do??wietla??y ciep??e promienie zachodz??cego s??o??ca. Ale mo??e zaczn?? od pocz??tku. Kilka minut po godzinie dwunastej pod domem Sylwii pojawi?? si?? szybki samoch??d, z kt??rego wysiad?? Tomek. Chwil?? p????niej w r??kach Sylwii wyl??dowa?? pi??kny bukiet kwiat??w, a Tomasz w zamian otrzyma?? kilka s??odkich buziak??w."
                    }
                    entryContentP2={
                        'Tradycyjnie rodzice pob??ogos??awili M??odych po czym udali??my si?? do <a href="https://sanktuarium.myslenice.pl/" target="_blank" rel="nofollow">Ko??cio??a Narodzenia Naj??wi??tszej Maryi Panny w My??lenicach</a> na ceremoni?? za??lubin. Poniewa?? jak ju?? wspomnia??em samoch??d by?? szybki, to droga do My??lenic lekko przypomina??a wy??cig. Po podw??jnym TAK i na??o??eniu obr??czek na twarzach M??odych pojawi??y si?? ogromne u??miechy. ??yczenia i zabawa weselna odby??a si?? w <a href="https://stek.com.pl/myslenice/" target="_blank" rel="nofollow">Restauracji Stek w My??lenicach</a>. Tomasz przeni??s?? Sylwi?? przez pr??g i po lampce szampana M??odzi przyj??li gor??ce ??yczenia od przyby??ych go??ci. Za spraw?? dj-a Dawida, parkiet zape??nia?? si?? bardzo szybko i szale??stw, ta??c??w na nim nie by??o ko??ca. Od czasu do czasu przez sal?? przeje??d??a?? poci??g, ten z daleka i pojawia??y si?? postacie w maskach, prze??miesznych kapeluszach, kolorowych okularach i ponadczasowych perukach. Nie zabrak??o te?? podzi??kowa?? dla rodzic??w, przepysznego torta i tradycyjnych oczepin. Sylwio i Tomku, bardzo Wam dzi??kuj?? za ten wyj??tkowy dzie??, ciep??e przyj??cie i genialn?? atmosfer??. ??ycz?? mi??ego ogl??dania, a po wi??cej zdj???? zapraszam Was i go??ci weselnych do strefy klienta z has??em z mojej wizyt??wki.'
                    }
                    slug={"zdjecia-slubne-restauracja-stek-myslenice"}
                    title={"ZDJ??CIA ??LUBNE RESTAURACJA STEK MY??LENICE - SYLWIA i TOMASZ"}
                    tags={"fotograf ??lubny my??lenice,restauracja stek my??lenice"}
                    date={"28 kwietnia 2017"}
                    menuNames={"SYLWIA i TOMASZ"}
                    menuTitle={"ZDJ??CIA ??LUBNE RESTAURACJA STEK MY??LENICE"}
                    leadNames={"IWONA i MARCIN"}
                    leadTitle={"WESELE W G??RALSKIM KLIMACIE PRZYSTA?? KABANOS SPYTKOWICE"}
                    leadUrl={"/wesele-w-goralskim-klimacie-przystan-kabanos-spytkowice"}
                    leadImage={process.env.staticImagesPath + "wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_start.jpg"}
                />
            
        );
};

export default BlogPageComponent;
