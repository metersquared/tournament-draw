import ReactCardFlip from "react-card-flip";
import { motion } from "framer-motion";
import { useState } from "react";

function Card(props) {
  const [flipped, setFlipped] = useState(false);
  const {
    group,
    team,
    setSortedGroup,
    sortedGroup,
    teamname,
    teamnames,
    setTeamname,
  } = props;

  const addTeam = (name) => {
    const newgroup = sortedGroup[group];
    newgroup[parseInt(team) - 1] = name;
    setSortedGroup({ ...sortedGroup, [group]: newgroup });
  };

  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <ReactCardFlip isFlipped={flipped}>
        <div
          className="card-back"
          onClick={() => {
            setFlipped(!flipped);
            addTeam(teamname);
            setTeamname(teamnames.shift());
          }}
        >
          <img
            style={{ height: "100%", width: "100%", objectFit: "scale-down" }}
            src="bearminton.svg"
          />
        </div>
        <div className="card-front">
          <p>
            {group}
            {team}
          </p>
        </div>
      </ReactCardFlip>
    </motion.div>
  );
}

export default Card;
