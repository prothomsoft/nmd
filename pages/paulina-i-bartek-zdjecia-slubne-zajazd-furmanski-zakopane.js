import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
    
        let images = [
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0036.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0002.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0003.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0004.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0005.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0006.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0007.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0008.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0009.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0010.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0011.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0012.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0013.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0014.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0015.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0016.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0017.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0018.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0019.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0020.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0021.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0022.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0023.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0024.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0025.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0026.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0027.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0028.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0029.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0030.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0031.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0032.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0033.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0034.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0035.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0037.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0038.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0039.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0040.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0041.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0042.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0043.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0044.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0045.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0046.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0047.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0048.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0049.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0050.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0001.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0051.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0052.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0053.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0054.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0055.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0056.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0057.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0058.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0059.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0060.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0061.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0062.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0063.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0064.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0065.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0066.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0067.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0068.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0069.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0070.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0071.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0072.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0073.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0074.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0075.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0076.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0077.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0078.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0079.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0080.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0081.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0082.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0083.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0084.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0085.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0086.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0087.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0088.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0089.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0090.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0091.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0092.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0093.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0094.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0095.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0096.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0097.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0098.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0099.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0100.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0101.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0102.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0103.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0104.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0105.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0106.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0107.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0108.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0109.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0110.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0111.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0112.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakopane_0113.jpg", height: 763 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticImagesPath + "paulina_i_bartek_zdjecia_slubne_zajazd_furmanski_zakopane_start.jpg"}
                    images={images}
                    headTitle={"Zdj??cia ??lubne Zajazd Furma??ski Zakopane"}
                    headDescription={"Serdecznie zapraszam na histori?? Pauliny i Bartka, kt??rzy na co dzie?? mieszkaj?? w Szczecinie, a g??ry pokochali tak bardzo, ??e Zakopane wybrali na ??lub."}
                    headKeywords={"fotograf na wesele zakopane,zdj??cia ??lubne zajazd furma??ski"}
                    headUrl={"https://99foto.pl/paulina-i-bartek-zdjecia-slubne-zajazd-furmanski-zakopane"}
                    entryContentP1={
                        "Paulina i Bartek na co dzie?? mieszkaj?? w Szczecinie. G??ry jednak kochaj?? tak bardzo, ??e Zakopane wybrali na miejsce swojego ??lubu. Zamieszkali w Willi Orion pod okiem przemi??ej gospodyni i zaplanowali sw??j ??lub w Zaje??dzie Furma??skim. Ten dzie?? rozpocz??li??my wcze??nie o godzinie ??smej rano, od fryzur w zakopia??skim salonie fryzjerskim. Nast??pnie makija?? i suknia ??lubna, kt??rej ubieranie odby??o si?? w pokoju z ciekaw?? histori??. Para m??oda powiedzia??a TAK w Urz??dzie Stanu Cywilnego w Zakopanym i zaprosi??a go??ci do zajazdu na ci??g dalszy g??ralskich przyg??d."
                    }
                    entryContentP2={
                        "Na miejscu go??ci przywita??a kapela g??ralska, w graj??cej kt??rej ch??opaki bardzo przypadli do gustu Babci Pauliny. Zabawa trwa??a do bia??ego rana i para DJ-??w, kt??ra zast??pi??a g??rali, gdy Ci wyczerpali sw??j repertuar, ??wietnie poprowadzi??a ca???? imprez??. Pozdrowienia dla go??ci weselnych i mi??ego ogl??dania. Przypominam, ??e blisko 500 zdj???? znajdziecie w strefie klienta."
                    }
                    slug={"paulina-i-bartek-zdjecia-slubne-zajazd-furmanski-zakopane"}
                    title={"ZDJ??CIA ??LUBNE ZAJAZD FURMA??SKI ZAKOPANE - PAULINA i BARTEK"}
                    tags={"fotograf na wesele zakopane,zdj??cia ??lubne zajazd furma??ski"}
                    date={"14 wrze??nia 2015"}
                    menuNames={"PAULINA i BARTEK"}
                    menuTitle={"ZDJ??CIA ??LUBNE ZAJAZD FURMA??SKI ZAKOPANE"}
                    leadNames={"MONIKA i RAFA??"}
                    leadTitle={"ZDJ??CIA ??LUBNE KRAK??W, RESTAURACJA CHOCHO??OWY DW??R"}
                    leadUrl={"/monika-i-rafal-zdjecia-slubne-krakow-restauracja-chocholowy-dwor"}
                    leadImage={process.env.staticImagesPath + "monika_i_rafal_zdjecia_slubne_krakow_restauracja_chocholowy_dwor_start.jpg"}
                />
            
        );
};

export default BlogPageComponent;
