import PropTypes from "prop-types";

const Experience = (props) => {
  const { date, company, description, skills, geoloc } = props;

  return (
    <div className="Experience">
      <span>{date}</span>
      <span>&nbsp;-&nbsp;</span>
      <span>{company}</span>
      <h3>{description}</h3>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
      <div>
        {geoloc.lat} - {geoloc.lon}
      </div>
    </div>
  );
};

Experience.propTypes = {
  date: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  description: PropTypes.string,
  skills: PropTypes.arrayOf(PropTypes.string),
  geoloc: PropTypes.shape({
    lat: PropTypes.number.isRequired,
    lon: PropTypes.number.isRequired,
  }),
};

export default Experience;
