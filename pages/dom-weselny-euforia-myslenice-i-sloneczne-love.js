import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
 
        let images = [
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0001.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0002.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0003.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0004.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0005.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0006.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0007.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0010.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0008.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0009.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0011.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0012.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0013.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0014.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0015.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0016.jpg", height: 566 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0017.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0018.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0019.jpg", height: 402 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0020.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0021.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0022.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0023.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0024.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0025.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0026.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0027.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0028.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0029.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0030.jpg", height: 805 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0031.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0032.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0033.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0034.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0035.jpg", height: 382 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0036.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0037.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0038.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0039.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0040.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0041.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0042.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0043.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0044.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0045.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0046.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0047.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0048.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0049.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0050.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0051.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0052.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0053.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0054.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0055.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0056.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0057.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0058.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0059.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0060.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0061.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0062.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0063.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0064.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0065.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0066.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0067.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0068.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0069.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0070.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0071.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0072.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0073.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0074.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0075.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0076.jpg", height: 762 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0077.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0078.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0079.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0080.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0081.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0082.jpg", height: 762 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0083.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0084.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0085.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0086.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0087.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0088.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0089.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0090.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0091.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0092.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0097.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0093.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0094.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0095.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0096.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0098.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0099.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0100.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0101.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0102.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0104.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0103.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0106.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0105.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0107.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0109.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0108.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0110.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0111.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0112.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0113.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0114.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0115.jpg", height: 762 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0116.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0117.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0118.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0119.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0120.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0121.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0122.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0123.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0124.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0125.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0126.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0128.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0127.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0129.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0130.jpg", height: 762 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0131.jpg", height: 382 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0132.jpg", height: 762 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0133.jpg", height: 762 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0134.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0135.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0136.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0137.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0138.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0139.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0140.jpg", height: 762 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0141.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0142.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0143.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0144.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0145.jpg", height: 762 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0146.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0147.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0158.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0148.jpg", height: 762 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0149.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0150.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0151.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0152.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0153.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0154.jpg", height: 762 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0155.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0156.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0157.jpg", height: 762 },
            { imageSrc: "/static/blog/2018/10/dom_weselny_euforia_myslenice_0159.jpg", height: 763 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticImagesPath + "dom_weselny_euforia_myslenice_1.jpg"}
                    images={images}
                    headTitle={"Dom Weselny Euforia My??lenice i s??onecznie LOVE"}
                    headDescription={"Dom weselny Euforia My??lenice i s??oneczne LOVE. Du??o s??o??ca w jedn?? z wrze??niowych sob??t. Reporta?? ??lubny Izabeli i Arkadiusza. Zapraszam do ogl??dania."}
                    headKeywords={"dom weselny euforia my??lenice, sala na wesele blisko Krakowa, fotograf ??lubny My??lenice"}
                    headUrl={"https://99foto.pl/dom-weselny-euforia-myslenice-i-sloneczne-love"}
                    entryContentP1={
                        'Spory kawa??ek drogi od Krakowa i ma??a miejscowo???? Skrzydlna, a w niej dom z pi??knym widokiem na otaczaj??ce go pokryte lasem g??rki. Arkadiusz i jego siostra Natalia czekali na mnie i kilka minut przed godzin?? dziewi??t?? rano wystartowali??my z przygotowaniami Pana M??odego. Brak pogodowej nudy czyli na zmian?? troch?? deszczu, troch?? s??o??ca i ju?? nie tak ciep??o bo tylko osiem stopni. Podczas gdy ja odlicza??em ilo???? kilometr??w do Jordanowa, jad??c tam przez Mszan?? Doln??, Rabk?? Zdr??j na fotelu genialnej wiza??ystki <a href="https://www.facebook.com/patrycjaantoszmakeup/" target="_blank" rel="nofollow">Patrycji Antosz</a> siedzia??a ju?? Izabela, przygotowywuj??c si?? do najwa??niejszego dnia w swoim ??yciu. Studio wiza??u Patrycji odwiedzam cz??sto przy okazji wykonywania zdj???? na ??lubach w Jordanowie i okolicach. Zawsze czeka mnie tam jaka?? pozytywna zmiana, a ka??dy kolejny makija?? jest arcydzie??em. Gdy uroda Izy zosta??a ju?? podkre??lona wybrali??my si?? do jej domu rodzinnego w miejscowo??ci Toporzysko. Salon dopracowany w najmniejszym szczeg??le pos??u??y?? genialnie jako sceneria dla przygotowa?? i b??ogos??awie??stwa, kt??rego udzieli rodzice.'
                    }
                    entryContentP2={
                        'Trafi?? do <a href="https://www.parafiatoporzysko.pl/" target="_blank" rel="nofollow">Ko??cio??a p.w. Naj??wi??tszej Naj??wi??tszej Maryi Panny Matki Ko??cio??a w Toporzysku</a> by??o bardzo ??atwo bo wystarczy??o zej???? z g??rki. Babcia Izy udzieli??a b??ogos??awie??stwa jako pierwsza pozdrawiaj??c m??odych z okna domu. Dumny Tato odprowadzi?? Izabel?? do o??tarza i ksi??dz proboszcz rozpocz???? ceremoni?? za??lubim. W ko??ciele tym uwag?? przyk??uwa??y witra??e, a kilka promieni s??onecznych, kt??re o??wietli??y wn??trze Ko????io??a pod koniec Mszy ??wi??tej wprowadzi??y wszystkich nas w dobry humor. ??cigaj??c si?? z kapel?? g??ralsk?? po Zakopiance i penetruj??c objazdy w okolicach Skomielnej Bia??ej dotarli??my do miejsca zabawy weselnej. <a href="https://www.salaeuforia.pl/" target="_blank" rel="nofollow">Dom Weselny Euforia</a> w My??lenicach czeka?? na przyby??ych go??ci w pe??nej gotowo??ci. Luksusowa sala weselna, ze zintegrowanym o??wietleniem, nag??o??nieniem i sto??ami zastawionymi wyszukanymi smako??ykami, a w ten specjalny dzie?? ubrana w pi??kne kwiaty, wywo??a??a zachwyt na twarzach kolejno wchodz??cych na ni?? go??ci weselnych. Rozpocz????y si?? pe??ne u??cisk??w i u??miech??w ??yczenia. Du??y parkiet pomie??ci?? wszystkich podczas pierwszego ta??ca. P????niej by?? tort i wiele atrakcji przygotowanych dla go??ci. G??ralskie klimaty wprowadza?? <a href="https://sykowni.pl/" target="_blank" rel="nofollow">Zesp???? Sykowni</a>. Ka??d?? minut?? tych wydarze?? nagrywa?? trzy osobowy zesp???? film mejker??w z <a href="https://www.facebook.com/filmykoliber/" target="_blank" rel="nofollow">Filmy Koliber</a>. Impreza trwa??a do bia??ego rana, a parkiet momentami rozgrzewa?? si?? do czerwono??ci. Dzi??kuj?? za zaufanie i zapraszam na kilka zdj???? z tego dnia. Mi??ego ogl??dania.'
                    }
                    slug={"dom-weselny-euforia-myslenice-i-sloneczne-love"}
                    title={"DOM WESELNY EUFORIA MY??LENICE i S??ONECZNE LOVE - IZABELA i ARKADIUSZ"}
                    tags={"dom weselny euforia my??lenice, sala na wesele blisko Krakowa, fotograf ??lubny My??lenice"}
                    date={"3 pa??dziernika 2018"}
                    menuNames={"IZABELA i ARKADIUSZ"}
                    menuTitle={"DOM WESELNY EUFORIA MY??LENICE i S??ONECZNE LOVE"}
                    leadNames={"PAULINA i PAWE??"}
                    leadTitle={"SALA WESELNA TRIANA MOGILANY, REPORTA?? ??LUBNY MY??LENICE"}
                    leadUrl={"/sala-bankietowa-triana-mogilany-reportaz-slubny-podstolice"}
                    leadImage={process.env.staticImagesPath + "sala_bankietowa_triana_mogilany.jpg"}
                />
            
        );
};

export default BlogPageComponent;
