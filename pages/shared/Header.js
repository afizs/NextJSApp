import React, { Component } from "react";
import Link from "next/link";

class Header extends Component {
  render() {
    return (
      <div>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/portfolios">Portfolios</Link>
      </div>
    );
  }
}

export default Header;
