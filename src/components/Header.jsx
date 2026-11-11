function Header({ name, position, contacts, onToggleTheme }) {
    return (
        <header className="text-center">
            <h1 className="shadow-lg text-cyan-800 ">{name}</h1>
            <p>{position}</p>
            <button id="theme-toggle" type="button" onClick={onToggleTheme}>
                <span className="knob"></span>
            </button>
            <address>
                <ul>
                    {contacts.map((contact) => (
                        <li key={contact.label}>
                            <b>{contact.label}:</b>{' '}
                            {contact.link ? (
                                <a href={contact.link} target="_blank" rel="noreferrer">
                                    {contact.value}
                                </a>
                            ) : (
                                contact.value
                            )}
                        </li>
                    ))}
                </ul>
            </address>
        </header>
    );
}

export default Header;