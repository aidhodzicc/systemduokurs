class CypressPageObject {
  cy: any
  constructor(cy: any) {
    this.cy = cy
  }
}

export class Page extends CypressPageObject {
  cy: any
  url: any
  constructor(url: any, cy: any) {
    super(cy)
    this.url = url
  }
}
