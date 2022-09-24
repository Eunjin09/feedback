import Nav from "./Nav";

type Props = {
  children: React.ReactNode;
}; 
export default function Layout({children}:Props) {
  return (
    <div>
      <Nav />
      <div>{children}</div>
    </div>
  )
}