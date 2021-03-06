import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
   
        let images = [
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0046.jpg", height: 778 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0001.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0002.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0009.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0003.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0004.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0005.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0006.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0007.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0008.jpg", height: 382 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0010.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0011.jpg", height: 382 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0012.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0013.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0014.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0015.jpg", height: 382 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0016.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0018.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0017.jpg", height: 382 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0019.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0020.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0021.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0022.jpg", height: 382 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0023.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0024.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0025.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0026.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0027.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0045.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0028.jpg", height: 805 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0029.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0030.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0032.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0031.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0043.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0033.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0035.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0034.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0036.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0037.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0038.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0039.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0040.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0041.jpg", height: 805 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0042.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0044.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0047.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0048.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0049.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0050.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0051.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0052.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0053.jpg", height: 382 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0054.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0055.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0056.jpg", height: 382 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0057.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0058.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0059.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0060.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0061.jpg", height: 382 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0063.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0062.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0064.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0065.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0066.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0067.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0069.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0070.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0071.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0072.jpg", height: 383 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0073.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0074.jpg", height: 383 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0075.jpg", height: 806 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0076.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0077.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0078.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0079.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0080.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0081.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0082.jpg", height: 383 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0083.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0084.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0085.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0086.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0087.jpg", height: 383 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0088.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0089.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0090.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0091.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0092.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0093.jpg", height: 382 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0094.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0095.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0096.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0097.jpg", height: 851 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0098.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0099.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0100.jpg", height: 382 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0101.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0102.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0103.jpg", height: 382 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0105.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0104.jpg", height: 382 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0106.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0108.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0109.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0110.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0111.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0112.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0113.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0114.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0115.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0116.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0117.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0118.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0119.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0120.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0121.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0123.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0122.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0124.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0126.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0125.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0127.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0128.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0129.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0130.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0131.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0132.jpg", height: 382 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0133.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0134.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0135.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0136.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0137.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0138.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0140.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0139.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0141.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0142.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0143.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0144.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0145.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0146.jpg", height: 382 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0147.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0149.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0148.jpg", height: 382 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0150.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0151.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0152.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0153.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0154.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0155.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0156.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0157.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0159.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0158.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0160.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/09/reportaz_slubny_krakow_0107.jpg", height: 762 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticImagesPath + "julita_i_pawel_reportaz_slubny_kosciol_na_skalce_krakow_start.jpg"}
                    images={images}
                    headTitle={"Reporta?? ??lubny Ko??ci???? na Ska??ce Krak??w"}
                    headDescription={"W imieniu Julity i Paw??a serdecznie zapraszam na reporta?? ??lubny do pi??knej Bazyliki ??w. Micha??a Archanio??a na Ska??ce. Ogrom emocji, rado??ci, ??zy wzruszenia."}
                    headKeywords={"reporta?? ??lubny krak??w,zdj??cia ??lubne szafran zagacie"}
                    headUrl={"https://99foto.pl/julita-i-pawel-reportaz-slubny-kosciol-na-skalce-krakow"}
                    entryContentP1={
                        'Ka??dy fotograf lubi kolekcjonowa?? za pomoc?? swoich zdje?? miejsca niezwyk??e. My??l?? te??, ??e kazdy si?? zgodzi z tym, ??e marzeniem ka??dego fotografa ??lubnego s?? ??luby, kt??re odbywaj?? si?? w najpi??kniejszych polskich ko??cio??ach. Lista tych ko??cio????w nie jest bardzo d??uga. Na pewno pierwsze trzy miejsca w Krakowie zajmuj?? <a href="https://www.mariacki.com/index.php/pl/" target="_blank" rel="nofollow">Bazylika Mariacka</a>, <a href="https://kolegiata-anna.pl/" target="_blank" rel="nofollow">Uniwersytecka Kolegiata ??w. Anny</a> i <a href="https://www.skalka.paulini.pl/" target="_blank" rel="nofollow">Bazylika ??w. Micha??a Archanio??a na Ska??ce</a>. Julita i Pawe?? wybrali ??wietne i wyb??r ten pozwoli?? mi zrobi?? fajne zdj??cia w pi??knym ko??ciele, za co bardzo im dzi??kuj??. Sobotni dzie?? rozpocz??li??my od przygotowa?? w domu Julity w G??ogoczowie. Wiza??ystka wykona??a perfekcyjny makija??, a chwil?? p????niej odby??o si?? b??ogos??awie??stwo.'
                    }
                    entryContentP2={
                        'Nast??pnie sprintem, to dobre s??owo, udali??my si?? do Krakowa i wspomnianej ju?? <a href="https://www.skalka.paulini.pl/" target="_blank" rel="nofollow">Bazyliki ??w. Micha??a Archanio??a na Ska??ce</a>. Po pi??knym kazaniu Julita i Pawe?? powiedzieli sobie tak. Pierwszy raz ksi??dz zach??ca?? mnie do wej??cia na prezbiterium podczas przysi??gi ma????e??skiej, ??wietna sprawa. Zdj??cie grupowe, ??yczenia i chwil?? p????niej przenie??li??my si?? do <a href="https://www.szafran.com.pl" target="_blank" rel="nofollow">Sali Bankietowej Szafran w Zagaciu</a>. M??odych chlebem i sol?? przywitali rodzice i klasycznie ju?? polecia??y kieliszki z szampana. Dalej za spraw?? DJ-??w parkiet zape??nia?? si?? bardzo szybko. Go??cie weselni ta??czyli do bia??ego rana. M??odzi przygotowali poci??g, tort, oczepiny i kilka zabaw towarzysz??cych. Zapraszam do ogl??dania historii Julity i Paw??a. Wi??cej zdj???? w strefie klienta z has??em z mojej wizyt??wki.'
                    }
                    slug={"julita-i-pawel-reportaz-slubny-kosciol-na-skalce-krakow"}
                    title={"REPORTA?? ??LUBNY KO??CI???? NA SKA??CE KRAK??W - JULITA i PAWE??"}
                    tags={"reporta?? ??lubny krak??w,zdj??cia ??lubne szafran zagacie"}
                    date={"14 wrze??nia 2016"}
                    menuNames={"JULITA i PAWE??"}
                    menuTitle={"REPORTA?? ??LUBNY KO??CI???? NA SKA??CE KRAK??W"}
                    leadNames={"MARLENA i DAWID"}
                    leadTitle={"ZDJ??CIA ??LUBNE Z G??RALSKIEGO ??LUBU W OSADZIE KAMIENICA"}
                    leadUrl={"/marlena-i-dawid-zdjecia-slubne-z-goralskiego-slubu-w-osadzie-kamienica"}
                    leadImage={process.env.staticImagesPath + "marlena_i_dawid_zdjecia_slubne_z_goralskiego_slubu_w_osadzie_kamienica_start.jpg"}
                />
            
        );
};

export default BlogPageComponent;
