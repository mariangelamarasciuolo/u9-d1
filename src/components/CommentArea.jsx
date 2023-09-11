import { Component } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";
import Loading from "./Loading";
import Error from "./Error";

class CommentArea extends Component {
  state = {
    comments: [],
    isLoading: true,
    isError: false,
  };

  fetchComments = async () => {
    try {
      let response = await fetch("https://striveschool-api.herokuapp.com/api/comments/", {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGU4NmJkNzY4NWVjNDAwMTQ1MGI4OWEiLCJpYXQiOjE2OTQ0MzkxMzAsImV4cCI6MTY5NTY0ODczMH0.0TfmW3vwtIF1ctdQ2JoW1i2Cykp0VKidM480qk1LKog",
        },
      });
      console.log(response);
      if (response.ok) {
        let comments = await response.json();
        const filteredComments = comments.filter((comment) => comment.elementId === this.props.asin);
        this.setState({ comments: filteredComments, isLoading: false, isError: false });
      } else {
        console.log("error");
        this.setState({ isLoading: false, isError: true });
      }
    } catch (error) {
      console.log(error);
      this.setState({ isLoading: false, isError: true });
    }
  };

  componentDidMount = () => {
    this.fetchComments();
  };
  render() {
    return (
      <div className="text-center">
        {this.state.isLoading && <Loading />}
        {this.state.isError && <Error />}
        <AddComment asin={this.props.asin} />
        <CommentList commentsToShow={this.state.comments} />
      </div>
    );
  }
}

export default CommentArea;
