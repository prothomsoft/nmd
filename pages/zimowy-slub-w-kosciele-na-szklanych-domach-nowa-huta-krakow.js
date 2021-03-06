import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
    
        let images = [
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0001.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0002.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0003.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0004.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0005.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0006.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0007.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0008.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0009.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0010.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0011.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0012.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0013.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0014.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0015.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0016.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0017.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0018.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0019.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0020.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0021.jpg", height: 766 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0022.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0023.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0024.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0025.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0026.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0027.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0028.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0029.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0030.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0031.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0032.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0033.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0034.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0035.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0036.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0037.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0038.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0039.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0040.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0041.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0042.jpg", height: 806 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0043.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0044.jpg", height: 850 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0045.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0046.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0047.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0048.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0049.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0050.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0051.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0052.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0053.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0054.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0055.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0056.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0057.jpg", height: 806 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0058.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0059.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0060.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0061.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0062.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0063.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0064.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0065.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0066.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0067.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0068.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0069.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0070.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0071.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0072.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0073.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0074.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0075.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0076.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0077.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0078.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0079.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0080.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0081.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0082.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0083.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0084.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0085.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0086.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0087.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0088.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0089.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0090.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0091.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0092.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0093.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0094.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0095.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0096.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0097.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0098.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0099.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0100.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0101.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0104.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0102.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0103.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0105.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0106.jpg", height: 382 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0107.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0108.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0109.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0110.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0111.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/02/fotograf_slubny_krakow_nowa_huta_szklane_domy_0112.jpg", height: 763 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticImagesPath + "zimowy-slub-w-kosciele-na-szklanych-domach-nowa-huta-krakow-start.jpg"}
                    images={images}
                    headTitle={"Zimowy ??lub w Ko??ciele na Szklanych Domach, Nowa Huta, Krak??w"}
                    headDescription={"Zimowa sobota. Kilka gor??cych klatek i zimne ognie. Ola i Tomek, Szklane Domy i szalona zabawa do bia??ego rana u Nied??wiedzia. Zapraszam na bloga."}
                    headKeywords={"Zimowy ??lub Krak??w, ko??ci???? na Szklanych Domach, reporta?? ??lubny Nowa Huta"}
                    headUrl={"https://99foto.pl/zimowy-slub-w-kosciele-na-szklanych-domach-nowa-huta-krakow"}
                    entryContentP1={
                        'Zimowa sobota i koniec stycznia. Linia wsp??lnych znajomych moich ??lubnych par z pi??knych studenckich czas??w na krakowskim AWF i facebook oczywi??cie, zaprowadzi??y mnie tym razem do Nowej Huty w pobli??e Placu Centralnego do mieszkania Oli. Przygotowania rozpocz??li??my wcze??nie rano w mieszcz??cym si?? w nowej siedzibie <a href="https://www.facebook.com/Studio-Avangarda-188030214877751/" target="_blank" rel="nofollow">Salonie fryzjerskim Avangarda</a>. To tam powstawa??y fryzury Oli i jej Mamy. Gdy welon wyl??dowa?? ju?? na swoim miejscu, przenie??li??my si?? do mieszkania, gdzie po odnalezieniu odpowiedniego ??wiat??a, mejkapowe czary rozpocz????a <a href="https://www.facebook.com/iwonamiernikmakeup" target="_blank" rel="nofollow">Iwona Miernik</a>. Makija?? jak zawsze uda?? si?? doskonale. W tak zwanym mi??dzyczasie odwiedzi??em Tomka w jego mieszkaniu na osiedlu G??rali. Kr??tkie pozycjonowanie muchy i powr??t do Oli na pozosta???? cz?????? przygotowa??. Dalej klasycznie, przywitanie i gor??cy poca??unek, b??ogos??awie??stwo rodzic??w i sporo emocji w powietrzu. Chwil?? p????niej byli??my ju?? w <a href="https://www.szklanedomy.cystersi.pl/" target="_blank" rel="nofollow">Ko??ciele pw. Matki Bo??ej Cz??stochowskiej w Krakowie na osiedlu Szklane Domy</a>. Ksi??d?? przywita?? m??odych w zakrystii, wprowadzi?? do o??tarza, wyg??osi?? kazanie i doprowadzi?? ceremoni?? do najwa??niejszego momentu, czyli sakramentalnego TAK.'
                    }
                    entryContentP2={
                        'Pomimo nienajwy??szej temperatury uda??o nam si?? nam??wi?? go??ci na zdj??cie grupowe pod ko??cio??em. Nast??pnie autostrad?? pojechali??my prosto do <a href="https://www.uniedzwiedzia.pl/" target="_blank" rel="nofollow">Domu Weselnego "U Nied??wiedzia"</a>. Rodzice przywitali m??odych chlebem i sol??, kieliszki tradycyjnie ju?? przesz??y do historii, a Tomek przeni??s?? Ol?? przez pr??g restauracji. Obiadek, deser i pierwszy taniec, kt??ry otworzy?? parkiet dla pozosta??ych go??ci. <a href="https://www.magicznanoc.pl/" target="_blank" rel="nofollow">DJ Kacper i Wodzirej Tomek czyli Magiczna Noc</a> zapewnili obs??ug?? muzyczn?? na najwy??szym poziomie, jak w reklamie zamieniaj??c marzenia w rzeczywisto????. Za du???? ilo???? zabaw, atrakcji, gad??et??w, super o??wietlenie sali kredyt nale??y si?? w??a??nie im. Zrobili??my zdj??cia grupowe i kilka gor??cych klatek o??wietlonych dla odmiany zimnymi ogniami. Zabawa trwa??a do bia??ego rana i by??o mi??o kolekcjonowa?? te chwile, zapisuj??c kolejne klatki na kartach pami??ci w moich aparatach. Olu i Tomku wielkie dzi??ki, ??e mog??em by?? Waszym go??ciem. Zapraszam do ogl??dania zdj????, a po wi??cej do strefy klienta. Has??o znajdziecie na mojej wizyt??wce, a wizyt??wki mo??na by??o tradycyjne ju?? odnale???? przy ekspresie do kawy...'
                    }
                    slug={"zimowy-slub-w-kosciele-na-szklanych-domach-nowa-huta-krakow"}
                    title={"ZIMOWY ??LUB W KO??CIELE NA SZKLANYCH DOMACH, NOWA HUTA, KRAK??W - OLA i TOMEK"}
                    tags={"Zimowy ??lub Krak??w, Ko??ci???? na Szkanych Domach, reporta?? ??lubny Nowa Huta"}
                    date={"27 grudnia 2016"}
                    menuNames={"OLA i TOMEK"}
                    menuTitle={"ZIMOWY ??LUB W KO??CIELE NA SZKLANYCH DOMACH, NOWA HUTA, KRAK??W"}
                    leadNames={"KINGA i MACIEK"}
                    leadTitle={"DEKORACJA SALI WESELNEJ W STYLU RUSTYKALNYM, OSP ZAWADA"}
                    leadUrl={"/dekoracja-sali-weselnej-w-stylu-rustykalnym-osp-zawada"}
                    leadImage={process.env.staticImagesPath + "dekoracja_sali_weselnej_w_stylu_rustykalnym_osp_zawada_start.jpg"}
                />
            
        );
};

export default BlogPageComponent;
