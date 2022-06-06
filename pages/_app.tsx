import React from "react";

type MyAppProps = {
  Component: React.ElementType,
  pageProps: Object,
};

function MyApp({ Component, pageProps }: MyAppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
