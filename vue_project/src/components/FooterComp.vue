<template>
   <div class="footer center">
            <div class="interno">
                <div class="logo">
                    <svg
                        width="35"
                        height="34"
                        viewBox="0 0 35 34"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M0.5 34.0003H13.9588V24.499C13.9588 22.4853 15.5898 20.8543 17.6035 20.8543C19.6172 20.8543 21.2482 22.4853 21.2482 24.499V34.0003H34.4975V0C15.7211 0 0.5 15.2211 0.5 34.0003Z" fill="#CDA274"/>
                    </svg>
                    <h3 class="logo__title">Interno</h3>
                </div>
                <p class="footer__text">It is a long established fact that a reader will be distracted lookings.</p>
                <div class="interno__icons">
                    <svg
                        width="19"
                        height="16"
                        viewBox="0 0 19 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M16.6367 4.59375C16.6367 4.76953 16.6367 4.91016 16.6367 5.08594C16.6367 9.97266 12.9453 15.5625 6.16016 15.5625C4.05078 15.5625 2.11719 14.9648 0.5 13.9102C0.78125 13.9453 1.0625 13.9805 1.37891 13.9805C3.10156 13.9805 4.68359 13.3828 5.94922 12.3984C4.33203 12.3633 2.96094 11.3086 2.50391 9.83203C2.75 9.86719 2.96094 9.90234 3.20703 9.90234C3.52344 9.90234 3.875 9.83203 4.15625 9.76172C2.46875 9.41016 1.20312 7.93359 1.20312 6.14062V6.10547C1.69531 6.38672 2.29297 6.52734 2.89062 6.5625C1.87109 5.89453 1.23828 4.76953 1.23828 3.50391C1.23828 2.80078 1.41406 2.16797 1.73047 1.64062C3.55859 3.85547 6.30078 5.33203 9.35938 5.50781C9.28906 5.22656 9.25391 4.94531 9.25391 4.66406C9.25391 2.625 10.9062 0.972656 12.9453 0.972656C14 0.972656 14.9492 1.39453 15.6523 2.13281C16.4609 1.95703 17.2695 1.64062 17.9727 1.21875C17.6914 2.09766 17.1289 2.80078 16.3555 3.25781C17.0938 3.1875 17.832 2.97656 18.4648 2.69531C17.9727 3.43359 17.3398 4.06641 16.6367 4.59375Z" fill="#292F36"/>
                    </svg>
                    <svg
                        width="17"
                        height="16"
                        viewBox="0 0 17 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M4.14062 16V5.48828H0.871094V16H4.14062ZM2.48828 4.08203C3.54297 4.08203 4.38672 3.20312 4.38672 2.14844C4.38672 1.12891 3.54297 0.285156 2.48828 0.285156C1.46875 0.285156 0.625 1.12891 0.625 2.14844C0.625 3.20312 1.46875 4.08203 2.48828 4.08203ZM16.3398 16H16.375V10.2344C16.375 7.42188 15.7422 5.24219 12.4375 5.24219C10.8555 5.24219 9.80078 6.12109 9.34375 6.92969H9.30859V5.48828H6.17969V16H9.44922V10.7969C9.44922 9.42578 9.69531 8.125 11.3828 8.125C13.0703 8.125 13.1055 9.67188 13.1055 10.9023V16H16.3398Z" fill="#292F36"/>
                    </svg>
                </div>
            </div>
            <div class="pages">
                <h4 class="footer__title">
                    Pages
                </h4>
                <ul class="footer__nav">
                    
                    <li class="footer__nav_link">
                        <router-link to="/" class="footer__text">Home</router-link>
                    </li>
                    <li class="footer__nav_link">
                        <a href="#" class="footer__text">Project</a>
                        </li>
                    <li class="footer__nav_link">
                        <router-link to="/blog" class="footer__text">Blog</router-link>
                    </li>
                </ul>
            </div>
            <div class="services"></div>
            <div class="contact">
                <h4 class="footer__title">Contact</h4>
                <p class="footer__text">55 East Birchwood Ave. Brooklyn, New York 11201</p>
                <p class="footer__text footer__email">
                    contact@interno.com
                </p>
                <p class="footer__text">(123) 456 - 7890</p>
            </div>
        </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
@import "@/assets/style/_var.scss";

.footer{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding-bottom: 134px;
}

.interno{
    .logo{
        padding-bottom: 18px;
    }
    .footer__text{
       width: 393px;
    }
    .interno__icons{
        padding-top: 31px;
        display: flex;
        gap: 54px;
    }
}
.pages{
    .footer__title{
        padding-bottom: 9px;
    }
    .footer__nav{
        list-style-type:none;
        &_link{
            .footer__text{
                line-height: 300%;
            } 
            &:hover .footer__text{
                color:$colorSite
            }
        } 
              
         
    }
}
    
.services{
    width: 120px;
}
.contact{
    .footer__title{
        padding-bottom: 26px;
    }
    .footer__text{
        width: 258px;
    }
    .footer__email{
        line-height: 500%;
    }
}

.footer__title{
    font-family: $second-family;
    font-weight: 400;
    font-size: 25px;
    line-height: 125%;
    color: #292f36;
}
.footer__text{
        font-family: $font-family;
        font-weight: 400;
        font-size: 22px;
        line-height: 150%;
        letter-spacing: 0.01em;
        color: #4d5053;
    }
</style>