export default function decorate(block) {
  // Add the required session classes
  block.classList.add('session-two', 'session-practice');

  // Get the rows authored in da.live
  const rows = [...block.children];

  // Create the block structure
  rows.forEach((row) => {
    const columns = [...row.children];

    columns.forEach((column) => {
      column.classList.add('eds-enablement-block-column');
    });
  });
}
