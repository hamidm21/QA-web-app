<template>
    <div class="relative">
        <input @click="opener(5)" type="text" v-bind:placeholder="init" v-bind:value="displayDate" name="" id="" class="w-full pr-4 form-input unselecting">
        <div class="absolute top-0 left-0 px-3 py-2">
            <svg class="h-6 w-6 text-gray-400"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
            </svg>
        </div>
        <transition
        enter-active-class="transition ease-out duration-100"
        enter-class="transform opacity-0 scale-95"
        enter-to-class="transform opacity-100 scale-100"
        leave-active-class="transition ease-in duration-75"
        leave-class="transform opacity-100 scale-100"
        leave-to-class="transform opacity-0 scale-95"
        >
            <div v-show="ddOpen === 5" class="bg-white rounded-lg shadow-lg p-4" style="width: 17rem; z-index:100" >
                <div class="flex justify-between items-center mb-2">
                    <div class="">
                        <span class="text-lg font-bold text-gray-800">{{month}}</span>
                        <span class="mr-1 text-lg text-gray-600 font-normal"> {{year}} </span>
                    </div>
                    <div>
                        <div @click="monthBefore()" class="transition ease-in-out duration-100 inline-flex cursor-pointer hover:bg-gray-200 p-1 rounded-full" >
                            <svg class="h-6 w-6 text-gray-500 inline-flex"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                            </svg>
                        </div>
                        <div @click="monthAhead()" class="transition ease-in-out duration-100 inline-flex cursor-pointer hover:bg-gray-200 p-1 rounded-full" >
                            <svg class="h-6 w-6 text-gray-500 inline-flex"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
                            </svg>  
                        </div>
                    </div>
                </div>
                <div class=" flex flex-wrap my-1 mx-1">
                    <div style="width: 14.28%" v-for="day in days" v-bind:key="day.id">	
                        <div>
                            <div class="text-gray-800 font-bold text-center text-xs">
                                {{day.name}}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex flex-wrap my-1 mx-1">
                        <div style="width: 14.28%" v-for="blankday in blankdays" :key="blankday + 100">
                            <div class="w-full bg-white">

                            </div>
                        </div>	
                        <div @click="setDate(no)" style="width: 14.28%" v-for="no in daysOfTheMonth" v-bind:key="no">	
                            <div>
                                <div v-bind:class="isSelected(no) ? 'bg-primary text-white' : isToday(no) ? 'bg-gray-300': 'text-gray-700' " class="cursor-pointer text-center text-sm leading-none rounded-full leading-loose transition ease-in-out duration-100 hover:bg-primary hover:text-white">
                                    {{no}}
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </transition>
    </div>
</template>

<script>
const moment = require('moment-jalaali')
moment.loadPersian({dialect: 'persian-modern'})

export default {
    mounted() {
        const m = moment()
        this.moment = m;
        this.today = m;
        this.init = m.format('dddd jD jMMMM jYYYY');
        if (this.$props.current) {
            const d = moment(new Date(this.$props.current))
                this.year = d.jYear();
                this.month = d.format('jMMMM');
                this.setDate(d.jDate())
        } else {
            this.year = m.jYear();
            this.month = m.format('jMMMM');
        }
        this.generateCalender();
    },
    methods: {
        formatDate(date) {
            var d = new Date(date),
                month = '' + (d.getMonth() + 1),
                day = '' + d.getDate(),
                year = d.getFullYear();

            if (month.length < 2) 
                month = '0' + month;
            if (day.length < 2) 
                day = '0' + day;

            return [year, month, day].join('-');
        },
        generateCalender() {
            const firstDay = this.days.filter(x => x.name === this.moment.format('dd'))
            let blankdaysArray = []
            for (var i = 0 ; i <= firstDay[0].id - 1; i++) {
                blankdaysArray.push(i);
            }
            this.blankdays = blankdaysArray;
            let monthDays = [];
            const daysInMonth = moment.jDaysInMonth(this.moment.jYear(), this.moment.jMonth());
            for (let i = 1; i <= daysInMonth; i++) {
                monthDays.push(i);
            }
            this.daysOfTheMonth = monthDays;
        },
        monthAhead() {
            this.moment = this.moment.add(1, 'jMonth')
            this.year = this.moment.jYear();
            this.month = this.moment.format('jMMMM');
            this.generateCalender(this.moment)
        },
        monthBefore() {
            this.moment = this.moment.subtract(1, 'jMonth')
            this.year = this.moment.jYear();
            this.month = this.moment.format('jMMMM');
            this.generateCalender(this.moment)
        },
        isToday(day) {
            const m = moment(new Date())
            if ( m.format('jMMMM') === this.month && m.jDate() === day ) {
                return true;
            } else {
                return false;
            }
        },
        isSelected(day) {
            const m = moment(this.selectedDate)
            if ( m.format('jMMMM') === this.month && m.jDate() === day ) {
                return true;
            } else {
                return false;
            }
        },
        setDate(day) {
            const m = moment(`${this.year}/${this.month}/${day}`, 'jYYYY/jMMMM/jD');
            this.selectedDate = m;
            this.displayDate = m.format('dddd jD jMMMM jYYYY')
            this.$props.entry ?
            this.$store.commit("setOfferDate", this.formatDate(new Date(m))):
            this.$store.commit("setFormDate", this.formatDate(new Date(m)));
            this.$props.ddOpen = 0;
        }
    },
    props: [
        'ddOpen',
        'opener',
        'entry',
        'current'
    ],
    data() {
        return {
            init: '',
            year: '',
            month: '',
            moment: '',
            selectedDate: '',
            displayDate: '',
            blankdays: [],
            daysOfTheMonth: [
                1,2,3,4,5,6,7,8,9,10
            ],
            days: [
                {
                    id: 1,
                    name: 'ش',
                },
                {
                    id: 2,
                    name: 'ی',
                },
                {
                    id: 3,
                    name: 'د',
                },
                {
                    id: 4,
                    name: 'س',
                },
                {
                    id: 5,
                    name: 'چ',
                },
                {
                    id: 6,
                    name: 'پ',
                },
                {
                    id: 7,
                    name: 'ج',
                },
            ]
        }
    }
}
</script>