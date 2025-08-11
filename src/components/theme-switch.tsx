// components/ui/theme-switch.tsx
import { Switch } from "@/components/ui/switch";
import { useTheme } from "@/components/theme-provider";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="flex items-center space-x-2">
      <Switch
        className="scale-125 data-[state=checked]:bg-gray-400"
        checked={theme === "dark"}
        onCheckedChange={toggleTheme}
      />
    </div>
  );
}
