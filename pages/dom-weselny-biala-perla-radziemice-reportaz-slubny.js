import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
 
        let images = [
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0001.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0002.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0003.jpg", height: 527 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0004.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0005.jpg", height: 527 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0006.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0007.jpg", height: 383 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0022.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0008.jpg", height: 527 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0011.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0009.jpg", height: 566 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0010.jpg", height: 383 }, 
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0013.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0012.jpg", height: 383 },          
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0014.jpg", height: 527 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0015.jpg", height: 527 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0016.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0017.jpg", height: 527 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0019.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0018.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0024.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0020.jpg", height: 762 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0021.jpg", height: 382 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0025.jpg", height: 763 },            
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0027.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0023.jpg", height: 383 }, 
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0026.jpg", height: 763 },      
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0028.jpg", height: 762 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0029.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0030.jpg", height: 527 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0031.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0032.jpg", height: 382 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0033.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0034.jpg", height: 383 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0035.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0036.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0037.jpg", height: 527 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0038.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0039.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0066.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0040.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0041.jpg", height: 762 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0042.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0043.jpg", height: 762 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0044.jpg", height: 762 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0045.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0060.jpg", height: 762 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0046.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0047.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0050.jpg", height: 762 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0048.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0051.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0054.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0052.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0049.jpg", height: 762 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0055.jpg", height: 382 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0053.jpg", height: 762 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0056.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0143.jpg", height: 383 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0059.jpg", height: 763 },          
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0061.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0062.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0063.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0064.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0065.jpg", height: 660 },      
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0067.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0068.jpg", height: 383 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0069.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0070.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0071.jpg", height: 806 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0075.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0076.jpg", height: 527 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0077.jpg", height: 762 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0078.jpg", height: 527 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0079.jpg", height: 762 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0073.jpg", height: 527 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0080.jpg", height: 762 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0074.jpg", height: 527 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0081.jpg", height: 762 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0072.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0082.jpg", height: 762 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0083.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0084.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0085.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0088.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0087.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0091.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0089.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0090.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0086.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0092.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0093.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0094.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0095.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0096.jpg", height: 527 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0097.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0098.jpg", height: 527 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0099.jpg", height: 852 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0100.jpg", height: 527 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0101.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0102.jpg", height: 527 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0103.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0104.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0105.jpg", height: 527 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0106.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0107.jpg", height: 762 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0108.jpg", height: 527 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0109.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0110.jpg", height: 527 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0111.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0112.jpg", height: 527 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0113.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0114.jpg", height: 763 },         
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0116.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0117.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0118.jpg", height: 383 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0115.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0119.jpg", height: 382 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0120.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0123.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0122.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0121.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0124.jpg", height: 762 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0125.jpg", height: 527 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0126.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0127.jpg", height: 806 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0128.jpg", height: 762 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0129.jpg", height: 527 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0130.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0131.jpg", height: 527 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0133.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0135.jpg", height: 527 },          
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0134.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0132.jpg", height: 527 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0136.jpg", height: 762 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0137.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0141.jpg", height: 762 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0138.jpg", height: 762 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0139.jpg", height: 763 },
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0140.jpg", height: 763 },            
            { imageSrc: "/static/blog/2021/06/dom-_weselny_biala_perla_radziemice_reportaz_slubny_0142.jpg", height: 762 }          
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticImagesPath + "dom-weselny-biala-perla-radziemice-reportaz-slubny.jpg"}
                    images={images}
                    headTitle={"Dom Weselny Bia??a Per??a Radziemice, reporta?? ??lubny"}
                    headDescription={"Dom Weselny Bia??a Per??a, Radziemice, reporta?? ??lubny ??anety i Sebastiana. Sala ??lubna na wymarzone wesele blisko Krakowa. Zapraszam do ogl??dania."}
                    headKeywords={"Dom Weselny Bia??a Per??a, reporta?? ??lubny krak??w, ??lubna sesja zdj??cia, sala ??lubna, wesele pod krakowem"}
                    headUrl={"https://99foto.pl/dom-weselny-biala-perla-radziemice-reportaz-slubny"}
                    entryContentP1={
                        'Ostatni reporta?? ??lubny na moim blogu opublikowa??em w po??owie sierpnia ubieg??ego roku. Od tego czasu mogli??cie zobaczy?? kilka sesji plenerowych. Chcia??em w ten spos??b uciec od trend??w panuj??cych na grupach fotograficznych pokazuj??cych ??luby w pryzmacie pandemii - fenomen masek, czy tort??w zamkni??tych w lod??wkach prywatnych mieszka?? nigdy do mnie nie przemawia??. Fotografuj??c ??luby zawsze skupiam si?? na ludziach, emocjach, pi??knych detalach i ciekawych do pokazania miejscach. Fotografia ??lubna musi nie???? ze sob?? dawk?? emocji, kt??re b??d?? wspominane przez ca??e ??ycie. Reporta?? ??lubny musi to by?? natomiast sp??jne opowiadanie, kt??re przeka??e historie Pary M??odej zar??wno dzieciom, jak i wnukom, bliskim i dalszym znajomym podczas wsp??lnych spotka??. Pi??kno tego jedynego dnia, momenty wzruszenia, u??miechy Nowo??e??c??w, rado???? i zabawa zaproszonych go??ci, tego nie da si?? opowiedzie?? to trzeba zobaczy?? najlepiej na zdj??ciach.'
                    }
                    entryContentP2={
                        'Czwartkowy reporta?? rozpocz??li??my od przygotowa?? ??anety i Sebastiana. Od pocz??tku towarzyszy?? mi Szymon z <a href="https://www.facebook.com/cinebury" target="_blank" rel="nofollow">Cinebury</a>, z kt??rym ju?? wcze??niej mia??em przyjemno???? pracowa??. ??wiadek Mateusz jak zwykle punktualny przypali?? kuba??skie cygaro, a druhny, razem z Mam?? i siostrami pomog??y ??anecie w ubieraniu sukni i zadba??y, by wszystkie dodatki znalaz??y si?? na w??a??ciwym miejscu. B??ogos??awie??stwo, sakramentalne TAK w <a href="https://diecezja.kielce.pl/parafie/radziemice-sw-stanislawa-b-m" target="_blank" rel="nofollow">Ko??ciele ??w. Stanis??awa biskupa i m??czennika</a>, wsp??lne zdj??cie grupowe i chill w <a href="https://dworekbialaperla.pl/" target="_blank" rel="nofollow">Domu Weselnym Bia??a Per??a w Radziemicach</a>. <a href="https://www.facebook.com/profile.php?id=100046824468125" target="_blank" rel="nofollow">Zesp???? Muzyczny Cosmo</a> przyjecha?? do nas z ??owicza, przywi??z?? nowe spojrzenie na zabawy weselne i weselne szlagiery znane ju?? wszystkim doskonale. Dzi??kuj?? za zaufanie i ??wietne chwile, kt??re mog??em razem z Wami dzieli??. Spotkamy si?? jeszcze na sesji plenerowej i ju?? wiem, ??e b??dzie to kolejny sukces. Serdecznie zapraszam na zdj??cia i ??ycz?? mi??ego ogl??dania.'
                    }
                    slug={"dom-weselny-biala-perla-radziemice-reportaz-slubny"}
                    title={"DOM WESELNY BIA??A PER??A RADZIEMICE, REPORTA?? ??LUBNY - ??ANETA i SEBASTIAN"}
                    tags={"Dom Weselny Bia??a Per??a, reporta?? ??lubny krak??w, ??lubna sesja zdj??cia, sala ??lubna, wesele pod krakowem"}
                    date={"8 czerwca 2021"}
                    menuNames={"??ANETA i SEBASTIAN"}
                    menuTitle={"DOM WESELNY BIA??A PER??A RADZIEMICE, REPORTA?? ??LUBNY"}
                    leadNames={"ANNA i PAWE??"}
                    leadTitle={"PA??AC GOETZ MIEJSCE NA WESELE i PLENER ??LUBNY MARZE??"}
                    leadUrl={"/palac-goetz-wesele-plener-slubny"}
                    leadImage={"url(" + process.env.staticImagesPath + "sesja_slubna_palac_goetza.jpg"}
                />
            
        );
};

export default BlogPageComponent;
