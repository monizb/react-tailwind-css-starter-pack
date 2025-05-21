import React from "react";

const ICON_MAP = {
  violet: {
    stroke: "violet",
    circle: "stroke-violet-600",
    text: "text-violet-600",
    svgStroke: "#742AE9",
    bg: "bg-violet-600",
    outline: "outline-violet-600",
  },
  "violet-700": {
    stroke: "violet",
    circle: "stroke-violet-700",
    text: "text-violet-700",
    svgStroke: "#5E21C1",
    bg: "bg-violet-700",
    outline: "outline-violet-700",
  },
  white: {
    stroke: "gray",
    circle: "stroke-gray-900",
    text: "text-gray-900",
    svgStroke: "#101828",
    bg: "bg-white",
    outline: "outline-gray-200",
  },
  slategrey: {
    stroke: "slategrey",
    circle: "stroke-slate-700",
    text: "text-slate-700",
    svgStroke: "#667085",
    bg: "",
    outline: "",
  },
  emerald: {
    stroke: "emerald",
    circle: "stroke-emerald-700",
    text: "text-emerald-700",
    svgStroke: "#027A48",
    bg: "bg-emerald-700",
    outline: "outline-emerald-700",
  },
  amber: {
    stroke: "amber",
    circle: "stroke-amber-300",
    text: "text-gray-900",
    svgStroke: "#101828",
    bg: "bg-amber-300",
    outline: "outline-amber-300",
  },
  red: {
    stroke: "red",
    circle: "stroke-red-600",
    text: "text-white",
    svgStroke: "#D92D20",
    bg: "bg-red-600",
    outline: "outline-red-600",
  },
  "red-700": {
    circle: "stroke-red-700",
    text: "text-white",
    svgStroke: "#B42318",
    bg: "bg-red-700",
    outline: "outline-red-700",
  },
  "emerald-800": {
    circle: "stroke-emerald-800",
    text: "text-white",
    svgStroke: "#05603A",
    bg: "bg-emerald-800",
    outline: "outline-emerald-700",
  },
  "amber-400": {
    circle: "stroke-amber-400",
    text: "text-gray-900",
    svgStroke: "#B54708",
    bg: "bg-amber-400",
    outline: "outline-amber-300",
  },
  purple100: {
    circle: "stroke-purple-100",
    text: "text-violet-700",
    svgStroke: "#742AE9",
    bg: "bg-purple-100",
    outline: "outline-purple-100",
  },
  gray100: {
    circle: "stroke-gray-100",
    text: "text-gray-900",
    svgStroke: "#101828",
    bg: "bg-gray-100",
    outline: "outline-gray-500",
  },
  emerald100: {
    circle: "stroke-emerald-100",
    text: "text-emerald-800",
    svgStroke: "#05603A",
    bg: "bg-emerald-100",
    outline: "outline-emerald-300",
  },
  amber100: {
    circle: "stroke-amber-100",
    text: "text-gray-900",
    svgStroke: "#B54708",
    bg: "bg-amber-100",
    outline: "outline-amber-300",
  },
  red100: {
    circle: "stroke-red-100",
    text: "text-red-800",
    svgStroke: "#912018",
    bg: "bg-red-100",
    outline: "outline-red-100",
  },
  amber200: {
    circle: "stroke-amber-200",
    text: "text-white",
    svgStroke: "#FEC84B",
    bg: "bg-amber-200",
    outline: "outline-amber-200",
  },
  emerald200: {
    circle: "stroke-emerald-200",
    text: "text-white",
    svgStroke: "#6CE9A6",
    bg: "bg-emerald-200",
    outline: "outline-emerald-200",
  },
  red200: {
    circle: "stroke-red-200",
    text: "text-white",
    svgStroke: "#FDA29B",
    bg: "bg-red-200",
    outline: "outline-red-200",
  },
  gray300: {
    circle: "stroke-gray-300",
    text: "text-gray-400",
    svgStroke: "#D0D5DD",
    bg: "bg-gray-300",
    outline: "outline-gray-300",
  },
};

const getIconProps = (color, isGhost, isDestructive) => {
  // Fall back as much as possible
  if (isDestructive) return ICON_MAP["red"];
  if (isGhost && color && ICON_MAP[`${color}100`]) return ICON_MAP[`${color}100`];
  return ICON_MAP[color] || ICON_MAP["violet"];
};

