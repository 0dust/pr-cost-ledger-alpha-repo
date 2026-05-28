# PR Cost Ledger Alpha Repo

This repository is a controlled target for the PR Cost Ledger one-repo alpha.

Use it to create one real GitHub pull request that can be imported by the GitHub App backfill path and then attributed with a metadata-only collector batch.

## Files

- `src/receipt-fixture.js`: small deterministic code used to create meaningful changed LOC.
- `docs/alpha-pr-notes.md`: notes for the alpha PR.

## Alpha Flow

1. Push this repo to GitHub.
2. Install the PR Cost Ledger GitHub App on this repo only.
3. Open a pull request from `alpha/add-cost-receipt-fixture` into `main`.
4. Merge the pull request.
5. Run PR Cost Ledger bounded backfill for this repository and the merge date.
6. Send a metadata-only collector batch using the merged PR number, branch name, and head SHA.
