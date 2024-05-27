<template>
        <HeaderComp/>
        <div class="banner">
            <div class="banner__heading">
                <h1 class="banner__heading_title">Articles & News</h1>
                <h5 class="banner__heading_text">Home / Blog</h5>
            </div>
        </div>
        <div class="vueblog center">
            <div class="latest-post">
                <h2 class="latest-post_title">
                    Latest Post
                </h2>
                <div class="latest-post__item">
                    <img class="latest-post_img" src="@/assets/img/latest_post/post_1.png" alt="latest-post">
                    <div class="latest-post__item_content">
                        <h4 class="latest-post__content_title">Low Cost Latest Invented Interior Designing Ideas</h4>
                        <div class="latest-post__item_info">
                            <p class="latest-post__content_text">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.</p>
                            <p class="latest-post__content_text">Lorem Ipsum is not simply random text. It has roots in a piece of classica.</p>
                        </div>
                        <div class="latest-post__content_date">
                            <p class="latest-post__date_text">
                                26 December,2022
                            </p>
                            <button class="latest-post__date_button" @click="$router.push('blog_details')">
                                <svg
                                    width="9"
                                    height="17"
                                    viewBox="0 0 9 17"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M1.77101 15.1855L7.71387 8.49983L1.77101 1.81412"
                                        stroke="#292F36"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                                <router-link to="/blog_details"></router-link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="news_block">
                <div class="news">
                    <h2 class="news_title">
                        Articles & News
                    </h2>
                    <div class="article_and_news">
                        <div class="blog__item" v-for="item in listElements" :key="item.id">
                            <div class="blog__element">
                                <img class="blog__element_img" :src="item.img" alt="фотка">
                                <div class="blog__disign">
                                    <h6 class="blog__disign_title">{{ item.tag }}</h6>
                                </div>
                                <div class="blog__element_subcontent">
                                    <h3 class="blog__item_title">{{ item.subtitle }}</h3>
                                    <div class="blog__item_footer">
                                        <p class="blog__item_footer_date">
                                            {{ item.date }}
                                        </p>
                                        <button class="blog__item_footer_button">
                                            <svg
                                                width="9"
                                                height="16"
                                                viewBox="0 0 9 16"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M1.77144 14.9527L7.71429 8.267L1.77144 1.58128"
                                                    stroke="#292F36"
                                                    stroke-width="2"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="pagination">
                    <button class="subcontent__button">01</button>
                    <button class="subcontent__button">02</button>
                    <button class="subcontent__button">03</button>
                    <button class="subcontent__button">
                        <svg
                            width="9"
                            height="16"
                            viewBox="0 0 9 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M1.55714 15L7.5 8.31429L1.55714 1.62857"
                                stroke="#292F36"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
        <FooterComp/>
</template>

<script>
import HeaderComp from '@/components/HeaderComp.vue'
import FooterComp from '@/components/FooterComp.vue'

export default {
    data(){
                return{
                    listElements: [{
                        id: 1,
                        tag: 'Kitchan Design',
                        img: require('@/assets/img/blog_news/blog_news_photo_1.png'),
                        subtitle: 'Let’s Get Solution For Building Construction Work',
                        date: '26 December,2022',
                    },
                {
                        id: 2,
                        tag: 'Living Design',
                        img: require('@/assets/img/blog_news/blog_news_photo_2.png'),
                        subtitle: 'Low Cost Latest Invented Interior Designing Ideas.',
                        date: '22 December,2022',
                    },
                {
                        id: 3,
                        tag: 'Interior Design',
                        img: require('@/assets/img/blog_news/blog_news_photo_3.png'),
                        subtitle: 'Best For Any Office & Business Interior Solution',
                        date: '25 December,2022',
                    },
                {
                        id: 4,
                        tag: 'Kitchan Design',
                        img: require('@/assets/img/blog_news/blog_news_photo_4.png'),
                        subtitle: 'Let’s Get Solution For Building Construction Work',
                        date: '26 December,2022',
                    },
                {
                        id: 5,
                        tag: 'Living Design',
                        img: require('@/assets/img/blog_news/blog_news_photo_5.png'),
                        subtitle: 'Low Cost Latest Invented Interior Designing Ideas.',
                        date: '22 December,2022',
                    },
                {
                        id: 6,
                        tag: 'Interior Design',
                        img: require('@/assets/img/blog_news/blog_news_photo_6.png'),
                        subtitle: 'Best For Any Office & Business Interior Solution',
                        date: '25 December,2022',
                    }]
                };
            },
    components: {
        HeaderComp,FooterComp,
    }, 
}

</script>