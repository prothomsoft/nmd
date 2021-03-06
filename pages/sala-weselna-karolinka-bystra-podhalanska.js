import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
   
        let images = [
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0001.jpg", height: 527 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0009.jpg", height: 382 },            
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0004.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0006.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0005.jpg", height: 526 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0003.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0002.jpg", height: 382 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0007.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0008.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0012.jpg", height: 382 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0011.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0013.jpg", height: 851 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0010.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0014.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0015.jpg", height: 382 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0016.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0017.jpg", height: 382 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0018.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0019.jpg", height: 806 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0023.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0021.jpg", height: 526 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0022.jpg", height: 382 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0025.jpg", height: 526 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0020.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0024.jpg", height: 526 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0026.jpg", height: 382 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0027.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0028.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0029.jpg", height: 382 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0030.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0031.jpg", height: 382 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0032.jpg", height: 526 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0033.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0034.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0036.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0035.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0037.jpg", height: 382 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0040.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0038.jpg", height: 382 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0039.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0041.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0043.jpg", height: 527 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0042.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0044.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0046.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0045.jpg", height: 382 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0047.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0048.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0049.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0050.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0051.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0052.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0053.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0054.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0055.jpg", height: 382 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0056.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0057.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0058.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0069.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0059.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0060.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0061.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0062.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0063.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0064.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0066.jpg", height: 382 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0067.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0068.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0070.jpg", height: 382 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0071.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0073.jpg", height: 382 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0075.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0072.jpg", height: 382 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0074.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0076.jpg", height: 526 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0078.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0079.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0077.jpg", height: 526 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0080.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0081.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0082.jpg", height: 526 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0083.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0084.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0085.jpg", height: 382 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0086.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0087.jpg", height: 526 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0089.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0088.jpg", height: 526 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0090.jpg", height: 382 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0091.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0092.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0093.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0094.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0095.jpg", height: 382 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0096.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0097.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0098.jpg", height: 382 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0099.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0100.jpg", height: 526 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0101.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0102.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0104.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0103.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0105.jpg", height: 382 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0106.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0107.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0112.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0109.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0110.jpg", height: 806 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0111.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0113.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0108.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0114.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0115.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0116.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0117.jpg", height: 851 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0118.jpg", height: 526 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0119.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0120.jpg", height: 805 },            
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0122.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0121.jpg", height: 526 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0123.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0124.jpg", height: 526 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0125.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0126.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0127.jpg", height: 526 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0128.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0129.jpg", height: 382 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0130.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0131.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0132.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0133.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0134.jpg", height: 763 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0135.jpg", height: 382 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0140.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0137.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0142.jpg", height: 526 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0138.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0139.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0136.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0141.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0143.jpg", height: 527 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0145.jpg", height: 763 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0146.jpg", height: 526 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0147.jpg", height: 762 },
            { imageSrc: "/static/blog/2022/04/sala_weselna_karolinka_bystra_podhalanska_0148.jpg", height: 762 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticImagesPath + "klaudia_przemek_start.jpg"}
                    images={images}
                    headTitle={"Karolinka Bystra Podhala??ska, Wesele Stra??ackie"}
                    headDescription={"Sala weselna Karolinka Bystra Podhala??ska. Wesele stra??ackie wynikaj??ce z tradycji rodzinnych. Klaudia i Przemys??aw. Serdecznie zapraszam."}
                    headKeywords={"Sala weselna Karolinka Bystra Podhala??ska, dom weselny karolinka"}
                    headUrl={"https://99foto.pl/sala-weselna-karolinka-bystra-podhalanska"}
                    entryContentP1={
                        '<a href="https://parafiatokarnia.pl/" target="_blank" rel="nofollow noopener noreferrer">Ko??ci???? Matki Bo??ej ??nie??nej w Tokarni</a> odwiedzam regularnie przy okazji weekendowych wizyt czy imprez rodzinnych. Tym razem po raz pierwszy po generalnym remoncie fotografowa??em w tym Ko??ciele ceremoni?? ??lubn?? Klaudii i Przemka. Ogl??daj??c zdj??cia zobaczycie, ??e by?? to doskonale zorganizowany ??lub z opraw?? stra??ack??, kt??r?? przygotowa??y zast??py stra??ackie z Tokarni i Wadowic. Kilka minut przygotowa?? u Przemka i od razu mog??em si?? zorientowa??, ??e stra??akiem nie zosta?? on z przypadku, a s??u??ba w stra??y po??arnej jest bardzo wa??na dla niego i jego ca??ej rodziny. Dlatego te?? zamiast garnituru wybra?? mundur stra??acki. By??o to wi??c prawdziwe wesele stra??ackie z asyst?? samochod??w po??arniczych, stra??ack?? bram?? weseln??, specjalnie przygotowanymi zadaniami i szpalerem reprezentacyjnym utworzonym podczas ceremoni i przy wyj??ciu z Ko??cio??a.'
                    }
                    entryContentP2={
                        'Reporta?? ??lubny z tego wa??nego dla Klaudii i Przemka dnia rozpocz???? si?? w domu Panny M??odej od makija??u, kt??ry doskonale wykona??a Marlena z <a href="https://www.instagram.com/marlenazadoramakeup" target="_blank" rel="nofollow noopener noreferrer">Marlena Zadora Makeup</a>. Nie wiem czy wiecie, ale ??lub Marleny mia??em przyjemmo???? fotografowa?? trzy lata temu i wtedy r??wnie?? stra??acy z Tokarni uczcili ??lub Marleny i Ma??ka. Po pi??knej ceremonii ??lubnej odwiedzili??my <a href="https://www.facebook.com/domweselnykarolinka" target="_blank" rel="nofollow noopener noreferrer">Dom Weselny Karolinka w Bystrej Podhala??skiej</a>. Gdy wszyscy go??cie dotarli na sale weseln??, rodzice przywitali Par?? M??od?? chlebem i sol??, Przemek przeni??s?? Klaudi?? przez pr??g, i po obiedzie rozpocz????y si?? ??yczenia. <a href="https://www.planujemywesele.pl/40916-zespol-nieznani" target="_blank" rel="nofollow noopener noreferrer">Zesp???? muzyczny Nieznani</a> wystartowa?? z playlist?? i po pierwszym ta??cu parkiet zape??ni?? si?? b??yskawicznie. Na koniec musz?? wspomnie?? o Sylwku i podw??jnej roli Wojtka z <a href="https://www.facebook.com/Studio-Foto-Video-CLIP-348143895304294/" target="_blank" rel="nofollow noopener noreferrer">Studio Foto-Video CLIP</a>. Wojtka widzia??em ju?? w roli wodzireja ze skrzypcami w d??oni, a tym razem wcieli?? si?? w prezesa, kt??ry wszystkich zna?? i wprowadza?? doskona??y klimat podczas ca??ego reporta??u ??lubnego. Serdecznie zapraszam na zdj??cia i ??ycz?? mi??ego ogl??dania. Klikajcie lajki na <a href="https://www.instagram.com/99foto.pl/" target="_blank" rel="nofollow noopener noreferrer">insta</a> i <a href="https://www.facebook.com/99foto" target="_blank" rel="nofollow noopener noreferrer">facebook</a> je??eli wpis si?? podoba i do zobaczenia na kolejnym weselu.'
                    }
                    slug={"sala-weselna-karolinka-bystra-podhalanska"}
                    title={"KAROLINKA BYSTRA PODHALA??SKA, WESELE STRA??ACKIE - KLAUDIA i PRZEMYS??AW"}
                    tags={"Sala weselna Karolinka Bystra Podhala??ska, dom weselny karolinka"}
                    date={"1 maja 2022"}
                    menuNames={"KLAUDIA i PRZEMYS??AW"}
                    menuTitle={"KAROLINKA BYSTRA PODHALA??SKA, WESELE STRA??ACKIE"}
                    leadNames={"JUSTYNA i DAMIAN"}
                    leadTitle={"SYLWESTROWY ??LUB, SALA BANKIETOWA IMPRESJA JORDAN??W"}
                    leadUrl={"/sylwestrowy-slub-sala-bankietowa-impresja-jordanow"}
                    leadImage={process.env.staticImagesPath + "impresja_jordanow_start.jpg"}
                />
            
        );
};

export default BlogPageComponent;