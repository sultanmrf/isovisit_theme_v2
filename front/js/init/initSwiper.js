function initSwiper(target, options, name_pagination , spaceBetween = 16) {
    // Set variables
    let count_slides_view = '',
        navigation = '',
        pagination = '';

    /* all_size : in all size page */
    if(options.default){
        count_slides_view = options.default.count_slides_view;
        navigation = options.default.navigation;
        pagination = options.default.pagination;
    }else {
        if (window.matchMedia("(max-width: 576px)").matches){
            count_slides_view = options.sm.count_slides_view;
            navigation = options.sm.navigation;
            pagination = options.sm.pagination;
        }else if(window.matchMedia("(min-width: 577px) and (max-width: 992px)").matches){
            count_slides_view = options.md.count_slides_view;
            navigation = options.md.navigation;
            pagination = options.md.pagination;
        } else {
            count_slides_view = options.lg.count_slides_view;
            navigation = options.lg.navigation;
            pagination = options.lg.pagination;
        }
    }

    // Use Variables
    let navigation_option = {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    }

    let pagination_option = {
        el: name_pagination,
        clickable: true,
    }

    if(pagination === false)
        pagination_option = false;

    if(navigation === false)
        navigation_option = false;

    new Swiper(target, {
        slidesPerView: count_slides_view,
        spaceBetween: spaceBetween,
        navigation: navigation_option,
        pagination: pagination_option,
    });
}

// Medicine Swiper:
function initMedicineSwiper(target = '.swiper-medicines', name_pagination = '.swiper-pagination-medicines') {

    initSwiper(target, {
        sm: {
            count_slides_view: 'auto',
            navigation: false,
            pagination: true,
        },
        md: {
            count_slides_view:'auto',
            navigation: false,
            pagination: true,
        },
        lg: {
            count_slides_view: 'auto',
            navigation: true,
            pagination: false,
        },
    }, name_pagination);
}

// Comments Users Swiper:
function initCommentsUsersSwiper(target = '.swiper-comments-users', name_pagination = '') {

    initSwiper(target, {
        sm: {
            count_slides_view: 'auto',
            navigation: false,
            pagination: false,
        },
        md: {
            count_slides_view: 'auto',
            navigation: false,
            pagination: false,
        },
        lg: {
            count_slides_view: 'auto',
            navigation: true,
            pagination: false,
        },
    }, name_pagination);
}

// Doctors Swiper:
function initDoctorsSwiper(target = '.swiper-doctors', name_pagination = '') {

    initSwiper(target, {
        sm: {
            count_slides_view: 'auto',
            navigation: false,
            pagination: false,
        },
        md: {
            count_slides_view: 'auto',
            navigation: false,
            pagination: false,
        },
        lg: {
            count_slides_view: 'auto',
            navigation: true,
            pagination: false,
        },
    }, name_pagination);
}

// Specialty Swiper:
function initSpecialtySwiper(target = '.swiper-specialty', name_pagination = '') {

    initSwiper(target, {
        sm: {
            count_slides_view: 'auto',
            navigation: false,
            pagination: false,
        },
        md: {
            count_slides_view: 'auto',
            navigation: false,
            pagination: false,
        },
        lg: {
            count_slides_view: 'auto',
            navigation: true,
            pagination: false,
        },
    }, name_pagination);
}

// Services Swiper:
function initServicesSwiper(target = '.swiper-services', name_pagination = '') {

    initSwiper(target, {
        sm: {
            count_slides_view: 'auto',
            navigation: false,
            pagination: false,
        },
        md: {
            count_slides_view: 'auto',
            navigation: false,
            pagination: false,
        },
        lg: {
            count_slides_view: 'auto',
            navigation: true,
            pagination: false,
        },
    }, name_pagination);
}

// Question Answer Swiper:
function initQuestionAnswerSwiper(target = '.swiper-question-answer', name_pagination = '.swiper-pagination-question-answer') {

    initSwiper(target, {
        sm: {
            count_slides_view: 1,
            navigation: false,
            pagination: true,
        },
        md: {
            count_slides_view: 2,
            navigation: false,
            pagination: true,
        },
        lg: {
            count_slides_view: 4,
            navigation: true,
            pagination: false,
        },
    }, name_pagination);
}

// Article Swiper:
function initArticleSwiper(target = '.swiper-articles', name_pagination = '.swiper-pagination-article') {

    initSwiper(target, {
        sm: {
            count_slides_view: 1,
            navigation: false,
            pagination: true,
        },
        md: {
            count_slides_view: 2,
            navigation: false,
            pagination: true,
        },
        lg: {
            count_slides_view: 3,
            navigation: true,
            pagination: false,
        },
    }, name_pagination);
}

// Certificates Swiper:
function initCertificatesSwiper(target = '.swiper-certificates', name_pagination = '.swiper-pagination-certificates') {
    initSwiper(target, {
        default: {
            count_slides_view: 2,
            navigation: false,
            pagination: true,
        },
    }, name_pagination,10);
}

