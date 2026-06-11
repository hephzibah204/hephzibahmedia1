import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Our Services | Web Design, SEO & Tech Solutions Nigeria",
  description: "Explore our range of premium digital services designed to help Nigerian businesses dominate their market. From Web Development to Growth Marketing.",
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
