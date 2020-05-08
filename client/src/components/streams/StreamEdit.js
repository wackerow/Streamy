import _ from "lodash";
import React from "react";
import { connect } from "react-redux";
import { fetchStream, editStream } from "../../actions";
import StreamForm from "./StreamForm";

class StreamEdit extends React.Component {
  componentDidMount = () => {
    // TODO: Authenticate user again
    this.props.fetchStream(this.props.match.params.id);
  };

  onSubmit = (formValues) => {
    this.props.editStream(this.props.match.params.id, formValues);

    // this.props.editStream(this.props.match.params.id, {
    //   ...formValues,
    //   userId: this.props.userId,
    // });
  };

  render() {
    console.log({ props: this.props });
    if (!this.props.stream) {
      return <div>Loading... 🤷‍♂️</div>;
    }
    return (
      <StreamForm
        onSubmit={this.onSubmit}
        initialValues={_.pick(this.props.stream, ["title", "description"])}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const { id } = ownProps.match.params;
  return { stream: state.streams[id], userId: state.auth.userId };
};

export default connect(mapStateToProps, { fetchStream, editStream })(
  StreamEdit
);
