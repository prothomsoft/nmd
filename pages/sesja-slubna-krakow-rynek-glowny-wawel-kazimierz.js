import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
    
        let images = [
            { imageSrc: "/static/blog/2018/04/sesja_slubna_krakow_0014.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/sesja_slubna_krakow_0002.jpg", height: 851 },
            { imageSrc: "/static/blog/2018/04/sesja_slubna_krakow_0020.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/sesja_slubna_krakow_0003.jpg", height: 850 },
            { imageSrc: "/static/blog/2018/04/sesja_slubna_krakow_0004.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/sesja_slubna_krakow_0005.jpg", height: 762 },
            { imageSrc: "/static/blog/2018/04/sesja_slubna_krakow_0006.jpg", height: 850 },
            { imageSrc: "/static/blog/2018/04/sesja_slubna_krakow_0023.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/sesja_slubna_krakow_0007.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/04/sesja_slubna_krakow_0024.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/sesja_slubna_krakow_0008.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/sesja_slubna_krakow_0016.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/04/sesja_slubna_krakow_0013.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/sesja_slubna_krakow_0009.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/sesja_slubna_krakow_0010.jpg", height: 850 },
            { imageSrc: "/static/blog/2018/04/sesja_slubna_krakow_0011.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/sesja_slubna_krakow_0012.jpg", height: 850 },
            { imageSrc: "/static/blog/2018/04/sesja_slubna_krakow_0015.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/sesja_slubna_krakow_0017.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/04/sesja_slubna_krakow_0018.jpg", height: 850 },
            { imageSrc: "/static/blog/2018/04/sesja_slubna_krakow_0019.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/sesja_slubna_krakow_0022.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/04/sesja_slubna_krakow_0025.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/04/sesja_slubna_krakow_0021.jpg", height: 763 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticImagesPath + "sesja-slubna-krakow-rynek-glowny-wawel-kazimierz-start.jpg"}
                    images={images}
                    headTitle={"Sesja ??lubna Krak??w, Rynek G????wny, Wawel, Kazimierz"}
                    headDescription={
                        "Pi??kny Krak??w, pi??kna Katrina i dla r??wnowagi Chan i ja. Tak?? kompozycje fifty/fifty mo??ecie zobaczy?? dzisiaj na moim blogu. Serdecznie zapraszam na sesje plenerowe i sesje ??lubne w Krakowie. Kazimierz i Rynek G????wny sprawdzaj?? si?? ??wietnie."
                    }
                    headKeywords={"Sesja ??lubna Krak??w, zdj??cia ??lubne na Kazimierzu, plener na Rynku w Krakowie"}
                    headUrl={"https://99foto.pl/sesja-slubna-krakow-rynek-glowny-wawel-kazimierz"}
                    entryContentP1={
                        "Chan i Katrina postanowili przeby?? szmat drogi by zrealizowa?? swoje marzenie, sesj?? zdj??ciow?? w jednym z najpi??kniejszych miast europejskich jakim jest Krak??w. Wcze??niej odwiedzili Austri??, a w Krakowie podczas czterodniowego pobytu mieli okazj?? zwiedzi?? Kopalnie Soli w Wieliczce i Ob??z Koncentracyjny Auschwitz-Birkenau w O??wi??cimiu. Krakowski Rynek, Zamek Kr??lewski na Wawelu i zakamarki Kazimierza mieli okazj?? odkrywa?? ze mn?? na zaplanowanej ju?? rok wcze??niej sesji ??lubnej w Krakowie."
                    }
                    entryContentP2={
                        "Tym razem na moim blogu miejsca znajome, starannie wyselekcjonowane, kt??re zbiera??em latami biegaj??c z parami m??odymi po naszym pi??knym mie??cie oraz dla nas bardzo egzotyczna para, pi??kna Katrina i Chan. ??wietnie trafili??my z pogod?? i my??l??, ??e dzi??ki tej mini wyprawie, przyszli Pa??stwo Chi Hang b??d?? mieli tylko dobre wspomnienia zwi??zane z Krakowem. Kilka zda?? wst??pu napisane, wi??c teraz serdecznie zapraszam do ogl??dania zdj????. Warto spe??nia?? marzenia !!!"
                    }
                    slug={"sesja-slubna-krakow-rynek-glowny-wawel-kazimierz"}
                    title={"SESJA ??LUBNA KRAK??W, RYNEK G????WNY, WAWEL, KAZIMIERZ - CHAN i KATRINA"}
                    tags={"Sesja ??lubna Krak??w, zdj??cia ??lubne na Kazimierzu, plener na Rynku w Krakowie"}
                    date={"4 kwietnia 2018"}
                    menuNames={"CHAN i KATRINA"}
                    menuTitle={"SESJA ??LUBNA KRAK??W, RYNEK G????WNY, WAWEL, KAZIMIERZ"}
                    leadNames={"EWELINA i KAMIL"}
                    leadTitle={"HOTEL TADEUSZ USZEW i G??RALSKA SALA WESELNA"}
                    leadUrl={"/hotel-tadeusz-uszew-i-goralska-sala-weselna"}
                    leadImage={process.env.staticImagesPath + "hotel_tadeusz_uszew_i_goralska_sala_weselna_start.jpg"}
                />
            
        );
};

export default BlogPageComponent;
