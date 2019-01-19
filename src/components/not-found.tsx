import { Component, Prop } from "@stencil/core";
import { RouterHistory } from "@stencil/router";

// This is a stub for a not-found page, in case the RealWorld
// people decide to put a tiny effort into creating it
@Component({
  tag: "not-found"
})
export class NotFound {
  @Prop() history: RouterHistory;

  componentWillLoad() {
    console.log("rolando");
    this.history.push("/");
  }

  render() {
    return null;
  }
}