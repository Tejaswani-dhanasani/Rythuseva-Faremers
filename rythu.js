/* =========================================================
   RYTHU SEVA - COMPLETE JAVASCRIPT
========================================================= */


/* =========================================================
   1. GOVERNMENT SCHEMES
========================================================= */

const allSchemes = [

    /* ==============================
       CENTRAL GOVERNMENT
    ============================== */

    {
        id: "pmkisan",
        category: "central",
        icon: "💰",
        name: "PM-KISAN",
        nameTe: "పీఎం-కిసాన్",
        description:
            "Income support for eligible landholding farmer families.",
        eligibility:
            "Eligible landholding farmer families, subject to the scheme's exclusion criteria.",
        benefits:
            "Financial assistance is transferred directly to eligible beneficiaries through the PM-KISAN system.",
        documents:
            "Aadhaar, bank account details, land records and other details required by the official portal.",
        website:
            "https://pmkisan.gov.in/"
    },

    {
        id: "pmfby",
        category: "central",
        icon: "🌾",
        name: "Pradhan Mantri Fasal Bima Yojana",
        nameTe: "ప్రధాన మంత్రి ఫసల్ బీమా యోజన",
        description:
            "Government crop insurance programme for eligible farmers.",
        eligibility:
            "Farmers growing notified crops in notified areas, subject to applicable scheme rules.",
        benefits:
            "Insurance protection against eligible crop losses under the applicable insurance terms.",
        documents:
            "Aadhaar, bank details, land/cultivation records and crop/application information as applicable.",
        website:
            "https://pmfby.gov.in/"
    },

    {
        id: "kcc",
        category: "central",
        icon: "💳",
        name: "Kisan Credit Card",
        nameTe: "కిసాన్ క్రెడిట్ కార్డ్",
        description:
            "Credit support for agricultural and allied activities.",
        eligibility:
            "Eligible farmers including owner cultivators and certain tenant/sharecropper groups as per bank rules.",
        benefits:
            "Access to agricultural credit for cultivation, post-harvest expenses and eligible allied activities.",
        documents:
            "Identity proof, address proof, landholding/cultivation documents and bank application documents.",
        website:
            "https://www.myscheme.gov.in/schemes/kcc"
    },

    {
        id: "pmkusum",
        category: "central",
        icon: "☀️",
        name: "PM-KUSUM",
        nameTe: "పీఎం-కుసుమ్",
        description:
            "Promotes solar energy applications in the agricultural sector.",
        eligibility:
            "Eligible farmers and other permitted beneficiaries according to the applicable PM-KUSUM component.",
        benefits:
            "Support for eligible solar pumps and solarisation of agricultural energy systems.",
        documents:
            "Identity, land and electricity-related documents as required by the implementing agency.",
        website:
            "https://pmkusum.mnre.gov.in/"
    },

    {
        id: "pmksy",
        category: "central",
        icon: "💧",
        name: "PM Krishi Sinchayee Yojana",
        nameTe: "ప్రధాన మంత్రి కృషి సించాయి యోజన",
        description:
            "Promotes irrigation development and efficient water use in agriculture.",
        eligibility:
            "Eligibility depends on the applicable PMKSY component and implementing programme.",
        benefits:
            "Supports irrigation development, water conservation and improved water-use efficiency.",
        documents:
            "Land, identity and application documents according to the implementing department.",
        website:
            "https://pmksy.gov.in/"
    },

    {
        id: "aif",
        category: "central",
        icon: "🏗️",
        name: "Agriculture Infrastructure Fund",
        nameTe: "వ్యవసాయ మౌలిక సదుపాయాల నిధి",
        description:
            "Financing support for eligible agricultural infrastructure projects.",
        eligibility:
            "Eligible farmers, FPOs, agri-entrepreneurs and other permitted beneficiaries according to AIF guidelines.",
        benefits:
            "Facilitates financing for eligible post-harvest and agricultural infrastructure.",
        documents:
            "Project proposal, identity, land/business documents and financial documents as applicable.",
        website:
            "https://agriinfra.dac.gov.in/"
    },

    {
        id: "soilhealth",
        category: "central",
        icon: "🌱",
        name: "Soil Health Card",
        nameTe: "సాయిల్ హెల్త్ కార్డ్",
        description:
            "Provides information about soil nutrient status and recommendations.",
        eligibility:
            "Farmers can obtain soil testing and soil-health recommendations through the applicable system.",
        benefits:
            "Helps farmers understand soil nutrient status and make informed fertilizer decisions.",
        documents:
            "Basic farmer and land/sample details as required by the soil testing facility.",
        website:
            "https://soilhealth.dac.gov.in/"
    },

    {
        id: "fpo",
        category: "central",
        icon: "👨‍🌾",
        name: "Farmer Producer Organisations",
        nameTe: "రైతు ఉత్పత్తిదారుల సంస్థలు",
        description:
            "Supports collective organisation and development of farmer groups.",
        eligibility:
            "Eligible farmer groups and organisations under the applicable FPO programme.",
        benefits:
            "Supports collective farming activities, market linkages, capacity building and business development.",
        documents:
            "Organisation and member documents as required under the applicable programme.",
        website:
            "https://sfacindia.com/"
    },


    /* ==============================
       ANDHRA PRADESH
    ============================== */

    {
        id: "annadata",
        category: "state",
        icon: "🌾",
        name: "Annadatha Sukhibhava – PM KISAN",
        nameTe: "అన్నదాత సుఖీభవ – పీఎం కిసాన్",
        description:
            "Andhra Pradesh farmer income-support programme linked with PM-KISAN.",
        eligibility:
            "Eligible farmer families and landless cultivators according to current Andhra Pradesh Government guidelines.",
        benefits:
            "Financial assistance according to the applicable Andhra Pradesh Government guidelines.",
        documents:
            "Aadhaar, bank details, land/cultivation records and other documents required by the official system.",
        website:
            "https://annadathasukhibhava.ap.gov.in/"
    },

    {
        id: "rbk",
        category: "state",
        icon: "🏡",
        name: "Rythu Bharosa Kendras",
        nameTe: "రైతు భరోసా కేంద్రాలు",
        description:
            "Village-level agricultural service centres for farmers.",
        eligibility:
            "Farmers can access applicable agricultural services through their local RBK.",
        benefits:
            "Agricultural inputs, advisories, crop services and other farmer-support services.",
        documents:
            "Documents depend on the service being requested.",
        website:
            "https://apagrisnet.gov.in/"
    },

    {
        id: "farmmechanization",
        category: "state",
        icon: "🚜",
        name: "Farm Mechanization",
        nameTe: "వ్యవసాయ యాంత్రీకరణ",
        description:
            "Support for eligible agricultural machinery and implements.",
        eligibility:
            "Eligible farmers according to the applicable mechanization programme and subsidy guidelines.",
        benefits:
            "Helps farmers access eligible farm machinery and reduce cultivation constraints.",
        documents:
            "Farmer identity, land/cultivation details and application documents as required.",
        website:
            "https://apagrisnet.gov.in/"
    },

    {
        id: "apmip",
        category: "state",
        icon: "💧",
        name: "Andhra Pradesh Micro Irrigation Project",
        nameTe: "ఆంధ్రప్రదేశ్ సూక్ష్మ నీటిపారుదల ప్రాజెక్ట్",
        description:
            "Promotes efficient irrigation such as drip and sprinkler systems.",
        eligibility:
            "Eligible farmers according to current APMIP guidelines and crop/area requirements.",
        benefits:
            "Supports efficient water use and improved irrigation management.",
        documents:
            "Aadhaar, land/cultivation details, bank information and required application documents.",
        website:
            "https://horticulture.ap.gov.in/"
    },

    {
        id: "apcropinsurance",
        category: "state",
        icon: "🛡️",
        name: "Crop Insurance – Andhra Pradesh",
        nameTe: "పంటల బీమా – ఆంధ్రప్రదేశ్",
        description:
            "Crop insurance support for notified crops and eligible farmers.",
        eligibility:
            "Farmers growing notified crops in notified areas according to applicable insurance rules.",
        benefits:
            "Provides insurance protection for eligible crop losses.",
        documents:
            "Crop registration, Aadhaar, bank details and other applicable documents.",
        website:
            "https://pmfby.gov.in/"
    },

    {
        id: "epanta",
        category: "state",
        icon: "📱",
        name: "e-Panta",
        nameTe: "ఈ-పంట",
        description:
            "Digital recording of farmer-wise crop information in Andhra Pradesh.",
        eligibility:
            "Applicable farmers/cultivators whose crop details are recorded through the state system.",
        benefits:
            "Crop information can support access to eligible crop insurance, procurement and other agricultural services.",
        documents:
            "Cultivation and land-related information as required during crop registration.",
        website:
            "https://karshak.ap.gov.in/ecrop/"
    },

    {
        id: "naturalcalamity",
        category: "state",
        icon: "🌧️",
        name: "Natural Calamity & Crop Damage Support",
        nameTe: "ప్రకృతి వైపరీత్యాలు మరియు పంట నష్టం సహాయం",
        description:
            "Relief measures for eligible agricultural losses caused by notified natural calamities.",
        eligibility:
            "Affected farmers meeting the applicable government damage-assessment and eligibility criteria.",
        benefits:
            "Eligible farmers may receive relief according to government rules and assessed crop damage.",
        documents:
            "Farmer identity, crop details and records required for damage assessment.",
        website:
            "https://apagrisnet.gov.in/"
    },

    {
        id: "midh",
        category: "state",
        icon: "🥭",
        name: "Horticulture & MIDH",
        nameTe: "ఉద్యానవనాలు మరియు MIDH",
        description:
            "Support for horticulture development, productivity and post-harvest activities.",
        eligibility:
            "Eligible horticulture farmers according to the applicable programme guidelines.",
        benefits:
            "May support horticulture development and eligible post-harvest activities.",
        documents:
            "Farmer identity, land and horticulture project/application documents as applicable.",
        website:
            "https://horticulture.ap.gov.in/"
    }

];


