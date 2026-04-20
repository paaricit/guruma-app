"use client";

import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  IconButton,
  Stack,
  Typography,
  useMediaQuery
} from "@mui/material";
import { alpha, useTheme } from "@mui/material/styles";
import {
  sessionsGuidelinesModalCopy,
  type SessionsGuidelinesModalVariant
} from "@/modules/sessions/content/sessions-guidelines-modals";
import { sessionsFluidBody } from "@/theme/page-section";
import { unitScale } from "@/utils/unit-scale";

export type SessionsGuidelinesModalProps = {
  open: boolean;
  onClose: () => void;
  /** Fire after close animation so parent can clear `variant` without layout flash. */
  onExited?: () => void;
  variant: SessionsGuidelinesModalVariant | null;
};

const titleFontSize = {
  xs: unitScale(22),
  sm: unitScale(26),
  md: unitScale(32)
} as const;

/**
 * Participant guidelines modal — Online (Figma `295:1947`) vs Offline (`281:3720`): shared shell, distinct top accent + icon treatment.
 */
export function SessionsGuidelinesModal({ open, onClose, onExited, variant }: SessionsGuidelinesModalProps) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"), { noSsr: true, defaultMatches: false });
  const active = variant != null ? sessionsGuidelinesModalCopy[variant] : null;
  const isOnline = variant === "online";

  const accent = isOnline ? theme.palette.primary.main : theme.palette.guru.warm;
  const ink = theme.palette.primary.dark;
  const bodyMuted = alpha(theme.palette.text.primary, 0.78);
  const markerBg = isOnline ? alpha(theme.palette.primary.main, 0.12) : alpha(theme.palette.guru.warm, 0.22);

  return (
    <Dialog
      open={open && variant != null}
      onClose={onClose}
      fullScreen={fullScreen}
      fullWidth
      maxWidth="md"
      scroll="paper"
      aria-labelledby="sessions-guidelines-modal-title"
      slotProps={{
        root: {
          sx: {
            zIndex: theme.zIndex.modal
          }
        },
        transition: {
          onExited
        },
        backdrop: {
          sx: {
            bgcolor: alpha(theme.palette.common.black, 0.45)
          }
        },
        paper: {
          sx: {
            position: "relative",
            overflow: "hidden",
            borderRadius: fullScreen ? 0 : unitScale(19),
            maxHeight: fullScreen ? "100%" : "min(92vh, 900px)",
            borderTop: `${unitScale(4)} solid`,
            borderColor: accent,
            boxShadow: fullScreen ? "none" : theme.shadows[8]
          }
        }
      }}
    >
      {active ? (
        <>
          <IconButton
            type="button"
            onClick={onClose}
            aria-label="Close guidelines"
            sx={{
              position: "absolute",
              top: { xs: unitScale(8), sm: unitScale(12) },
              right: { xs: unitScale(8), sm: unitScale(12) },
              zIndex: 2,
              color: ink,
              bgcolor: alpha(theme.palette.common.white, 0.85),
              border: `1px solid ${alpha(theme.palette.text.primary, 0.1)}`,
              "&:hover": {
                bgcolor: alpha(theme.palette.common.white, 0.98)
              }
            }}
          >
            <CloseRoundedIcon sx={{ fontSize: { xs: unitScale(24), sm: unitScale(26) } }} />
          </IconButton>

          <DialogContent
            sx={{
              pt: { xs: unitScale(20), sm: unitScale(24), md: unitScale(28) },
              pb: { xs: 2, sm: 2.5 },
              px: { xs: unitScale(18), sm: unitScale(24), md: unitScale(28) }
            }}
          >
            <Stack direction="row" alignItems="flex-start" spacing={1.5} sx={{ mb: { xs: 2, sm: 2.5 }, pr: { xs: 4, sm: 5 } }}>
              <Box
                sx={{
                  flexShrink: 0,
                  mt: { xs: 0.25, sm: 0.35 },
                  width: { xs: unitScale(44), sm: unitScale(48), md: unitScale(52) },
                  height: { xs: unitScale(44), sm: unitScale(48), md: unitScale(52) },
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  bgcolor: markerBg,
                  color: ink
                }}
              >
                {isOnline ? (
                  <VideocamOutlinedIcon sx={{ fontSize: { xs: unitScale(24), sm: unitScale(26) } }} />
                ) : (
                  <LocationOnOutlinedIcon sx={{ fontSize: { xs: unitScale(24), sm: unitScale(26) } }} />
                )}
              </Box>
              <Box sx={{ minWidth: 0 }}>
                <Typography
                  id="sessions-guidelines-modal-title"
                  component="h2"
                  sx={{
                    fontFamily: 'var(--font-forum), serif',
                    fontWeight: 400,
                    fontSize: titleFontSize,
                    lineHeight: { xs: 1.15, md: 1.12 },
                    color: ink
                  }}
                >
                  {active.title}
                </Typography>
                {active.intro ? (
                  <Typography
                    sx={{
                      mt: { xs: 1.25, sm: 1.5 },
                      fontFamily: 'var(--font-inter), system-ui, sans-serif',
                      fontSize: sessionsFluidBody,
                      lineHeight: { xs: 1.55, sm: 1.58, md: 1.6 },
                      color: bodyMuted
                    }}
                  >
                    {active.intro}
                  </Typography>
                ) : null}
              </Box>
            </Stack>

            <Stack spacing={{ xs: 3, sm: 3.5 }}>
              {active.blocks.map((block, blockIndex) => (
                <Box key={`guidelines-block-${blockIndex}`}>
                  {block.subtitle ? (
                    <Typography
                      component="h3"
                      sx={{
                        fontFamily: 'var(--font-inter), system-ui, sans-serif',
                        fontWeight: 700,
                        fontSize: sessionsFluidBody,
                        color: ink,
                        mb: { xs: 1.5, sm: 1.75 },
                        letterSpacing: "0.02em"
                      }}
                    >
                      {block.subtitle}
                    </Typography>
                  ) : null}
                  <Stack component="ul" spacing={{ xs: 1.75, sm: 2 }} sx={{ m: 0, p: 0, listStyle: "none" }}>
                    {block.bullets.map((line, i) => (
                      <Box
                        component="li"
                        key={`${blockIndex}-${i}`}
                        sx={{
                          display: "flex",
                          gap: { xs: unitScale(12), sm: 2 },
                          alignItems: "flex-start"
                        }}
                      >
                        <Box
                          component="span"
                          sx={{
                            flexShrink: 0,
                            mt: { xs: unitScale(2), sm: 0.2 },
                            width: { xs: unitScale(30), sm: unitScale(32) },
                            height: { xs: unitScale(30), sm: unitScale(32) },
                            borderRadius: "50%",
                            display: "inline-flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontFamily: 'var(--font-inter), system-ui, sans-serif',
                            fontSize: sessionsFluidBody,
                            fontWeight: 700,
                            bgcolor: markerBg,
                            color: ink
                          }}
                        >
                          {i + 1}
                        </Box>
                        <Typography
                          sx={{
                            fontFamily: 'var(--font-inter), system-ui, sans-serif',
                            fontSize: sessionsFluidBody,
                            lineHeight: { xs: 1.58, sm: 1.62, md: 1.65 },
                            color: alpha(theme.palette.text.primary, 0.88),
                            pt: { xs: 0.15, sm: 0 },
                            flex: 1,
                            minWidth: 0
                          }}
                        >
                          {line}
                        </Typography>
                      </Box>
                    ))}
                  </Stack>
                </Box>
              ))}
            </Stack>
          </DialogContent>

          <DialogActions
            sx={{
              px: { xs: unitScale(18), sm: unitScale(24), md: unitScale(28) },
              pb: { xs: unitScale(20), sm: unitScale(22), md: unitScale(24) },
              pt: 0,
              justifyContent: { xs: "stretch", sm: "flex-end" }
            }}
          >
            <Button
              type="button"
              variant="contained"
              fullWidth={fullScreen}
              onClick={onClose}
              sx={{
                bgcolor: ink,
                color: theme.palette.common.white,
                fontWeight: 700,
                letterSpacing: "0.06em",
                px: { xs: 3, sm: 4 },
                py: { xs: unitScale(12), sm: 1.25 },
                fontSize: sessionsFluidBody,
                borderRadius: Number(theme.shape.borderRadius) * 1.25,
                maxWidth: { sm: unitScale(280) },
                "&:hover": {
                  bgcolor: alpha(ink, 0.92)
                }
              }}
            >
              Got it
            </Button>
          </DialogActions>
        </>
      ) : null}
    </Dialog>
  );
}
