const useStyles = {
  root: {
    margin: "0 auto",
    width: 450
  },
  new: {
    width: 450,
    height: 292,
    boxShadow: "0 3px 4px 2px rgba(0,0,0,0.1)"
  },
  new_description: {
    marginTop: 6.5,
    margin: 11.5,
    padding: 5,
    width: 416,
    height: 130,
    border: "1px solid white",
    color: "black",
    fontSize: 16,
    resize: "none"
  },
  user_selest: {
    margin: 11.5,
    marginTop: -1.5,
    width: 427,
    height: 34,
    fontSize: 16
  },
  select_priority: {
    margin: 11.5,
    marginTop: -1.5,
    width: 421,
    height: 30,
    fontSize: 16,
    border: "1px solid rgba(128, 128, 128, .2)",
    padding: {
      left: 4
    }
  },
  button_new: {
    margin: 11.5,
    marginTop: -1.5,
    width: 427,
    height: 34,
    fontSize: 14,
    border: "1px solid white",
    backgroundColor: "rgba(128, 128, 128, .1)"
  },
  root_list: {
    margin: "auto",
    marginTop: 40,
    width: 450
  },
  Ul: {
    paddingInlineStart: 0
  },
  item: {
    width: 450,
    height: 160,
    boxShadow: "0 3px 4px 2px rgba(0,0,0,0.1)",
    listStyleType: "none"
  },
  description_task: {
    margin: 11.5,
    paddingTop: 8,
    fontSize: 18
  },
  description_user: {
    margin: 13.5,
    paddingTop: 13,
    fontSize: 16
  },
  description_priority: {
    fontSize: 18,
    width: 10,
    hieght: 10,
    padding: 0,
    margin: 0,
    paddingLeft: 13.5,
    marginTop: 40
  },
  div_button: {
    display: "flex",
    justifyContent: "flex-end",
    width: 420,
    height: 34,
    marginLeft: 22,
    marginTop: -27,
    margin: "0 -3px"
  },
  button_del: {
    paddingLeft: 10,
    width: 80,
    height: 34,
    fontSize: 14,
    border: "1px solid white",
    backgroundColor: "rgba(128, 128, 128, .1)",
    margin: "0 3px"
  },
  button_plus_prior: {
    fontSize: 14,
    width: 150,
    height: 34,
    border: "1px solid white",
    backgroundColor: "rgba(128, 128, 128, .1)",
    margin: "0 3px"
  },
  button_minus_prior: {
    width: 150,
    height: 34,
    fontSize: 14,
    border: "1px solid white",
    backgroundColor: "rgba(128, 128, 128, .1)",
    margin: "0 3px"
  },
  priority_error: {
    color: "red",
    marginLeft: 100,
    marginTop: 10
  }
};

export default useStyles;