/* =========================================================
   2. CURRENT LANGUAGE
========================================================= */

function getLanguage() {

    return localStorage.getItem("language") || "en";

}


/* =========================================================
   3. CURRENT SCHEME FILTER
========================================================= */

let currentSchemeFilter = "all";


/* =========================================================
   4. CREATE SCHEME BUTTONS
========================================================= */

function displaySchemes() {

    const schemeList =
        document.getElementById("schemeList");

    if (!schemeList) return;

    const language = getLanguage();

    const searchInput =
        document.getElementById("searchInput");

    const searchText =
        searchInput
            ? searchInput.value.toLowerCase().trim()
            : "";


    let schemesToShow = allSchemes;


    /* Filter Central / State */

    if (currentSchemeFilter !== "all") {

        schemesToShow =
            schemesToShow.filter(
                scheme =>
                    scheme.category === currentSchemeFilter
            );

    }


    /* Search */

    if (searchText !== "") {

        schemesToShow =
            schemesToShow.filter(scheme => {

                const english =
                    scheme.name.toLowerCase();

                const telugu =
                    scheme.nameTe.toLowerCase();

                const description =
                    scheme.description.toLowerCase();

                return (
                    english.includes(searchText) ||
                    telugu.includes(searchText) ||
                    description.includes(searchText)
                );

            });

    }


    schemeList.innerHTML = "";


    if (schemesToShow.length === 0) {

        schemeList.innerHTML = `
            <div class="empty-message">
                🔍 No schemes found.
            </div>
        `;

        return;

    }


    schemesToShow.forEach(scheme => {

        const button =
            document.createElement("button");

        button.className = "scheme-button";

        button.type = "button";

        button.dataset.schemeId = scheme.id;


        const displayName =
            language === "te"
                ? scheme.nameTe
                : scheme.name;


        button.innerHTML = `
            <span class="scheme-icon">
                ${scheme.icon}
            </span>

            <span class="scheme-name">
                ${displayName}
            </span>
        `;


        button.addEventListener(
            "click",
            function () {

                showScheme(scheme.id, button);

            }
        );


        schemeList.appendChild(button);

    });

}


