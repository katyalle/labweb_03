import Header from './components/Header';
import About from './components/About';
import Education from './components/Education';
import TechnicalSkills from './components/TechnicalSkills';
import Projects from './components/Projects';
import Languages from './components/Languages';
import Footer from './components/Footer';
import Reviews from './components/Reviews';
import ContactForm from './components/ContactForm';
import { useEffect, useState } from 'react';

// Усі дані резюме передаються в компоненти через props
const cvData = {
    name: 'Лехман Катерина',
    position: 'Студентка спеціальності «Кібербезпека»',
    contacts: [
        { label: 'Вік', value: '18 років' },
        { label: 'Місто', value: 'Ужгород / Львів' },
        { label: 'Email', value: 'katyalekhman@gmail.com', link: 'mailto:katyalekhman@gmail.com' },
        { label: 'GitHub', value: 'github.com/katyalle', link: 'https://github.com/katyalle' },
    ],
    about:
        'Студентка Національного університету «Львівська політехніка». Захоплююся практичною кібербезпекою, аналізом захищеності систем та розробкою скриптів для автоматизації безпекових завдань.',
    education: [
        {
            university: 'Національний университет «Львівська політехніка» (НУЛП)',
            specialty: 'Спеціальність 125 «Кібербезпека та захист інформації»',
            period: '2025 — Теперішній час',
        },
    ],
    technicalSkills: [
        'Python 3',
        'Основи PEP 8 / Ruff',
        'Linux / PowerShell',
        'Git / GitHub',
        'Мережеві протоколи',
        'Основи криптографії',
        'HTML / CSS',
        'VS Code',
    ],
    project: {
        title: 'Лабораторний комплекс з Python (Cybersecurity)',
        list: [
            'Розробка модулів аналізу надійності паролів.',
            'Реалізація системи розмежування прав доступу користувачів (RBAC) з обробкою JSON/CSV даних.',
            'Імплементація базових алгоритмів шифрування.',
        ],
    },
    languages: [
        { name: 'Українська', level: 'Рідна' },
        { name: 'Англійська', level: 'Intermediate (B1/B2)' },
    ],
};

function App() {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        const hours = new Date().getHours();
        if (hours >= 7 && hours < 21) {
            setTheme('light');
        } else {
            setTheme('dark');
        }
    }, []);

    useEffect(() => {
        if (theme === 'dark') {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    }, [theme]);

    function toggleTheme() {
        if (theme === 'dark') {
            setTheme('light');
        } else {
            setTheme('dark');
        }
    }

    return (
        <div>
            <Header
                name={cvData.name}
                position={cvData.position}
                contacts={cvData.contacts}
                onToggleTheme={toggleTheme}
            />
            <main>
                <About text={cvData.about} />
                <Education items={cvData.education} />
                <TechnicalSkills skills={cvData.technicalSkills} />
                <Projects title={cvData.project.title} list={cvData.project.list} />
                <Languages languages={cvData.languages} />
                <Reviews />
                <ContactForm />
            </main>
            <Footer name={cvData.name} />
        </div>
    );
}

export default App;