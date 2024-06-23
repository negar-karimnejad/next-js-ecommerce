import { Nav, NavLink } from "@/components/Nav";
import React from "react";

export const dynamic = "force-dynamic"

function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Nav>
        <NavLink href="/admin">Dashboard</NavLink>
        <NavLink href="/admin/products">Products</NavLink>
        <NavLink href="/admin/users">Customers</NavLink>
        <NavLink href="/admin/orders">Sales</NavLink>
      </Nav>
      <div className="container my-6">{children}</div>
    </div>
  );
}

export default AdminLayout;
