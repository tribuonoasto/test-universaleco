import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCustomers } from "../store/actions/productActions";
import TableRowCustomers from "../components/TableRowCustomers";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCustomers());
  }, []);

  return (
    <Row className="mt-2">
      <Col></Col>
      <Col xs={10}>
        <Table bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>name</th>
              <th>Gender</th>
              <th>address</th>
            </tr>
          </thead>
          <TableRowCustomers />
        </Table>
      </Col>
      <Col></Col>
    </Row>
  );
}
