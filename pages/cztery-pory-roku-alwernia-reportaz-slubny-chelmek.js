import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
    
        let images = [
            { imageSrc: "/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0001.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0002.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0003.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0004.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0005.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0006.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0007.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0008.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0009.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0010.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0011.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0012.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0013.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0014.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0015.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0016.jpg", height: 805 },
            { imageSrc: "/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0017.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0018.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0019.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0020.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0021.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0022.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0023.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0024.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0029.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0025.jpg", height: 382 },
            { imageSrc: "/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0026.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0028.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0031.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0027.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0030.jpg", height: 806 },
            { imageSrc: "/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0033.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0032.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0035.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0034.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0036.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0037.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0038.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0039.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0040.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0041.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0043.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0044.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0045.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0046.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0047.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0048.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0042.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0049.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0050.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0051.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0052.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0053.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0054.jpg", height: 850 },
            { imageSrc: "/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0055.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0056.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0057.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0058.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0059.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0060.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0061.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0062.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0063.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0064.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0065.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0067.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0066.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0068.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0070.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0069.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0071.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0072.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0073.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0074.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0075.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0085.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0077.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0078.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0076.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0080.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0081.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0082.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0083.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0084.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0086.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0087.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0088.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0089.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0090.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0091.jpg", height: 382 },
            { imageSrc: "/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0092.jpg", height: 762 },
            { imageSrc: "/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0093.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0095.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0096.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0097.jpg", height: 805 },
            { imageSrc: "/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0098.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0099.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0094.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0100.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0101.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0102.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0103.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0104.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0105.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0106.jpg", height: 762 },
            { imageSrc: "/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0107.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0109.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0110.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0111.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0112.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0113.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0114.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0115.jpg", height: 382 },
            { imageSrc: "/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0116.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0117.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0118.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0119.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0120.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0121.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0122.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0123.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0124.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0125.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0126.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0127.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0128.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0129.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0130.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0131.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0132.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0133.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0134.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0135.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0136.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0108.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/cztery_pory_roku_alwernia_zdjecia_slubne_0137.jpg", height: 763 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticImagesPath + "cztery-pory-roku-alwernia-reportaz-slubny-chelmek-start.jpg"}
                    images={images}
                    headTitle={"Cztery Pory Roku Alwernia, Reporta?? ??lubny Che??mek"}
                    headDescription={
                        "Alwernia, Restauracja Cztery Pory Roku i sala letnia. Wspaniali go??cie weselni i zakochani w sobie od bardzo dawno Kasia i Marcin. Serdecznie zapraszam na reporta?? z ich najwa??niejszego dnia. Mi??ego ogl??dania."
                    }
                    headKeywords={"Cztery Pory Roku Alwernia, Reporta?? ??lubny Che??mek"}
                    headUrl={"https://99foto.pl/cztery-pory-roku-alwernia-reportaz-slubny-chelmek"}
                    entryContentP1={
                        'S??oneczna kwietniowa sobota, w kt??r?? to wybra??em si?? troch?? bardziej na zach??d od Krakowa, odwiedzaj??c <a href="https://www.facebook.com/krainapieknoscijoanna" target="_blank" rel="nofollow">Salon Urody Kraina Pi??kno??ci Joanna</a> w O??wi??cimiu. Jak nie trudno zgadn???? nie pojecha??em tam na przeja??d??k?? tylko na przygotowania ??lubne Kasi. W przygotowaniach tych pannie m??odej towarzyszy??y mama i siostra, kt??ra uk??ada??y fryzury i by??y malowane r??wnocze??nie. Marcin przygotowywa?? si?? w pokoju hotelowym w pi??knej wzorowanej na polskiej architekturze pa??acowej <a href="https://alwernia-4poryroku.pl/" target="_blank" rel="nofollow">Restauracji Cztery Pory Roku w Alwernii</a>. Pok??j nowo??e??c??w z subtelnie wkomponowan?? wann?? robi?? wra??enie. W nieca??e 15 minut szelki, marynarka i pozosta??e elementy garderoby znalaz??y si?? na swoim miejscu. Mnie w tym momencie czeka?? powr??t do Che??mka na przygotowania Kasi. W sam?? por?? prosto z g??r przybyli kamerzysta Jacek ze swoj?? narzeczon?? Ani??. Okaza??o si??, ??e zbudowali oni mega pozytywny klimat, a Jacek jak prawdziwa z??ota r??czka, przyda?? si?? bardzo do pomocy w nie??atwym zadaniu zapinania guzik??w sukni ??lubnej. Pe??ne emocji b??ogos??awie??stwo i udali??my si?? do po??o??onego w bliskiej odleg??o??ci <a href="https://www.parafianmpchelmek.pl/" target="_blank" rel="nofollow">Ko??cio??a Naj??wi??tszej Maryi Panny w Che??mku</a>.'
                    }
                    entryContentP2={
                        'Ksi??dz w zakrystii w dos??ownie trzy sekundy po wej??ciu rozbawi?? dziewczyny momentalnie (fajny skill, te?? bym tak chcia??). Po podpisaniu dokument??w rozpocz????a si?? ceremonia, podnios??e kazanie i wypowiedziane z u??miechem na ustach sakramentalne TAK. Pod ko??cio??em para m??oda odebra??a ??yczenia od zaproszonych go??ci i utalanetowanych m??odych ludzi, kt??rzy uatrakcyjnili ceremoni?? pi??knym ??piewem ch??ralnym. O sali weselnej <a href="https://alwernia-4poryroku.pl/" target="_blank" rel="nofollow">Restauracji Cztery Pory Roku w Alwernii</a> ju?? wspomina??em, ale nie zaszkodzi napisa?? kilka s????w wi??cej. Pi??kne wn??trza, ka??de z nich inspirowane inn?? por?? roku. Przyj??cie weselne Kasi i Marcina odby??o si?? pod znakiem Lata. Tradycyjne przywitanie chlebem i sol??, pierwszy taniec i kanonada atrakcji. Tomek urodzony wodzirej, kt??ry wyciska?? maksa nie tylko z siebie, ale i z go??ci i Pawe?? mistrz kr??cenia DJ-sk?? konsolet?? wspaniale reprezentowali <a href="https://animatorimprez.pl/" target="_blank" rel="nofollow">Grup?? Animator??w Imprez</a>. Wymy??lali du??o zabaw, posiadali niezliczon?? ilo???? gad??et??w i o??wietlenie z lampami grilowymi, jedyne w swoim rodzaju. Powierzchnia parkietu mog??aby by?? spokojnie dwa razy wi??ksza, a i tak zosta??aby w ca??o??ci zape??niona przez ??wietnie bawi??cych si?? go??ci. Na ??lubie mia??em te?? okazj?? po raz kolejny spotka?? Marlen?? i Dawida ju?? w powi??kszonym sk??adzie. Ich g??ralski ??lub mo??ecie z ??atwo??ci?? odnale???? na moim blogu. Kasiu i Marcinie, ??wietnie zorganizowany ??lub, z pi??knym ukoronowaniem w postaci wizyty w Watykanie. Dzi??kuj?? za zaufanie i mo??liwo???? zrobienia dla Was kilku zdj????. Zapraszam do ogl??dania, a po wi??cej do strefy klienta.'
                    }
                    slug={"cztery-pory-roku-alwernia-reportaz-slubny-chelmek"}
                    title={"CZTERY PORY ROKU ALWERNIA, REPORTA?? ??LUBNY CHE??MEK - KASIA i MARCIN"}
                    tags={"Cztery Pory Roku Alwernia, Reporta?? ??lubny Che??mek"}
                    date={"21 kwietnia 2018"}
                    menuNames={"KASIA i MARCIN"}
                    menuTitle={"CZTERY PORY ROKU ALWERNIA, REPORTA?? ??LUBNY CHE??MEK"}
                    leadNames={"SANDRA i MACIEK"}
                    leadTitle={"SALA WESELNA VILLA MARINA D??BROWA G??RNICZA, ??LUB NAD JEZIOREM"}
                    leadUrl={"/sala-weselna-villa-marina-dabrowa-gornicza-slub-nad-jeziorem"}
                    leadImage={process.env.staticImagesPath + "sala-weselna-villa-marina-dabrowa-gornicza-slub-nad-jeziorem-start.jpg"}
                />
            
        );
};

export default BlogPageComponent;
