interface IParameter {
  action: string;
  options?: {
    [key: string]: string;
  };
}

export const sendMessageForChrome = async ({ action, options }: IParameter) => {
  return await chrome.runtime.sendMessage({ action, ...options });
};
