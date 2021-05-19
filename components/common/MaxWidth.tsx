import {ReactNode} from 'react';
import cn from 'classnames'

interface MaxWidthProps {
  children: ReactNode;
  size?: "max-w-screen-md" | "max-w-screen-sm";
};

const MaxWidth = ({children, size = "max-w-screen-sm"}: MaxWidthProps): JSX.Element => <div className="px-4">
  <div className={cn(size, "mx-auto")}>{children}</div>
</div>;

export default MaxWidth;