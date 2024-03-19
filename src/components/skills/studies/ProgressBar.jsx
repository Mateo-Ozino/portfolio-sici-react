import PropTypes from "prop-types";

export function ProgressBar({ progress }) {
  return (
    <div className="w-full bg-gray-200 rounded-full h-2.5 idioms__list--progress-bar">
      <div className="bg-white h-2.5 rounded-full" style={{ width: `${progress}%` }}></div>
    </div>
  )
}

ProgressBar.propTypes = {
  progress: PropTypes.number
};