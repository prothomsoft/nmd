import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
    
        let images = [
            { imageSrc: "/static/blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0001.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0006.jpg", height: 382 },
            { imageSrc: "/static/blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0002.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0003.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0004.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0005.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0007.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0008.jpg", height: 402 },
            { imageSrc: "/static/blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0009.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0010.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0011.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0012.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0014.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0013.jpg", height: 402 },
            { imageSrc: "/static/blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0015.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0016.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0020.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0017.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0018.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0019.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0021.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0022.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0024.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0023.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0025.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0026.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0027.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0028.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0029.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0030.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0031.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0032.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0033.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0034.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0035.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0036.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0037.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0038.jpg", height: 402 },
            { imageSrc: "/static/blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0039.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0040.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0041.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0042.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0043.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0044.jpg", height: 762 },
            { imageSrc: "/static/blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0045.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0046.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0048.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0047.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0049.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0160.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0051.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0052.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0050.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0053.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0054.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0055.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0056.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0057.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0058.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0161.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0059.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0060.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0061.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0062.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0063.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0064.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0065.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0066.jpg", height: 805 },
            { imageSrc: "/static/blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0067.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0068.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0069.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0070.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0071.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0072.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0162.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0073.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0074.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0075.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0076.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0077.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0078.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0079.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0080.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0081.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0082.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0083.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0084.jpg", height: 762 },
            { imageSrc: "/static/blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0085.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0086.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0087.jpg", height: 762 },
            { imageSrc: "/static/blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0088.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0089.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0090.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0091.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0092.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0093.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0094.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0095.jpg", height: 382 },
            { imageSrc: "/static/blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0096.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0097.jpg", height: 566 },
            { imageSrc: "/static/blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0098.jpg", height: 762 },
            { imageSrc: "/static/blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0099.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0100.jpg", height: 806 },
            { imageSrc: "/static/blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0101.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0102.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0103.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0104.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0105.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0106.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0107.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0108.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0109.jpg", height: 806 },
            { imageSrc: "/static/blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0110.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0111.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0112.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0113.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0114.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0115.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0116.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0117.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0118.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0119.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0120.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0121.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0122.jpg", height: 762 },
            { imageSrc: "/static/blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0123.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0124.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0125.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0127.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0126.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0128.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0129.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0131.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0130.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0132.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0133.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0134.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0135.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0136.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0137.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0138.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0139.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0140.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0141.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0142.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0143.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0144.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0145.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0146.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0149.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0150.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0148.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0151.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0147.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/09/sala_bankietowa_triana_mogilany_reportaz_slubny_podstolice_0152.jpg", height: 763 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticImagesPath + "sala_bankietowa_triana_mogilany.jpg"}
                    images={images}
                    headTitle={"Sala Bankietowa Triana Mogilany, Reporta?? ??lubny Podstolice"}
                    headDescription={"Sala Bankietowa Triana Mogilany, reporta?? ??lubny Pauliny i Paw??a Podstolice. Nowoczesna i jasna sala weselna w okolicach Krakowa. Zapraszam do ogl??dania."}
                    headKeywords={"Sala Bankietowa Triana Mogilany, Reporta?? ??lubny Podstolice, sala weselna okolice Krakowa"}
                    headUrl={"https://99foto.pl/sala-bankietowa-triana-mogilany-reportaz-slubny-podstolice"}
                    entryContentP1={
                        'Ko??c??wka sierpnia i pocz??tek wrze??nia min????y b??yskawicznie i na moim blogu zamie??ci??em relacje z kilku sesji plenerowych. Wrze??niowa pogoda i rowerki Marty i Micha??a odstawione do gara??owej rezerwy pozwalaj?? wr??ci?? do cotygodniowych wpis??w ??lubnych. Nowe otwarcie rozpoczn?? od pokazania ??wietnie zorganizowanego ??lubu Pauliny i Paw??a, kt??ry odby?? si?? w ubieg??y pi??tek w przepi??knej sali weselnej po??o??onej w niedalekiej odleg??o??ci od Krakowa - <a href="https://wesela.jurek-catering.pl/" target="_blank" rel="nofollow">Sali bankietowej Triana</a> w Mogilanach. Dzie?? rozpocz??li??my od makija??u Pauliny, kt??ry wykona??a Michalina Mikrut z <a href="https://www.facebook.com/allureofmakeup/" target="_blank" rel="nofollow">Allure of Makeup</a>. Nast??pnie, na kr??tk?? chwil?? odwiedzi??em dom rodzinny Pana M??odego. Pozna??em przemi??ych rodzic??w Paw??a i przy okazji zrobi??em kilka zdj???? z przygotowa?? (krawacik, rowerowe spinki i takie tam). Paulina ubiera??a si?? korzystaj??c z pomocy swojej Mamy oraz wielu innych pomocnik??w. Dzi??ki temu przygotowania odby??y si?? sprawnie i nadszed?? czas pe??nego emocji b??ogos??awie??stwa. Naturalna kolej rzeczy doprowadzi??a nas do ceremonii za??lubin, kt??ra odby??a si?? w zabytkowym, drewnianym powsta??ym 1870 roku <a href="https://www.podstolice.diecezja.krakow.pl/" target="_blank" rel="nofollow">Ko??ciele  p.w. Ducha ??wi??tego w Podstolicach</a>.'
                    }
                    entryContentP2={
                        'Wirtuozeria skrzypiec i umiarkowana powaga ksi??dza proboszcza nada??y tym trzem kwadransom, niezwyk??y wymiar i przepi??kne t??o dla momentu najwa??niejszego, czyli sakramentalnego TAK. Przeprawa przez Zakopiank??, kt??ra w godzinach szczytu komunikacyjnego przypomina??a komputerow?? gr?? Frogger, by??a dodatkow?? atrakcj?? na trasie do wspomnianego ju?? wcze??niej miejsca imprezy. Gdy wszyscy go??cie weselni dotarli na miejsce <a href="https://wesela.jurek-catering.pl/" target="_blank" rel="nofollow">Sala bankietowa Triana</a> uzna??a imprez?? za otwart??, rodzice tradycyjnie przywitali Par?? M??od?? chlebem i sol??, polecia??y kieliszki i po gor??cych ??yczeniach zaserwowano przepyszny obiad. Zesp???? Monaver z Jaros??awia, kt??ry zachwyci?? mnie mistrzowskim wykonaniem utworu Paw??a Domaga??y - "We?? nie pytaj" - gra?? ??wietnie i mocno pracowa?? na kolejnych poch??dz??cych z referencji klient??w. Ka??d?? minut?? profesjonalnie filmowa?? ??ukasz Korzeniowski z <a href="https://www.facebook.com/filmartelukaszkorzeniowski/" target="_blank" rel="nofollow">Film Arte</a>. Zawsze mi??o spotka?? filmowca z krwi i ko??ci na fotograficznej ??lubnej ??cie??ce. Go??cie bawili si?? ??wietnie, korzystaj??c z foto budki i S??awomira unplugged. D??ugo m??g??bym opisywa?? wszystko to co dzia??o si?? na parkiecie tego wieczora. Paulino i Pawle, dzi??kuj?? za zaufanie i super dzie?? w Waszym towarzystwie. Zapraszam na zdj??cia blogowe i po wi??cej do strefy klienta, po wpisaniu has??a z mojej wizyt??wki. Mi??ego ogl??dania.'
                    }
                    slug={"sala-bankietowa-triana-mogilany-reportaz-slubny-podstolice"}
                    title={"SALA WESELNA TRIANA MOGILANY, REPORTA?? ??LUBNY PODSTOLICE - PAULINA i PAWE??"}
                    tags={"Sala Bankietowa Triana Mogilany, Reporta?? ??lubny Podstolice, sala weselna okolice Krakowa"}
                    date={"21 wrze??nia 2018"}
                    menuNames={"PAULINA i PAWE??"}
                    menuTitle={"SALA WESELNA TRIANA MOGILANY, REPORTA?? ??LUBNY PODSTOLICE"}
                    leadNames={"KRISTINA i ALEKSANDR"}
                    leadTitle={"SESJA ??LUBNA W PIESKOWEJ SKALE i ZAMEK KORZKIEW"}
                    leadUrl={"/sesja-slubna-w-pieskowej-skale-i-zamek-korzkiew"}
                    leadImage={process.env.staticImagesPath + "plener_slubny_zamek_pieskowa_skala.jpg"}
                />
            
        );
};

export default BlogPageComponent;
