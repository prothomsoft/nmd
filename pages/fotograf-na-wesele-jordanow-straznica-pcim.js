import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
 
        let images = [
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0135.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0001.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0002.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0003.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0004.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0006.jpg", height: 382 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0005.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0007.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0008.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0009.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0010.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0011.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0012.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0013.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0014.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0015.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0017.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0016.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0018.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0020.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0021.jpg", height: 762 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0022.jpg", height: 526 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0023.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0024.jpg", height: 527 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0025.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0026.jpg", height: 806 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0027.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0028.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0029.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0035.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0030.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0031.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0032.jpg", height: 527 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0034.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0036.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0037.jpg", height: 805 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0038.jpg", height: 382 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0033.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0039.jpg", height: 527 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0041.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0040.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0043.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0042.jpg", height: 527 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0044.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0045.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0046.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0049.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0047.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0048.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0050.jpg", height: 527 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0051.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0054.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0052.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0053.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0056.jpg", height: 1007 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0057.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0058.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0059.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0060.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0061.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0062.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0063.jpg", height: 527 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0065.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0064.jpg", height: 527 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0066.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0067.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0068.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0069.jpg", height: 527 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0070.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0071.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0072.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0074.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0077.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0075.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0078.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0076.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0079.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0073.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0080.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0082.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0081.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0083.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0084.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0085.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0086.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0087.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0088.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0089.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0090.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0091.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0092.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0093.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0094.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0095.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0096.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0097.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0098.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0099.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0100.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0101.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0102.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0103.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0104.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0105.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0106.jpg", height: 382 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0107.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0108.jpg", height: 762 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0109.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0110.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0111.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0112.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0113.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0114.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0115.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0116.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0117.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0118.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0119.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0120.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0121.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0122.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0123.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0124.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0125.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0126.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0127.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0128.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0130.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0132.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0133.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0136.jpg", height: 850 },
            { imageSrc: "/static/blog/2017/08/99FOTOPL_SPP_002.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0138.jpg", height: 850 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0139.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0140.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0141.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0152.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0143.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0144.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0145.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0147.jpg", height: 806 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0153.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0146.jpg", height: 850 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0149.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0151.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0150.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0148.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/08/fotograf_na_wesele_naprawa_jordanow_0142.jpg", height: 763 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticImagesPath + "fotograf_na_wesele_jordanow_straznica_pcim_start.jpg"}
                    images={images}
                    headTitle={"Fotograf na wesele Jordan??w, Stra??nica Pcim"}
                    headDescription={"Serdecznie zapraszam do Jordanowa, Stra??nicy w Pcimiu i Ko??cio??a w Naprawie gdzie sakramentalne TAK powiedzieli sobie Kasia i Grzesiek. Mi??ego ogl??dania."}
                    headKeywords={"fotograf na wesele jordan??w,stra??nica pcim"}
                    headUrl={"https://99foto.pl/fotograf-na-wesele-jordanow-straznica-pcim"}
                    entryContentP1={
                        "Sobota w d??ugi sierpniowy weekend rozpocz????a si?? wcze??nie, bo o godzinie ??smej rano. Jad??c Zakopiank?? do Jordanowa na makija?? Kasi mia??em okazje podziwiac spowodowane zmienno??ci?? aury wspania??e niemal??e g??rskie widoki. Trudno by??o zatrzyma?? si?? w Bystrej Podhala??skiej, bo a?? chcia??oby si?? pop??dzi?? dalej. Ale w??a??nie w Jordanowie Kasia rozpocz????a swoje przygotowania do ??lubu. Fajny gabinet kosmetyczny i chwil?? p????niej jeszcze nie do ko??ca zamieszka??y ale gustownie urz??dzony salon fryzjerski w Rabce Zdr??j."
                    }
                    entryContentP2={
                        'Kiedy fryzura i makija?? by??y gotowe siostra Kasi Ewa pomog??a ubra?? sukni?? ??lubn??, buty i bi??uteri?? (wiem, ??e ju?? za rok Kasia si?? siostrze odwdzi??czy). Nast??pnie razem z kamerzyst?? Kub??, jak si?? p????niej okaza??o, Andrzejem Wajd?? ca??ego ??lubu, udali??my si?? do domu rodzinnego Grze??ka. Pierwsze i drugie b??ogos??awie??stwo w ??wietnej rodzinnej atmosferze i chwil?? p????niej nerwowe oczekiwanie na walcz??cego z korkami na Zakopiance ksi??dza w <a href="https://www.naprawa.parafia.info.pl/" target="blank">Ko??ciele Parafialnym ??w. Siostry Faustyny Kowalskiej w Naprawie</a>. Kwadrans studencki i rozpocz??li??my ceremoni?? podczas kt??rej m??odzi powiedzieli sobie sakramentalne TAK. Po zdj??ciu grupowym udali??my si?? na <a href="https://www.osp.pcim.pl/" target="_blank" rel="nofollow">sal?? weseln?? w Stra??nicy OSP w Pcimiu</a>. Rodzice przywitali m??odych chlebem i sol??, go??cie z??o??yli gor??ce ??yczenia i z podziwem ogl??dali pierwszy taniec Kasi i Grze??ka. Pe??ny parkiet to zas??uga <a href="https://www.wiarusy.info/" target="_blank" rel="nofollow">Zesp????u Muzycznego, Kapeli Wiarusy z Mszany Dolnej</a>. ??wietny, sp??dzony w mi??ym towarzystwie dzie??. Ciesz?? si?? bardzo, ??e mog??em by?? tam z Wami w tych najwa??niejszych chwilach Waszego ??ycia. Zapraszam do ogl??dania, a po wi??cej zdj???? do strefy klienta z has??em z mojej wizyt??wki.'
                    }
                    slug={"fotograf-na-wesele-jordanow-straznica-pcim"}
                    title={"FOTOGRAF NA WESELE JORDAN??W, STRA??NICA PCIM - KASIA i GRZEGORZ"}
                    tags={"fotograf na wesele jordan??w,stra??nica pcim"}
                    date={"18 sierpnia 2017"}
                    menuNames={"KASIA i GRZEGORZ"}
                    menuTitle={"FOTOGRAF NA WESELE JORDAN??W, STRA??NICA PCIM"}
                    leadNames={"JULIA i PIOTR"}
                    leadTitle={"SESJA ZDJ??CIOWA PARK W MOGILANACH, ZAKRZ??WEK i KAZIMIERZ"}
                    leadUrl={"/sesja-zdjeciowa-park-w-mogilanach-zakrzowek-i-kazimierz"}
                    leadImage={process.env.staticImagesPath + "sesja_zdjeciowa_park_w_mogilanach_zakrzowek_i_kazimierz_start.jpg"}
                />
            
        );
};

export default BlogPageComponent;
