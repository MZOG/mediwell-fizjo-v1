import Image from "next/image";
import Link from "next/link";
import getBase64 from "@/utils/getBase64";

import HeaderNav from "@/components/header-nav";

export default async function Header({ logo }) {
  const base64 = await getBase64(logo.formats.thumbnail.url);

  return <HeaderNav logo={logo} base64={base64} />;
}
