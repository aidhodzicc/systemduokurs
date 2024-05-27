import { Page } from './base.po'

export class LoginPage extends Page {
  constructor() {
    super('login', cy)
  }
}
