/***********************************/
// المديد
/***********************************/

var madeed =
    bp +
    'البحر المديد، وسُمِّيَ بذلك لكثرة ألفاته الممدودة، وقيل غير ذلك، وهذا البحر قليل الاستعمال، فلم ينظم العرب عليه كثيرًا.' +
    '<br />◆ أصل بنائه:  فاعلاتن فاعلن فاعلاتن فاعلن * فاعلاتن فاعلن فاعلاتن فاعلن' +
    '<br />◆ صوره المروية عن العرب :' +
    '<br />1️⃣ مجزوء (صحيح العروض والضرب).' +
    '<br />2️⃣ مجزوء (عروضه محذوفة، وضربه مقصور).' +
    '<br />3️⃣ مجزوء (عروضه محذوفة، وضربه محذوف).' +
    '<br />4️⃣ مجزوء (عروضه محذوفة، وضربه أبتر).' +
    '<br />5️⃣ مجزوء (عروضه مخبونة محذوفة، وضربه مخبون محذوف).' +
    '<br />6️⃣ مجزوء (عروضه مخبونة محذوفة، وضربه أبتر).' +
    '<br /><a target="_blank" href="https://abuqudamah.com/talkheesat_shafeyah_17">للاستزادة</a>' +
    cp;

// مجزوء 1
awzaan['madeed1'] = {
    'name': 'البحر المديد',
    'type': 'مجزوء',
    'desc': '[العروض: صحيحة] - [الضرب: صحيح]',
    'orig': 'فاعلاتن فاعلن فاعلاتن * فاعلاتن فاعلن فاعلاتن',
    'taf3eelah': [{
            Key: 'x',
            Value: [
                { K: '1011010', V: 'فَاعِلاتُنْ' },
                { K: '111010', V: 'فَعِلاتُنْ' },
                { K: '101101', V: 'فاعِلاتُ' },
                { K: '11101', V: 'فَعِلاتُ' }
            ]
        },
        {
            Key: 'x',
            Value: [
                { K: '10110', V: 'فَاعِلُنْ' },
                { K: '1110', V: 'فَعِلُنْ' }
            ]
        },
        {
            Key: 'x',
            Value: [
                { K: '1011010', V: 'فَاعِلاتُنْ' },
                { K: '111010', V: 'فَعِلاتُنْ' },
                { K: '101101', V: 'فاعِلاتُ' },
                { K: '11101', V: 'فَعِلاتُ' }
            ]
        },

        {
            Key: 'x',
            Value: [
                { K: '1011010', V: 'فَاعِلاتُنْ' },
                { K: '111010', V: 'فَعِلاتُنْ' },
                { K: '101101', V: 'فاعِلاتُ' },
                { K: '11101', V: 'فَعِلاتُ' }
            ]
        },
        {
            Key: 'x',
            Value: [
                { K: '10110', V: 'فَاعِلُنْ' },
                { K: '1110', V: 'فَعِلُنْ' }
            ]
        },
        {
            Key: 'x',
            Value: [
                { K: '1011010', V: 'فَاعِلاتُنْ' },
                { K: '111010', V: 'فَعِلاتُنْ' },
                { K: '101101', V: 'فاعِلاتُ' },
                { K: '11101', V: 'فَعِلاتُ' }
            ]
        },
    ],
    'nobdhah': madeed +
        tp +
        '{ORIG}' +
        '<br />● مثال :' +
        '<br />إنّ دارًا نَحْنُ فيها لَدارُ * لَيْسَ فيها لِمُقيمٍ قَرارُ' +
        '<br />● الكتابة العَرُوضِيّة:' +
        '<br />إنْنَ دارَنْ نَحْنُ فيها لَدارُ * لَيْسَ فيها لِمُقيمِنْ قَرارُو' +
        '<br />● ترميز البيت:' +
        '<br />(/ه//ه/ه)(/ه//ه)(/ه//ه/) * (/ه//ه/ه)(///ه)(/ه//ه/ه)' +
        cp
};

