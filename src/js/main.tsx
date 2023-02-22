import React from "react";
import ReactDOM from "react-dom/client";
import { Provider as AlertProvider } from "react-alert";
import { BrowserRouter } from "react-router-dom";

import { ProviderAuth } from "@/hooks/useAuth";
import { App } from "@/components/app";
import { AlertTheme, alertOptions } from "@/ui_kit/alert";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<BrowserRouter>
			<AlertProvider template={AlertTheme} {...alertOptions}>
				<ProviderAuth>
					<App />
				</ProviderAuth>
			</AlertProvider>
		</BrowserRouter>
	</React.StrictMode>
);
