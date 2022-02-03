const Reload = () => {

  const handleOnClick = () => {
    window.location.reload(true);
  }

  return (
    <div>
      <button onClick={handleOnClick}>Reload</button>
    </div>
  )
}

export default Reload;