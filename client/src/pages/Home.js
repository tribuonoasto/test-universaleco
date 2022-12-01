import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCustomers, sortCustomers } from "../store/actions/productActions";
import TableRowCustomers from "../components/TableRowCustomers";

export default function Home() {
  const { customers } = useSelector((state) => state.customerReducer);
  const [sortedCustomers, setSortedCustomers] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCustomers()).then((resp) => {
      setSortedCustomers(resp);
    });
  }, []);

  const handleSortName = () => {
    let sorted;
    if (sortedCustomers) {
      setSortedCustomers(false);
      sorted = customers.sort((a, b) => {
        let fa = a.firstName.toLowerCase();
        let fb = b.firstName.toLowerCase();

        if (fa < fb) {
          return 1;
        }
        if (fa > fb) {
          return -1;
        }
        return 0;
      });
    } else {
      setSortedCustomers(true);
      sorted = customers.sort((a, b) => {
        let fa = a.firstName.toLowerCase();
        let fb = b.firstName.toLowerCase();

        if (fa < fb) {
          return -1;
        }
        if (fa > fb) {
          return 1;
        }
        return 0;
      });
    }
    dispatch(sortCustomers(sorted));
  };

  const handleSortGender = () => {
    let sorted;
    if (sortedCustomers) {
      setSortedCustomers(false);
      sorted = customers.sort((a, b) => {
        let fa = a.gender.toLowerCase();
        let fb = b.gender.toLowerCase();

        if (fa < fb) {
          return 1;
        }
        if (fa > fb) {
          return -1;
        }
        return 0;
      });
    } else {
      setSortedCustomers(true);
      sorted = customers.sort((a, b) => {
        let fa = a.gender.toLowerCase();
        let fb = b.gender.toLowerCase();

        if (fa < fb) {
          return -1;
        }
        if (fa > fb) {
          return 1;
        }
        return 0;
      });
    }
    dispatch(sortCustomers(sorted));
  };

  const handleSortAddress = () => {
    let sorted;
    if (sortedCustomers) {
      setSortedCustomers(false);
      sorted = customers.sort((a, b) => {
        if (!a.addr) {
          a.addr = [];
        }
        if (!b.addr) {
          b.addr = [];
        }
        return a.addr.length - b.addr?.length;
      });
    } else {
      setSortedCustomers(true);
      sorted = customers.sort((a, b) => {
        if (!a.addr) {
          a.addr = [];
        }
        if (!b.addr) {
          b.addr = [];
        }
        return b.addr?.length - a.addr.length;
      });
    }
    dispatch(sortCustomers(sorted));
  };

  return (
    <Row className="mt-2">
      <Col></Col>
      <Col xs={10}>
        <Table bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th onClick={handleSortName}>Name</th>
              <th onClick={handleSortGender}>Gender</th>
              <th onClick={handleSortAddress}>Address</th>
            </tr>
          </thead>
          <TableRowCustomers />
        </Table>
      </Col>
      <Col></Col>
    </Row>
  );
}
