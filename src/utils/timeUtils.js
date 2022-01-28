// from https://www.codegrepper.com/code-examples/javascript/javascript+convert+minutes+to+hours
function convertSeconds(seconds) {
  const convert = function (x) {
    return x < 10 ? '0' + x : x;
  };
  return (
    convert(parseInt(seconds / (60 * 60))) +
    ':' +
    convert(parseInt((seconds / 60) % 60)) +
    ':' +
    convert(seconds % 60)
  );
}

function timeSince(date) {
  const seconds = Math.floor((new Date() - date) / 1000);

  return Math.floor(seconds);
}

function convertMins(mins) {
  const hours = mins / 60;
  const rhours = Math.floor(hours);
  const minutes = (hours - rhours) * 60;
  const rminutes = Math.round(minutes);
  return `${rhours}h, ${rminutes}m`;
}

export { timeSince, convertSeconds, convertMins };
