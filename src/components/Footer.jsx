function Footer({ name }) {
    return (
        <footer className="shadow-lg text-cyan-800 text-center my-6">
            <p> {name}. Резюме створено на React в рамках лабораторної роботи №2.</p>
        </footer>
    );
}

export default Footer;