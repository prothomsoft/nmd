import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
    
        let images = [
            { imageSrc: "/static/blog/2017/05/babie_lato_gdow_0131.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/05/dom_weselny_babie_lato_gdow_0156.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/05/babie_lato_gdow_0002.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/05/babie_lato_gdow_0005.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/05/babie_lato_gdow_0008.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/05/babie_lato_gdow_0007.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/05/babie_lato_gdow_0009.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/05/babie_lato_gdow_0003.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/05/babie_lato_gdow_0006.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/05/babie_lato_gdow_0010.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/05/babie_lato_gdow_0012.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/05/babie_lato_gdow_0013.jpg", height: 762 },
            { imageSrc: "/static/blog/2017/05/babie_lato_gdow_0004.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/05/babie_lato_gdow_0011.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/05/babie_lato_gdow_0014.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/05/dom_weselny_babie_lato_gdow_0020.jpg", height: 527 },
            { imageSrc: "/static/blog/2017/05/dom_weselny_babie_lato_gdow_0021.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/05/dom_weselny_babie_lato_gdow_0022.jpg", height: 527 },
            { imageSrc: "/static/blog/2017/05/dom_weselny_babie_lato_gdow_0023.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/05/dom_weselny_babie_lato_gdow_0024.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/05/dom_weselny_babie_lato_gdow_0026.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/05/dom_weselny_babie_lato_gdow_0025.jpg", height: 527 },
            { imageSrc: "/static/blog/2017/05/dom_weselny_babie_lato_gdow_0027.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/05/dom_weselny_babie_lato_gdow_0030.jpg", height: 527 },
            { imageSrc: "/static/blog/2017/05/dom_weselny_babie_lato_gdow_0028.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/05/dom_weselny_babie_lato_gdow_0031.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/05/dom_weselny_babie_lato_gdow_0029.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/05/dom_weselny_babie_lato_gdow_0032.jpg", height: 527 },
            { imageSrc: "/static/blog/2017/05/dom_weselny_babie_lato_gdow_0033.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/05/dom_weselny_babie_lato_gdow_0159.jpg", height: 850 },
            { imageSrc: "/static/blog/2017/05/dom_weselny_babie_lato_gdow_0035.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/05/dom_weselny_babie_lato_gdow_0036.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/05/dom_weselny_babie_lato_gdow_0037.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/05/dom_weselny_babie_lato_gdow_0038.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/05/dom_weselny_babie_lato_gdow_0039.jpg", height: 527 },
            { imageSrc: "/static/blog/2017/05/dom_weselny_babie_lato_gdow_0040.jpg", height: 527 },
            { imageSrc: "/static/blog/2017/05/dom_weselny_babie_lato_gdow_0041.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/05/dom_weselny_babie_lato_gdow_0042.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/05/dom_weselny_babie_lato_gdow_0043.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/05/dom_weselny_babie_lato_gdow_0044.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/05/dom_weselny_babie_lato_gdow_0045.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/05/dom_weselny_babie_lato_gdow_0046.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/05/dom_weselny_babie_lato_gdow_0047.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/05/dom_weselny_babie_lato_gdow_0048.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/05/dom_weselny_babie_lato_gdow_0049.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/05/dom_weselny_babie_lato_gdow_0050.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/05/dom_weselny_babie_lato_gdow_0051.jpg", height: 762 },
            { imageSrc: "/static/blog/2017/05/dom_weselny_babie_lato_gdow_0052.jpg", height: 527 },
            { imageSrc: "/static/blog/2017/05/dom_weselny_babie_lato_gdow_0053.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/05/dom_weselny_babie_lato_gdow_0054.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/05/dom_weselny_babie_lato_gdow_0055.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/05/dom_weselny_babie_lato_gdow_0065.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/05/dom_weselny_babie_lato_gdow_0071.jpg", height: 757 },
            { imageSrc: "/static/blog/2017/05/dom_weselny_babie_lato_gdow_0056.jpg", height: 527 },
            { imageSrc: "/static/blog/2017/05/dom_weselny_babie_lato_gdow_0057.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/05/dom_weselny_babie_lato_gdow_0059.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/05/dom_weselny_babie_lato_gdow_0058.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/05/dom_weselny_babie_lato_gdow_0060.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/05/dom_weselny_babie_lato_gdow_0061.jpg", height: 805 },
            { imageSrc: "/static/blog/2017/05/dom_weselny_babie_lato_gdow_0062.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/05/dom_weselny_babie_lato_gdow_0063.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/05/dom_weselny_babie_lato_gdow_0064.jpg", height: 527 },
            { imageSrc: "/static/blog/2017/05/dom_weselny_babie_lato_gdow_0066.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/05/dom_weselny_babie_lato_gdow_0067.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/05/dom_weselny_babie_lato_gdow_0068.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/05/dom_weselny_babie_lato_gdow_0069.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/05/dom_weselny_babie_lato_gdow_0070.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/05/dom_weselny_babie_lato_gdow_0072.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/05/dom_weselny_babie_lato_gdow_0073.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/05/babie_lato_gdow_0015.jpg", height: 762 },
            { imageSrc: "/static/blog/2017/05/dom_weselny_babie_lato_gdow_0074.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/05/dom_weselny_babie_lato_gdow_0075.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/05/dom_weselny_babie_lato_gdow_0076.jpg", height: 762 },
            { imageSrc: "/static/blog/2017/05/dom_weselny_babie_lato_gdow_0079.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/05/dom_weselny_babie_lato_gdow_0077.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/05/dom_weselny_babie_lato_gdow_0078.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/05/dom_weselny_babie_lato_gdow_0080.jpg", height: 527 },
            { imageSrc: "/static/blog/2017/05/dom_weselny_babie_lato_gdow_0081.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/05/dom_weselny_babie_lato_gdow_0082.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/05/dom_weselny_babie_lato_gdow_0083.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/05/dom_weselny_babie_lato_gdow_0084.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/05/dom_weselny_babie_lato_gdow_0085.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/05/dom_weselny_babie_lato_gdow_0086.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/05/dom_weselny_babie_lato_gdow_0087.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/05/dom_weselny_babie_lato_gdow_0088.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/05/dom_weselny_babie_lato_gdow_0089.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/05/dom_weselny_babie_lato_gdow_0090.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/05/dom_weselny_babie_lato_gdow_0091.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/05/dom_weselny_babie_lato_gdow_0092.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/05/dom_weselny_babie_lato_gdow_0093.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/05/dom_weselny_babie_lato_gdow_0094.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/05/dom_weselny_babie_lato_gdow_0095.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/05/dom_weselny_babie_lato_gdow_0096.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/05/dom_weselny_babie_lato_gdow_0097.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/05/dom_weselny_babie_lato_gdow_0098.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/05/dom_weselny_babie_lato_gdow_0099.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/05/dom_weselny_babie_lato_gdow_0100.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/05/dom_weselny_babie_lato_gdow_0101.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/05/dom_weselny_babie_lato_gdow_0102.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/05/dom_weselny_babie_lato_gdow_0103.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/05/dom_weselny_babie_lato_gdow_0104.jpg", height: 762 },
            { imageSrc: "/static/blog/2017/05/dom_weselny_babie_lato_gdow_0105.jpg", height: 805 },
            { imageSrc: "/static/blog/2017/05/dom_weselny_babie_lato_gdow_0106.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/05/dom_weselny_babie_lato_gdow_0107.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/05/dom_weselny_babie_lato_gdow_0108.jpg", height: 805 },
            { imageSrc: "/static/blog/2017/05/dom_weselny_babie_lato_gdow_0109.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/05/dom_weselny_babie_lato_gdow_0110.jpg", height: 527 },
            { imageSrc: "/static/blog/2017/05/dom_weselny_babie_lato_gdow_0150.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/05/dom_weselny_babie_lato_gdow_0151.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/05/dom_weselny_babie_lato_gdow_0152.jpg", height: 527 },
            { imageSrc: "/static/blog/2017/05/dom_weselny_babie_lato_gdow_0153.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/05/dom_weselny_babie_lato_gdow_0154.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/05/dom_weselny_babie_lato_gdow_0155.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/05/babie_lato_gdow_0120.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/05/babie_lato_gdow_0121.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/05/babie_lato_gdow_0122.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/05/babie_lato_gdow_0123.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/05/babie_lato_gdow_0124.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/05/babie_lato_gdow_0125.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/05/babie_lato_gdow_0126.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/05/babie_lato_gdow_0127.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/05/babie_lato_gdow_0128.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/05/babie_lato_gdow_0129.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/05/babie_lato_gdow_0130.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/05/babie_lato_gdow_0132.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/05/babie_lato_gdow_0134.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/05/babie_lato_gdow_0135.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/05/babie_lato_gdow_0136.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/05/babie_lato_gdow_0137.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/05/babie_lato_gdow_0138.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/05/babie_lato_gdow_0140.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/05/babie_lato_gdow_0139.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/05/babie_lato_gdow_0141.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/05/babie_lato_gdow_0143.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/05/babie_lato_gdow_0142.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/05/babie_lato_gdow_0144.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/05/babie_lato_gdow_0145.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/05/babie_lato_gdow_0133.jpg", height: 763 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticImagesPath + "dom_weselny_babie_lato_gdow_reportaz_slubny_start.jpg"}
                    images={images}
                    headTitle={"Dom Weselny Babie Lato Gd??w"}
                    headDescription={"Bryan Adams i All For Love, tak?? dedykacj?? na Facebook w pi??tkowy wiecz??r Tomasz zbudowa?? klimat sobotniego ??lubu. Co by??o dalej sprawd??cie na moim blogu."}
                    headKeywords={"babie lato gd??w,fotograf piaski nowe krak??w"}
                    headUrl={"https://99foto.pl/dom-weselny-babie-lato-gdow-reportaz-slubny"}
                    entryContentP1={
                        'Bryan Adams i All For Love, tak?? dedykacj?? na Facebook w pi??tkowy wiecz??r Tomasz zbudowa?? klimat sobotniego ??lubu.  Co by??o dalej? Wymarzona pogoda, troch?? s??o??ca i orze??wiaj??ce podmuchy majowego wiatru. Tym razem reporta?? ??lubny rozpocz??li??my w Krakowie, a dok??adniej na Woli Duchackiej w <a href="https://annaptak.com.pl" target="_blank" rel="nofollow">Salonie Fryzjerskim Anny Ptak</a>. Od godziny 10 rano trwa??y tam przygotowania, podczas kt??rych panie fryzjerka i wiza??ystka pracowa??y nad perfekcyjnym makija??em i pi??knym upi??ciem w??os??w Natalii. ??wietnie u??o??ony plan dnia, pozwoli?? mi pozna?? i d??u??sz?? chwil?? porozmawia?? z rodzicami Natalii, kt??rych serdecznie pozdrawiam. Kilka minut po dwunastej do????czy??a do nas druhna Ewa, kt??ra razem z mam?? Natalii pomog??a jej ubra?? sukni?? ??lubn??, buty, podwi??zk?? i bi??uteri??. Kilka zdj???? u Tomka, kt??ry mieszka?? tu?? za rogiem, a dalej ju?? tylko emocje i ??zy wzruszenia podczas wsp??lnego b??ogos??awie??stwa rodzic??w.'
                    }
                    entryContentP2={
                        'Po b??ogos??awie??stwie wolnym krokiem, wszyscy udali??my si?? do <a href="https://parafiapiaskinowe.pl" target="_blank" rel="nofollow">Ko??cio??a Matki Bo??ej R????a??cowej w Krakowie</a>. To ju?? drugi raz (pierwszy to <a href="https://99foto.pl/gosia-i-kuba-zdjecia-slubne-w-restauracji-savana-lezkowice/" target="_blank" rel="nofollow">??lub Gosi i Kuby</a>), kiedy m??odzi w zakrystii czuli si?? niemal??e tak swobodnie jak w domu. Ceremonia za??lubin by??a celebrowana przez kilku ksie??y. Nie zabrak??o pi??knego kazania, oprawy muzycznej w wykonaniu scholi z??o??onej ze znajomych z duszpasterstwa i najwa??niejszego momentu, sakramentalnego TAK, kt??re po????czy??o m??odych na zawsze. Podczas ??ycze?? da??o si?? s??ysze?? dowcipne przemowy, kt??rych nast??pstwem by??y salwy ??miechu. Natalia i Tomek zaprosili swoich go??ci do <a href="https://babielato-gdow.pl" target="_blank" rel="nofollow">Domu Weselnego Babie Lato w Gdowie</a>. Tradycyjnie rodzice przywitali m??odych chlebem i sol??, kieliszki rozbi??y si?? g??adko i po zdj??ciu grupowym rozpocz???? si?? uroczysty obiad. Na sali weselnej go??ci przywita?? <a href="https://www.vocal.com.pl" target="_blank" rel="nofollow">Zesp???? muzyczny VOCAL z ??ywca</a>. Pierwszy taniec i bardzo mi??a cz?????? wieczoru, niespodzianka skrywana przed m??odymi do ko??ca, pokaz multimedialny i wyst??p w dopieszczonej co do szczeg????u choreografii. Na parkiecie dzia??o si?? bardzo du??o i by??o wida??, ??e go??cie weselni bawili si?? doskonale. Na pewno te?? mo??na pozazdro??ci?? Natalii i Tomkowi wspania??ych rodzic??w i bardzo oddanej grupy najbli??szych przyjaci????. Bardzo dzi??kuj?? za ten wyj??tkowy dzie??, ciep??e przyj??cie i wspania???? atmosfer??. Mi??ego ogl??dania, a po wi??cej zdj???? zapraszam go??ci weselnych do strefy klienta z has??em z mojej wizyt??wki.'
                    }
                    slug={"dom-weselny-babie-lato-gdow-reportaz-slubny"}
                    title={"DOM WESELNY BABIE LATO GD??W - REPORTA?? ??LUBNY - NATALIA i TOMASZ"}
                    tags={"babie lato gd??w,fotograf piaski nowe krak??w"}
                    date={"1 czerwca 2017"}
                    menuNames={"NATALIA i TOMASZ"}
                    menuTitle={"DOM WESELNY BABIE LATO GD??W - REPORTA?? ??LUBNY"}
                    leadNames={"OLA i PRZEMEK"}
                    leadTitle={"WESELE TARN??W, DW??R BISTUSZOWA i STAROPOLSKI KLIMAT ??LUBNY"}
                    leadUrl={"/wesele-tarnow-dwor-bistuszowa-i-staropolski-klimat-slubny"}
                    leadImage={process.env.staticImagesPath + "wesele-tarnow_dwor_bistuszowa_i_staropolski_klimat_slubny_start.jpg"}
                />
            
        );
};

export default BlogPageComponent;
