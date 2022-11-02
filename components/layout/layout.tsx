import Nav from "./nav";

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