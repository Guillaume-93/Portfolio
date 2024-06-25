/* eslint-disable react-refresh/only-export-components */
import { useEffect, useMemo, useState } from "react";
import {
  Cloud,
  fetchSimpleIcons,
  renderSimpleIcon,
} from "react-icon-cloud";
import PropTypes from 'prop-types';

export const cloudProps = {
  containerProps: {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      paddingTop: 40,
    },
  },
  options: {
    reverse: true,
    depth: 1,
    wheelZoom: false,
    imageScale: 2,
    activeCursor: "default",
    tooltip: "native",
    initial: [0.1, -0.1],
    clickToFront: 500,
    tooltipDelay: 0,
    outlineColour: "#0000",
    maxSpeed: 0.04,
    minSpeed: 0.02,
  },
};

export const renderCustomIcon = (icon, isDarkMode) => {
  const bgHex = isDarkMode
    ? getComputedStyle(document.documentElement).getPropertyValue('--background-neutral-800').trim()
    : getComputedStyle(document.documentElement).getPropertyValue('--background-white').trim();
  
  const fallbackHex = isDarkMode
    ? getComputedStyle(document.documentElement).getPropertyValue('--text-white').trim()
    : getComputedStyle(document.documentElement).getPropertyValue('--text-neutral-600').trim();

  return renderSimpleIcon({
    icon,
    bgHex,
    fallbackHex,
    minContrastRatio: isDarkMode ? 2 : 1.2,
    size: 42,
    aProps: {
      href: undefined,
      target: undefined,
      rel: undefined,
      onClick: (e) => e.preventDefault(),
    },
  });
};

export default function IconCloud({ iconSlugs, isDarkMode }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchSimpleIcons({ slugs: iconSlugs }).then(setData);
  }, [iconSlugs]);

  const renderedIcons = useMemo(() => {
    if (!data) return null;

    return Object.values(data.simpleIcons).map((icon) =>
      renderCustomIcon(icon, isDarkMode),
    );
  }, [data, isDarkMode]);

  return (
    <Cloud {...cloudProps}>
      {renderedIcons}
    </Cloud>
  );
}

IconCloud.propTypes = {
  iconSlugs: PropTypes.arrayOf(PropTypes.string).isRequired,
  isDarkMode: PropTypes.bool.isRequired,
};
