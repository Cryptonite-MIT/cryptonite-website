const subsystems = [
    {
        id: "ad",
        name: "Attack/Defense",
        cardId: "SYS-1099-AD",
        icon: "assets/domain-logos/atk-def.png",
        flavor: "Digital chess, where every move is critical.",
        desc: "Dual-focus domain combining offensive security (vulnerability discovery, exploitation) with defensive operations (system hardening, incident response). Expertise in network protocols, system architecture, and advanced security tools.",
        tools: ["Metasploit", "Cobalt Strike", "Wireshark"],
    },
    {
        id: "binexp",
        name: "Binary Exploitation",
        cardId: "SYS-0421-BE",
        icon: "assets/domain-logos/binex.png",
        flavor: "Making programs dance to our tune.",
        desc: "Low-level software exploitation focusing on memory corruption and binary analysis. Involves crafting exploits for buffer overflows, format strings, and use-after-free vulnerabilities. Requires expertise in assembly, memory management, and modern protections.",
        tools: ["GDB", "IDA Pro", "pwntools"],
    },
    {
        id: "crypto",
        name: "Cryptography",
        cardId: "SYS-3141-CR",
        icon: "assets/domain-logos/crypto.png",
        flavor: "Secrets encoded, puzzles to be unraveled.",
        desc: "Mathematical security through encryption and authentication. Covers classical ciphers, modern cryptography (RSA, ECC), and implementation security. Analyzes cryptographic vulnerabilities including side-channel attacks and protocol weaknesses.",
        tools: ["CrypTool", "Hashcat", "SageMath"],
    },
    {
        id: "forensics",
        name: "Digital Forensics",
        cardId: "SYS-8008-DF",
        icon: "assets/domain-logos/forensic.png",
        flavor: "Sifting through the digital ashes for truth.",
        desc: "Digital evidence analysis through file system forensics, memory analysis, and network traffic investigation. Focuses on data recovery, timeline reconstruction, and malware analysis using industry-standard forensic tools.",
        tools: ["Autopsy", "Volatility", "FTK Imager"],
    },
    {
        id: "hardware",
        name: "Hardware Security",
        cardId: "SYS-9001-HW",
        icon: "assets/domain-logos/hardware.png",
        flavor: "Where silicon meets exploit.",
        desc: "Physical device security through firmware analysis, side-channel attacks, and hardware interfaces. Uses specialized equipment for signal analysis and fault injection. Combines electrical engineering with security principles.",
        tools: ["Bus Pirate", "JTAGulator", "ChipWhisperer"],
    },
    {
        id: "research",
        name: "Research and AI",
        cardId: "SYS-0001-RD",
        icon: "assets/domain-logos/research.png",
        flavor: "Charting the unknown territories of cyber.",
        desc: "Explores the convergence of AI and cybersecurity. Develops AI-powered security solutions while researching adversarial machine learning and AI vulnerabilities. Advances both pure AI applications and core cybersecurity through innovative research.",
        tools: ["TensorFlow", "PyTorch", "Custom ML Models"],
    },
    {
        id: "reveng",
        name: "Reverse Engineering",
        cardId: "SYS-1234-RE",
        icon: "assets/domain-logos/reverse.png",
        flavor: "Taking things apart to see how they tick.",
        desc: "Analyzes compiled software through decompilation, debugging, and code reconstruction. Focuses on malware analysis and vulnerability discovery. Requires mastery of assembly, debugging tools, and operating system internals.",
        tools: ["Ghidra", "x64dbg", "IDA Pro"],
    },
    {
        id: "webexp",
        name: "Web Exploitation",
        cardId: "SYS-8080-WE",
        icon: "assets/domain-logos/webex.png",
        flavor: "The wild west of the internet, tamed.",
        desc: "Web application security through vulnerability assessment and exploitation. Masters SQL injection, XSS, auth bypass, and API security. Combines automated scanning with manual analysis of web technologies.",
        tools: ["Burp Suite", "sqlmap", "OWASP ZAP"],
    },
    {
        id: "mgmt",
        name: "Management",
        cardId: "SYS-5000-OD",
        icon: "assets/domain-logos/mgmt.png",
        flavor: "The architects and conductors of the symphony.",
        desc: "Orchestrates cybersecurity operations and cross-domain projects. Specializes in technical project management, security event coordination, and industry partnerships. Bridges technical expertise with organizational efficiency.",
        tools: ["Trello", "Discord", "Figma"],
    }
];

