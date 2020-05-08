import React from "react";
import { connect } from "react-redux";
import { createStream } from "../../actions";
import StreamForm from "./StreamForm";

class StreamCreate extends React.Component {
  onSubmit = (formValues) => {
    this.props.createStream(formValues);
  };

  render() {
    return <StreamForm onSubmit={this.onSubmit} />;
  }
}

export default connect(null, { createStream })(StreamCreate);

// import React from "react";
// import { Field, reduxForm } from "redux-form";
// import { connect } from "react-redux";
// import { createStream } from "../../actions";

// class StreamCreate extends React.Component {
//   renderInput = ({ input, label, meta: { touched, error } }) => {
//     const className = `field${error && touched ? " error" : ""}`;
//     return (
//       <div className={className}>
//         <label>{label}</label>
//         <input
//           {...input}
//           autoComplete="off"
//           placeholder={touched && error ? error : ""}
//         />
//       </div>
//     );
//   };

//   onSubmit = (formValues) => {
//     this.props.createStream(formValues);
//     console.log({ formValues });
//   };

//   render() {
//     return (
//       <form
//         onSubmit={this.props.handleSubmit(this.onSubmit)}
//         className="ui form error"
//       >
//         <Field
//           name="title"
//           type="text"
//           component={this.renderInput}
//           label="Title:"
//         />
//         <Field
//           name="description"
//           type="text"
//           component={this.renderInput}
//           label="Description:"
//         />
//         <button className="ui primary button">Submit</button>
//       </form>
//     );
//   }
// }

// const validate = (formValues) => {
//   const { title, description } = formValues;

//   const errors = {};

//   if (!title) {
//     errors.title = "Must enter a stream title.";
//   }
//   if (!description) {
//     errors.description = "Must enter a stream description.";
//   }
//   return errors;
// };

// const formWrapped = reduxForm({ form: "streamCreate", validate })(StreamCreate);

// export default connect(null, { createStream })(formWrapped);
