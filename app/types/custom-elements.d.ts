import "react";

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "pixel-canvas": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
      "pixel-canvas-background": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
    }
  }
}
