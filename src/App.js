import "./App.css";
import { motion, AnimatePresence, easeInOut } from "framer-motion";
import combineArrays from "./helper";
import { useEffect, useState } from "react";
import ShuffleButton from "./ShuffleButton";
import ShuffleBoxMD from "./ShuffleBoxMD";
import ShuffleBoxXD from "./ShuffleBoxXD";
import ShuffleBoxVoli from "./ShuffleBoxVoli";

const bgaudio = new Audio("/tournament-draw/champions.mp3");

function App() {
  // Champions League audio player
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  // # BADMINTON

  // Initialize constant Ganda Putra

  const groupMD = ["A", "B", "C", "D"];
  const teamMD = ["1", "2", "3", "4", "5"];
  const playSlotsMD = [
    "A1",
    "A2",
    "A3",
    "A4",
    "B1",
    "B2",
    "B3",
    "B4",
    "C1",
    "C2",
    "C3",
    "C4",
    "D1",
    "D2",
    "D3",
    "D4",
    "D5",
  ];
  const defaultTeamnamesMD = [
    { name: "Badai Pasir", flag: "flags/leipzig.svg" },
    { name: "Carola", flag: "flags/neutral.svg" },
    { name: "De Minions", flag: "flags/berlin.svg" },
    { name: "DOGE", flag: "flags/neutral.svg" },
    { name: "Fuiyohh", flag: "flags/berlin.svg" },
    { name: "Laju1", flag: "flags/frankfurt.svg" },
    { name: "PB Magde Indo 2", flag: "flags/magdeburg.svg" },
    { name: "Siapgoyang", flag: "flags/leipzig.svg" },
    { name: "Surplus Hore", flag: "flags/berlin.svg" },
    { name: "Top G", flag: "flags/berlin.svg" },
    { name: "TryBest", flag: "flags/bonn.svg" },
    { name: "Turu", flag: "flags/kaiserslautern.svg" },
    { name: "Yuta Watanabe/Kento Momota", flag: "flags/berlin.svg" },
    { name: "Laju Tak Gentar", flag: "flags/frankfurt.svg" },
    { name: "Union Rostock", flag: "flags/rostock.svg" },
    { name: "Hamburg", flag: "flags/hamburg.svg" },
    { name: "Anak Bauing", flag: "flags/berlin.svg" },
  ];

  const defaultSortedGroupMD = {
    A: [
      { name: "A1", flag: "flags/question.svg" },
      { name: "A2", flag: "flags/question.svg" },
      { name: "A3", flag: "flags/question.svg" },
      { name: "A4", flag: "flags/question.svg" },
    ],
    B: [
      { name: "B1", flag: "flags/question.svg" },
      { name: "B2", flag: "flags/question.svg" },
      { name: "B3", flag: "flags/question.svg" },
      { name: "B4", flag: "flags/question.svg" },
    ],
    C: [
      { name: "C1", flag: "flags/question.svg" },
      { name: "C2", flag: "flags/question.svg" },
      { name: "C3", flag: "flags/question.svg" },
      { name: "C4", flag: "flags/question.svg" },
    ],
    D: [
      { name: "D1", flag: "flags/question.svg" },
      { name: "D2", flag: "flags/question.svg" },
      { name: "D3", flag: "flags/question.svg" },
      { name: "D4", flag: "flags/question.svg" },
      { name: "D5", flag: "flags/question.svg" },
    ],
  };

  const [slotsMD, setSlotsMD] = useState([]);
  const [isShuffledMD, setIsShuffledMD] = useState(0);

  const [sortedGroupMD, setSortedGroupMD] = useState(defaultSortedGroupMD);
  const [teamnameMD, setTeamnameMD] = useState();
  const [shuffledTeamnamesMD, setShuffledTeamnamesMD] =
    useState(defaultTeamnamesMD);

  //Initialize constant Ganda Campuran

  const groupXD = ["A", "B"];
  const teamXD = ["1", "2", "3"];
  const defaultTeamnamesXD = [
    { name: "Badai Salju", flag: "flags/leipzig.svg" },
    { name: "Annisa/William", flag: "flags/berlin.svg" },
    { name: "Indobärliner Hura", flag: "flags/berlin.svg" },
    { name: "PB Magde Indo XD", flag: "flags/magdeburg.svg" },
    { name: "Surplus Ajah", flag: "flags/berlin.svg" },
    { name: "Badai Siklon Tropis", flag: "flags/leipzig.svg" },
  ];

  const defaultSortedGroupXD = {
    A: [
      { name: "A1", flag: "flags/question.svg" },
      { name: "A2", flag: "flags/question.svg" },
      { name: "A3", flag: "flags/question.svg" },
    ],
    B: [
      { name: "B1", flag: "flags/question.svg" },
      { name: "B2", flag: "flags/question.svg" },
      { name: "B3", flag: "flags/question.svg" },
    ],
  };

  const [slotsXD, setSlotsXD] = useState([]);
  const [isShuffledXD, setIsShuffledXD] = useState(0);
  const [sortedGroupXD, setSortedGroupXD] = useState(defaultSortedGroupXD);
  const [teamnameXD, setTeamnameXD] = useState();
  const [shuffledTeamnamesXD, setShuffledTeamnamesXD] =
    useState(defaultTeamnamesXD);

  // # VOLI

  //Initialize constant Voli

  const groupVoli = ["A", "B"];
  const teamVoli = ["1", "2", "3"];
  const defaultTeamnamesVoli = [
    { name: "Indobärliner Lichtenberg", flag: "flags/berlin.svg" },
    { name: "Indobärliner Moabit", flag: "flags/berlin.svg" },
    { name: "Indobärliner Gesunbrunnen", flag: "flags/berlin.svg" },
    { name: "Voligami", flag: "flags/frankfurt.svg" },
    { name: "Kühlungsborn", flag: "flags/rostock.svg" },
    { name: "BBW", flag: "flags/neutral.svg" },
  ];

  const defaultSortedGroupVoli = {
    A: [
      { name: "A1", flag: "flags/question.svg" },
      { name: "A2", flag: "flags/question.svg" },
      { name: "A3", flag: "flags/question.svg" },
    ],
    B: [
      { name: "B1", flag: "flags/question.svg" },
      { name: "B2", flag: "flags/question.svg" },
      { name: "B3", flag: "flags/question.svg" },
    ],
  };

  const [slotsVoli, setSlotsVoli] = useState([]);
  const [isShuffledVoli, setIsShuffledVoli] = useState(0);
  const [sortedGroupVoli, setSortedGroupVoli] = useState(
    defaultSortedGroupVoli
  );
  const [teamnameVoli, setTeamnameVoli] = useState();
  const [shuffledTeamnamesVoli, setShuffledTeamnamesVoli] =
    useState(defaultTeamnamesVoli);

  // Shuffle groups

  const shuffleSingles = (slots, setSlots, setIsShuffled) => {
    const shuffledSlots = [...slots]
      .sort(() => Math.random() - 0.5)
      .map((slot) => ({ ...slot, id: Math.random() }));

    setSlots(shuffledSlots);
    setIsShuffled(1);
  };

  const shuffle = (group, team, setSlots, setIsShuffled) => {
    const shuffledSlots = [...combineArrays([group, team])]
      .sort(() => Math.random() - 0.5)
      .map((slot) => ({ ...slot, id: Math.random() }));

    setSlots(shuffledSlots);
    setIsShuffled(1);
  };

  const shuffleTeams = (teamnames, setShuffledTeamnames) => {
    const shuffledSlots = [...teamnames]
      .sort(() => Math.random() - 0.5)
      .map((slot) => ({ ...slot, id: Math.random() }));

    setShuffledTeamnames(shuffledSlots);
  };

  useEffect(() => {
    setTeamnameMD(shuffledTeamnamesMD[0]);
    setTeamnameXD(shuffledTeamnamesXD[0]);
    setTeamnameVoli(shuffledTeamnamesVoli[0]);
  });

  return (
    <div className="App">
      <header className="App-header">
        <motion.div
          whileHover={{ scale: 1.3 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <img
            src="/tournament-draw/baerlympic.png"
            style={{ height: "20vw" }}
          />
        </motion.div>

        <motion.div
          animate={{ scale: isMuted && 1.5 }}
          transition={{
            repeat: isMuted && Infinity,
            repeatType: isMuted && "mirror",
            duration: isMuted && 2,
            type: "spring",
            stiffness: 400,
            damping: 10,
          }}
        >
          {isMuted && (
            <img
              src={"/tournament-draw/mute.png"}
              style={{ height: "3vh" }}
              onClick={() => {
                if (!isPlaying) {
                  bgaudio.play();
                  bgaudio.loop = true;
                  setIsPlaying(true);
                  setIsMuted(false);
                } else {
                  bgaudio.play();
                  setIsMuted(false);
                }
              }}
            />
          )}
          {!isMuted && (
            <img
              src={"/tournament-draw/volume.png"}
              style={{ height: "3vh" }}
              onClick={() => {
                bgaudio.pause();
                setIsMuted(true);
              }}
            />
          )}
        </motion.div>

        <h2>Group Draw</h2>

        {/* BADMINTON */}

        <motion.div
          style={{
            flexDirection: "row",
            display: "flex",
            alignItems: "center",
          }}
          whileHover={{ scale: 1.3 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <img
            src="/tournament-draw/bearminton.svg"
            style={{ height: "5vw" }}
          />
          <h3>Badminton</h3>
        </motion.div>

        <h3>Ganda Putra</h3>
        {/* Group Table Ganda Putra */}

        <div id="table">
          <div className="group">
            <p>
              <b>Grup A</b>
            </p>
            {sortedGroupMD.A.map((team) => {
              return (
                <div className="team">
                  <img className="flag" src={"/tournament-draw/" + team.flag} />
                  <p className="team-name">{team.name}</p>
                </div>
              );
            })}
          </div>
          <div className="group">
            <p>
              <b>Grup B</b>
            </p>
            {sortedGroupMD.B.map((team) => {
              return (
                <div className="team">
                  <img className="flag" src={"/tournament-draw/" + team.flag} />
                  <p className="team-name">{team.name}</p>
                </div>
              );
            })}
          </div>
          <div className="group">
            <p>
              <b>Grup C</b>
            </p>
            {sortedGroupMD.C.map((team) => {
              return (
                <div className="team">
                  <img className="flag" src={"/tournament-draw/" + team.flag} />
                  <p className="team-name">{team.name}</p>
                </div>
              );
            })}
          </div>
          <div className="group">
            <p>
              <b>Grup D</b>
            </p>
            {sortedGroupMD.D.map((team) => {
              return (
                <div className="team">
                  <img className="flag" src={"/tournament-draw/" + team.flag} />
                  <p className="team-name">{team.name}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignContent: "center",
            marginBottom: "5%",
          }}
        >
          {/* Shuffle Button Ganda Putra */}

          <ShuffleButton
            onClick={() => {
              shuffleSingles(playSlotsMD, setSlotsMD, setIsShuffledMD);
              shuffleTeams(defaultTeamnamesMD, setShuffledTeamnamesMD);
              setTeamnameMD(shuffledTeamnamesMD[0]);
              setSortedGroupMD(defaultSortedGroupMD);
            }}
          />

          {/* Slot selection Ganda Putra */}

          <ShuffleBoxMD
            teamname={teamnameMD}
            isShuffled={isShuffledMD}
            setTeamname={setTeamnameMD}
            teamnames={shuffledTeamnamesMD}
            slots={slotsMD}
            setSortedGroup={setSortedGroupMD}
            sortedGroup={sortedGroupMD}
          />
        </div>

        <h3>Ganda Campuran</h3>
        {/* Group Table Ganda Campuran */}

        <div id="table">
          <div className="group">
            <p>
              <b>Grup A</b>
            </p>
            {sortedGroupXD.A.map((team) => {
              return (
                <div className="team">
                  <img className="flag" src={"/tournament-draw/" + team.flag} />
                  <p className="team-name">{team.name}</p>
                </div>
              );
            })}
          </div>
          <div className="group">
            <p>
              <b>Grup B</b>
            </p>
            {sortedGroupXD.B.map((team) => {
              return (
                <div className="team">
                  <img className="flag" src={"/tournament-draw/" + team.flag} />
                  <p className="team-name">{team.name}</p>
                </div>
              );
            })}
          </div>
        </div>

        <AnimatePresence>
          <div
            style={{
              display: "flex",
              alignContent: "center",
              flexDirection: "column",
              marginBottom: "5%",
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 2, delay: 0, ease: easeInOut }}
            key={isShuffledXD}
          >
            {/* Shuffle Button Ganda Campuran */}
            <ShuffleButton
              onClick={() => {
                shuffle(groupXD, teamXD, setSlotsXD, setIsShuffledXD);
                shuffleTeams(defaultTeamnamesXD, setShuffledTeamnamesXD);
                setTeamnameXD(shuffledTeamnamesXD[0]);
                setSortedGroupXD(defaultSortedGroupXD);
              }}
            />

            {/* Slot selection Ganda Campuran */}
            <ShuffleBoxXD
              teamname={teamnameXD}
              isShuffled={isShuffledXD}
              setTeamname={setTeamnameXD}
              teamnames={shuffledTeamnamesXD}
              slots={slotsXD}
              setSortedGroup={setSortedGroupXD}
              sortedGroup={sortedGroupXD}
            />
          </div>
        </AnimatePresence>

        {/* VOLI */}

        <motion.div
          style={{
            flexDirection: "row",
            display: "flex",
            alignItems: "center",
          }}
          whileHover={{ scale: 1.3 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <img
            src="/tournament-draw/volleybear.svg"
            style={{ height: "5vw" }}
          />
          <h3>Voli</h3>
        </motion.div>
        {/* Group Table Voli */}

        <div id="table">
          <div className="group">
            <p>
              <b>Grup A</b>
            </p>
            {sortedGroupVoli.A.map((team) => {
              return (
                <div className="team">
                  <img className="flag" src={"/tournament-draw/" + team.flag} />
                  <p className="team-name">{team.name}</p>
                </div>
              );
            })}
          </div>
          <div className="group">
            <p>
              <b>Grup B</b>
            </p>
            {sortedGroupVoli.B.map((team) => {
              return (
                <div className="team">
                  <img className="flag" src={"/tournament-draw/" + team.flag} />
                  <p className="team-name">{team.name}</p>
                </div>
              );
            })}
          </div>
        </div>

        <AnimatePresence>
          <div
            style={{
              display: "flex",
              alignContent: "center",
              flexDirection: "column",
              marginBottom: "5%",
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 2, delay: 0, ease: easeInOut }}
            key={isShuffledVoli}
          >
            {/* Shuffle Button Ganda Campuran */}
            <ShuffleButton
              onClick={() => {
                shuffle(groupVoli, teamVoli, setSlotsVoli, setIsShuffledVoli);
                shuffleTeams(defaultTeamnamesVoli, setShuffledTeamnamesVoli);
                setTeamnameVoli(shuffledTeamnamesVoli[0]);
                setSortedGroupVoli(defaultSortedGroupVoli);
              }}
            />

            {/* Slot selection Ganda Campuran */}
            <ShuffleBoxVoli
              teamname={teamnameVoli}
              isShuffled={isShuffledVoli}
              setTeamname={setTeamnameVoli}
              teamnames={shuffledTeamnamesVoli}
              slots={slotsVoli}
              setSortedGroup={setSortedGroupVoli}
              sortedGroup={sortedGroupVoli}
            />
          </div>
        </AnimatePresence>
      </header>
    </div>
  );
}

export default App;
