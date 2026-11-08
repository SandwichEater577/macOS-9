import type { ElementType } from "react";
import RainbowApple from "./RainbowApple";
import FinderIcon from "./FinderIcon";

export type TaskBarItem = {
  name: string;
  tooltip: string;
  shouldShow: boolean;
  display: "icon" | "text" | "both";
  text?: string;
  icon?: ElementType;
  date?: string;
};

export type TaskBarWindowsItem = {
  ActionID: number;
  icon?: ElementType;
  text: string;
  set: number;
  shortcut?: string;
  disabled?: boolean;
  hasSubmenu?: boolean;
  checked?: boolean;
  pointActionID?: number;
  openWindow?: number;
};

export const leftTaskBarItems: TaskBarItem[] = [
  {
    name: "Apple",
    tooltip: "Apple Menu",
    shouldShow: true,
    display: "icon",
    icon: RainbowApple,
  },
  {
    name: "File",
    tooltip: "File",
    shouldShow: true,
    display: "text",
    text: "File",
  },
  {
    name: "Edit",
    tooltip: "Edit",
    shouldShow: true,
    display: "text",
    text: "Edit",
  },
  {
    name: "View",
    tooltip: "View",
    shouldShow: true,
    display: "text",
    text: "View",
  },
  {
    name: "Special",
    tooltip: "Special",
    shouldShow: true,
    display: "text",
    text: "Special",
  },
  {
    name: "Help",
    tooltip: "Help",
    shouldShow: true,
    display: "text",
    text: "Help",
  },
];

export const rightTaskBarItems = (
  currentTime: string,
  currentDate: string,
): TaskBarItem[] => [
  {
    name: "Time",
    tooltip: "Current Time",
    shouldShow: true,
    display: "text",
    text: currentTime,
    date: currentDate,
  },
  {
    name: "FinderToggle",
    tooltip: "Toggle Finder Text",
    shouldShow: true,
    display: "text",
    text: "|",
  },
  {
    name: "Finder",
    tooltip: "Application Menu",
    shouldShow: true,
    display: "both",
    icon: FinderIcon,
    text: "Finder",
  },
];

