"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import MenuItem from "@mui/material/MenuItem";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { alpha, type SxProps, type Theme } from "@mui/material/styles";
import { fluidFooterFormHelper } from "@/theme/page-section";
import { pxToRem } from "@/utils/px-to-rem";
import Image from "next/image";
export type FooterContactFormProps = {
  /** Applied to the outer `Card` (e.g. footer overlap / z-index). */
  sx?: import("@mui/material/styles").SxProps<import("@mui/material/styles").Theme>;
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
};

function FieldLabel({
  htmlFor,
  children,
  sx
}: {
  htmlFor: string;
  children: React.ReactNode;
  sx?: SxProps<Theme>;
}) {
  return (
    <Typography
      component="label"
      htmlFor={htmlFor}
      variant="body2"
      sx={[
        (theme) => ({
          display: "block",
          mb: 0.75,
          fontFamily: 'var(--font-inter), system-ui, sans-serif',
          fontSize: pxToRem(14),
          fontWeight: 600,
          color: alpha(theme.palette.primary.main, 0.9)
        }),
        ...(sx === undefined ? [] : Array.isArray(sx) ? sx : [sx])
      ]}
    >
      {children}
    </Typography>
  );
}

/**
 * “Stay Connected” contact card from Figma (`1:6912`) — fixed labels above inputs (no floating label),
 * spacing between field groups; uses global `MuiOutlinedInput` / `MuiSelect` theme overrides.
 */
export default function FooterContactForm({ sx, onSubmit }: FooterContactFormProps) {
  const uid = React.useId();
  const fid = (name: string) => `${name}${uid}`;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit?.(e);
  };

  return (
    <Box>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          maxWidth: "31.25rem",
          height: { xs: 36, md: 48 },
          minHeight: { xs: 36, md: 48 },
          mb: 2
        }}
      >
        <Image
          alt=""
          src="/images/footer-above-icon.png"
          fill
          sizes="(max-width: 900px) 90vw, 500px"
          style={{ objectFit: "contain", objectPosition: "center" }}
        />
      </Box>
      <Card
        component="form"
        noValidate
        onSubmit={handleSubmit}
        sx={[
          (theme) => ({
            position: "relative",
            zIndex: 2,
            borderRadius: "18px",
            p: { xs: 2.3, md: 2.8 },
            boxShadow: `0 12px 40px ${alpha(theme.palette.secondary.main, 0.18)}`,
            width: "100%",
            maxWidth: "31.25rem",
            minWidth: 0,
            alignSelf: "start",
            bgcolor: alpha('#fff', 0.9)
          }),
          ...(sx === undefined ? [] : Array.isArray(sx) ? sx : [sx])
        ]}
      >

        <Stack spacing={2}>
          <Box>
            <FieldLabel
              htmlFor={fid("name")}
              sx={{ fontFamily: 'var(--font-poppins), var(--font-inter), system-ui, sans-serif' }}
            >
              Name
            </FieldLabel>
            <TextField
              id={fid("name")}
              name="name"
              autoComplete="name"
              fullWidth
              size="small"
              variant="outlined"
              hiddenLabel
            />
          </Box>

          <Box>
            <FieldLabel htmlFor={fid("phone")}>Phone</FieldLabel>
            <TextField
              id={fid("phone")}
              name="phone"
              type="tel"
              autoComplete="tel"
              fullWidth
              size="small"
              variant="outlined"
              hiddenLabel
              helperText="We strongly recommend adding a phone number. This will help verify your account and keep it safe."
              FormHelperTextProps={{
                sx: (theme) => ({
                  color: alpha(theme.palette.text.secondary, 0.95),
                  fontFamily: 'var(--font-inter), system-ui, sans-serif',
                  fontSize: fluidFooterFormHelper,
                  lineHeight: 1.35
                })
              }}
            />
          </Box>

          <Box>
            <FieldLabel htmlFor={fid("email")}>Email</FieldLabel>
            <TextField
              id={fid("email")}
              name="email"
              type="email"
              autoComplete="email"
              fullWidth
              size="small"
              variant="outlined"
              hiddenLabel
            />
          </Box>

          <Box>
            <FieldLabel htmlFor={fid("country")}>Country</FieldLabel>
            <TextField
              id={fid("country")}
              name="country"
              fullWidth
              size="small"
              variant="outlined"
              hiddenLabel
              select
              defaultValue=""
              SelectProps={{
                displayEmpty: true,
                renderValue: (value) =>
                  value === "" ? (
                    <Typography component="span" variant="body2" sx={(theme) => ({ color: theme.palette.text.secondary })}>
                      Select country
                    </Typography>
                  ) : value === "IN" ? (
                    "India"
                  ) : (
                    "Other"
                  )
              }}
            >
              <MenuItem value="" disabled>
                Select country
              </MenuItem>
              <MenuItem value="IN">India</MenuItem>
              <MenuItem value="OTHER">Other</MenuItem>
            </TextField>
          </Box>

          <Box>
            <FieldLabel htmlFor={fid("topic")}>What would you like guidance on?</FieldLabel>
            <TextField
              id={fid("topic")}
              name="topic"
              fullWidth
              size="small"
              variant="outlined"
              hiddenLabel
              select
              defaultValue=""
              SelectProps={{
                displayEmpty: true,
                renderValue: (value) =>
                  value === "" ? (
                    <Typography component="span" variant="body2" sx={(theme) => ({ color: theme.palette.text.secondary })}>
                      Select a topic
                    </Typography>
                  ) : value === "general" ? (
                    "General guidance"
                  ) : (
                    "Programs"
                  )
              }}
            >
              <MenuItem value="" disabled>
                Select a topic
              </MenuItem>
              <MenuItem value="general">General guidance</MenuItem>
              <MenuItem value="programs">Programs</MenuItem>
            </TextField>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={(theme) => ({
                mt: 1.5,
                py: 1.125,
                boxShadow: "none",
                margin: 'auto',

                "&:hover": { bgcolor: theme.palette.primary.dark, boxShadow: "none" }
              })}
            >
              Submit
            </Button>
          </Box>

        </Stack>
      </Card>
    </Box>

  );
}