const boardMembers = [
    {
        name: "Barri Harshith",
        alias: "{wixter_07}",
        role: "Team Leader",
        avatar: "assets/board-photos/25-26/harshith-leader.webp",
        linkedin: "https://www.linkedin.com/in/barri-harshith-5196a7252/",
        github: "https://github.com/Wixter07",
        instagram: "https://www.instagram.com/sort_of_an_individualist/",
        quote: "{wixter_07}",
        domains: ["Leadership", "Reverse Engineering", "Cryptography", "Attack/Defense"]
    },
    {
        name: "Satwik Shreshtha",
        alias: "{xenon}",
        role: "Team Manager",
        avatar: "assets/board-photos/25-26/satwik-manager.webp",
        linkedin: "https://www.linkedin.com/in/satwik-shreshtha-8592ab285/",
        github: "https://github.com/s4twik",
        instagram: "https://www.instagram.com/s4twk/",
        quote: "{xenon}",
        domains: ["Management", "Digital Forensics", "Hardware Security"]
    },
    {
        name: "Madhav Menon",
        alias: "{ice_lemon}",
        role: "Cryptography Head",
        avatar: "assets/board-photos/25-26/madhav-crypto.webp",
        linkedin: "https://www.linkedin.com/in/madhav-menon-2k6/",
        github: "https://github.com/IC3lemon",
        instagram: "https://www.instagram.com/ice.incarnate/",
        quote: "{ice_lemon}",
        domains: ["Cryptography", "Reverse Engineering"]
    },
    {
        name: "Aayush Barhate",
        alias: "{al1a5}",
        role: "Reverse Engineering Head",
        avatar: "assets/board-photos/25-26/aayush-reverse.webp",
        linkedin: "https://www.linkedin.com/in/aayushbarhate/",
        github: "https://github.com/AayushBarhate",
        instagram: "https://www.instagram.com/aayush.barhate/",
        quote: "{al1a5}",
        domains: ["Reverse Engineering", "Digital Forensics", "Hardware Security", "Network Security"]
    },
    {
        name: "Adriteyo Das",
        alias: "{tryhard}",
        role: "Research & AI Head",
        avatar: "assets/board-photos/25-26/adriteyo-research.webp",
        linkedin: "https://www.linkedin.com/in/adriteyo-das/",
        github: "https://github.com/Addy-Da-Baddy",
        instagram: "https://www.instagram.com/addyction__/",
        quote: "{tryhard}",
        domains: ["Research", "Artificial Intelligence", "Digital Forensics"]
    },
    {
        name: "Jayapal Ashwin Nair",
        alias: "{crabsnk}",
        role: "Binary Exploitation Head",
        avatar: "assets/board-photos/25-26/ashwin-binex.webp",
        linkedin: "https://www.linkedin.com/in/ashwin-nair-33277b276/",
        github: "https://github.com/oxo-crab",
        instagram: "https://www.instagram.com/4sh_saysstarcorrection/",
        quote: "{crabsnk}",
        domains: ["Binary Exploitation"]
    },
    {
        name: "Krish Pandey",
        alias: "{vikaran}",
        role: "Attack/Defense & Hardware Security Head",
        avatar: "assets/board-photos/25-26/krish-hardware-ad.webp",
        linkedin: "https://www.linkedin.com/in/krish-pandey-0bba4133b/",
        github: "https://github.com/vikaran101",
        instagram: "https://www.instagram.com/krees_baba/",
        quote: "{vikaran}",
        domains: ["Attack/Defense", "Hardware Security", "Reverse Engineering", "Web Exploitation"]
    },
    {
        name: "Lakshit Verma",
        alias: "{lvert}",
        role: "Forensics Head",
        avatar: "assets/board-photos/25-26/lakshit-forensics.webp",
        linkedin: "https://linkedin.com/in/lakshitverma",
        github: "https://github.com/vee1e",
        instagram: "https://instagram.com/lakshitdotverma",
        quote: "{lvert}",
        domains: [ "Digital Forensics", "Reverse Engineering", "Hardware Security", ]
    },
    {
        name: "Rishabh Bachhawat",
        alias: "{mrrobot404}",
        role: "Web Exploitation Head",
        avatar: "assets/board-photos/25-26/rishabh-webex.webp",
        linkedin: "https://www.linkedin.com/in/rishabh-bachhawat-505877284/",
        github: "https://github.com/CoderZonora",
        instagram: "",
        quote: "{mrrobot404}",
        domains: ["Web Exploitation", "Infrastructure"]
    },
];

