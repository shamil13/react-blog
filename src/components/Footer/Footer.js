import './Footer.css'

export const Footer = ({
  name,
  year
}) => {

  console.log()

  return (
    <footer>
      <span>© {name} - {year}</span>
    </footer>
  )
}
