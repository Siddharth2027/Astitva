document.addEventListener('DOMContentLoaded', () => {
    const stateDetails = {
        'IN-AN': {
            clothing: "Cotton Sarees, Kurtas",
            danceForms: "Nicobari Dance",
            food: "Seafood Curry, Coconut Prawn",
            festivals: "Island Tourism Festival",
            art: "Shell Craft",
            architecture: "Cellular Jail"
        },
        'IN-AP': {
            clothing: "Kalamkari, Dharmavaram Saree",
            danceForms: "Kuchipudi",
            food: "Hyderabadi Biryani, Pesarattu",
            festivals: "Sankranti, Ugadi",
            art: "Kalamkari Painting",
            architecture: "Amaravati Stupa, Tirupati Temple"
        },
        'IN-AR': {
            clothing: "Galuk, Sherdukpen Jacket",
            danceForms: "Bardo Chham",
            food: "Thukpa, Bamboo Shoot Fry",
            festivals: "Losar, Siang River Festival",
            art: "Wood Carving",
            architecture: "Tawang Monastery"
        },
        'IN-AS': {
            clothing: "Mekhela Chador",
            danceForms: "Bihu Dance, Sattriya",
            food: "Masor Tenga, Pitha",
            festivals: "Bihu",
            art: "Cane and Bamboo Craft",
            architecture: "Kamakhya Temple"
        },
        'IN-BR': {
            clothing: "Saree, Dhoti",
            danceForms: "Jhijhiya, Jat-Jatin",
            food: "Litti Chokha, Sattu Paratha",
            festivals: "Chhath Puja",
            art: "Madhubani Painting",
            architecture: "Mahabodhi Temple"
        },
        'IN-CH': {
            clothing: "Kurta Pajama",
            danceForms: "Bhangra (influence)",
            food: "Butter Chicken (influence)",
            festivals: "Diwali",
            art: "Phulkari (influence)",
            architecture: "Rock Garden, Capitol Complex"
        },
        'IN-CT': {
            clothing: "Saree, Kurta",
            danceForms: "Chhau",
            food: "Arsa, Balushahi",
            festivals: "Teej, Bastar Dussehra",
            art: "Dhokra Art",
            architecture: "Bhoramdeo Temple"
        },
        'IN-DN': {
            clothing: "Gujarati-style Saree",
            danceForms: "Garba (influence)",
            food: "Dhokla (influence)",
            festivals: "Navratri",
            art: "Pithora Painting",
            architecture: "Silvassa Church"
        },
        'IN-DD': {
            clothing: "Koli-style Dress",
            danceForms: "Tarpa Dance",
            food: "Fish Curry",
            festivals: "Diwali",
            art: "Warli Art (influence)",
            architecture: "Diu Fort"
        },
        'IN-DL': {
            clothing: "Salwar Kameez, Kurta",
            danceForms: "Kathak",
            food: "Chole Bhature, Paratha",
            festivals: "Diwali, Holi",
            art: "Mughal Miniature",
            architecture: "Red Fort, Qutub Minar"
        },
        'IN-GA': {
            clothing: "Koli Dress, Kunbi Saree",
            danceForms: "Dekhni, Fugdi",
            food: "Fish Curry Rice, Bebinca",
            festivals: "Carnival, Shigmo",
            art: "Coconut Shell Craft",
            architecture: "Basilica of Bom Jesus"
        },
        'IN-GJ': {
            clothing: "Chaniya Choli, Kediyu",
            danceForms: "Garba, Dandiya",
            food: "Dhokla, Thepla",
            festivals: "Navratri, Rann Utsav",
            art: "Bandhani",
            architecture: "Somnath Temple, Rani ki Vav"
        },
        'IN-HR': {
            clothing: "Ghagra Choli, Kurta Pajama",
            danceForms: "Ghoomar, Jhumar",
            food: "Bajra Khichdi, Kachri Chutney",
            festivals: "Teej, Surajkund Mela",
            art: "Phad Painting",
            architecture: "Sultanpur Bird Sanctuary"
        },
        'IN-HP': {
            clothing: "Pahari Topi, Ghagra",
            danceForms: "Nati",
            food: "Dham, Siddu",
            festivals: "Kullu Dussehra",
            art: "Kangra Painting",
            architecture: "Hidimba Devi Temple"
        },
        'IN-JK': {
            clothing: "Pheran",
            danceForms: "Rouf, Dumhal",
            food: "Rogan Josh, Kahwa",
            festivals: "Eid, Shikara Festival",
            art: "Kashmiri Carpet Weaving",
            architecture: "Shankaracharya Temple"
        },
        'IN-JH': {
            clothing: "Saree, Kurta",
            danceForms: "Chhau, Karma",
            food: "Rugda, Thekua",
            festivals: "Sarhul",
            art: "Sohrai Painting",
            architecture: "Jagannath Temple (Ranchi)"
        },
        'IN-KA': {
            clothing: "Mysore Silk Saree, Lungis",
            danceForms: "Yakshagana, Bharatanatyam",
            food: "Bisi Bele Bath, Ragi Mudde",
            festivals: "Dasara, Karaga",
            art: "Channapatna Toys",
            architecture: "Bangalore Palace, Hampi"
        },
        'IN-KL': {
            clothing: "Mundum Neriyathum",
            danceForms: "Kathakali, Mohiniyattam",
            food: "Sadya, Puttu",
            festivals: "Onam, Thrissur Pooram",
            art: "Mural Painting",
            architecture: "Padmanabhapuram Palace"
        },
        'IN-LD': {
            clothing: "Traditional Robes",
            danceForms: "Chham Dance",
            food: "Fish Curry",
            festivals: "Diwali",
            art: "Coral Craft",
            architecture: "Minicoy Lighthouse"
        },
        'IN-MP': {
            clothing: "Bandhani Saree, Dhoti",
            danceForms: "Gaur Maria, Karma",
            food: "Poha, Bhutte ka Kees",
            festivals: "Tansen Samaroh",
            art: "Gond Art",
            architecture: "Khajuraho Temples, Sanchi Stupa"
        },
        'IN-MH': {
            clothing: "Paithani Saree, Dhoti",
            danceForms: "Lavani, Tamasha",
            food: "Puran Poli, Vada Pav",
            festivals: "Ganesh Chaturthi, Gudi Padwa",
            art: "Warli Art",
            architecture: "Ajanta Caves, Gateway of India"
        },
        'IN-MN': {
            clothing: "Phanek, Innaphi",
            danceForms: "Manipuri (Ras Leela)",
            food: "Eromba, Chak-hao Kheer",
            festivals: "Yaoshang",
            art: "Handloom Weaving",
            architecture: "Kangla Fort"
        },
        'IN-ML': {
            clothing: "Jainsem, Ryndia",
            danceForms: "Shad Suk Mynsiem",
            food: "Jadoh, Tungrymbai",
            festivals: "Behdienkhlam",
            art: "Bamboo Craft",
            architecture: "Nartiang Monoliths"
        },
        'IN-MZ': {
            clothing: "Puanchei",
            danceForms: "Cheraw",
            food: "Bamboo Shoot Fry, Vawksa",
            festivals: "Chapchar Kut",
            art: "Textile Weaving",
            architecture: "Solomon’s Temple"
        },
        'IN-NL': {
            clothing: "Naga Shawl",
            danceForms: "Chang Lo",
            food: "Smoked Pork, Axone",
            festivals: "Hornbill Festival",
            art: "Wood Carving",
            architecture: "Kohima War Cemetery"
        },
        'IN-OR': {
            clothing: "Sambalpuri Saree",
            danceForms: "Odissi",
            food: "Pakhala Bhata, Chhena Poda",
            festivals: "Rath Yatra",
            art: "Pattachitra",
            architecture: "Konark Sun Temple"
        },
        'IN-PY': {
            clothing: "Saree, Lungi",
            danceForms: "Bharatanatyam",
            food: "Seafood, Dosa",
            festivals: "Pongal",
            art: "Tanjore Painting",
            architecture: "Auroville Matrimandir"
        },
        'IN-PB': {
            clothing: "Phulkari, Kurta Pajama",
            danceForms: "Bhangra, Giddha",
            food: "Makki di Roti, Sarson da Saag",
            festivals: "Lohri, Baisakhi",
            art: "Phulkari Embroidery",
            architecture: "Golden Temple"
        },
        'IN-RJ': {
            clothing: "Bandhani Saree, Pagdi",
            danceForms: "Ghoomar, Kalbeliya",
            food: "Dal Baati Churma",
            festivals: "Pushkar Fair",
            art: "Miniature Painting",
            architecture: "Hawa Mahal, Amber Fort"
        },
        'IN-SK': {
            clothing: "Bakhu, Thokro-Dum",
            danceForms: "Singhi Chham",
            food: "Momo, Phagshapa",
            festivals: "Losar, Saga Dawa",
            art: "Thangka Painting",
            architecture: "Rumtek Monastery"
        },
        'IN-TN': {
            clothing: "Kanchipuram Saree, Veshti",
            danceForms: "Bharatanatyam",
            food: "Dosa, Pongal",
            festivals: "Pongal, Jallikattu",
            art: "Tanjore Painting",
            architecture: "Meenakshi Temple"
        },
        'IN-TG': {
            clothing: "Pochampally Saree",
            danceForms: "Perini Shivatandavam",
            food: "Hyderabadi Biryani",
            festivals: "Bathukamma",
            art: "Cheriyal Scroll Painting",
            architecture: "Charminar"
        },
        'IN-TR': {
            clothing: "Rignai, Rikutu",
            danceForms: "Hojagiri",
            food: "Mui Borok",
            festivals: "Ker Puja",
            art: "Bamboo Handicrafts",
            architecture: "Ujjayanta Palace"
        },
        'IN-UP': {
            clothing: "Chikan Kurta, Saree",
            danceForms: "Kathak",
            food: "Kebabs, Biryani",
            festivals: "Kumbh Mela",
            art: "Chikankari",
            architecture: "Taj Mahal"
        },
        'IN-UT': {
            clothing: "Kulluvi Pattu, Churidar",
            danceForms: "Nati",
            food: "Madra, Kaale Channe ka Khatta",
            festivals: "Phulaich Fair",
            art: "Pahari Painting",
            architecture: "Har Ki Pauri"
        },
        'IN-WB': {
            clothing: "Tant Saree, Dhoti",
            danceForms: "Gaudiya Nritya",
            food: "Roshogolla, Machher Jhol",
            festivals: "Durga Puja",
            art: "Terracotta Craft",
            architecture: "Victoria Memorial"
        }
    };

    const mapPaths = document.querySelectorAll('#india-map path');

    mapPaths.forEach(path => {
        path.addEventListener('click', function () {
            const state = path.id;
            console.log(`Clicked state: ${state}`); // Debug output
            displayStateInfo(state);
        });
    });

    function displayStateInfo(state) {
        const details = stateDetails[state];
        const detailsDiv = document.getElementById('details');

        if (details) {
            detailsDiv.innerHTML = `
                <h3>${state}</h3>
                <p><strong>Clothing:</strong> ${details.clothing}</p>
                <p><strong>Dance Forms:</strong> ${details.danceForms}</p>
                <p><strong>Food:</strong> ${details.food}</p>
                <p><strong>Festivals:</strong> ${details.festivals}</p>
                <p><strong>Art:</strong> ${details.art}</p>
                <p><strong>Architecture:</strong> ${details.architecture}</p>
            `;
        } else {
            detailsDiv.innerHTML = `<p>No information available for this state.</p>`;
        }
    }
});