<script setup>
import headerImg from '@/assets/img/headerImage.avif'
import firstPhoto from '@/assets/img/first-photo.jpg'
import secondPhoto from '@/assets/img/seconde-photo.jpg'
import fifthPhoto from '@/assets/img/fifth-photo.jpg'
import thirdPhoto from '@/assets/img/third-photo.jpg'
import fourthPhoto from '@/assets/img/fourth-photo.jpg'
import PosterPhoto from '@/assets/img/poster.avif'
import sixthPhoto from '@/assets/img/sixth-photo.jpg'
import seventhphoto from '@/assets/img/seventh-photo.jpg'
import eighthPhoto from '@/assets/img/eighth-photo.jpg'
</script>
<template>
    <header class="relative w-full" >
        <div class="header-image" :style="{backgroundImage: `url(${headerImg})`}"></div>
        <h1 class="title text-rouge">Ableton</h1>
    </header>
    <section class="first-section mx-auto">
        <h2 class="text-3xl mb-8">
            We make <span>Live</span>, <span>Push</span>, <span>Note</span> and <span>Link</span> — unique software and hardware for music creation and performance. With these products, our community of users creates amazing things.
        </h2>
        <p class="text-lg">Ableton was founded in 1999 and released the first version of Live in 2001. Our products are used by a community of dedicated musicians, sound designers, and artists from across the world.</p>
    </section>
    <section class="first-image">
        <div class="carre bg-jaune absolute right-0 "></div>
        <div class="photo-1" :style="{backgroundImage: `url(${firstPhoto})`}"></div>
        <div class="photo-2" :style="{backgroundImage: `url(${secondPhoto})`}"></div>
    </section>
    <section class="first-section mx-auto">
        <h2 class="text-3xl mb-8">
            Making music isn’t easy. It takes time, effort, and learning. But when you’re in the flow, it’s incredibly rewarding.
        </h2>
        <p class="text-lg">We feel the same way about making Ableton products. The driving force behind Ableton is our passion for what we make, and the people we make it for.</p>
    </section>
    <section class="yt-video">
        <iframe class="mx-auto" src="https://www.youtube.com/embed/9SbnhgjeyXA?si=8j2sh9nctSCotbkM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </section>
    <section class="first-section mx-auto">
        <h2 class="text-3xl mb-8">
            We are more than 350 people from 30 different countries divided between our headquarters in Berlin and our offices in Los Angeles and Tokyo.
        </h2>
        <p class="text-lg">Most of us are active musicians, producers, and DJs, and many of us use Live and Push every day. We come from a wide range of cultural and professional backgrounds. Some of us have PhDs, some are self-taught, and most of us are somewhere in between. What connects us is the shared belief that each of us has the skills and knowledge to contribute to something big: helping to shape the future of music culture.</p>
    </section>
    <section class="second-image">
        <div class="carre bg-vert absolute"></div>
        <div class="flex w-full h-full">
            <div class="flex flex-col w-full h-full justify-between">
                <div class="photo-1" :style="{backgroundImage: `url(${thirdPhoto})`}"></div>
                <div class="photo-2" :style="{backgroundImage: `url(${fourthPhoto})`}"></div>
            </div>
            
            <div class="photo-3 my-auto" :style="{backgroundImage: `url(${fifthPhoto})`}"></div>
    
        </div>
    </section>
    <section class="first-section mx-auto">
        <h2 class="text-3xl mb-8">
            We believe it takes focus to create truly outstanding instruments. We only work on a few products and we strive to make them great.
        </h2>
        <p class="text-lg">Rather than having a one-size-fits-all process, we try to give our people what they need to work their magic and grow. We’ve learned that achieving the best results comes from building teams that are richly diverse, and thus able to explore problems from a wider set of perspectives. We don’t always agree with each other, but opinion and debate are valued and openly encouraged.</p>
    </section>
    <header class="relative w-full" >
        <div class="header-image" :style="{backgroundImage: `url(${PosterPhoto})`}"></div>
        <!-- <h1 class="title text-rouge">Ableton</h1> -->
    </header>
    <section class="first-section mx-auto">
        <h2 class="text-3xl mb-8">
            We’re passionate about what we do, but we’re equally passionate about improving who we are.
        </h2>
        <p class="text-lg">We work hard to foster an environment where people can grow both personally and professionally, and we strive to create a wealth of opportunities to learn from and with each other.</p>
        <p class="text-lg mt-4">Alongside an internal training program, employees are actively supported in acquiring new knowledge and skills, and coached on applying these in their daily work. In addition, staff-organized development and music salons are a chance to discuss new technologies, production techniques and best practices.</p>
    </section>
    <section class="third-image ">
        <div class="carre bg-violet absolute"></div>
        <div class="photo-1" :style="{backgroundImage: `url(${sixthPhoto})`}"></div>
        <div class="photo-2" :style="{backgroundImage: `url(${seventhphoto})`}"></div>
    </section>
    <section class="first-section mx-auto">
        <h2 class="text-3xl mb-8">
            We want our employees to love it here. Since we’re looking for exceptional talent from around the world, we will do everything we can to make your transition as easy as possible.
        </h2>
        <p class="text-lg">If you're joining us in Berlin, we'll help with relocation and paperwork. We’ll even provide you with free German or English lessons. Plus, working in Germany means you can expect comprehensive health insurance for you and your family, as well as generous maternity and paternity leave. Office hours are flexible, but it’s not all work; we have several company and team outings throughout the year as well as a variety of fun, informal small-group activities.</p>
    </section>
    <section class="last-section grid grid-cols-1 xl:grid-cols-2">
        <div class="photo-1 w-full" :style="{backgroundImage: `url(${eighthPhoto})`}"></div>
        <div class="blue-section bg-bleu-clair flex flex-col p-32">
            <div class="text-body my-auto">
                <h2 class="text-3xl">We’re really proud of the work we’ve done so far. But there’s so much more to come. If you’d like to be a part of it, please join us.</h2>
                <a href="" class="text-bleu-fonce text-3xl">See latest jobs</a>
            </div>

            
        </div>

    </section>

