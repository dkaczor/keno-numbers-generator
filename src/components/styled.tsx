import { createUseStyles } from "react-jss";
import { KenoNumberColor } from "./types";
import { GameStatusType } from "store/KenoGameStore/KenoGameStore.types";

const redColor = "rgb(196, 42, 43)";

export const useKenoContainerStyle = createUseStyles({
  appContainer: {
    color: redColor,
    fontSize: "25px",
    textAlign: "center",
    width: "100%",
  },
  gameContainer: {
    borderTop: `3px solid ${redColor}`,
    marginLeft: "15%",
    marginTop: "15px",
    paddingTop: "20px",
    width: "70%",
  },
});

export const useKenoNumberBoxStyle = createUseStyles({
  kenoCell: {
    boxSizing: "border-box",
    display: "flex",
    flex: "0 0 10%",
    justifyContent: "center",
    padding: "0.6vw",

    "&:before": {
      content: '""',
      display: "block",
      paddingTop: "100%",
    },

    "& .keno-item": {
      alignItems: "center",
      background: (color: KenoNumberColor) =>
        color === "blue" ? "rgb(4,154,209)" : redColor,
      color: "white",
      cursor: "pointer",
      display: "flex",
      flexGrow: 1,
      justifyContent: "center",
    },

    "& .keno-item:hover": {
      background: "#AAA",
      color: "#000",
    },

    "& .keno-item.active": {
      background: "#DDD",
      color: "#000",
    },
  },

  "@media (max-width: 500px)": {
    kenoCell: {
      "& .keno-item": {
        fontSize: "13px",
      },
    },
  },
});

export const useKenoNumberBoxContainerStyle = createUseStyles({
  kenoNumbersContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "flex-start",
  },
});

export const useKenoStakeApproverStyle = createUseStyles({
  kenoStakesApproverContainer: {
    display: "grid",
    gridTemplateColumns: (columnNumbers: number) =>
      `repeat(${columnNumbers}, 1fr)`,
    marginBottom: "15px",

    "& button": {
      background: redColor,
      border: "none",
      color: "#FFF",
      fontWeight: "bold",
      display: "inline-block",
      height: "40px",
      gridColumn: (columnNumber: number) => columnNumber,
    },

    "& button:first-of-type": {
      gridColumn: (columnNumber: number) => columnNumber - 1,
      marginRight: "10px",
    },
  },
});

export const useKenoStakesComponentStyle = createUseStyles({
  kenoStakeContainer: {
    display: "grid",
    gridTemplateColumns: (columnNumbers: number) =>
      `repeat(${columnNumbers}, 1fr)`,
    marginBottom: "20px",
    marginTop: "10px",

    "& button, & input": {
      minWidth: 0,
      paddingLeft: "15px",
    },

    "& button": {
      background: "none",
      border: "1px solid #333",
      color: "#000",
      cursor: "pointer",
      height: "40px",
      marginRight: "10px",
      textAlign: "left",
    },
  },

  "@media (max-width: 500px)": {
    kenoStakeContainer: {
      "& button, & input": {
        paddingLeft: "0px",
      },
    },
  },
});

export const useKenoGameStatus = createUseStyles({
  gameStatus: {
    color: (status: GameStatusType) =>
      status === "error" ? redColor : "rgb(0, 168, 7)",
  },
});
