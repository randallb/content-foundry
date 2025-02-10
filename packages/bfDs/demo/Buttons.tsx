import { classnames } from "lib/classnames.ts";
import { BfDsButton } from "packages/bfDs/components/BfDsButton.tsx";
import { BfDsButtonGroup } from "packages/bfDs/components/BfDsButtonGroup.tsx";
import { Example as ExampleButtonConfirmation } from "packages/bfDs/components/BfDsButtonConfirmation.tsx";
import { BfDsCopyButton } from "packages/bfDs/components/BfDsCopyButton.tsx";

const buttonElements = [
  {
    name: "Button (primary/large)",
    component: <BfDsButton text="Primary" kind="primary" size="large" />,
  },
  {
    name: "Button (secondary/medium)",
    component: <BfDsButton text="Secondary" kind="secondary" size="medium" />,
  },
  {
    name: "Button (accent/small)",
    component: <BfDsButton text="Accent" kind="accent" size="small" />,
  },
  {
    name: "Button (outline)",
    component: <BfDsButton text="Outline" kind="outline" />,
  },
  {
    name: "Button (overlay)",
    component: <BfDsButton text="Overlay" kind="overlay" />,
  },
  {
    name: "Button (alert)",
    component: <BfDsButton text="Alert" kind="alert" />,
  },
  {
    name: "Button (success)",
    component: <BfDsButton text="Success" kind="success" />,
  },
  {
    name: "Button (success + spinner)",
    component: <BfDsButton text="Success" kind="success" showSpinner={true} />,
  },
  {
    name: "Button (primary + spinner)",
    component: (
      <BfDsButton text="Primary" iconLeft="pencil" showSpinner={true} />
    ),
  },
  {
    name: "Button with copy",
    component: (
      <BfDsCopyButton buttonText="Copy me!" textToCopy="How 'bout that'" />
    ),
  },
];
const buttonElementsWithIcons = [
  {
    name: "Button (icon + text)",
    component: <BfDsButton text="Text" iconLeft="pencil" />,
  },
  {
    name: "Button (icon + text + icon/large)",
    component: (
      <BfDsButton
        text="Text"
        subtext="More text"
        iconLeft="pencil"
        iconRight="cross"
      />
    ),
  },
  {
    name: "Button (icon + text + icon/medium)",
    component: (
      <BfDsButton
        text="Text"
        subtext="More text"
        iconLeft="pencil"
        iconRight="cross"
        size="medium"
      />
    ),
  },
  {
    name: "Button (icon + text + icon/small)",
    component: (
      <BfDsButton
        text="Text"
        subtext="More text"
        iconLeft="pencil"
        iconRight="cross"
        size="small"
      />
    ),
  },
];
const buttonElementsWithIconsOnly = [
  {
    name: "Button (icon)",
    component: <BfDsButton iconLeft="plus" size="large" />,
  },
  {
    name: "Button (icon)",
    component: <BfDsButton iconLeft="pencil" kind="secondary" size="medium" />,
  },
  {
    name: "Button (icon/alert)",
    component: <BfDsButton iconLeft="cross" kind="alert" size="small" />,
  },
  {
    name: "Button (icon/success)",
    component: <BfDsButton iconLeft="check" kind="success" />,
  },
  {
    name: "Button (icon/outline)",
    component: <BfDsButton iconLeft="settings" kind="outline" />,
  },
  {
    name: "Button (icon/overlay)",
    component: <BfDsButton iconLeft="download" kind="overlay" />,
  },
  {
    name: "Button (icon/spinner)",
    component: <BfDsButton iconLeft="check" kind="success" showSpinner />,
  },
  {
    name: "Button (icon/spinner/accent)",
    component: <BfDsButton iconLeft="download" kind="accent" showSpinner />,
  },
  {
    name: "Button with confirmation",
    component: <ExampleButtonConfirmation />,
  },
];
const buttonMenuElements = [
  {
    name: "Icon Button Dropdown menu",
    component: (
      <BfDsButton
        iconLeft="settings"
        kind="outline"
        tooltipMenu={[
          { label: "Menu Item 1", onClick: () => {} },
          { label: "Menu Item 2", onClick: () => {} },
          { label: "Menu Item 3", onClick: () => {} },
        ]}
        tooltipJustification="end"
        tooltipPosition="bottom"
      />
    ),
  },
  {
    name: "Button Dropdown menu",
    component: (
      <BfDsButton
        text="Button menu"
        kind="outline"
        tooltipMenu={[
          { label: "Menu Item 1", onClick: () => {} },
          { label: "Menu Item 2", onClick: () => {} },
          { label: "Menu Item 3", onClick: () => {} },
        ]}
        tooltipJustification="end"
        tooltipPosition="bottom"
      />
    ),
  },
  {
    name: "Icon Button Dropdown menu",
    component: (
      <BfDsButton
        iconLeft="settings"
        kind="secondary"
        tooltipMenu={[
          { label: "Menu Item 1", onClick: () => {} },
          { label: "Menu Item 2", onClick: () => {} },
          { label: "Menu Item 3", onClick: () => {} },
        ]}
        tooltipJustification="end"
        tooltipPosition="bottom"
      />
    ),
  },
  {
    name: "Button Dropdown menu",
    component: (
      <BfDsButton
        text="Button menu"
        kind="secondary"
        tooltipMenu={[
          { label: "Menu Item 1", onClick: () => {} },
          { label: "Menu Item 2", onClick: () => {} },
          { label: "Menu Item 3", onClick: () => {} },
        ]}
        tooltipJustification="end"
        tooltipPosition="bottom"
      />
    ),
  },
  {
    name: "Icon Button Dropdown menu",
    component: (
      <BfDsButton
        iconLeft="settings"
        tooltipMenu={[
          { label: "Menu Item 1", onClick: () => {} },
          { label: "Menu Item 2", onClick: () => {} },
          { label: "Menu Item 3", onClick: () => {} },
        ]}
        tooltipJustification="end"
        tooltipPosition="bottom"
      />
    ),
  },
  {
    name: "Button Dropdown menu",
    component: (
      <BfDsButton
        text="Button menu w/ tooltip"
        tooltipMenu={[
          { label: "Menu Item 1", onClick: () => {} },
          { label: "Menu Item 2", onClick: () => {} },
          { label: "Menu Item 3", onClick: () => {} },
        ]}
        tooltipJustification="end"
        tooltipPosition="bottom"
        tooltip="Tooltip"
      />
    ),
  },
];
const buttonGroupElements = [
  {
    name: "ButtonGroup",
    component: (
      <BfDsButtonGroup
        buttons={[
          <BfDsButton text="Button" kind="secondary" />,
          <BfDsButton text="Button" />,
        ]}
      />
    ),
  },
];
const darkElements = [
  {
    name: "Button (outlineDark)",
    component: <BfDsButton text="Outline Dark" kind="outline" />,
  },
  {
    name: "Button (overlayDark)",
    component: <BfDsButton text="Overlay Dark" kind="overlayDark" />,
  },
  {
    name: "Link",
    component: <BfDsButton text="Link" kind="outline" link="/" />,
  },
  {
    name: "Href",
    component: (
      <BfDsButton text="Href" kind="outline" href="https://facebook.com" />
    ),
  },
  {
    name: "Icon (outlineDark)",
    component: (
      <BfDsButton
        iconLeft="brand-tiktok"
        kind="outline"
        href="https://www.tiktok.com"
        hrefTarget="_blank"
      />
    ),
  },
  {
    name: "Icon (overlayDark)",
    component: (
      <BfDsButton
        iconLeft="brand-tiktok"
        kind="overlayDark"
        href="https://www.tiktok.com"
        hrefTarget="_blank"
      />
    ),
  },
];

const uiElementGroups = [
  { name: "Buttons", elements: buttonElements },
  { name: "Buttons (with icons)", elements: buttonElementsWithIcons },
  { name: "Buttons (icons only)", elements: buttonElementsWithIconsOnly },
  { name: "Button Menu", elements: buttonMenuElements },
  { name: "ButtonGroup", elements: buttonGroupElements },
  { name: "Dark Elements", elements: darkElements, dark: true },
];

export function Buttons() {
  return uiElementGroups.map((group, index) => {
    const sectionClasses = classnames([
      "ui-section",
      { "dark": group.dark },
    ]);
    return (
      <div
        className={sectionClasses}
        key={index}
      >
        <h2>{group.name}</h2>
        <div className="ui-group">
          {group.elements.map((element, i) => (
            <div key={i}>
              {element.component}
            </div>
          ))}
        </div>
      </div>
    );
  });
}
