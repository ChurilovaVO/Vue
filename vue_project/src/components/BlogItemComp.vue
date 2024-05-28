<template>
     <div class="blog__item">
            <div class="blog__element">
                        <img class="blog__element_img" :src=blogItem.img alt="blog_photo_1">
                        <div class="blog__disign">
                            <h6 class="blog__disign_title"> {{ blogItem.tag }}</h6>
                        </div>
                        <div class="blog__element_subcontent">
                            <h3 class="blog__item_title">{{ blogItem.title }}</h3>
                            <div class="blog__item_footer">
                                <p class="blog__item_footer_date">
                                    {{ blogItem.date }}
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

</template>

<script>
    export default {
        props: {
            blogItem: Object,
        }
    }
</script>

<style lang="scss" scoped>
@import "@/assets/style/_var.scss";
 .blog__item{
        border: 1px solid #e7e7e7;
        border-radius: 62px;
        padding: 21px;
        width: 382px;
        height: 521px;
        box-sizing: border-box;
        box-shadow: 0 10px 30px 0 rgba(255, 255, 255, 0.25);
        .blog__element{
            position: relative;
            .blog__disign {
                position: absolute;
                width: 124px;
                height: 41px;
                background-color: #fff;
                border-radius: 8px 8px 8px 0;
                top: 228px;
                left: 21px;
                &_title{
                    font-family: $font-family;
                    font-weight: 400;
                    font-size: 16px;
                    line-height: 150%;
                    letter-spacing: 0.01em;
                    text-transform: capitalize;
                    color: #4d5053;
                    text-align: center;
                    padding-top: 8px;
                }
            }
          &_img{
            border-radius: 45px 45px 0 0;
          }
          &_subcontent{
            .blog__item_title{
                font-family:$second-family;
                font-weight: 400;
                font-size: 25px;
                line-height: 125%;
                letter-spacing: 0.02em;
                color: #292f36;
                padding-bottom: 14px;
                padding-top: 10px;
                width: 305px;
            }
            .blog__item_footer{
                display: flex;
                justify-content: space-between;
                align-items: center;
                &_date{
                    font-family: $font-family;
                    font-weight: 400;
                    font-size: 16px;
                    line-height: 150%;
                    letter-spacing: 0.01em;
                    text-transform: capitalize;
                    color: #4d5053;
                }
                &_button{
                    border-radius: 100%;
                    background-color: #f4f0ec;
                    width: 52px;
                    border: none;
                    height: 52px;
                    &:hover{
                        background-color: $colorSite; 
                    }   
                    &:active{
                        transform: scale(0.95);
                    }  
                }
            }
          }
          
        }
        &:hover .blog__element_img{
            opacity: 0.8;
        }
        &:hover {
            transform: scale(1.05);
            box-shadow: 0 10px 30px 0 rgba(255, 255, 255, 0.25);
            background: #f4f0ec;
        }
        &:hover .blog__item_footer{
            &_button{
                background-color: #fff;
            }
        }
    }
</style>