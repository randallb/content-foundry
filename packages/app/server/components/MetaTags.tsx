// import AppEnvironmentProvider from "packages/client/contexts/AppEnvironmentContext.tsx";

export function MetaTags(props: React.PropsWithChildren<unknown>) {
  const { children, ...otherProps } = props;
  return children;
  //   return (<AppEnvironmentProvider {...otherProps}>
  // {children}
  //   </AppEnvironmentProvider>)
}
