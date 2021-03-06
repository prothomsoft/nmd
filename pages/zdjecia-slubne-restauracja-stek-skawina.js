import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
    
        let images = [
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0001.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0022.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0005.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0002.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0010.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0004.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0007.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0006.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0017.jpg", height: 805 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0016.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0009.jpg", height: 806 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0014.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0012.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0019.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0013.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0020.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0015.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0011.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0018.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0008.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0021.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0023.jpg", height: 527 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0025.jpg", height: 806 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0024.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0026.jpg", height: 527 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0027.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0029.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0195.jpg", height: 806 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0030.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0032.jpg", height: 850 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0034.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0033.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0035.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0037.jpg", height: 806 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0038.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0036.jpg", height: 805 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0039.jpg", height: 805 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0041.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0040.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0042.jpg", height: 806 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0043.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0044.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0045.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0046.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0047.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0048.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0051.jpg", height: 527 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0049.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0052.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0050.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0053.jpg", height: 805 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0054.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0055.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0056.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0057.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0058.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0059.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0060.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0061.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0062.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0063.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0064.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0065.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0066.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0067.jpg", height: 850 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0068.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0079.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0069.jpg", height: 527 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0070.jpg", height: 850 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0071.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0072.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0073.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0074.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0075.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0076.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0078.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0077.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0081.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0082.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0083.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0085.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0087.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0086.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0080.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0088.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0089.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0090.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0091.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0092.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0093.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0094.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0095.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0096.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0097.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0098.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0099.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0100.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0101.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0102.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0103.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0104.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0105.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0106.jpg", height: 806 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0107.jpg", height: 527 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0108.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0109.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0110.jpg", height: 850 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0111.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0112.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0113.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0114.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0115.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0116.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0117.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0118.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0119.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0120.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0121.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0139.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0122.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0123.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0124.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0125.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0126.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0127.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0128.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0129.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0130.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0131.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0132.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0133.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0135.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0136.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0137.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0138.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0140.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0141.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0142.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0143.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0144.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0145.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0146.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0147.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0148.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0149.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0150.jpg", height: 527 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0151.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0152.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0153.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0154.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0134.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0155.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0156.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0157.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0158.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0160.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0161.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0162.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0159.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0163.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0164.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0165.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0166.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0167.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0168.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0169.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0170.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0172.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0173.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0174.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0171.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0175.jpg", height: 383 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0176.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0177.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0186.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0179.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0180.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0181.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0182.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0183.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0184.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0185.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0187.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0189.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0188.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0190.jpg", height: 527 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0191.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0192.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0193.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0194.jpg", height: 763 },
            { imageSrc: "/static/blog/2017/10/fotograf_slubny_skawina_restauracja_stek_0178.jpg", height: 763 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticImagesPath + "zdjecia_slubne_restauracja_stek_skawina_start.jpg"}
                    images={images}
                    headTitle={"Fotograf ??lubny Skawina"}
                    headDescription={"Ciep??y wrze??niowy dzie?? i lawina fajnych kadr??w. To wszystko na pi??knym ??lubie Karoliny i Bartka. Fotograf ??lubny ze Skawiny zaprasza."}
                    headKeywords={"fotograf ??lubny skawina,zdj??cia ??lubne restauracja stek"}
                    headUrl={"https://99foto.pl/zdjecia-slubne-restauracja-stek-skawina"}
                    entryContentP1={
                        'W jedn?? z jesiennych i s??onecznych sob??t mia??em przyjemno???? towarzyszy?? Karolinie i Bartkowi, poznaj??c ich rodziny, znajomych i fotografuj??c jeden z ich najwa??niejszych dni w ??yciu. Przygotowania zacz??li??my w Skawinie w <a href="https://www.prestige-hs.pl/" target="_blank" rel="nofollow">Salonie Fryzjerskim Prestige Hair Studio</a>. Gdy przyjecha??em na miejsce Gosia z <a href="https://www.facebook.com/MalgorzataLisowskaNailsMakeUp/" target="_blank" rel="nofollow">Nails &#038; Make-Up Ma??gorzata Lisowska</a> pracowa??a ju?? nad makija??em Mamy Karoliny. Nast??pnie dzi??ki ??wietnej wsp????pracy uda??o nam si?? przesun???? stanowisko wiza??ystki w miejsce idealne, kt??re otworzy??o nowe mo??liwo??ci i morze wpania??ych kadr??w. W ??wietnej atmosferze sp??dzili??my kolejne minuty, a mo??e nawet godziny. Nast??pnie przyjecha?? Bartek i zabra?? Karolin?? do swojego domu rodzinnego. Bartek ubiera?? garnitur z Piotrkiem na g??rze, Karolina z Juli?? na dole, biega??em po schodach mocno, ale warto by??o. Pe??ne emocji, wzrusze?? b??ogos??awie??stwo i chwil?? p????niej udali??my si?? do <a href="https://www.szymonijuda.pl/" target="_blank" rel="nofollow">Ko??cio??a ??w. Aposto????w Szymona i Judy Tadeusza w Skawinie</a>.'
                    }
                    entryContentP2={
                        'Wizyta w zakrystii i kilka ??art??w ksi??dza, chwila oczekiwania na go??ci,  gor??ce przywitania i pi??kna ceremonia z sakramentalnym TAK. Po wyj??ciu z Ko??cio??a zaprosili??my go??ci do zdj??cia grupowego, oraz ??ycze?? w promieniach ciep??ego wrze??niowego s??o??ca. Po ??yczeniach dos??ownie za rogiem, r??wnie?? w Skawinie na m??odych czekali rodzice z tradycyjnym chleblem i sol??, oraz zesp???? <a href="https://www.zmthebest.pl/" target="_blank" rel="nofollow">ZM THE BEST z Katowic</a>, kt??ry od pocz??tku profesjonalnie prowadzi?? ca???? imprez??. <a href="https://www.restauracjastek.pl/" target="_blank" rel="nofollow">Restauracja Stek Skawina</a> przywita??a swoich go??ci pysznym obiadem i lodowym deserem. M??odzi otworzyli parkiet pierwszym ta??cem. A jak ju?? ten parkiet zosta?? otwarty to trudno by??oby go zamkn????. Pe??na frekwencja, ??wietna zabawa i szale??stwa, kt??rym nie by??o ko??ca. Szczeg??lne zapraszam do zerkni??cia na t?? cz?????? reporta??u na moim blogu. Dzia??o si?? du??o i to nie tylko na parkiecie.  Niesamowity wrze??niowy dzie??, sp??dzony w przemi??ym towarzystwie. Karolino i Bartku super, ??e mog??em by?? tam z Wami w tych najwa??niejszych chwilach Waszego ??ycia. Zapraszam do ogl??dania wybranych zdj????, a wi??cej znajdziecie w strefie klienta z has??em z mojej wizyt??wki.'
                    }
                    slug={"zdjecia-slubne-restauracja-stek-skawina"}
                    title={"ZDJ??CIA ??LUBNE RESTAURACJA STEK SKAWINA - KAROLINA I BARTEK"}
                    tags={"Fotograf ??lubny Skawina, Zdj??cia ??lubne Restauracja Stek"}
                    date={"22 PA??DZIERNIKA 2017"}
                    menuNames={"KAROLINA i BARTEK"}
                    menuTitle={"ZDJ??CIA ??LUBNE RESTAURACJA STEK SKAWINA"}
                    leadNames={"ANETA i DAMIAN"}
                    leadTitle={"OPACTWO CYSTERS??W W MOGILE, SESJA ZDJ??CIOWA KASPROWY"}
                    leadUrl={"/opactwo-cystersow-w-mogile-sesja-zdjeciowa-kasprowy"}
                    leadImage={process.env.staticImagesPath + "opactwo_cystersow_w_mogile_sesja_zdjeciowa_kasprowy_start.jpg"}
                />
            
        );
};

export default BlogPageComponent;
