const paths = {
  home() {
    return "/";
  },
  alertCreate() {
    return "/alerts/new";
  },
  alertShow(id: string) {
    return `/alerts/${id}`;
  },
  matchesShow() {
    return "/matches";
  },
};

export default paths;
