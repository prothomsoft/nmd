import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
    
        let images = [
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0001.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0002.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0003.jpg", height: 527 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0004.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0005.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0007.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0006.jpg", height: 382 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0008.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0009.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0010.jpg", height: 762 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0011.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0012.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0013.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0014.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0015.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0016.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0018.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0019.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0020.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0021.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0025.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0022.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0023.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0024.jpg", height: 527 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0026.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0027.jpg", height: 527 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0028.jpg", height: 527 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0029.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0030.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0031.jpg", height: 806 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0032.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0033.jpg", height: 850 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0035.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0036.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0037.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0041.jpg", height: 527 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0039.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0040.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0043.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0042.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0044.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0046.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0047.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0045.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0048.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0049.jpg", height: 762 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0050.jpg", height: 527 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0051.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0052.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0053.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0056.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0054.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0055.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0057.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0058.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0059.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0060.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0061.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0062.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0063.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0064.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0065.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0066.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0067.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0068.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0069.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0070.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0071.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0072.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0075.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0074.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0073.jpg", height: 527 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0077.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0076.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0078.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0079.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0080.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0081.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0082.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0083.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0084.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0085.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0086.jpg", height: 527 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0087.jpg", height: 762 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0088.jpg", height: 510 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0089.jpg", height: 762 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0090.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0091.jpg", height: 762 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0092.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0093.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0094.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0095.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0096.jpg", height: 762 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0097.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0098.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0099.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0100.jpg", height: 527 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0101.jpg", height: 527 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0102.jpg", height: 566 },
            { imageSrc: "/static/blog/2017/05/99FOTOPL_SP_300_WEB.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0104.jpg", height: 527 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0105.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0106.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0107.jpg", height: 762 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0108.jpg", height: 527 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0109.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0110.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0111.jpg", height: 762 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0112.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/05/wesele_tarnow_0103.jpg", height: 762 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticImagesPath + "wesele-tarnow_dwor_bistuszowa_i_staropolski_klimat_slubny_start.jpg"}
                    images={images}
                    headTitle={"Dw??r Bistuszowa, sala weselna na ??lub plenerowy"}
                    headDescription={"Dw??r w miejscowo??ci Bistuszowa, klasyczny i barokowy wystr??j, kt??ry przeni??s?? go??ci weselnych w dawne czasy i stworzy?? staropolsk?? atmosfer??. Zapraszam."}
                    headKeywords={"wesele tarn??w,dw??r bistuszowa,dom weselny tarn??w,??lub plenerowy"}
                    headUrl={"https://99foto.pl/wesele-tarnow-dwor-bistuszowa-i-staropolski-klimat-slubny"}
                    entryContentP1={
                        'Ostatnio mam coraz wi??ksze szcz????cie do par, kt??rym towarzysz?? w ich najwa??niejszym dniu. Ola i Przemek to absolutnie wyj??tkowi ludzie. Spotkali??my si?? ju?? wcze??niej na sesji narzecze??skiej i ju?? wtedy wiedzia??em, ??e b??dzie fajny ??lub i z pewno??ci?? mega zdj??cia. Poszukuj??c sali weselnej w Tarnowie, Ola i Przemek szukali miejsca, kt??re dzi??ki klasycznemu i barokowemu wystrojowi pozwoli przenie???? go??ci weselnych w dawne czasy i stworzy staropolsk?? atmosfer??. Pozytywne opinie, kt??rych pe??no mo??na znale???? w internecie pozwoli??y im dokona?? w??a??ciwego wyboru <a href="https://www.dworbistuszowa.pl/" target="_blank" rel="nofollow">Dw??r Bistuszowa</a> okaza?? si?? by?? wymarzonym miejscem na ich ??lub. Siedemnastowieczny dw??r, przebudowany i odrestaurowany sto lat p????niej, kt??rego mocn?? stron?? jest park dworski, przepi??kna aleja lipowa to ??wietne miejsce na ??lub plenerowy. Reporta?? ??lubny rozpocz??li??my w??a??nie w tym tego dnia oddanym do dyspozycji Oli miejscu.'
                    }
                    entryContentP2={
                        'Wiza??ystka Ewa wykona??a profesjonalny makija??, a ja w tym czasie zd????y??em zwiedzi?? dworek i sfotografowa?? ??lubne detale. W ubieraniu sukni ??lubnej Oli pomaga??a Ola, najlepsza przyjaci????ka i niemal??e siostra bli??niaczka. Adrianowi, kamerzy??cie z <a href="https://www.kraskastudio.pl/" target="_blank" rel="nofollow">Kraska Wedding Studio</a> bardzo spodoba??a si?? ksywa drugiej Oli i dzi??ki niej uda??o mu si?? kilka razy rozbawi?? dziewczyny. Po b??ogos??awie??stwie udali??my si?? do <a href="https://sanktuariumtuchow.pl/" target="_blank" rel="nofollow">Bazyliki Nawiedzenia Naj??wi??tszej Maryi Panny w Tuchowie</a>. Pi??kny ko??ci????, kt??ry warto odwiedzi?? przemierzaj??c ma??opolsk??. Kazanie ksi??dza kilkukrotnie wywo??a??o u??miech na twarzach Pary M??odej. Sakramentalne TAK, zdj??cie grupowe przy o??tarzu plenerowym i wszyscy udali??my si?? do Dworu Bistuszowa, gdzie na m??odych czeka?? szereg atrakcji i niespodzianek. Pierwsz?? z nich by??o powitanie chlebem i sol?? w kt??rym udzia?? wzi????a przebrana w staropolski str??j w??a??cicielka Dworu. Przemek otworzy?? drzwi l??ni??cego biel?? Jaguara i przeprowadzi?? Ole szpalerem wykonanym przez zaproszonych go??ci. Altana na moment sta??a si?? domem ??ycze?? ??lubnych, przy kt??rych nie zabrak??o wzrusze?? i rado??ci. Kr??tki deszcz by?? kolejn?? atrakcj??, kt??ra nikogo nie zaskoczy??a i nada??a charakteru ca??emu wydarzeniu.  W altanie czeka?? ju?? Zesp???? Muzyczny Hit Street, kt??ry u??wietni?? zabaw?? tego wieczoru. Plenerowa zabawa trwa??a do bia??ego rana, natomiast oczepiny tego wieczoru to istne szale??stwo. W tak zwanym mi??dzy czasie zrobili??my wsp??lne zdj??cia rodzinne, kt??re s?? moim zdaniem r??wnie wa??ne jak reporta?? ??lubny. Same wspania??e wspomnienia i mam nadziej?? odzwierciedlaj??ce to fotografie poni??ej. Mi??ego ogl??dania, a po wi??cej zdj???? zapraszam do strefy klienta z has??em z mojej wizyt??wki.'
                    }
                    slug={"wesele-tarnow-dwor-bistuszowa-i-staropolski-klimat-slubny"}
                    title={"WESELE TARN??W, DW??R BISTUSZOWA i STAROPOLSKI KLIMAT ??LUBNY - OLA i PRZEMEK"}
                    tags={"wesele tarn??w,dw??r bistuszowa,dom weselny tarn??w,??lub plenerowy"}
                    date={"14 maja 2017"}
                    menuNames={"OLA i PRZEMEK"}
                    menuTitle={"WESELE TARN??W, DW??R BISTUSZOWA i STAROPOLSKI KLIMAT ??LUBNY"}
                    leadNames={"EWELINA i KAMIL"}
                    leadTitle={"HOTEL QUBUS KRAK??W SESJA ZDJ??CIOWA"}
                    leadUrl={"/hotel-qubus-krakow-sesja-zdjeciowa"}
                    leadImage={process.env.staticImagesPath + "hotel_qubus_krakow_sesja_zdjeciowa_start.jpg"}
                />
            
        );
};

export default BlogPageComponent;
