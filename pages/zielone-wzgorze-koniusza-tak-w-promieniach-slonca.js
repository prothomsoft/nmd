import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
   
        let images = [
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0001.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0007.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0002.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0008.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0004.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0006.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0005.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0003.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0010.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0009.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0011.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0016.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0012.jpg", height: 805 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0019.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0015.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0014.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0017.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0018.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0013.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0020.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0021.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0022.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0023.jpg", height: 526 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0024.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0025.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0026.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0043.jpg", height: 566 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0027.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0028.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0029.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0030.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0031.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0032.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0033.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0034.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0035.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0036.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0037.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0038.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0039.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0040.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0041.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0042.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0044.jpg", height: 567 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0046.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0045.jpg", height: 526 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0047.jpg", height: 805 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0048.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0050.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0052.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0051.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0053.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0055.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0054.jpg", height: 805 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0056.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0057.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0064.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0059.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0061.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0062.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0063.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0065.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0066.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0067.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0068.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0069.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0058.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0070.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0071.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0072.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0060.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0073.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0074.jpg", height: 805 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0075.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0076.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0077.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0078.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0079.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0080.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0082.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0081.jpg", height: 761 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0049.jpg", height: 566 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0083.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0084.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0085.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0086.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0087.jpg", height: 762 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0088.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0089.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0090.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0091.jpg", height: 402 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0092.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0093.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0094.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0095.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0096.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0097.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0098.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0099.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0100.jpg", height: 527 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0101.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0102.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0103.jpg", height: 762 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0104.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0105.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0106.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0107.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0108.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0109.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0110.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0111.jpg", height: 762 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0112.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0113.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0114.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0149.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0115.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0116.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0151.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0117.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0118.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0119.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0120.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0144.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0121.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0150.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0122.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0123.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0124.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0125.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0126.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0127.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0128.jpg", height: 762 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0129.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0130.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0131.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0132.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0133.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0134.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0135.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0136.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0137.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0138.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0139.jpg", height: 762 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0140.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0141.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0142.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0143.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0145.jpg", height: 383 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0146.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0147.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0148.jpg", height: 763 },
            { imageSrc: "/static/blog/2018/10/sala_weselna_zielone_wzgorze_koniusza_krakow_proszowice_0152.jpg", height: 763 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticImagesPath + "zielone_wzgorze_koniusza.jpg"}
                    images={images}
                    headTitle={"Zielone Wzg??rze Koniusza, TAK w promieniach s??o??ca"}
                    headDescription={"Zielone Wzg??rze Koniusza, fotograf ??lubny Proszowice. TAK w promieniach s??o??ca, garbus i du??o kwiat??w na ??lubie Karoliny i Mateusza. Zapraszam do ogl??dania."}
                    headKeywords={"Zielone Wzg??rze Koniusza, fotograf ??lubny Proszowice, garbus do ??lubu"}
                    headUrl={"https://99foto.pl/zielone-wzgorze-koniusza-tak-w-promieniach-slonca"}
                    entryContentP1={
                        'We wrze??niu 2016 roku, czyli dwa lata temu na przygotowaniach do <a href="https://99foto.pl/natalia-marcin-i-maja-reportaz-slubny-gosciniec-branicki/" target="_blank" rel="nofollow">??lubu Natalii i Marcina</a>, kt??ry mo??na ogl??dn???? na moim blogu, pozna??em Karolin??. Nie jestem do ko??ca pewien czy dobrze zaobserwowa??em, ale w??a??nie wtedy pod Ko??cio??em na Wzg??rzach Krzes??awickich Karolina przedstawia??a znajomym swojego nowego ch??opaka Mateusza. No iskrzy??o mi??dzy nimi i po dw??ch latach spotkali??my si?? ponownie po to by postawi?? kropk?? nad i. Dzie?? rozpocz??li??my od przygotowa?? Karoliny w <a href="https://www.facebook.com/pages/category/Beauty-Salon/Odpicuj-Si%C4%99-322995571499190/" target="_blank" rel="nofollow">Studio Odpicuj si??</a>. Profesjonalny makija?? wykona??a <a href="https://aleksandra-szczepanek.com.pl/" target="_blank" rel="nofollow">Aleksandra Szczepanek</a>. Nast??pnie nie zwa??aj??c na utrudnienia w ruchu zwi??zane z odbywaj??cym si?? w Krakowie maratonem, przebili??my si?? do Nowej Huty, dok??adniej na Osiedle Kalinowe w celu uwiecznienia przygotowa?? Mateusza. Pisz?? w liczbie mnogiej poniewa?? od samego rana biegali??my fotografuj??c i filmuj??c z <a href="https://camdesign.pl/" target="_blank" rel="nofollow">Krzy??kiem z CAMDESIGN</a>, kt??rego bardzo polecam wszystkim przysz??ym nowo??e??com. By??o tak jak lubi??, dzia??o si?? du??o i mo??na by??o darowa?? sobie ustawki skupiaj??c si?? na fajnych momentach. Przygotowania u Karoliny przebieg??y w rodzinnej atmosferze. Dom wype??nia??y ??miechy bawi??cych si?? dzieciak??w i nutka napi??cia budowanego zbli??aj??cym si?? przybyciem Mateusza.'
                    }
                    entryContentP2={
                        'First look, wpinanie butonierek, b??ogos??awie??stwo rodzic??w i ubrany w przepi??kne kwiaty Garbus odtransportowa?? Par?? M??od?? do <a href="https://parafia.kalinowe.pl/" target="_blank" rel="nofollow">Ko??ci????a ??w. J??zefa Oblubie??ca Naj??wi??tszej Maryi Panny w Krakowie</a>. Troch?? ju?? tych ??lub??w mam na swoim koncie, ale w takiej ceremonii mia??em okazj?? uczestniczy?? po raz pierwszy. Ksi??dz by?? gospodarzem przez du??e gie. Ju?? na pocz??tku poprzesadza?? go??ci do przednich ??awek, poprosi?? aparaciarzy by oszcz??dzali nogi podczas kazania, przez blisko p???? godziny pr??bowa?? bezskutecznie zrozumie?? natur?? kobiety, by na sam koniec zaprosi?? wszystkich go??ci do przodu by napewno nie przegapili chwili, w kt??rej obr??czki trafi?? na swoje miejsce. No i co, by??y ??zy, poca??unki, pe??no emocji. Po wyj??ciu z ko??cio??a przywita??a nas polska z??ota jesie??. Wykorzystuj??c te nieziemskie warunki zrobili??my zdj??cie grupowe i ruszyli??my w stron?? Proszowic do <a href="https://www.salazielonewzgorze.pl/" target="_blank" rel="nofollow">Sali Weselnej Zielone Wzg??rze w miejscowo??ci Koniusza</a>. Na parkiecie go??ci przywita?? Artur z <a href="https://artmuz.krakow.pl/" target="_blank" rel="nofollow">Zesp????u Muzycznego ART MUZ</a>. Para M??oda zata??czy??a pierwszy taniec, pokroi??a torta i zaprosi??a go??ci weselnych do wsp??lnej zabawy na parkiecie. Artur kr??ci?? zabaw?? na poziomie jako frontment niemal??e zwisaj??c ze sceny. Pewnie gdyby szuka?? pracy na etacie to stacja telewizyjna TVN przygarn????aby go jego talent ju?? po pierwszym interview. By??a te?? fotobudka, litery LOVE i du??o pysznych rzeczy na z??b. Dzi??ki, ??e mog??em sfotografowa?? Wasz ??lub. By??o tak jak si?? spodziewa??em emocjonalnie i energetycznie. Zapraszam na wybrane zdj??cia, a po wi??cej do strefy klienta.'
                    }
                    slug={"zielone-wzgorze-koniusza-tak-w-promieniach-slonca"}
                    title={"ZIELONE WZG??RZE KONIUSZA, TAK W PROMIENIACH S??O??CA - KAROLINA i MATEUSZ"}
                    tags={"Zielone Wzg??rze Koniusza, fotograf ??lubny Proszowice, garbus do ??lubu"}
                    date={"23 pa??dziernika 2018"}
                    menuNames={"KAROLINA i MATEUSZ"}
                    menuTitle={"ZIELONE WZG??RZE KONIUSZA, TAK W PROMIENIACH S??O??CA"}
                    leadNames={"IZABELA i ARKADIUSZ"}
                    leadTitle={"SESJA ??LUBNA JESIENI?? - PA??AC GOETZ??W OKOCIMSKICH"}
                    leadUrl={"/sesja-slubna-jesienia-palac-goetzow-okocimskich"}
                    leadImage={process.env.staticImagesPath + "sesja_slubna_jesienia.jpg"}
                />
            
        );
};

export default BlogPageComponent;
