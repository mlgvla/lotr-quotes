const Quote = ({ quotes }) => {
    const buildQuotes = () => {
        return quotes.map(quote => <li className="quote">{quote}</li>);
    };

    return (
        <ul className="quotes">
            {buildQuotes()}
        </ul>
    );
};

export default Quote;