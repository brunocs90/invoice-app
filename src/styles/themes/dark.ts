import { DefaultTheme } from 'styled-components';
import { DARK } from '../../constants';

export const darkTheme: DefaultTheme = {
    title: DARK,

    body: {
        bg: '#141625',
        color: '#ffffff',
    },
    text: {
        h1: '#ffffff',
        color1: '#DFE3FA',
        color2: '#DFE3FA',
    },
    header: {
        bg: '#1E2139',
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
            bg: '#252945',
            color: '#DFE3FA',
            hover: {
                bg: '#FFFFFF',
                color: '#DFE3FA',
            },
        },
        tertiary: {
            bg: '#373B53',
            color: '#DFE3FA',
            hover: {
                bg: '#1E2139',
                color: '#DFE3FA',
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
        bg: '#1E2139',
        color: '#DFE3FA',
        borderColor: '#1E2139',
        id: '#ffffff',
        total: '#ffffff',
        hover: {
            borderColor: '#7C5DFA',
        },
    },
    invoiceItemsList: {
        label: {
            color: '#DFE3FA',
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
        total: '#DFE3FA',
    },
    status: {
        pending: '#ff8f00',
        paid: '#33D69F',
        draft: '#DFE3FA',
    },
    filterDropdown: {
        dropdown: {
            bg: '#252945',
        },
        label: {
            color: '#DFE3FA',
        },
        bg: '#DFE3FA',
        borderColor: '#DFE3FA',
        hover: {
            borderColor: '#7C5DFA',
        },
        checked: {
            label: {
                color: '#DFE3FA',
            },
            bg: '#7C5DFA',
            borderColor: '#7C5DFA',
        },
    },
    invoiceDetails: {
        bg: '#1E2139',
    },
    invoiceTable: {
        bg: '#252945',
        heading: '#DFE3FA',
        footer: {
            bg: '#0C0E16',
            color: '#FFFFFF',
        },
    },
    form: {
        legend: {
            color: '#7C5DFA',
        },
    },
    textField: {
        bg: '#1E2139',
        borderColor: '#1E2139',
        focus: {
            borderColor: '#9277ff',
        },
        error: {
            borderColor: '#EC5757',
        },
        label: {
            color: '#DFE3FA',
            error: {
                color: '#EC5757',
            },
        },
    },
    drawer: {
        bg: '#141625',
    },
    deleteModal: {
        bg: '#1E2139',
        heading: '#ffffff',
        body: '#DFE3FA',
    },
    datePicker: {
        bg: '#1E2139',
        color: '#DFE3FA',
        selectedBg: '#7C5DFA',
        selectedColor: '#FFF',
        daysOutOfMonth: '#343853',
        borderColor: '#1E2139',
        focus: {
            borderColor: '#9277ff',
        },
        error: {
            borderColor: '#EC5757',
        },
        label: {
            color: '#DFE3FA',
            error: {
                color: '#EC5757',
            },
        },
    },
};
