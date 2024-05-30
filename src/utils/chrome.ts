export const sendMessageForChrome = async (action: string) => {
  return await chrome.runtime.sendMessage({ action });
};
