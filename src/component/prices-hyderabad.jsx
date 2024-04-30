import React, { useState } from 'react';

function PricesHyderabad() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12 mb-3 mt-3">
              <h2>About Prices</h2>
             
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PricesHyderabad;
