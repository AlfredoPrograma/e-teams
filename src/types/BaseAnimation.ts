import { Variant } from "framer-motion";

type BaseAnimationVariants = "initial" | "animate" | "exit";
type BaseAnimation = Partial<Record<BaseAnimationVariants, Variant>>;

export type { BaseAnimationVariants, BaseAnimation };
