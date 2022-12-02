import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCustomers, sortCustomers } from "../store/actions/productActions";
import TableRowCustomers from "../components/TableRowCustomers";
import { SortAlphaDown, SortAlphaDownAlt } from "react-bootstrap-icons";
import { sortAsc, sortAscNum, sortDesc, sortDescNum } from "../helpers/sort";
import ReactLoading from "react-loading";

export default function Home() {
  const { customers } = useSelector((state) => state.customerReducer);
  const [sortedCustomersName, setSortedCustomersName] = useState(true);
  const [sortedCustomersGender, setSortedCustomersGender] = useState(true);
  const [sortedCustomersAddress, setSortedCustomersAddress] = useState(true);
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCustomers()).then(() => {
      setLoading(false);
    });
  }, []);

  const handleSortName = () => {
    let sorted;
    if (sortedCustomersName) {
      setSortedCustomersName(false);
      setSortedCustomersGender(true);
      setSortedCustomersAddress(true);
      sorted = sortAsc(customers, "firstName");
    } else {
      setSortedCustomersName(true);
      sorted = sortDesc(customers, "firstName");
    }
    dispatch(sortCustomers(sorted));
  };

  const handleSortGender = () => {
    let sorted;
    if (sortedCustomersGender) {
      setSortedCustomersGender(false);
      setSortedCustomersAddress(true);
      setSortedCustomersName(true);
      sorted = sortAsc(customers, "gender");
    } else {
      setSortedCustomersGender(true);
      sorted = sortDesc(customers, "gender");
    }
    dispatch(sortCustomers(sorted));
  };

  const handleSortAddress = () => {
    let sorted;
    if (sortedCustomersAddress) {
      setSortedCustomersAddress(false);
      setSortedCustomersName(true);
      setSortedCustomersGender(true);
      sorted = sortAscNum(customers, "addr");
    } else {
      setSortedCustomersAddress(true);
      sorted = sortDescNum(customers, "addr");
    }
    dispatch(sortCustomers(sorted));
  };

  if (loading) {
    return (
      <div className="loadingContainer d-flex justify-content-center align-items-center h-100">
        <ReactLoading
          type="spinningBubbles"
          color="#ff860d"
          height={400}
          width={200}
        />
      </div>
    );
  }

  return (
    <Row className="mt-2">
      <Col></Col>
      <Col xs={10}>
        <Table bordered hover>
          <thead>
            <tr>
              <th>#</th>
              {sortedCustomersName ? (
                <th onClick={handleSortName}>
                  Name <SortAlphaDown />
                </th>
              ) : (
                <th onClick={handleSortName}>
                  Name <SortAlphaDownAlt />
                </th>
              )}
              {sortedCustomersGender ? (
                <th onClick={handleSortGender}>
                  Gender <SortAlphaDown />
                </th>
              ) : (
                <th onClick={handleSortGender}>
                  Gender <SortAlphaDownAlt />
                </th>
              )}
              {sortedCustomersAddress ? (
                <th onClick={handleSortAddress}>
                  Address <SortAlphaDown />
                </th>
              ) : (
                <th onClick={handleSortAddress}>
                  Address <SortAlphaDownAlt />
                </th>
              )}
              <th>Actions</th>
            </tr>
          </thead>
          <TableRowCustomers />
        </Table>
      </Col>
      <Col></Col>
    </Row>
  );
}
