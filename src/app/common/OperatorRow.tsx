"use client";

import { combinedName, convertedPercent } from "@/utils/helpers";
import { Operator } from "@/utils/types";
import { Button, Stack, Typography, Chip } from "@mui/material";

export const OperatorRow = ({ operator }: { operator: Operator }) => {
  return (
    <Stack direction="row" alignItems="center" justifyContent="space-between">
      <Stack spacing={0.5}>
        <Typography variant="subtitle1">
          {combinedName(operator.firstName, operator.lastName)}
        </Typography>

        <Stack direction="row" spacing={1} flexWrap="wrap">
          <Chip
            label={`Operations Completed: ${operator.opsCompleted}`}
            size="small"
          />
          <Chip
            label={`Reliability: ${convertedPercent(operator.reliability)}%`}
            size="small"
          />
        </Stack>

        <Typography variant="body2" color="text.secondary">
          {operator.endorsements.join(" • ")}
        </Typography>
      </Stack>

      <Stack direction="row" spacing={1}>
        <Button variant="outlined" size="small">
          Check In
        </Button>
        <Button variant="contained" size="small">
          Check Out
        </Button>
      </Stack>
    </Stack>
  );
};
