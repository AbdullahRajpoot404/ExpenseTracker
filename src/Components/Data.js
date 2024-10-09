import { TbBurger } from "react-icons/tb";
import { IoMdCut } from "react-icons/io";
import { MdAirplanemodeActive } from "react-icons/md";
import { FaCaravan } from "react-icons/fa";
import { MdPartyMode } from "react-icons/md";
import { FaEquals } from "react-icons/fa";
import { RiEqualizer2Fill } from "react-icons/ri";
import { SiBmcsoftware } from "react-icons/si";
import ap1 from '../Static/ap1.jpg';
import ap2 from '../Static/ap2.jpg';
import asp3 from '../Static/asp3.jpg';

export const teamSpending = [
    {
        id: 1,
        name: 'PJ',
        amount: 90000
    },
    {
        id: 2,
        name: 'SJ',
        amount: 25000
    },
    {
        id: 3,
        name: 'MB',
        amount: 95000
    },
    {
        id: 4,
        name: 'IS',
        amount: 80000
    },
    {
        id: 5,
        name: 'DW',
        amount: 38000
    },
    {
        id: 6,
        name: 'NJ',
        amount: 59000
    },
    {
        id: 7,
        name: 'BS',
        amount: 105000
    }

]


export const dayToDayExpense = [
    {
        id: 1,
        name: 'Accomodation',
        percentage: 59
    },
    {
        id: 2,
        name: 'Comms',
        percentage: 20
    },
    {
        id: 3,
        name: 'Services',
        percentage: 100
    },
    {
        id: 4,
        name: 'Food',
        percentage: 80
    },
    {
        id: 5,
        name: 'Fuel',
        percentage: 40
    }

]

export const iconMaping = {
    'Food': <TbBurger className="text-[#24DBC6]" />,
    'Traveling': <FaCaravan className="text-[#24DBC6]" />,
    'Catering': <IoMdCut className="text-[#24DBC6]" />,
    'Parties': <MdPartyMode className="text-[#24DBC6]" />,
    'Accomodation': <MdAirplanemodeActive className="text-[#24DBC6]" />,
    'Software': <SiBmcsoftware className="text-[#24DBC6]" />,
    'Default': <RiEqualizer2Fill className="text-[#24DBC6]" />
}

export const expensesData = [
    // {
    //     details: [
    //         {
    //             icon: <TbBurger className="text-[#24DBC6]" />,
    //             date: "09/09/2022",
    //             subject: "Food Catering",
    //         }
    //     ],
    //     category: "Food",
    //     amount: "250",
    //     report: "November_2022",
    //     payment: "Credited",
    //     category: "Food",
    // },
    // {
    //     details: [
    //         {
    //             icon: <IoMdCut className="text-[#24DBC6]" />,
    //             date: "09/09/2022",
    //             subject: "Food Catering",
    //         }
    //     ],
    //     category: "Travel",
    //     amount: "400",
    //     report: "November_2022",
    //     payment: "Credited",
    //     category: "Food",
    // },
    // {
    //     details: [
    //         {
    //             icon: <TbBurger className="text-[#24DBC6]" />,
    //             date: "09/09/2022",
    //             subject: "Party",
    //         }
    //     ],
    //     category: "Party",
    //     amount: "520",
    //     report: "November_2022",
    //     payment: "Credited",
    //     category: "Parties",
    // },
    // {
    //     details: [
    //         {
    //             icon: <TbBurger className="text-[#24DBC6]" />,
    //             date: "09/09/2022",
    //             subject: "Travel",
    //         }
    //     ],
    //     category: "Catering",
    //     amount: "300",
    //     report: "November_2022",
    //     payment: "Credited",
    //     category: "Traveling",
    // },

]

export const tripsData = [
    {
        details: [
            {
                icon: <MdAirplanemodeActive className="text-[#BB98F2]" />,
                date: "09/09/2022",
                destination: "Food Catering",
            }
        ],
        name: "McFood",
        budget: "$250.00",
        report: "November_2022",
        status: "Not Submitted"
    },
    {
        details: [
            {
                icon: <MdAirplanemodeActive className="text-[#BB98F2]" />,
                date: "09/09/2022",
                destination: "Food Catering",
            }
        ],
        name: "McFood",
        budget: "$250.00",
        report: "November_2022",
        status: "Not Submitted"
    },
    {
        details: [
            {
                icon: <MdAirplanemodeActive className="text-[#BB98F2]" />,
                date: "09/09/2022",
                destination: "Food Catering",
            }
        ],
        name: "McFood",
        budget: "$250.00",
        report: "November_2022",
        status: "Not Submitted"
    },
    {
        details: [
            {
                icon: <MdAirplanemodeActive className="text-[#BB98F2]" />,
                date: "09/09/2022",
                destination: "Food Catering",
            }
        ],
        name: "McFood",
        budget: "$250.00",
        report: "November_2022",
        status: "Not Submitted"
    },
    {
        details: [
            {
                icon: <MdAirplanemodeActive className="text-[#BB98F2]" />,
                date: "09/09/2022",
                destination: "Food Catering",
            }
        ],
        name: "McFood",
        budget: "$250.00",
        report: "November_2022",
        status: "Not Submitted"
    },

]


export const ApprovalsData = [
    {
        details: [
            {
                icon: ap1,
                date: "09/09/2022",
                text: "Food Catering",
            }
        ],
        catagory: "McFood",
        amount: "$250.00",
        frequency: "November_2022",
    },
    {
        details: [
            {
                icon: ap2,
                date: "09/09/2022",
                text: "Food Catering",
            }
        ],
        catagory: "McFood",
        amount: "$250.00",
        frequency: "November_2022",
    },
    {
        details: [
            {
                icon: ap1,
                date: "09/09/2022",
                text: "Food Catering",
            }
        ],
        catagory: "McFood",
        amount: "$250.00",
        frequency: "November_2022",
    },
    {
        details: [
            {
                icon: asp3,
                date: "09/09/2022",
                text: "Food Catering",
            }
        ],
        catagory: "McFood",
        amount: "$250.00",
        frequency: "November_2022",
    },
    {
        details: [
            {
                icon: ap2,
                date: "09/09/2022",
                text: "Food Catering",
            }
        ],
        catagory: "McFood",
        amount: "$250.00",
        frequency: "November_2022",
    },
]

export const CategoryData = [
    {
        name: "Food",
        editor: "Shameem Hossain",
    },
    {
        name: "Traveling",
        editor: "Asad Randhava",
    },
    {
        name: "Parties",
        editor: "Pandia Chopra",
    },
    {
        name: "Catering",
        editor: "Shameem Hossain"
    }
]