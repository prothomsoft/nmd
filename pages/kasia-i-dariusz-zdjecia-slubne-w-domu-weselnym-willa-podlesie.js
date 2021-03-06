import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {

        let images = [
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0066.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0001.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0002.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0003.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0004.jpg", height: 383 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0005.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0006.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0007.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0008.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0009.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0010.jpg", height: 382 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0011.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0012.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0013.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0014.jpg", height: 382 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0015.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0016.jpg", height: 382 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0017.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0019.jpg", height: 383 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0018.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0020.jpg", height: 805 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0021.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0022.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0023.jpg", height: 382 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0024.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0025.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0026.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0027.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0028.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0029.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0030.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0031.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0032.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0033.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0034.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0035.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0036.jpg", height: 382 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0037.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0038.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0039.jpg", height: 382 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0040.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0041.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0042.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0043.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0044.jpg", height: 382 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0045.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0046.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0048.jpg", height: 851 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0047.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0049.jpg", height: 382 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0050.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0051.jpg", height: 526 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0052.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0053.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0054.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0055.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0056.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0057.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0058.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0059.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0060.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0061.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0062.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0063.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0064.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0065.jpg", height: 805 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0067.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0068.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0069.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0070.jpg", height: 383 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0071.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0072.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0073.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0074.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0075.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0076.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0077.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0078.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0079.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0080.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0081.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0082.jpg", height: 382 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0083.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0084.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0085.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0086.jpg", height: 383 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0087.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0088.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0089.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0090.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0091.jpg", height: 382 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0092.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0093.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0094.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0095.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0096.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0097.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0098.jpg", height: 382 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0099.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0100.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0101.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0102_1.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0105.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0103.jpg", height: 382 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0104.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0106.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0107.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0108.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0109.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0110.jpg", height: 382 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0112.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0114.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0115.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0116.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0117.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0118.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0119.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0113.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/04/fotograf_na_wesele_willa_podlesie_tarnow_0111.jpg", height: 762 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticImagesPath + "kasia_i_dariusz_zdjecia_slubne_w_domu_weselnym_willa_podlesie_start.jpg"}
                    images={images}
                    headTitle={"Fotograf na wesele Willa Podlesie Rzuchowa"}
                    headDescription={"Wielki dzie??, nie zabrak??o u??miech??w, wyj??tkowej magii i ??wietnej zabawy. Zobaczcie sami jak Kasia i Darek stali si?? najszcz????liwszymi lud??mi na ??wiecie..."}
                    headKeywords={"fotograf na wesele tarn??w, fotograf na wesele willa podlesie, reporta?? ??lubny krak??w"}
                    headUrl={"https://99foto.pl/kasia-i-dariusz-zdjecia-slubne-w-domu-weselnym-willa-podlesie"}
                    entryContentP1={
                        'Tym razem troch?? dalej bo nie Krak??w, a Tarn??w. W rolach g????wnych Kasia, Darek i ich ma??a c??reczka Lidia. Przygotowania zacz??li??my od makija??u w studiu tegorocznej mistrzyni ??wiata wiza??u <a href="https://www.facebook.com/klaudiaklosmakeupartist/" target="_blank" rel="nofollow">Klaudi K??os</a>. Nast??pnie, fryzura i kilka minut po godzinie dwunastej dotarli??my do domu rodzinnego Kasi. Atmosfera by??a wyj??tkowo weso??a, czyli pe??ny luz. Darek zaskoczy?? wszystkich, zjawiaj??c si?? troch?? wcze??niej. Chwil?? p????niej przybyli go??cie z Grecji, kt??rzy jak si?? okaza??o p????niej zaskoczyli wszystkich ??wietnie wykonanym greckim show. Z biegiem czasu go??ci przybywa??o.'
                    }
                    entryContentP2={
                        'Po rodzinnym b??ogos??awie??stwie udali??my si?? do <a href="https://www.tarnowiec.diecezja.tarnow.pl/index_a.html" target="_blank" rel="nofollow">Ko??cio??a pw. ??w. J??zefa Rzemie??lnika w Tarnowcu</a>, gdzie odby?? si?? ??lub. Wyj??tkowy klimat, pi??kna msza i co najwa??niejsze, u??miech na twarzach najwi??kszych szcz????ciarzy tego dnia.  Po ceremonii udali??my si?? na sal?? weseln??. Wesele odby??o si?? w Domu Weselnym <a href="https://www.facebook.com/WillaPodlesie/" target="_blank" rel="nofollow">Willa Podlesie</a> w Rzuchowej. Co tu du??o m??wi??&#8230; go??cie zdecydowanie dopisali, zabawa by??a wyj??tkowo udana. Innymi s??owy, dzia??o si??! Przy TAKIM zespole, z TAKIMI go????mi i TAKIMI M??odymi, wesele musia??o by?? GENIALNE. Dzia??o si?? naprawd?? wiele, a pakiet w przerwach parowa?? z gor??ca (no prawie). Fotografowi, a?? ??al by??o ko??czy?? prac??&#8230; Serdeczne pozdrowienia dla Waszej tr??jki, go??ci weselnych i zespo??u. Mi??ego ogl??dania.'
                    }
                    slug={"kasia-i-dariusz-zdjecia-slubne-w-domu-weselnym-willa-podlesie"}
                    title={"ZDJ??CIA ??LUBNE W DOMU WESELNYM WILLA PODLESIE - KASIA i DAREK"}
                    tags={"fotograf na wesele tarn??w, fotograf na wesele willa podlesie, reporta?? ??lubny krak??w"}
                    date={"27 kwietnia 2016"}
                    menuNames={"KASIA i DAREK"}
                    menuTitle={"ZDJ??CIA ??LUBNE W DOMU WESELNYM WILLA PODLESIE"}
                    leadNames={"KAROLINA i BARTEK"}
                    leadTitle={"SESJA ZDJ??CIOWA DW??R TOMASZOWICE, OPERA, KAZIMIERZ"}
                    leadUrl={"/sesja-zdjeciowa-dwor-tomaszowice-opera-kazimierz"}
                    leadImage={process.env.staticImagesPath + "sesja_zdjeciowa_dwor_tomaszowice_krakow_start.jpg"}
                />
            
        );
};

export default BlogPageComponent;
