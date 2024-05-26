const articlecomp = {
    props:{
        article: Object,
    },
    
    template: ` 
    
    <article class="blog__details_sort">
                    <h2 class="blog__details_title">
                        {{ article.title }}
                    </h2>
                    <img class="blog__details_img" :src=article.imgPath alt="{{ article.imgAlt }}">
                    <div class="sort__date">
                        <p class="sort__date_text">{{ article.date }}</p>
                        <p class="sort__date_text">Interior / Home / Decore</p>
                    </div>
                    <p class="blog__details_text">
                        {{ article.text1 }}
                    </p>
                    <br>
                    <p class="blog__details_text">
                       {{ article.text2 }}
                    </p>
                </article>`
            

    
};