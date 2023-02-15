import { memo } from 'react';

export default memo(function Filter({ onChangeFilter }) {
  return (
    <div>
      <button onClick={() => onChangeFilter('all')}>All</button>
      <button onClick={() => onChangeFilter('active')}>Active</button>
      <button onClick={() => onChangeFilter('completed')}>Completed</button>
    </div>
  );
});
