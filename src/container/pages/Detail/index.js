import React from 'react';
import classname from 'classnames';
import './styles.scss';

const Detail = ({ className }) => {
  const classNames = classname('p-detail', className)
  return (
    <div className={classNames}>
      <div className='container'>
        <div className='row'>
          <h1>Detail</h1>
        </div>
      </div>
    </div>
  )
};

export default Detail;