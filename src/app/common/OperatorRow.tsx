"use client";

import { Operator } from "@/utils/types";
import { Button, Stack, Typography, Chip } from "@mui/material";

export const OperatorRow = ({ operator }: { operator: Operator }) => {
  const fullName = `${operator.firstName} ${operator.lastName}`;
  const reliabilityPercent = Math.round(operator.reliability * 100);

  return (
    <Stack direction="row" alignItems="center" justifyContent="space-between">
      <Stack spacing={0.5}>
        <Typography variant="subtitle1">{fullName}</Typography>

        <Stack direction="row" spacing={1} flexWrap="wrap">
          <Chip
            label={`Ops Completed: ${operator.opsCompleted}`}
            size="small"
          />
          <Chip label={`Reliability: ${reliabilityPercent}%`} size="small" />
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
