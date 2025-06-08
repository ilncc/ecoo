import React from "react";
import { LucideIcon, icons } from "lucide-react";

/**
 * Универсальный компонент для отображения иконок из библиотеки Lucide React
 * Обеспечивает типобезопасность и fallback для несуществующих иконок
 */
interface IconProps {
  name: string; // Название иконки из Lucide React
  size?: number; // Размер иконки в пикселях
  className?: string; // CSS классы для стилизации
  fallback?: string; // Запасная иконка если основная не найдена
}

const Icon: React.FC<IconProps> = ({
  name,
  size = 24,
  className = "",
  fallback = "CircleAlert",
}) => {
  // Получаем компонент иконки из библиотеки lucide-react
  const LucideIcon = icons[name as keyof typeof icons] as LucideIcon;

  // Если иконка не найдена, используем fallback
  if (!LucideIcon) {
    const FallbackIcon = icons[fallback as keyof typeof icons] as LucideIcon;
    return <FallbackIcon size={size} className={className} />;
  }

  return <LucideIcon size={size} className={className} />;
};

export default Icon;
