import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
    
        let images = [
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0001.jpg", height: 754 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0003.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0002.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0004.jpg", height: 757 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0005.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0007.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0008.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0009.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0010.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0011.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0012.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0013.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0014.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0015.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0016.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0017.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0018.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0019.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0020.jpg", height: 527 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0128.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0022.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0023.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0024.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0025.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0026.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0027.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0028.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0029.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0030.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0031.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0032.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0033.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0034.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0035.jpg", height: 382 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0036.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0037.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0038.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0039.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0040.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0041.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0042.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0043.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0044.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0045.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0046.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0047.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0048.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0049.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0050.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0051.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0052.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0053.jpg", height: 383 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0054.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0055.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0056.jpg", height: 780 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0057.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0058.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0059.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0061.jpg", height: 764 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0062.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0063.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0064.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0065.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0066.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0067.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0068.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0069.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0070.jpg", height: 383 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0071.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0072.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0073.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0074.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0075.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0076.jpg", height: 383 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0077.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0078.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0079.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0080.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0081.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0082.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0083.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0084.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0085.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0086.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0087.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0088.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0089.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0090.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0091.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0092.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0093.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0094.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0095.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0096.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0097.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0099.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0098.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0100.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0101.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0102.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0103.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0104.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0105.jpg", height: 850 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0106.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0107.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0108.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0109.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0110.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0112.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0113.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0114.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0115.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0116.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0117.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0118.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0119.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0121.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0122.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0123.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0124.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0125.jpg", height: 762 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0126.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0127.jpg", height: 763 },
            { imageSrc: "/static/blog/2015/10/fotograf_slubny_szczurowa_0120.jpg", height: 763 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticImagesPath + "renata_i_jacek_zdjecia_slubne_palac_smilowice_start.jpg"}
                    images={images}
                    headTitle={"Zdj??cia ??lubne Pa??ac ??mi??owice"}
                    headDescription={"Serdecznie zapraszam na mojego bloga do ogl??dania zdj???? ze ??lubu Renaty i Jacka. Zaprosili oni swoich go??ci do Pa??acu ??mi??owice. Mi??ego ogl??dania."}
                    headKeywords={"fotograf na ??lub szczurowa,zdj??cia ??lubne pa??ac ??mi??owice"}
                    headUrl={"https://99foto.pl/renata-i-jacek-zdjecia-slubne-palac-smilowice"}
                    entryContentP1={
                        "W drugi pa??dziernikowy weekend o godzinie 9 rano spotkali??my si?? z Renat?? w jednym z pi??ciu zak??ad??w fryzjerskich w Szczurowej. W ramach badania gruntu troch?? wcze??niej zagl??dn????em do ko??cio??a, i ju?? od rana odbywa??o si?? tam solidne sprz??tanie, po????czone jak s??dz?? z nadchodz??cymi tego dnia wydarzeniami. Uk??adanie fryzury zaj????o troch?? ponad godzink??. Nast??pnie kilka krok??w dalej odwiedzili??my studio makija??u, kwiaciarnie, po czym pojechali??my wita?? pierwszych go??ci i kontynuowa?? przygotowania do domu rodzinnego Renaty."
                    }
                    entryContentP2={
                        'Ubieranie sukni ??lubnej odby??o si?? w rodzinnej atmosferze. Po b??ogos??awie??stwie udali??my si?? do Ko??cio??a Parafialnego w Szczurowej, gdzie m??odzi powiedzieli sobie TAK. Nast??pnie wisienka na torcie czyli przyj??cie ??lubne w <a href="https://palacsmilowice.com/" target="_blank" rel="nofollow">Pa??acu ??mi??owice</a>. Kr??tki plener w pa??acowym ogrodzie, zdj??cia grupowe i pi??kny pierwszy taniec. Zabawa nie mia??a ko??ca. Go??cie zdecydowanie dopisali i skutecznie dbali o odpowiednie wype??nienie parkietu. Serdeczne pozdrowienia dla go??ci, ca??ej weselnej ekipy oraz oczywi??cie dla Renaty i Jacka. Po wi??cej zdj???? zapraszam do strefy klienta.'
                    }
                    slug={"renata-i-jacek-zdjecia-slubne-palac-smilowice"}
                    title={"ZDJ??CIA ??LUBNE PA??AC ??MI??OWICE - RENATA i JACEK"}
                    tags={"fotograf na ??lub szczurowa,zdj??cia ??lubne pa??ac ??mi??owice"}
                    date={"18 pa??dziernika 2015"}
                    menuNames={"RENATA i JACEK"}
                    menuTitle={"ZDJ??CIA ??LUBNE PA??AC ??MI??OWICE"}
                    leadNames={"KAROLINA i BARTEK"}
                    leadTitle={"SESJA ZDJ??CIOWA DW??R TOMASZOWICE, OPERA, KAZIMIERZ"}
                    leadUrl={"/sesja-zdjeciowa-dwor-tomaszowice-opera-kazimierz"}
                    leadImage={process.env.staticImagesPath + "sesja_zdjeciowa_dwor_tomaszowice_krakow_start.jpg"}
                />
            
        );
};

export default BlogPageComponent;
