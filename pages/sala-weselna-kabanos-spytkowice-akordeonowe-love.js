import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
   
        let images = [
            { imageSrc: "/static/blog/2019/11/sala_weselna_kabanos_spytkowice_0001.jpg", height: 851 },
            { imageSrc: "/static/blog/2019/11/sala_weselna_kabanos_spytkowice_0002.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/11/sala_weselna_kabanos_spytkowice_0003.jpg", height: 383 },
            { imageSrc: "/static/blog/2019/11/sala_weselna_kabanos_spytkowice_0004.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/11/sala_weselna_kabanos_spytkowice_0005.jpg", height: 383 },
            { imageSrc: "/static/blog/2019/11/sala_weselna_kabanos_spytkowice_0006.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/11/sala_weselna_kabanos_spytkowice_0007.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/11/sala_weselna_kabanos_spytkowice_0008.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/11/sala_weselna_kabanos_spytkowice_0009.jpg", height: 382 },
            { imageSrc: "/static/blog/2019/11/sala_weselna_kabanos_spytkowice_0010.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/11/sala_weselna_kabanos_spytkowice_0011.jpg", height: 382 },
            { imageSrc: "/static/blog/2019/11/sala_weselna_kabanos_spytkowice_0012.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/11/sala_weselna_kabanos_spytkowice_0013.jpg", height: 383 },
            { imageSrc: "/static/blog/2019/11/sala_weselna_kabanos_spytkowice_0014.jpg", height: 566 },
            { imageSrc: "/static/blog/2019/11/sala_weselna_kabanos_spytkowice_0015.jpg", height: 527 },
            { imageSrc: "/static/blog/2019/11/sala_weselna_kabanos_spytkowice_0033.jpg", height: 383 },
            { imageSrc: "/static/blog/2019/11/sala_weselna_kabanos_spytkowice_0017.jpg", height: 526 },
            { imageSrc: "/static/blog/2019/11/sala_weselna_kabanos_spytkowice_0018.jpg", height: 382 },
            { imageSrc: "/static/blog/2019/11/sala_weselna_kabanos_spytkowice_0019.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/11/sala_weselna_kabanos_spytkowice_0020.jpg", height: 383 },
            { imageSrc: "/static/blog/2019/11/sala_weselna_kabanos_spytkowice_0021.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/11/sala_weselna_kabanos_spytkowice_0022.jpg", height: 527 },
            { imageSrc: "/static/blog/2019/11/sala_weselna_kabanos_spytkowice_0023.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/11/sala_weselna_kabanos_spytkowice_0024.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/11/sala_weselna_kabanos_spytkowice_0025.jpg", height: 527 },
            { imageSrc: "/static/blog/2019/11/sala_weselna_kabanos_spytkowice_0026.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/11/sala_weselna_kabanos_spytkowice_0027.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/11/sala_weselna_kabanos_spytkowice_0016.jpg", height: 383 },
            { imageSrc: "/static/blog/2019/11/sala_weselna_kabanos_spytkowice_0028.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/11/sala_weselna_kabanos_spytkowice_0029.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/11/sala_weselna_kabanos_spytkowice_0030.jpg", height: 383 },
            { imageSrc: "/static/blog/2019/11/sala_weselna_kabanos_spytkowice_0031.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/11/sala_weselna_kabanos_spytkowice_0032.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/11/sala_weselna_kabanos_spytkowice_0035.jpg", height: 383 },
            { imageSrc: "/static/blog/2019/11/sala_weselna_kabanos_spytkowice_0048.jpg", height: 527 },
            { imageSrc: "/static/blog/2019/11/sala_weselna_kabanos_spytkowice_0047.jpg", height: 383 },
            { imageSrc: "/static/blog/2019/11/sala_weselna_kabanos_spytkowice_0036.jpg", height: 527 },
            { imageSrc: "/static/blog/2019/11/sala_weselna_kabanos_spytkowice_0037.jpg", height: 527 },
            { imageSrc: "/static/blog/2019/11/sala_weselna_kabanos_spytkowice_0038.jpg", height: 383 },
            { imageSrc: "/static/blog/2019/11/sala_weselna_kabanos_spytkowice_0039.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/11/sala_weselna_kabanos_spytkowice_0040.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/11/sala_weselna_kabanos_spytkowice_0034.jpg", height: 382 },
            { imageSrc: "/static/blog/2019/11/sala_weselna_kabanos_spytkowice_0041.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/11/sala_weselna_kabanos_spytkowice_0042.jpg", height: 383 },
            { imageSrc: "/static/blog/2019/11/sala_weselna_kabanos_spytkowice_0043.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/11/sala_weselna_kabanos_spytkowice_0044.jpg", height: 383 },
            { imageSrc: "/static/blog/2019/11/sala_weselna_kabanos_spytkowice_0045.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/11/sala_weselna_kabanos_spytkowice_0046.jpg", height: 527 },
            { imageSrc: "/static/blog/2019/11/sala_weselna_kabanos_spytkowice_0049.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/11/sala_weselna_kabanos_spytkowice_0050.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/11/sala_weselna_kabanos_spytkowice_0051.jpg", height: 383 },
            { imageSrc: "/static/blog/2019/11/sala_weselna_kabanos_spytkowice_0053.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/11/sala_weselna_kabanos_spytkowice_0052.jpg", height: 383 },
            { imageSrc: "/static/blog/2019/11/sala_weselna_kabanos_spytkowice_0054.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/11/sala_weselna_kabanos_spytkowice_0055.jpg", height: 383 },
            { imageSrc: "/static/blog/2019/11/sala_weselna_kabanos_spytkowice_0056.jpg", height: 382 },
            { imageSrc: "/static/blog/2019/11/sala_weselna_kabanos_spytkowice_0060.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/11/sala_weselna_kabanos_spytkowice_0057.jpg", height: 382 },
            { imageSrc: "/static/blog/2019/11/sala_weselna_kabanos_spytkowice_0058.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/11/sala_weselna_kabanos_spytkowice_0059.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/11/sala_weselna_kabanos_spytkowice_0061.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/11/sala_weselna_kabanos_spytkowice_0062.jpg", height: 382 },
            { imageSrc: "/static/blog/2019/11/sala_weselna_kabanos_spytkowice_0063.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/11/sala_weselna_kabanos_spytkowice_0064.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/11/sala_weselna_kabanos_spytkowice_0065.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/11/sala_weselna_kabanos_spytkowice_0066.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/11/sala_weselna_kabanos_spytkowice_0067.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/11/sala_weselna_kabanos_spytkowice_0068.jpg", height: 383 },
            { imageSrc: "/static/blog/2019/11/sala_weselna_kabanos_spytkowice_0070.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/11/sala_weselna_kabanos_spytkowice_0069.jpg", height: 383 },
            { imageSrc: "/static/blog/2019/11/sala_weselna_kabanos_spytkowice_0084.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/11/sala_weselna_kabanos_spytkowice_0072.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/11/sala_weselna_kabanos_spytkowice_0071.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/11/sala_weselna_kabanos_spytkowice_0075.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/11/sala_weselna_kabanos_spytkowice_0074.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/11/sala_weselna_kabanos_spytkowice_0073.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/11/sala_weselna_kabanos_spytkowice_0076.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/11/sala_weselna_kabanos_spytkowice_0077.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/11/sala_weselna_kabanos_spytkowice_0083.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/11/sala_weselna_kabanos_spytkowice_0078.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/11/sala_weselna_kabanos_spytkowice_0080.jpg", height: 383 },
            { imageSrc: "/static/blog/2019/11/sala_weselna_kabanos_spytkowice_0081.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/11/sala_weselna_kabanos_spytkowice_0079.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/11/sala_weselna_kabanos_spytkowice_0082.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/11/sala_weselna_kabanos_spytkowice_0085.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/11/sala_weselna_kabanos_spytkowice_0086.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/11/sala_weselna_kabanos_spytkowice_0087.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/11/sala_weselna_kabanos_spytkowice_0088.jpg", height: 382 },
            { imageSrc: "/static/blog/2019/11/sala_weselna_kabanos_spytkowice_0089.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/11/sala_weselna_kabanos_spytkowice_0090.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/11/sala_weselna_kabanos_spytkowice_0091.jpg", height: 382 },
            { imageSrc: "/static/blog/2019/11/sala_weselna_kabanos_spytkowice_0093.jpg", height: 527 },
            { imageSrc: "/static/blog/2019/11/sala_weselna_kabanos_spytkowice_0092.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/11/sala_weselna_kabanos_spytkowice_0094.jpg", height: 527 },
            { imageSrc: "/static/blog/2019/11/sala_weselna_kabanos_spytkowice_0095.jpg", height: 382 },
            { imageSrc: "/static/blog/2019/11/sala_weselna_kabanos_spytkowice_0097.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/11/sala_weselna_kabanos_spytkowice_0096.jpg", height: 383 },
            { imageSrc: "/static/blog/2019/11/sala_weselna_kabanos_spytkowice_0098.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/11/sala_weselna_kabanos_spytkowice_0099.jpg", height: 382 },
            { imageSrc: "/static/blog/2019/11/sala_weselna_kabanos_spytkowice_0101.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/11/sala_weselna_kabanos_spytkowice_0100.jpg", height: 383 },
            { imageSrc: "/static/blog/2019/11/sala_weselna_kabanos_spytkowice_0102.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/11/sala_weselna_kabanos_spytkowice_0103.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/11/sala_weselna_kabanos_spytkowice_0104.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/11/sala_weselna_kabanos_spytkowice_0105.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/11/sala_weselna_kabanos_spytkowice_0106.jpg", height: 527 },
            { imageSrc: "/static/blog/2019/11/sala_weselna_kabanos_spytkowice_0107.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/11/sala_weselna_kabanos_spytkowice_0108.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/11/sala_weselna_kabanos_spytkowice_0110.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/11/sala_weselna_kabanos_spytkowice_0111.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/11/sala_weselna_kabanos_spytkowice_0112.jpg", height: 383 },
            { imageSrc: "/static/blog/2019/11/sala_weselna_kabanos_spytkowice_0113.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/11/sala_weselna_kabanos_spytkowice_0114.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/11/sala_weselna_kabanos_spytkowice_0115.jpg", height: 382 },
            { imageSrc: "/static/blog/2019/11/sala_weselna_kabanos_spytkowice_0116.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/11/sala_weselna_kabanos_spytkowice_0117.jpg", height: 382 },
            { imageSrc: "/static/blog/2019/11/sala_weselna_kabanos_spytkowice_0118.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/11/sala_weselna_kabanos_spytkowice_0119.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/11/sala_weselna_kabanos_spytkowice_0120.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/11/sala_weselna_kabanos_spytkowice_0121.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/11/sala_weselna_kabanos_spytkowice_0122.jpg", height: 382 },
            { imageSrc: "/static/blog/2019/11/sala_weselna_kabanos_spytkowice_0123.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/11/sala_weselna_kabanos_spytkowice_0124.jpg", height: 383 },
            { imageSrc: "/static/blog/2019/11/sala_weselna_kabanos_spytkowice_0125.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/11/sala_weselna_kabanos_spytkowice_0127.jpg", height: 527 },
            { imageSrc: "/static/blog/2019/11/sala_weselna_kabanos_spytkowice_0126.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/11/sala_weselna_kabanos_spytkowice_0128.jpg", height: 527 },
            { imageSrc: "/static/blog/2019/11/sala_weselna_kabanos_spytkowice_0129.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/11/sala_weselna_kabanos_spytkowice_0130.jpg", height: 527 },
            { imageSrc: "/static/blog/2019/11/sala_weselna_kabanos_spytkowice_0131.jpg", height: 383 },
            { imageSrc: "/static/blog/2019/11/sala_weselna_kabanos_spytkowice_0133.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/11/sala_weselna_kabanos_spytkowice_0134.jpg", height: 383 },
            { imageSrc: "/static/blog/2019/11/sala_weselna_kabanos_spytkowice_0135.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/11/sala_weselna_kabanos_spytkowice_0136.jpg", height: 382 },
            { imageSrc: "/static/blog/2019/11/sala_weselna_kabanos_spytkowice_0137.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/11/sala_weselna_kabanos_spytkowice_0138.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/11/sala_weselna_kabanos_spytkowice_0139.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/11/sala_weselna_kabanos_spytkowice_0140.jpg", height: 382 },
            { imageSrc: "/static/blog/2019/11/sala_weselna_kabanos_spytkowice_0141.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/11/sala_weselna_kabanos_spytkowice_0142.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/11/sala_weselna_kabanos_spytkowice_0143.jpg", height: 382 },
            { imageSrc: "/static/blog/2019/11/sala_weselna_kabanos_spytkowice_0144.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/11/sala_weselna_kabanos_spytkowice_0145.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/11/sala_weselna_kabanos_spytkowice_0146.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/11/sala_weselna_kabanos_spytkowice_0147.jpg", height: 382 },
            { imageSrc: "/static/blog/2019/11/sala_weselna_kabanos_spytkowice_0148.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/11/sala_weselna_kabanos_spytkowice_0149.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/11/sala_weselna_kabanos_spytkowice_0151.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/11/sala_weselna_kabanos_spytkowice_0152.jpg", height: 383 },
            { imageSrc: "/static/blog/2019/11/sala_weselna_kabanos_spytkowice_0153.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/11/sala_weselna_kabanos_spytkowice_0154.jpg", height: 382 },
            { imageSrc: "/static/blog/2019/11/sala_weselna_kabanos_spytkowice_0155.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/11/sala_weselna_kabanos_spytkowice_0150.jpg", height: 383 },
            { imageSrc: "/static/blog/2019/11/sala_weselna_kabanos_spytkowice_0132.jpg", height: 763 },
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticImagesPath + "przystan_kabanos_spytkowice.jpg"}
                    images={images}
                    headTitle={"Sala weselna Kabanos Spytkowice, akordeonowe love"}
                    headDescription={
                        "Po kilku latach fotografowania ??lub??w w okolicach ????towni, Krzczonowa, Spytkowic, My??lenic robi??c zdj??cia na ??lubie w tych okolicach czuje si?? jak w domu. Totalnie ziomalski klimat na ??lubie Amandy i Jacka. Zapraszam."
                    }
                    headKeywords={"fotograf na wesele ????townia, sala weselna Spytkowice, zdj??cia ??lubne Krzczon??w"}
                    headUrl={"https://99foto.pl/sala-weselna-kabanos-spytkowice-akordeonowe-love"}
                    entryContentP1={
                        'Po kilku latach fotografowania ??lub??w w okolicach ????towni, Krzczonowa, Pcimia, Tokarni, Spytkowic i My??lenic robi??c zdj??cia na ??lubie w tamtych okolicach czuje si?? jak w domu. Totalnie ziomalski klimat gdzie ka??dy z u??miechem przybija pione i nie schodzi z parkietu do bia??ego rana. Przygotowania, na kt??rych nie ma czasu na grup??wki bo tyle ciekawszych rzeczy dzieje si?? r??wnocze??nie. Otwarto???? ludzi, kt??rej wsp????czynnik ro??nie odwrotnie proporcjonalnie do odleg??o??ci od szczyt??w g??rskich. G??ralska mowa, kt??ra wkrada si?? do s??ownika go??ci weselnych cz??sto, bardzo cz??sto. Okoliczno??ci do focenia level master. Ale do sedna. Dzie?? otworzyli??my wizyt?? na makija??u w domowym studio wiza??u <a href="https://www.facebook.com/madebymemakeup" target="_blank" rel="nofollow">Made by me Ewa Kobia??ka</a>. Minka Amandy, kt??ra zebra??a ju?? ??niwo na <a href="https://www.instagram.com/99foto.pl/" target="_blank" rel="nofollow">moim instagramie</a>, m??wi??a sama za siebie, by??o idealnie. Przygotowania Panny M??odej i Pana M??odego min????y b??yskawicznie.'
                    }
                    entryContentP2={
                        'Jacek przyjecha?? Mustangiem, wygarn???? kilka nut na akordeonie. Amanda by??a jego, nie by??o innej opcji. B??ogos??awie??stwo pe??ne emocji i pi??kna ceremonia w <a href="http://letownia.katolicki.eu/" target="_blank" rel="nofollow">Ko??ciele ??wi??tych Aposto????w Szymona i Judy Tadeusza w ????towni</a>. Dwie nieszablonowe bramy po drodze wysprz??ta??y bagani??nik Mustanga niemal??e do zera. Tradycyjne przywitanie przez rodzic??w i szampan??wki roztrzaskane na szcz????cie otworzy??y wrota <a href="http://przystanwkabanosie.pl/" target="_blank" rel="nofollow">Restauracja Przysta?? w Kabanosie w Spytkowicach</a>. Amanda i Jacek zostali przywitani przez Gabrysi?? z <a href="http://www.somgorsy.pl/" target="_blank" rel="nofollow">Zesp????u Muzycznego Somgorsy</a>, a ich pierwszy taniec w moment po gor??cych ??yczeniach i pysznym obiedzie otworzy?? parkiet. Muza na bardzo wysokim poziomie dopasowana do gustu go??ci doda??a im skrzyde??. Sandra z <a href="https://www.facebook.com/psvideofoto/" target="_blank" rel="nofollow">PS Filmy w parze z fotografi??</a> filmowa??a ka??d?? sekund?? dance floorowego szale??stwa z u??miechem na ustach. Nikt nie wie kiedy to si?? sta??o, ale w pewnym momencie Gabrysia zarz??dzi??a oczepiny. Welon i krawat poszybowa??y w g??r??. Szalona zabawa w ??apki na pod??odze zako??czy??a konkurs na najbardziej wygimnastykowan?? par?? wesela. Du??o si?? dzia??o. Zapraszam na zestaw zdj???? na ??ywca bez ustawek. Mi??ego ogl??dania.'
                    }
                    slug={"sala-weselna-kabanos-spytkowice-akordeonowe-love"}
                    title={"SALA WESELNA KABANOS SPYTKOWICE, AKORDEONOWE LOVE - AMANDA i JACEK"}
                    tags={"fotograf na wesele ????townia, sala weselna Spytkowice, zdj??cia ??lubne Krzczon??w"}
                    date={"14 listopada 2019"}
                    menuNames={"AMANDA i JACEK"}
                    menuTitle={"SALA WESELNA KABANOS SPYTKOWICE, AKORDEONOWE LOVE"}
                    leadNames={"PATRYCJA i KRZYSZTOF"}
                    leadTitle={"DWOREK FANTAZJA SKOMIELNA BIA??A i ??LUB W STYLU GLAMOUR"}
                    leadUrl={"/dworek-fantazja-skomielna-biala-i-slub-w-stylu-glamour"}
                    leadImage={process.env.staticImagesPath + "dworek_fantazja_skomielna_biala_fotograf.jpg"}
                />
            
        );
};

export default BlogPageComponent;
