import Navbar from "@/Components/Navigation/Navbar";

export default function Layout({ children }:{children:any}) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
}
