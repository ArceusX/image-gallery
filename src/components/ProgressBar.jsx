import './css/ProgressBar.css';

const ProgressBar = ({ mission, raised, goal, nDonors }) => {
  const percent = Math.min((raised / goal) * 100, 100).toFixed(1);

  return (
    <div className="progress-wrapper">
        <div className="progress-mission">{mission} </div>
        <div className="progress-stats">
            <span className="progress-raised">
                ${raised.toLocaleString()}
            </span>
            raised of ${goal.toLocaleString()} goal
        </div>
        <div className="progress-bar">
            <div
                className="progress-fill"
                style={{ width: `${percent}%` }}>
            </div>
        </div>
        <div className="progress-donors">
            {nDonors.toLocaleString()} donor{nDonors !== 1 ? 's' : ''}
        </div>
    </div>
  );
};

export default ProgressBar;
