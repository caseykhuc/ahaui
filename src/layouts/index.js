import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import Heading from '../components/Heading';
import CodeBlock from '../components/CodeBlock';
import LinkedHeading from '../components/LinkedHeading';

const getMode = (className = '') => {
  const [, mode] = className.match(/language-(\w+)/) || [];
  return mode;
};

const components = {
  wrapper: props => <React.Fragment {...props} />,
  h1: props => <Heading h="1" {...props} />,
  h2: props => <LinkedHeading h="2" {...props} />,
  h3: props => <LinkedHeading h="3" {...props} />,
  h4: props => <LinkedHeading h="4" {...props} />,
  h5: props => <LinkedHeading h="5" {...props} />,
  // eslint-disable-next-line react/destructuring-assignment
  pre: props => (React.isValidElement(props.children) ? (
    <CodeBlock
      // eslint-disable-next-line react/destructuring-assignment
      codeText={props.children.props.children}
      // eslint-disable-next-line react/destructuring-assignment
      mode={getMode(props.children.props.className)}
    />
  ) : (
    <pre {...props} />
  )),
};


function DefaultLayout({ children }) {
  return <div><MDXProvider components={components}>{children}</MDXProvider></div>;
}

DefaultLayout.propTypes = {};

export default DefaultLayout;