const boardMembers3rdYear = [
    { name: "Aditya Ram",            alias: "{snapskillz}",     avatar: "", linkedin: "", github: "", instagram: "", },
    { name: "Adwait Gupta",          alias: "{pookiemon}",      avatar: "", linkedin: "", github: "", instagram: "", },
    { name: "Dhruva Deepak",         alias: "{kua_23}",         avatar: "", linkedin: "", github: "", instagram: "", },
    { name: "Guru Asrith Nakka",     alias: "{masterraider}",   avatar: "", linkedin: "", github: "", instagram: "", },
    { name: "Kaaviya Kalyanakumar",  alias: "{enigmatronix13}", avatar: "", linkedin: "", github: "", instagram: "", },
    { name: "Meeti Mehta",           alias: "{mm}",             avatar: "", linkedin: "", github: "", instagram: "", },
    { name: "Misha Jain",            alias: "{notamilkshake}",  avatar: "", linkedin: "", github: "", instagram: "", },
    { name: "Poorvi Kanodia",        alias: "{Lun4n1v3rs3}",    avatar: "", linkedin: "", github: "", instagram: "", },
    { name: "Shantanu Bhargava",     alias: "{hackerone}",      avatar: "", linkedin: "", github: "", instagram: "", },
    { name: "Shreyith Gomes",        alias: "{shrey_07}",       avatar: "", linkedin: "", github: "", instagram: "", },
    { name: "Uttam Singh Somvanshi", alias: "{azure}",          avatar: "", linkedin: "", github: "", instagram: "", },
];

const subsystemsGrid = document.getElementById('subsystems-grid');

const createSubsystemCards = () => {
    subsystemsGrid.textContent = '';

    if (window.innerWidth <= 900) {
        const mobileList = document.createElement('ul');
        mobileList.classList.add('subsystem-card-mobile-list');

        subsystems.forEach(sub => {
            const listItem = document.createElement('li');

            listItem.innerHTML = `
                <img src="${sub.icon}" alt="${sub.name} Icon" class="domain-icon" loading="lazy" decoding="async" onerror="this.style.display='none'">
                <div class="domain-info">
                    <div class="domain-name">${sub.name}</div>
                    <div class="domain-desc">${sub.flavor || ''}</div>
                </div>
            `;

            mobileList.appendChild(listItem);
        });

        subsystemsGrid.appendChild(mobileList);
    } else {
        subsystems.forEach(sub => {
            const cardWrapper = document.createElement('div');
            cardWrapper.classList.add('subsystem-card');

            const toolsList = sub.tools ? `<br><br>Utilized tools: ${sub.tools.join(', ')}.` : '';
            const detailedDescription = `${sub.desc} ${toolsList}`;

            cardWrapper.innerHTML = `
                <div class="card-3d">
                    <div class="subsystem-card-front">
                        <div class="absolute top-2 right-2 text-xs font-accent text-[var(--color-text-muted)] opacity-70">${sub.cardId || 'N/A'}</div>
                        <img src="${sub.icon}" alt="${sub.name} Icon" class="subsystem-card-icon" loading="lazy" decoding="async" onerror="this.style.display='none'">
                        <div>
                            <h3 class="subsystem-card-title">${sub.name}</h3>
                            <p class="subsystem-card-flavor-text">${sub.flavor || ''}</p>
                        </div>
                    </div>
                    <div class="subsystem-card-hover">
                        <p class="subsystem-card-description">${detailedDescription}</p>
                    </div>
                </div>
            `;
            subsystemsGrid.appendChild(cardWrapper);
        });
    }
};

if (subsystemsGrid) createSubsystemCards();

let isMobileLayout = window.innerWidth <= 900;
let resizeTimerId = null;
function handleResizeOptimized() {
    const nowMobile = window.innerWidth <= 900;
    if (nowMobile !== isMobileLayout) {
        isMobileLayout = nowMobile;
        if (subsystemsGrid) createSubsystemCards();
        if (teamGrid) createTeamCards();
        createBoardMembersCards();
        if (alumniGrid) renderAlumniCards(sortedAlumniData);
    }
}
window.addEventListener('resize', () => {
    if (resizeTimerId) clearTimeout(resizeTimerId);
    resizeTimerId = setTimeout(handleResizeOptimized, 150);
});

