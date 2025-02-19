interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface MenuItem {
  label: string;
  value?: string;
  href: string;
  icon?: React.ReactNode;
  external?: boolean;
}

interface Profile01Props {
  name: string;
  role: string;
  avatar: string;
  subscription?: string;
}

type NavLinks = (
  | {
      label: string;
      url: string;
      icon: ({ width, height, color, ...props }: Props) => JSX.Element;
    }
  | {
      label: string;
      url: string;
      icon: ForwardRefExoticComponent<
        Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>
      >;
    }
)[];

type TIcon = ({
  width,
  height,
  color,
  ...props
}: Props) =>
  | JSX.Element
  | ForwardRefExoticComponent<
      Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>
    >;
