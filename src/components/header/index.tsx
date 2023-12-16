import Link from "next/link";
const HEADE_LINKLS = [
  {
    name: "صفحه اصلی",
    href: "/",
  },
  {
    name: "یادداشت‌ها",
    href: "/task",
  },
];
const Header = () => {
  return (
    <div className="w-full fixed top-0 py-6 px-12 bg-white">
      <ul className="flex items-center gap-x-10 flex-row-reverse">
        {HEADE_LINKLS.map((value, index: number) => (
          <Link href={value.href}>
            <li key={index}>{value.name}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Header;
