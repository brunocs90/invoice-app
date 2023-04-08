interface Props {
    toggleTheme(): void;
}

export default function ThemeToggle({ toggleTheme }: Props) {
    return <button onClick={toggleTheme}>ButtomToggle</button>;
}
