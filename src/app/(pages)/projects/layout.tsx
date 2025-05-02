import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects | Professional Portfolio',
  description:
    'Explore my portfolio of projects in technical support, software engineering, and graphic design',
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
