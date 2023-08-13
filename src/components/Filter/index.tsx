import { useEffect, useState } from 'react';
import iconArrowDown from '../../assets/icon-arrow-down.svg';
import iconArrowUp from '../../assets/icon-arrow-up.svg';
import { CheckboxLabel, FilterButton, FilterContainer, FilterMenu, Icon } from './styles';

interface FilterProps {
    options: string[];
    onFilterChange: (selectedOptions: string[]) => void;
}

export function Filter({ options, onFilterChange }: FilterProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
    const [currentIcon, setCurrentIcon] = useState(iconArrowUp); // Default to arrow-up icon

    const toggleFilter = () => {
        setIsMenuOpen(!isMenuOpen);
        setCurrentIcon(prevIcon => (prevIcon === iconArrowUp ? iconArrowDown : iconArrowUp));
    };

    const handleCheckboxChange = (option: string) => {
        setSelectedOptions(prevSelectedOptions => {
            if (prevSelectedOptions.includes(option)) {
                return prevSelectedOptions.filter(item => item !== option);
            } else {
                return [...prevSelectedOptions, option];
            }
        });
    };

    useEffect(() => {
        onFilterChange(selectedOptions);
    }, [selectedOptions, onFilterChange]);

    return (
        <FilterContainer>
            <FilterButton onClick={toggleFilter}>
                Filter by Status
                <Icon src={currentIcon} alt="Icon" />
            </FilterButton>
            <FilterMenu open={isMenuOpen}>
                {options.map((option, index) => (
                    <CheckboxLabel key={index}>
                        <input
                            type="checkbox"
                            checked={selectedOptions.includes(option)}
                            onChange={() => handleCheckboxChange(option)}
                        />
                        <span></span>
                        {option}
                    </CheckboxLabel>
                ))}
            </FilterMenu>
        </FilterContainer>
    );
}
