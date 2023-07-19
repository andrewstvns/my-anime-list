import React from 'react';
import PropTypes from 'prop-types';
import classname from 'classnames';
import './styles.scss';

const Header = ({ className }) => {
  const classNames = classname('header', className);
  return (
    <div className={classNames}>
      <div className='container'>
        <div className='row'>
          <h1>My Anime List</h1>
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  className: PropTypes.string
};

Header.defaultProps = {
  className: ''
};

export default Header;
