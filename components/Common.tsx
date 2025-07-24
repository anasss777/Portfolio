import parse from "html-react-parser";

export const parseHTML = (html: string) => {
  return parse(
    html?.replace(
      /<ol>\s*(<li[^>]+data-list="bullet"[^>]*>[\s\S]*?<\/li>)+\s*<\/ol>/g,
      (match) => {
        return match.replace(/<ol>/, "<ul>").replace(/<\/ol>/, "</ul>");
      }
    )
  );
};
