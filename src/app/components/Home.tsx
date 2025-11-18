"use client";

import { Container, Typography, Stack } from "@mui/material";

import { Op } from "@/utils/types";
import { OpCard } from "../common/Opcard";

type HomeProps = {
  ops: Op[];
  loading: boolean;
  error: string | null;
};

export const Home = ({ ops, loading, error }: HomeProps) => {
  return (
    <Container sx={{ py: 4 }}>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        justifyContent="space-between"
        alignItems={{ xs: "flex-start", sm: "center" }}
        spacing={1}
        sx={{ mb: 2 }}
      >
        <Typography variant="h4">Veryable Frontend Challenge</Typography>

        <Typography variant="h6" color="text.secondary">
          Count: {ops.length}
        </Typography>
      </Stack>

      {loading && <Typography>Loading...</Typography>}

      {error && <Typography>Error: {error}</Typography>}

      {!loading && !error && ops.length > 0 && (
        <Stack spacing={2}>
          {ops.map((op) => (
            <OpCard key={op.opId} op={op} />
          ))}
        </Stack>
      )}

      {!loading && !error && ops.length === 0 && (
        <Typography>No operations found.</Typography>
      )}
    </Container>
  );
};

export default Home;
