declare module "page-flip" {
  export class PageFlip {
    constructor(el: HTMLElement, settings: Record<string, unknown>);
    loadFromImages(images: string[]): void;
    loadFromHTML(items: HTMLElement[] | NodeListOf<HTMLElement>): void;
    destroy(): void;
    update(): void;
    flipNext(corner?: "top" | "bottom"): void;
    flipPrev(corner?: "top" | "bottom"): void;
    flip(page: number, corner?: "top" | "bottom"): void;
    turnToPage(page: number): void;
    getCurrentPageIndex(): number;
    getPageCount(): number;
    getOrientation(): "portrait" | "landscape";
    on(event: string, cb: (e: { data: unknown }) => void): void;
    startUserTouch(pos: { x: number; y: number }): void;
    userMove(pos: { x: number; y: number }, isTouch: boolean): void;
    userStop(pos: { x: number; y: number }, isSwipe?: boolean): void;
    off(event: string): void;
  }
}
