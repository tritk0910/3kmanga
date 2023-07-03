import { Container, Card } from "react-bootstrap";
import CommentForm from "./commentForm";
import CommentList from "./commentList";

function CommentSection() {
  return (
    <Container>
      <div className="Manga-Container">
        <div
          className="Manga-Container-title"
          style={{ textDecorationLine: "underline", marginBottom: "0" }}
        >
          Comments
        </div>
        <div className="comment-section">
          <Card style={{ padding: "20px" }}>
            <CommentForm />
          </Card>
          <br></br>
          <Card style={{ padding: "20px" }}>
            <CommentList />
          </Card>
        </div>
      </div>
    </Container>
  );
}

export default CommentSection;
