/* ------------------------------------------------ */
/*                    DEPENDENCIES                  */
/* ------------------------------------------------ */
// Styles
import '../shared/styles/styles.globals.scss';

/* ------------------------------------------------ */
/*                  SEO META DATA                   */
/* ------------------------------------------------ */
export const metadata = {
  title: "Zahra_kaabi",
  description: "Designed and created by zahra kaabi",
};

/* ------------------------------------------------ */
/*                     COMPONENT                    */
/* ------------------------------------------------ */
function RootLayout({ children }) {
  /* ***************** RENDERING ****************** */
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

export default RootLayout;