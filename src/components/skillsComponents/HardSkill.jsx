import PropTypes from "prop-types";

export function HardSkill ({ children, icon, className }) {

  return(
    <div className={`hard-skill ${className}`}>
      <img src={icon} alt="Project Icon" />
      <p>{children}</p>
    </div>
  )
}

HardSkill.propTypes = {
  children: PropTypes.string,
  icon: PropTypes.string,
  className: PropTypes.string
};