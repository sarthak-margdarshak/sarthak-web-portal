import PropTypes from "prop-types";
import { Link as RouterLink } from "react-router-dom";
// @mui
import { Box, Tooltip, Link, ListItemText } from "@mui/material";
//
import Iconify from "../../iconify";
//
import { StyledItem, StyledIcon, StyledDotIcon } from "./styles";

// ----------------------------------------------------------------------

NavItem.propTypes = {
  open: PropTypes.bool,
  active: PropTypes.bool,
  item: PropTypes.object,
  depth: PropTypes.number,
  isExternalLink: PropTypes.bool,
};

export default function NavItem({
  item,
  depth,
  open,
  active,
  isExternalLink,
  ...other
}) {
  const { title, path, icon, info, children, disabled, caption } = item;

  const subItem = depth !== 1;

  const renderContent = (
    <StyledItem
      depth={depth}
      active={active}
      disabled={disabled}
      caption={!!caption}
      {...other}
    >
      {icon && <StyledIcon>{icon}</StyledIcon>}

      {subItem && (
        <StyledIcon>
          <StyledDotIcon active={active && subItem} />
        </StyledIcon>
      )}

      <ListItemText
        primary={title}
        secondary={
          caption && (
            <Tooltip title={caption} placement="top-start">
              <span>{caption}</span>
            </Tooltip>
          )
        }
        primaryTypographyProps={{
          noWrap: true,
          component: "span",
          variant: active ? "subtitle2" : "body2",
        }}
        secondaryTypographyProps={{
          noWrap: true,
          variant: "caption",
        }}
      />

      {info && (
        <Box component="span" sx={{ lineHeight: 0 }}>
          {info}
        </Box>
      )}

      {!!children && (
        <Iconify
          width={16}
          icon={
            open ? "eva:arrow-ios-downward-fill" : "eva:arrow-ios-forward-fill"
          }
          sx={{ ml: 1, flexShrink: 0 }}
        />
      )}
    </StyledItem>
  );

  const renderItem = () => {
    // ExternalLink
    if (isExternalLink)
      return (
        <Link href={path} target="_blank" rel="noopener" underline="none">
          {renderContent}
        </Link>
      );

    // Has child
    if (children) {
      return renderContent;
    }

    // Default
    return (
      <Link component={RouterLink} to={path} underline="none">
        {renderContent}
      </Link>
    );
  };

  return <> {renderItem()} </>;
}