/* =========================================================
   5. SHOW SELECTED SCHEME
========================================================= */

function showScheme(schemeId, clickedButton) {

    const scheme =
        allSchemes.find(
            item => item.id === schemeId
        );

    if (!scheme) return;


    const language = getLanguage();


    /* Remove active */

    document
        .querySelectorAll(".scheme-button")
        .forEach(button => {

            button.classList.remove("active");

        });


    /* Add active */

    if (clickedButton) {

        clickedButton.classList.add("active");

    }


    /* Change scheme image */

    const schemeImage =
        document.getElementById("schemeImage");


    if (schemeImage) {

        const sharedSchemeImage = "images/farming.png";

        schemeImage.src = sharedSchemeImage;

    }


    const schemeDetails =
        document.getElementById("schemeDetails");


    if (!schemeDetails) return;


    const schemeName =
        language === "te"
            ? scheme.nameTe
            : scheme.name;


    const text =
        translations[language];


    schemeDetails.innerHTML = `

        <h3>
            ${schemeName}
        </h3>

        <p>
            ${scheme.description}
        </p>

        <strong>
            ${text.eligibility}
        </strong>

        <p>
            ${scheme.eligibility}
        </p>

        <strong>
            ${text.benefits}
        </strong>

        <p>
            ${scheme.benefits}
        </p>

        <strong>
            ${text.requiredDocuments}
        </strong>

        <p>
            ${scheme.documents}
        </p>

        <a
            href="${scheme.website}"
            target="_blank"
            rel="noopener noreferrer"
            class="official-button"
        >
            ${text.officialWebsite}
        </a>

    `;

}


