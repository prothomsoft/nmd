import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
   
        let images = [
            { imageSrc: "/static/blog/2020/06/sesja_plenerowa_pieniny_0001.jpg", height: 762 },

            { imageSrc: "/static/blog/2020/06/sesja_plenerowa_pieniny_0002.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/06/sesja_plenerowa_pieniny_0016.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/06/sesja_plenerowa_pieniny_0022.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/06/sesja_plenerowa_pieniny_0004.jpg", height: 567 },
            { imageSrc: "/static/blog/2020/06/sesja_plenerowa_pieniny_0003.jpg", height: 762 },
            { imageSrc: "/static/blog/2020/06/sesja_plenerowa_pieniny_0026.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/06/sesja_plenerowa_pieniny_0006.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/06/sesja_plenerowa_pieniny_0007.jpg", height: 527 },
            { imageSrc: "/static/blog/2020/06/sesja_plenerowa_pieniny_0005.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/06/sesja_plenerowa_pieniny_0013.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/06/sesja_plenerowa_pieniny_0009.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/06/sesja_plenerowa_pieniny_0010.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/06/sesja_plenerowa_pieniny_0032.jpg", height: 762 },
            { imageSrc: "/static/blog/2020/06/sesja_plenerowa_pieniny_0012.jpg", height: 527 },
            { imageSrc: "/static/blog/2020/06/sesja_plenerowa_pieniny_0021.jpg", height: 762 },
            { imageSrc: "/static/blog/2020/06/sesja_plenerowa_pieniny_0017.jpg", height: 806 },
            { imageSrc: "/static/blog/2020/06/sesja_plenerowa_pieniny_0019.jpg", height: 762 },
            { imageSrc: "/static/blog/2020/06/sesja_plenerowa_pieniny_0024.jpg", height: 762 },
            { imageSrc: "/static/blog/2020/06/sesja_plenerowa_pieniny_0020.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/06/sesja_plenerowa_pieniny_0023.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/06/sesja_plenerowa_pieniny_0015.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/06/sesja_plenerowa_pieniny_0014.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/06/sesja_plenerowa_pieniny_0025.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/06/sesja_plenerowa_pieniny_0027.jpg", height: 762 },
            { imageSrc: "/static/blog/2020/06/sesja_plenerowa_pieniny_0028.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/06/sesja_plenerowa_pieniny_0011.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/06/sesja_plenerowa_pieniny_0008.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/06/sesja_plenerowa_pieniny_0029.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/06/sesja_plenerowa_pieniny_0018.jpg", height: 527 },
            { imageSrc: "/static/blog/2020/06/sesja_plenerowa_pieniny_0030.jpg", height: 762 },
            { imageSrc: "/static/blog/2020/06/sesja_plenerowa_pieniny_0031.jpg", height: 763 },
            { imageSrc: "/static/blog/2020/06/sesja_plenerowa_pieniny_0033.jpg", height: 762 },
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticImagesPath + "sesja_slubna_pieniny.jpg"}
                    images={images}
                    headTitle={"Plener ??lubny Pieniny, Szczawnica, Wysoki Wierch"}
                    headDescription={"Plener ??lubny Pieniny, podr???? kolejk?? linow?? na Palenic?? w Szczawnicy i dwie godziny spaceru niebieskim szlakiem. Serdecznie zapraszam na Wysoki Wierch."}
                    headKeywords={"sesja ??lubna pieniny, wysoki wierch w pieninach, fotograf na sesje ??lubn?? szczawnica"}
                    headUrl={"https://99foto.pl/sesja-slubna-pieniny-szczawnica-wysoki-wierch"}
                    entryContentP1={
                        "Zbli??a si?? d??ugi weekend czerwcowy, wi??c dla wielu z nas to doskona??a okazja do wyrwania si?? z miasta w poszukiwaniu spokoju, czystego powietrza i pi??knych widok??w. Sesja ??lubna w Pieninach to doskona??a ku temu okazja. By?? mo??e zapytacie mnie dlaczego na sesj?? ??lubn?? wybrali??my Pieniny. Miejsce to gwarantuje nam szereg pi??knych krajobraz??w, rozleg??ych pasm g??rskich w??r??d kt??rych odnajdziemy wyr????niaj??ce si?? Trzy Korony i Sokolice. W zasi??gu wzroku mamy oddalon?? panoram?? Tatr, ??wietnie zagospodarowan?? promenad?? w Szczawnicy, a w bliskiej odleg??o??ci Prze??om Bia??ki, zamki w Czorsztynie i Niedzicy oraz wiele innych ciekawych atrakcji turystycznych. Na nasz sobotni plener ??lubny w Pieninach wyruszyli??my z Krakowa o godzinie dziesi??tej rano."
                    }
                    entryContentP2={
                        "Kolej linowa Palenica w Szczawnicy pozwoli??a nam w kr??tkim czasie dosta?? si?? na Szafran??wk??. Rozpocz??li??my w??dr??wk?? niebieskim szlakiem, a w??a??ciwie to le??n?? ??cie??k??, pe??n?? pi??knych krajobraz??w, soczystej zieleni roz??wietlonej ciep??ymi promieniami s??o??ca. W oddali obserwowali??my Tatry, kt??re toczy??y burzliw?? walk?? z ??ywio??em. Po dw??ch godzinach marszu dotarli??my do celu naszej w??dr??wki, kt??rym by?? szczyt g??rski Wysoki Wierch. Widok z tego miejsca jest z pewno??ci?? wart dw??ch godzin drobnej wspinaczki. Kilka zdj???? i szybki powr??t, by wystarczy??o nam czasu do odwiedzenia innych ciekawych miejsc, kt??re mieli??my w planach. Jakie to atrakcje i miejsca zobaczcie sami ogl??daj??c kr??tk?? relacj?? z pleneru Eweliny i Jakuba w Pieninach. Mi??ego ogl??dania."
                    }
                    slug={"sesja-slubna-pieniny-szczawnica-wysoki-wierch"}
                    title={"SESJA ??LUBNA PIENINY, SZCZAWNICA, WYSOKI WIERCH - EWELINA i JAKUB"}
                    tags={"sesja ??lubna pieniny, wysoki wierch w pieninach, fotograf na sesje ??lubn?? szczawnica"}
                    date={"10 czerwca 2020"}
                    menuNames={"EWELINA i JAKUB"}
                    menuTitle={"SESJA ??LUBNA PIENINY, SZCZAWNICA, WYSOKI WIERCH"}
                    leadNames={"PATRYCJA i KRZYSZTOF"}
                    leadTitle={"PLENER ??LUBNY NA RYNKU W KRAKOWIE"}
                    leadUrl={"/plener-slubny-na-rynku-w-krakowie"}
                    leadImage={process.env.staticImagesPath + "/plener_slubny_na_rynku_w_krakowie.jpg"}
                />
            
        );
};

export default BlogPageComponent;
