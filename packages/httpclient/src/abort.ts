import { Canceler } from 'axios';

export class AbortedRequestQueue {
  private pendingRequests: Map<string, Canceler>;

  constructor() {
    this.pendingRequests = new Map<string, Canceler>();
  }
}
