export function buildReceiptFixture({ repository, pullRequestNumber, inputTokens, outputTokens }) {
  const totalTokens = inputTokens + outputTokens;
  return {
    repository,
    pullRequestNumber,
    inputTokens,
    outputTokens,
    totalTokens,
    receiptStatus: totalTokens > 0 ? "attributed" : "unattributed",
  };
}

export function summarizeReceiptFixture(receipt) {
  return `${receipt.repository}#${receipt.pullRequestNumber}: ${receipt.totalTokens} tokens`;
}
