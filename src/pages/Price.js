import React from "react";
import {Table} from "react-bootstrap";
import Container from "react-bootstrap/Container";

function Price() {
  return (
    <Container>
      <h2 className="title">Прайс</h2>
      <Table striped bordered hover>
        <thead>
        <tr>
          <th colSpan={2} className="text-center">Маникюр</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>Аппаратный</td>
          <td>00000</td>
        </tr>
        <tr>
          <td>Комбинированный</td>
          <td>0000</td>
        </tr>
        <tr>
          <td>Наращивание</td>
          <td>0000</td>
        </tr>
        <tr>
          <td>Мужской</td>
          <td>0000</td>
        </tr>
        <tr>
          <td>Детский</td>
          <td>0000</td>
        </tr>
        </tbody>
      </Table>

      <Table striped bordered hover className="mt">
        <thead>
        <tr>
          <th colSpan={2} className="text-center">Педикюр</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>Аппаратный</td>
          <td>00000</td>
        </tr>
        <tr>
          <td>Комбинированный</td>
          <td>0000</td>
        </tr>
        <tr>
          <td>Наращивание</td>
          <td>0000</td>
        </tr>
        <tr>
          <td>Мужской</td>
          <td>0000</td>
        </tr>
        <tr>
          <td>Детский</td>
          <td>0000</td>
        </tr>
        </tbody>
      </Table>
    </Container>
  )
};

export default Price;