const achievements = {
    ctfPerformance: [
        { event: "NCIIPC & AICTE Pentathon 2025",         result: "1st Place", prize: "2,50,000 INR", date: "May 2025",      link: "https://www.linkedin.com/posts/cryptonite-mit_pentathon2025-cybersecurity-activity-7327746895156563968-9Suw" },
        { event: "Securium Flag Hunter 2.0 CTF",          result: "3rd Place", prize: "44,000 INR",   date: "October 2025",  link: "" },
        { event: "CSAW Embedded Security Challenge",      result: "1st Place", prize: "30,000 INR",   date: "November 2025", link: "https://github.com/TrustworthyComputing/csaw_esc_2025/blob/main/Finals-Leaderboard.md" },
        { event: "RVCE X IIT Bombay Trust Lab CTF 2024",  result: "2nd Place", prize: "30,000 INR",   date: "June 2024",     link: "https://www.linkedin.com/posts/cryptonite-mit_ctf2025-cybersecurity-hacktheflag-activity-7330500497231007744-py_6" },
        { event: "PES CRYOVault CTF",                     result: "2nd Place", prize: "27,000 INR",   date: "November 2025", link: "" },
        { event: "SuperTeam CTF",                         result: "3rd Place", prize: "27,000 INR",   date: "July 2025",     link: "https://www.instagram.com/p/DOSqJG7kcSG/" },
        { event: "CRAW CTF at Prometeo, IIT Jodhpur",     result: "1st Place", prize: "25,000 INR",   date: "February 2025", link: "https://www.linkedin.com/posts/cryptonite-mit_crawsec-prometeo2025-itinnovation-activity-7287822560791015427-GUej" },
        { event: "GIT X IIT Bombay Trust Lab CTF 2025",   result: "1st Place", prize: "25,000 INR",   date: "May 2025",      link: "https://www.linkedin.com/posts/cryptonite-mit_ctf2025-cybersecurity-hacktheflag-activity-7330500497231007744-py_6" },
        { event: "KJSSE CTF",                             result: "1st Place", prize: "15,000 INR",   date: "February 2025", link: "https://www.linkedin.com/posts/cryptonite-mit_ctf-cybersecurity-activity-7294965557664120834-euXv" },
        { event: "BSides Bangalore B5 CTF",               result: "1st Place", prize: "15,000 INR",   date: "June 2025",     link: "https://www.linkedin.com/posts/cryptonite-mit_b5ctf-w2ctf-bsidesbangalore-activity-7353522564335353859-kiuo" },
        { event: "Securium Independence Day CTF",         result: "1st Place", prize: "10,000 INR",   date: "August 2025",   link: "" },
        { event: "CruXipher CTF, BITS Hyderabad",         result: "1st Place", prize: "10,000 INR",   date: "November 2025", link: "" },
        { event: "BSides Bangalore W2 CTF",               result: "2nd Place", prize: "7,000 INR",    date: "June 2025",     link: "https://www.linkedin.com/posts/cryptonite-mit_b5ctf-w2ctf-bsidesbangalore-activity-7353522564335353859-kiuo" },
    ],
    hackathons: [
        { event: "DSCI Cyber Security Grand Challenge",   result: "Qualified", prize: "5,00,000 INR", date: "June 2025",     link: "https://static.mygov.in/static/s3fs-public/mygov_1747831020122933441.pdf" },
        { event: "Smart India Hackathon 2023 (PS 1454)",  result: "1st Place", prize: "1,00,000 INR", date: "December 2023", link: "https://www.instagram.com/p/C1KBjH9vjXr/" },
        { event: "Smart India Hackathon 2024 (PS 1749)",  result: "1st Place", prize: "1,00,000 INR", date: "December 2024", link: "https://www.linkedin.com/posts/cryptonite-mit_team-cryptonites-nitewatch-clinched-the-activity-7274997714784845824-d71d" },
        { event: "Cyber Crimes Conclave, IISc Bangalore", result: "2nd Place", prize: "1,00,000 INR", date: "February 2024", link: "https://www.instagram.com/p/C5bch3gtn9O/" },
        { event: "AICS ICONIP CyberAI Cup 2023",          result: "1st Place", prize: "3,000 NZD",    date: "November 2023", link: "" },
        { event: "AICS ICONIP CyberAI Cup 2024",          result: "3rd Place", prize: "1,000 NZD",    date: "November 2024", link: "" },
        { event: "AICS ICONIP CyberAI Cup 2025",          result: "3rd Place", prize: "500 NZD",      date: "November 2025", link: "https://www.linkedin.com/posts/manipal-institute-of-technology_mitmanipal-manipalinstituteoftechnology-activity-7394263130790461440-RT9N" }
    ]
};

const teamGrid = document.getElementById('team-grid');