/* =========================================================
   6. SEARCH SCHEMES
========================================================= */

function searchSchemes() {

    displaySchemes();

}


/* =========================================================
   7. FILTER SCHEMES
========================================================= */

function filterSchemes(category, button) {

    currentSchemeFilter = category;


    document
        .querySelectorAll(".scheme-tab")
        .forEach(tab => {

            tab.classList.remove("active");

        });


    if (button) {

        button.classList.add("active");

    }


    displaySchemes();

}


/* =========================================================
   8. PAYMENT CHECK
========================================================= */

function checkPayment() {

    const language =
        getLanguage();

    const text =
        translations[language];

    const result =
        document.getElementById("paymentResult");


    if (!result) return;


    result.textContent =
        text.checkingPayment;


    setTimeout(function () {

        result.textContent =
            text.paymentSuccess;

    }, 1200);

}


/* =========================================================
   9. DOCUMENT CHECK
========================================================= */

function checkDocuments() {

    const language =
        getLanguage();

    const text =
        translations[language];


    const checkboxes =
        document.querySelectorAll(
            '.document input[type="checkbox"]'
        );


    let checked = 0;


    checkboxes.forEach(
        checkbox => {

            if (checkbox.checked) {

                checked++;

            }

        }
    );


    const status =
        document.getElementById(
            "documentStatus"
        );


    if (status) {

        status.textContent =
            `${text.documentsChecked} ${checked} / ${checkboxes.length}`;

    }

}


/* =========================================================
   10. LOGIN
========================================================= */

function loginUser() {

    const language =
        getLanguage();

    const text =
        translations[language];


    const name =
        prompt(text.loginPrompt);


    if (
        name === null ||
        name.trim() === ""
    ) {

        return;

    }


    const cleanName =
        name.trim();


    localStorage.setItem(
        "farmerName",
        cleanName
    );


    const farmerName =
        document.getElementById(
            "farmerName"
        );


    if (farmerName) {

        farmerName.textContent =
            cleanName;

    }


    alert(
        text.welcomeAlert +
        cleanName +
        "!"
    );

}


/* =========================================================
   11. EDIT FARMER
========================================================= */

function editFarmer() {

    const language =
        getLanguage();

    const text =
        translations[language];


    const oldName =
        localStorage.getItem(
            "farmerName"
        ) ||
        "Demo Farmer";


    const newName =
        prompt(
            text.editPrompt,
            oldName
        );


    if (
        newName === null ||
        newName.trim() === ""
    ) {

        return;

    }


    const cleanName =
        newName.trim();


    localStorage.setItem(
        "farmerName",
        cleanName
    );


    const farmerName =
        document.getElementById(
            "farmerName"
        );


    if (farmerName) {

        farmerName.textContent =
            cleanName;

    }

}


