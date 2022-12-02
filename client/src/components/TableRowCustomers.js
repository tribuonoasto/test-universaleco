import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";

export default function TableRowCustomers() {
  const { customers } = useSelector((state) => state.customerReducer);
  const navigate = useNavigate();

  const handleEdit = (id) => {
    navigate(`/edit/${id}`);
  };

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
          <td>
            <Button
              onClick={() => {
                handleEdit(customer._id);
              }}
              variant="primary"
            >
              Edit
            </Button>
          </td>
        </tr>
      ))}
    </tbody>
  );
}
