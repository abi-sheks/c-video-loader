let paths = {
    search: "../../library/assets/icons/search-icon.svg",
    dropdown: "../../library/assets/icons/dropdown-icon.svg",
    carouselright: "../../library/assets/icons/carouselright-icon.svg",
    carouselleft: "../../library/assets/icons/carouselleft-icon.svg",
    arrow: "../../library/assets/icons/arrow-icon.svg",
    hospital: "../../library/assets/icons/hospital-icon.svg",
    heart: "../../library/assets/icons/heart-icon.svg",
    phone: "../../library/assets/icons/phone-icon.svg",
    email: "../../library/assets/icons/email-icon.svg",
    contact: "../../library/assets/icons/contact-icon.svg",
    compass: "../../library/assets/icons/compass-icon.svg",
    download: "../../library/assets/icons/download-icon.svg",
    microphone: "../../library/assets/icons/microphone-icon.svg",
    sort: "../../library/assets/icons/sort-icon.svg",
    wellness: "../../library/assets/icons/wellness-icon.svg",
    share: "../../library/assets/icons/share-icon.svg",
    homepage_hygiene: "../../library/assets/icons/homepage_hygiene-icon.svg",
    arrow_dark: "../../library/assets/icons/arrow_dark-icon.svg",
    bullet_point_dark: "../../library/assets/icons/bullet_point_dark-icon.svg",
    departments_dark: "../../library/assets/icons/departments_dark-icon.svg",
    stats_students_dark: "../../library/assets/icons/stats_students_dark-icon.svg",
    stats_faculty_dark: "../../library/assets/icons/stats_faculty_dark-icon.svg",
    centres_dark: "../../library/assets/icons/centres_dark-icon.svg",
    contact_dark: "../../library/assets/icons/contact_dark-icon.svg",
    filter_list_dark: "../../library/assets/icons/filter_list_dark-icon.svg",
    schools_dark: "../../library/assets/icons/schools_dark-icon.svg",
    stats_staff_dark: "../../library/assets/icons/stats_staff_dark-icon.svg",
    stats_patents_dark: "../../library/assets/icons/stats_patents_dark-icon.svg",
    for_students: "../../library/assets/icons/for_students-icon.svg",
    for_students_hover: "../../library/assets/icons/for_students_hover-icon.svg",
    for_faculty: "../../library/assets/icons/for_faculty-icon.svg",
    for_faculty_hover: "../../library/assets/icons/for_faculty_hover-icon.svg",
    for_visitors: "../../library/assets/icons/for_visitors-icon.svg",
    for_visitors_hover: "../../library/assets/icons/for_visitors_hover-icon.svg",
    floating_button: "../../library/assets/icons/floating_button-icon.svg",
    floating_button_hover: "../../library/assets/icons/floating_button_hover-icon.svg",
    committee: "../../library/assets/icons/committee-icon.svg",
    google_icon_1: "../../library/assets/icons/google_icon_1-icon.svg"
};

let documentIcons = document.querySelectorAll(".ui.icon");

for (let icon of documentIcons) {
    var key = icon.getAttribute("data-icon");
    icon.setAttribute("src", paths[key]);
    icon.className = "icon_image"
}