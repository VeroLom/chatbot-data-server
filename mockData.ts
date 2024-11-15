export interface Action {
    id: number;
    title: string;
    icon: string;
}

export interface Settings {
    color: string;
    brand: string;
    phone: string;
    address: string[];
    requisites: string;
    operator: string;
    subheader: string;
}

interface Message {
    id: number;
    delay: number;
    isUser?: boolean;
    content?: string;
    optionType?: number;
    optionsType?: number;
    options?: Option[];
}

interface Option {
    id: number;
    name: string;
    value: string | number;
    title: string;
    image?: string;
    badge?: string;
    type?: string;
    dependency?: OptionDependency;
}

interface OptionDependency {
    optionName: string;
    optionValue: string;
}

export interface DB {
    actions: Action[];
    messages: Message[];
    settings: Settings;
}

export const mockDB: DB = {
    actions: [
        {
            id: 7,
            title: "Free winter tires with purchase!",
            icon: "https://chatbot.studio-alv.ru/images/icons/podarok.png"
        },
        {
            id: 8,
            title: "Government support for Moskvich 3e purchase, benefit up to 925,000 RUB",
            icon: "https://chatbot.studio-alv.ru/images/icons/podarok.png"
        },
        {
            id: 9,
            title: "7% discount for corporate clients",
            icon: "https://chatbot.studio-alv.ru/images/icons/podarok.png"
        },
        {
            id: 10,
            title: "Special offer for Yandex and City Mobile partners",
            icon: "https://chatbot.studio-alv.ru/images/icons/podarok.png"
        }
    ],

    messages: [
        {
            id: 0,
            delay: 0,
            optionsType: 4,
            options: [
                {
                    id: 1,
                    name: "system_email_to",
                    value: 608,
                    title: "E-mail"
                },
                {
                    id: 2,
                    name: "system_form_id",
                    value: 123,
                    title: "Form ID"
                },
                {
                    id: 3,
                    name: "data[new][model]",
                    value: 0,
                    title: "Model"
                },
                {
                    id: 4,
                    name: "data[new][package]",
                    value: 0,
                    title: "Package"
                },
                {
                    id: 5,
                    name: "data[new][name]",
                    value: "",
                    title: "Name"
                },
                {
                    id: 6,
                    name: "data[new][phone]",
                    value: "",
                    title: "Phone"
                }
            ]
        },
        {
            id: 1,
            isUser: false,
            content: "Hello!<br />My name is Moskvichka. I am an online consultant at the MOSKVICH dealership",
            delay: 1000
        },
        {
            id: 2,
            isUser: false,
            content: "Please answer a few questions so I can offer you the best option",
            delay: 1000
        },
        {
            id: 3,
            isUser: false,
            content: "Which car model are you considering?<br />Choose a car from the list below",
            delay: 500
        },
        {
            id: 4,
            isUser: false,
            delay: 100,
            optionType: 0,
            options: [
                {
                    id: 3,
                    name: "data[new][model]",
                    value: "Moskvich 3",
                    title: "Moskvich 3",
                    image: "/images/models/moskvich3.png"
                },
                {
                    id: 4,
                    name: "data[new][model]",
                    value: "Moskvich 3e",
                    title: "Moskvich 3e",
                    image: "/images/models/moskvich3e.png",
                    badge: "State support — up to 925,000 rub."
                },
                {
                    id: 5,
                    name: "data[new][model]",
                    value: "Moskvich 6",
                    title: "Moskvich 6",
                    image: "/images/models/moskvich6.png"
                }
            ]
        },
        {
            id: 5,
            isUser: true
        },
        {
            "id": 6,
            "isUser": false,
            "delay": 500,
            "content": "Which configuration interests you?",
            "optionType": 1,
            "options": [
                {
                    "id": 587,
                    "name": "data[new][package]",
                    "value": "Standard",
                    "title": "Standard",
                    "dependency": {
                        "optionName": "data[new][model]",
                        "optionValue": "Moskvich 3"
                    }
                },
                {
                    "id": 588,
                    "name": "data[new][package]",
                    "value": "Standard Plus",
                    "title": "Standard Plus",
                    "dependency": {
                        "optionName": "data[new][model]",
                        "optionValue": "Moskvich 3"
                    }
                },
                {
                    "id": 589,
                    "name": "data[new][package]",
                    "value": "Comfort",
                    "title": "Comfort",
                    "dependency": {
                        "optionName": "data[new][model]",
                        "optionValue": "Moskvich 3"
                    }
                },
                {
                    "id": 590,
                    "name": "data[new][package]",
                    "value": "Electric car",
                    "title": "Electric car",
                    "dependency": {
                        "optionName": "data[new][model]",
                        "optionValue": "Moskvich 3e"
                    }
                },
                {
                    "id": 589,
                    "name": "data[new][package]",
                    "value": "Comfort",
                    "title": "Comfort",
                    "dependency": {
                        "optionName": "data[new][model]",
                        "optionValue": "Moskvich 6"
                    }
                },
                {
                    "id": 592,
                    "name": "data[new][package]",
                    "value": "Business",
                    "title": "Business",
                    "dependency": {
                        "optionName": "data[new][model]",
                        "optionValue": "Moskvich 6"
                    }
                },
                {
                    "id": 593,
                    "name": "data[new][package]",
                    "value": "Techno",
                    "title": "Techno",
                    "dependency": {
                        "optionName": "data[new][model]",
                        "optionValue": "Moskvich 6"
                    }
                }
            ]
        },
        {
            "id": 7,
            "isUser": true
        },
        {
            "id": 8,
            "isUser": false,
            "content": "How do you plan to purchase the car?",
            "delay": 500,
            "optionType": 1,
            "options": [
                {
                    "id": 1,
                    "name": "payment",
                    "value": "credit",
                    "title": "Credit"
                },
                {
                    "id": 2,
                    "name": "payment",
                    "value": "cash",
                    "title": "Cash"
                },
                {
                    "id": 3,
                    "name": "payment",
                    "value": "trade-in",
                    "title": "Trade-In"
                }
            ]
        },
        {
            "id": 9,
            "isUser": true
        },
        {
            "id": 10,
            "isUser": false,
            "delay": 500,
            "content": "Thank you, these were all the questions."
        },
        {
            "id": 11,
            "isUser": false,
            "delay": 500,
            "content": "Our manager will contact you in a few minutes and provide the exact price of the Moskvich car, considering the maximum benefits."
        },
        {
            "id": 12,
            "isUser": false,
            "content": "Please leave your phone number",
            "optionType": 2,
            "options": [
                {
                    "id": 1,
                    "name": "data[new][name]",
                    "title": "Your name",
                    "value": ""
                },
                {
                    "id": 2,
                    "name": "data[new][phone]",
                    "title": "+7 (___) ___-__-__",
                    "value": "",
                    "type": "phone"
                }
            ]
        },
        {
            "id": 13,
            "isUser": false,
            "delay": 1,
            "optionType": 3,
            "content": "Send"
        },
        {
            "id": 14,
            "isUser": false,
            "delay": 1,
            "content": "* By clicking the \"Send\" button, you agree to the processing of personal data.",
            "optionType": 5
        }
    ],

    settings: {
        color: "#0066b2",
        brand: "GEELY",
        phone: "+7 (843) 210-34-09",
        address: [
            "Kazan, 48 Sibirsky Trakt St.",
            "Kazan, 115 Gabdulla Tukay St."
        ],
        requisites: `LLC "KAN AVTO-14"<br>
            INN: 1657244365<br>
            OGRN: 1181690018058 from March 1, 2018<br><br>
            LLC "KAN AVTO-21"<br>
            INN: 1685007616<br>
            OGRN: 1221600086454 from October 25, 2022`,
        operator: "Vladimir",
        subheader: ""
    }
};