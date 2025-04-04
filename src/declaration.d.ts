﻿declare module '*.scss' {
    const content: { [className: string]: string };
    export default content;
}

declare module '*.svg' {
    const content: string;
    export default content;
}

declare module '*.svg' {
    import * as React from 'react';
    export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    const src: string;
    export default src;
}

declare module '*.png' {
    const content: string;
    export default content;
}