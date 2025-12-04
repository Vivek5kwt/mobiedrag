// engine/DynamicRenderer.js
import React from "react";
import Header2 from "../components/Header2";

const componentMap = {
  "header_2_mobile": Header2,
  // add other mappings here
};

function inferMobileVariantFromSection(section) {
  // 1) Title-based hints (most reliable in your posted payload)
  const titleCandidates = [
    section?.title,
    section?.properties?.title,
    section?.properties?.component?.title,
    section?.properties?.props?.title
  ].filter(Boolean);

  for (const t of titleCandidates) {
    if (typeof t === "string" && /mobile/i.test(t)) return true;
    // sometimes title uses underscore or dash
    if (typeof t === "string" && /_mobile|mobile_/i.test(t)) return true;
  }

  // 2) Props-based heuristic: mobile header often contains specific small-screen props
  const p = section?.props || section?.properties?.props || section?.properties?.props?.properties;
  if (p) {
    // check for mobile-looking keys / values (notificationIconSize, searchBarInput, marginTop typical)
    if (p.searchAndIcons?.notificationIconSize || p.searchAndIcons?.placeholderColor) return true;
    if (p.style && (p.style.searchBar || p.style.searchBarInput || p.style.searchContainer?.marginTop)) return true;
  }

  // 3) Lastly check component.const vs known mapping names
  const compConst = section?.component || section?.properties?.component?.const;
  if (typeof compConst === "string" && /header_2_mobile/i.test(compConst)) return true;

  return false;
}

export default function DynamicRenderer({ section }) {
  try {
    console.log("🔍 DynamicRenderer section:", JSON.stringify(section, null, 2));

    // Extract raw component identifier (handle both shapes)
    let componentName = "";
    if (section?.properties?.component?.const) {
      componentName = section.properties.component.const; // e.g. "header_2"
    } else if (section.component && typeof section.component === "string") {
      componentName = section.component;
    }

    console.log("📊 Raw component extracted:", componentName);

    // Normalize: if the component is header_2 but section looks like mobile, map to header_2_mobile
    if (componentName === "header_2" || componentName === "Header_2" || /^header_2$/i.test(componentName)) {
      const isMobile = inferMobileVariantFromSection(section);
      console.log(`🕵️‍♂️ header_2 detected — mobile hint: ${isMobile}`);
      if (isMobile) componentName = "header_2_mobile";
    }

    // Final normalization to lowercase and replace spaces (safety)
    componentName = String(componentName || "").toLowerCase();

    console.log("📊 Normalized component name:", componentName);
    const Component = componentMap[componentName];

    if (!Component) {
      console.log("❌ No component found for:", componentName);
      console.log("💡 Available components:", Object.keys(componentMap));
      return null;
    }

    // Pass the whole section so Header2 can handle both live and dummy formats
    return <Component section={section} />;
  } catch (err) {
    console.log("❌ DynamicRenderer error:", err);
    return null;
  }
}
