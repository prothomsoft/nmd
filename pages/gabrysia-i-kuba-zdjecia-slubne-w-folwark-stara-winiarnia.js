import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
   
        let images = [
            { imageSrc: "/static/blog/2016/01/fotograf_na_wesele_mszana_dolna_0011.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/01/fotograf_na_wesele_mszana_dolna_0001.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/01/fotograf_na_wesele_mszana_dolna_0002.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/01/fotograf_na_wesele_mszana_dolna_0003.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/01/fotograf_na_wesele_mszana_dolna_0004.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/01/fotograf_na_wesele_mszana_dolna_0006.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/01/fotograf_na_wesele_mszana_dolna_0005.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/01/fotograf_na_wesele_mszana_dolna_0007.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/01/fotograf_na_wesele_mszana_dolna_0008.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/01/fotograf_na_wesele_mszana_dolna_0009.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/01/fotograf_na_wesele_mszana_dolna_0010.jpg", height: 382 },
            { imageSrc: "/static/blog/2016/01/fotograf_na_wesele_mszana_dolna_0012.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/01/fotograf_na_wesele_mszana_dolna_0013.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/01/fotograf_na_wesele_mszana_dolna_0015.jpg", height: 382 },
            { imageSrc: "/static/blog/2016/01/fotograf_na_wesele_mszana_dolna_0014.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/01/fotograf_na_wesele_mszana_dolna_0017.jpg", height: 382 },
            { imageSrc: "/static/blog/2016/01/fotograf_na_wesele_mszana_dolna_0016.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/01/fotograf_na_wesele_mszana_dolna_0018.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/01/fotograf_na_wesele_mszana_dolna_0021.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/01/fotograf_na_wesele_mszana_dolna_0019.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/01/fotograf_na_wesele_mszana_dolna_0020.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/01/fotograf_na_wesele_mszana_dolna_0022.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/01/fotograf_na_wesele_mszana_dolna_0023.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/01/fotograf_na_wesele_mszana_dolna_0048.jpg", height: 382 },
            { imageSrc: "/static/blog/2016/01/fotograf_na_wesele_mszana_dolna_0025.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/01/fotograf_na_wesele_mszana_dolna_0026.jpg", height: 382 },
            { imageSrc: "/static/blog/2016/01/fotograf_na_wesele_mszana_dolna_0027.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/01/fotograf_na_wesele_mszana_dolna_0028.jpg", height: 382 },
            { imageSrc: "/static/blog/2016/01/fotograf_na_wesele_mszana_dolna_0029.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/01/fotograf_na_wesele_mszana_dolna_0030.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/01/fotograf_na_wesele_mszana_dolna_0031.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/01/fotograf_na_wesele_mszana_dolna_0032.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/01/fotograf_na_wesele_mszana_dolna_0033.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/01/fotograf_na_wesele_mszana_dolna_0034.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/01/fotograf_na_wesele_mszana_dolna_0035.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/01/fotograf_na_wesele_mszana_dolna_0036.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/01/fotograf_na_wesele_mszana_dolna_0037.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/01/fotograf_na_wesele_mszana_dolna_0038.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/01/fotograf_na_wesele_mszana_dolna_0039.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/01/fotograf_na_wesele_mszana_dolna_0040.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/01/fotograf_na_wesele_mszana_dolna_0041.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/01/fotograf_na_wesele_mszana_dolna_0042.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/01/fotograf_na_wesele_mszana_dolna_0043.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/01/fotograf_na_wesele_mszana_dolna_0044.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/01/fotograf_na_wesele_mszana_dolna_0045.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/01/fotograf_na_wesele_mszana_dolna_0046.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/01/fotograf_na_wesele_mszana_dolna_0047.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/01/fotograf_na_wesele_mszana_dolna_0049.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/01/fotograf_na_wesele_mszana_dolna_0050.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/01/fotograf_na_wesele_mszana_dolna_0051.jpg", height: 806 },
            { imageSrc: "/static/blog/2016/01/fotograf_na_wesele_mszana_dolna_0052.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/01/fotograf_na_wesele_mszana_dolna_0053.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/01/fotograf_na_wesele_mszana_dolna_0054.jpg", height: 851 },
            { imageSrc: "/static/blog/2016/01/fotograf_na_wesele_mszana_dolna_0055.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/01/fotograf_na_wesele_mszana_dolna_0056.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/01/fotograf_na_wesele_mszana_dolna_0057.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/01/fotograf_na_wesele_mszana_dolna_0058.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/01/fotograf_na_wesele_mszana_dolna_0059.jpg", height: 851 },
            { imageSrc: "/static/blog/2016/01/fotograf_na_wesele_mszana_dolna_0060.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/01/fotograf_na_wesele_mszana_dolna_0061.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/01/fotograf_na_wesele_mszana_dolna_0062.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/01/fotograf_na_wesele_mszana_dolna_0063.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/01/fotograf_na_wesele_mszana_dolna_0064.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/01/fotograf_na_wesele_mszana_dolna_0065.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/01/fotograf_na_wesele_mszana_dolna_0066.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/01/fotograf_na_wesele_mszana_dolna_0067.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/01/fotograf_na_wesele_mszana_dolna_0068.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/01/fotograf_na_wesele_mszana_dolna_0069.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/01/fotograf_na_wesele_mszana_dolna_0070.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/01/fotograf_na_wesele_mszana_dolna_0071.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/01/fotograf_na_wesele_mszana_dolna_0072.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/01/fotograf_na_wesele_mszana_dolna_0073.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/01/fotograf_na_wesele_mszana_dolna_0074.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/01/fotograf_na_wesele_mszana_dolna_0075.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/01/fotograf_na_wesele_mszana_dolna_0076.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/01/fotograf_na_wesele_mszana_dolna_0077.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/01/fotograf_na_wesele_mszana_dolna_0078.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/01/fotograf_na_wesele_mszana_dolna_0079.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/01/fotograf_na_wesele_mszana_dolna_0080.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/01/fotograf_na_wesele_mszana_dolna_0081.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/01/fotograf_na_wesele_mszana_dolna_0082.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/01/fotograf_na_wesele_mszana_dolna_0083.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/01/fotograf_na_wesele_mszana_dolna_0084.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/01/fotograf_na_wesele_mszana_dolna_0085.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/01/fotograf_na_wesele_mszana_dolna_0086.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/01/fotograf_na_wesele_mszana_dolna_0087.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/01/fotograf_na_wesele_mszana_dolna_0088.jpg", height: 762 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticImagesPath + "gabrysia_i_kuba_zdjecia_slubnew_folwark_stara_winiarnia_start.jpg"}
                    images={images}
                    headTitle={"Zdj??cia ??lubne Folwark Stara Winiarnia"}
                    headDescription={"Serdecznie zapraszam do Folwarku Stara Winiarnia w Mszanie Dolnej na ??lub Gabrysi i Kuby. Po raz kolejny tego roku wsp??lnie pokonali??my zim??."}
                    headKeywords={"zdj??cia ??lubne folwark stara winiarnia,fotograf na ??lub mszana dolna,fotograf na ??lub cywilny"}
                    headUrl={"https://99foto.pl/gabrysia-i-kuba-zdjecia-slubne-w-folwark-stara-winiarnia"}
                    entryContentP1={
                        "Drugi weekend stycznia to wa??ny dzie?? dla Gabrysi i Kuby, kt??rzy powiedzieli sobie TAK w Folwarku Stara Winiarnia w Mszanie Dolnej. Kilka zdj???? z walizkami podczas wyjazdu z Krakowa, p????niej lekki samochodowy sprint zakopiank?? do salonu fryzjerskiego w Mszanie Dolnej. Cztery godziny na paznokcie, fryzur??, makija?? i genialny efekt ko??cowy. Mniej ni?? trzydzie??ci minut na ubieranie sukni ??lubnej i w pe??nej gotowo??ci imprez?? czas zacz????. Podczas fotografowania ??lub??w cywilnych trzeba wykaza?? si?? sporym refleksem, poniewa?? ca??a ceremonia trwa kr??tko."
                    }
                    entryContentP2={
                        'Wcale si?? nie pomyl?? jak powiem, ??e zabawa weselna odby??a si?? pi??tro wy??ej, bo rzeczywi??cie tak by??o. Na sali rodzice przywitali m??odych chlebem i sol?? po czym rozpocz????a si?? tradycyjna zbi??rka kopert i prezent??w, podczas kt??rych Gabi i Kuba otrzymali moc gor??cych ??ycze??. Na sali czeka?? ju?? zesp???? <a href="https://www.motifband.pl/" target="_blank" rel="nofollow">Motif Band</a>, kt??ry u??wietni?? zabaw?? tego wieczoru. Na koniec, pozdrowienia dla Pary M??odej, go??ci i ekipy weselnej. Blisko pi????set zdj???? z tego dnia znajdziecie w strefie klienta podaj??c has??o z mojej wizyt??wki.'
                    }
                    slug={"gabrysia-i-kuba-zdjecia-slubne-w-folwark-stara-winiarnia"}
                    title={"ZDJ??CIA ??LUBNE W FOLWARKU STARA WINIARNIA - GABRYSIA i KUBA"}
                    tags={"zdj??cia ??lubne folwark stara winiarnia,fotograf na ??lub mszana dolna,fotograf na ??lub cywilny"}
                    date={"14 stycznia 2016"}
                    menuNames={"GABRYSIA i KUBA"}
                    menuTitle={"ZDJ??CIA ??LUBNE W FOLWARKU STARA WINIARNIA"}
                    leadNames={"MONIKA i RAFA??"}
                    leadTitle={"ZDJ??CIA ??LUBNE KRAK??W, RESTAURACJA CHOCHO??OWY DW??R"}
                    leadUrl={"/monika-i-rafal-zdjecia-slubne-krakow-restauracja-chocholowy-dwor"}
                    leadImage={process.env.staticImagesPath + "monika_i_rafal_zdjecia_slubne_krakow_restauracja_chocholowy_dwor_start.jpg"}
                />
            
        );
};

export default BlogPageComponent;
