import { useRouter } from "next/router";
import { useEffect } from "react";
import { DetailsHeader, DetailsSection, Options } from "./components";

export default function SopDetails() {
  const router = useRouter();

  useEffect(() => {
    if (router.pathname) {
    }
  }, [router.pathname]);

  return (
    <>
      <DetailsHeader />
      <DetailsSection />
    </>
  );
}
