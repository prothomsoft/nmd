import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
   
        let images = [
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0001.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0002.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0011.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0003.jpg", height: 850 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0012.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0004.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0005.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0006.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0008.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0010.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0007.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0009.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0013.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0014.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0015.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0016.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0017.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0018.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0019.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0020.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0021.jpg", height: 805 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0022.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0023.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0024.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0025.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0026.jpg", height: 805 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0027.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0028.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0029.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0030.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0031.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0032.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0033.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0034.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0035.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0036.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0037.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0038.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0039.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0049.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0040.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0041.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0042.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0043.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0044.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0045.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0046.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0047.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0048.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0050.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0051.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0052.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0053.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0054.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0055.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0056.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0057.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0058.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0059.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0060.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0061.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0062.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0063.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0065.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0066.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0067.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0068.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0072.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0073.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0074.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0075.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0076.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0077.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0078.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0079.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0080.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0081.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0082.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0083.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0084.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0085.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0086.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0087.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0088.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0089.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0090.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0091.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0092.jpg", height: 472 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0093.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0094.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0095.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0096.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0069.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0097.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0098.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0099.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0100.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0101.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0102.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0103.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0104.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0105.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0106.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0107.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0108.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0109.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0110.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0111.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0112.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0113.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0114.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0115.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0116.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0117.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0118.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0119.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0120.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0121.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0122.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0125.jpg", height: 762 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0123.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0124.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0126.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0127.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0129.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0130.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0131.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0132.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0133.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0134.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0135.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0136.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0148.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0137.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0138.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0139.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0141.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0140.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0143.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0144.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0145.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0146.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0147.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0150.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0149.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0142.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/04/villa_marina_slub_nad_jeziorem_0128.jpg", height: 763 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticImagesPath + "sala-weselna-villa-marina-dabrowa-gornicza-slub-nad-jeziorem-start.jpg"}
                    images={images}
                    headTitle={"Sala weselna Villa Marina D??browa G??rnicza, ??lub nad jeziorem"}
                    headDescription={
                        "Sala weselena Villa Marina jest po??o??ona nad brzegiem jeziora Pogoria w bezpiecznej odleg??o??ci od centrum miasta, malowniczej okolicy w otoczeniu lasu. Zapraszam na zdj??cia ??lubne Sandry i Ma??ka."
                    }
                    headKeywords={"Villa Marina D??browa G??rnicza, sala weselna nad jeziorem, ??lub na ??l??sku"}
                    headUrl={"https://99foto.pl/sala-weselna-villa-marina-dabrowa-gornicza-slub-nad-jeziorem"}
                    entryContentP1={
                        'Dok??adnie tydzie?? temu zach??cony niezwyk????, pachn??c?? na klipach internetowych wakacyjnym klimatem sal?? weseln?? <a href="https://villamarina.eu/" target="_blank" rel="nofollow">Villa Marina w D??browie G??rniczej</a>, wybra??em si?? na zdj??cia ??lubne troch?? dalej ni?? zwykle. Powiem jedno by??o warto i ??l??sk zapami??tam bardzo dobrze i na bardzo d??ugo. Przy okazji upolowa??em fajne kadry, kt??re na pewno rozszerz?? moje dotychczasowe porfolio. Dzie?? rozpocz??li??my w Tarnowskich G??rach w domu rodzinnym Sandry, gdzie Magda pomalowa??a Pann?? M??od??. Starali??my si?? nie przeszkadza?? Magdzie w pracy, mo??e nie do ko??ca si?? uda??o, ale kilka drobnych pr????b cierpliwie przez ni?? wys??uchiwanych, pozwoli??o nam ??wietnie wsp????pracowa?? i zrobi?? fajne zdj??cia. Kolejne kilka minut zosta??o skradzione przez ubieranie sukni ??lubnej i tak oto wszystko zosta??o finalnie dopi??te na ostatni guzik. Pojechali??my wi???? na przygotowania do Ma??ka. By??o to bardzo dynamiczne pi??tna??cie minut, w kt??rych Pan M??ody za??o??y?? spinki, much??, buty, zegarek i marynark??. Pierwszy poca??unek, b??ogos??awie??stwo, dwie bramy przygotowane przez s??siad??w i dotarli??my do <a href="https://parafia.bobrowniki.tgory.pl/" target="_blank" rel="nofollow">Ko??cio??a pw. Przemienienia Pa??skiego</a> w Tarnowskich G??rach. Ceremonia, podczas kt??rej go??cie procesyjnie przeszli za o??tarz, oraz pi??kne kazanie wyg??oszone przez charyzmatycznego ksi??dza i wreszcie sakramentalne TAK.'
                    }
                    entryContentP2={
                        'Po wyj??ciu z ko??cio??a Par?? M??od?? przywita??o pi??kne s??o??ce i deszcz... monet, kt??re go??cie wyrzucili na szcz??cie. Gar???? gor??cych ??ycze??, po kt??rych Para M??oda zaprosi??a go??ci weselnych na mniej oficjaln?? cz?????? imprezy do wspomnianej ju?? <a href="https://villamarina.eu/" target="_blank" rel="nofollow">Sali Bankietowej Villa Marina w D??browie G??rniczej</a>. Sala weselena Villa Marina i o??rodek wypoczynkowy po??o??ony s?? nad brzegiem jeziora Pogoria w bezpiecznej odleg??o??ci od centrum miasta, malowniczej okolicy w otoczeniu lasu. Ka??dy z go??ci po dotarciu na miejsce nie kry?? zachwytu rozwodz??c si?? nad wspania??o??ci?? tego miejsca. Sandra i Maciek przyj??li reszt?? gor??cych ??ycze?? od wszystkich go??ci weselnych i otworzyli parkiet pierwszym ta??cem. <a href="https://zespol-lavado.pl" target="_blank" rel="nofollow">Zesp???? Lavado</a>, kt??ry gra?? dla nas tego wieczoru stan???? na wysoko??ci zadania. ??wietne brzmienie gitary, Grzegorz i jego saksofon wyrzucaj??cy z lekko??ci?? motyla niezliczon?? ilo???? perfekcyjnie pouk??adanych d??wi??k??w, wybitny g??os wokalistki i szeroki wachlarz utwor??w zostan?? w naszych g??owach na d??ugo. Po raz kolejny mia??em te?? mo??liwo???? spotka?? si?? i wsp????pracowa?? z Krzysiem z <a href="https://camdesign.pl/" target="_blank" rel="nofollow">CAMDESIGN - Pracownia Filmu ??lubnego</a>, kt??ry nagrywa??, rejestrowa?? i filmowa?? jednocze??nie. Naprawd?? super impreza w wakacyjnym klimacie, kt??rego w kwietniu nikt przecie?? by si?? nie m??g?? spodziewa??. Sandro i Ma??ku, dzi??ki za zaufanie i zaproszenie mnie na Wasz ??lub. Nie przed??u??aj???? serdecznie zapraszam do ogl??dania zdj????, a po kilka wi??cej do strefy klienta z has??em z mojej wizyt??wki.'
                    }
                    slug={"sala-weselna-villa-marina-dabrowa-gornicza-slub-nad-jeziorem"}
                    title={"VILLA MARINA D??BROWA G??RNICZA, ??LUB NAD JEZIOREM - SANDRA i MACIEK"}
                    tags={"Villa Marina D??browa G??rnicza, sala weselna nad jeziorem, ??lub na ??l??sku"}
                    date={"20 kwietnia 2018"}
                    menuNames={"SANDRA i MACIEK"}
                    menuTitle={"VILLA MARINA D??BROWA G??RNICZA, ??LUB NAD JEZIOREM"}
                    leadNames={"NATALIA i PIOTR"}
                    leadTitle={"HOTEL MARGERITA, MAGICZNY WYSTR??J SALI WESELNEJ W KRAKOWIE"}
                    leadUrl={"/hotel-margerita-magiczny-wystroj-sali-weselnej-w-krakowie"}
                    leadImage={process.env.staticImagesPath + "hotel_margerita_krakow_magiczny_wystroj_sali_weselnej_w_krakowie-start.jpg"}
                />
            
        );
};

export default BlogPageComponent;
