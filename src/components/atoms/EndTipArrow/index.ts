interface Props {
  width?: number | string;
  height?: number | string;
}

export default function EndTipArrow({ width, height }: Props) {
  const rootElement = document.createElement('div');
  rootElement.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 1080 1080" xml:space="preserve">
      <desc>Created with Fabric.js 5.2.4</desc>
      <defs>
      </defs>
      <rect x="0" y="0" width="100%" height="100%" fill="transparent"/>
      <g transform="matrix(1 0 0 1 540 540)" id="a858b273-6439-4f14-8bf7-cad2c3e488c8">
        <rect style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1; visibility: hidden;" vector-effect="non-scaling-stroke" x="-540" y="-540" rx="0" ry="0" width="1080" height="1080"/>
      </g>
      <g transform="matrix(1 0 0 1 540 540)" id="837383cb-c6bd-43b9-b520-ea4924f52ecd">
      </g>
      <g transform="matrix(0 14.17 -16.37 0 540.3 540.31)" id="c7d11e50-9ce0-4d72-b1a1-7f210a29997f">
        <polygon style="stroke: rgb(0,0,0); stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" vector-effect="non-scaling-stroke" points="-37.43,32.41 0,-32.41 37.43,32.41 "/>
      </g>
    </svg>
  `;

  rootElement.setAttribute('style', `width: ${width}; height: ${height};`);

  return rootElement;
}
