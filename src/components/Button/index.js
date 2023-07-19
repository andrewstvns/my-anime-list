import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import classname from 'classnames';
import './styles.scss';
import { Link } from 'react-router-dom';

const Button = ({
  className,
  type,
  onClick,
  variant,
  route,
  to,
  children
}) => {
  const classNames = classname('button', className, {
    route: route,
  });
  return (
    <Fragment>
      {route && (
        <div className={classNames}>
          <a href={to}>
            {children}
          </a>
        </div>
      )}
      {!route && (
        <button
          className={classNames}
          type={type}
          variant={variant}
          onClick={onClick}
        >
          {children}
        </button>
      )}
    </Fragment>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  variant: PropTypes.string,
  route: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node,
};

Button.defaultProps = {
  className: '',
  type: 'button',
  route: false,
  variant: '',
  onClick: () => {},
  to: '',
  children: {},
};

export default Button;
