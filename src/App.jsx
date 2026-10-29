import Header from './components/Header';
import About from './components/About';
import Education from './components/Education';
import TechnicalSkills from './components/TechnicalSkills';
import Projects from './components/Projects';
import Languages from './components/Languages';
import Footer from './components/Footer';

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
    return (
        <div>
            <Header
                name={cvData.name}
                position={cvData.position}
                contacts={cvData.contacts}
            />
            <main>
                <About text={cvData.about} />
                <Education items={cvData.education} />
                <TechnicalSkills skills={cvData.technicalSkills} />
                <Projects title={cvData.project.title} list={cvData.project.list} />
                <Languages languages={cvData.languages} />
            </main>
            <Footer name={cvData.name} />
        </div>
    );
}

export default App;