// مجزوء 2
awzaan['madeed2'] = {
    'name': 'البحر المديد',
    'type': 'مجزوء',
    'desc': '[العروض: محذوفة] - [الضرب: مقصور]',
    'orig': 'فاعلاتن فاعلن فاعلا (فاعلن) * فاعلاتن فاعلن فاعلاتْ (فاعلانْ)',
    'taf3eelah': [{
            Key: 'x',
            Value: [
                { K: '1011010', V: 'فَاعِلاتُنْ' },
                { K: '111010', V: 'فَعِلاتُنْ' },
                { K: '101101', V: 'فاعِلاتُ' },
                { K: '11101', V: 'فَعِلاتُ' }
            ]
        },
        {
            Key: 'x',
            Value: [
                { K: '10110', V: 'فَاعِلُنْ' },
                { K: '1110', V: 'فَعِلُنْ' }
            ]
        },
        { Key: '10110', Value: 'فَاعِلُنْ' },

        {
            Key: 'x',
            Value: [
                { K: '1011010', V: 'فَاعِلاتُنْ' },
                { K: '111010', V: 'فَعِلاتُنْ' },
                { K: '101101', V: 'فاعِلاتُ' },
                { K: '11101', V: 'فَعِلاتُ' }
            ]
        },
        {
            Key: 'x',
            Value: [
                { K: '10110', V: 'فَاعِلُنْ' },
                { K: '1110', V: 'فَعِلُنْ' }
            ]
        },
        { Key: '101100', Value: 'فَاعِلَانْ' },
    ],
    'nobdhah': madeed +
        tp +
        '{ORIG}' +
        '<br />● مثال :' +
        '<br />كُلُّ جَبَّارٍ مَضَى عَهْدُهُ * كُلُّ عَاتٍ قَدْ غَدَا ذِكْرَياتْ' +
        '<br />● الكتابة العَرُوضِيّة:' +
        '<br />كُلْلُ جَبْبَارِنْ مَضَى عَهْدُهُو * كُلْلُ عَاتِنْ قَدْ غَدَا ذِكْرَياتْ' +
        '<br />● ترميز البيت:' +
        '<br /> (/ه//ه/ه)(/ه//ه)(/ه//ه) * (/ه//ه/ه)(/ه//ه)(/ه//ه ه)' +
        cp
};

// مجزوء 3
awzaan['madeed3'] = {
    'name': 'البحر المديد',
    'type': 'مجزوء',
    'desc': '[العروض: محذوفة] - [الضرب: محذوف]',
    'orig': 'فاعلاتن فاعلن فاعلا (فاعلن) * فاعلاتن فاعلن فاعلا (فاعلنْ)',
    'taf3eelah': [{
            Key: 'x',
            Value: [
                { K: '1011010', V: 'فَاعِلاتُنْ' },
                { K: '111010', V: 'فَعِلاتُنْ' },
                { K: '101101', V: 'فاعِلاتُ' },
                { K: '11101', V: 'فَعِلاتُ' }
            ]
        },
        {
            Key: 'x',
            Value: [
                { K: '10110', V: 'فَاعِلُنْ' },
                { K: '1110', V: 'فَعِلُنْ' }
            ]
        },
        { Key: '10110', Value: 'فَاعِلُنْ' },

        {
            Key: 'x',
            Value: [
                { K: '1011010', V: 'فَاعِلاتُنْ' },
                { K: '111010', V: 'فَعِلاتُنْ' },
                { K: '101101', V: 'فاعِلاتُ' },
                { K: '11101', V: 'فَعِلاتُ' }
            ]
        },
        {
            Key: 'x',
            Value: [
                { K: '10110', V: 'فَاعِلُنْ' },
                { K: '1110', V: 'فَعِلُنْ' }
            ]
        },
        { Key: '10110', Value: 'فَاعِلُنْ' },
    ],
    'nobdhah': madeed +
        tp +
        '{ORIG}' +
        '<br />● مثال :' +
        '<br />يا إلَهي إنني تائبٌ * مِنْ ذُنُوبي كُلَّها وَ الْهَوَى' +
        '<br />● الكتابة العَرُوضِيّة:' +
        '<br />يا إلاهي إنْنَنِي تائبُنْ * مِنْ ذُنُوبي كُلْلَها وَلْهَوَى' +
        '<br />● ترميز البيت:' +
        '<br />(/ه//ه/ه)(/ه//ه)(/ه//ه) * (/ه//ه/ه)(/ه//ه)(/ه//ه)' +
        cp
};

// مجزوء 4
awzaan['madeed4'] = {
    'name': 'البحر المديد',
    'type': 'مجزوء',
    'desc': '[العروض: محذوفة] - [الضرب: أبتر]',
    'orig': 'فاعلاتن فاعلن فاعلا (فاعلن) * فاعلاتن فاعلن فاعلْ',
    'taf3eelah': [{
            Key: 'x',
            Value: [
                { K: '1011010', V: 'فَاعِلاتُنْ' },
                { K: '111010', V: 'فَعِلاتُنْ' },
                { K: '101101', V: 'فاعِلاتُ' },
                { K: '11101', V: 'فَعِلاتُ' }
            ]
        },
        {
            Key: 'x',
            Value: [
                { K: '10110', V: 'فَاعِلُنْ' },
                { K: '1110', V: 'فَعِلُنْ' }
            ]
        },
        { Key: '10110', Value: 'فَاعِلُنْ' },

        {
            Key: 'x',
            Value: [
                { K: '1011010', V: 'فَاعِلاتُنْ' },
                { K: '111010', V: 'فَعِلاتُنْ' },
                { K: '101101', V: 'فاعِلاتُ' },
                { K: '11101', V: 'فَعِلاتُ' }
            ]
        },
        {
            Key: 'x',
            Value: [
                { K: '10110', V: 'فَاعِلُنْ' },
                { K: '1110', V: 'فَعِلُنْ' }
            ]
        },
        { Key: '1010', Value: 'فَاعِلْ' },
    ],
    'nobdhah': madeed +
        tp +
        '{ORIG}' +
        '<br />● مثال :' +
        '<br />يا رَفِيقِي في طَرِيقِ الْهُدَى * كُنْ قَوِيًّا دائمَ الصَّبْرِ' +
        '<br />● الكتابة العَرُوضِيّة:' +
        '<br />يا رَفِيقِي في طَرِيقِ لْهُدَى * كُنْ قَوِيْيَنْ دائمَ صْصَبْرِي' +
        '<br />● ترميز البيت:' +
        '<br />(/ه//ه/ه)(/ه//ه)(/ه//ه) * (/ه//ه/ه)(/ه//ه)(/ه/ه)' +
        cp
};

