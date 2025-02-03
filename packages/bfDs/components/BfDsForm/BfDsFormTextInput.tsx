import {
  type BfDsFormElementProps,
  useBfDsFormContext,
} from "packages/bfDs/components/BfDsForm/BfDsForm.tsx";
import { BfDsInput } from "packages/bfDs/components/BfDsInput.tsx";

// TODO: Implement all props:
// autoFocus, autoSelect, disabled, label, value, onBlur, onChange, onFocus, onKeyDown, placeholder, type, className, meta, name, numberAttributes, pattern, required, readonly, showSpinner, testId, xstyle

export function BfDsFormTextInput({ id, title }: BfDsFormElementProps) {
  const { data, onChange } = useBfDsFormContext();
  if (!data) return null;
  return (
    <BfDsInput
      label={title}
      type="text"
      name={id}
      // @ts-ignore: TODO @george, need to figure out typing
      value={data[id] ?? ""}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        onChange?.({ ...data, [id]: e.target.value })}
    />
  );
}
