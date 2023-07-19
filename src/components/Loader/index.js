import React from 'react';
import PropTypes from 'prop-types';
import classname from 'classnames';
import './styles.scss';

const Loader = ({ className }) => {
  const classNames = classname('loader', className)
  return (
    <div className={classNames}>
      <div className='loader__loader-wrapper'>
        <svg className='loader__loader-svg'>
          <circle className='loader__loader-circle' cx="70" cy="70" r="70" />
        </svg>
      </div>
    </div>
  )
};

Loader.propTypes = {
  className: PropTypes.string
};

Loader.defaultProps = {
  className: ''
};


export default Loader;