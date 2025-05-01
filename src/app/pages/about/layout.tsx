import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Me | Professional Portfolio',
  description:
    'Learn about my background, skills, and experience in technical support, software engineering, and graphic design',
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
