import React from "react";
import { connect } from "react-redux";
import { fetchStream } from "../../actions";

class StreamShow extends React.Component {
  componentDidMount = () => {
    this.props.fetchStream(this.props.match.params.id);
  };

  render() {
    if (!this.props.stream) {
      return (
        <div>
          <h2>Stream not found 🤷‍♂️</h2>
        </div>
      );
    }

    const { title, description } = this.props.stream;

    return (
      <div>
        <p>[video here]</p>
        <h1>{title}</h1>
        <h4>{description}</h4>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream })(StreamShow);

// import React from "react";
// import { connect } from "react-redux";
// import { fetchStream, deleteStream } from "../../actions";
// import Modal from "../Modal";
// import history from "../../history";

// class StreamShow extends React.Component {
//   componentDidMount = () => {
//     this.props.fetchStream(this.props.match.params.id);
//   };

//   onDeleteHandler = () => {
//     this.props.deleteStream(this.props.match.params.id);
//   };

//   onCancelHandler = history.goBack;

//   render() {
//     if (!this.props.stream) {
//       return (
//         <div>
//           <h2>Stream not found 🤷‍♂️</h2>
//         </div>
//       );
//     }
//     const renderContent = () => {
//       return (
//         <p>
//           Are you sure you want to permanently delete{" "}
//           <span style={{ fontWeight: "bold" }}>{this.props.stream.title}</span>?
//         </p>
//       );
//     };

//     return (
//       <Modal
//         header="Delete Stream?"
//         content={renderContent()}
//         buttonPrimaryLabel="Delete"
//         buttonPrimaryAction={this.onDeleteHandler}
//         buttonSecondaryLabel="Cancel"
//         buttonSecondaryAction={this.onCancelHandler}
//         onDismiss={this.onCancelHandler}
//       />
//     );
//   }
// }

// const mapStateToProps = (state, ownProps) => {
//   const { id } = ownProps.match.params;
//   return { stream: state.streams[id] };
// };

// export default connect(mapStateToProps, { fetchStream, deleteStream })(
//   StreamShow
// );
