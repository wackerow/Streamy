import React from "react";
import { connect } from "react-redux";
import { fetchStream, deleteStream } from "../../actions";
import Modal from "../Modal";
import history from "../../history";

class StreamDelete extends React.Component {
  componentDidMount = () => {
    this.props.fetchStream(this.props.match.params.id);
  };

  onDeleteHandler = () => {
    this.props.deleteStream(this.props.match.params.id);
  };

  onCancelHandler = history.goBack;

  render() {
    if (!this.props.stream) {
      return (
        <div>
          <h2>Stream not found 🤷‍♂️</h2>
        </div>
      );
    }
    const renderContent = () => {
      return (
        <p>
          Are you sure you want to permanently delete{" "}
          <span style={{ fontWeight: "bold" }}>{this.props.stream.title}</span>?
        </p>
      );
    };

    return (
      <Modal
        header="Delete Stream?"
        content={renderContent()}
        buttonPrimaryLabel="Delete"
        buttonPrimaryAction={this.onDeleteHandler}
        buttonSecondaryLabel="Cancel"
        buttonSecondaryAction={this.onCancelHandler}
        onDismiss={this.onCancelHandler}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const { id } = ownProps.match.params;
  return { stream: state.streams[id] };
};

export default connect(mapStateToProps, { fetchStream, deleteStream })(
  StreamDelete
);
