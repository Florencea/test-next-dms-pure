import { ReactNode } from "react";

export default async function Layout({
  header,
  menu,
  content,
}: Readonly<{
  header: ReactNode;
  menu: ReactNode;
  content: ReactNode;
}>) {
  return (
    <div className="flex h-svh w-full flex-col bg-gray-50">
      <header>{header}</header>
      <div className="flex grow overflow-hidden">
        {menu}
        <main className="ml-[200px] w-full overflow-y-scroll p-3">
          {content}
        </main>
      </div>
    </div>
  );
}
