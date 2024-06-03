interface Parameter {
  action: string;
  options?: {
    [key: string]: string;
  };
}

export const sendMessageForChrome = async ({ action, options }: Parameter) => {
  return await chrome.runtime.sendMessage({ action, ...options });
};
