const iconsTop = 
[
    {
        icon: 'image_svg/top_panel/banknote.svg',
        name: 'banknote',
        type: 'cash',
        values: '0₽',
        title: 'Наличные',
    },

    {
        icon: 'image_svg/top_panel/bitcoin.svg',
        name: 'bitcoin',
        type: 'crypto',
        values: '0₽',
        title: 'Крипта',
    },

    {
        icon: 'image_svg/top_panel/dollar-sign.svg',
        name: 'dollar',
        type: 'currency',
        values: '0$',
        title: 'Доллар',
    },
    {
        icon: 'image_svg/top_panel/credit-card-plus.svg',
        name: 'card',
        type: 'card',
        values: '0₽',
        title: 'Карта',
    },

    {
        icon: 'image_svg/top_panel/piggy-bank.svg',
        name: 'piggy',
        type: 'savings',
        values: '0₽',
        title: 'Копилка',
    },

    {
        icon: 'image_svg/top_panel/wallet.svg',
        name: 'wallet',
        type: 'wallet',
        values: '0₽',
        title: 'Кошелёк',
    },
    
    
]

const iconsMidle = 
[
    {
        icon: 'image_svg/midle_panel/biceps-flexed.svg',
        name: 'biceps-flexed',
        type: 'sport',
        values: '0₽',
        title: 'Спорт',
    },

    {
        icon: 'image_svg/midle_panel/bone.svg',
        name: 'bone',
        type: 'pets',
        values: '0₽',
        title: 'Питомец',
    },

    {
        icon: 'image_svg/midle_panel/car.svg',
        name: 'car',
        type: 'transport',
        values: '0₽',
        title: 'Машина',
    },

    {
        icon: 'image_svg/midle_panel/graduation-cap.svg',
        name: 'graduation-cap',
        type: 'education',
        values: '0₽',
        title: 'Учеба',
    },

    {
        icon: 'image_svg/midle_panel/house.svg',
        name: 'house',
        type: 'services',
        values: '0₽',
        title: 'Услуги',
    },

    {
        icon: 'image_svg/midle_panel/plane.svg',
        name: 'plane',
        type: 'travel',
        values: '0₽',
        title: 'Путешествия',
    },

    {
        icon: 'image_svg/midle_panel/smartphone.svg',
        name: 'smartphone',
        type: 'utilities',
        values: '0₽',
        title: 'Телефон',
    },

    {
        icon: 'image_svg/midle_panel/wifi.svg',
        name: 'wifi',
        type: 'utilities',
        values: '0₽',
        title: 'Интернет',
    },
]

const element = document.createElement('div')
element.classList.add('function-container')

const foot = document.createElement('div')
foot.classList.add('foot')

for (let i = 0; i < iconsTop.length; i++) 
{
    const element = iconsTop[i]

    const item = document.createElement('div')
    item.classList.add('item')

    const name = document.createElement('span')
    name.classList.add('circle-name')
    name.innerText = element.title

    const circle = document.createElement('div')
    circle.classList.add('circle')

    const img = document.createElement('img')
    img.src = element.icon
    img.classList.add('circle-icon')

    circle.append(img)

    const value = document.createElement('span')
    value.classList.add('circle-value')
    value.innerText = element.values

    item.append(name, circle, value)
    foot.append(item)
}

const hr = document.createElement('hr')

const mid = document.createElement('div')
mid.classList.add('mid')

for (let i = 0; i < iconsMidle.length; i++) 
{
    const element = iconsMidle[i]

    const item = document.createElement('div')
    item.classList.add('item')

    const circle = document.createElement('div')
    circle.classList.add('circle')

    const img = document.createElement('img')
    img.src = element.icon
    img.classList.add('circle-icon')

    const name = document.createElement('span')
    name.classList.add('circle-name')
    name.innerText = element.title

    const value = document.createElement('span')
    value.classList.add('circle-value')
    value.innerText = element.values

    circle.append(img)
    item.append(name, circle, value)
    mid.append(item)
}

const footer = document.createElement('footer')
footer.classList.add('footer')

const PANELLogIn = document.createElement('div')
PANELLogIn.classList.add('PANELLogIn')

const ICONLogIn = document.createElement('img')
ICONLogIn.src = 'image_svg/user/user.svg'
ICONLogIn.classList.add('ICONLogIn')

const csrt = document.createElement('div')
csrt.classList.add('csrt')

const NAMELogIn = document.createElement('p')
NAMELogIn.innerText = 'accafc'

const EMAILLogIn = document.createElement('p')
EMAILLogIn.innerText = 'ascacac@gmail.com'

csrt.append(NAMELogIn, EMAILLogIn)

PANELLogIn.append(ICONLogIn, csrt)

footer.append(PANELLogIn)


element.append(foot, hr, mid, footer)

document.body.append(element)