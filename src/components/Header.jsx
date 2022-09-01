
function Header({open, setOpen}) {

  const handleButtonClick = () => {
    setOpen(!open)
    console.log(open);
}
return (
<div className='headerContainer'>
  <div className="leftSideInfo">
    <i class="fa-solid fa-clipboard-check mainLogo"></i>
  </div>

  <div className="rightSideInfo">
    <button onClick={handleButtonClick} id='headerAddBtn' className='addTaskBtn'><i class="fa-solid fa-plus addIcon"></i></button>
  </div>
</div>
)
}

export default Header