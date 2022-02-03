export const convertTime = (unix) => {
  let formattedTime = ''
  const date = new Date(unix * 1000);
  const hrs = date.getHours()
  const min = date.getMinutes();
  formattedTime = `${hrs}:${min}`
  return formattedTime
}