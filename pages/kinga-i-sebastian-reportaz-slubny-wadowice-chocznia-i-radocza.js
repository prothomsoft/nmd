import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
   
        let images = [
            { imageSrc: "/static/blog/2016/10/fotograf_slubny_wadowice.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_na_wesele_wadowice_0001.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/09/fotograf_na_wesele_wadowice_0002.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_na_wesele_wadowice_0005.jpg", height: 383 },
            { imageSrc: "/static/blog/2016/09/fotograf_na_wesele_wadowice_0012.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/09/fotograf_na_wesele_wadowice_0004.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_na_wesele_wadowice_0006.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/09/fotograf_na_wesele_wadowice_0003.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_na_wesele_wadowice_0007.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/09/fotograf_na_wesele_wadowice_0008.jpg", height: 382 },
            { imageSrc: "/static/blog/2016/09/fotograf_na_wesele_wadowice_0010.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/10/fotograf_na_wesele_wadowice_0013.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/10/fotograf_na_wesele_wadowice_0014.jpg", height: 852 },
            { imageSrc: "/static/blog/2016/10/fotograf_na_wesele_wadowice_0015.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/10/fotograf_na_wesele_wadowice_0016.jpg", height: 382 },
            { imageSrc: "/static/blog/2016/10/fotograf_na_wesele_wadowice_0017.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/10/fotograf_na_wesele_wadowice_0018.jpg", height: 382 },
            { imageSrc: "/static/blog/2016/10/fotograf_na_wesele_wadowice_0019.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/10/fotograf_na_wesele_wadowice_0020.jpg", height: 383 },
            { imageSrc: "/static/blog/2016/10/fotograf_na_wesele_wadowice_0022.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/10/fotograf_na_wesele_wadowice_0021.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/10/fotograf_na_wesele_wadowice_0024.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/10/fotograf_na_wesele_wadowice_0023.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/10/fotograf_na_wesele_wadowice_0025.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/10/fotograf_na_wesele_wadowice_0026.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/10/fotograf_na_wesele_wadowice_0027.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/10/fotograf_na_wesele_wadowice_0028.jpg", height: 805 },
            { imageSrc: "/static/blog/2016/10/fotograf_na_wesele_wadowice_0029.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/10/fotograf_na_wesele_wadowice_0030.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/10/fotograf_na_wesele_wadowice_0031.jpg", height: 383 },
            { imageSrc: "/static/blog/2016/10/fotograf_na_wesele_wadowice_0032.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/10/fotograf_na_wesele_wadowice_0033.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/10/fotograf_na_wesele_wadowice_0035.jpg", height: 383 },
            { imageSrc: "/static/blog/2016/10/fotograf_na_wesele_wadowice_0034.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/10/fotograf_na_wesele_wadowice_0036.jpg", height: 383 },
            { imageSrc: "/static/blog/2016/10/fotograf_na_wesele_wadowice_0037.jpg", height: 383 },
            { imageSrc: "/static/blog/2016/10/fotograf_na_wesele_wadowice_0039.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/10/fotograf_na_wesele_wadowice_0038.jpg", height: 383 },
            { imageSrc: "/static/blog/2016/10/fotograf_na_wesele_wadowice_0040.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/10/fotograf_na_wesele_wadowice_0041.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/10/fotograf_na_wesele_wadowice_0042.jpg", height: 383 },
            { imageSrc: "/static/blog/2016/10/fotograf_na_wesele_wadowice_0043.jpg", height: 382 },
            { imageSrc: "/static/blog/2016/10/fotograf_na_wesele_wadowice_0044.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/10/fotograf_na_wesele_wadowice_0045.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/10/fotograf_na_wesele_wadowice_0046.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/10/fotograf_na_wesele_wadowice_0048.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/10/fotograf_na_wesele_wadowice_0049.jpg", height: 527 },
            { imageSrc: "/static/blog/2016/10/fotograf_na_wesele_wadowice_0068.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/10/fotograf_na_wesele_wadowice_0050.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/10/fotograf_na_wesele_wadowice_0052.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/10/fotograf_na_wesele_wadowice_0053.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/10/fotograf_na_wesele_wadowice_0054.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/10/fotograf_na_wesele_wadowice_0056.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/10/fotograf_na_wesele_wadowice_0055.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/10/fotograf_na_wesele_wadowice_0057.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/10/fotograf_na_wesele_wadowice_0058.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/10/fotograf_na_wesele_wadowice_0059.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/10/fotograf_na_wesele_wadowice_0061.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/10/fotograf_na_wesele_wadowice_0060.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/10/fotograf_na_wesele_wadowice_0062.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/10/fotograf_na_wesele_wadowice_0063.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/10/fotograf_na_wesele_wadowice_0064.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/10/fotograf_na_wesele_wadowice_0065.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/10/fotograf_na_wesele_wadowice_0066.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/10/fotograf_na_wesele_wadowice_0067.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/10/fotograf_na_wesele_wadowice_0069.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/10/fotograf_na_wesele_wadowice_0070.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/10/fotograf_na_wesele_wadowice_0071.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/10/fotograf_na_wesele_wadowice_0073.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/10/fotograf_na_wesele_wadowice_0072.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/10/fotograf_na_wesele_wadowice_0074.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/10/fotograf_na_wesele_wadowice_0075.jpg", height: 382 },
            { imageSrc: "/static/blog/2016/10/fotograf_na_wesele_wadowice_0076.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/10/fotograf_na_wesele_wadowice_0077.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/10/fotograf_na_wesele_wadowice_0078.jpg", height: 382 },
            { imageSrc: "/static/blog/2016/10/fotograf_na_wesele_wadowice_0079.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/10/fotograf_na_wesele_wadowice_0080.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/10/fotograf_na_wesele_wadowice_0081.jpg", height: 383 },
            { imageSrc: "/static/blog/2016/10/fotograf_na_wesele_wadowice_0082.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/10/fotograf_na_wesele_wadowice_0083.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/10/fotograf_na_wesele_wadowice_0084.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/10/fotograf_na_wesele_wadowice_0085.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/10/fotograf_na_wesele_wadowice_0086.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/10/fotograf_na_wesele_wadowice_0087.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/10/fotograf_na_wesele_wadowice_0088.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/10/fotograf_na_wesele_wadowice_0089.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/10/fotograf_na_wesele_wadowice_0090.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/10/fotograf_na_wesele_wadowice_0091.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/10/fotograf_na_wesele_wadowice_0092.jpg", height: 383 },
            { imageSrc: "/static/blog/2016/10/fotograf_na_wesele_wadowice_0093.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/10/fotograf_na_wesele_wadowice_0094.jpg", height: 383 },
            { imageSrc: "/static/blog/2016/10/fotograf_na_wesele_wadowice_0095.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/10/fotograf_na_wesele_wadowice_0096.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/10/fotograf_na_wesele_wadowice_0097.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/10/fotograf_na_wesele_wadowice_0098.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/10/fotograf_na_wesele_wadowice_0099.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/10/fotograf_na_wesele_wadowice_0100.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/10/fotograf_na_wesele_wadowice_0101.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/10/fotograf_na_wesele_wadowice_0102.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/10/fotograf_na_wesele_wadowice_0103.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/10/fotograf_na_wesele_wadowice_0104.jpg", height: 383 },
            { imageSrc: "/static/blog/2016/10/fotograf_na_wesele_wadowice_0105.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/10/fotograf_na_wesele_wadowice_0106.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/10/fotograf_na_wesele_wadowice_0107.jpg", height: 382 },
            { imageSrc: "/static/blog/2016/10/fotograf_na_wesele_wadowice_0108.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/10/fotograf_na_wesele_wadowice_0109.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/10/fotograf_na_wesele_wadowice_0110.jpg", height: 383 },
            { imageSrc: "/static/blog/2016/10/fotograf_na_wesele_wadowice_0111.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/10/fotograf_na_wesele_wadowice_0112.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/10/fotograf_na_wesele_wadowice_0113.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/10/fotograf_na_wesele_wadowice_0114.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/10/fotograf_na_wesele_wadowice_0115.jpg", height: 383 },
            { imageSrc: "/static/blog/2016/10/fotograf_na_wesele_wadowice_0116.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/10/fotograf_na_wesele_wadowice_0117.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/10/fotograf_na_wesele_wadowice_0118.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/10/fotograf_na_wesele_wadowice_0119.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/10/fotograf_na_wesele_wadowice_0120.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/10/fotograf_na_wesele_wadowice_0121.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/10/fotograf_na_wesele_wadowice_0123.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/10/fotograf_na_wesele_wadowice_0122.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/10/fotograf_na_wesele_wadowice_0124.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/10/fotograf_na_wesele_wadowice_0126.jpg", height: 382 },
            { imageSrc: "/static/blog/2016/10/fotograf_na_wesele_wadowice_0125.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/10/fotograf_na_wesele_wadowice_0127.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/10/fotograf_na_wesele_wadowice_0128.jpg", height: 382 },
            { imageSrc: "/static/blog/2016/10/fotograf_na_wesele_wadowice_0129.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/10/fotograf_na_wesele_wadowice_0130.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/10/fotograf_na_wesele_wadowice_0131.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/10/fotograf_na_wesele_wadowice_0132.jpg", height: 382 },
            { imageSrc: "/static/blog/2016/10/fotograf_na_wesele_wadowice_0133.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/10/fotograf_na_wesele_wadowice_0134.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/10/fotograf_na_wesele_wadowice_0135.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/10/fotograf_na_wesele_wadowice_0136.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/10/fotograf_na_wesele_wadowice_0137.jpg", height: 383 },
            { imageSrc: "/static/blog/2016/10/fotograf_na_wesele_wadowice_0139.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/10/fotograf_na_wesele_wadowice_0138.jpg", height: 382 },
            { imageSrc: "/static/blog/2016/10/fotograf_na_wesele_wadowice_0140.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/10/fotograf_na_wesele_wadowice_0143.jpg", height: 382 },
            { imageSrc: "/static/blog/2016/10/fotograf_na_wesele_wadowice_0144.jpg", height: 763 },
            { imageSrc: "/static/blog/2016/10/fotograf_na_wesele_wadowice_0141.jpg", height: 383 },
            { imageSrc: "/static/blog/2016/10/fotograf_na_wesele_wadowice_0142.jpg", height: 762 },
            { imageSrc: "/static/blog/2016/10/fotograf_na_wesele_wadowice_0145.jpg", height: 763 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticImagesPath + "kinga_i_sebastian_reportaz_slubny_wadowice_chocznia_i_radocza_start.jpg"}
                    images={images}
                    headTitle={"Reporta?? ??lubny Wadowice, zdj??cia ??lubne OSP Chocznia"}
                    headDescription={"Przepi??kne rodzinne wej??cie do ko??cio??a podczas kt??rego Anto?? i Wiktor stan??li na wysoko??ci zadania, pozytywna atmosfera i zabawa do bia??ego rana. Zapraszam."}
                    headKeywords={"reporta?? ??lubny wadowice,zdj??cia ??lubne chocznia"}
                    headUrl={"https://99foto.pl/kinga-i-sebastian-reportaz-slubny-wadowice-chocznia-i-radocza"}
                    entryContentP1={
                        "Fotografem ??lubnym Kingi i Sebastiana zosta??em z polecenia Magdy i Lucjana, kt??rych pozdrawiam. Ich ??lub i sesj?? plenerow?? mo??ecie odnale???? i poogl??da?? na moim blogu. By?? to m??j drugi raz w Hollywood Studio Leny Czechowicz i drugi raz w Wadowicach mie??cie Jana Paw??a II. Przygotowania zacz??li??my o godzinie 13. Lena i Kinga znaj?? si?? od bardzo dawna i mieszkaj?? po s??siedzku, wi??c makija?? i w??osy dotar??y do poziomu Top Model z ram??wki stacji TVN. Chwilk?? p????niej pojechali??my do Sebastiana, gdzie czeka??o nas sporo ubierania. Anto?? i Wiktor dzieciaczki m??odych za??o??yli swoje marynarki w ekspresowym tempie, Sebastian poprawia?? much?? i spinki na dole. Kinga w towarzystwie Moniki w pokoju obok dzielnie dopina??y sukni?? na ostatni guzik. Panowa??a pozytywna atmosfera bez najmniejszych oznak stresu. Punktem kulminacyjnym by??o wzruszaj??ce b??ogos??awie??stwo udzielone przez rodzic??w."
                    }
                    entryContentP2={
                        'Ceremonia odby??a si?? w <a href="https://chocznia.pl/" target="_blank" rel="nofollow">Ko??ciele pw. Narodzenia ??w. Jana Chrzciciela w Choczni</a>. Najpi??kniejszy moment ca??ego dnia, kiedy Wiktor i Anto?? wprowadzaj?? rodzic??w przed o??tarz, dzi??ki zdj??ciom zostanie z nami ju?? na zawsze (fajna ta fotografia). Pi??kne kazanie i wzruszenia podczas przysi??gi ma????e??skiej, wszystko w udekorowanym z dba??o??ci?? o najmniejszy detal ko??ciele. Po mszy ??wi??tej i zdj??ciu grupowym, korzystaj??c jeszcze z ostatnich promieni zachodz??cego s??o??ca udali??my na sal?? weseln?? do <a href="https://straz.tomice.pl/jednostki-osp/ochotnicza-straz-pozarna-w-radoczy/" target="_blank" rel="nofollow">OSP Radocza</a>. Zabawa trwa??a do samego rana, a zesp???? muzyczny swoim graniem gwarantowa?? wysok?? frekwencj?? os??b na parkiecie. Jako go???? specjalny wyst??pi??a Lena, kt??ra zachwyci??a wszystkich swoim g??osem. Bardzo dzi??kuj?? za ten wyj??tkowy dzie??, ciep??e przyj??cie i wspania???? atmosfer??. Mi??ego ogl??dania, a po wi??cej zdj???? zapraszam go??ci weselnych do strefy klienta z has??em z mojej wizyt??wki.'
                    }
                    slug={"kinga-i-sebastian-reportaz-slubny-wadowice-chocznia-i-radocza"}
                    title={"REPORTA?? ??LUBNY WADOWICE, CHOCZNIA i RADOCZA - KINGA i SEBASTIAN"}
                    tags={"reporta?? ??lubny wadowice,zdj??cia ??lubne chocznia"}
                    date={"20 pa??dziernika 2016"}
                    menuNames={"KINGA i SEBASTIAN"}
                    menuTitle={"REPORTA?? ??LUBNY WADOWICE, CHOCZNIA i RADOCZA"}
                    leadNames={"OLA i PAWE??"}
                    leadTitle={"DW??R SZLACHECKI SIECIECHOWICE, REPORTA?? ??LUBNY MIECH??W"}
                    leadUrl={"/dwor-szlachecki-sieciechowice-reportaz-slubny-miechow"}
                    leadImage={process.env.staticImagesPath + "dwor_szlachecki_sieciechowice_reportaz_slubny_miechow_start.jpg"}
                />
            
        );
};

export default BlogPageComponent;