/* =========================================================
   12. TRANSLATIONS
========================================================= */

const translations = {

    en: {

        siteName:
            "Farmer Benefit Portal",

        siteSubtitle:
            "Government schemes and farmer services",

        portalTitle:
            "🌾 FARMER BENEFIT PORTAL",

        rythuTitle:
            "RYTHU SEVA",

        welcome:
            "Welcome, Farmer!",

        tagline:
            "Service is the farmer's strength • Development is the farmer's goal",

        heroDescription:
            "Connecting farmers with government schemes, agricultural services and financial benefits.",

        explore:
            "🌱 Explore Schemes",

        farmerDetailsButton:
            "👨‍🌾 Farmer Details",

        search:
            "Search schemes...",

        login:
            "🔐 Login",

        marquee:
            "🌾 Support the hands that feed us and protect the land that sustains us!",

        schemeTitle:
            "My Schemes",

        paymentTitle:
            "Benefits Received",

        applicationTitle:
            "Applications",

        bankTitle:
            "Bank Account",

        schemesHeading:
            "Government Schemes",

        schemesDescription:
            "Explore farmer benefits",

        informationHeading:
            "About & Information",

        informationDescription:
            "Scheme details",

        farmerHeading:
            "Farmer Details",

        farmerDescription:
            "Your information",

        nameLabel:
            "👤 Name",

        aadhaarLabel:
            "🪪 Aadhaar",

        landLabel:
            "🌾 Land",

        bankLabel:
            "🏦 Bank",

        stateLabel:
            "📍 State",

        aadhaarStatus:
            "✓ Verified",

        landStatus:
            "✓ Verified",

        bankStatus:
            "✓ Linked",

        stateValue:
            "Andhra Pradesh",

        editButton:
            "✏️ Edit Details",

        bankHeading:
            "My Bank Account",

        bankDescription:
            "Check your benefit payment",

        bankNameLabel:
            "Bank:",

        accountLabel:
            "Account:",

        statusLabel:
            "Status:",

        accountStatus:
            "✓ Verified",

        paymentButton:
            "Check Benefit Payment",

        documentsHeading:
            "Required Documents",

        documentsDescription:
            "Keep your documents ready",

        aadhaarDocument:
            "🪪 Aadhaar Card",

        bankDocument:
            "🏦 Bank Passbook",

        landDocument:
            "🌾 Land Document",

        photoDocument:
            "📷 Passport Photo",

        governmentLabel:
            "GOVERNMENT SERVICES",

        governmentHeading:
            "Andhra Pradesh Government",

        governmentDescription:
            "Connecting farmers with digital information, agricultural services and government schemes.",

        footerTitle:
            "🌾 Farmer Benefit Portal",

        footerDescription:
            "Supporting farmers through accessible digital information and services.",

        footerProject:
            "Farmer Benefit Portal",

        footerDemo:
            "Educational Project Demo",

        checkingPayment:
            "🔄 Checking benefit payment...",

        paymentSuccess:
            "✅ Demo: ₹2,000 benefit payment received.",

        documentsChecked:
            "Documents checked:",

        loginPrompt:
            "Enter your farmer name:",

        welcomeAlert:
            "Welcome, ",

        editPrompt:
            "Enter your name:",

        officialWebsite:
            "🔗 Visit Official Website",

        eligibility:
            "Eligibility",

        benefits:
            "Benefits",

        requiredDocuments:
            "Required Documents"

    },


    te: {

        siteName:
            "రైతు ప్రయోజనాల పోర్టల్",

        siteSubtitle:
            "ప్రభుత్వ పథకాలు మరియు రైతు సేవలు",

        portalTitle:
            "🌾 రైతు ప్రయోజనాల పోర్టల్",

        rythuTitle:
            "రైతు సేవ",

        welcome:
            "స్వాగతం రైతు గారూ!",

        tagline:
            "సేవే రైతు బలం • అభివృద్ధే రైతు లక్ష్యం",

        heroDescription:
            "ప్రభుత్వ పథకాలు, వ్యవసాయ సేవలు మరియు ఆర్థిక ప్రయోజనాలను రైతులకు అందించే వేదిక.",

        explore:
            "🌱 పథకాలను చూడండి",

        farmerDetailsButton:
            "👨‍🌾 రైతు వివరాలు",

        search:
            "పథకాలను వెతకండి...",

        login:
            "🔐 లాగిన్",

        marquee:
            "🌾 మనకు అన్నం పెట్టే రైతుల చేతులను ఆదరిద్దాం, మనకు జీవనాధారమైన భూమిని కాపాడుకుందాం!",

        schemeTitle:
            "నా పథకాలు",

        paymentTitle:
            "అందుకున్న ప్రయోజనాలు",

        applicationTitle:
            "దరఖాస్తులు",

        bankTitle:
            "బ్యాంక్ ఖాతా",

        schemesHeading:
            "ప్రభుత్వ పథకాలు",

        schemesDescription:
            "రైతు ప్రయోజనాలను చూడండి",

        informationHeading:
            "సమాచారం & వివరాలు",

        informationDescription:
            "పథకం వివరాలు",

        farmerHeading:
            "రైతు వివరాలు",

        farmerDescription:
            "మీ సమాచారం",

        nameLabel:
            "👤 పేరు",

        aadhaarLabel:
            "🪪 ఆధార్",

        landLabel:
            "🌾 భూమి",

        bankLabel:
            "🏦 బ్యాంక్",

        stateLabel:
            "📍 రాష్ట్రం",

        aadhaarStatus:
            "✓ ధృవీకరించబడింది",

        landStatus:
            "✓ ధృవీకరించబడింది",

        bankStatus:
            "✓ అనుసంధానించబడింది",

        stateValue:
            "ఆంధ్రప్రదేశ్",

        editButton:
            "✏️ వివరాలను మార్చండి",

        bankHeading:
            "నా బ్యాంక్ ఖాతా",

        bankDescription:
            "మీ ప్రయోజన చెల్లింపును తనిఖీ చేయండి",

        bankNameLabel:
            "బ్యాంక్:",

        accountLabel:
            "ఖాతా:",

        statusLabel:
            "స్థితి:",

        accountStatus:
            "✓ ధృవీకరించబడింది",

        paymentButton:
            "ప్రయోజన చెల్లింపును తనిఖీ చేయండి",

        documentsHeading:
            "అవసరమైన పత్రాలు",

        documentsDescription:
            "మీ పత్రాలను సిద్ధంగా ఉంచుకోండి",

        aadhaarDocument:
            "🪪 ఆధార్ కార్డు",

        bankDocument:
            "🏦 బ్యాంక్ పాస్‌బుక్",

        landDocument:
            "🌾 భూమి పత్రం",

        photoDocument:
            "📷 పాస్‌పోర్ట్ ఫోటో",

        governmentLabel:
            "ప్రభుత్వ సేవలు",

        governmentHeading:
            "ఆంధ్రప్రదేశ్ ప్రభుత్వం",

        governmentDescription:
            "డిజిటల్ సమాచారం, వ్యవసాయ సేవలు మరియు ప్రభుత్వ పథకాలతో రైతులను అనుసంధానించడం.",

        footerTitle:
            "🌾 రైతు ప్రయోజనాల పోర్టల్",

        footerDescription:
            "అందుబాటులో ఉండే డిజిటల్ సమాచారం మరియు సేవల ద్వారా రైతులకు మద్దతు.",

        footerProject:
            "రైతు ప్రయోజనాల పోర్టల్",

        footerDemo:
            "విద్యా ప్రాజెక్ట్ డెమో",

        checkingPayment:
            "🔄 ప్రయోజన చెల్లింపును తనిఖీ చేస్తోంది...",

        paymentSuccess:
            "✅ డెమో: ₹2,000 ప్రయోజన చెల్లింపు అందుకుంది.",

        documentsChecked:
            "తనిఖీ చేసిన పత్రాలు:",

        loginPrompt:
            "మీ రైతు పేరు నమోదు చేయండి:",

        welcomeAlert:
            "స్వాగతం, ",

        editPrompt:
            "మీ పేరు నమోదు చేయండి:",

        officialWebsite:
            "🔗 అధికారిక వెబ్‌సైట్‌ను సందర్శించండి",

        eligibility:
            "అర్హత",

        benefits:
            "ప్రయోజనాలు",

        requiredDocuments:
            "అవసరమైన పత్రాలు"

    }

};


