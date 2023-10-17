import { Button, Table } from "react-bootstrap";
import { Form } from "react-bootstrap";

export default function PromotionRequests() {
  return (
    <>
      <div className="general-container">
        <div className="general-container-title">Promotion Form</div>
        <div style={{ padding: "0 30px" }}>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>
                <b>Evidence</b>
              </Form.Label>
              <Form.Control placeholder="Provide link contains evidence that you are a translator" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>
                <b>Reason</b>
              </Form.Label>
              <Form.Control
                as="textarea"
                rows={5}
                placeholder="What are you trying to write?"
              />
            </Form.Group>
          </Form>
          <div className="end-button">
            <Button variant="success">Send</Button>
          </div>
        </div>
      </div>
      <div className="general-container">
        <div className="general-container-title">Promotion Status</div>
        <div className="promotion-container">
          <Table bordered hover responsive="sm">
            <thead>
              <tr>
                <th>Evidence</th>
                <th>Reason</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>http://localhost:3000/requests</td>
                <td>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquid, eaque totam ullam nam numquam assumenda quam, illo
                  necessitatibus a dignissimos provident sint, debitis tempore
                  dolor impedit distinctio repellat minus voluptate!
                </td>
                <td>
                  <i
                    className="fa-solid fa-circle-check request-icon"
                    style={{ color: "green" }}
                  ></i>
                </td>
              </tr>
              <tr>
                <td>http://localhost:3000/requests</td>
                <td>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Praesentium quod dolores quasi dignissimos quis qui numquam,
                  at necessitatibus natus. Quod?
                </td>
                <td>
                  <i
                    className="fa-solid fa-circle-xmark request-icon"
                    style={{ color: "red" }}
                  ></i>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
}
