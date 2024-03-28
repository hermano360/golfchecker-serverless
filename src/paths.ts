const paths = {
  home() {
    return "/";
  },
  profile() {
    return "/profile";
  },
  alertCreate() {
    return "/alerts/new";
  },
  alertShow(id: string) {
    return `/alerts/${id}`;
  },
  alerts() {
    return `/alerts`;
  },
  matchesShow() {
    return "/matches";
  },
};

export default paths;
