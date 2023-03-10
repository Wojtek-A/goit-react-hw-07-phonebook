import { useDispatch } from 'react-redux';
import css from './Filter.module.css';
import { findContactAction } from 'redux/slice';

export const Filter = () => {
  const dispatch = useDispatch();

  const onChange = event => {
    const value = event.target.value;
    dispatch(findContactAction(value));
  };

  return (
    <>
      <p className={css.text}>Find contacts by name</p>
      <input
        className={css.input}
        type="tex"
        name="filter"
        onChange={onChange}
      />
    </>
  );
};
