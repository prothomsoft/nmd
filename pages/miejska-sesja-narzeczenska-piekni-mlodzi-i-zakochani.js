import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
    
        let images = [
            { imageSrc: "/static/blog/2019/07/sesja_narzeczenska_w_krakowie_0001.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/07/sesja_narzeczenska_w_krakowie_0002.jpg", height: 851 },
            { imageSrc: "/static/blog/2019/07/sesja_narzeczenska_w_krakowie_0022.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/07/sesja_narzeczenska_w_krakowie_0006.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/07/sesja_narzeczenska_w_krakowie_0003.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/07/sesja_narzeczenska_w_krakowie_0005.jpg", height: 527 },
            { imageSrc: "/static/blog/2019/07/sesja_narzeczenska_w_krakowie_0023.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/07/sesja_narzeczenska_w_krakowie_0008.jpg", height: 851 },
            { imageSrc: "/static/blog/2019/07/sesja_narzeczenska_w_krakowie_0007.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/07/sesja_narzeczenska_w_krakowie_0009.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/07/sesja_narzeczenska_w_krakowie_0010.jpg", height: 850 },
            { imageSrc: "/static/blog/2019/07/sesja_narzeczenska_w_krakowie_0011.jpg", height: 526 },
            { imageSrc: "/static/blog/2019/07/sesja_narzeczenska_w_krakowie_0015.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/07/sesja_narzeczenska_w_krakowie_0016.jpg", height: 851 },
            { imageSrc: "/static/blog/2019/07/sesja_narzeczenska_w_krakowie_0027.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/07/sesja_narzeczenska_w_krakowie_0045.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/07/sesja_narzeczenska_w_krakowie_0004.jpg", height: 526 },
            { imageSrc: "/static/blog/2019/07/sesja_narzeczenska_w_krakowie_0018.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/07/sesja_narzeczenska_w_krakowie_0044.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/07/sesja_narzeczenska_w_krakowie_0020.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/07/sesja_narzeczenska_w_krakowie_0021.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/07/sesja_narzeczenska_w_krakowie_0024.jpg", height: 850 },
            { imageSrc: "/static/blog/2019/07/sesja_narzeczenska_w_krakowie_0025.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/07/sesja_narzeczenska_w_krakowie_0040.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/07/sesja_narzeczenska_w_krakowie_0037.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/07/sesja_narzeczenska_w_krakowie_0046.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/07/sesja_narzeczenska_w_krakowie_0030.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/07/sesja_narzeczenska_w_krakowie_0031.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/07/sesja_narzeczenska_w_krakowie_0032.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/07/sesja_narzeczenska_w_krakowie_0033.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/07/sesja_narzeczenska_w_krakowie_0034.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/07/sesja_narzeczenska_w_krakowie_0028.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/07/sesja_narzeczenska_w_krakowie_0012.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/07/sesja_narzeczenska_w_krakowie_0035.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/07/sesja_narzeczenska_w_krakowie_0036.jpg", height: 526 },
            { imageSrc: "/static/blog/2019/07/sesja_narzeczenska_w_krakowie_0026.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/07/sesja_narzeczenska_w_krakowie_0038.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/07/sesja_narzeczenska_w_krakowie_0042.jpg", height: 762 },
            { imageSrc: "/static/blog/2019/07/sesja_narzeczenska_w_krakowie_0043.jpg", height: 527 },
            { imageSrc: "/static/blog/2019/07/sesja_narzeczenska_w_krakowie_0041.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/07/sesja_narzeczenska_w_krakowie_0019.jpg", height: 850 },
            { imageSrc: "/static/blog/2019/07/sesja_narzeczenska_w_krakowie_0013.jpg", height: 762 },
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticImagesPath + "sesja_narzeczenska_krakow_kazimierz.jpg"}
                    images={images}
                    headTitle={"Miejska sesja narzecze??ska w Krakowie"}
                    headDescription={"Miejska sesja narzecze??ska w Krakowie, Kazimierz, Stare Miasto, Zakrz??wek. Pi??kni, m??odzi i zakochani - Marlena i Adam. Zapraszam."}
                    headKeywords={"miejska sesja narzecze??ska, zdj??cia Krak??w Stare Miasto, sesja na Kazimierzu"}
                    headUrl={"https://99foto.pl/miejska-sesja-narzeczenska-piekni-mlodzi-i-zakochani"}
                    entryContentP1={
                        "Pracuj??c nad obr??bk?? miejskiej sesji narzecze??skiej Marleny i Adama s??ucha??em sobie jednej z ostatnich p??yt Eda Sheerana, gdzie w utworze Beautiful People ??piewnie wyra??a on swoje niezadowolenie ze swojego rudego wygl??du. Niew??tpliwie przyszli Pa??stwo M??odzi, kt??rych zdj??cia mam przyjemno???? dzisiaj pokaza?? na blogu, mieli o wiele wi??cej szcz????cia i tytu?? wpisu pi??kni, m??odzi, zakochani pasuje do nich idealnie. ??lub ju?? w sierpniu, a tymczasem wsp??lnie korzystaj??c z rewelacyjnej pogody odwiedzili??my kilka zak??tk??w naszego pi??knego Krakowa."
                    }
                    entryContentP2={
                        'Na pocz??tek wybrali??my oczywi??cie Kazimierz, gdy?? jest to miejsce idealne na tego typu miejskie sesje narzecze??skie. Krak??w ma sw??j rytm, kolory, styl, miejsca mo??e mniej uporz??dkowane, ale naznaczone charakterem i opowiadaj??ce wspania??e historie. Wybieraj??c odpowiedni?? drog?? i pod????aj??c t?? drog?? ??ladami zakochanych z aparatem w r??ku mamy pewno???? stworzenia minimum kilku niezapomnianych kadr??w. Pami??tajcie, ??e miejska sesja narzecze??ska to ??wietny pomys?? na oswojenie si?? z obiektywem aparatu fotograficznego i spos??b na bli??sze poznanie fotografa ??lubnego, kt??ry b??dzie Wam towarzyszy?? w tym najwa??niejszym dniu. Serdecznie zapraszam do ogl??dania i zach??cam do lajkowania na <a href="https://www.facebook.com/99foto" target="_blank" rel="nofollow noopener noreferrer">Facebook</a> lub <a href="https://www.instagram.com/99foto.pl/" target="_blank" rel="nofollow noopener noreferrer">Insta</a>.'
                    }
                    slug={"miejska-sesja-narzeczenska-piekni-mlodzi-i-zakochani"}
                    title={"MIEJSKA SESJA NARZECZE??SKA, PI??KNI, M??ODZI i ZAKOCHANI - MARLENA i ADAM"}
                    tags={"pomys?? na sesj?? zdj??ciow??, ciekawe miejsca w krakowie, zdj??cia pary m??odej w plenerze"}
                    date={"28 czerwca 2019"}
                    menuNames={"MARLENA i ADAM"}
                    menuTitle={"MIEJSKA SESJA NARZECZE??SKA, PI??KNI, M??ODZI i ZAKOCHANI"}
                    leadNames={"JOANNA i SZYMON"}
                    leadTitle={"CIEKAWE MIEJSCA W KRAKOWIE CZYLI POMYS?? NA SESJ?? ZDJ??CIOW??"}
                    leadUrl={"/ciekawe-miejsca-w-krakowie-czyli-pomysl-na-sesje-zdjeciowa"}
                    leadImage={process.env.staticImagesPath + "ciekawe_miejsca_na_plener_w_krakowie.jpg"}
                />
            
        );
};

export default BlogPageComponent;
