// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
    export interface DefaultTheme {
        title: string;
        body: {
            bg: string;
            color: string;
        };
        text: {
            h1: string;
            color1: string;
            color2: string;
        };
        header: {
            bg: string;
        };
        themeToggleButton: {
            color: string;
            hover: {
                color: string;
            };
        };
        button: {
            primary: {
                bg: string;
                color: string;
                hover: {
                    bg: string;
                    color: string;
                };
            };
            secondary: {
                bg: string;
                color: string;
                hover: {
                    bg: string;
                    color: string;
                };
            };
            tertiary: {
                bg: string;
                color: string;
                hover: {
                    bg: string;
                    color: string;
                };
            };
            warning: {
                bg: string;
                color: string;
                hover: {
                    bg: string;
                    color: string;
                };
            };
        };
        invoiceItem: {
            bg: string;
            color: string;
            borderColor: string;
            id: string;
            total: string;
            hover: {
                borderColor: string;
            };
        };
        invoiceItemsList: {
            label: {
                color: string;
                error: {
                    color: string;
                };
            };
            borderColor: string;
            error: {
                borderColor: string;
            };
            deleteButton: {
                color: string;
                hover: {
                    color: string;
                };
            };
            total: string;
        };
        status: {
            pending: string;
            paid: string;
            draft: string;
        };
        filterDropdown: {
            input: {
                bg: string;
                borderColor: string;
                hover: {
                    borderColor: string;
                };
            };
            dropdown: {
                bg: string;
            };
            label: {
                color: string;
            };
            checked: {
                label: {
                    color: string;
                };
                bg: string;
                borderColor: string;
            };
        };
        invoiceDetails: {
            bg: string;
        };
        invoiceTable: {
            bg: string;
            heading: string;
            footer: {
                bg: string;
                color: string;
            };
        };
        form: {
            legend: {
                color: string;
            };
        };
        textField: {
            bg: string;
            borderColor: string;
            focus: {
                borderColor: string;
            };
            error: {
                borderColor: string;
            };
            label: {
                color: string;
                error: {
                    color: string;
                };
            };
        };
        drawer: {
            bg: string;
        };
        deleteModal: {
            bg: string;
            heading: string;
            body: string;
        };
        datePicker: {
            bg: string;
            color: string;
            selectedBg: string;
            selectedColor: string;
            daysOutOfMonth: string;
            borderColor: string;
            focus: {
                borderColor: string;
            };
            error: {
                borderColor: string;
            };
            label: {
                color: string;
                error: {
                    color: string;
                };
            };
        };
    }
}
