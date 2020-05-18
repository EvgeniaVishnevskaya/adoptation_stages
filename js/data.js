let data = {
    user: {
        pullups: {
            level: 2,
            qty: 6
        },
        squats: {
            level: 1,
            qty: 7
        },
        dips: {
            level: 2,
            qty: 6
        },
        hinges: {
            level: 1,
            qty: 8
        },
        rows: {
            level: 1,
            qty: 6
        },
        pushups: {
            level: 1,
            qty: 7
        }
    },
    advice: {
        pullups: [
            '«Я не могу в это поверить»',
            '«Такого не бывает»',
            '«Не со мной!»',
            '«Только не снова!»'
        ],
        squats: [
            'Это зачастую временная защита, которая дает нам время собрать информацию об изменениях перед тем, как переходить на другие этапы. Это начальная стадия оцепенения и шока. Мы не хотим верить, что изменения происходят. Если мы притворимся, что изменений нет, если мы отдалимся от него, то, возможно, оно исчезнет. Слегка похоже на страуса, прячущего голову в песок.'
        ],
        dips: [
            '«Только дай мне дожить до того, как дети окончат школу.»',
            '«Я все сделаю, повремени пока? Еще несколько лет.»',
            '«Может вы сейчас мне поставите 8, а я потом принесу? Мне никак нельзя слететь со скидки:()»',
            'Это естественная реакция умирающих людей. Попытка отложить неизбежное. Мы часто видим подобное поведение, когда люди переживают изменения. Мы начинаем торговаться, лишь бы отдалить перемены или найти выход из ситуации. Большинство сделок мы пытаемся заключить с Богом, другими людьми, с жизнью. Мы говорим «Если я пообещаю это делать, ты не допустишь этих изменений в моей жизни». В рабочих ситуациях некоторые начинают усерднее работать и часто остаются сверхурочно, пытаясь избежать сокращения.'
        ],
        hinges: [
            '«Почему я? Это несправедливо!» ',
            '«Нет! Я не могу это принять!»',
            'Когда мы осознаем, что изменения реальны и коснутся нас, наше отрицание переходит в злость. Мы злимся и обвиняем кого-то или что-то в том, что с нами происходит. Что интересно, наша злость может быть направлена совершенно в разные стороны. Люди могут злиться на начальника, самих себя, даже Бога. В тяжелые экономические времена во всем винят экономику. Это вина правительства или топ-менеджмента — надо было все спрогнозировать и просчитать. Вы можете больше раздражаться на коллег или членов семьи. Вы обнаружите, что люди начинают цепляться к мелочам.'
        ],
        rows: [
            'симптом, выражающийся в безразличии, безучастности, в отрешённом отношении к происходящему вокруг, в отсутствии стремления к какой-либо деятельности, отсутствии отрицательного и положительного отношения к действительности, отсутствии внешних эмоциональных проявлений. В сочетании с безволием составляет апато-абулический синдром, с адинамией — апатико-адинамический синдром.'
        ],
        pushups: [
            '«Я так несчастен, разве меня может что-то беспокоить?»',
            '«К чему попытки?»',
            'Когда мы понимаем, что торг не дает результатов, приближающиеся перемены становятся реальными. Мы понимаем все потери, которые повлекут за собой перемены, и все, что нам придется оставить. Это толкает людей в состояние подавленности, депрессии, отсутствие энергии. Стадия депрессии часто заметна в рабочей обстановке. Люди, сталкивающиеся с переменами на работе, достигают состояния, когда они чувствуют себя демотивированными и крайне неуверенными в их будущем. На практике эта стадия характеризуется частым отсутствием. Люди берут больничные листы.'
        ]
    },
    sets: [
        [
            [
                { group: 'pullups', name: 'Что происходит?' },
                { group: 'pullups', name: 'Ступор и непринятие' },
                { group: 'pullups', name: 'Шок или отрицание' }
            ],
            [
                { group: 'squats', name: 'Глублокое отрицание' },
                { group: 'squats', name: 'Сильное отрицание' },
                { group: 'squats', name: 'Напринятие происходящего' }
            ]
        ],
        [
            [
                { group: 'dips', name: 'Торг с собой' },
                { group: 'dips', name: 'Торг с судьбой' },
                { group: 'dips', name: 'Торг со всеми' }
            ],
            [
                { group: 'hinges', name: 'Почему я?' },
                { group: 'hinges', name: 'Злость или гнев' },
                { group: 'hinges', name: 'Неконтролируемый гнев' }
            ]
        ],
        [
            [
                { group: 'rows', name: 'Клиническая апатия' },
                { group: 'rows', name: 'Классическая апатия' },
                { group: 'rows', name: 'Потеря эмоций' }
            ],
            [
                { group: 'pushups', name: 'Я так несчастен!' },
                { group: 'pushups', name: 'Классическая депрессия' },
                { group: 'pushups', name: 'Клиничекая депрессия' }
            ]
        ],
    ],
    warmups: [
        {
            title: 'Кюблер-Росс описала пять стадий горя в своей книге «О смерти и умирании», которые соответствуют нормальным чувствам человека, когда они имеют дело с изменениями, как в личной жизни, так и на работе.',
            desc: 'Отрицание, злость, торг, депрессия и принятие.'
        },

        {
            title: 'Давайте рассмотрим поведение человека на каждой из пяти стадий.',

            desc: 'Когда Кюблер-Росс описывала эти стадии, она очень точно объяснила, что все это нормальные реакции человека на трагические новости. Она назвала их защитным механизмом. И именно их мы переживаем, когда пытаемся справиться с изменениями. Мы не переживаем эти стадии строго поочередно, точно, линейно, шаг за шагом. Это было бы слишком просто! Происходит так, что мы погружаемся в разные стадии в разное время и даже можем возвращаться обратно к тем стадиям, которые уже переживали. Кюблер-Росс говорит, что стадии могут длиться разные периоды и могут сменять друг друга или существовать одновременно. Это будет идеальным думать, что все мы достигнем стадии «Принятие» со всеми изменениями, с которыми нам предстоит столкнуться, но часто бывает, что некоторые люди зацикливаются на одной из стадий и не могут двигаться дальше.'
        }
    ],
    core: [
        {
            title: '«Живите так, чтобы оглядываясь назад, Вы не сказали: «Господи, как же я так потратил свою жизнь?»',
            desc: 'Когда люди понимают, что борьба с переменами не дает результатов, они двигаются к стадии принятия. Это не счастливое состояние, скорее покорное принятие изменение, и чувство, что они должны с этим смириться. В первый раз люди начинают оценивать перспективы. Это как поезд, въезжающий в тоннель. «Я не знаю, что там за поворотом. Я должен двигаться по рельсам, Мне страшно, но нет выбора, Надеюсь, там есть свет в конце…»'
        },
        {

            desc: 'Это может превратиться в креативное состояние, поскольку заставляет людей изучать и искать новые возможности. Люди открывают новое в себе, и это всегда здорово осознавать мужество, которое необходимо для принятия. Помните, Кюблер-Росс говорила, что мы колеблемся между стадиями. Однажды Вы чувствуете принятие, но потом за кофе на работе Вы слышите новости, которые отбрасывают Вас назад к стадии злости. Это нормально! Хотя она не включила надежду в список своих пяти стадий, Кюблер-Росс добавляет, что надежда — это важная нить, связующая все стадии. '
        },
        {

            title: 'Эта надежда дает веру, что у изменений хороший конец, и что у всего происходящего есть свой особый смысл, который мы поймем со временем.'
        }
    ]
}
