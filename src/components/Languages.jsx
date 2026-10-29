function Languages({ languages }) {
    return (
        <section className="max-w-md mx-auto p-6 border-2 border-blue-200 rounded-lg text-center my-6" id="languages">
            <h2>Мови</h2>
            <ul>
                {languages.map((lang, index) => (
                    <li key={index}>
                        <b>{lang.name}:</b> {lang.level}
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default Languages;