<template>
    <div class="flex flex-col items-center my-12">
    <div class="flex text-gray-700">
        <div @click="changePage(page - 1)" class="h-12 w-12 ml-1 flex justify-center items-center rounded-full border cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right w-6 h-6">
                <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
        </div>
        <div class="flex h-12 font-medium rounded-full border">
            <div v-if="first" @click="changePage(1)" class="w-12 sm:flex justify-center items-center hidden cursor-pointer leading-5 transition duration-150 ease-in rounded-full">...</div>
            <div v-for="p in pages" v-bind:key="p" @click="changePage(p)" class="w-12 sm:flex justify-center items-center hidden cursor-pointer leading-5 transition duration-150 ease-in rounded-full" v-bind:class="p === page ? 'bg-primary text-white' : ''">{{p}}</div>
            <div class="w-12 h-12 sm:hidden flex justify-center items-center cursor-pointer leading-5 transition duration-150 ease-in rounded-full bg-primary text-white">{{page}}</div>
            <div v-if="last" @click="changePage(ps)" class="w-12 sm:flex justify-center items-center hidden cursor-pointer leading-5 transition duration-150 ease-in rounded-full">...</div>
        </div>
        <div @click="changePage(page + 1)" class="h-12 w-12 mr-1 flex justify-center items-center rounded-full border cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-left w-6 h-6">
                <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
        </div>
    </div>
</div>
</template>

<script>
export default {
    mounted() {
        this.paginator(this.$props.ps, this.$props.p);
    },
    methods: {
        paginator(pages, page) {
            const ps = pages
            const p = page
            switch (true) {
                case ps <= 5:
                    this.pages = ps
                    this.page = p
                    this.last = false
                    this.first = false
                    break;
                case ps > 5 && p <= 3:
                    this.pages = [1,2,3,4]
                    this.page = p
                    this.last = true
                    this.first = false
                    break;
                case ps > 5 && p > 3 && ps - p >= 3:
                    this.pages = [p - 1 ,p, p + 1]
                    this.page = p
                    this.last = true
                    this.first = true
                    break;
                case ps > 5 && p > 3 && ps - p < 3:
                    this.pages = [ps - 2 ,ps - 1, ps]
                    this.page = p
                    this.last = false
                    this.first = true
                    break;
                default:
                    break;
            }
        }
    },
    watch: {
        p: function() {
            this.paginator(this.ps, this.p)
        }
    },
    data() {
        return {
            pages: 0,
            page: 0,
            last: false,
            first: false
        }
    },
    props: [
        "p",
        "ps",
        "changePage"
    ]
}
</script>

<style>

.pagination
{
    margin-top: 15px;

    display: flex;

    padding-left: 0;

    list-style: none;

    border-radius: .375rem;


}

.page-link
{
    line-height: 1.25;

    position: relative;

    display: block;

    margin-left: -1px;
    padding: .5rem .75rem;

    color: #8898aa;
    border: 1px solid #dee2e6; 
    background-color: #fff;
}
.page-link:hover
{
    z-index: 2;

    text-decoration: none;

    color: #8898aa;
    border-color: #dee2e6; 
    background-color: #dee2e6;
}
.page-link:focus
{
    z-index: 2;

    outline: 0;
    box-shadow: none;
}
.page-link:not(:disabled):not(.disabled)
{
    cursor: pointer;
}

.page-item .page-link
{
    margin-left: 0.2rem;

    border-radius: 9999px;
}

.page-item.active .page-link
{
    z-index: 1;

    color: #fff;
    border-color: #17c698; 
    background-color: #17c698;
}

.page-item.disabled .page-link
{
    cursor: auto;
    pointer-events: none;

    color: #8898aa;
    border-color: #dee2e6; 
    background-color: #fff;
}

.pagination-lg .page-link
{
    font-size: 1.25rem;
    line-height: 1.5; 

    padding: .75rem 1.5rem;
}

.pagination-lg .page-item:first-child .page-link
{
    border-top-left-radius: .4375rem;
    border-bottom-left-radius: .4375rem;
}

.pagination-lg .page-item:last-child .page-link
{
    border-top-right-radius: .4375rem;
    border-bottom-right-radius: .4375rem;
}

.pagination-sm .page-link
{
    font-size: .875rem;
    line-height: 1.5; 

    padding: .25rem .5rem;
}

.pagination-sm .page-item:first-child .page-link
{
    border-top-left-radius: .25rem;
    border-bottom-left-radius: .25rem;
}

.pagination-sm .page-item:last-child .page-link
{
    border-top-right-radius: .25rem;
    border-bottom-right-radius: .25rem;
}

</style>