import { useEffect, useState } from 'react';

function Footer({ name }) {
    const [systemInfo, setSystemInfo] = useState(null);

    useEffect(() => {
        const info = {
            userAgent: navigator.userAgent,
            platform: navigator.platform,
        };
        localStorage.setItem('systemInfo', JSON.stringify(info));

        const saved = JSON.parse(localStorage.getItem('systemInfo'));
        setSystemInfo(saved);
    }, []);

    return (
        <footer className="shadow-lg text-cyan-800 text-center my-6">
            <p>{name}. Резюме створено на React.</p>
            {systemInfo && (
                <ul>
                    <li>Платформа: {systemInfo.platform}</li>
                    <li>Браузер: {systemInfo.userAgent}</li>
                </ul>
            )}
        </footer>
    );
}

export default Footer;