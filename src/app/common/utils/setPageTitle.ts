export function setPageTitle(pathname: string): string {
  switch (pathname) {
    case "/faq":
      return "FAQ";

    case "/tuff-token":
      return "Tuff Token";
  }
}
