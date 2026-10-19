module.exports = {
  name: 'workflow-optimizations',
  title: 'Workflow optimizations',
  repo: '0trustissues/workflow-optimizations',   // powers slide comments (GitHub issues)
  gateway: 'https://api.fslides.dev',    // sign-in broker for commenting on the published deck
  slidesDir: 'slides',
  style: 'elastic-web',

  // Slide filenames in order, relative to the slides/ directory
  slides: [
    'cover.html',
  ],

  // Human-readable labels for the overview panel (must match slides array length)
  labels: [
    'Cover',
  ],

  disabled: [],
};
