import CryptoJS from "crypto-js";

const STORAGE_KEY = "todos";
const SECRET_KEY = "mySecretKey123"; // Keep this secret or store in env

// Save state with encryption and timestamp
export const saveState = (state) => {
  try {
    const payload = {
      data: state,
      timestamp: Date.now()
    };

    const stringified = JSON.stringify(payload);
    const encrypted = CryptoJS.AES.encrypt(stringified, SECRET_KEY).toString();

    localStorage.setItem(STORAGE_KEY, encrypted);
  } catch (err) {
    console.warn("Failed to save state:", err);
  }
};

// Load state with decryption and expiration check
export const loadState = () => {
  try {
    const encrypted = localStorage.getItem(STORAGE_KEY);
    if (!encrypted) return undefined;

    const bytes = CryptoJS.AES.decrypt(encrypted, SECRET_KEY);
    const decrypted = bytes.toString(CryptoJS.enc.Utf8);
    const parsed = JSON.parse(decrypted);

    const expireDuration = 1000 * 60 * 60 * 24; // 24 hours
    const isExpired = Date.now() - parsed.timestamp > expireDuration;

    if (isExpired) {
      console.log("Expired data");
      localStorage.removeItem(STORAGE_KEY);
      return undefined;
    }

    return parsed.data;
  } catch (err) {
    console.warn("Failed to load state:", err);
    return undefined;
  }
};
