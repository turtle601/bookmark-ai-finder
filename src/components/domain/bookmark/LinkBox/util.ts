export const getFaviconUrl = (url: string) => {
  return `https://icons.duckduckgo.com/ip3/${new URL(url).hostname}.ico`;
};
