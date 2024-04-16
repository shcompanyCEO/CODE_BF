export const unloadGoogleMapsScript = () => {
  const scriptElement = document.querySelector(
    'script[src^="https://maps.googleapis.com/maps/api/js"]'
  );

  console.log('sean scirptElement', scriptElement);
  console.log('sean prarentNode', scriptElement?.parentNode);
  if (scriptElement && scriptElement.parentNode) {
    scriptElement.parentNode.removeChild(scriptElement);
  }
};
