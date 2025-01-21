"use client";

import {create} from "zustand";

interface DeviceState {
  pc: boolean;
  tablet: boolean;
  mobile: boolean;
  updateDeviceState: (width: number) => void;
}

export const useDeviceStore = create<DeviceState>((set) => ({
  pc: false,
  tablet: false,
  mobile: false,
  updateDeviceState: (width) => {
    set({
      pc: width >= 932,
      tablet: width >= 768 && width <= 931,
      mobile: width >= 320 && width <= 767,
    });
  },
}));
