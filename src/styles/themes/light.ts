import { DefaultTheme } from 'styled-components';
import { LIGHT } from '../../constants';

export const lightTheme: DefaultTheme = {
    title: LIGHT,

    body: {
        bg: '#F8F8FB',
        color: '#0C0E16',
    },
    text: {
        h1: '#0C0E16',
        color1: '#888EB0',
        color2: '#7E88C3',
    },
    header: {
        bg: '#373B53',
    },
    themeToggleButton: {
        color: '#858BB2',
        hover: {
            color: '#ffffff',
        },
    },
    button: {
        primary: {
            bg: '#7C5DFA',
            color: '#FFFFFF',
            hover: {
                bg: '#9277FF',
                color: '#FFFFFF',
            },
        },
        secondary: {
            bg: '#F9FAFE',
            color: '#7E88C3',
            hover: {
                bg: '#DFE3FA',
                color: '#7E88C3',
            },
        },
        tertiary: {
            bg: '#373B53',
            color: '#888EB0',
            hover: {
                bg: '#0C0E16',
                color: '#888EB0',
            },
        },
        warning: {
            bg: '#EC5757',
            color: '#FFFFFF',
            hover: {
                bg: '#FF9797',
                color: '#FFFFFF',
            },
        },
    },
    invoiceItem: {
        bg: '#FFFFFF',
        color: '#7E88C3',
        borderColor: '#FFFFFF',
        id: '#0C0E16',
        total: '#0C0E16',
        hover: {
            borderColor: '#7C5DFA',
        },
    },
    invoiceItemsList: {
        label: {
            color: '#7E88C3',
            error: {
                color: '#ec5757',
            },
        },
        borderColor: '#DFE3FA',
        error: {
            borderColor: '#ec5757',
        },
        deleteButton: {
            color: '#888EB0',
            hover: {
                color: '#ec5757',
            },
        },
        total: '#888EB0',
    },
    status: {
        pending: '#ff8f00',
        paid: '#33D69F',
        draft: '#373B53',
    },
    filterDropdown: {
        input: {
            bg: '#DFE3FA',
            borderColor: '#DFE3FA',
            hover: {
                borderColor: '#7C5DFA',
            },
        },
        dropdown: {
            bg: '#FFFFFF',
        },
        label: {
            color: '#1E2139',
        },
        checked: {
            label: {
                color: '#1E2139',
            },
            bg: '#7C5DFA',
            borderColor: '#7C5DFA',
        },
    },
    invoiceDetails: {
        bg: '#FFFFFF',
    },
    invoiceTable: {
        bg: '#F9FAFE',
        heading: '#7E88C3',
        footer: {
            bg: '#373B53',
            color: '#FFFFFF',
        },
    },
    form: {
        legend: {
            color: '#7C5DFA',
        },
    },
    textField: {
        bg: '#FFFFFF',
        borderColor: '#DFE3FA',
        focus: {
            borderColor: '#9277ff',
        },
        error: {
            borderColor: '#EC5757',
        },
        label: {
            color: '#7e88c3',
            error: {
                color: '#EC5757',
            },
        },
    },
    drawer: {
        bg: '#FFFFFF',
    },
    deleteModal: {
        bg: '#FFFFFF',
        heading: '#0C0E16',
        body: '#888EB0',
    },
    datePicker: {
        bg: '#FFF',
        color: '#0C0E16',
        selectedBg: '#7C5DFA',
        selectedColor: '#FFF',
        daysOutOfMonth: '#EBEBEC',
        borderColor: '#DFE3FA',
        focus: {
            borderColor: '#9277ff',
        },
        error: {
            borderColor: '#EC5757',
        },
        label: {
            color: '#7e88c3',
            error: {
                color: '#EC5757',
            },
        },
    },
};
