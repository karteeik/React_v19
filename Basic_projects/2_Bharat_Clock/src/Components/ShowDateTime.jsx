function ShowDateTime() {
  let currentDate = new Date();
  let currentTime = currentDate.toLocaleTimeString('en-US', { timeZone: 'Asia/Kolkata' });
  return <h2 class="border border-success p-2 mb-2">{currentDate.toLocaleDateString()} - {currentTime}</h2>;
}

export default ShowDateTime;
