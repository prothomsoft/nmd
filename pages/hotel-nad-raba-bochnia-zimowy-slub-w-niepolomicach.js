import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
   
        let images = [
            { imageSrc: "/static/blog/2019/01/restauracja_nad_raba_brzesko_0009.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/01/restauracja_nad_raba_brzesko_0010.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/01/restauracja_nad_raba_brzesko_0002.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/01/restauracja_nad_raba_brzesko_0004.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/01/restauracja_nad_raba_brzesko_0003.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/01/restauracja_nad_raba_brzesko_0011.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/01/restauracja_nad_raba_brzesko_0008.jpg", height: 852 },
            { imageSrc: "/static/blog/2019/01/restauracja_nad_raba_brzesko_0012.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/02/restauracja_nad_raba_brzesko_0013.jpg", height: 566 },
            { imageSrc: "/static/blog/2019/02/restauracja_nad_raba_brzesko_0015.jpg", height: 383 },
            { imageSrc: "/static/blog/2019/02/restauracja_nad_raba_brzesko_0014.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/02/restauracja_nad_raba_brzesko_0016.jpg", height: 806 },
            { imageSrc: "/static/blog/2019/02/restauracja_nad_raba_brzesko_0017.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/02/restauracja_nad_raba_brzesko_0018.jpg", height: 805 },
            { imageSrc: "/static/blog/2019/02/restauracja_nad_raba_brzesko_0019.jpg", height: 383 },
            { imageSrc: "/static/blog/2019/02/restauracja_nad_raba_brzesko_0020.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/02/restauracja_nad_raba_brzesko_0021.jpg", height: 805 },
            { imageSrc: "/static/blog/2019/02/restauracja_nad_raba_brzesko_0022.jpg", height: 850 },
            { imageSrc: "/static/blog/2019/02/restauracja_nad_raba_brzesko_0023.jpg", height: 806 },
            { imageSrc: "/static/blog/2019/02/restauracja_nad_raba_brzesko_0024.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/02/restauracja_nad_raba_brzesko_0025.jpg", height: 527 },
            { imageSrc: "/static/blog/2019/02/restauracja_nad_raba_brzesko_0026.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/02/restauracja_nad_raba_brzesko_0027.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/02/restauracja_nad_raba_brzesko_0028.jpg", height: 527 },
            { imageSrc: "/static/blog/2019/02/restauracja_nad_raba_brzesko_0029.jpg", height: 566 },
            { imageSrc: "/static/blog/2019/02/restauracja_nad_raba_brzesko_0030.jpg", height: 383 },
            { imageSrc: "/static/blog/2019/02/restauracja_nad_raba_brzesko_0031.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/02/restauracja_nad_raba_brzesko_0032.jpg", height: 383 },
            { imageSrc: "/static/blog/2019/02/restauracja_nad_raba_brzesko_0033.jpg", height: 383 },
            { imageSrc: "/static/blog/2019/02/restauracja_nad_raba_brzesko_0034.jpg", height: 383 },
            { imageSrc: "/static/blog/2019/02/restauracja_nad_raba_brzesko_0035.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/02/restauracja_nad_raba_brzesko_0036.jpg", height: 526 },
            { imageSrc: "/static/blog/2019/02/restauracja_nad_raba_brzesko_0037.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/02/restauracja_nad_raba_brzesko_0039.jpg", height: 527 },
            { imageSrc: "/static/blog/2019/02/restauracja_nad_raba_brzesko_0038.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/02/restauracja_nad_raba_brzesko_0040.jpg", height: 527 },
            { imageSrc: "/static/blog/2019/02/restauracja_nad_raba_brzesko_0041.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/02/restauracja_nad_raba_brzesko_0042.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/02/restauracja_nad_raba_brzesko_0045.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/02/restauracja_nad_raba_brzesko_0044.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/02/restauracja_nad_raba_brzesko_0046.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/02/restauracja_nad_raba_brzesko_0047.jpg", height: 383 },
            { imageSrc: "/static/blog/2019/02/restauracja_nad_raba_brzesko_0048.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/02/restauracja_nad_raba_brzesko_0049.jpg", height: 851 },
            { imageSrc: "/static/blog/2019/02/restauracja_nad_raba_brzesko_0050.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/02/restauracja_nad_raba_brzesko_0051.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/02/restauracja_nad_raba_brzesko_0052.jpg", height: 383 },
            { imageSrc: "/static/blog/2019/02/restauracja_nad_raba_brzesko_0053.jpg", height: 851 },
            { imageSrc: "/static/blog/2019/02/restauracja_nad_raba_brzesko_0054.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/02/restauracja_nad_raba_brzesko_0055.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/02/restauracja_nad_raba_brzesko_0056.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/02/restauracja_nad_raba_brzesko_0057.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/02/restauracja_nad_raba_brzesko_0058.jpg", height: 527 },
            { imageSrc: "/static/blog/2019/02/restauracja_nad_raba_brzesko_0059.jpg", height: 566 },
            { imageSrc: "/static/blog/2019/02/restauracja_nad_raba_brzesko_0060.jpg", height: 383 },
            { imageSrc: "/static/blog/2019/02/restauracja_nad_raba_brzesko_0061.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/02/restauracja_nad_raba_brzesko_0062.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/02/restauracja_nad_raba_brzesko_0063.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/02/restauracja_nad_raba_brzesko_0064.jpg", height: 383 },
            { imageSrc: "/static/blog/2019/02/restauracja_nad_raba_brzesko_0065.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/02/restauracja_nad_raba_brzesko_0066.jpg", height: 383 },
            { imageSrc: "/static/blog/2019/02/restauracja_nad_raba_brzesko_0067.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/02/restauracja_nad_raba_brzesko_0043.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/02/restauracja_nad_raba_brzesko_0068.jpg", height: 383 },
            { imageSrc: "/static/blog/2019/02/restauracja_nad_raba_brzesko_0069.jpg", height: 1054 },
            { imageSrc: "/static/blog/2019/02/restauracja_nad_raba_brzesko_0070.jpg", height: 383 },
            { imageSrc: "/static/blog/2019/02/restauracja_nad_raba_brzesko_0071.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/02/restauracja_nad_raba_brzesko_0073.jpg", height: 383 },
            { imageSrc: "/static/blog/2019/02/restauracja_nad_raba_brzesko_0072.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/02/restauracja_nad_raba_brzesko_0074.jpg", height: 383 },
            { imageSrc: "/static/blog/2019/02/restauracja_nad_raba_brzesko_0075.jpg", height: 566 },
            { imageSrc: "/static/blog/2019/02/restauracja_nad_raba_brzesko_0076.jpg", height: 527 },
            { imageSrc: "/static/blog/2019/02/restauracja_nad_raba_brzesko_0077.jpg", height: 526 },
            { imageSrc: "/static/blog/2019/02/restauracja_nad_raba_brzesko_0078.jpg", height: 527 },
            { imageSrc: "/static/blog/2019/02/restauracja_nad_raba_brzesko_0079.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/02/restauracja_nad_raba_brzesko_0080.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/02/restauracja_nad_raba_brzesko_0081.jpg", height: 566 },
            { imageSrc: "/static/blog/2019/02/restauracja_nad_raba_brzesko_0082.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/02/restauracja_nad_raba_brzesko_0083.jpg", height: 383 },
            { imageSrc: "/static/blog/2019/02/restauracja_nad_raba_brzesko_0084.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/02/restauracja_nad_raba_brzesko_0085.jpg", height: 851 },
            { imageSrc: "/static/blog/2019/02/restauracja_nad_raba_brzesko_0086.jpg", height: 527 },
            { imageSrc: "/static/blog/2019/02/restauracja_nad_raba_brzesko_0087.jpg", height: 383 },
            { imageSrc: "/static/blog/2019/02/restauracja_nad_raba_brzesko_0088.jpg", height: 527 },
            { imageSrc: "/static/blog/2019/02/restauracja_nad_raba_brzesko_0089.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/02/restauracja_nad_raba_brzesko_0090.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/02/restauracja_nad_raba_brzesko_0091.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/02/restauracja_nad_raba_brzesko_0092.jpg", height: 527 },
            { imageSrc: "/static/blog/2019/02/restauracja_nad_raba_brzesko_0094.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/02/restauracja_nad_raba_brzesko_0093.jpg", height: 527 },
            { imageSrc: "/static/blog/2019/02/restauracja_nad_raba_brzesko_0095.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/02/restauracja_nad_raba_brzesko_0096.jpg", height: 383 },
            { imageSrc: "/static/blog/2019/02/restauracja_nad_raba_brzesko_0097.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/02/restauracja_nad_raba_brzesko_0107.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/02/restauracja_nad_raba_brzesko_0098.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/02/restauracja_nad_raba_brzesko_0099.jpg", height: 383 },
            { imageSrc: "/static/blog/2019/02/restauracja_nad_raba_brzesko_0100.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/02/restauracja_nad_raba_brzesko_0101.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/02/restauracja_nad_raba_brzesko_0102.jpg", height: 383 },
            { imageSrc: "/static/blog/2019/02/restauracja_nad_raba_brzesko_0104.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/02/restauracja_nad_raba_brzesko_0103.jpg", height: 383 },
            { imageSrc: "/static/blog/2019/02/restauracja_nad_raba_brzesko_0105.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/02/restauracja_nad_raba_brzesko_0108.jpg", height: 806 },
            { imageSrc: "/static/blog/2019/02/restauracja_nad_raba_brzesko_0106.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/02/restauracja_nad_raba_brzesko_0114.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/02/restauracja_nad_raba_brzesko_0109.jpg", height: 382 },
            { imageSrc: "/static/blog/2019/02/restauracja_nad_raba_brzesko_0111.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/02/restauracja_nad_raba_brzesko_0112.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/02/restauracja_nad_raba_brzesko_0113.jpg", height: 382 },
            { imageSrc: "/static/blog/2019/02/restauracja_nad_raba_brzesko_0110.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/02/restauracja_nad_raba_brzesko_0115.jpg", height: 763 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticImagesPath + "hotel_nad_raba_bochnia.jpg"}
                    images={images}
                    headTitle={"Hotel nad Rab?? Bochnia, Zimowy ??lub w Niepo??omicach"}
                    headDescription={
                        "Hotel nad Rab?? Bochnia, Zimowy ??lub w Niepo??omicach. Pi??kne kwiaty w ??rodku zimy i mega weso??a grupa przyjaci???? na ??lubie Adrianny i Arkadiusza. Zapraszam do ogl??dania."
                    }
                    headKeywords={"Hotel nad Rab?? Bochnia, Gospoda nad Rab?? Bochnia wesela, zimowy ??lub w Niepo??omicach"}
                    headUrl={"https://99foto.pl/hotel-nad-raba-bochnia-zimowy-slub-w-niepolomicach"}
                    entryContentP1={
                        'Kilka centymetr??w ??niegu w Krakowie pojawia si?? wtedy, gdy w Zakopanem jest go centymetr??w kilkadziesi??t. Trudno wi??c liczy?? na ??nie??nobia??e pejza??e zimowe, jednak przy odrobinie szcz????cia mo??na zam??wi?? troch?? ??niegu, tak by zacz???? pada?? godzin?? przed i godzin?? po ceremonii za??lubin. Takie zam??wienie zosta??o zrealizowane dla Adrianny i Arkadiusza, kt??rych ??lub mia??em przyjemno???? fotografowa?? w Niepo??omicach. Przygotowania rozpocz??li??my w <a href="https://www.facebook.com/MakijazowySwiatJoannaPiotrowska" target="_blank" rel="nofollow">Studio Makija??u Joanny Piotrowskiej</a>. Pierwsze trzaski migawki i pierwsze zamro??one chwile. Studio Asi i ilo???? sztucznie wytworzonego ??wiat??a z ring??w, softbox??w, ??cianka z logo, ??ciany pe??ne certyfikat??w z uko??czonych szkole?? wiza??u wskazywa??y na to, ??e makija?? b??dzie wykonany mega profesjonalnie i rzeczywi??cie tak by??o. Nast??pnie udali??my si?? do domu Ady gdzie czeka??y ju?? ubrane w przepi??kne czerwone suknie Monika i Magda oraz zawsze u??miechni??ta mama Adrianny. Kwiaty nie mia??y nic wsp??lnego z zimow?? aur??. Ada z pomoc?? druhen ubra??a sukni?? ??lubn??, bi??uteri?? i z lampk?? szampana w r??ce i u??miechem (po mamusi) czeka??a na przybycie Arkadiusza.'
                    }
                    entryContentP2={
                        'Tymczasem w Zabierzowie Boche??skim odbywa??y si?? przygotowania Pana M??odego. Arkowi dzielnie asystowali Przemek i Sancho Pancho, kt??rzy mierzyli si?? ze spinkami od mankiet??w, zapi??ciami muszki i na koniec z pi????dziesi??cioma gramami dobrze zmro??onej substancji. By??o weso??o i impreza zapowiada??a si?? grubo. Po b??ogos??awie??stwie rodzic??w udali??my si?? do <a href="http://www.parafiajazy.pl/" target="_blank" rel="nofollow">Ko??ci????a Matki Bo??ej R????a??cowej w Niepo??omicach</a>. Ksi??dz nie szcz??dzi?? sobie ??art??w i dba?? o lu??n?? atmosfer?? w Zakrystii. Tato wprowadzi?? Ad?? do o??tarza i ceremonia za??lubin wystartowa??a. Ciekawym elementem by??o odczytanie kr??tkiej historii znajomo??ci Ady i Arka, kt??ra wywo??a??a prawdziwe emocje na twarzach nowo??e??c??w i zaproszonych go??ci. ??nieg nie przeszkodzi?? nam w wykonaniu zdj??cia grupowego pod Ko??cio??em. Chwil?? p????niej wszyscy zaproszeni go??cie dotarli do Sali Weselnej <a href="http://hotelnadraba.pl/" target="_blank" rel="nofollow">Hotel i Gospoda nad Rab??</a> ustawiaj??c si?? w d??ugiej kolejce do gor??cych ??ycze??. Nast??pnie m??odzi zaserwowali pierwszy taniec i d??ug?? list?? weselnych atrakcji. Go??ci na parkiecie do ta??ca animowa?? <a href="http://silvermoon.com.pl/" target="_blank" rel="nofollow">Zesp???? Muzyczny SilverMoon</a>. U??miechy na twarzach najm??odszych zapewnia?? Minionek z <a href="https://www.facebook.com/Akademia-Animacji-Kreatywnych-2057966684489263" target="_blank" rel="nofollow">Akademii Animacji Kreatywnych</a>, a ka??d?? sekund?? tego magicznego popo??udnia i wieczoru uwiecznia?? Krzysiek z <a href="http://www.ringoofilm.pl" target="_blank" rel="nofollow">Ringoo Film</a>. ??wietny zimowy ??lub, du??o pi??knych niekoniecznie zimowych detali, roze??miana Para M??oda i pe??ni luzu Druhny i Dru??bowie. Super, ??e mog??em by?? z Wami tego dnia. Dzi??kuj?? za zaufanie i zapraszam na zdj??cia. Wi??cej zdj???? w strefie klienta po wpisaniu has??a z wizyt??wki. Mi??ego ogl??dania.'
                    }
                    slug={"hotel-nad-raba-bochnia-zimowy-slub-w-niepolomicach"}
                    title={"HOTEL NAD RAB?? BOCHNIA, ZIMOWY ??LUB W NIEPO??OMICACH - ADA i AREK"}
                    tags={"Hotel nad Rab?? Bochnia, Gospoda nad Rab?? Bochnia wesela, zimowy ??lub w Niepo??omicach"}
                    date={"1 lutego 2018"}
                    menuNames={"ADRIANNA i ARKADIUSZ"}
                    menuTitle={"HOTEL NAD RAB?? BOCHNIA, ZIMOWY ??LUB W NIEPO??OMICACH"}
                    leadNames={"NATALIA i ??UKASZ"}
                    leadTitle={"POMYS?? NA SESJ?? ZIMOW?? W KRAKOWIE - DW??R JANA MATEJKI"}
                    leadUrl={"/pomysl-na-sesje-zimowa-w-krakowie-dwor-jana-matejki"}
                    leadImage={process.env.staticImagesPath + "pomysl_na_sesje_slubna_zimowa_w_krakowie.jpg"}
                />
            
        );
};

export default BlogPageComponent;
