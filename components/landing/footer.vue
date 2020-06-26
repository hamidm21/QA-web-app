<template>
    <div class="footer-sec bg-secondary flex flex-col justify-center items-center text-white" style="direction: rtl;">
        <div class="flex flex-col sm:flex-row" style="height: 80%; width: 90%">
            <div class="flex flex-col justify-between w-full sm:w-1/2">
                <img class="mt-8" src="~/assets/icons/full_white.png" alt="لوگو حل یاب" style="width: 163px; ">
                <p class="w-full p-4 pb-8 text-lg">
                    اولین سامانه حل سوال به صورت مناقصه ای که به صورت آنلاین در <br> 7 شبانه روز به صورت 24 ساعته می باشد. اساتید حل یاب از فارغ <br> التحصیلان بهترین دانشگاه ها و رتبه های برتر رشته خود هستند
                </p>
            </div>
            <hr class="w-full sm:hidden">
            <div class="flex flex-col sm:flex-row w-full sm:w-1/2">
                <div class="flex flex-col justify-center items-center sm:items-start p-4 w-full sm:w-1/2">
                    <nuxt-link to="/about_us">
                        <p class="p-2 font-bold">
                            سوالات متداول
                        </p>
                    </nuxt-link>
                    <nuxt-link to="/about_us">
                        <p class="p-2 font-bold">
                            مقررات و حریم خصوصی
                        </p>
                    </nuxt-link>
                    <p class="p-2 font-bold">
                        دانلود اپلیکیشن
                    </p>
                    <nuxt-link to="/about_us">
                        <p class="p-2 font-bold">
                            درباره ما
                        </p>
                    </nuxt-link>
                    <nuxt-link to="/contact_us">
                        <p class="p-2 font-bold">
                            تماس با ما
                        </p>
                    </nuxt-link>
                </div>
                <div class="flex flex-col justify-center items-center p-4 w-full sm:w-1/2">
                    <img class="pb-4 hidden sm:block" src="~/assets/icons/full_white.png" alt="لوگو حل یاب" style="width: 60% ">
                    <div class="flex justify-center">
                        <img class="pt-2" style="width: 80%;" src="~/assets/icons/sabt.png" alt="نشان ملی ثبت">
                        <img class="pt-2" style="width: 80%;" src="~/assets/icons/enamad.png" alt="نماد الکترونیک">
                    </div>
                </div>
            </div>
        </div>
        <hr class="p-2" style="width:90%;">
        <div class="flex flex-col justify-center items-center" style="height: 20%;">
            <p class="font-bold pb-2">
                تمام حقوق این وبسایت برای حل یاب محفوظ است.
            </p>
            <p class="font-bold">
                ۱۳۹۷-۱۳۹۹ &#9400;
            </p>
        </div>
    </div>
</template>

<style>

.footer-sec {
    min-height: 37vh;
    width: 100vw;
    max-width: 100%;
    margin: 0 auto;
}


</style>