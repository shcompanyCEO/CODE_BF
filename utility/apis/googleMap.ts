export const unloadGoogleMapsScript = () => {
  const scriptElement = document.querySelector(
    'script[src^="https://maps.googleapis.com/maps/api/js"]'
  );

  if (scriptElement && scriptElement.parentNode) {
    scriptElement.parentNode.removeChild(scriptElement);
  }
};
