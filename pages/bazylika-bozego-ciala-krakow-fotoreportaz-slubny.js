import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
    
        let images = [
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0001.jpg", height: 527 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0002.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0003.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0004.jpg", height: 526 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0005.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0006.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0007.jpg", height: 527 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0008.jpg", height: 527 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0009.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0010.jpg", height: 382 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0011.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0012.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0013.jpg", height: 567 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0014.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0015.jpg", height: 383 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0016.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0018.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0017.jpg", height: 382 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0019.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0020.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0021.jpg", height: 382 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0022.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0023.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0025.jpg", height: 852 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0024.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0026.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0033.jpg", height: 382 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0032.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0030.jpg", height: 851 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0029.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0031.jpg", height: 382 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0028.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0034.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0035.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0038.jpg", height: 383 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0036.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0037.jpg", height: 383 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0039.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0040.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0041.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0042.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0043.jpg", height: 527 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0044.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0045.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0046.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0047.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0048.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0049.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0050.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0055.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0051.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0052.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0053.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0059.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0056.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0068.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0057.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0058.jpg", height: 527 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0073.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0060.jpg", height: 527 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0061.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0062.jpg", height: 466 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0064.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0063.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0065.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0066.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0067.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0069.jpg", height: 382 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0071.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0070.jpg", height: 383 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0074.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0072.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0075.jpg", height: 383 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0076.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0077.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0078.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0079.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0080.jpg", height: 382 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0081.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0082.jpg", height: 382 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0083.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0084.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0085.jpg", height: 383 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0086.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0087.jpg", height: 382 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0088.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0089.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0090.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0091.jpg", height: 566 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0092.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0093.jpg", height: 566 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0094.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0095.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0096.jpg", height: 382 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0097.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0098.jpg", height: 382 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0099.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0100.jpg", height: 382 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0101.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0102.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0103.jpg", height: 527 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0104.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0107.jpg", height: 382 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0108.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0109.jpg", height: 383 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0110.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0105.jpg", height: 527 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0111.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0112.jpg", height: 382 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0113.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0106.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0114.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0115.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0116.jpg", height: 383 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0117.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0118.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0119.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0120.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0121.jpg", height: 383 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0124.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0122.jpg", height: 383 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0125.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0126.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0127.jpg", height: 383 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0128.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0129.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0123.jpg", height: 383 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0130.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0131.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0132.jpg", height: 383 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0133.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0134.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0135.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0136.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0142.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0138.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0139.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0140.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0141.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0143.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0137.jpg", height: 383 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0145.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0146.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/08/fotograf_na_wesele_krakow_0147.jpg", height: 763 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticImagesPath + "bazylika-bozego-ciala-krakow-fotoreportaz-slubny.jpg"}
                    images={images}
                    headTitle={"Bazylika Bo??ego Cia??a Krak??w, Fotoreporta?? ??lubny"}
                    headDescription={"Bazylika Bo??ego Cia??a na Krakowskim Kazimierzu - miejsce na ??lub wymarzone. Sierpniowa pogoda i ??lub w gronie rodziny i bliskich przyjaci????. Zapraszam."}
                    headKeywords={"krak??w ko??cio??y na ??lub, ko??ci???? krak??w kazimierz, bazylika bo??ego cia??a"}
                    headUrl={"https://99foto.pl/bazylika-bozego-ciala-krakow-fotoreportaz-slubny"}
                    entryContentP1={
                        'Sierpie?? to gor??cy miesi??c ??lubny z er w nazwie. My??le wi??c, ??e dobrym pomys??em b??dzie rozpocz??cie go od pokazania na blogu fotoreporta??u ??lubnego, kt??ry w ca??o??ci odby?? si?? w naszym pi??knym mie??cie Krakowie. Chcia??em swoj?? gaw??de rozpocz???? od przedstawienia trzech wspania??ych krakowskich ko??cio????w - <a href="http://mariacki.com/" target="_blank" rel="nofollow">Ko??cio??a Mariackiego</a>, <a href="http://kolegiata-anna.pl/" target="_blank" rel="nofollow">Ko??cio??a ??w. Anny</a> oraz <a href="http://apostolowie.pl/" target="_blank" rel="nofollow">Ko??cio??a ??w. Piotra i Paw??a</a>. Natomiast przedmiotem mojej troski szczeg????nej jest przede wszystkim <a href="http://www.bozecialo.net/index.php/bazylika" target="_blank" rel="nofollow">Bazylika Bo??ego Cia??a w Krakowie</a>, w kt??rej odby??a si?? ceremonia za??lubin Anny i Piotra. Bazylika, kt??r?? mo??na zwiedza?? i podziwia?? godzinami, ch??on??c histori?? tego miejsca, poznaj??c i odkrywaj??c tam wiele niezwyk??ych artefakt??w. Poszukuj??c ko??cio??a na ??lub w Krakowie na Kazimierzu koniecznie rozwa??cie atrakcje turystyczn?? ma??opolski <a href="http://www.bozecialo.net/index.php/bazylika" target="_blank" rel="nofollow">Bazylik?? Bo??ego Cia??a w Krakowie</a>. S??oneczny dzie?? przerywany intensywnymi i trwaj??cymi tylko kilka minut opadami deszczu rozpocz??li??my na ulicy Cysters??w w <a href="http://klaru.pl/" target="_blank" rel="nofollow">Klaru Lashes Makeup Nails</a>. Makija?? wykona??a Klaudia Rusek w swoim przestronnym studio. Delikatny makija?? tylko podkre??li?? niezwyk???? urod?? Ani.'
                    }
                    entryContentP2={
                        'Nast??pnie Ania ubra??a sukni?? ??lubn??, bi??uteri?? i podwi??zk??. Wszystko to mia??o miejsce w pachn??cym nowo??ci?? mieszkaniu na osiedlu Avia w Krakowie. Chwilk?? p????niej odby??o si?? b??ogos??awie??stwo, pe??ne emocji i nie pozbawione luzu. Tu?? za ??cian?? deszczu, kt??ry w momencie przejazdu nie oszcz??dza?? ozd??b wpi??tych do czarnego BMW Pary M??odej, czeka?? na Anie i Piotra wspomniany ju?? w mojej gaw??dzie wspania??y ko??ci????. Pi??kna ceremonia, wspania??e kazanie, przysi??ga wypowiedziana z pami??ci (brawa za odwag??) i sakramentalne TAK. Zdj??cie grupowe i ??yczenia pod ko??cio??em fotografowane nie tylko przeze mnie, ale te?? zaciekawionych polskim ??lubem obcokrajowc??w odwiedzaj??cych Krak??w. Impreza sterowana przez DJ-??w, wystartowa??a. Zaistnia??a korelacja pomi??dzy go????mi na parkiecie i ciasteczkami na stole ze s??odko??ciami. Go??cie pojawiali si??, a ciasteczka znika??y r??wnie szybko. Wszystko to w idealnie przystosowanej do imprez weselnych sali bankietowej <a href="https://www.junior.krakow.pl/wesela-i-imprezy-okolicznosciowe/" target="_blank" rel="nofollow">Hotelu Junior</a>. Ten wa??ny dzie?? i moc jego atrakcji zarejestrowa??y nie tylko moje dwa aparaty. Krzy?? z <a href="https://camdesign.pl/" target="_blank" rel="nofollow">CAMDESIGN - Nowoczesny film ??lubny</a> rejestrowa?? skrz??tnie ka??d?? minutk??, staj??c na g??owie by pokona?? mnie w kategoriach niezwyk??o??ci kadru i odnajdywania najlepszego ??wiat??a - kiedy?? zobacz?? czy zwyci????y??. Aniu i Piotrze, dzi??kuj?? Wam za zaufanie przy wyborze fotografa ??lubnego. Wszystkich go??ci weselnych zapraszam do ogl??dania najciekawszych moim zdaniem zdj???? na moim blogu. Zdj??cia grupowe i du??o wi??cej znajdziecie natomiast w strefie klienta wpisuj??c has??o z mojej wizyt??wki. Gor??co zach??cam do lajkowania i udost??pniania wpisu na <a href="https://www.facebook.com/99foto" target="_blank" rel="nofollow noopener noreferrer">Facebook</a> lub <a href="https://www.instagram.com/99foto.pl/" target="_blank" rel="nofollow noopener noreferrer">Insta</a> i ??ycz?? mi??ego ogl??dania.'
                    }
                    slug={"bazylika-bozego-ciala-krakow-fotoreportaz-slubny"}
                    title={"BAZYLIKA BO??EGO CIA??A KRAK??W, FOTOREPORTA?? ??LUBNY - ANNA i PIOTR"}
                    tags={"krak??w ko??cio??y na ??lub, ko??ci???? krak??w kazimierz, bazylika bo??ego cia??a"}
                    date={"8 sierpnia 2019"}
                    menuNames={"ANNA i PIOTR"}
                    menuTitle={"BAZYLIKA BO??EGO CIA??A KRAK??W, FOTOREPORTA?? ??LUBNY"}
                    leadNames={"MARLENA i ADAM"}
                    leadTitle={"MIEJSKA SESJA NARZECZE??SKA, PI??KNI, M??ODZI i ZAKOCHANI"}
                    leadUrl={"/miejska-sesja-narzeczenska-piekni-mlodzi-i-zakochani"}
                    leadImage={process.env.staticImagesPath + "sesja_narzeczenska_krakow_kazimierz.jpg"}
                />
            
        );
};

export default BlogPageComponent;