const createTeamCards = () => {
    teamGrid.textContent = '';

    if (window.innerWidth <= 900) {
        const mobileList = document.createElement('ul');
        mobileList.classList.add('member-card-mobile-list');

        boardMembers.forEach((member, index) => {
            const listItem = document.createElement('li');

            listItem.innerHTML = `
                <img src="${member.avatar}" class="member-icon" loading="lazy" decoding="async" onerror="this.style.display='none'">
                <div class="member-info">
                    <div class="member-name">${member.name}</div>
                    <div class="member-role">${member.role}</div>
                </div>
            `;

            mobileList.appendChild(listItem);
        });

        teamGrid.appendChild(mobileList);
    } else {
        boardMembers.forEach((member, index) => {
            const slateWrapper = document.createElement('div');
            slateWrapper.classList.add('member-slate');

            let socialLinksHTML = `<a href="${member.linkedin}" target="_blank" aria-label="LinkedIn"><i class="fab fa-linkedin"></i></a>
                                 <a href="${member.github}" target="_blank" aria-label="GitHub"><i class="fab fa-github"></i></a>`;
            if (member.instagram) {
                socialLinksHTML += ` <a href="${member.instagram}" target="_blank" aria-label="Instagram"><i class="fab fa-instagram"></i></a>`;
            }

            let domainsHTML = '<div class="member-domains my-2">';
            if (member.domains && member.domains.length) {
                member.domains.forEach(domain => {
                    const domainClass = domain.toLowerCase().replace(/[^a-z]/g, '-');
                    domainsHTML += `<span class="domain-badge ${domainClass}">${domain}</span>`;
                });
            }
            domainsHTML += '</div>';

            slateWrapper.innerHTML = `
                <div class="card-3d member-card-custom">
                    <div class="card-3d-content">
                        <img src="${member.avatar}" class="member-avatar" loading="lazy" decoding="async">
                        <div class="member-name-container">
                            <h4 class="member-name real-name">${member.name}</h4>
                            <h4 class="member-name hacker-alias glitch-text">${member.alias}</h4>
                        </div>
                        <p class="member-role">${member.role}</p>
                        <p class="member-quote">${member.quote}</p>
                        ${domainsHTML}
                        <div class="member-socials mt-auto">${socialLinksHTML}</div>
                    </div>
                </div>
            `;
            teamGrid.appendChild(slateWrapper);
        });
    }
};

const createBoardMembersCards = () => {
    const boardMembersGrid = document.getElementById('board-members-grid');
    if (!boardMembersGrid) return;

    boardMembersGrid.textContent = '';

    if (window.innerWidth <= 900) {
        const mobileList = document.createElement('ul');
        mobileList.classList.add('board-members-mobile-list');

        boardMembers3rdYear.forEach((member, index) => {
            const listItem = document.createElement('li');

            listItem.innerHTML = `
                <div class="member-info">
                    <div class="member-name">${member.name}</div>
                </div>
            `;

            mobileList.appendChild(listItem);
        });

        boardMembersGrid.appendChild(mobileList);
    } else {
        boardMembers3rdYear.forEach((member, index) => {
            const slateWrapper = document.createElement('div');
            slateWrapper.classList.add('board-member-slate');

            const isLongAlias = member.alias.length > 15;
            slateWrapper.innerHTML = `
                <div class="card-3d board-member-card">
                    <div class="card-3d-content">
                        <div class="member-name-container">
                            <h4 class="member-name real-name">${member.name}</h4>
                            <h4 class="member-name hacker-alias glitch-text ${isLongAlias ? 'long-text' : ''}">${member.alias}</h4>
                        </div>
                        <p class="member-role">Board Member</p>
                        ${member.domains ? `<div class="member-domains my-2">
                            ${member.domains.map(domain => `<span class="domain-badge ${domain.toLowerCase().replace(/[^a-z]/g, '-')}">${domain}</span>`).join('')}
                        </div>` : ''}
                    </div>
                </div>
            `;
            boardMembersGrid.appendChild(slateWrapper);
        });
    }
};

