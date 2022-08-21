function initSwiper(target, options, name_pagination , spaceBetween = 16 , ) {
    // Set variables
    let count_slides_view = '',
        navigation = '',
        pagination = '',
        effect = false,
        grabCursor = false;

    /* all_size : in all size page */
    if(options.default){
        count_slides_view = options.default.count_slides_view;
        navigation = options.default.navigation;
        pagination = options.default.pagination;
        effect = options.default.effect;
        grabCursor = options.default.grabCursor;
    }else {
        if (window.matchMedia("(max-width: 576px)").matches){
            count_slides_view = options.sm.count_slides_view;
            navigation = options.sm.navigation;
            pagination = options.sm.pagination;
            effect = options.sm.effect;
            grabCursor = options.sm.grabCursor;
        }else if(window.matchMedia("(min-width: 577px) and (max-width: 992px)").matches){
            count_slides_view = options.md.count_slides_view;
            navigation = options.md.navigation;
            pagination = options.md.pagination;
            effect = options.md.effect;
            grabCursor = options.md.grabCursor;
        } else {
            count_slides_view = options.lg.count_slides_view;
            navigation = options.lg.navigation;
            pagination = options.lg.pagination;
            effect = options.lg.effect;
            grabCursor = options.lg.grabCursor;
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
        effect: effect,
        grabCursor: grabCursor,
    });
}

// Medicine Swiper:
function initMedicineSwiper(target = '.swiper-medicines', name_pagination = '.swiper-pagination-medicines') {

    initSwiper(target, {
        sm: {
            count_slides_view: 'auto',
            navigation: false,
            pagination: true,
            effect: false,
            grabCursor: false,
        },
        md: {
            count_slides_view: 'auto',
            navigation: false,
            pagination: true,
            effect: false,
            grabCursor: false,
        },
        lg: {
            count_slides_view: 'auto',
            navigation: true,
            pagination: false,
            effect: false,
            grabCursor: false,
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
            effect: false,
            grabCursor: false,
        },
        md: {
            count_slides_view: 'auto',
            navigation: false,
            pagination: false,
            effect: false,
            grabCursor: false,
        },
        lg: {
            count_slides_view: 'auto',
            navigation: true,
            pagination: false,
            effect: false,
            grabCursor: false,
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
            effect: false,
            grabCursor: false,
        },
        md: {
            count_slides_view: 'auto',
            navigation: false,
            pagination: false,
            effect: false,
            grabCursor: false,
        },
        lg: {
            count_slides_view: 'auto',
            navigation: true,
            pagination: false,
           effect: false,
            grabCursor: false,
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
            effect: false,
            grabCursor: false,
        },
        md: {
            count_slides_view: 'auto',
            navigation: false,
            pagination: false,
            effect: false,
            grabCursor: false,
        },
        lg: {
            count_slides_view: 'auto',
            navigation: true,
            pagination: false,
            effect: false,
            grabCursor: false,
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
            effect: false,
            grabCursor: false,
        },
        md: {
            count_slides_view: 'auto',
            navigation: false,
            pagination: false,
            effect: false,
            grabCursor: false,
        },
        lg: {
            count_slides_view: 'auto',
            navigation: true,
            pagination: false,
            effect: false,
            grabCursor: false,
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
            effect: false,
            grabCursor: false,
        },
        md: {
            count_slides_view: 2,
            navigation: false,
            pagination: true,
            effect: false,
            grabCursor: false,
        },
        lg: {
            count_slides_view: 4,
            navigation: true,
            pagination: false,
            effect: false,
            grabCursor: false,
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
            effect: false,
            grabCursor: false,
        },
        md: {
            count_slides_view: 2,
            navigation: false,
            pagination: true,
            effect: false,
            grabCursor: false,
        },
        lg: {
            count_slides_view: 3,
            navigation: true,
            pagination: false,
            effect: false,
            grabCursor: false,
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
            effect: false,
            grabCursor: false,
        },
    }, name_pagination,10);
}

// GalleryDoctor Swiper:
function initGalleryDoctorSwiper(target = '.swiper-gallery-doctor', name_pagination = '.swiper-pagination-gallery-doctor') {
    initSwiper(target, {
        default: {
            count_slides_view: false,
            navigation: true,
            pagination: true,
            effect: 'flip',
            grabCursor: true
        },
    }, name_pagination,0);
}

// Comment Doctors Swiper:
function initCommentDoctorsSwiper(target = '.swiper-comment-doctors', name_pagination = '.swiper-pagination-comment-doctors') {

    initSwiper(target, {
        sm: {
            count_slides_view: 1,
            navigation: false,
            pagination: true,
            effect: false,
            grabCursor: false,
        },
        md: {
            count_slides_view: 3,
            navigation: false,
            pagination: true,
            effect: false,
            grabCursor: false,
        },
        lg: {
            count_slides_view: 3,
            navigation: true,
            pagination: false,
            effect: false,
            grabCursor: false,
        },
    }, name_pagination);
}

// menu profile Swiper:
function initMenuProfile(target = '.swiper-menu', name_pagination = '') {

    initSwiper(target, {
        sm: {
            count_slides_view: 3,
            navigation: false,
            pagination: false,
            effect: false,
            grabCursor: false,
        },
        md: {
            count_slides_view: 6,
            navigation: false,
            pagination: false,
            effect: false,
            grabCursor: false,
        },
        lg: {
            count_slides_view: 8,
            navigation: false,
            pagination: false,
            effect: false,
            grabCursor: false,
        },
    }, name_pagination);
}