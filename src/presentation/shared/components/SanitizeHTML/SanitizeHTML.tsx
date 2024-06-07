import { HTMLAttributes, createElement } from "react";

import sanitize from "sanitize-html";

type SanitazeHTMLProps = {
  tag: string;
  children: string;
} & HTMLAttributes<HTMLElement>

export const SanitizeHTML = ({ tag, children, ...rest}: SanitazeHTMLProps) => {
  const sanitazeHTML = sanitize(children, {
    allowedTags: ['b', 'i', 'em', 'strong']
  });

  return createElement(tag, rest, sanitazeHTML)
}