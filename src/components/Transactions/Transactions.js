import './transactions.css';

const Transactions = ({items}) => {

    const transactionList = items.map((item) => {
        return (
            <tbody class="row">
                <tr>
                    <td>{item.type}</td>
                    <td>{item.amount}</td>
                    <td>{item.currency}</td>
                </tr>
                {/* <tr>
                    <td>{item.type}</td>
                    <td>{item.amount}</td>
                    <td>{item.currency}</td>
                </tr> */}
            </tbody>
        )
    })

    console.log(transactionList);

    return (
        <table class="transaction-history">
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>

            {transactionList}
        </table>
        
    )
};

export default Transactions;