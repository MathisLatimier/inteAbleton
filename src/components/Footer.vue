<script setup>
import faceBook from '@/assets/img/Facebook.png'
import XLogo from "@/assets/img/X_logo.svg"
import youtube from "@/assets/img/Youtube_logo.png"
import instagram from '@/assets/img/instagram.svg'
import tikTok from '@/assets/img/logo-tiktok.svg'
import ableton from '@/assets/Ableton-logo.svg'
</script>

<template>
    <footer class="border-t-2 border-[#eee]">
        <div class="container mx-auto">
            <h1>Ableton</h1>
            <div class="grid grid-cols-4 gap-4 gap-y-20 mb-20 liste">
                <section class="col-span-1">
                    <ul>
                        <li><a href="">Register Live or Push</a></li>
                        <li><a href="">About Ableton</a></li>
                        <li><a href="">Jobs</a></li>
                        <li class="flex gap-4 networks">
                            <a href=""><img :src="faceBook" alt=""></a>
                            <a href=""><img :src="XLogo" alt=""></a>
                            <a href=""><img :src="youtube" alt=""></a>
                            <a href=""><img :src="instagram" alt=""></a>
                            <a href=""><img :src="tikTok" alt=""></a>
                        </li>
                    </ul>
                </section>
                <section class="col-span-1">
                    <h2>Education</h2>
                    <ul>
                        <li><a href="">Offers for students and teachers</a></li>
                        <li><a href="">Ableton for the Classroom</a></li>
                        <li><a href="">Ableton for Colleges and Universities</a></li>
                    </ul>
                </section>
                <section class="col-span-2">
                    <h2>Sign up to our newsletter</h2>
                    <p>Enter your email address to stay up to date with the latest offers, tutorials, downloads, surveys and more.</p>
                    <form action="" class="w-full flex newsletter-form">
                        <input type="text" class="bg-[#eee] w-full" placeholder="Email Address">
                        <button type="submit" class="bg-bleu-fonce">Sign up</button>
                    </form>
                    
                </section>
                <section class="col-span-1">
                    <h2>Community</h2>
                    <ul>
                        <li><a href="">Find Ableton User Groups</a></li>
                        <li><a href="">Find Certified Training</a></li>
                        <li><a href="">Become a Certified Trainer</a></li>
                    </ul>
                </section>
                <section class="col-span-1">
                    <h2>Language and Location</h2>
                    <form action="" class="select-form w-full flex gap-1">
                        <select name="lang" id="lang" class="select-lang w-full basis-1/3 bg-[#eee]">
                            <option value="en">English</option>
                            <option value="fr">Francais</option>
                        </select>
                        <select name="location" id="loc" class="select-loc w-full basis-2/3 bg-[#eee]">
                            <option value="France">France</option>
                            <option value="England">England</option>
                        </select>
                    </form>
                </section>
                
            </div>
            <section class="text-base flex justify-between mb-20">
                <ul class="flex gap-4">
                    <li><a href="" class="hover:underline">Contact Us</a></li>
                    <li><a href="" class="hover:underline">Press Resources</a></li>
                    <li><a href="" class="hover:underline">Legal Info</a></li>
                    <li><a href="" class="hover:underline">Privacy Policy</a></li>
                    <li><a href="" class="hover:underline">Cookie Settings</a></li>
                    <li><a href="" class="hover:underline">Imprint</a></li>
                </ul>
                <div class="flex gap-6 items-center">
                    <span class="text-nowrap">Made in Berlin</span>
                    <img class="h-6" :src="ableton" alt="">
                </div>
            </section>
        </div>
    </footer>

</template>

<style scoped>
footer {
    padding-top: 5rem;
    font-size: 1.2em;
}
h1 {
    font-size: 4.5rem;
    font-family: 'Futura PT Medium';
}

h2 {
    font-family: 'Futura PT Demi';
}

.newsletter-form {
    width: 60%;
}

.newsletter-form input, .newsletter-form button {
    padding: .4em .75em;
}

.newsletter-form button {
    color: white;
    text-wrap: nowrap;
}

.liste li:not(.networks) a::after {
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

.liste li:not(.networks) a:hover::after {
    transform: translateX(0.3em) rotate(50deg) skew(10deg) translateY(-50%);
}

.networks {
    margin-top: 1rem;
}

.networks a img {
    height: 1.5em;
}

.networks a {
    transition: 100ms ease;
}

.networks a:hover {
    scale: 1.1;
}

</style>