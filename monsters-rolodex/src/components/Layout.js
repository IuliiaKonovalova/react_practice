import { Helmet } from 'react-helmet';

const Layout = ({ title, content, children }) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name='description' content={content} />
      </Helmet>
      <div className="flex flex-col h-screen w-full justify-between bg-lime-200 min-h-full">
        {children}
      </div>
    </>
  );
}

export default Layout;