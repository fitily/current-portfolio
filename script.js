document.addEventListener('DOMContentLoaded', () => {
    const personalInfo = {
        dateOfBirth: "Thursday, 25th October 2001",
        placeOfBirth: "Ambatomainty, Ambohidratrimo (Madagascar)",
        country: "Madagascar",
        nationality: "Malagasy"
    };

    const education = [
        { period: "February 2024 – Present", detail: "Common core of Computer Science student, 42 Antananarivo (Madagascar)" },
        { period: "2022 – 2023", detail: "Bachelor’s of Computer Science, CNTEMAD University (Madagascar)" },
        { period: "2017", detail: "High school diploma “Baccalauréat”, High school Ambohidratrimo (Madagascar)" }
    ];

    const scoutExperiences = [
        { period: "January 2018 – Present", detail: "Scout unit leader, Group number 280thB, District Analamanga Andrefana, Tily Eto Madagasikara" },
        { period: "March 2024", detail: "Member of the Scout Organizers Team for Earth Hour celebration" },
        { period: "28th to 30th March 2024", detail: "Team leader of the Scout Skills Competition in my local district" },
        { period: "Saturday 25th November 2023", detail: "Responsible for the leadership module course during Patrol Leader training" },
        { period: "Wednesday 06th July 2022", detail: "Wood badge award" },
        { period: "7th to 14th August 2021", detail: "Scout unit leader camp" },
        { period: "9th to 19th February 2020", detail: "Representative of the National Scout Organization (NSO) of Madagascar at the international scout gathering in Sharjah, UAE" },
        { period: "June to August 2019", detail: "Participated in expedition, workshops, and cultural exchange with the Scotland Scouts and UK Scouts" }
    ];

    const leadership = [
        { period: "18th May 2024 – Present", detail: "Initiator and leader of the “FromScratch” project" },
        { period: "06th May 2024 – Present", detail: "Youth African Leader Initiative (YALI) Hybrid Cohort 24, civic leadership track, University of South Africa" },
        { period: "25th April 2024", detail: "Representative of 42 Antananarivo during the UNICEF Madagascar visit" },
        { period: "22nd to 26th January 2024", detail: "Transformational leadership and project management training" },
        { period: "April 2019 to February 2024", detail: "Executive Secretary of Youth Association at my local church, FJKM Iarinarivo, Madagascar" }
    ];

    const volunteering = [
        { period: "11th November to 24th December 2021", detail: "Implemented an initiative to teach alphabets to four children" },
        { period: "2019 to 2022", detail: "Hand Support at a social center Akany Avoko Faravohitra, Antananarivo" },
        { period: "February to April 2018", detail: "Volunteered as an English and Mathematics teacher at the public secondary school “CEG Iarinarivo”, Madagascar" }
    ];

    const skillsInterests = [
        "Fluent in English, French, and Malagasy",
        "Computer skills: Word, PowerPoint, C language, HTML, CSS, JavaScript, Linux system administration, script shell, Python",
        "Interests: Environment, sustainability, scouting, leadership, lifelong learning, new technology, traveling, biking"
    ];

    const sections = {
        "personal-info": personalInfo,
        "education": education,
        "scout-experiences": scoutExperiences,
        "leadership": leadership,
        "volunteering": volunteering,
        "skills-interests": skillsInterests
    };

    for (const [sectionId, content] of Object.entries(sections)) {
        const section = document.getElementById(sectionId).querySelector('.content');

        if (Array.isArray(content)) {
            content.forEach(item => {
                if (typeof item === 'object') {
                    section.innerHTML += `<p><strong>${item.period}:</strong> ${item.detail}</p>`;
                } else {
                    section.innerHTML += `<p>${item}</p>`;
                }
            });
        } else {
            for (const [key, value] of Object.entries(content)) {
                section.innerHTML += `<p><strong>${key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}:</strong> ${value}</p>`;
            }
        }
    }
});