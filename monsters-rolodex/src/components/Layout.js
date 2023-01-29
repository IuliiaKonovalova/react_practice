import { Helmet } from 'react-helmet';

const Layout = ({ title, content, children }) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name='description' content={content} />
      </Helmet>
      <div className="flex flex-col py-5 min-h-full w-full justify-between bg-lime-200">
        {children}
      </div>
    </>
  );
}

export default Layout;