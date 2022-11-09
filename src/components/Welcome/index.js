import './index.css'

const Welcome = props => {
  const {name, greeting} = props
  return (
    <h1 className="message">
      {greeting}, {name}
    </h1>
  )
}
// DEFAULT PROPS
Welcome.defaultProps = {
  name: 'Praveen',
  greeting: 'Hi',
}
export default Welcome
