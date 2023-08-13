import styled from 'styled-components';

const commonFontStyles = `
    font-family: Spartan, sans-serif;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: 15px; /* 100% */
    letter-spacing: -0.25px;
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
    ${commonFontStyles}

    position: relative;
    display: inline-flex;
    align-items: center;

    transition: background-color 0.2s, color 0.2s;
`;

export const Icon = styled.img`
    margin-left: 5px;
    transition: filter 0.2s;

    ${FilterButton}:hover & {
        filter: brightness(1.2);
    }
`;

export const FilterMenu = styled.div`
    ${commonFontStyles}

    border-radius: 8px;
    position: absolute;
    top: 100%;
    left: 0;
    background: ${({ theme }) => theme.filterDropdown.dropdown.bg};
    box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.25);
    border-top: none;
    display: ${({ open }: { open: boolean }) => (open ? 'block' : 'none')};
    transition: box-shadow 0.2s;

    ${FilterButton}:hover + & {
        box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.35);
    }
`;

export const CheckboxLabel = styled.label`
    display: block;
    padding: 5px;
    color: ${({ theme }) => theme.filterDropdown.checked.label};
    transition: color 0.2s;

    /* Herda automaticamente os estilos de fonte do FilterContainer */

    &:hover {
        color: ${({ theme }) => theme.filterDropdown.checked.bg};
    }
`;
