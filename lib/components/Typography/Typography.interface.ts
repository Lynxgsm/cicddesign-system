import React from "react";
import { FontFamily } from "../../types/text/font-family";
import { Color } from "../../types/color-scheme";
import { TitleType } from "../../types/text/title";
import { UnitString } from "../../types/common/unit-string";
import { FontWeight } from "../../types/text/weight";

type TypographyVariant =
  | "body"
  | TitleType
  | "link"
  | "caption"
  | "subtitle"
  | "small";

export interface TypographyProps
  extends React.HTMLAttributes<HTMLParagraphElement> {
  colorScheme?: Color;
  fontFamily?: FontFamily;
  variant?: TypographyVariant;
  underline?: boolean;
  children: React.ReactNode;
  width?: UnitString;
  truncated?: boolean;
  weight?: FontWeight;
}

const keyMap: {[key: string]: string} = {
  body: 'p',
  link: 'span',
  caption: 'p',
  subtitle: 'p',
  small: 'small'
}

export const map = (key: TypographyVariant = "body") => keyMap[key] ? keyMap[key] : key
