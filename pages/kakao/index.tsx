import { useEffect } from "react";

export default function Kakao() {
  const getToken = () => {
    const params = new URLSearchParams(location.search);
    const name: any = params.get("token");
    localStorage.setItem("token", name);
    document.location.href = "/";
  };
  useEffect(() => {
    getToken();
  }, []);

  return <>로딩중</>;
}
