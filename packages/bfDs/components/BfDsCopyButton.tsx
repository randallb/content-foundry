import * as React from "react";
import { BfDsButton } from "packages/bfDs/components/BfDsButton.tsx";
import { useCopyToClipboard } from "packages/bfDs/hooks/useCopyToClipboard.ts";
type Props = {
  textToCopy: string;
  buttonText?: string;
};
const { useState } = React;
export function BfDsCopyButton({ textToCopy, buttonText = "Copy" }: Props) {
  const [copied, setCopied] = useState(false);
  const [, copy] = useCopyToClipboard();
  const handleCopy = () => {
    copy(textToCopy);
    setCopied(true);
    globalThis.setTimeout(() => (setCopied(false)), 1000);
  };

  const text = copied ? "Copied!" : buttonText;

  return <BfDsButton kind="overlay" text={text} onClick={handleCopy} />;
}
