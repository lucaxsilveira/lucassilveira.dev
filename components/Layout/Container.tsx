type Props = {
  children: JSX.Element[] | JSX.Element
}

const Container = ({ children }: Props): JSX.Element => {
  return <div className="container mx-auto px-24">{children}</div>
}

export default Container
