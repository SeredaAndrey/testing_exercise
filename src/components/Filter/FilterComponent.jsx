import { useState } from 'react';
import {
  FilterButton,
  FilterContainer,
  FilterOption,
  FilterSelect,
} from './FilterComponentStyled';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from 'redux/usersOperators';
import { selectIsUserId } from 'redux/authSelectors';

const FilterComponent = () => {
  const dispatch = useDispatch();
  const [filter, setFilter] = useState('all');
  const userId = useSelector(selectIsUserId);

  const onChange = event => {
    setFilter(event.target.value);
  };

  const loadUserWithFilter = async () => {
    dispatch(getUsers({ page: 1, limit: 3, filter: filter, userId: userId }));
  };

  return (
    <FilterContainer>
      <FilterSelect id="filter" name="filter" onChange={onChange}>
        <FilterOption value="all">Show all users</FilterOption>
        <FilterOption value="follow">
          Show users ready for following
        </FilterOption>
        <FilterOption value="following">Show following users</FilterOption>
      </FilterSelect>
      <FilterButton type="button" onClick={loadUserWithFilter}>
        apply
      </FilterButton>
    </FilterContainer>
  );
};

export default FilterComponent;
