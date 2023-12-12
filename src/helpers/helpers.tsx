import iziToast from "izitoast";

export const showToast = (message: string, type: "success" | "error") => {
  iziToast.show({
    theme: "dark",
    icon: "icon-person",
    title: message,
    position: "bottomCenter", // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter
    progressBarColor: type === "error" ? "rgb(241,81,86)" : "rgb(0, 255, 184)",
    timeout: 3000,
  });
};

export const getApiUrl = () => {
  const isLocal = window.location.href.indexOf("localhost") > -1;
  const localHost = "http://localhost:5000";
  const apiEndpoint = "/api";
  return isLocal ? localHost + apiEndpoint : apiEndpoint;
};