const getSizeClasses = (size) => {
  switch (size) {
    case "xs":
      return {
        height: "h-6",
        padding: "px-2 py-[3px]",
        rounded: "rounded-md",
        text: "text-[11px] leading-[18px]",
        gap: "gap-1.5",
        icon: { width: 12, height: 12 },
      };
    case "sm":
      return {
        height: "h-7",
        padding: "px-2 py-[3px]",
        rounded: "rounded-md",
        text: "text-xs leading-tight",
        gap: "gap-1.5",
        icon: { width: 12, height: 12 },
      };
    case "md":
      return {
        height: "h-8",
        padding: "px-2.5 py-[3px]",
        rounded: "rounded-lg",
        text: "text-sm leading-snug",
        gap: "gap-1.5",
        icon: { width: 16, height: 16 },
      };
    case "lg":
      return {
        height: "h-10",
        padding: "px-3 py-[3px]",
        rounded: "rounded-[10px]",
        text: "text-base leading-relaxed",
        gap: "gap-1.5",
        icon: { width: 20, height: 20 },
      };
    case "xl":
      return {
        height: "h-12",
        padding: "px-3.5 py-[3px]",
        rounded: "rounded-xl",
        text: "text-lg leading-[30px]",
        gap: "gap-1.5",
        icon: { width: 24, height: 24 },
      };
    case "icon-xs":
      return { size: "size-6", padding: "p-1.5", rounded: "rounded-md", gap: "gap-2", icon: { width: 12, height: 12 } };
    case "icon-sm":
      return { size: "size-7", padding: "p-1.5", rounded: "rounded-md", gap: "gap-2", icon: { width: 14, height: 14 } };
    case "icon-md":
      return { size: "size-8", padding: "p-1.5", rounded: "rounded-lg", gap: "gap-2", icon: { width: 16, height: 16 } };
    case "icon-lg":
      return { size: "size-10", padding: "p-1.5", rounded: "rounded-[10px]", gap: "gap-2", icon: { width: 20, height: 20 } };
    case "icon-xl":
      return { size: "size-12", padding: "p-1.5", rounded: "rounded-xl", gap: "gap-2", icon: { width: 24, height: 24 } };
    default:
      return {
        height: "h-8",
        padding: "px-2.5 py-[3px]",
        rounded: "rounded-lg",
        text: "text-sm leading-snug",
        gap: "gap-1.5",
        icon: { width: 16, height: 16 },
      };
  }
};

const ICON_SVGs = {
  circle: (props) => (
    <svg
      width={props.iconSize}
      height={props.iconSize}
      viewBox={`0 0 ${props.iconSize} ${props.iconSize}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
    >
      <g clipPath={`url(#clip0)`}>
        <circle
          cx={props.iconSize / 2}
          cy={props.iconSize / 2}
          r={(props.iconSize - 2) / 2}
          stroke={props.stroke}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width={props.iconSize} height={props.iconSize} fill="white" />
        </clipPath>
      </defs>
    </svg>
  ),
  ring: (props) => (
    <svg
      width={props.iconSize}
      height={props.iconSize}
      viewBox={`0 0 ${props.iconSize} ${props.iconSize}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
    >
      <g clipPath={`url(#clip1)`}>
        <circle
          cx={props.iconSize / 2}
          cy={props.iconSize / 2}
          r={(props.iconSize - 2) / 2}
          stroke={props.stroke}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip1">
          <rect width={props.iconSize} height={props.iconSize} fill="white" />
        </clipPath>
      </defs>
    </svg>
  ),
  // Add more SVG variants as necessary!
};

const HyButton = ({
  label = "Button",
  color = "violet",
  size = "md",
  isDestructive = false,
  isGhost = false,
  leftIcon,
  rightIcon,
  isVisible = true,
  onClick,
  disabled = false,
  className = "",
  role = "button",
  tabIndex = 0,
  ...props
}) => {
  if (!isVisible) return null;
  const semanticTag = props.type === "submit" ? "button" : "button";
  const iconProps = getIconProps(color, isGhost, isDestructive);
  const sizeProps = getSizeClasses(size);
  const outlineColor = isGhost ? "outline-gray-200" : iconProps.outline || "";
  const background = isGhost ? "bg-white" : iconProps.bg || "";
  // Hover state on ghost and icon
  const baseClasses = [
    sizeProps.height,
    sizeProps.size,
    sizeProps.padding,
    sizeProps.rounded,
    background,
    outlineColor,
    "inline-flex justify-center items-center",
    sizeProps.gap,
    "overflow-hidden",
    "outline outline-1 outline-offset-[-1px]",
    !disabled && "cursor-pointer select-none",
    className,
    "transition duration-150",
    !disabled && "hover:bg-opacity-90 hover:scale-[1.02] active:scale-[.98]",
    disabled && "opacity-50 pointer-events-none",
  ]
    .filter(Boolean)
    .join(" ");

  // Which icon?
  const iconVariant = ICON_SVGs.circle;

  // SVG size logic
  let iconSize = 12;
  if (size === "sm" || size === "xs") iconSize = 12;
  else if (size === "md" || size === "icon-md") iconSize = 16;
  else if (size === "lg" || size === "icon-lg") iconSize = 20;
  else if (size === "xl" || size === "icon-xl") iconSize = 24;

  return React.createElement(
    semanticTag,
    {
      className: baseClasses,
      onClick: !disabled ? onClick : undefined,
      disabled,
      role,
      tabIndex,
      ...props,
    },
    <>
      <span data-svg-wrapper className="relative select-none">
        {leftIcon !== undefined
          ? leftIcon
          : iconVariant({ iconSize, stroke: iconProps.svgStroke, className: "" })}
      </span>
      {label && (
        <span
          className={
            [
              "justify-start font-medium font-['Inter']",
              iconProps.text || "",
              sizeProps.text,
              isGhost || color === "white" ? "" : "text-white",
              isGhost && iconProps.text,
              className?.includes("underline") ? "underline" : "",
            ].filter(Boolean).join(" ")
          }
        >
          {label}
        </span>
      )}
      <span data-svg-wrapper className="relative select-none">
        {rightIcon !== undefined
          ? rightIcon
          : iconVariant({ iconSize, stroke: "#344054", className: "" })}
      </span>
    </>
  );
};

export default HyButton;