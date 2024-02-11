const Button = (props) => {
  const {type, className, text, onClick } = props;
  return (
      <div type={type} className={className} onClick={onClick}>{text}</div>
  )
}

export default Button;