"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";

type Items = Record<string, number>;

type CartCtx = {
  items: Items;
  count: number;
  add: (slug: string) => void;
  setQty: (slug: string, qty: number) => void;
  clear: () => void;
};

const Ctx = createContext<CartCtx | null>(null);
const KEY = "zafrane-cart-v1";

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<Items>({});

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) setItems(JSON.parse(raw));
    } catch {}
  }, []);

  const persist = useCallback((next: Items) => {
    setItems(next);
    try {
      localStorage.setItem(KEY, JSON.stringify(next));
    } catch {}
  }, []);

  const add = (slug: string) => persist({ ...items, [slug]: (items[slug] ?? 0) + 1 });

  const setQty = (slug: string, qty: number) => {
    const next = { ...items };
    if (qty <= 0) delete next[slug];
    else next[slug] = Math.min(qty, 99);
    persist(next);
  };

  const clear = () => persist({});
  const count = Object.values(items).reduce((a, b) => a + b, 0);

  return <Ctx.Provider value={{ items, count, add, setQty, clear }}>{children}</Ctx.Provider>;
}

export function useCart() {
  const c = useContext(Ctx);
  if (!c) throw new Error("useCart fuori da CartProvider");
  return c;
}
