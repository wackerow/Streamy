import React from "react";
import { Field, reduxForm } from "redux-form";

class StreamForm extends React.Component {
  componentDidMount = () => {
    if (this.props.initialValues) {
      const { title, description } = this.props.initialValues;
      // Populate form upon loading with these passed in values
    }
  };

  renderInput = ({ input, label, meta: { touched, error } }) => {
    const className = `field${error && touched ? " error" : ""}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input
          {...input}
          autoComplete="off"
          placeholder={touched && error ? error : label}
        />
      </div>
    );
  };

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.props.onSubmit)}
        className="ui form error"
      >
        <Field
          name="title"
          type="text"
          component={this.renderInput}
          label="Title"
        />
        <Field
          name="description"
          type="text"
          component={this.renderInput}
          label="Description"
        />
        <button className="ui primary button">Submit</button>
      </form>
    );
  }
}

const validate = (formValues) => {
  const { title, description } = formValues;

  const errors = {};

  if (!title) {
    errors.title = "Must enter a stream title.";
  }
  if (!description) {
    errors.description = "Must enter a stream description.";
  }
  return errors;
};

export default reduxForm({ form: "streamForm", validate })(StreamForm);
