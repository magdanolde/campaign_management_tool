import "@styles/globals.css";

export const metadata = {
    title: "Campaign Management Tool",
    description: "Add and manage campaigns",
};

const RootLayout = ({ children }) => (
    <html lang='en'>
      <body>

        {children}

      </body>
    </html>
  );
  
  export default RootLayout;