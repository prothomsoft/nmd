import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
   
        let images = [

            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0001.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0002.jpg", height: 527 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0003.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0004.jpg", height: 526 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0005.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0006.jpg", height: 526 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0007.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0008.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0010.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0009.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0011.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0012.jpg", height: 567 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0015.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0014.jpg", height: 526 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0016.jpg", height: 382 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0013.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0017.jpg", height: 527 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0025.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0018.jpg", height: 527 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0019.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0020.jpg", height: 526 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0021.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0023.jpg", height: 382 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0022.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0024.jpg", height: 382 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0027.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0028.jpg", height: 383 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0029.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0030.jpg", height: 382 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0031.jpg", height: 806 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0032.jpg", height: 527 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0026.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0033.jpg", height: 382 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0034.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0035.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0036.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0037.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0038.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0039.jpg", height: 527 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0040.jpg", height: 526 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0041.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0042.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0043.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0044.jpg", height: 383 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0047.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0045.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0046.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0048.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0049.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0050.jpg", height: 383 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0051.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0052.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0053.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0054.jpg", height: 806 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0055.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0056.jpg", height: 851 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0058.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0057.jpg", height: 383 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0067.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0059.jpg", height: 383 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0060.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0062.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0065.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0063.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0064.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0061.jpg", height: 383 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0066.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0068.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0069.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0070.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0071.jpg", height: 382 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0072.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0073.jpg", height: 382 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0074.jpg", height: 383 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0075.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0076.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0077.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0078.jpg", height: 382 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0079.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0080.jpg", height: 383 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0081.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0082.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0083.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0084.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0085.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0086.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0087.jpg", height: 382 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0088.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0089.jpg", height: 527 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0092.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0093.jpg", height: 382 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0094.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0095.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0096.jpg", height: 382 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0097.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0090.jpg", height: 566 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0098.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0099.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0100.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0091.jpg", height: 566 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0101.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0102.jpg", height: 527 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0103.jpg", height: 383 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0104.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0105.jpg", height: 383 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0106.jpg", height: 527 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0107.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0108.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0109.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0110.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0111.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0112.jpg", height: 527 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0113.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0114.jpg", height: 527 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0115.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0116.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0118.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0117.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0119.jpg", height: 382 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0121.jpg", height: 761 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0120.jpg", height: 382 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0123.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0124.jpg", height: 527 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0125.jpg", height: 382 },
            { imageSrc: "/static/blog/2019/06/fotograf_na_wesele_babie_lato_gdow_0122.jpg", height: 763 }

        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticImagesPath + "sala_weselna_babie_lato_gdow_1.jpg"}
                    images={images}
                    headTitle={"Reporta?? ??lubny sala weselna Babie Lato Gd??w"}
                    headDescription={"Sala weselna Babie Lato Gd??w. Czerwcowa pogoda, cieplutko i wesele w gronie rodziny i bliskich przyjaci????. Paulina i Kamil, pi??kni, m??odzi, szcz????liwi. Zapraszam."}
                    headKeywords={"Reporta?? ??lubny sala weselna Babie Lato Gd??w, dobry fotograf ??lubny Biertowice"}
                    headUrl={"https://99foto.pl/reportaz-slubny-sala-weselna-babie-lato-gdow-cieplutko"}
                    entryContentP1={
                        'D??uga, d??uga historia, kt??ra sw??j pocz??tek ma blisko trzy lata temu we wrze??niu 2016 roku na <a href="https://99foto.pl/julita-i-pawel-reportaz-slubny-kosciol-na-skalce-krakow/">??lubie Julity i Paw??a</a>. Ogl??daj??c dok??adnie wpis na moim blogu w??r??d zacnego grona kr??luj??ch na parkiecie przyjaci???? doszukacie si?? Pauliny. Poniewa?? nic, a nic si?? nie zmieni??a przez ten czas nie b??dzie to trudne zadanie. W ubieg??ym roku spotkali??my si?? na sesji narzecze??skiej i spotkamy si?? jeszcze co najmniej raz na sesji ??lubnej w plenerze. Mo??e nie b??d?? pisa??, ??e zostali oni dla siebie stworzeni, ale uwierzcie mi na s??owo, ??e Paulina i Kamil wybitnie do siebie pasuj?? i zupe??nie nie dziwi mnie fakt, ??e zostali par??. Czerwiec i tropikalna pogoda, wachlarze tn??ce powietrze, wiatraki rozr??cone na maksa, takie lato mamy w tym roku. Ale po kolei. Przygotowania zacz??li??my w salonie <a href="https://www.facebook.com/kaniafryzjerstwo" target="_blank" rel="nofollow">Przemys??aw Kania Fryzjerstwo Profesjonalne</a>, gdzie Przemek (mistrz Europy we fryzjerstwie OMC Hairworld odbywaj??cych si?? w Pary??u) osobi??cie zadba?? o idealn?? fryzur?? Pauliny. W tym samym miejscu na dos??ownie kwadracie Paulina dosta??a te?? swoj?? now?? twarz. W trakcie do????czy?? do nas <a href="http://effectstudio.eu" target="_blank" rel="nofollow">??ukasz z EffectStudio</a>, kt??ry na luzie w klapeczkach zwija?? kolejne kadry tworz??c niezapomniany film ??lubny. Przecisn??li??my si?? ozdobion?? bia??ymi wst????kami alej?? do domu Pauliny by chwil?? p????niej Zakopiank?? pomkn???? prosto na przygotowania Kamila.'
                    }
                    entryContentP2={
                        'Spinki, mucha, marynarka ubrane bardzo sprawnie z fachow?? pomoc?? dru??by. Nast??pnie wr??cili??my na b??ogos??awie??stwo, po kt??rym wszyscy udali si?? do <a href="http://www.izdebnik.diecezja.pl" target="_blank" rel="nofollow">Ko??cio??a pod wezwaniem ??w. Ma??gorzaty dziewicy i m??czennicy w Izdebniku</a>. Po wyj??ciu z Ko??cio??a wykonali??my zdj??cie grupowe i Para M??oda zaprosi??a go??ci weselnych do <a href="http://babielato-gdow.pl" target="_blank" rel="nofollow">Domu Weselnego Babie Lato w Gdowie</a>. Zesp???? serwowa?? szlagiery weselnych parkiet??w i ??wietnie prowadzi?? zabawy weselne. Go??ciem specjalnym sta?? si?? zaprojektowany przez Kamila robot, kt??ry co prawda sam butelki nape??ni?? nie umia??, ale kolejki serwowa?? koncertowo. Bardzo dzi??kuj?? za ten wyj??tkowy dzie??, ciep??e przyj??cie i wspania???? atmosfer??. ??ycz?? mi??ego ogl??dania i lajkowania na <a href="https://www.facebook.com/99foto" target="_blank" rel="nofollow noopener noreferrer">Facebook</a> lub <a href="https://www.instagram.com/99foto.pl/" target="_blank" rel="nofollow noopener noreferrer">Insta</a>. Po wi??cej zdj???? zapraszam do strefy klienta. Mo??na je obejrze?? wpisuj??c has??o z mojej wizyt??wki.'
                    }
                    slug={"reportaz-slubny-sala-weselna-babie-lato-gdow-cieplutko"}
                    title={"REPORTA?? ??LUBNY SALA WESELNA BABIE LATO GD??W, CIEPLUTKO - PAULINA i KAMIL"}
                    tags={"Reporta?? ??lubny sala weselna Babie Lato Gd??w, dobry fotograf ??lubny Biertowice"}
                    date={"20 czerwca 2019"}
                    menuNames={"PAULINA i KAMIL"}
                    menuTitle={"REPORTA?? ??LUBNY SALA WESELNA BABIE LATO GD??W, CIEPLUTKO"}
                    leadNames={"MONIKA i MARTIN"}
                    leadTitle={"WESELE MI??DZYNARODOWE PROSZOWICE i POLSKIE TRADYCJE WESELNE"}
                    leadUrl={"/wesele-miedzynarodowe-proszowice-i-polskie-tradycje-weselne"}
                    leadImage={process.env.staticImagesPath + "sala_weselna_biala_wilczyca_kocmyrzow.jpg"}
                />
            
        );
};

export default BlogPageComponent;