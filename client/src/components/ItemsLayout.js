import React, { useCallback } from 'react';
import AgoSearch from './AgoSearch';
import ExtentsMap from './ExtentsMap';

function ItemsLayout({ results, total, num, q, start, onParamsChange }) {
  const onSearch = useCallback(
    newQ => {
      if (onParamsChange) {
        onParamsChange(newQ);
      }
    },
    [onParamsChange]
  );

  return (
    <>
      <div className="row mb-2">
        <div className="col-9">
        </div>
        <div className="col-3">
          <AgoSearch
            q={q}
            onSearch={onSearch}
            className="search-form-inline"
            size="sm"
          />
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <ExtentsMap items={results} />
        </div>
      </div>
    </>
  );
}

export default ItemsLayout;
