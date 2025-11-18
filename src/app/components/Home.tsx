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
    <Container sx={{ py: 8 }}>
      <Stack
        direction={{ sm: "row" }}
        justifyContent="space-between"
        sx={{ marginBottom: "40px" }}
      >
        <img
          src={`https://cdn.prod.website-files.com/656f7666617c2816db7ae5c9/6573259b6f073a124ae4d2dd_Veryable-Logo-Color.webp`}
          alt="logo"
          width={"150px"}
        />
        <Typography variant="h4">
          Samir's Veryable Frontend Challenge
        </Typography>

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
