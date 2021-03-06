import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
   
        let images = [
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_krakow_0044.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_krakow_0001.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_krakow_0002.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_krakow_0004.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_krakow_0005.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_krakow_0006.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_krakow_0007.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_krakow_0008.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_krakow_0009.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_krakow_0010.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_krakow_0011.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_krakow_0012.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_krakow_0013.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_krakow_0014.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_krakow_0015.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_krakow_0016.jpg", height: 806 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_krakow_0017.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_krakow_0018.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_krakow_0019.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_krakow_0020.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_krakow_0021.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_krakow_0022.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_krakow_0023.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_krakow_0024.jpg", height: 382 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_krakow_0025.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_krakow_0026.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_krakow_0027.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_krakow_0028.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_krakow_0029.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_krakow_0030.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_krakow_0031.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_krakow_0032.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_krakow_0033.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_krakow_0034.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_krakow_0035.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_krakow_0036.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_krakow_0037.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_krakow_0038.jpg", height: 805 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_krakow_0039.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_krakow_0040.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_krakow_0041.jpg", height: 382 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_krakow_0042.jpg", height: 382 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_krakow_0043.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_krakow_0045.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_krakow_0046.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_krakow_0047.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_krakow_0048.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_krakow_0049.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_krakow_0050.jpg", height: 382 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_krakow_0051.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_krakow_0052.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_krakow_0053.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_krakow_0054.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_krakow_0055.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_krakow_0056.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_krakow_0057.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_krakow_0058.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_krakow_0059.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_krakow_0060.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_krakow_0061.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_krakow_0062.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_krakow_0063.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_krakow_0064.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_krakow_0065.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_krakow_0066.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_krakow_0067.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_krakow_0068.jpg", height: 527 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_krakow_0069.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_krakow_0070.jpg", height: 383 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_krakow_0071.jpg", height: 757 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_krakow_0072.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_krakow_0073.jpg", height: 382 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_krakow_0074.jpg", height: 383 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_krakow_0075.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_krakow_0076.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_krakow_0077.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_krakow_0078.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_krakow_0079.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_krakow_0080.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_krakow_0081.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_krakow_0082.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_krakow_0083.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_krakow_0084.jpg", height: 382 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_krakow_0085.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_krakow_0086.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_krakow_0087.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_krakow_0088.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_krakow_0089.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_krakow_0090.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_krakow_0091.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_krakow_0092.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_krakow_0093.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_krakow_0094.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_krakow_0095.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_krakow_0096.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_krakow_0097.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_krakow_0098.jpg", height: 382 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_krakow_0099.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_krakow_0100.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_krakow_0101.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_krakow_0102.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_krakow_0103.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_krakow_0104.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_krakow_0105.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_krakow_0106.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_krakow_0107.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_krakow_0108.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_krakow_0109.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_krakow_0110.jpg", height: 383 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_krakow_0111.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_krakow_0112.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_krakow_0113.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_krakow_0114.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_krakow_0115.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_krakow_0116.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_krakow_0117.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_krakow_0118.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_krakow_0119.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_krakow_0120.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_krakow_0121.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_krakow_0122.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/08/fotograf_na_wesele_krakow_0123.jpg", height: 762 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticImagesPath + "kasia_i_pawel_zdjecia_slubne_w_hotelu_ferro_express_krakow_start.jpg"}
                    images={images}
                    headTitle={"Zdj??cia ??lubne w Hotelu Ferro Express Krak??w"}
                    headDescription={"Zima, zima, zima bia??o i temperatura minus trzyna??cie stopni, ale tylko za oknem. Serdecznie zapraszam na zimowy ale pe??ny kolor??w ??lub Kasi i Paw??a."}
                    headKeywords={"zdj??cia ??lubne hotel ferro express krak??w,fotograf na ??lub krak??w,zdj??cia ??lubne krak??w"}
                    headUrl={"https://99foto.pl/kasia-i-pawel-zdjecia-slubne-w-hotelu-ferro-express-krakow"}
                    entryContentP1={
                        'Zima, zima, zima bia??o i temperatura minus trzyna??cie stopni, ale tylko za oknem. Dla odmiany na ??lubie Paw??a i Kasi du??o kolor??w i du??o u??miech??w w rodzinnej atmosferze. Rozpocz??li??my tradycyjnie od fryzjera wcze??nie bo o godzinie ??smej rano w Salonie Avangarda. Nast??pnie udali??my si?? na makija??. Malowanie trwa??o dobre dwie godziny i odbywa??o si?? przy d??wi??kach muzyki Dawida Podsiad??o. W mieszkaniu dziadk??w Kasi odby??o si?? b??ogos??awie??stwo, po kt??rym udali??my si?? do ??wi??tecznie przystrojonego <a href="https://parafia-azory.pl/" target="_blank" rel="nofollow">Ko??cio??a Niepokalanego Pocz??cia NMP na Azorach</a>.'
                    }
                    entryContentP2={
                        'Obowi??zkowe zdj??cie grupowe i chwil?? p????niej udali??my si?? w okolic?? Ty??ca do <a href="https://fero.krakow.pl/" target="_blank" rel="nofollow">Hotelu Ferro Express</a>.  Na sali czeka?? ju?? na nas zesp????, kt??ry u??wietni?? zabaw?? tego wieczoru. Po setkach ??ycze?? i prezent??w, zabawa trwa??a do bia??ego rana. Pi??kny dzie??, pi??kne wspomnienia i mam nadziej?? obrazuj??ce to zdj??cia ??? zapraszam serdecznie na reporta?? Kasi i Paw??a. Na koniec, pozdrowienia dla Pary M??odej, go??ci i ekipy weselnej. Blisko pi????set zdj???? z tego dnia znajdziecie w strefie klienta podaj??c has??o z mojej wizyt??wki.'
                    }
                    slug={"kasia-i-pawel-zdjecia-slubne-w-hotelu-ferro-express-krakow"}
                    title={"ZDJ??CIA ??LUBNE W HOTELU FERRO EXPRESS KRAK??W - KASIA i PAWE??"}
                    tags={"zdj??cia ??lubne hotel ferro express krak??w,fotograf na ??lub krak??w,zdj??cia ??lubne krak??w"}
                    date={"8 stycznia 2016"}
                    menuNames={"KASIA i PAWE??"}
                    menuTitle={"ZDJ??CIA ??LUBNE W HOTELU FERRO EXPRESS KRAK??W"}
                    leadNames={"JUSTYNA i DAMIA"}
                    leadTitle={"SESJA ZDJ??CIOWA ZAKRZ??WEK, SKA??KI TWARDOWSKIEGO KRAK??W"}
                    leadUrl={"/sesja-zdjeciowa-zakrzowek-skalki-twardowskiego-krakow"}
                    leadImage={process.env.staticImagesPath + "sesja_zdjeciowa_zakrzowek_skalki_twardowskiego_krakow_start.jpg"}
                />
            
        );
};

export default BlogPageComponent;
