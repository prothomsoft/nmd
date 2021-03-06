import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
    
        let images = [
            { imageSrc: "/static/blog/2018/08/slubna_sesja_palac_goetza_brzesko_okocim_0010.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/slubna_sesja_palac_goetza_brzesko_okocim_0003.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/slubna_sesja_palac_goetza_brzesko_okocim_0006.jpg", height: 850 },
            { imageSrc: "/static/blog/2018/08/slubna_sesja_palac_goetza_brzesko_okocim_0011.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/slubna_sesja_palac_goetza_brzesko_okocim_0007.jpg", height: 402 },
            { imageSrc: "/static/blog/2018/08/slubna_sesja_palac_goetza_brzesko_okocim_0004.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/slubna_sesja_palac_goetza_brzesko_okocim_0018.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/slubna_sesja_palac_goetza_brzesko_okocim_0008.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/slubna_sesja_palac_goetza_brzesko_okocim_0005.jpg", height: 850 },
            { imageSrc: "/static/blog/2018/08/slubna_sesja_palac_goetza_brzesko_okocim_0016.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/slubna_sesja_palac_goetza_brzesko_okocim_0001.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/slubna_sesja_palac_goetza_brzesko_okocim_0009.jpg", height: 851 },
            { imageSrc: "/static/blog/2018/08/slubna_sesja_palac_goetza_brzesko_okocim_0012.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/slubna_sesja_palac_goetza_brzesko_okocim_0013.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/08/slubna_sesja_palac_goetza_brzesko_okocim_0017.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/slubna_sesja_palac_goetza_brzesko_okocim_0014.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/08/slubna_sesja_palac_goetza_brzesko_okocim_0015.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/slubna_sesja_palac_goetza_brzesko_okocim_0019.jpg", height: 805 },
            { imageSrc: "/static/blog/2018/08/slubna_sesja_palac_goetza_brzesko_okocim_0020.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/slubna_sesja_palac_goetza_brzesko_okocim_0021.jpg", height: 762 },
            { imageSrc: "/static/blog/2018/08/slubna_sesja_palac_goetza_brzesko_okocim_0023.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/slubna_sesja_palac_goetza_brzesko_okocim_0022.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/08/slubna_sesja_palac_goetza_brzesko_okocim_0024.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/08/slubna_sesja_palac_goetza_brzesko_okocim_0002.jpg", height: 763 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticImagesPath + "palac_goetza_brzesko.jpg"}
                    images={images}
                    headTitle={"Pa??ac Goetza Brzesko, ??lubna sesja zdj??ciowa, Pa??ac Goetz"}
                    headDescription={"Pa??ac Goetza Brzesko, ??lubna sesja zdj??ciowa Magdaleny i ??ukasza. Sala ??lubna na wymarzone wesele pod Krakowem. Zapraszam do ogl??dania."}
                    headKeywords={"pa??ac goetz, pa??ac goetza brzesko, ??lubna sesja zdj??cia, sala ??lubna pa??ac goetz, wesele pod krakowem"}
                    headUrl={"https://99foto.pl/palac-goetza-brzesko-sluba-sesja-zdjeciowa"}
                    entryContentP1={
                        'Pa??ac Goetza w Brzesku to miejsce niezwyk??e, charakteryzuj??ce si?? wspania???? architektur??, utrzymane z dba??o??ci?? o najmniejszy detal. To nie tylko wn??trza, ale i pi??kny ogr??d. Ka??dego tygodnia w sezonie ??lubnym miejsce to zamienia si?? w ekskluzywn?? sale weseln??, budz??c zachwyt na twarzach zaproszonych go??ci. Wielu krakowskich i nie tylko fotograf??w stawia??o w tym miejscu swoje pierwsze kroki w fotografii na <a href="https://warsztaty.adamtrzcionka.pl/warsztaty-z-pleneru.html" target="_blank" rel="nofollow"> warsztatach z pleneru</a> organizowanych pod okiem mistrza Adama Trzcionki. Do zrobienia pleneru w tym miejscu namawia??em ju?? moje pary ??lubne, jednak dla wielu os??b koszty zwi??zane z trzygodzinnym pobytem w Pa??acu Goetza na sesji zdj??ciowej, r??wne niemal??e miesi??cznemu wynagrodzeniu za prac?? piel??gniarki czy nauczyciela, by??y nie do zaakceptowania.'
                    }
                    entryContentP2={
                        "Magda i ??ukasz, postanowili spe??ni?? nie tylko swoje, ale i moje marzenie i odwiedzi?? to niezwyk??e miejsce. Sesja ??lubna jest raz w ??yciu, tak powiedzia??a Magda. Zawsze powtarzam, ??e warto poniewa?? ju?? chwil?? p????niej suknia wraca do szafy lub l??duje na allegro, my wracamy do swoich codziennych obowi??zk??w zwanych proz?? ??ycia, a zdj??cia i wspomnienia prze??ytych chwil zostaj?? z nami na zawsze. Na koniec przyznam, ??e teraz ka??da otwarta zielona puszka z??ocistego napoju b??dzie przypomina?? mi o tej sesji zdj??ciowej - same mi??e wspomnienia. Zapraszam do ogl??dania."
                    }
                    slug={"palac-goetza-brzesko-sluba-sesja-zdjeciowa"}
                    title={"PA??AC GOETZA BRZESKO, ??LUBNA SESJA ZDJ??CIOWA - MAGDALENA i ??UKASZ"}
                    tags={"pa??ac goetz, pa??ac goetza brzesko, ??lubna sesja zdj??cia, sala ??lubna pa??ac goetz, wesele pod krakowem"}
                    date={"19 lipca 2017"}
                    menuNames={"MAGDALENA i ??UKASZ"}
                    menuTitle={"PA??AC GOETZA BRZESKO, ??LUBNA SESJA ZDJ??CIOWA"}
                    leadNames={"MARTA i MARCIN"}
                    leadTitle={"WESELE POD KRAKOWEM, FIRST LOOK NA DACHU WIE??OWCA"}
                    leadUrl={"/tiffany-wola-filipowska-first-look-na-dachu-wiezowca"}
                    leadImage={process.env.staticImagesPath + "restauracja_tiffany_wola_filpowska.jpg"}
                />
            
        );
};

export default BlogPageComponent;