/* =========================================================
   13. CHANGE LANGUAGE
========================================================= */

function changeLanguage() {

    const languageSelect =
        document.getElementById(
            "languageSelect"
        );


    if (!languageSelect) return;


    const language =
        languageSelect.value;


    localStorage.setItem(
        "language",
        language
    );


    applyLanguage();

}


/* =========================================================
   14. APPLY LANGUAGE
========================================================= */

function applyLanguage() {

    const language =
        getLanguage();

    const text =
        translations[language];


    document.documentElement.lang =
        language === "te"
            ? "te"
            : "en";


    /* Header */

    const siteName =
        document.getElementById("siteName");

    if (siteName)
        siteName.textContent =
            text.siteName;


    const searchInput =
        document.getElementById("searchInput");

    if (searchInput)
        searchInput.placeholder =
            text.search;


    const loginBtn =
        document.getElementById("loginBtn");

    if (loginBtn)
        loginBtn.textContent =
            text.login;


    const loginButton =
        document.getElementById("loginButton");

    if (loginButton)
        loginButton.textContent =
            text.login;


    /* Marquee */

    const farmerMessage =
        document.getElementById(
            "farmerMessage"
        );

    if (farmerMessage)
        farmerMessage.textContent =
            text.marquee;


    /* Hero */

    setText(
        "portalTitle",
        text.portalTitle
    );

    setText(
        "rythuTitle",
        text.rythuTitle
    );

    setText(
        "welcomeTitle",
        text.welcome
    );

    setText(
        "rythuTagline",
        text.tagline
    );

    setText(
        "heroDescription",
        text.heroDescription
    );

    setText(
        "exploreBtn",
        text.explore
    );

    setText(
        "farmerBtn",
        text.farmerDetailsButton
    );


    /* Dashboard */

    setText(
        "schemeTitle",
        text.schemeTitle
    );

    setText(
        "paymentTitle",
        text.paymentTitle
    );

    setText(
        "applicationTitle",
        text.applicationTitle
    );

    setText(
        "bankTitle",
        text.bankTitle
    );


    /* Scheme section */

    setText(
        "schemesHeading",
        text.schemesHeading
    );

    setText(
        "schemesDescription",
        text.schemesDescription
    );

    setText(
        "informationHeading",
        text.informationHeading
    );


    /* Farmer */

    setText(
        "farmerHeading",
        text.farmerHeading
    );


    /* Bank */

    setText(
        "bankHeading",
        text.bankHeading
    );

    setText(
        "paymentButton",
        text.paymentButton
    );


    /* Documents */

    setText(
        "documentsHeading",
        text.documentsHeading
    );


    /* Government */

    setText(
        "governmentLabel",
        text.governmentLabel
    );

    setText(
        "governmentHeading",
        text.governmentHeading
    );

    setText(
        "governmentDescription",
        text.governmentDescription
    );


    /* Footer */

    setText(
        "footerTitle",
        text.footerTitle
    );

    setText(
        "footerDescription",
        text.footerDescription
    );


    /* Update scheme buttons */

    displaySchemes();


    /* Update document counter */

    checkDocuments();

}


/* =========================================================
   15. HELPER FUNCTION
========================================================= */

function setText(id, value) {

    const element =
        document.getElementById(id);

    if (element) {

        element.textContent =
            value;

    }

}


/* =========================================================
   16. INITIAL LOAD
========================================================= */

window.addEventListener(
    "DOMContentLoaded",
    function () {

        /* Restore farmer name */

        const savedName =
            localStorage.getItem(
                "farmerName"
            );


        if (savedName) {

            const farmerName =
                document.getElementById(
                    "farmerName"
                );


            if (farmerName) {

                farmerName.textContent =
                    savedName;

            }

        }


        /* Restore language */

        const languageSelect =
            document.getElementById(
                "languageSelect"
            );


        if (languageSelect) {

            languageSelect.value =
                getLanguage();

        }


        /* Apply language */

        applyLanguage();


        /* Show schemes */

        displaySchemes();

    }
);