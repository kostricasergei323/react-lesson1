import '../css/ExpenseItem.css';

const ExpenseItem = ({ Title, Amount, Date }) => {
    const [day, month, year] = Date.split('-');
    return (
        <div className="expense-item">
            <div className="expense-item__description">
                <h2>{year}</h2>
                <h2>{month}</h2>
                <h2>{day}</h2>
            </div>
            <h2>{Title}</h2>
            <div className="expense-item__price">${Amount}</div>
        </div>
    );
}

export default ExpenseItem;