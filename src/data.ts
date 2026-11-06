import { FaDesktop } from "react-icons/fa";
import type { IconType } from "react-icons";
import { SiApple } from "react-icons/si";

export type TaskBarItem = {
  name: string;
  tooltip: string;
  shouldShow: boolean;
  display: "icon" | "text" | "both";
  text?: string;
  icon?: IconType;
};

export const leftTaskBarItems: TaskBarItem[] = [
  {
    name: "Apple",
    tooltip: "Apple Menu",
    shouldShow: true,
    display: "icon",
    icon: SiApple,
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
    name: "Window",
    tooltip: "Window",
    shouldShow: true,
    display: "text",
    text: "Window",
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

export const rightTaskBarItems = (currentTime: string): TaskBarItem[] => [
  {
    name: "Time",
    tooltip: "Current Time",
    shouldShow: true,
    display: "text",
    text: currentTime,
  },
  {
    name: "Finder",
    tooltip: "Application Menu",
    shouldShow: true,
    display: "both",
    icon: FaDesktop,
    text: "Finder",
  },
];
