import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import classname from 'classnames';
import './styles.scss';

const Button = ({
  className,
  type,
  onClick,
  variant,
  route,
  children
}) => {
  const classNames = classname('button', className, {
    route: route,
  });
  return (
    <Fragment>
      {route && (
        <div className={classNames}>
          <a type='link' onClick={onClick} href='/detail'>
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
  pokemonIndex: PropTypes.string,
  route: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node,
};

Button.defaultProps = {
  className: '',
  type: 'button',
  route: false,
  variant: '',
  pokemonIndex: '',
  onClick: () => {},
  children: {},
};

export default Button;