export const taskBarMenus: Record<string, TaskBarWindowsItem[]> = {
  Apple: [
    { ActionID: 1, text: "About This Computer", set: 1 },
    { ActionID: 2, text: "Apple System Profiler", set: 2, icon: FinderIcon },
    { ActionID: 3, text: "Calculator", set: 2, icon: FinderIcon },
    { ActionID: 4, text: "Chooser", set: 2, icon: FinderIcon },
    {
      ActionID: 5,
      text: "Control Panels",
      set: 2,
      icon: FinderIcon,
      hasSubmenu: true,
      pointActionID: 100,
    },
    {
      ActionID: 6,
      text: "Favorites",
      set: 2,
      icon: FinderIcon,
      hasSubmenu: true,
      pointActionID: 101,
    },
    { ActionID: 7, text: "Key Caps", set: 2, icon: FinderIcon },
    { ActionID: 8, text: "Network Browser", set: 2, icon: FinderIcon },
    {
      ActionID: 9,
      text: "Recent Applications",
      set: 2,
      icon: FinderIcon,
      hasSubmenu: true,
      pointActionID: 102,
    },
    { ActionID: 10, text: "Scrapbook", set: 2, icon: FinderIcon },
    { ActionID: 11, text: "Sherlock 2", set: 2, icon: FinderIcon },
    { ActionID: 12, text: "Stickies", set: 2, icon: FinderIcon },
  ],
  File: [
    { ActionID: 20, text: "New Folder", set: 1, shortcut: "⌘N" },
    { ActionID: 21, text: "Open", set: 1, shortcut: "⌘O", disabled: true },
    { ActionID: 22, text: "Print", set: 1, shortcut: "⌘P", disabled: true },
    {
      ActionID: 23,
      text: "Move To Trash",
      set: 1,
      shortcut: "⌘⌫",
      disabled: true,
    },
    {
      ActionID: 24,
      text: "Close Window",
      set: 1,
      shortcut: "⌘W",
      disabled: true,
    },
    {
      ActionID: 25,
      text: "Get Info",
      set: 2,
      hasSubmenu: true,
      pointActionID: 200,
    }, // Fixed 150 -> 200
    {
      ActionID: 26,
      text: "Label",
      set: 2,
      hasSubmenu: true,
      pointActionID: 201,
    }, // Fixed 151 -> 201
    { ActionID: 27, text: "Duplicate", set: 2, shortcut: "⌘D", disabled: true },
    {
      ActionID: 28,
      text: "Make Alias",
      set: 2,
      shortcut: "⌘M",
      disabled: true,
    },
    { ActionID: 29, text: "Add To Favorites", set: 2, disabled: true },
    { ActionID: 30, text: "Put Away", set: 2, shortcut: "⌘Y", disabled: true },
    { ActionID: 31, text: "Encrypt", set: 2, disabled: true },
    { ActionID: 32, text: "Find...", set: 3, shortcut: "⌘F" },
    { ActionID: 33, text: "Search Internet...", set: 3, shortcut: "⌘H" },
    {
      ActionID: 34,
      text: "Show Original",
      set: 3,
      shortcut: "⌘R",
      disabled: true,
    },
    { ActionID: 35, text: "Page Setup...", set: 4, disabled: true },
    { ActionID: 36, text: "Print Desktop...", set: 4, disabled: true },
  ],
  Edit: [
    { ActionID: 40, text: "Undo", set: 1, shortcut: "⌘Z", disabled: true },
    { ActionID: 41, text: "Cut", set: 2, shortcut: "⌘X", disabled: true },
    { ActionID: 42, text: "Copy", set: 2, shortcut: "⌘C", disabled: true },
    { ActionID: 43, text: "Paste", set: 2, shortcut: "⌘V", disabled: true },
    { ActionID: 44, text: "Clear", set: 2, disabled: true },
    { ActionID: 45, text: "Select All", set: 3, shortcut: "⌘A" },
    { ActionID: 46, text: "Show Clipboard", set: 3 },
    { ActionID: 47, text: "Preferences...", set: 4 },
  ],
  View: [
    { ActionID: 50, text: "as Icons", set: 1 },
    { ActionID: 51, text: "as Buttons", set: 1, checked: true },
    { ActionID: 52, text: "as List", set: 1, disabled: true },
    { ActionID: 53, text: "as Window", set: 2, disabled: true },
    { ActionID: 54, text: "as Pop-up Window", set: 2, disabled: true },
    { ActionID: 55, text: "Clean Up", set: 3 },
    {
      ActionID: 56,
      text: "Arrange",
      set: 3,
      hasSubmenu: true,
      pointActionID: 300,
    }, // Fixed 250 -> 300
    { ActionID: 57, text: "Reset Column Positions", set: 3, disabled: true },
    { ActionID: 58, text: "View Options...", set: 4 },
  ],
  Special: [
    { ActionID: 60, text: "Empty Trash...", set: 1, disabled: true },
    { ActionID: 61, text: "Eject", set: 2, shortcut: "⌘E", disabled: true },
    { ActionID: 62, text: "Erase Disk...", set: 2, disabled: true },
    { ActionID: 63, text: "Sleep", set: 3 },
    { ActionID: 64, text: "Restart", set: 3 },
    { ActionID: 65, text: "Shut Down", set: 3 },
  ],
  Help: [
    { ActionID: 70, text: "Help Center", set: 1 },
    { ActionID: 71, text: "Show Balloons", set: 2 },
    { ActionID: 72, text: "Mac Help", set: 3, shortcut: "⌘?" },
  ],
};

export const subMenus: Record<number, TaskBarWindowsItem[]> = {
  100: [
    { ActionID: 110, text: "Appearance", set: 1 },
    { ActionID: 111, text: "Date & Time", set: 1 },
    { ActionID: 112, text: "Extensions Manager", set: 1 },
    { ActionID: 113, text: "Monitors & Sound", set: 1 },
  ],
  101: [
    { ActionID: 150, text: "Macintosh HD", set: 1 },
    { ActionID: 151, text: "Apple Website", set: 1 },
  ],
  102: [
    { ActionID: 200, text: "SimpleText", set: 1 },
    { ActionID: 201, text: "Scrapbook", set: 1 },
  ],
  200: [
    { ActionID: 250, text: "General Information", set: 1 },
    { ActionID: 251, text: "Memory", set: 1 },
  ],
  201: [
    { ActionID: 300, text: "None", set: 1 },
    { ActionID: 301, text: "Essential", set: 1 },
    { ActionID: 302, text: "Hot", set: 1 },
    { ActionID: 303, text: "In Progress", set: 1 },
  ],
  300: [
    { ActionID: 350, text: "by Name", set: 1 },
    { ActionID: 351, text: "by Date", set: 1 },
    { ActionID: 352, text: "by Size", set: 1 },
  ],
};
