import { AppProps } from "next/app";
import React from "react";

import { CssBaseline } from "@mui/material";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<CssBaseline />
			<Component {...pageProps} />
		</>
	);
}
