"use client";

import * as React from "react";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { Controller, useFormContext } from "react-hook-form";
import { Input, SxProps } from "@mui/material";

type TProps = {
  name: string;
  label?: string;
  sx?: SxProps;
};

export default function TBFileUploader({ name, label, sx }: TProps) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value, ...fields } }) => (
        <Button
          component="label"
          role={undefined}
          variant="contained"
          tabIndex={-1}
          startIcon={<CloudUploadIcon />}
          sx={{ ...sx }}
        >
          {label || "Upload file"}
          <Input
            type={name}
            {...fields}
            value={value?.fileName}
            onChange={(e) => {
              return onChange((e?.target as HTMLInputElement)?.files?.[0]);
            }}
            style={{ display: "none" }}
          />
        </Button>
      )}
    />
  );
}
