let brochures = [
    {
        name: "DLSU Viewbook",
        link: "https://www.dlsu.edu.ph/i-viewbook/index.php",
        desc: ""
    },
    {
        name: "DLSU Manila-Laguna Campus Viewbook",
        link: "https://www.dlsu.edu.ph/wp-content/uploads/2018/09/laguna-campus-viewbook.pdf",
        desc: ""
    },
    {
        name: "Degree Program Listings",
        link: "https://www.dlsu.edu.ph/wp-content/uploads/pdf/oas/undergraduate/dlsu-ug-program-listing.pdf",
        desc: "(pdf/76kb)"
    }
];

let forms = [
    {
        name: "Admission Credentials",
        link: "https://www.dlsu.edu.ph/admissions/undergraduate/admission-credentials/",
        desc: ""
    },
    {
        name: "Agreement Form for Completion of Requirements",
        link: "https://www.dlsu.edu.ph/wp-content/uploads/pdf/oas/undergraduate/completion-of-requirements-agreement-form.pdf",
        desc: "(pdf/428kb)"
    },
    {
        name: "Application for Pure Online Learning  (For Incoming Frosh, Term 1 AY 2022-2023) ",
        link: "https://www.dlsu.edu.ph/wp-content/uploads/pdf/admissions/undergraduate/pol-frosh-application.pdf",
        desc: "(pdf/434kb)"
    },
    {
        name: "Consent form",
        link: "https://www.dlsu.edu.ph/wp-content/uploads/pdf/oas/undergraduate/consent-form.pdf",
        desc: "(pdf/46kb)"
    },
    {
        name: "Consent form",
        link: "https://www.dlsu.edu.ph/wp-content/uploads/pdf/oas/undergraduate/consent-form-short-version.pdf",
        desc: "(short version pdf/82kb)"
    },
    {
        name: "Credentials and Enrollment Withdrawal form",
        link: "https://www.dlsu.edu.ph/wp-content/uploads/pdf/admissions/undergraduate/credential-and-enrollment-withdrawal-form.pdf",
        desc: "(pdf/197kb)"
    },
    {
        name: "Declaration as a New Student Form",
        link: "https://www.dlsu.edu.ph/wp-content/uploads/pdf/oas/undergraduate/admission-declaration-as-new-student.pdf",
        desc: "(pdf/284kb)"
    },
    {
        name: "Declaration as a Transfer Student Form",
        link: "https://www.dlsu.edu.ph/wp-content/uploads/pdf/oas/undergraduate/declaration_transferstudent.pdf",
        desc: "(pdf/131kb)"
    },
    {
        name: "Deferment of Enrollment form",
        link: "https://www.dlsu.edu.ph/wp-content/uploads/pdf/admissions/undergraduate/deferment-of-enrollment.pdf",
        desc: "(pdf/520kb)"
    },
    {
        name: "Expression of Interest for Admission Form",
        link: "https://www.dlsu.edu.ph/wp-content/uploads/pdf/oas/undergraduate/admission2223t1-expression-of-interest.pdf",
        desc: "(pdf/101kb)"
    },
    {
        name: "Freshman Enrollment Confirmation – Schedules and Procedures",
        link: "https://www.dlsu.edu.ph/wp-content/uploads/pdf/oas/undergraduate/admission1819-confirmation-guide-materials.pdf",
        desc: ""
    },
    {
        name: "Manual Application Form for Incoming Freshman AY 2018-2019 for External Testing Centers ",
        link: "https://www.dlsu.edu.ph/wp-content/uploads/pdf/oas/undergraduate/manual-application-form.pdf",
        desc: ""
    },
    {
        name: "Recommendation Form",
        link: "https://www.dlsu.edu.ph/wp-content/uploads/pdf/oas/undergraduate/admission-recommendation-t2t3-2223.pdf",
        desc: "(pdf/670kb)<br><i>(to be accessed by Applicants for Term 2 and Term 3 AY 2022-2023)</i>"
    },
    {
        name: "Recommendation Form",
        link: "https://www.dlsu.edu.ph/wp-content/uploads/pdf/oas/undergraduate/admission-recommendation.pdf",
        desc: "(pdf/630kb)"
    },
    {
        name: "Reconsideration Request Form",
        link: "https://www.dlsu.edu.ph/wp-content/uploads/pdf/oas/undergraduate/admission1516t1-reconsideration-request.pdf",
        desc: "(pdf/248kb)"
    },
    {
        name: "SAT Evaluation Form",
        link: "https://www.dlsu.edu.ph/wp-content/uploads/pdf/oas/undergraduate/sat-evaluation-form.pdf",
        desc: "(pdf/435kb)"
    },
    {
        name: "Secondary Scholastic Record Form",
        link: "https://www.dlsu.edu.ph/wp-content/uploads/pdf/oas/undergraduate/admission-sec-scholastic-record.pdf",
        desc: "(pdf/451kb)<br><i>(to be accessed by Undergraduate Freshman AY 2023-2024 Term 1)</i>"
    },
    {
        name: "Statement of Responsibilities",
        link: "https://www.dlsu.edu.ph/wp-content/uploads/pdf/oas/undergraduate/admission-statement-of-responsibilities.pdf",
        desc: "(pdf/104kb)"
    },
    {
        name: "Statement of Undertaking Form",
        link: "https://www.dlsu.edu.ph/wp-content/uploads/pdf/oas/undergraduate/admission-statement-of-undertaking.pdf",
        desc: "(pdf/222kb)"
    },
    {
        name: "Statement of Undertaking Form ID 120 T3 AY1920",
        link: "https://www.dlsu.edu.ph/wp-content/uploads/pdf/oas/undergraduate/admission-statement-of-undertakingID120T31920.pdf",
        desc: "(pdf/32kb)"
    },
    {
        name: "Transfer & Second Undergraduate Degree Application Form",
        link: "https://www.dlsu.edu.ph/wp-content/uploads/pdf/oas/undergraduate/admission-pre-application-form.pdf",
        desc: "(pdf/290kb)"
    }
];

showBrochures(brochures);
showForms(forms);

function showBrochures(arr){
    for(var i=0;i<arr.length;i++){
        document.getElementById("brochure-content").innerHTML += `
            <li class="par2" style="margin-top:-0.5%">
                <a href="${arr[i].link}" style="color:green;">${arr[i].name}</a>${" " + arr[i].desc}
            </li>
        `
    }
}

function showForms(arr){
    for(var i=0;i<arr.length;i++){
        document.getElementById("form-content").innerHTML += `
            <li class="par2" style="margin-top:-0.5%">
                <a href="${arr[i].link}" style="color:green;">${arr[i].name}</a>${" " + arr[i].desc}
            </li>
        `
    }
}