const achievementsGrid = document.getElementById('achievements-grid');
if (achievementsGrid) {
    const ctfPerformanceHTML = achievements.ctfPerformance.map(item =>
        `<li class="achievement-item">
            <div class="achievement-prize">${item.prize}</div>
            <div class="achievement-event">${item.link ? `<a href="${item.link}" target="_blank" class="competition-link">${item.event}</a>` : item.event}</div>
            <div class="achievement-place">${item.result}</div>
            <div class="achievement-date">${item.date}</div>
        </li>`
    ).join('');

    const hackathonsHTML = achievements.hackathons.map(item =>
        `<li class="achievement-item">
            <div class="achievement-prize">${item.prize}</div>
            <div class="achievement-event">${item.link ? `<a href="${item.link}" target="_blank" class="competition-link">${item.event}</a>` : item.event}</div>
            <div class="achievement-place">${item.result}</div>
            <div class="achievement-date">${item.date}</div>
        </li>`
    ).join('');

    achievementsGrid.innerHTML = `
        <div class="achievements-container">
            <div class="achievement-section">
                <h3 class="section-title">CTF Performance</h3>
                <div class="achievement-header">
                    <div class="achievement-prize">Prize Money</div>
                    <div class="achievement-event">Competition</div>
                    <div class="achievement-place">Placement</div>
                    <div class="achievement-date">Date</div>
                </div>
                <ul class="achievement-list">${ctfPerformanceHTML}</ul>
            </div>

            <div class="achievement-section">
                <h3 class="section-title">Hackathons & Competitions</h3>
                <div class="achievement-header">
                    <div class="achievement-prize">Prize Money</div>
                    <div class="achievement-event">Competition</div>
                    <div class="achievement-place">Placement</div>
                    <div class="achievement-date">Date</div>
                </div>
                <ul class="achievement-list">${hackathonsHTML}</ul>
            </div>

            <div class="achievement-section">
                <div class="ctftime-stats-container">
                                    <div class="ctftime-header">
                    <div class="ctftime-logo-badge">
                        <img src="assets/logos/ctftime.svg" alt="CTFTime" class="ctftime-logo" loading="lazy" decoding="async">
                    </div>
                    <h3>CTFtime Statistics</h3>

                    <a href="https://ctftime.org/team/62713/" target="_blank" class="ctftime-profile-link">VIEW FULL PROFILE</a>
                </div>

                    <div class="ctftime-stats-grid">
                        <div class="stat-card country-rank">
                            <div class="stat-value" id="country-rank">-</div>
                            <div class="stat-label">India Rank</div>
                            <div class="stat-subtitle">2025</div>
                        </div>

                        <div class="stat-card global-rank">
                            <div class="stat-value" id="global-rank">-</div>
                            <div class="stat-label">Global Rank</div>
                            <div class="stat-subtitle">2025</div>
                        </div>

                        <div class="stat-card total-points">
                            <div class="stat-value" id="total-points">-</div>
                            <div class="stat-label">Total Points</div>
                            <div class="stat-subtitle">2025</div>
                        </div>

                        <div class="stat-card country-rank-prev">
                            <div class="stat-value" id="country-rank-prev">-</div>
                            <div class="stat-label">India Rank</div>
                            <div class="stat-subtitle" id="prev-year-label">-</div>
                        </div>

                        <div class="stat-card global-rank-prev">
                            <div class="stat-value" id="global-rank-prev">-</div>
                            <div class="stat-label">Global Rank</div>
                            <div class="stat-subtitle" id="prev-year-label-2">-</div>
                        </div>

                        <div class="stat-card total-points-prev">
                            <div class="stat-value" id="total-points-prev">-</div>
                            <div class="stat-label">Total Points</div>
                            <div class="stat-subtitle" id="prev-year-label-3">-</div>
                        </div>
                    </div>

                    <div class="ctftime-yearly-progress">
                        <h4>Yearly Progress</h4>
                        <div class="yearly-chart" id="yearly-chart">
                            <div class="loading-spinner">Loading...</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

if (teamGrid) createTeamCards();
createBoardMembersCards();

const alumniData = [
    { name: "Abhay Nayar",              batch: "2021", current: "Amazon",                     position: "reverse engineering head", linkedin: "https://www.linkedin.com/in/abhaynayar/" },
    { name: "Bhavya Sharma",            batch: "2021", current: "Deustche Bank",              position: "team leader",              linkedin: "https://www.linkedin.com/in/bhvya1505/" },
    { name: "Numan Zaheer Ahmed",       batch: "2021", current: "VMware",                     position: "technical head",           linkedin: "https://www.linkedin.com/in/anutrix" },

    { name: "Aman Priyanshu",           batch: "2023", current: "Carnegie Mellon University", position: "technical head",           linkedin: "https://www.linkedin.com/in/aman-priyanshu/" },
    { name: "Cynthia Maria Dsouza",     batch: "2023", current: "McKinsey & Company",         position: "team manager",             linkedin: "https://www.linkedin.com/in/cynthia-maria-dsouza/" },
    { name: "Haseeb Khalid",            batch: "2023", current: "CloudDefense.AI",            position: "web exploitation head",    linkedin: "https://www.linkedin.com/in/haseebkhalid1507/" },
    { name: "Kaustubh Mangalwedhekar",  batch: "2023", current: "Microsoft",                  position: "cryptography head",        linkedin: "https://www.linkedin.com/in/kaustubh3574/" },
    { name: "Nithin Chowdary Garapati", batch: "2023", current: "Cisco",                      position: "-",                        linkedin: "https://www.linkedin.com/in/nithin-chowdary-garapati-795432192/" },
    { name: "Rajat Agarwal",            batch: "2023", current: "WellsFargo",                 position: "attack/defense head",      linkedin: "https://www.linkedin.com/in/rajat18agarwal/" },
    { name: "Sai Charan Teja Ande",     batch: "2023", current: "Cisco",                      position: "-",                        linkedin: "https://www.linkedin.com/in/sai-charan-teja-ande/" },
    { name: "Sohom Datta",              batch: "2023", current: "PhD at NCSU",                position: "reverse engineering head", linkedin: "https://www.linkedin.com/in/sohom-datta-c29ob20k/" },

    { name: "Kunyalik Garg",            batch: "2024", current: "Palo Alto Networks",         position: "team leader",              linkedin: "https://www.linkedin.com/in/kunyalik/" },
    { name: "Luhit Atluri",             batch: "2024", current: "ABB",                        position: "cryptography head",        linkedin: "https://www.linkedin.com/in/luhit/" },
    { name: "Rayhan Faizel",            batch: "2024", current: "GSoC @ libvirt",             position: "binary exploitation head", linkedin: "https://www.linkedin.com/in/rayhan-f-2933281b3/" },
    { name: "Rohan Vinod Pol",          batch: "2024", current: "Google",                     position: "-",                        linkedin: "https://www.linkedin.com/in/rohan2182/" },

    { name: "Aditi Kulkarni",           batch: "2025", current: "PayU",                       position: "research head",            linkedin: "https://www.linkedin.com/in/aditi-kulkarni-393568229/" },
    { name: "Daksh Dadhania",           batch: "2025", current: "Optum",                      position: "web exploitation head",    linkedin: "https://www.linkedin.com/in/dakshdadhania/" },
    { name: "Dhruthi Kumar",            batch: "2025", current: "AQR Capital Management",     position: "cryptography head",        linkedin: "https://www.linkedin.com/in/dhruthi-k-60998b236/" },
    { name: "Kumud Rathore",            batch: "2025", current: "ServiceNow",                 position: "team manager",             linkedin: "https://www.linkedin.com/in/knowkumud/" },
    { name: "Prabhakar Dev",            batch: "2025", current: "Sabre India",                position: "technical head",           linkedin: "https://www.linkedin.com/in/prabhakar-dev-6633b81b7/" },
    { name: "Shreyansh Sankrit",        batch: "2025", current: "Jio InfoComm",               position: "team leader",              linkedin: "https://www.linkedin.com/in/shreyansh-sankrit/" },
    { name: "Shreyas BS",               batch: "2025", current: "ISAC",                       position: "networking head",          linkedin: "https://www.linkedin.com/in/shreyas1860/" },
    { name: "Siddharth Mittal",         batch: "2025", current: "NCIIPC",                     position: "forensics head",           linkedin: "https://www.linkedin.com/in/siddharth-mittal-/" },
    { name: "Sriyans Ketavarapu",       batch: "2025", current: "FIS Global",                 position: "ai head",                  linkedin: "https://www.linkedin.com/in/sriyansketavarapu/" },

    // { name: "Avanish Money Srivats",    batch: "2026", current: "ARM",                        position: "research head",            linkedin: "https://www.linkedin.com/in/avanish-money-srivats-9bb362234/" },
    // { name: "Ansh Goyal",               batch: "2026", current: "Dassault Systèmes",          position: "team manager",             linkedin: "https://www.linkedin.com/in/ansh-goyal/" },
    // { name: "Gurmann Ajmani",           batch: "2026", current: "Amazon",                     position: "ai head",                  linkedin: "https://www.linkedin.com/in/gurmann-singh-ajmani-a80a31262/" },
    { name: "Ishan Surana",             batch: "2026", current: "AQR Capital Management",     position: "-",                        linkedin: "https://www.linkedin.com/in/ishansurana/" },
    { name: "Nishant Gunda",            batch: "2026", current: "Cisco",                      position: "binary exploitation head", linkedin: "https://www.linkedin.com/in/nishant-gunda-96530b250/" },
    // { name: "Prashant K",               batch: "2026", current: "NetApp",                     position: "team leader",              linkedin: "https://www.linkedin.com/in/prashanth-j-kumar/" },
    // { name: "Rigved Waradpande",        batch: "2026", current: "Philips",                    position: "-",                        linkedin: "https://www.linkedin.com/in/rigved-waradpande-b0b147253/" },
    // { name: "Rupak Banerjee",           batch: "2026", current: "CloudDefense.AI",            position: "web exploitation head",    linkedin: "https://www.linkedin.com/in/rupak-banerjee-61509727b/" },
    // { name: "Tanmay Saxena",            batch: "2026", current: "Adani Group",                position: "cryptography head",        linkedin: "https://www.linkedin.com/in/tanmay-saxena-76aa85274/" },
    // { name: "Uday Ojha",                batch: "2026", current: "PGI Data",                   position: "reverse engineering Head", linkedin: "https://www.linkedin.com/in/uday-o/" },
    { name: "Yogesh Prashant Rane",     batch: "2026", current: "Cisco",                      position: "forensics head",           linkedin: "https://www.linkedin.com/in/yogesh-rane-1b1064253/" },
    // { name: "Yvsr Akash",               batch: "2026", current: "ARM",                        position: "attack/defense head",      linkedin: "https://www.linkedin.com/in/yvsr-akash-995847184/" },
];

const alumniGrid = document.getElementById('alumni-grid');
const alumniSearchInput = document.getElementById('alumni-search');

const renderAlumniCards = (list) => {
    if (!alumniGrid) return;
    alumniGrid.textContent = '';

    if (window.innerWidth <= 900) {
        const mobileList = document.createElement('ul');
        mobileList.classList.add('alumni-mobile-list');

        list.forEach(alum => {
            const listItem = document.createElement('li');
            listItem.classList.add(`batch-${alum.batch}`);
            listItem.innerHTML = `
                <div class="alumni-item-left">
                    <div class="member-name">${alum.name}</div>
                    <div class="member-role">${alum.position && alum.position !== '-' ? alum.position : 'Team Member'}</div>
                </div>
                <div class="alumni-item-right">
                    <div class="member-current">${alum.current}</div>
                    ${alum.linkedin ? `<a href="${alum.linkedin}" target="_blank" class="member-linkedin-text"><i class="fab fa-linkedin"></i><span>LinkedIn</span></a>` : ''}
                </div>
            `;
            mobileList.appendChild(listItem);
        });

        alumniGrid.appendChild(mobileList);
    } else {
        list.forEach(alum => {
            const slateWrapper = document.createElement('div');
            slateWrapper.classList.add('alumni-slate', `batch-${alum.batch}`);
            slateWrapper.innerHTML = `
                <div class="card-3d alumni-card">
                    <div class="card-3d-content">
                        <h4 class="member-name">${alum.name}</h4>
                        <p class="member-role">${alum.position && alum.position !== '-' ? alum.position : 'Team Member'}</p>
                        <p class="member-company">${alum.current}</p>
                        <div class="member-skills">
                            <span class="skill-badge">Batch of ${alum.batch}</span>
                            ${alum.batch === '2021' ? '<span class="founding-badge">Founding Batch</span>' : ''}
                        </div>
                        ${alum.linkedin ? `<a href="${alum.linkedin}" target="_blank" class="member-linkedin"><i class="fab fa-linkedin"></i></a>` : ''}
                    </div>
                </div>
            `;
            alumniGrid.appendChild(slateWrapper);
        });
    }
};

const sortedAlumniData = alumniData.sort((a, b) => {
    if (a.batch !== b.batch) {
        return parseInt(b.batch) - parseInt(a.batch);
    }
    return a.name.localeCompare(b.name);
});

if (alumniGrid) {
    renderAlumniCards(sortedAlumniData);
}

if (alumniSearchInput && alumniGrid) {
    alumniSearchInput.addEventListener('input', (e) => {
        const q = e.target.value.toLowerCase();
        const filtered = sortedAlumniData.filter(a =>
            a.name.toLowerCase().includes(q) ||
            a.batch.toLowerCase().includes(q) ||
            a.current.toLowerCase().includes(q) ||
            (a.position || '').toLowerCase().includes(q)
        );
        renderAlumniCards(filtered);
    });
}
