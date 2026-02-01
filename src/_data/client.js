module.exports = {
    name: "SGV Law",
    businessName: "SGV Law, APC",
    ownerName: "Michael L. Yeung",
    email: "info@mlylaw.com",
    newClientsPhoneForTel: "833-225-5871",
    newClientsPhoneFormatted: "(833) 225-5871",
    mainOfficePhoneForTel: "626-500-0338",
    mainOfficePhoneFormatted: "(626) 500-0338",
    phoneForTel: "626-500-0339",
    phoneFormatted: "(626) 500-0339",
    address: {
        lineOne: "2709 W. Valley Boulevard",
        lineTwo: "",
        city: "Alhambra",
        state: "CA",
        zip: "91803",
        country: "US",
        mapLink: "https://maps.app.goo.gl/TEdS5KoLC9ZcULuQ6",
    },
    socials: {
        facebook: "https://www.facebook.com/",
        instagram: "https://www.instagram.com/",
    },
    //! Make sure you include the file protocol (e.g. https://) and that NO TRAILING SLASH is included
    domain: "https://mlylaw.com",
    // Passing the isProduction variable for use in HTML templates
    isProduction: process.env.ELEVENTY_ENV === "PROD",
};
