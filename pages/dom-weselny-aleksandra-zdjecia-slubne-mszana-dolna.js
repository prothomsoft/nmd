import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
   
        let images = [
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0001.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0002.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0003.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0004.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0005.jpg", height: 382 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0006.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0007.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0009.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0008.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0011.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0010.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0012.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0015.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0014.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0013.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0016.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0017.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0018.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0019.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0020.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0021.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0022.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0023.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0024.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0025.jpg", height: 382 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0026.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0027.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0028.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0030.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0029.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0031.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0032.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0033.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0034.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0036.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0041.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0038.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0039.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0040.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0037.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0035.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0042.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0043.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0044.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0045.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0046.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0047.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0048.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0049.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0050.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0055.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0051.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0053.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0054.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0052.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0056.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0057.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0061.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0059.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0060.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0058.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0062.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0063.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0064.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0065.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0066.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0067.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0068.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0069.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0070.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0071.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0072.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0073.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0074.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0075.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0076.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0077.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0078.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0079.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0080.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0081.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0082.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0083.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0084.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0085.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0086.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0087.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0088.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0089.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0090.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0091.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0092.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0093.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0094.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0095.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0096.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0097.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0098.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0099.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0100.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0101.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0102.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0103.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0104.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0105.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0106.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0107.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0108.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0109.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0110.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0111.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0112.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0113.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0114.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0116.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0117.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0118.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0119.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0120.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0121.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0122.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0123.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0124.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0125.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0126.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0127.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0128.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0129.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0130.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0131.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0133.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0134.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0135.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0136.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0137.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0138.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0139.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0140.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0142.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0141.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0132.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0143.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0145.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0147.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0146.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0148.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0115.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0149.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0150.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0151.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0144.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/dom_weselny_aleksandra_mszana_dolna_0152.jpg", height: 763 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticImagesPath + "dom-weselny-aleksandra-zdjecia-slubne-mszana-dolna-start.jpg"}
                    images={images}
                    headTitle={"Dom weselny Aleksandra, zdj??cia ??lubne Mszana Dolna"}
                    headDescription={"Aleksandra to nowo powsta??y Dom Weselny w Mszanie Dolnej, ??wietne miejsce by zorganizowa?? tam Wasz ??lub. Zapraszam na reporta?? ??lubny Kasi i Piotra."}
                    headKeywords={"Dom weselny Aleksandra, zdj??cia ??lubne Mszana Dolna, fotograf na wesele Mszana"}
                    headUrl={"https://99foto.pl/dom-weselny-aleksandra-zdjecia-slubne-mszana-dolna"}
                    entryContentP1={
                        '??wi??ta Wielkanocne, a w szczeg??lno??ci lany poniedzia??ek to dzie?? otwieraj??cy parkiety w ca??ej Polsce. Korzystaj??c wi??c z okazji urwa??em si?? na kilka godzin z Tokarni, gdzie dzielili??my si?? jajkiem z rodzin?? ju?? od niedzieli, by uwieczni?? ??lub Kasi i Piotra. Przygotowania zacz??li??my w My??lenicach w <a href="https://www.facebook.com/biogenika/" target="_blank" rel="nofollow">Salonie Urody Biogenika</a>. Makija?? profesjonalnie wykona??a kole??anka Kasi z licealnej klasy. Chwil?? p????niej na fotelu zasiad??a ??wiadkowa Ania, czyli siostra Kasi, kt??rej zdj??cie after mo??ecie zobaczy?? na facebooku. Nast??pnie udali??my si?? do Str????y i tam z pomoc?? mamy Kasia ubra??a sukni?? ??lubn??, buty, podwi??zk?? i bi??uterie. By??a te?? chwila na kawk?? i mi???? rozmow?? z rodzicami. Piotr mieszka?? w Pcimiu, uda??em si?? tam wi??c w kilka minut by sfotografowa?? r??wnie?? jego przygotowania. Podczas ubierania asystowa??a siostra Ania. Gdy wszystko by??o ju?? gotowe odby??o si?? pierwsze pe??ne emocji b??ogos??awie??stwo w domu Piotra i kolejne ju?? wsp??lne w domu Kasi.'
                    }
                    entryContentP2={
                        'Po godzinie 14 udali??my si?? do <a href="https://www.diecezja.pl/parafie/lista-parafii/33-pcim/parafia-nmp-krolowej-polski.html" target="_blank" rel="nofollow"> Ko??cio??a pw. Naj??wi??tszej Maryi Panny Kr??lowej Polski w Str????y</a>. Poniewa?? brat Kasi w najbli??szej przysz??o??ci b??dzie ksi??dzem, wi??c zakrystia i ko??ci???? b??d?? jego drugim domem. Czu?? si?? tam prawdziwym gospodarzem, dzi??ki czemu wszystko przebiega??o bardzo sprawnie i w przemi??ej atmosferze. Po kazaniu Para M??oda powiedzia??a sakramentalne TAK. Atrakcj?? dla wielu go??ci, by??a schola, kt??ra doda??a ceremoni charakteru gr?? na instumentach i pi??knym ??piewem. Zrobili??my zdj??cie grupowe i udali??my si?? do <a href="https://www.weselamszana.pl/" target="_blank" rel="nofollow">Domu Weselnego Aleksandra w Mszanie Dolnej</a>. Go??cie weselny Kasi i Piotra mogli rozpocz???? sezon taneczny w mega komfortowych warunkach. Parkiet zape??nia?? si?? szybko. Frekwencj?? na parkiecie zapewnia?? mega profesjolany zesp???? <a href="https://zespolespresso.pl/" target="_blank" rel="nofollow">Zesp???? Espresso</a>. Ka??dy szczeg???? zosta?? uchwycony przez filmowc??w z <a href="https://www.db7studio.pl/pl/" target="_blank" rel="nofollow">DB7 Studio</a>. Nie brakowa??o ch??tnych do zabaw oczepinowych, dzia??o si?? du??o, a szalona zabawa trwa??a do bia??ego rana. Kasiu i Piotrze wielkie dzi??ki, ??e mog??em by?? Waszym go??ciem i fotografem. Zapraszam na reporta?? z tego dnia, a po wi??cej zdj???? do strefy klienta. Has??o znajdziecie na mojej wizyt??wce.'
                    }
                    slug={"dom-weselny-aleksandra-zdjecia-slubne-mszana-dolna"}
                    title={"DOM WESELNY ALEKSANDRA, ZDJ??CIA ??LUBNE MSZANA DOLNA - KASIA i PIOTR"}
                    tags={"Dom weselny Aleksandra, zdj??cia ??lubne Mszana Dolna, fotograf na wesele Mszana"}
                    date={"2 kwietnia 2018"}
                    menuNames={"KASIA i PIOTR"}
                    menuTitle={"DOM WESELNY ALEKSANDRA, ZDJ??CIA ??LUBNE MSZANA DOLNA"}
                    leadNames={"KINGA i MACIEK"}
                    leadTitle={"DEKORACJA SALI WESELNEJ W STYLU RUSTYKALNYM, OSP ZAWADA"}
                    leadUrl={"/dekoracja-sali-weselnej-w-stylu-rustykalnym-osp-zawada"}
                    leadImage={process.env.staticImagesPath + "dekoracja_sali_weselnej_w_stylu_rustykalnym_osp_zawada_start.jpg"}
                />
            
        );
};

export default BlogPageComponent;