// مجزوء 5
awzaan['madeed5'] = {
    'name': 'البحر المديد',
    'type': 'مجزوء',
    'desc': '[العروض: مخبونة محذوفة] - [الضرب: مخبون محذوف]',
    'orig': 'فاعلاتن فاعلن فَعِلا (فعلن) * فاعلاتن فاعلن فَعِلا (فعلن)',
    'taf3eelah': [{
            Key: 'x',
            Value: [
                { K: '1011010', V: 'فَاعِلاتُنْ' },
                { K: '111010', V: 'فَعِلاتُنْ' },
                { K: '101101', V: 'فاعِلاتُ' },
                { K: '11101', V: 'فَعِلاتُ' }
            ]
        },
        {
            Key: 'x',
            Value: [
                { K: '10110', V: 'فَاعِلُنْ' },
                { K: '1110', V: 'فَعِلُنْ' }
            ]
        },
        { Key: '1110', Value: 'فَعِلُنْ' },

        {
            Key: 'x',
            Value: [
                { K: '1011010', V: 'فَاعِلاتُنْ' },
                { K: '111010', V: 'فَعِلاتُنْ' },
                { K: '101101', V: 'فاعِلاتُ' },
                { K: '11101', V: 'فَعِلاتُ' }
            ]
        },
        {
            Key: 'x',
            Value: [
                { K: '10110', V: 'فَاعِلُنْ' },
                { K: '1110', V: 'فَعِلُنْ' }
            ]
        },
        { Key: '1110', Value: 'فَعِلُنْ' },
    ],
    'nobdhah': madeed +
        tp +
        '{ORIG}' +
        '<br />● مثال :' +
        '<br />دعْ بَنِي دُنْياكَ، لا شَفَعُوا * لاِمْرِئٍ يَوْمًا ولا نَفَعُوا' +
        '<br />● الكتابة العَرُوضِيّة:' +
        '<br />دعْ بَنِي دُنْياكَ، لا شَفَعُو * لِمْرِئِنْ يَوْمَنْ ولا نَفَعُو' +
        '<br />● ترميز البيت:' +
        '<br />(/ه//ه/ه)(/ه//ه)(///ه) * (/ه//ه/ه)(/ه//ه)(///ه)' +
        cp
};

// مجزوء 6
awzaan['madeed6'] = {
    'name': 'البحر المديد',
    'type': 'مجزوء',
    'desc': '[العروض: مخبونة محذوفة] - [الضرب: أبتر]',
    'orig': 'فاعلاتن فاعلن فَعِلا (فعلن) * فاعلاتن فاعلن فاعلْ',
    'taf3eelah': [{
            Key: 'x',
            Value: [
                { K: '1011010', V: 'فَاعِلاتُنْ' },
                { K: '111010', V: 'فَعِلاتُنْ' },
                { K: '101101', V: 'فاعِلاتُ' },
                { K: '11101', V: 'فَعِلاتُ' }
            ]
        },
        {
            Key: 'x',
            Value: [
                { K: '10110', V: 'فَاعِلُنْ' },
                { K: '1110', V: 'فَعِلُنْ' }
            ]
        },
        { Key: '1110', Value: 'فَعِلُنْ' },

        {
            Key: 'x',
            Value: [
                { K: '1011010', V: 'فَاعِلاتُنْ' },
                { K: '111010', V: 'فَعِلاتُنْ' },
                { K: '101101', V: 'فاعِلاتُ' },
                { K: '11101', V: 'فَعِلاتُ' }
            ]
        },
        {
            Key: 'x',
            Value: [
                { K: '10110', V: 'فَاعِلُنْ' },
                { K: '1110', V: 'فَعِلُنْ' }
            ]
        },
        { Key: '1010', Value: 'فاعِلْ' },
    ],
    'nobdhah': madeed +
        tp +
        '{ORIG}' +
        '<br />● مثال :' +
        '<br />حِينَ لاحَ النورُ مُنْبَثِقًا * مِن ثَنايا الشَّرقِ كَالنَهْرِ' +
        '<br />● الكتابة العَرُوضِيّة:' +
        '<br />حِينَ لاحَ نْنُورُ مُنْبَثِقَنْ * مِنْ ثَنايَ شْشَرْقِ كَنْنَهْرِي' +
        '<br />● ترميز البيت:' +
        '<br />(/ه//ه/ه)(/ه//ه)(///ه) * (/ه//ه/ه)(/ه//ه)(/ه/ه)' +
        cp
};