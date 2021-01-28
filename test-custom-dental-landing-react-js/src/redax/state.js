const state = {
    about:{
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste officia provident vitae! Architecto asperiores deserunt earum exercitationem hic impedit laudantium, minima pariatur porro quidem quos sequi ullam ut veritatis, voluptates.',
        socialLink: [
            {id: 1, name: 'instagram', link: '#'},
            {id: 2, name: 'facebook', link: '#'},
            {id: 3, name: 'twitter', link: '#'}
        ]
    },
    service:[
        {id: 1, name: 'ДІАГНОСТИКА', price: 80},
        {id: 2, name: 'ХІРУРГІЯ ТА ІМПЛАНТАЦІЯ', price: 1320},
        {id: 3, name: 'ПРОТЕЗУВАННЯ (ОРТОПЕДІЯ)', price: 420},
        {id: 4, name: 'ЕСТЕТИЧНА СТОМАТОЛОГІЯ', price: 520},
        {id: 5, name: 'АНТИСТРЕС-ЛІКУВАННЯ', price: 320},
        {id: 6, name: 'ПРОФ ГІГІЄНА ТА ВІДБІЛЮВАННЯ', price: 120},
    ],
    benefits: [
        { id: 1, img: 'anesthesia.svg', name: 'anesthesia', desc: ' Lorem ipsum dolor sit amet'},
        { id: 2, img: 'bill.svg', name: 'bill', desc: ' Lorem ipsum dolor sit amet'},
        { id: 3, img: 'dentist.svg', name: 'dentist', desc: ' Lorem ipsum dolor sit amet'},
        { id: 4, img: 'implant.svg', name: 'implant', desc: ' Lorem ipsum dolor sit amet'},
        { id: 5, img: 'location.svg', name: 'location', desc: ' Lorem ipsum dolor sit amet'},
        { id: 6, img: 'teeth.svg', name: 'teeth', desc: ' Lorem ipsum dolor sit amet'}
    ],
    contacts: {
        phone: '098-000-0001',
        email: 'mail@mail.com',
        address: [
            {id:1, address: 'Житомир, вул.Київська 99'},
            {id:2, address: 'Житомир, вул.Львівська 12'}
        ],
        workSchedule: {
            work: '09:00-18:00',
            week: '11:00-16:00'
        }
    }
}

export default state