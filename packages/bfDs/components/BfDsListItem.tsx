import { useState } from "react";
import {
  BfDsIcon,
  type BfDsIconType,
} from "packages/bfDs/components/BfDsIcon.tsx";
import { classnames } from "lib/classnames.ts";
import { BfDsToggle } from "packages/bfDs/components/BfDsToggle.tsx";

type Props = {
  action?: React.ReactNode;
  content: string | React.ReactNode;
  expandedContent?: React.ReactNode;
  iconLeft?: BfDsIconType;
  iconLeftColor?: string;
  iconRight?: BfDsIconType;
  isHighlighted?: boolean;
  footer?: string | React.ReactNode;
  onDoubleClick?: () => void;
  onClick?: () => void;
  toggle?: () => void;
  toggled?: boolean;
  xstyle?: React.CSSProperties;
};

export function BfDsListItem(
  {
    action,
    content,
    expandedContent,
    iconLeft,
    iconLeftColor,
    iconRight,
    isHighlighted,
    footer,
    onClick,
    onDoubleClick,
    toggle,
    toggled,
    xstyle,
  }: Props,
) {
  const [expand, setExpand] = useState(false);
  function handleClick(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    if ((e.target as HTMLElement).closest(".ignore-internal-click")) {
      return;
    }
    if (expandedContent) {
      setExpand(!expand);
    }
    if (onClick) {
      onClick();
    }
  }
  const clickable = (typeof onClick === "function" && !isHighlighted) ||
    expandedContent != null;

  const listItemClasses = classnames([
    "list-item",
    { isHighlighted },
    { clickable },
  ]);

  return (
    <div
      className={listItemClasses}
      onClick={(e) => handleClick(e)}
      style={xstyle}
      onDoubleClick={onDoubleClick}
    >
      <div className="list-item-row">
        {iconLeft && (
          <div className="list-item-icon">
            <BfDsIcon
              name={iconLeft}
              color={iconLeftColor ?? "var(--textSecondary)"}
            />
          </div>
        )}

        <div className="list-item-main">
          <div className="list-item-text">{content}</div>
          {footer && (
            <div className="list-item-meta">
              {footer}
            </div>
          )}
        </div>
        {expandedContent && (
          <div className="list-item-icon">
            <BfDsIcon
              name={expand ? "arrowUp" : "arrowDown"}
              color="var(--textSecondary)"
            />
          </div>
        )}
        {iconRight && !expandedContent && (
          <div className="list-item-icon">
            <BfDsIcon name={iconRight} color="var(--textSecondary)" />
          </div>
        )}
        {toggle && (
          <div className="list-item-toggle">
            <BfDsToggle value={!!toggled} onChange={toggle} />
          </div>
        )}
        {action && (
          <div className="list-item-action ignore-internal-click">
            {action}
          </div>
        )}
      </div>
      {expandedContent && expand && (
        <div className="list-item-expanded">
          {expandedContent}
        </div>
      )}
    </div>
  );
}
