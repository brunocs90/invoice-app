import { useEffect, useRef, useState } from 'react';
import iconArrowDown from '../../assets/icon-arrow-down.svg';
import iconArrowUp from '../../assets/icon-arrow-up.svg';
import { CheckIcon } from './CheckIcon';
import { CheckboxLabel, FilterButton, FilterContainer, FilterMenu, Icon } from './styles';

interface FilterProps {
    options: string[];
    onFilterChange: (selectedOptions: string[]) => void;
}

export function Filter({ options, onFilterChange }: FilterProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [selectedOptions, setSelectedOptions] = useState<string[]>(options);
    const [currentIcon, setCurrentIcon] = useState(iconArrowUp);

    const filterRef = useRef<HTMLDivElement | null>(null);

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
        const handleClickOutside = (event: MouseEvent) => {
            if (filterRef.current && !filterRef.current.contains(event.target as Node)) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    useEffect(() => {
        onFilterChange(selectedOptions);
    }, [selectedOptions, onFilterChange]);

    return (
        <FilterContainer ref={filterRef}>
            <FilterButton onClick={toggleFilter}>
                Filter by Status
                <Icon src={currentIcon} alt="Icon" />
            </FilterButton>
            <FilterMenu open={isMenuOpen}>
                {options.map((option, index) => (
                    <CheckboxLabel key={index}>
                        {selectedOptions.includes(option) ? <CheckIcon /> : <></>}
                        <input
                            className="checkbox"
                            type="checkbox"
                            checked={selectedOptions.includes(option)}
                            onChange={() => handleCheckboxChange(option)}
                        />
                        <span className="checkbox-text">{option}</span>
                    </CheckboxLabel>
                ))}
            </FilterMenu>
        </FilterContainer>
    );
}
