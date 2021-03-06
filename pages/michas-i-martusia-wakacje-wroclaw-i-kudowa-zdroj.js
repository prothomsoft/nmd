import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
 
        let images = [
            { imageSrc: "/static/blog/2016/07/fotograf_rodzinny_krakow_0001.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/07/fotograf_rodzinny_krakow_0002.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/07/fotograf_rodzinny_krakow_0003.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/07/fotograf_rodzinny_krakow_0008.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/07/fotograf_rodzinny_krakow_0004.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/07/fotograf_rodzinny_krakow_0010.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/07/fotograf_rodzinny_krakow_0041.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/07/fotograf_rodzinny_krakow_0005.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/07/fotograf_rodzinny_krakow_0006.jpg", height: 382 },
            { imageSrc: "/static/blog/2016/07/fotograf_rodzinny_krakow_0007.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/07/fotograf_rodzinny_krakow_0044.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/07/fotograf_rodzinny_krakow_0009.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/07/fotograf_rodzinny_krakow_0037.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/07/fotograf_rodzinny_krakow_0011.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/07/fotograf_rodzinny_krakow_0040.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/07/fotograf_rodzinny_krakow_0060.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/07/fotograf_rodzinny_krakow_0014.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/07/fotograf_rodzinny_krakow_0012.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/07/fotograf_rodzinny_krakow_0013.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/07/fotograf_rodzinny_krakow_0015.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/07/fotograf_rodzinny_krakow_0068.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/07/fotograf_rodzinny_krakow_0016.jpg", height: 852 },
            { imageSrc: "/static/blog/2016/07/fotograf_rodzinny_krakow_0063.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/07/fotograf_rodzinny_krakow_0017.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/07/fotograf_rodzinny_krakow_0018.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/07/fotograf_rodzinny_krakow_0019.jpg", height: 383 },
            { imageSrc: "/static/blog/2016/07/fotograf_rodzinny_krakow_0020.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/07/fotograf_rodzinny_krakow_0022.jpg", height: 816 },
            { imageSrc: "/static/blog/2016/07/fotograf_rodzinny_krakow_0021.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/07/fotograf_rodzinny_krakow_0023.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/07/fotograf_rodzinny_krakow_0024.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/07/fotograf_rodzinny_krakow_0025.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/07/fotograf_rodzinny_krakow_0026.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/07/fotograf_rodzinny_krakow_0027.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/07/fotograf_rodzinny_krakow_0028.jpg", height: 383 },
            { imageSrc: "/static/blog/2016/07/fotograf_rodzinny_krakow_0029.jpg", height: 816 },
            { imageSrc: "/static/blog/2016/07/fotograf_rodzinny_krakow_0030.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/07/fotograf_rodzinny_krakow_0031.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/07/fotograf_rodzinny_krakow_0032.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/07/fotograf_rodzinny_krakow_0033.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/07/fotograf_rodzinny_krakow_0034.jpg", height: 382 },
            { imageSrc: "/static/blog/2016/07/fotograf_rodzinny_krakow_0035.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/07/fotograf_rodzinny_krakow_0038.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/07/fotograf_rodzinny_krakow_0036.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/07/fotograf_rodzinny_krakow_0039.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/07/fotograf_rodzinny_krakow_0042.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/07/fotograf_rodzinny_krakow_0043.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/07/fotograf_rodzinny_krakow_0045.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/07/fotograf_rodzinny_krakow_0046.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/07/fotograf_rodzinny_krakow_0047.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/07/fotograf_rodzinny_krakow_0048.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/07/fotograf_rodzinny_krakow_0049.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/07/fotograf_rodzinny_krakow_0050.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/07/fotograf_rodzinny_krakow_0052.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/07/fotograf_rodzinny_krakow_0051.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/07/fotograf_rodzinny_krakow_0053.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/07/fotograf_rodzinny_krakow_0054.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/07/fotograf_rodzinny_krakow_0055.jpg", height: 382 },
            { imageSrc: "/static/blog/2016/07/fotograf_rodzinny_krakow_0056.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/07/fotograf_rodzinny_krakow_0057.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/07/fotograf_rodzinny_krakow_0062.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/07/fotograf_rodzinny_krakow_0058.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/07/fotograf_rodzinny_krakow_0059.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/07/fotograf_rodzinny_krakow_0061.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/07/fotograf_rodzinny_krakow_0064.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/07/fotograf_rodzinny_krakow_0065.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/07/fotograf_rodzinny_krakow_0066.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/07/fotograf_rodzinny_krakow_0067.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/07/fotograf_rodzinny_krakow_0069.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/07/fotograf_rodzinny_krakow_0070.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/07/fotograf_rodzinny_krakow_0071.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/07/fotograf_rodzinny_krakow_0072.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/07/fotograf_rodzinny_krakow_0073.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/07/fotograf_rodzinny_krakow_0076.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/07/fotograf_rodzinny_krakow_0074.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/07/fotograf_rodzinny_krakow_0077.jpg", height: 763 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticImagesPath + "michas_i_martusia_wakacje_wroclaw_i_kudowa_zdroj_start.jpg"}
                    images={images}
                    headTitle={"Sesja rodzinna Krak??w"}
                    headDescription={"Afrykanarium, Kolejkowo, SkyTower i Szczeliniec Wielki. Zapraszam na kilka wakacyjnych zdj???? Michasia i Martusi z Wroc??awia i Kudowy Zdr??j. Mi??ego ogl??dania."}
                    headKeywords={"sesja rodzinna krak??w,fotograf rodzinny krak??w,fotografia rodzinna krak??w"}
                    headUrl={"https://99foto.pl/michas-i-martusia-wakacje-wroclaw-i-kudowa-zdroj"}
                    entryContentP1={
                        "Dwa tygodnie pe??nego luzu i nasze wakacje, kt??re sp??dzili??my we Wroc??awiu i Kudowie Zdr??j, czyli chwilowa przerwa od zdj???? ??lubnych i sesji plenerowych. Micha?? i Martusia mieli te dwa tygodnie wype??nione atrakcjami. W pierwszej kolejno??ci odwiedzili??my Wroc??awskie ZOO i nowo otwarte Afrykarium. ??wietne miejsce, nowoczesne i na pewno warte zobaczenia. Nast??pnie wybrali??my si?? do Parku Wodnego, fajniejszego ni?? ten w Krakowie. P????niej kolejkowo, wyjazd na 49 pi??tro w Sky Tower, fina?? Euro dla Portugali i nadszed?? czas wyjazdu do Kudowy Zdr??j."
                    }
                    entryContentP2={
                        "Do Kudowy Zdr??j w poniedzia??ek prosto na obiadek jechali??my drog?? stu zakr??t??w przez Radk??w i Kar????w. Na miejscu zwiedzili??my Park Zdrojowy, a Micha?? i Martusia wdrapali si?? dzielnie na Szczeliniec Wielki. Miejsca bardzo wakacyjne i godne polecenia je??eli kto?? chce pochodzi?? w lekkich g??rach z dzieciakami. Wszystkie zdj??cia zrobi??em jednym aparatem i tylko dwoma obiektywami, wakacyjny zestaw minimum. Korzystaj??c z ostatnich urlopowych dni wybra??em kilka zdj????. Mi??ego ogl??dania."
                    }
                    slug={"michas-i-martusia-wakacje-wroclaw-i-kudowa-zdroj"}
                    title={"WAKACJE WROC??AW i KUDOWA ZDR??J - MICHA?? i MARTUSIA"}
                    tags={"sesja rodzinna krak??w,fotograf rodzinny krak??w,fotografia rodzinna krak??w"}
                    date={"15 lipca 2016"}
                    menuNames={"MICHA?? i MARTUSIA"}
                    menuTitle={"WAKACJE WROC??AW i KUDOWA ZDR??J"}
                    leadNames={"JOANNA i GRZEGORZ"}
                    leadTitle={"WESELE NA POLU GOLFOWYM W PACZ????TOWICACH"}
                    leadUrl={"/wesele-na-polu-golfowym-w-paczoltowicach"}
                    leadImage={process.env.staticImagesPath + "wesele_na_polu_golfowym_w_paczoltowicach_start.jpg"}
                />
            
        );
};

export default BlogPageComponent;
