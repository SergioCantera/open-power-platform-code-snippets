import type {ReactNode} from 'react'; 
import styles from './styles.module.css'

interface Props {
  active?: boolean;
  children: ReactNode;
  className?: string;
}

export const TabItem = ({active, children, className}:Props) => {
  return (
    <div
  data-tab-pane
  aria-hidden={active ? "false" : "true"}
  role="tabpanel"
  className={`${styles.ac_tab_pane} ${className}`}
>
  {children}
</div>)
}


