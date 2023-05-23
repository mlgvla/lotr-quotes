import Quote from "./Quote";

const QuoteList = ({ quotes }) => {
    const buildQuotes = () => {
        return quotes.map((quote, index) => <Quote key={index} quote={quote}/>);
    };

    return (
        <ul className="quotes">
            {buildQuotes()}
        </ul>
    );
};

export default QuoteList;