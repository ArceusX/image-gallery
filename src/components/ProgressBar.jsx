import React, { useMemo } from 'react';
import './css/ProgressBar.css';

/**
 * A progress bar component for displaying fundraising status.
 * 
 * @param {string} mission - The fundraising mission statement.
 * @param {number} raised - The amount of money raised.
 * @param {number} goal - The fundraising goal.
 * @param {number} nDonors - The number of donors.
 * @returns {JSX.Element} The rendered progress bar.
 */
const ProgressBar = ({ mission, raised, goal, nDonors }) => {
  const percent = useMemo(() => Math.min((raised / goal) * 100, 100).toFixed(1), [raised, goal]);

  return (
    <div className="progress-wrapper">
      <div className="progress-mission">{mission}</div>

      <div className="progress-stats">
        <span className="progress-raised">${raised.toLocaleString()}</span>
        raised of ${goal.toLocaleString()} goal
      </div>

      <div
        className="progress-bar"
        role="progressbar"
        aria-valuenow={raised}
        aria-valuemin={0}
        aria-valuemax={goal}
      >
        <div
          className="progress-fill"
          style={{ '--progress-percent': percent / 100 }}
        >
          <span className="progress-percent">{percent}%</span>
        </div>
      </div>

      <div className="progress-donors">
        {nDonors.toLocaleString()} donor{nDonors !== 1 ? 's' : ''}
      </div>

      {percent >= 100 && <div className="goal-reached">🎉 Goal Reached! 🙏</div>}
    </div>
  );
};

export default React.memo(ProgressBar);
