import { Provider } from "@/components/ui/provider";

export const metadata = {
  title: "Waterpolo",
  description: "The Waterpolo boys' website :)",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
