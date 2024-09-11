import { atom } from "nanostores";

const count = atom(0);

const increment = () => count.set(count.get() + 1);

export { count, increment };
