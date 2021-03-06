import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {

        let images = [
            { imageSrc: "/static/blog/2017/07/sesja_zdjeciowa_hotel_qubus_krakow_0004.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/07/sesja_zdjeciowa_hotel_qubus_krakow_0001.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/07/sesja_zdjeciowa_hotel_qubus_krakow_0003.jpg", height: 388 },
            { imageSrc: "/static/blog/2017/07/sesja_zdjeciowa_hotel_qubus_krakow_0002.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/07/sesja_zdjeciowa_hotel_qubus_krakow_0013.jpg", height: 527 },
            { imageSrc: "/static/blog/2017/07/sesja_zdjeciowa_hotel_qubus_krakow_0005.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/07/sesja_zdjeciowa_hotel_qubus_krakow_0006.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/07/sesja_zdjeciowa_hotel_qubus_krakow_0007.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/07/sesja_zdjeciowa_hotel_qubus_krakow_0018.jpg", height: 527 },
            { imageSrc: "/static/blog/2017/07/sesja_zdjeciowa_hotel_qubus_krakow_0015.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/07/sesja_zdjeciowa_hotel_qubus_krakow_0010.jpg", height: 850 },
            { imageSrc: "/static/blog/2017/07/sesja_zdjeciowa_hotel_qubus_krakow_0009.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/07/sesja_zdjeciowa_hotel_qubus_krakow_0011.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/07/sesja_zdjeciowa_hotel_qubus_krakow_0012.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/07/sesja_zdjeciowa_hotel_qubus_krakow_0016.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/07/sesja_zdjeciowa_hotel_qubus_krakow_0014.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/07/sesja_zdjeciowa_hotel_qubus_krakow_0017.jpg", height: 850 },
            { imageSrc: "/static/blog/2017/07/sesja_zdjeciowa_hotel_qubus_krakow_0020.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/07/sesja_zdjeciowa_hotel_qubus_krakow_0021.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/07/sesja_zdjeciowa_hotel_qubus_krakow_0023.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/07/sesja_zdjeciowa_hotel_qubus_krakow_0022.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/07/sesja_zdjeciowa_hotel_qubus_krakow_0024.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/07/sesja_zdjeciowa_hotel_qubus_krakow_0025.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/07/sesja_zdjeciowa_hotel_qubus_krakow_0030.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/07/sesja_zdjeciowa_hotel_qubus_krakow_0019.jpg", height: 382 },
            { imageSrc: "/static/blog/2017/07/sesja_zdjeciowa_hotel_qubus_krakow_0026.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/07/sesja_zdjeciowa_hotel_qubus_krakow_0029.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/07/sesja_zdjeciowa_hotel_qubus_krakow_0027.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/07/sesja_zdjeciowa_hotel_qubus_krakow_0028.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/07/sesja_zdjeciowa_hotel_qubus_krakow_0032.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/07/sesja_zdjeciowa_hotel_qubus_krakow_0033.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/07/sesja_zdjeciowa_hotel_qubus_krakow_0034.jpg", height: 763 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticImagesPath + "hotel_qubus_krakow_sesja_zdjeciowa_start.jpg"}
                    images={images}
                    headTitle={"Hotel Qubus Krak??w, sesja zdj??ciowa"}
                    headDescription={"Taras widokowy Hotelu QUBUS w Krakowie, Lawendowe Pole i historia w kt??r?? nie uwierzycie. W imieniu Eweliny i Kamila serdecznie zapraszam na mojego bloga."}
                    headKeywords={"hotel qubus krak??w,sesja zdj??ciowa krak??w"}
                    headUrl={"https://99foto.pl/hotel-qubus-krakow-sesja-zdjeciowa"}
                    entryContentP1={
                        'Moja przygoda z wchodzeniem do najr????niejszych miejsc w Krakowie zwi??zana jest z ma??o fajnymi wspomnieniami. Zwykle w??a??ciciele nie chc?? udost??pnia?? swoich wn??trz na potrzeby sesji zdj??ciowych, a je??eli ju?? daj?? si?? nam??wi?? to co tu du??o m??wi??, tanio nie jest. Tym razem by??o inaczej. Zanim zaparkowa??em auto na ulicy gazowej, czyli plenerowym punkcie startowym dla Starej Zajezdni, Stajni, a jednym s??owem Kazimierza, podjecha??em do <a href="https://www.qubushotel.com/pl/hotele/krakow/1/" target="_blank" rel="nofollow">Hotelu Qubus</a> by sprawdzi?? czy fontanna przed hotelem dzia??a. W????czona nie by??a, wi??c wszed??em do ??rodka pytaj??c czy mo??na wykorzysta?? widokowy taras hotelowy do zdj???? ??lubnych i czy z okazji przyjazdu Donalda  Trumpa do Polski, Panowie Recepcjoni??ci (z du??ej bo jest szacun) by tej fontanny nie odpalili.'
                    }
                    entryContentP2={
                        "W pierwszej chwili odpowied?? by??a, ??e nie da rady, ale kiedy trzydzie??ci minut p????niej ju?? z Ewelin?? i Kamilem zacz??li??my robi?? tam zdj??cia wyszed?? przemi??y Pan i zaproponowa??, ??e fontann?? specjalnie dla nas w????czy. Kilka minut p????niej podziwiali??my widok z tarasu widokowego Hotelu Qubus. Widok jest ??wietny. Nie odpu??cili??my te?? klatki zdj??ciowej w stylowym korytarzu i na basenie. Dalsza cz?????? sesji odby??a si?? na Lawendowym Polu i nie b??d?? Was zanudza?? szczeg????ami. Zdj??cia niech wystarcz?? jako relacja. Mi??ego ogl??dania."
                    }
                    slug={"hotel-qubus-krakow-sesja-zdjeciowa"}
                    title={"HOTEL QUBUS KRAK??W SESJA ZDJ??CIOWA - EWELINA i KAMIL"}
                    tags={"hotel qubus krak??w,sesja zdj??ciowa krak??w"}
                    date={"10 lipca 2017"}
                    menuNames={"EWELINA i KAMIL"}
                    menuTitle={"HOTEL QUBUS KRAK??W SESJA ZDJ??CIOWA"}
                    leadNames={"EWELINA i KAMIL"}
                    leadTitle={"HOTEL TADEUSZ USZEW i G??RALSKA SALA WESELNA"}
                    leadUrl={"/hotel-tadeusz-uszew-i-goralska-sala-weselna"}
                    leadImage={process.env.staticImagesPath + "hotel_tadeusz_uszew_i_goralska_sala_weselna_start.jpg"}
                />
            
        );
};

export default BlogPageComponent;
