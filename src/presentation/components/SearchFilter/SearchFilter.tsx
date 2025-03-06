import { useState, useEffect, ChangeEvent } from 'react';
import { useDebouncedValue } from '@/infraestructure/hooks/useDebouncedValue';
import { ReactComponent as SearchIcon } from '@/assets/search.svg';
import {
  SearchBar,
  Input,
  ResultsText,
  Container,
} from './SearchFilter.styles';

const DEBOUNCE_DELAY = 300;

interface SearchFilterProps {
  onSearchChange: (searchValue: string) => void;
  count?: number;
}

const SearchFilter = ({ onSearchChange, count }: SearchFilterProps) => {
  const [query, setQuery] = useState('');
  const debouncedQuery = useDebouncedValue(query.trim(), DEBOUNCE_DELAY);

  useEffect(() => {
    onSearchChange(debouncedQuery);
  }, [debouncedQuery, onSearchChange]);

  const isValidCount = typeof count === 'number' && count >= 0;

  return (
    <Container>
      <SearchBar>
        <SearchIcon size={20} color="gray" />
        <Input
          type="text"
          placeholder="Search a character..."
          value={query}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setQuery(e.target.value)
          }
        />
      </SearchBar>

      {isValidCount && <ResultsText variant="sm">{count} RESULTS</ResultsText>}
    </Container>
  );
};

export default SearchFilter;
