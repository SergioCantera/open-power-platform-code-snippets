import styles from './styles.module.css';
import { TabItem } from '../TabItem';


interface Props {
  tabs?: { label: string; active?: boolean }[];
  children: typeof TabItem | typeof TabItem[];
  className?: string;
}

export const Tab = ({tabs, children, className}:Props) => {
  return (
  <div data-tab className={`${styles.ac_tab} ${className}`}>
    <ul data-tab-header role="tablist" className={styles.ac_tab_header}>
      {
        tabs.map((tab) => (
          <li>
            <button
              className={styles.ac_tab_button}
              role="tab"
              data-tab-button
              aria-selected={tab.active}
            >
              {tab.label}
            </button>
          </li>
        ))
      }
    </ul>
    <div data-tab-body>
      <slot />
    </div>
</div>
)}


/**<script>
  import { DOMLoaded } from "@ts/utils";
  import { handleTabButtonClick } from "@ts/tab.ts";

  DOMLoaded(() => {
    const tabsButtons = document.querySelectorAll(
      "[data-tab-button]"
    ) as NodeListOf<HTMLButtonElement>;

    tabsButtons.forEach((button) => {
      button.addEventListener("click", () => handleTabButtonClick(button));
    });
  });
</script>**/
