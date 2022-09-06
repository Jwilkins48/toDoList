
function Header({toggleTheme, theme, open, setOpen}) {

  const handleButtonClick = () => {
    setOpen(!open)
    console.log(open);
}
return (
<div className='headerContainer' style={{backgroundColor: theme === 'light' ? '#dadada' : ''}}>
  <div className="leftSideInfo">
    <i class="fa-solid fa-clipboard-check mainLogo"></i>
  </div>

  <div className="rightSideInfo">
    <button onClick={handleButtonClick} id='headerAddBtn' className='addTaskBtn'><i class="fa-solid fa-plus addIcon"></i></button>
    <button onClick={toggleTheme} className='darkModeBtn'><i class="fa-solid fa-lightbulb darkModeIcon"></i></button>
  </div>
</div>
)
}

export default Header