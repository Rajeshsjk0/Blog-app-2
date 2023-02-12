import { Footer, NavBar } from "@/components";

const WebsiteLayout = ({ children }: any) => {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
};

export default WebsiteLayout;