</template>

<style scoped>


.text-body a::after {
    box-sizing: border-box;
    display: inline-block;
    width: 0.3em;
    height: 0.3em;
    margin-left: 0.1em;
    content: '';
    border-style: solid;
    border-width: 0.09em 0.09em 0 0;
    transform: rotate(50deg) skew(10deg) translateY(-50%);
    transition: 100ms ease;
}

.text-body a:hover::after {
    transform: translateX(0.3em) rotate(50deg) skew(10deg) translateY(-50%);
}

.last-section {
    margin-left: auto;
    margin-right: auto;
    max-width: 90%;
    margin-bottom: 8em;
}

.last-section .photo-1 {
    /* width: 50%; */
    height: 70vh;
    background-size: cover;
    background-position: 50% 50%;

}

.last-section .blue-section {
    font-family: 'Futura PT Medium';

    
}

.last-section .blue-section h2{
    margin-bottom: 2rem;
}

header {
    height: calc(100vh - 131px);
}

.title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 9em;
    font-family: 'Futura PT Medium';
}

.header-image {
    background-repeat: no-repeat;
    width: 90%;
    margin: auto;
    height: 100%;
    background-size: cover;
    background-position: 50% 50%;
}

.first-section {
    width: 50%;
    margin-bottom: 8em;
    margin-top: 8em;

}

.first-section h2 {
    font-family: 'Futura PT Medium';
}

.first-section h2 span {
    color: #0000ff;
}

.first-image {
    padding-top: 7vw;
    padding-bottom: 7vw;
    height: 55vw;
    position: relative;
    display: flex;
    align-items: center;
}

.carre {
    
    z-index: 0;
    width: 58%;
    top: 0;
    bottom: 0;
}

.first-image .photo-1 {
    display: inline-block;
    position: relative;
    margin-left: 10%;
    z-index: 20;
    height: 95%;
    aspect-ratio: 1;
    background-size: cover;
    background-position: 50% 50%;
}

.first-image .photo-2 {
    display: inline-block;
    position: relative;
    margin-left: 10%;
    z-index: 20;
    height: 60%;
    aspect-ratio: 1.3;
    background-size: cover;
    background-position: 50% 50%;
}

.second-image {
    padding-top: 7vw;
    padding-bottom: 7vw;
    height: 65vw;
    position: relative;
    display: flex;
    align-items: center;
}

.second-image .photo-1, .second-image .photo-2 {
    width: 28vw;
    aspect-ratio: 1.3;
    z-index: 20;
    background-size: cover;
    background-position: 50% 50%;
    margin-left: 5vw;
}

.second-image .photo-3 {
    display: inline-block;
    /* position: relative; */
    /* margin-left: 10%; */
    z-index: 20;
    width: 70vw;
    margin-right: 5vw;
    height: min-content;
    aspect-ratio: 1;
    background-size: cover;
    background-position: 50% 50%;
}

.third-image {
    /* padding-right: auto;
    padding-left: auto; */
    height: 50vw;
    width: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.third-image .carre {
    margin-left: 50%;
    transform: translate(-50%);
    height: 100%;
    width: 60%;
}

.third-image .photo-2 {
    display: inline-block;
    position: relative;
    right: 0;
    
    z-index: 20;
    height: 80%;
    aspect-ratio: 1;
    background-size: cover;
    background-position: 50% 50%;
}

.third-image .photo-1 {
    display: inline-block;
    position: relative;
    margin-left: 10%;
    margin-right: 10%;
    z-index: 20;
    height: 50%;
    aspect-ratio: 1.3;
    background-size: cover;
    background-position: 50% 50%;
}

.yt-video iframe {
    width: 758px;
    height: 426px;
}
</style>