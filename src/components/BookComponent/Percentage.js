import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';

function Percentage() {
  return (
    <div>
      <div style={{ width: 200, height: 200, color: 'green' }}>
        <CircularProgressbar value={66} />
      </div>
      <div>
        <span>
          60%
        </span>
        <span>
          Completed
        </span>
      </div>

      <div>grey line</div>

      <div>
        <h2>CURRENT CHAPTER</h2>
        <h3>chapter</h3>
        <button type="button">Update Progress</button>
      </div>
    </div>
  );
}

export default Percentage;
