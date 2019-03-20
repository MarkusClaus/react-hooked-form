import React from 'react';
import FormContext from './FormContext';

type Props = {
  children: React.Node,
  handleSubmit: (data: {}) => mixed,
  methode: string,
  initialValues: {},
};

const formContextInitialValues = {
  values: {},
  registered: [],
  touched: {},
  error: {},
  dirty: false,
};

const Form = (props: Props) => {
  const { children, methode, handleSubmit, initialValues, ...rest } = props;

  const contextValues = { ...formContextInitialValues };
  contextValues.values = initialValues;

  return (
    <form onSubmit={handleSubmit} methode={methode} {...rest}>
      <FormContext.Provider value={contextValues}>{{ children }}</FormContext.Provider>
    </form>
  );
};

Form.defaultProps = {
  methode: 'POST',
};

export default Form;
