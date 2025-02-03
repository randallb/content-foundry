import { BfDsButton } from "packages/bfDs/components/BfDsButton.tsx";

export function Tooltips() {
  return (
    <div className="ui-section">
      <h2>Tooltips</h2>
      <div className="ui-group tooltip-group">
        <BfDsButton
          iconLeft="starSolid"
          kind="outline"
          tooltip="bottom start"
          text="bottom start"
          tooltipPosition="bottom"
          tooltipJustification="start"
        />
        <BfDsButton
          iconLeft="starSolid"
          kind="outline"
          tooltip="bottom center"
          text="bottom center"
          tooltipPosition="bottom"
          tooltipJustification="center"
        />
        <BfDsButton
          iconLeft="starSolid"
          kind="outline"
          tooltip="bottom end"
          text="bottom end"
          tooltipPosition="bottom"
          tooltipJustification="end"
        />
      </div>

      <div className="ui-group tooltip-group">
        <div className="tooltip-columnGroup">
          <BfDsButton
            iconLeft="starSolid"
            kind="outline"
            tooltip="right start"
            text="right start"
            tooltipPosition="right"
            tooltipJustification="start"
          />
          <BfDsButton
            iconLeft="starSolid"
            kind="outline"
            tooltip="right center"
            text="right center"
            tooltipPosition="right"
            tooltipJustification="center"
          />
          <BfDsButton
            iconLeft="starSolid"
            kind="outline"
            tooltip="right end"
            text="right end"
            tooltipPosition="right"
            tooltipJustification="end"
          />
        </div>
        <div className="tooltip-columnGroup right">
          <BfDsButton
            iconLeft="starSolid"
            kind="outline"
            tooltip="left start"
            text="left start"
            tooltipPosition="left"
            tooltipJustification="start"
          />
          <BfDsButton
            iconLeft="starSolid"
            kind="outline"
            tooltip="left center"
            text="left center"
            tooltipPosition="left"
            tooltipJustification="center"
          />
          <BfDsButton
            iconLeft="starSolid"
            kind="outline"
            tooltip="left end"
            text="left end"
            tooltipPosition="left"
            tooltipJustification="end"
          />
        </div>
      </div>

      <div className="ui-group tooltip-group">
        <BfDsButton
          iconLeft="starSolid"
          kind="outline"
          tooltip="top start"
          text="top start"
          tooltipPosition="top"
          tooltipJustification="start"
        />
        <BfDsButton
          iconLeft="starSolid"
          kind="outline"
          tooltip="top center"
          text="top center"
          tooltipPosition="top"
          tooltipJustification="center"
        />
        <BfDsButton
          iconLeft="starSolid"
          kind="outline"
          tooltip="top end"
          text="top end"
          tooltipPosition="top"
          tooltipJustification="end"
        />
      </div>
    </div>
  );
}
