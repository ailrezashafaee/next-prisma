import ReduxProvider from "./theme-provider";

export default function TaskLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="w-full h-screen flex items-center justify-center">
      <ReduxProvider>
        {children}
      </ReduxProvider>
    </section>
  );
}
