interface MyAccountLayoutProps {
  children: React.ReactNode;
  ordersInfo: React.ReactNode;
  userInfo: React.ReactNode;
}

export default async function MyAccountLayout({
  children,
  userInfo,
  ordersInfo
}: MyAccountLayoutProps) {
  return (
    <div>
      {children}
      {userInfo}
      {ordersInfo}
    </div>
  );
}