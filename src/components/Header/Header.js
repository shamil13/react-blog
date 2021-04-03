import './Header.css'

export const Header = (props) => {

  console.log(props)
  return (
    <header>
      <nav>
        <a href="#first">Home</a>
        <a href="#second">About</a>
        <a href="#third">Contact</a>
      </nav>
    </header>
  )
}