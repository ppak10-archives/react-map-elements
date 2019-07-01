/**
 * PlacesSearch.jsx
 * Search bar integrated with places api
 */

// Node Modules
import React, {useEffect, useRef} from 'react';

// Constants
import {FUNC_PROPTYPE} from '../constants/proptypes';

const Input = ({setRef}) => {
  // Refs
  const inputRef = useRef(null);

  // Effects
  useEffect(() => {
    if (inputRef) {
      setRef(inputRef);
    }
  }, [setRef, inputRef]);

  return <input ref={inputRef} />;
};

Input.propTypes = {
  setRef: FUNC_PROPTYPE,
};

export const PlacesSearch = ({searchCallback}) => {
  let searchBox = null;

  // Refs
  let searchInputRef = useRef(null);

  const initializeSearchBox = (ref) => {
    if (ref.current) {
      searchInputRef = ref.current;
      searchBox = new google.maps.places.SearchBox(searchInputRef);
      searchBox.addListener('places_changed', () => {
        const places = searchBox.getPlaces();

        if (!places.length) {
          return;
        }

        places.forEach((place) => {
          if (!place.geometry) {
            return;
          }
          searchCallback(place);
        });
      });
    }
  };

  return (
    <div className="search-wrapper">
      <Input setRef={initializeSearchBox} />
    </div>
  );
};

PlacesSearch.propTypes = {
  searchCallback: FUNC_PROPTYPE,
};
