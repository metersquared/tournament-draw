import { useRef, useEffect } from "react";

import { usePresence } from "framer-motion";
import { gsap } from "gsap";

import Card from "./Card";

function ShuffleBoxMD(props) {
  const ref = useRef(null);
  const [isPresent, safeToRemove] = usePresence();

  const {
    teamname,
    setTeamname,
    teamnames,
    slots,
    setSortedGroup,
    sortedGroup,
    isShuffled,
  } = props;

  useEffect(() => {
    if (!isPresent) {
      gsap.to(ref.current, {
        opacity: 0,
        scale: 0,
        onComplete: () => safeToRemove?.(),
      });
    }
  }, [isPresent, safeToRemove]);
  return (
    <div className="shuffle-box">
      <div
        style={{
          flexDirection: "row",
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <p>Peserta:</p>
        {isShuffled ? (
          teamname ? (
            <div
              style={{
                flexDirection: "row",
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
              }}
            >
              <img
                style={{
                  height: "24px",
                  alignSelf: "center",
                  marginInline: "10px",
                }}
                src={"/tournament-draw/" + teamname.flag}
              />
              <p>{teamname.name}</p>
            </div>
          ) : null
        ) : null}
      </div>

      <div style={{ display: "flex" }}>
        <div className="slot-grid-md">
          {slots.map((slot) => (
            <div key={slot.id}>
              <Card
                cardback={"/tournament-draw/bearminton.svg"}
                group={slot["0"]}
                team={slot["1"]}
                setSortedGroup={setSortedGroup}
                sortedGroup={sortedGroup}
                teamname={teamname}
                teamnames={teamnames}
                setTeamname={setTeamname}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ShuffleBoxMD;
