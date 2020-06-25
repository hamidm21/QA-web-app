<template>
    <div class="app-sec">
        <div class="flex-col">
            <main class="bg-white font-montserrat bg-blue-250">
                <div class=" container mx-auto px-6 sm:px-12 flex flex-col-reverse sm:flex-row items-center">
                    <div class="sm:w-2/5 flex flex-col items-start mt-8 sm:mt-0">
                        <h1 class="text-4xl lg:text-6xl leading-none mb-4 text-blue-800 "><strong class="font-black text-right">سوال های </strong> شما</h1>
                        <p class="lg:text-lg mb-4 sm:mb-12 text-blue-900">در این بخش سوالات دوستانتان را مشاهده میکنید</p>
                    </div>
                    <div class="sm:w-3/5">
                    <img src="~/assets/img/allque.svg" alt="تمام سوالات">
                    </div>
                </div>
            </main>
        </div>
    </div>
</template>

<style>

.app-sec {
    direction: rtl;
    min-height: 100vh;
    width: 100vw;
    max-width: 100%;
}

.responsive-table {
    display: block;
    overflow-x: auto;
    width: 100%;
    -webkit-overflow-scrolling: touch;
}
</style>