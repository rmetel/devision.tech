import iziToast from "izitoast";

export const showToast = (
  message: string,
  type: "success" | "error" | "info",
) => {
  let color = "";

  switch (type) {
    case "info":
      color = "rgb(233,241,245)";
      break;
    case "error":
      color = "rgb(241,81,86)";
      break;
    default:
      color = "rgb(0,255,184)";
      break;
  }

  iziToast.show({
    theme: "dark",
    icon: "icon-person",
    title: message,
    position: "bottomCenter", // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter
    progressBarColor: color,
    timeout: 3000,
  });
};

export const getApiUrl = () => {
  const isLocal = window.location.href.indexOf("localhost") > -1;
  const localHost = "http://localhost:3001";
  const apiEndpoint = "/api";
  return isLocal ? localHost + apiEndpoint : apiEndpoint;
};
