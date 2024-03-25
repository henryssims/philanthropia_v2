

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-slate-300 p-10 rounded-md">
      {children}
    </div>
  );
}