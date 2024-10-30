declare module '*.css';
declare module '*.less';
declare module '*.png';
declare module 'classnames';
declare module 'qs';
declare module 'styled-components';
declare module '*.svg' {
  export function ReactComponent(
    props: React.SVGProps<SVGSVGElement>,
  ): React.ReactElement;
  const url: string;
  export default url;
}
