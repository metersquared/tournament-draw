import "./App.css";
import { motion, AnimatePresence, easeInOut } from "framer-motion";
import Card from "./Card";
import combineArrays from "./helper";
import { useEffect, useState } from "react";
import ShuffleButton from "./ShuffleButton";
import ShuffleBox from "./ShuffleBox";

// Plays Champions League audio

const bgaudio = new Audio("champions.mp3");

bgaudio.play();
bgaudio.volume = 0.5;
bgaudio.loop = true;

function App() {
  // Initialize constant Ganda Putra

  const groupMD = ["A", "B", "C", "D"];
  const teamMD = ["1", "2", "3", "4"];
  const defaultTeamnamesMD = [
    { name: "Badai Pasir", flag: "flags/leipzig.svg" },
    { name: "Yuta Watanabe/Kento Momota", flag: "flags/berlin.svg" },
    { name: "Turu", flag: "flags/kaiserslautern.svg" },
    { name: "DOGE", flag: "flags/neutral.svg" },
    { name: "Surplus Hore", flag: "flags/berlin.svg" },
    { name: "Carola", flag: "flags/neutral.svg" },
    { name: "Top G", flag: "flags/berlin.svg" },
    { name: "Minions", flag: "flags/munich.svg" },
    { name: "Tele", flag: "flags/frankfurt.svg" },
    { name: "Union Rostock", flag: "flags/rostock.svg" },
    { name: "Anak Pantai", flag: "flags/bremen.svg" },
    { name: "Tetannga Leipzig", flag: "flags/halle.svg" },
    { name: "Desa", flag: "flags/nordhausen.svg" },
    { name: "Bukan Frankfurt", flag: "flags/giessen.svg" },
    { name: "Nyepur", flag: "flags/leipzig.svg" },
    { name: "Cupu", flag: "flags/berlin.svg" },
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
  const teamXD = ["1", "2", "3", "4"];
  const defaultTeamnamesXD = [
    { name: "Badai Pasir", flag: "flags/leipzig.svg" },
    { name: "Yuta Watanabe/Kento Momota", flag: "flags/berlin.svg" },
    { name: "Turu", flag: "flags/kaiserslautern.svg" },
    { name: "DOGE", flag: "flags/neutral.svg" },
    { name: "Surplus Hore", flag: "flags/berlin.svg" },
    { name: "Carola", flag: "flags/neutral.svg" },
    { name: "Top G", flag: "flags/berlin.svg" },
    { name: "Minions", flag: "flags/munich.svg" },
  ];

  const defaultSortedGroupXD = {
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
  };

  const [slotsXD, setSlotsXD] = useState([]);
  const [isShuffledXD, setIsShuffledXD] = useState(0);
  const [sortedGroupXD, setSortedGroupXD] = useState(defaultSortedGroupXD);
  const [teamnameXD, setTeamnameXD] = useState();
  const [shuffledTeamnamesXD, setShuffledTeamnamesXD] =
    useState(defaultTeamnamesXD);

  // Shuffle groups
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
  });

  console.log(defaultSortedGroupMD);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Bearlympic Group Draw</h1>
        <h2>Cabor Badminton</h2>

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
                  <img className="flag" src={team.flag} />
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
                  <img className="flag" src={team.flag} />
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
                  <img className="flag" src={team.flag} />
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
                  <img className="flag" src={team.flag} />
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
              shuffle(groupMD, teamMD, setSlotsMD, setIsShuffledMD);
              shuffleTeams(defaultTeamnamesMD, setShuffledTeamnamesMD);
              setTeamnameMD(shuffledTeamnamesMD[0]);
              setSortedGroupMD(defaultSortedGroupMD);
            }}
          />

          {/* Slot selection Ganda Putra */}

          <ShuffleBox
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
                  <img className="flag" src={team.flag} />
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
                  <img className="flag" src={team.flag} />
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
            <ShuffleBox
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
      </header>
    </div>
  );
}

export default App;
