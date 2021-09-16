import { makeStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: 323,
    backgroundColor: theme.palette.common.white,
  },
  content: {
    justifyContent: "space-between",
  },
  title: {
    fontSize: 16,
  },
  titleWithColor: {
    color: "#aa8375",
  },
}));