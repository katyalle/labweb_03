import { useEffect, useState } from 'react';

function ContactForm() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsOpen(true);
        }, 60000);

        return () => clearTimeout(timer);
    }, []);

    if (!isOpen) {
        return null;
    }

    return (
        <div id="modal" className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-black p-6 border-2 border-blue-800 rounded-lg z-50">
            <h2>Зворотний зв'язок</h2>
            <form action="https://formspree.io/f/xjywvror" method="POST">
                <p>Ім'я: <input type="text" name="name" required className="border" /></p>
                <p>Email: <input type="email" name="email" required className="border" /></p>
                <p>Телефон: <input type="tel" name="phone" className="border" /></p>
                <p>Повідомлення: <textarea name="message" required className="border" /></p>
                <button type="submit" className="border px-4 my-2">Надіслати</button>
            </form>
            <button type="button" onClick={() => setIsOpen(false)} className="border px-4">Закрити</button>
        </div>
    );
}

export default ContactForm;