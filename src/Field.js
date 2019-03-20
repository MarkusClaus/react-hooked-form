import React, { useContext } from 'react';
import FormContext from './FormContext';

type Props = {
  component: React.Node,
  name: string,
  label: string,
  type: string,
};

const Field = (props: Props) => {
  const { component, type } = this.props;
  const context = useContext(FormContext);

  return (
    <div className="widget">
      {React.createElement(component, {
        label,
        input: {
          name,
          type,
          onChange: event => {},
          onBlur: () => {},
          onFocus: () => {},
        },
      })}
    </div>
  );
};

export default Field;
