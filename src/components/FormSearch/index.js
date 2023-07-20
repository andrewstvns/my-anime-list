import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import classname from 'classnames';
import { Button } from 'components';
import './styles.scss';

const FormSearch = ({ 
  className, 
  onSubmit, 
  value, 
  name, 
  placeholder, 
  id, 
  onChange,
  type,
  children
}) => {
  const classNames = classname('form-search', className);
  return (
    <div className={classNames}>
      <input 
        value={value}
        name={name}
        placeholder={placeholder}
        id={id}
        onChange={onChange}
        type='text'
        autoComplete='off'
      />
      <Button type={type} onClick={onSubmit}>{children}</Button>
    </div>
  )
};

FormSearch.propTypes = {
  className: PropTypes.string,
  onSubmit: PropTypes.func,
  value: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  id: PropTypes.string,
  onChange: PropTypes.func,
  type: PropTypes.string,
  children: PropTypes.node
};

FormSearch.defaultProps = {
  className: '',
  onSubmit: () => {},
  value: '',
  name: '',
  placeholder: 'Search',
  id: 'search',
  onChange: () => {},
  type: 'submit',
  children: ''
};

export default FormSearch;