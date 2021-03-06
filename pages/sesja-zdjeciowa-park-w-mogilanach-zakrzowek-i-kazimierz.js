import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
   
        let images = [
            { imageSrc: "/static/blog/2017/08/sesja_zdjeciowa_park_w_mogilanach_0001.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/sesja_zdjeciowa_park_w_mogilanach_0011.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/sesja_zdjeciowa_park_w_mogilanach_0008.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/sesja_zdjeciowa_park_w_mogilanach_0002.jpg", height: 527 },
            { imageSrc: "/static/blog/2017/08/sesja_zdjeciowa_park_w_mogilanach_0004.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/sesja_zdjeciowa_park_w_mogilanach_0024.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/sesja_zdjeciowa_park_w_mogilanach_0005.jpg", height: 850 },
            { imageSrc: "/static/blog/2017/08/sesja_zdjeciowa_park_w_mogilanach_0006.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/sesja_zdjeciowa_park_w_mogilanach_0013.jpg", height: 850 },
            { imageSrc: "/static/blog/2017/08/sesja_zdjeciowa_park_w_mogilanach_0007.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/sesja_zdjeciowa_park_w_mogilanach_0009.jpg", height: 850 },
            { imageSrc: "/static/blog/2017/08/sesja_zdjeciowa_park_w_mogilanach_0010.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/sesja_zdjeciowa_park_w_mogilanach_0012.jpg", height: 850 },
            { imageSrc: "/static/blog/2017/08/sesja_zdjeciowa_park_w_mogilanach_0014.jpg", height: 527 },
            { imageSrc: "/static/blog/2017/08/sesja_zdjeciowa_park_w_mogilanach_0025.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/sesja_zdjeciowa_park_w_mogilanach_0015.jpg", height: 762 },
            { imageSrc: "/static/blog/2017/08/sesja_zdjeciowa_park_w_mogilanach_0016.jpg", height: 850 },
            { imageSrc: "/static/blog/2017/08/sesja_zdjeciowa_park_w_mogilanach_0017.jpg", height: 527 },
            { imageSrc: "/static/blog/2017/08/sesja_zdjeciowa_park_w_mogilanach_0018.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/sesja_zdjeciowa_park_w_mogilanach_0019.jpg", height: 850 },
            { imageSrc: "/static/blog/2017/08/sesja_zdjeciowa_park_w_mogilanach_0026.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/sesja_zdjeciowa_park_w_mogilanach_0020.jpg", height: 850 },
            { imageSrc: "/static/blog/2017/08/sesja_zdjeciowa_park_w_mogilanach_0023.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/sesja_zdjeciowa_park_w_mogilanach_0021.jpg", height: 763 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticImagesPath + "sesja_zdjeciowa_park_w_mogilanach_zakrzowek_i_kazimierz_start.jpg"}
                    images={images}
                    headTitle={"Sesja zdj??ciowa Park w Mogilanach"}
                    headDescription={"Park w Mogilanach, Zakrz??wek i Kazimierz to jedna z tras plenerowych, kt??re polecam na sesje zdj??ciowe w Krakowie. Sprawd??cie na moim blogu."}
                    headKeywords={"park w mogilanach,plener ??lubny zakrz??wek,sesja ??lubna kazimierz"}
                    headUrl={"https://99foto.pl/sesja-zdjeciowa-park-w-mogilanach-zakrzowek-i-kazimierz"}
                    entryContentP1={
                        "Krak??w to pi??kne miejsce, pe??ne niezwyk??ych miejsc i ??wietnie utrzymanej zieleni, a w po????czeniu z dobrym popo??udniowym ??wiat??em i w mi??ym towarzystwem Pary M??odej ??wietny spos??b na sp??dzanie wolnego czasu. Sesja plenerowa w Krakowie to relaks po ??lubie i okazja do zrobienia kilku zdj???? na zupe??nym luzie. Julia i Piotrek to moi s??siedzi i pomimo, ??e nie fotografowa??em ich ??lubu ch??tnie zgodzi??em si?? na zdj??ciow?? sesj?? ??lubn??. Starannie wybrali??my miejsca tak i u??o??yli??my plan."
                    }
                    entryContentP2={
                        "Sprawdzili??my r??wnie?? pogod?? dzie?? wcze??niej i o godzinie siedemnastej rozpocz??li??my fotografowanie w pierwszym miejscu, kt??rym by?? Park w Mogilanach. Jest to miejsce charakterystyczne z fajn?? panoram?? na g??ry, dwiema alejkami z drzew i dworkiem, kt??ry mam nadzieje doczeka si?? w przysz??o??ci renowacji. Nast??pnie wpadli??my na chwil?? na Zakrz??wek, ko??cz??c nasze zdj??cia w plenerze na Kazimierzu. ??wietnie sp??dzony czas w Krakowie i okolicach, kilka ciekawych zarejestrowanych opowie??ci Piotrka. Zapraszam na zdj??cia i mi??ego ogl??dania."
                    }
                    slug={"sesja-zdjeciowa-park-w-mogilanach-zakrzowek-i-kazimierz"}
                    title={"SESJA ZDJ??CIOWA PARK W MOGILANACH, ZAKRZ??WEK i KAZIMIERZ - JULIA i PIOTR"}
                    tags={"park w mogilanach,plener ??lubny zakrz??wek,sesja ??lubna kazimierz"}
                    date={"16 sierpnia 2017"}
                    menuNames={"JULIA i PIOTR"}
                    menuTitle={"SESJA ZDJ??CIOWA PARK W MOGILANACH, ZAKRZ??WEK i KAZIMIERZ"}
                    leadNames={"KINGA i JULIEN"}
                    leadTitle={"??LUB CYWILNY i WESELE W PLENERZE - WITKOWA CHATA KRAK??W"}
                    leadUrl={"/slub-cywilny-i-wesele-w-plenerze-witkowa-chata-krakow"}
                    leadImage={process.env.staticImagesPath + "slub_cywilny_i_wesele_w_plenerze_witkowa_chata_krakow_start.jpg"}
                />
            
        );
};

export default BlogPageComponent;
