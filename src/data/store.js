import { reactive } from 'vue';

export const store = reactive({
    navBarHeader: {
        classText: 'my-text-secondary',
        srcLogo: './images/logo.png',
        tabs: [
            {
                title: 'Home',
                href: '#',
            },
            {
                title: 'About Us',
                href: '#',
            },
            {
                title: 'Portfolio',
                href: '#',
            },
            {
                title: 'Our Process',
                href: '#',
            },
            {
                title: 'Pricing',
                href: '#',
            },
            {
                title: 'Blog',
                href: '#',
            },
            {
                title: 'Contact',
                href: '#',
            },

        ],
        btn: {
            title: 'Get a Quote',
            classBg: 'my-btn-light'
        }
    },
    navBarFooter: {
        classText: 'my-text-primary',
        srcLogo: './images/footer-logo.png',
        tabs: [

            {
                title: 'About Us',
                href: '#',
            },
            {
                title: 'Portfolio',
                href: '#',
            },

            {
                title: 'Pricing',
                href: '#',
            },
            {
                title: 'Career',
                href: '#',
            },
            {
                title: 'Contact',
                href: '#',
            },

        ],

    },
    titleSection: {
        present: {
            classHead: 'my-text-terciary',
            classText: 'my-text-primary',
            center: true,
            headText: 'Our Love For Animation',
            textH2: 'We\'re Storytelling Expert With Creative Smarts',
            subtitle: 'Our culture inspires the creative and innovative spirit found throughout our Studio. We breathe life into new ideas!'
        },
        feat: {
            classHead: 'my-text-terciary',
            classText: 'my-text-primary',
            center: true,
            headText: 'Our Works',
            textH2: 'Featured Productions',
            subtitle: 'Here\'s just a small sample of some of those projects that we\'re quite proud of. If you\'re looking for something specific feel free to get in contact with us.'
        },
        ourProcess: {
            classHead: 'my-text-terciary',
            classText: 'my-text-primary',
            center: false,
            headText: 'Our Process',
            textH2: 'Our Process for Your Animation Production',
            subtitle: 'We have an effective process for working on animation'

        },
        ourTeam: {
            classHead: 'my-text-terciary',
            classText: 'my-text-primary',
            center: true,
            headText: 'Anidio Magic Team Member',
            textH2: 'Let Us Animate Your Project',
            subtitle: 'We create new worlds!Let’s collaborate and create engaging, effective, award-winning animations'
        },
        whyUs: {
            classHead: 'my-text-terciary',
            classText: 'my-text-primary',
            center: true,
            headText: 'Why Anidio studio?',
            textH2: 'We Love Our Clients',
            subtitle: 'We are trusted throughout adland and have a wealth of recommendations from start-ups to renowned global brands.'
        },
        contactUs: {
            classHead: 'my-text-contrast',
            classText: 'my-text-secondary',
            center: true,
            headText: 'We Create New Worlds!',
            textH2: 'Want Tips On Your Storytelling?',
            subtitle: 'Join our newsletter for tips on how to elevate your brand through storytelling'
        },


    },
    sponsorList: ['./images/sponsor1.png', './images/sponsor2.png', './images/sponsor3.png', './images/sponsor4.png', './images/sponsor5.png', './images/sponsor6.png', './images/sponsor1.png', './images/sponsor2.png', './images/sponsor3.png', './images/sponsor4.png', './images/sponsor5.png', './images/sponsor6.png']

})