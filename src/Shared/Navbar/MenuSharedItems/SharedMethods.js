import history from "../../../Utils/history";

export const changeRoute = url => {
  history.push(url);
};

export const isUrlExact = item => history.location.pathname == item.url;
