import BlogPageComponentNew from "../components/blogPageComponentNew";

const BlogPageComponent = () => {
    
        let images = [
            { imageSrc: "/static/blog/2019/10/reverse_recruiting_smart_0001.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/10/reverse_recruiting_smart_0002.jpg", height: 383 },
            { imageSrc: "/static/blog/2019/10/reverse_recruiting_smart_0003.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/10/reverse_recruiting_smart_0004.jpg", height: 383 },
            { imageSrc: "/static/blog/2019/10/reverse_recruiting_smart_0005.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/10/reverse_recruiting_smart_0006.jpg", height: 383 },
            { imageSrc: "/static/blog/2019/10/reverse_recruiting_smart_0007.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/10/reverse_recruiting_smart_0008.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/10/reverse_recruiting_smart_0009.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/10/reverse_recruiting_smart_0010.jpg", height: 383 },
            { imageSrc: "/static/blog/2019/10/reverse_recruiting_smart_0011.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/10/reverse_recruiting_smart_0012.jpg", height: 383 },
            { imageSrc: "/static/blog/2019/10/reverse_recruiting_smart_0013.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/10/reverse_recruiting_smart_0014.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/10/reverse_recruiting_smart_0015.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/10/reverse_recruiting_smart_0016.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/10/reverse_recruiting_smart_0017.jpg", height: 383 },
            { imageSrc: "/static/blog/2019/10/reverse_recruiting_smart_0018.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/10/reverse_recruiting_smart_0019.jpg", height: 383 },
            { imageSrc: "/static/blog/2019/10/reverse_recruiting_smart_0021.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/10/reverse_recruiting_smart_0020.jpg", height: 383 },
            { imageSrc: "/static/blog/2019/10/reverse_recruiting_smart_0022.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/10/reverse_recruiting_smart_0023.jpg", height: 763 },
            { imageSrc: "/static/blog/2019/10/reverse_recruiting_smart_0024.jpg", height: 762 }
        ];

        return (
            
                <BlogPageComponentNew
                    slide={process.env.staticImagesPath + "reverse_recruiting_smart.jpg"}
                    images={images}
                    headTitle={"Fotograf na event firmowy Krak??w, Reverse Recruitment Event w SmartRecruiters"}
                    headDescription={
                        "Reverse Recruitment to event skupiaj??cy uwag?? os??b zwi??zanych z bran???? HR, kt??rego celem by??o zapoznanie kandydat??w z dobrymi praktykami pozwalaj??cymi skutecznie znale???? prac??."
                    }
                    headKeywords={"Fotograf na event firmowy Krak??w, Reverse Recruitment Event w SmartRecruiters"}
                    headUrl={"https://99foto.pl/reverse-recruiting-smartow"}
                    entryContentP1={
                        "Reverse Recruitment to event skupiaj??cy uwag?? os??b zwi??zanych z bran???? HR, kt??rego celem by??o zapoznanie kandydat??w z dobrymi praktykami pozwalaj??cymi skutecznie znale???? prace."
                    }
                    entryContentP2={""}
                    slug={"reverse-recruiting-smartow"}
                    title={"FIRMOWE SPOTKANIE SMART??W - REVERSE RECRUITMENT"}
                    tags={"Fotograf na event firmowy Krak??w, reverse recruitment smart recruiters"}
                    date={"29 pa??dziernika 2019"}
                    menuNames={"SMARTRECRUITERS"}
                    menuTitle={"FIRMOWE SPOTKANIE SMART??W - REVERSE RECRUITMENT"}
                    leadNames={"SMARTRECRUITERS"}
                    leadTitle={"FIRMOWE SPOTKANIE SMART??W - TURNIEJ PI??KARZYK??W"}
                    leadUrl={"/firmowe-spotkanie-smartow"}
                    leadImage={process.env.staticImagesPath + "impreza_smartow.jpg"}
                />
            
        );
};

export default BlogPageComponent;
