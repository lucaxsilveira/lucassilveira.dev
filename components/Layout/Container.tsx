type Props = {
  children: JSX.Element[] | JSX.Element
}

const Container = ({ children }: Props): JSX.Element => {
  return <div className="container mx-auto md:px-36 px-10">{children}</div>
}

export default Container
