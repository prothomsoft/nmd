import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
   
        let images = [
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakliczyn_0001.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakliczyn_0002.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakliczyn_0003.jpg", height: 526 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakliczyn_0004.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakliczyn_0006.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakliczyn_0007.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakliczyn_0008.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakliczyn_0009.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakliczyn_0010.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakliczyn_0011.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakliczyn_0012.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakliczyn_0013.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakliczyn_0014.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakliczyn_0015.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakliczyn_0016.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakliczyn_0017.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakliczyn_0018.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakliczyn_0019.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakliczyn_0021.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakliczyn_0020.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakliczyn_0022.jpg", height: 526 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakliczyn_0023.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakliczyn_0024.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakliczyn_0025.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakliczyn_0026.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakliczyn_0027.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakliczyn_0028.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakliczyn_0029.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakliczyn_0030.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakliczyn_0031.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakliczyn_0032.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakliczyn_0033.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakliczyn_0034.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakliczyn_0035.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakliczyn_0036.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakliczyn_0037.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakliczyn_0038.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakliczyn_0039.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakliczyn_0040.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakliczyn_0041.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakliczyn_0042.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakliczyn_0043.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakliczyn_0044.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakliczyn_0045.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakliczyn_0046.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakliczyn_0047.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakliczyn_0048.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakliczyn_0049.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakliczyn_0050.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakliczyn_0051.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakliczyn_0052.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakliczyn_0053.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakliczyn_0054.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakliczyn_0055.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakliczyn_0056.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakliczyn_0057.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakliczyn_0058.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakliczyn_0059.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakliczyn_0060.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakliczyn_0061.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakliczyn_0062.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakliczyn_0063.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakliczyn_0064.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakliczyn_0065.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakliczyn_0066.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakliczyn_0067.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakliczyn_0068.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakliczyn_0069.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakliczyn_0070.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakliczyn_0071.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakliczyn_0072.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakliczyn_0073.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakliczyn_0074.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakliczyn_0075.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakliczyn_0076.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakliczyn_0077.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakliczyn_0078.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakliczyn_0079.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakliczyn_0080.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakliczyn_0081.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakliczyn_0082.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakliczyn_0083.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakliczyn_0084.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakliczyn_0085.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakliczyn_0086.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakliczyn_0087.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakliczyn_0089.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakliczyn_0090.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakliczyn_0091.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakliczyn_0092.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakliczyn_0093.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakliczyn_0094.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakliczyn_0095.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakliczyn_0096.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakliczyn_0097.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakliczyn_0098.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakliczyn_0099.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakliczyn_0100.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakliczyn_0101.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakliczyn_0102.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakliczyn_0103.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakliczyn_0104.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakliczyn_0105.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakliczyn_0106.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakliczyn_0107.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakliczyn_0108.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakliczyn_0109.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakliczyn_0110.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakliczyn_0111.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakliczyn_0112.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakliczyn_0113.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakliczyn_0114.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakliczyn_0115.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakliczyn_0116.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakliczyn_0117.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakliczyn_0118.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakliczyn_0119.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakliczyn_0120.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakliczyn_0121.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakliczyn_0122.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakliczyn_0123.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakliczyn_0124.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakliczyn_0125.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakliczyn_0126.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakliczyn_0127.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakliczyn_0128.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakliczyn_0129.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakliczyn_0130.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakliczyn_0131.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/09/fotograf_na_wesele_zakliczyn_0132.jpg", height: 762 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticImagesPath + "zuza_i_jarek_zdjecia_slubne_modrzewiowe_wzgorze_zakliczyn_start.jpg"}
                    images={images}
                    headTitle={"Zdj??cia ??lubne Modrzewiowe Wzg??rze - Zakliczyn"}
                    headDescription={"Reporta?? ze ??lubu Zuzy i Jarka w Restauracji Modrzewiowe Wzg??rze - Zakliczyn. Uroczysto???? za??lubin w Ko??ciele pw. ??w. Miko??aja Biskupa w Brzozowej."}
                    headKeywords={"fotograf na ??lub fa??ciszowa,zdj??cia ??lubne zakliczyn,restauracja modrzewiowe wzg??rze"}
                    headUrl={"https://99foto.pl/zuza-i-jarek-zdjecia-slubne-modrzewiowe-wzgorze-zakliczyn"}
                    entryContentP1={
                        'Idealnie wykorzystany urlop w ojczy??nie &#8211; tak kr??tko podsumowa??bym tygodniowy powr??t Zuzi i Jarka do polskiej rzeczywisto??ci. Dzie?? rozpocz??li??my w salonie kosmetycznym w Ci????kowicach. Nast??pnie mia??em przyjemno???? uczestniczy?? w d??ugotrwa??ym procesie dmuchania balon??w i dogl??da?? hodowli udomowionego raka. Po b??ogos??awie??stwie udali??my si?? do <a href="https://www.brzozowa.diecezja.tarnow.pl/" target="_blank" rel="nofollow">ko??cio??a pw. ??w. Miko??aja Biskupa w Brzozowej</a>. Po ceremoni i zdj??ciu grupowym na ??yczenia udali??my si?? do <a href="https://www.modrzewiowe-wzgorze.pl/" target="_blank" rel="nofollow">Osady Wypoczynku i Zdrowia Modrzewiowe Wzg??rze</a> w Fa??ciszowej.'
                    }
                    entryContentP2={
                        "Pa??stwo M??odzi tak rozgrzali parkiet pierwszym ta??cem, ??e p????niej nie pozostawa?? pusty. Go??cie zdecydowanie dopisali, a zabawa by??a naprawd?? przednia. Dla tych co maj?? w??tpliwo??ci lub niejasne wspomnienia z tego wieczoru, zapraszam poni??ej. O dobry klimat imprezy zadba?? Zesp???? Hit Street z Jas??a. Serdeczne pozdrowienia dla ca??ej weselnej ekipy, go??ci oraz oczywi??cie mojej pary ??? Zuzy i Jarka. Ju?? nied??ugo ich sesja plenerowa, lecz tymczasem, zapraszam na ich reporta??!"
                    }
                    slug={"zuza-i-jarek-zdjecia-slubne-modrzewiowe-wzgorze-zakliczyn"}
                    title={"ZDJ??CIA ??LUBNE MODRZEWIOWE WZG??RZE ZAKLICZYN - ZUZA i JAREK"}
                    tags={"fotograf na ??lub fa??ciszowa,zdj??cia ??lubne zakliczyn,restauracja modrzewiowe wzg??rze"}
                    date={"19 wrze??nia 2015"}
                    menuNames={"ZUZA i JAREK"}
                    menuTitle={"ZDJ??CIA ??LUBNE MODRZEWIOWE WZG??RZE ZAKLICZYN"}
                    leadNames={"KAROLINA i BARTEK"}
                    leadTitle={"SESJA ZDJ??CIOWA DW??R TOMASZOWICE, OPERA, KAZIMIERZ"}
                    leadUrl={"/sesja-zdjeciowa-dwor-tomaszowice-opera-kazimierz"}
                    leadImage={process.env.staticImagesPath + "sesja_zdjeciowa_dwor_tomaszowice_krakow_start.jpg"}
                />
            
        );
};

export default BlogPageComponent;
