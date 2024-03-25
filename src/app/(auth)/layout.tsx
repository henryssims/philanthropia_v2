

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-slate-300 p-10 rounded-md text-black mt-20">
      {children}
    </div>
  );
}