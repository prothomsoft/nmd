import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
    
        let images = [
            { imageSrc: "/static/blog/2020/08/plener_slubny_w_niepolomicach_0016.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/plener_slubny_w_niepolomicach_0001.jpg", height: 852 },
            { imageSrc: "/static/blog/2020/08/plener_slubny_w_niepolomicach_0020.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/plener_slubny_w_niepolomicach_0003.jpg", height: 566 },
            { imageSrc: "/static/blog/2020/08/plener_slubny_w_niepolomicach_0004.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/plener_slubny_w_niepolomicach_0035.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/plener_slubny_w_niepolomicach_0006.jpg", height: 851 },
            { imageSrc: "/static/blog/2020/08/plener_slubny_w_niepolomicach_0007.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/plener_slubny_w_niepolomicach_0008.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/plener_slubny_w_niepolomicach_0009.jpg", height: 851 },
            { imageSrc: "/static/blog/2020/08/plener_slubny_w_niepolomicach_0010.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/plener_slubny_w_niepolomicach_0026.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/plener_slubny_w_niepolomicach_0015.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/plener_slubny_w_niepolomicach_0012.jpg", height: 850 },
            { imageSrc: "/static/blog/2020/08/plener_slubny_w_niepolomicach_0018.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/plener_slubny_w_niepolomicach_0033.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/plener_slubny_w_niepolomicach_0013.jpg", height: 762 },
            { imageSrc: "/static/blog/2020/08/plener_slubny_w_niepolomicach_0014.jpg", height: 527 },
            { imageSrc: "/static/blog/2020/08/plener_slubny_w_niepolomicach_0005.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/plener_slubny_w_niepolomicach_0017.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/plener_slubny_w_niepolomicach_0021.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/plener_slubny_w_niepolomicach_0032.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/plener_slubny_w_niepolomicach_0022.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/plener_slubny_w_niepolomicach_0025.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/plener_slubny_w_niepolomicach_0028.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/plener_slubny_w_niepolomicach_0031.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/plener_slubny_w_niepolomicach_0030.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/plener_slubny_w_niepolomicach_0029.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/plener_slubny_w_niepolomicach_0034.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/plener_slubny_w_niepolomicach_0027.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/08/plener_slubny_w_niepolomicach_0002.jpg", height: 763 },
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticImagesPath + "sesja_plenerowa_niepolomice.jpg"}
                    images={images}
                    headTitle={"Plener ??lubny Zamek Kr??lewski w Niepo??omicach, Czarny Staw - Basia i Marcin"}
                    headDescription={"123"}
                    headKeywords={"plener ??lubny niepo??omice, plener ??lubny Zamek Kr??leski w Niepo??omicach, Czarny Staw w Puszczy Niepo??omickiej"}
                    headUrl={"https://99foto.pl/plener-slubny-zamek-krolewski-w-niepolomicach-czarny-staw"}
                    entryContentP1={
                        'Sesja ??lubna w plenerze jest ??wietnym i naturalnym dope??nieniem reporta??u ??lubnego. Czy b??dzie to trzydziestominutowa kr??tka sesja w dniu ??lubu, trzygodzinny plener w jeden z wakacyjnych s??onecznych dni czy ca??odniowa wyjazdowa sesja plenerowa w g??rach zale??y tylko od Was. Ka??da para m??oda poszukuj??c dobrego fotografa ??lubnego musi znale???? odpowied?? r??wnie?? i na to pytanie. Pami??tajcie, ??e czasem nie warto szuka?? daleko, bo ??wietne miejsc??wki mamy tu?? pod naszym nosem. Szczeg??lnie, ??e Krak??w i jego okolice oferuj?? ogromn?? ilo???? ??wietnych miejsc na niezapomniany plener ??lubny. <a href="http://www.zamekkrolewski.com.pl/" target="_blank" rel="nofollow">Plener ??lubny na Zamku Kr??lewskim w Niepo??omicach</a> to ??wietna alternatywa dla pleneru na <a href="https://wawel.krakow.pl/" target="_blank" rel="nofollow">Zamku Kr??lewskim na Wawelu</a> czy pleneru na <a href="http://pieskowaskala.eu/" target="_blank"  rel="nofollow">Zamku w Pieskowej Skale</a>.'
                    }
                    entryContentP2={
                        'Arkady zamkowe to zawsze mi??kkie ??wiat??o, stonowane barwy i ciekawa architektura, pozwalaj??ce na uzyskanie ciekawych kadr??w. Dope??nieniem zamkowej sesji plenerowej mo??e by?? sesja zdj??ciowa w lesie lub nad jeziorem. Przyk??adem miejsca, kt??re z powodzeniem mo??e zast??pi?? Szczyrbskie Jezioro jest <a href="https://www.niepolomice.eu/places/poland/malopolska/niepolomice/sport-1/czarny-staw-w-puszczy-niepolomickiej/" target="_blank" rel="nofollow">Czarny Staw w Puszczy Niepo??omickiej</a> (no chyba, ??e zdj??cia nad jeziorem bez schroniska z tr??jk??tnym dachem w tle si?? nie licz??). Las to wbrew pozorom nie tylko wspania??e miejsce na grzyby i schronienie dla komar??w ale te?? zachwycaj??ca miejsc??wka na sesj?? plenerow??. Otoczenie prawdziwej natury, kolor??w zieleni i drewna potrafi wytworzy?? wyj??tkowy, naturalny klimat. Zdj??cia w lesie b??d?? stanowi?? wspania??e dope??nienie reporta??u ??lubnego z uroczysto??ci, kt??rej motywem przewodnim by?? styl boho czy styl rustykalny. W imieniu Basi, Marcina i swoim zapraszam wi??c na kr??tk?? wycieczk?? podczas kt??rej odwiedzimy <a href="http://www.zamekkrolewski.com.pl/" target="_blank" rel="nofollow">Zamek Kr??lewski w Niepo??omicach</a> i <a href="https://www.niepolomice.eu/places/poland/malopolska/niepolomice/sport-1/czarny-staw-w-puszczy-niepolomickiej/" target="_blank" rel="nofollow">Czarny Staw w Puszczy Niepo??omickiej</a>. Serdecznie zapraszam na zdj??cia i ??ycz?? mi??ego ogl??dania.'
                    }
                    slug={"plener-slubny-zamek-krolewski-w-niepolomicach-czarny-staw"}
                    title={"PLENER ??LUBNY ZAMEK KR??LEWSKI W NIEPO??OMICACH, CZARNY STAW - BASIA i MARCIN"}
                    tags={"plener ??lubny niepo??omice, plener ??lubny Zamek Kr??leski w Niepo??omicach, Czarny Staw w Puszczy Niepo??omickiej"}
                    date={"31 sierpnia 2020"}
                    menuNames={"BASIA i MARCIN"}
                    menuTitle={"PLENER ??LUBNY ZAMEK KR??LEWSKI W NIEPO??OMICACH, CZARNY STAW"}
                    leadNames={"NATALIA i KACPER"}
                    leadTitle={"WESELE EUFORIA MY??LENICE, PLENER ??LUBNY DW??R MOGILANY"}
                    leadUrl={"/wesele-euforia-myslenice-plener-slubny-dwor-mogilany"}
                    leadImage={process.env.staticImagesPath + "fotograf_slubny_wesele_mogilany_krakow.jpg"}
                />
            
        );
};

export default BlogPageComponent;
