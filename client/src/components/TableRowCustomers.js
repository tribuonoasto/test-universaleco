import { useDispatch, useSelector } from "react-redux";

export default function TableRowCustomers() {
  const { customers } = useSelector((state) => state.customerReducer);

  return (
    <tbody>
      {customers.map((customer, index) => (
        <tr key={index}>
          <td>{index + 1}</td>
          <td>
            {customer.firstName} {customer.lastName}
          </td>
          <td>{customer.gender}</td>
          {customer.addr ? (
            <td>
              {customer.addr
                .map((el) => {
                  return `${el.street} ${el.house}, ${el.city} ${el.country}`;
                })
                .join(", ")}
            </td>
          ) : (
            <td></td>
          )}
        </tr>
      ))}
    </tbody>
  );
}
