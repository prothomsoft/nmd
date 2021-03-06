import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
    
        let images = [
            { imageSrc: "/static/blog/2016/07/reportaz_slubny_bolechowice_001.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/07/reportaz_slubny_bolechowice_002.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/07/reportaz_slubny_bolechowice_003.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/07/reportaz_slubny_bolechowice_004.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/07/reportaz_slubny_bolechowice_005.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/07/reportaz_slubny_bolechowice_006.jpg", height: 382 },
            { imageSrc: "/static/blog/2016/07/reportaz_slubny_bolechowice_007.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/07/reportaz_slubny_bolechowice_008.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/07/reportaz_slubny_bolechowice_009.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/07/reportaz_slubny_bolechowice_010.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/07/reportaz_slubny_bolechowice_011.jpg", height: 382 },
            { imageSrc: "/static/blog/2016/07/reportaz_slubny_bolechowice_012.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/07/reportaz_slubny_bolechowice_013.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/07/reportaz_slubny_bolechowice_014.jpg", height: 382 },
            { imageSrc: "/static/blog/2016/07/reportaz_slubny_bolechowice_015.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/07/reportaz_slubny_bolechowice_016.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/07/reportaz_slubny_bolechowice_017.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/07/reportaz_slubny_bolechowice_018.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/07/reportaz_slubny_bolechowice_019.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/07/reportaz_slubny_bolechowice_020.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/07/reportaz_slubny_bolechowice_021.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/07/reportaz_slubny_bolechowice_022.jpg", height: 383 },
            { imageSrc: "/static/blog/2016/07/reportaz_slubny_bolechowice_023.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/07/reportaz_slubny_bolechowice_024.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/07/reportaz_slubny_bolechowice_025.jpg", height: 527 },
            { imageSrc: "/static/blog/2016/07/reportaz_slubny_bolechowice_026.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/07/reportaz_slubny_bolechowice_027.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/07/reportaz_slubny_bolechowice_028.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/07/reportaz_slubny_bolechowice_029.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/07/reportaz_slubny_bolechowice_030.jpg", height: 383 },
            { imageSrc: "/static/blog/2016/07/reportaz_slubny_bolechowice_031.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/07/reportaz_slubny_bolechowice_067.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/07/reportaz_slubny_bolechowice_068.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/07/reportaz_slubny_bolechowice_069.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/07/reportaz_slubny_bolechowice_032.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/07/reportaz_slubny_bolechowice_033.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/07/reportaz_slubny_bolechowice_034.jpg", height: 382 },
            { imageSrc: "/static/blog/2016/07/reportaz_slubny_bolechowice_035.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/07/reportaz_slubny_bolechowice_036.jpg", height: 382 },
            { imageSrc: "/static/blog/2016/07/reportaz_slubny_bolechowice_037.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/07/reportaz_slubny_bolechowice_038.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/07/reportaz_slubny_bolechowice_039.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/07/reportaz_slubny_bolechowice_040.jpg", height: 383 },
            { imageSrc: "/static/blog/2016/07/reportaz_slubny_bolechowice_041.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/07/reportaz_slubny_bolechowice_042.jpg", height: 382 },
            { imageSrc: "/static/blog/2016/07/reportaz_slubny_bolechowice_043.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/07/reportaz_slubny_bolechowice_044.jpg", height: 382 },
            { imageSrc: "/static/blog/2016/07/reportaz_slubny_bolechowice_045.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/07/reportaz_slubny_bolechowice_046.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/07/reportaz_slubny_bolechowice_047.jpg", height: 382 },
            { imageSrc: "/static/blog/2016/07/reportaz_slubny_bolechowice_048.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/07/reportaz_slubny_bolechowice_049.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/07/reportaz_slubny_bolechowice_050.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/07/reportaz_slubny_bolechowice_051.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/07/reportaz_slubny_bolechowice_052.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/07/reportaz_slubny_bolechowice_053.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/07/reportaz_slubny_bolechowice_054.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/07/reportaz_slubny_bolechowice_055.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/07/reportaz_slubny_bolechowice_056.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/07/reportaz_slubny_bolechowice_057.jpg", height: 383 },
            { imageSrc: "/static/blog/2016/07/reportaz_slubny_bolechowice_058.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/07/reportaz_slubny_bolechowice_059.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/07/reportaz_slubny_bolechowice_060.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/07/reportaz_slubny_bolechowice_061.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/07/reportaz_slubny_bolechowice_062.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/07/reportaz_slubny_bolechowice_063.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/07/reportaz_slubny_bolechowice_064.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/07/reportaz_slubny_bolechowice_065.jpg", height: 383 },
            { imageSrc: "/static/blog/2016/07/reportaz_slubny_bolechowice_066.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/07/reportaz_slubny_bolechowice_070.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/07/reportaz_slubny_bolechowice_071.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/07/reportaz_slubny_bolechowice_072.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/07/reportaz_slubny_bolechowice_073.jpg", height: 382 },
            { imageSrc: "/static/blog/2016/07/reportaz_slubny_bolechowice_074.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/07/reportaz_slubny_bolechowice_075.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/07/reportaz_slubny_bolechowice_076.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/07/reportaz_slubny_bolechowice_077.jpg", height: 383 },
            { imageSrc: "/static/blog/2016/07/reportaz_slubny_bolechowice_078.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/07/reportaz_slubny_bolechowice_079.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/07/reportaz_slubny_bolechowice_080.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/07/reportaz_slubny_bolechowice_081.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/07/reportaz_slubny_bolechowice_082.jpg", height: 852 },
            { imageSrc: "/static/blog/2016/07/reportaz_slubny_bolechowice_083.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/07/reportaz_slubny_bolechowice_084.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/07/reportaz_slubny_bolechowice_085.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/07/reportaz_slubny_bolechowice_086.jpg", height: 383 },
            { imageSrc: "/static/blog/2016/07/reportaz_slubny_bolechowice_087.jpg", height: 770 },
            { imageSrc: "/static/blog/2016/07/reportaz_slubny_bolechowice_088.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/07/reportaz_slubny_bolechowice_089.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/07/reportaz_slubny_bolechowice_090.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/07/reportaz_slubny_bolechowice_091.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/07/reportaz_slubny_bolechowice_092.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/07/reportaz_slubny_bolechowice_093.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/07/reportaz_slubny_bolechowice_094.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/07/reportaz_slubny_bolechowice_095.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/07/reportaz_slubny_bolechowice_096.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/07/reportaz_slubny_bolechowice_097.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/07/reportaz_slubny_bolechowice_098.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/07/reportaz_slubny_bolechowice_099.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/07/reportaz_slubny_bolechowice_100.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/07/reportaz_slubny_bolechowice_101.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/07/reportaz_slubny_bolechowice_102.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/07/reportaz_slubny_bolechowice_103.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/07/reportaz_slubny_bolechowice_104.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/07/reportaz_slubny_bolechowice_105.jpg", height: 382 },
            { imageSrc: "/static/blog/2016/07/reportaz_slubny_bolechowice_106.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/07/reportaz_slubny_bolechowice_107.jpg", height: 383 },
            { imageSrc: "/static/blog/2016/07/reportaz_slubny_bolechowice_108.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/07/reportaz_slubny_bolechowice_109.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/07/reportaz_slubny_bolechowice_110.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/07/reportaz_slubny_bolechowice_111.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/07/reportaz_slubny_bolechowice_112.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/07/reportaz_slubny_bolechowice_113.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/07/reportaz_slubny_bolechowice_114.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/07/reportaz_slubny_bolechowice_115.jpg", height: 382 },
            { imageSrc: "/static/blog/2016/07/reportaz_slubny_bolechowice_116.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/07/reportaz_slubny_bolechowice_117.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/07/reportaz_slubny_bolechowice_118.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/07/reportaz_slubny_bolechowice_119.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/07/reportaz_slubny_bolechowice_120.jpg", height: 382 },
            { imageSrc: "/static/blog/2016/07/reportaz_slubny_bolechowice_121.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/07/reportaz_slubny_bolechowice_122.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/07/reportaz_slubny_bolechowice_123.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/07/reportaz_slubny_bolechowice_124.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/07/reportaz_slubny_bolechowice_125.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/07/reportaz_slubny_bolechowice_126.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/07/reportaz_slubny_bolechowice_127.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/07/reportaz_slubny_bolechowice_128.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/07/reportaz_slubny_bolechowice_129.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/07/reportaz_slubny_bolechowice_130.jpg", height: 383 },
            { imageSrc: "/static/blog/2016/07/reportaz_slubny_bolechowice_131.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/07/reportaz_slubny_bolechowice_132.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/07/reportaz_slubny_bolechowice_133.jpg", height: 383 },
            { imageSrc: "/static/blog/2016/07/reportaz_slubny_bolechowice_134.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/07/reportaz_slubny_bolechowice_135.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/07/reportaz_slubny_bolechowice_136.jpg", height: 763 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticImagesPath + "gosia_i_tomek_reportaz_slubny_bolechowice_dom_weselny_u_niedzwiedzia_start.jpg"}
                    images={images}
                    headTitle={"Reporta?? ??lubny Bolechowice, Dom Weselny u Nied??wiedzia"}
                    headDescription={"Jeden zero dla Polski takimi s??owami ksi??dz rozpocz???? kazanie na ??lubie Gosi i Tomka. M??wi?? oczywi??cie o meczu ze Szwajcarami. Zapraszam."}
                    headKeywords={"fotograf na wesele krak??w,reporta?? ??lubny bolechowiece,dom weselny u nied??wiedzia"}
                    headUrl={"https://99foto.pl/gosia-i-tomek-reportaz-slubny-bolechowice-dom-weselny-u-niedzwiedzia"}
                    entryContentP1={
                        'Sobota 25 czerwca by??a jednym z bardziej ciep??ych dni tego lata, nie przeszkodzi??o to jednak w wykonaniu pi??knego reporta??u ze ??lubu Gosi i Tomka. Przygotowania rozpocz??li??my wcze??nie rano od makija??u i fryzury w domu rodzinnym Gosi. Dziewczyny stan????y na wysoko??ci zadania i pozosta??o tylko oczekiwa?? na przyjazd Tomka. Kilka buziak??w powitalnych, nast??pnie b??ogos??awie??stwo i wszyscy udali??my si?? do <a href="https://www.parafiabolechowice.pl/" target="_blank" rel="nofollow">Ko??cio??a Piotra i Paw??a w Bolechowicach</a>. Jest jeden zero dla Polski takimi s??owami ksi??dz rozpocz???? kazanie na ??lubie Gosi i Tomka.'
                    }
                    entryContentP2={
                        'M??wi?? oczywi??cie o meczu ze Szwajcarami. Po wzruszaj??cej ceremonii, kt??r?? rodzice mieli przyjemno???? ogl??da?? ze specjalnie dla nich przygotowanych miejsc, zaprosili??my go??ci weselnych do zdj??cia grupowego pod ko??cio??em, a nast??pnie do ??ycze??. Chwil?? p????niej kieliszki uderzy??y o ziemi?? pod <a href="https://www.uniedzwiedzia.pl/" target="_blank" rel="nofollow">Domem Weselnym u Nied??wiedzia</a> i Tomek tradycyjnie przeni??s?? Ma??gorzat?? przez pr??g. Pierwszy taniec d??ugo ??wiczony wyszed?? m??odym rewelacyjnie. Dzia??o si?? mn??stwo i wsz??dzie. Niesamowity wiecz??r, niesamowici ludzie. Dzi??kuj??, ??e mog??em by?? tego dnia z Wami. Przed nami plener w Bolechowicach, gdzie m??odzi oprowadz?? mnie po swoich romantycznych miejscach i Kryspin??w, gdzie mam nadziej?? upolowa?? zachodz??ce s??o??ce. Mi??ego ogl??dania.'
                    }
                    slug={"gosia-i-tomek-reportaz-slubny-bolechowice-dom-weselny-u-niedzwiedzia"}
                    title={"REPORTA?? ??LUBNY BOLECHOWICE, DOM WESELNY U NIED??WIEDZIA - GOSIA i TOMEK"}
                    tags={"fotograf na wesele krak??w,reporta?? ??lubny bolechowiece,dom weselny u nied??wiedzia"}
                    date={"3 listopada 2017"}
                    menuNames={"GOSIA i TOMEK"}
                    menuTitle={"REPORTA?? ??LUBNY BOLECHOWICE, DOM WESELNY U NIED??WIEDZIA"}
                    leadNames={"IWONA i MARCIN"}
                    leadTitle={"WESELE W G??RALSKIM KLIMACIE PRZYSTA?? KABANOS SPYTKOWICE"}
                    leadUrl={"/wesele-w-goralskim-klimacie-przystan-kabanos-spytkowice"}
                    leadImage={process.env.staticImagesPath + "wesele_w_goralskim_klimacie_przystan_kabanos_spytkowice_start.jpg"}
                />
            
        );
};

export default BlogPageComponent;
