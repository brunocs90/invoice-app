import styled, { css } from 'styled-components';

// Estilos compartilhados
const fontStyling = css`
    font-family: Spartan, sans-serif;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: 15px;
    letter-spacing: -0.25px;
`;

const hoverStyling = css`
    &:hover {
        filter: brightness(1.2);
    }
`;

export const FilterContainer = styled.div`
    position: relative;
    display: inline-block;
`;

export const FilterButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    padding: 5px;
    color: ${({ theme }) => theme.filterDropdown.label.color};

    position: relative;
    display: inline-flex;
    align-items: center;

    transition: background-color 0.2s, color 0.2s;

    ${fontStyling}
    ${hoverStyling}
`;

export const Icon = styled.img`
    margin-left: 14px;
    transition: filter 0.2s;

    ${FilterButton}:hover & {
        filter: brightness(1.2);
    }
`;

export const FilterMenu = styled.div`
    ${fontStyling}

    width: 192px;
    height: 128px;
    border-radius: 8px;
    background: ${({ theme }) => theme.filterDropdown.dropdown.bg};
    box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.25);
    padding: 24px;

    position: absolute;
    top: 120%;
    left: -25%;
    display: ${({ open }: { open: boolean }) => (open ? 'block' : 'none')};
    transition: box-shadow 0.2s;
    z-index: 1;

    ${FilterButton}:hover + & {
        box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.35);
    }
`;

export const CheckboxLabel = styled.label`
    display: flex;
    align-items: center;
    transition: color 0.2s;
    cursor: pointer;

    color: ${({ theme }) => theme.filterDropdown.checked.label.color};

    &:hover {
        color: ${({ theme }) => theme.filterDropdown.checked.bg};
    }

    .checkbox {
        margin-right: 13px;
    }

    .checkbox-text {
        margin-top: 4px;
    }

    input {
        all: unset;
        width: 16px;
        height: 16px;
        border-radius: 2px;
        border: 1px solid ${({ theme }) => theme.filterDropdown.input.borderColor};
        background: ${({ theme }) => theme.filterDropdown.input.bg};
        box-sizing: border-box;
        display: inline-block;
        cursor: pointer;
    }

    input:checked {
        background-color: ${({ theme }) => theme.filterDropdown.checked.bg};
        border-color: ${({ theme }) => theme.filterDropdown.checked.borderColor};
    }

    input:hover {
        border-color: ${({ theme }) => theme.filterDropdown.input.hover.borderColor};
    }

    svg {
        position: absolute;
        margin: 1px 0px 0px 3px;
        cursor: pointer;
    }

    /* Aplica espaçamento entre os checkboxes, exceto o primeiro */
    & + & {
        margin-top: 16px;
    }
`;
