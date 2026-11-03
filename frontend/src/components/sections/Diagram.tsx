import { Fragment } from "react";
import type { DiagramNode, DiagramStep } from "@/content/projects";

const kindStyles: Record<DiagramNode["kind"], string> = {
  tool: "border-line bg-surface-2 text-fg",
  step: "border-lime text-lime",
  output: "border-lime bg-lime font-medium text-lime-ink",
};

function Node({ node }: { node: DiagramNode }) {
  return (
    <div
      tabIndex={node.note ? 0 : undefined}
      className={`group/node relative grid justify-items-center ${node.note ? "cursor-help" : ""}`}
    >
      <span
        className={`relative block max-w-[220px] rounded-[10px] border px-3 py-[9px] text-center font-mono text-[12.5px] leading-snug md:max-w-32 ${kindStyles[node.kind]}`}
      >
        {node.label}
        {node.note && (
          <span
            aria-hidden="true"
            className="absolute -top-[7px] -right-[7px] hidden size-[15px] place-items-center rounded-full border border-current bg-bg text-[10px] leading-none md:grid"
          >
            i
          </span>
        )}
      </span>
      {node.note && (
        <span className="mt-2 block max-w-[220px] text-center text-xs text-muted md:pointer-events-none md:absolute md:top-[calc(100%+10px)] md:left-1/2 md:z-10 md:mt-0 md:w-44 md:max-w-none md:-translate-x-1/2 md:translate-y-1 md:rounded-lg md:bg-fg md:px-2.5 md:py-2 md:text-left md:text-bg md:opacity-0 md:transition md:duration-250 md:group-hover/node:translate-y-0 md:group-hover/node:opacity-100 md:group-focus-visible/node:translate-y-0 md:group-focus-visible/node:opacity-100">
          {node.note}
        </span>
      )}
    </div>
  );
}

function Connector() {
  return (
    <span
      aria-hidden="true"
      className="relative h-[34px] w-0.5 flex-none bg-line after:absolute after:bottom-0 after:left-1/2 after:size-2 after:-translate-x-1/2 after:rotate-45 after:border-r-[1.5px] after:border-b-[1.5px] after:border-muted after:content-[''] md:h-0.5 md:w-auto md:min-w-[26px] md:flex-1 md:after:top-1/2 md:after:right-0 md:after:bottom-auto md:after:left-auto md:after:translate-x-0 md:after:-translate-y-1/2 md:after:-rotate-45"
    >
      <span className="absolute top-0 -left-[3px] size-2 animate-conn-y rounded-full bg-lime motion-reduce:hidden md:-top-[3px] md:left-0 md:animate-conn-x" />
    </span>
  );
}

export function Diagram({ steps }: { steps: DiagramStep[] }) {
  return (
    <div className="flex flex-col items-center md:min-h-[220px] md:flex-row">
      {steps.map((step, i) => {
        const isBranch = "branch" in step;
        const nodes = isBranch ? step.branch : [step];

        return (
          <Fragment key={i}>
            {i > 0 && <Connector />}
            <div
              className={`grid flex-none justify-items-center gap-2.5 ${isBranch ? "rounded-[14px] border border-dashed border-line p-2.5" : ""}`}
            >
              {nodes.map((node) => (
                <Node key={node.label} node={node} />
              ))}
            </div>
          </Fragment>
        );
      })}
    </div>
  );
}